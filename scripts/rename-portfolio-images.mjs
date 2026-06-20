import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(root, "public", "portfolio", "images");

const renames = [
  ["Free_Ro ll-up_Mockup_1.jpg", "free-roll-up-mockup-1.jpg"],
  ["Free_Roll-up _Mockup_1.jpg", "free-roll-up-mockup-2.jpg"],
  ["Free_Billboard_Bann er_Mockup_2.jpg", "free-billboard-banner-mockup-2.jpg"],
  ["PHOTO-2026-06-21-00-05-08 2.jpg", "photo-2026-06-21-00-05-08-2.jpg"],
];

for (const [from, to] of renames) {
  const src = path.join(imagesDir, from);
  const dest = path.join(imagesDir, to);
  if (!fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      console.log(`Skip (already renamed): ${from} -> ${to}`);
      continue;
    }
    console.warn(`Missing source: ${from}`);
    continue;
  }
  if (fs.existsSync(dest)) fs.unlinkSync(dest);
  fs.renameSync(src, dest);
  console.log(`Renamed: ${from} -> ${to}`);
}
