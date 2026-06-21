import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const portfolioPath = path.join(root, "lib/data/portfolio.ts");
const imagesDir = path.join(root, "public/portfolio/images");
const src = fs.readFileSync(portfolioPath, "utf8");

const onDisk = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.(jpe?g|png|webp|gif|svg|avif)$/i.test(f))
  .sort();

const referenced = [...src.matchAll(/img\("([^"]+)"\)/g)].map((m) => m[1]);
const refSet = new Set(referenced);

const missing = referenced.filter((f) => !onDisk.includes(f));
const unreferenced = onDisk.filter((f) => !refSet.has(f));

const fileToProjects = new Map();
const rawBlock = src.match(/const rawProjects: Project\[\] = \[([\s\S]*?)\];/)?.[1] ?? src;

const projectBlocks = [...rawBlock.matchAll(/slug: "([^"]+)"[\s\S]*?images: \[([\s\S]*?)\],\s*\n\s*year:/g)];
for (const m of projectBlocks) {
  const slug = m[1];
  for (const im of m[2].matchAll(/img\("([^"]+)"\)/g)) {
    const file = im[1];
    if (!fileToProjects.has(file)) fileToProjects.set(file, []);
    fileToProjects.get(file).push(slug);
  }
}

const dupAcross = [...fileToProjects.entries()].filter(([, s]) => s.length > 1);

const hashes = new Map();
for (const f of onDisk) {
  const h = crypto.createHash("md5").update(fs.readFileSync(path.join(imagesDir, f))).digest("hex");
  if (!hashes.has(h)) hashes.set(h, []);
  hashes.get(h).push(f);
}
const identicalOnDisk = [...hashes.values()].filter((l) => l.length > 1);

console.log("=== Portfolio Validation ===\n");
console.log(`Images on disk: ${onDisk.length}`);
console.log(`References in portfolio.ts: ${referenced.length} (${refSet.size} unique)`);

let failed = false;

if (missing.length) {
  failed = true;
  console.error("\nMISSING FILES:");
  missing.forEach((f) => console.error(`  - ${f}`));
} else {
  console.log("\nMissing files: none");
}

if (unreferenced.length) {
  failed = true;
  console.error("\nUNREFERENCED on disk:");
  unreferenced.forEach((f) => console.error(`  - ${f}`));
} else {
  console.log("Unreferenced files: none");
}

if (dupAcross.length) {
  failed = true;
  console.error("\nDUPLICATE across projects:");
  dupAcross.forEach(([f, slugs]) => console.error(`  - ${f}: ${slugs.join(", ")}`));
} else {
  console.log("Cross-project duplicates: none");
}

if (identicalOnDisk.length) {
  failed = true;
  console.error("\nIDENTICAL FILES on disk (same MD5):");
  identicalOnDisk.forEach((list) => console.error(`  - ${list.join(" == ")}`));
} else {
  console.log("Identical files on disk: none");
}

if (failed) process.exit(1);
console.log("\nValidation passed.");
