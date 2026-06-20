import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

const IMAGE_PATTERN = /\.(jpe?g|png|webp|gif|svg|avif)$/i;

function naturalSort(a: string, b: string): number {
  const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
  const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
  if (numA !== numB) return numA - numB;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

/** Reads all image files from public/clients at build/request time. */
export function getClientLogos(): string[] {
  noStore();

  const clientsDir = path.join(process.cwd(), "public", "clients");

  if (!fs.existsSync(clientsDir)) {
    return [];
  }

  return fs
    .readdirSync(clientsDir)
    .filter((file) => IMAGE_PATTERN.test(file) && !file.startsWith("."))
    .sort(naturalSort)
    .map((file) => `/clients/${file}`);
}
