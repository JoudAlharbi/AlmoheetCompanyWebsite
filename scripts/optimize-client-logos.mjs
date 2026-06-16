import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sourceDir = path.join(root, "temp-partners-extract", "Business partners");
const outputDir = path.join(root, "public", "clients");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs
  .readdirSync(sourceDir)
  .filter((f) => /\.jpe?g$/i.test(f) && !f.startsWith("."))
  .sort((a, b) => {
    const numA = parseInt(a.match(/-(\d+)\.jpe?g$/i)?.[1] ?? "0", 10);
    const numB = parseInt(b.match(/-(\d+)\.jpe?g$/i)?.[1] ?? "0", 10);
    return numA - numB;
  });

console.log(`Processing ${files.length} partner logos...`);

for (let i = 0; i < files.length; i++) {
  const num = String(i + 1).padStart(2, "0");
  const inputPath = path.join(sourceDir, files[i]);
  const outputPath = path.join(outputDir, `partner-${num}.webp`);

  await sharp(inputPath)
    .resize(400, 200, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 85 })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  console.log(`  partner-${num}.webp (${Math.round(stats.size / 1024)} KB)`);
}

console.log("Done.");
