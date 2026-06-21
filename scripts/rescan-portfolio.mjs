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

const projects = [];
for (const m of src.matchAll(/slug: "([^"]+)"[\s\S]*?images: \[([\s\S]*?)\],\s*\n\s*year:/g)) {
  if (categorySlugs.has(m[1])) continue;
  const imgs = [...m[2].matchAll(/img\("([^"]+)"\)/g)].map((x) => x[1]);
  projects.push({ slug: m[1], images: imgs });
}

const onDisk = fs.readdirSync(imagesDir).filter((f) => /\.jpe?g$/i.test(f)).sort();
const refSet = new Set();
const fileToProjects = new Map();

for (const p of projects) {
  for (const f of p.images) {
    refSet.add(f);
    if (!fileToProjects.has(f)) fileToProjects.set(f, []);
    fileToProjects.get(f).push(p.slug);
  }
}

const hashes = new Map();
for (const f of onDisk) {
  const h = crypto.createHash("md5").update(fs.readFileSync(path.join(imagesDir, f))).digest("hex");
  if (!hashes.has(h)) hashes.set(h, []);
  hashes.get(h).push(f);
}

const featured = ["secret-brand-printed-packaging", "almoheet-branded-mug", "almoheet-exhibition-booth"];
const gridCovers = new Set(
  projects.filter((p) => !featured.includes(p.slug)).map((p) => p.images[0]),
);

console.log(JSON.stringify({
  onDisk: onDisk.length,
  referenced: refSet.size,
  notInData: onDisk.filter((f) => !refSet.has(f)),
  notOnDisk: [...refSet].filter((f) => !onDisk.includes(f)),
  crossProject: [...fileToProjects.entries()].filter(([, s]) => s.length > 1).map(([f, s]) => ({ file: f, projects: s })),
  identicalFiles: [...hashes.values()].filter((l) => l.length > 1),
  duplicateCovers: Object.entries(
    projects.reduce((acc, p) => {
      const c = p.images[0];
      if (!acc[c]) acc[c] = [];
      acc[c].push(p.slug);
      return acc;
    }, {}),
  ).filter(([, s]) => s.length > 1).map(([f, s]) => ({ cover: f, projects: s })),
  hiddenInLightbox: (() => {
    const seen = new Set();
    const hidden = [];
    for (const p of projects) {
      for (const f of p.images) {
        const src = `/portfolio/images/${f}`;
        if (seen.has(src)) hidden.push({ file: f, project: p.slug });
        else seen.add(src);
      }
    }
    return hidden;
  })(),
  notGridCover: onDisk.filter((f) => refSet.has(f) && !gridCovers.has(f) && !featured.some((s) => projects.find((p) => p.slug === s)?.images.includes(f))),
  projectCounts: projects.map((p) => ({ slug: p.slug, count: p.images.length, cover: p.images[0] })),
}, null, 2));
