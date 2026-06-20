import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public", "portfolio", "images");

const portfolioPath = path.join(root, "lib", "data", "portfolio.ts");
const src = fs.readFileSync(portfolioPath, "utf8");

const portfolioCategoriesSlugs = new Set([
  "stamps",
  "billboards",
  "stickers",
  "product-printing",
  "packaging",
  "identity",
  "exhibitions",
  "misc",
]);

const onDisk = new Set(
  fs.readdirSync(imagesDir).filter((f) => /\.(jpe?g|png|webp|gif|svg|avif)$/i.test(f)),
);

const referenced = [...src.matchAll(/img\("([^"]+)"\)/g)].map((m) => m[1]);
const refSet = new Set(referenced);

const missing = referenced.filter((f) => !onDisk.has(f));
const unreferenced = [...onDisk].filter((f) => !refSet.has(f)).sort();

const projectBlocks = [
  ...src.matchAll(/\{\s*\n\s*slug: "([^"]+)"[\s\S]*?images: \[([\s\S]*?)\],\s*\n\s*year:/g),
];
const crossProject = new Map();
for (const m of projectBlocks) {
  const slug = m[1];
  if (portfolioCategoriesSlugs.has(slug)) continue;
  for (const im of m[2].matchAll(/img\("([^"]+)"\)/g)) {
    const file = im[1];
    if (!crossProject.has(file)) crossProject.set(file, []);
    crossProject.get(file).push(slug);
  }
}
const dupAcross = [...crossProject.entries()].filter(([, slugs]) => slugs.length > 1);

const invalidNames = [...onDisk].filter((f) => /[\s]/.test(f));

console.log("=== Portfolio Validation ===\n");
console.log(`Images on disk: ${onDisk.size}`);
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
  console.warn("\nUNREFERENCED on disk:");
  unreferenced.forEach((f) => console.warn(`  - ${f}`));
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

if (invalidNames.length) {
  failed = true;
  console.error("\nINVALID filenames (spaces/special chars):");
  invalidNames.forEach((f) => console.error(`  - ${f}`));
} else {
  console.log("Invalid filenames: none");
}

if (failed) process.exit(1);
console.log("\nValidation passed.");
