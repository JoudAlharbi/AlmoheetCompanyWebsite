import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const portfolioPath = path.join(root, "lib/data/portfolio.ts");
const imagesDir = path.join(root, "public/portfolio/images");
const src = fs.readFileSync(portfolioPath, "utf8");

const categorySlugs = new Set([
  "stamps", "billboards", "stickers", "product-printing",
  "packaging", "identity", "exhibitions", "misc",
]);

const rawBlock = src.match(/const rawProjects: Project\[\] = \[([\s\S]*?)\];/)?.[1] ?? src;

const projects = [];
for (const m of rawBlock.matchAll(/slug: "([^"]+)"[\s\S]*?images: \[([\s\S]*?)\],\s*\n\s*year:/g)) {
  const imgs = [...m[2].matchAll(/img\("([^"]+)"\)/g)].map((x) => x[1]);
  projects.push({ slug: m[1], images: imgs });
}

const onDisk = fs.readdirSync(imagesDir).filter((f) => /\.jpe?g$/i.test(f)).sort();
const featured = new Set([
  "secret-brand-printed-packaging",
  "owl-cafe-branded-cups",
  "almoheet-exhibition-booth",
]);

const fileMap = new Map();
for (const p of projects) {
  for (const f of p.images) {
    if (!fileMap.has(f)) fileMap.set(f, p.slug);
  }
}

console.log("# Portfolio Verification Report\n");
console.log("## Image File → Project → Displayed\n");
console.log("| Image File | Assigned Project | Displayed |");
console.log("| ---------- | ---------------- | --------- |");

for (const f of onDisk.sort()) {
  const project = fileMap.get(f) ?? "—";
  let displayed = "No";
  if (project !== "—") {
    const p = projects.find((x) => x.slug === project);
    const isCover = p?.images[0] === f;
    const isFeatured = featured.has(project) && isCover;
    if (isFeatured) displayed = "Featured card + lightbox + detail";
    else if (isCover) displayed = "Grid card + lightbox + detail";
    else displayed = "Lightbox + detail (secondary)";
  }
  console.log(`| ${f} | ${project} | ${displayed} |`);
}

console.log("\n## Project → Image Count\n");
console.log("| Project | Number of Images |");
console.log("| ------- | ---------------- |");
for (const p of projects) {
  console.log(`| ${p.slug} | ${p.images.length} |`);
}

const unreferenced = onDisk.filter((f) => !fileMap.has(f));
if (unreferenced.length) {
  console.log("\n## Unused Images\n");
  unreferenced.forEach((f) => console.log(`- ${f}`));
}

const hashes = new Map();
for (const f of onDisk) {
  const h = crypto.createHash("md5").update(fs.readFileSync(path.join(imagesDir, f))).digest("hex");
  if (!hashes.has(h)) hashes.set(h, []);
  hashes.get(h).push(f);
}
const identical = [...hashes.values()].filter((l) => l.length > 1);
if (identical.length) {
  console.log("\n## Identical Files (MD5)\n");
  identical.forEach((l) => console.log(`- ${l.join(" == ")}`));
}

const cross = [...new Map(
  projects.flatMap((p) => p.images.map((f) => [f, p.slug])),
).entries()].reduce((acc, [f, slug]) => {
  if (!acc[f]) acc[f] = [];
  acc[f].push(slug);
  return acc;
}, {});
// rebuild properly
const crossDup = {};
for (const p of projects) {
  for (const f of p.images) {
    if (!crossDup[f]) crossDup[f] = [];
    crossDup[f].push(p.slug);
  }
}
const multi = Object.entries(crossDup).filter(([, s]) => s.length > 1);
if (multi.length) {
  console.log("\n## Cross-Project Assignments\n");
  multi.forEach(([f, s]) => console.log(`- ${f}: ${s.join(", ")}`));
}

console.log(`\nTotal: ${onDisk.length} files, ${projects.length} projects, ${projects.reduce((n, p) => n + p.images.length, 0)} image assignments`);
