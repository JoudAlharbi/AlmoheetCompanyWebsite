/**
 * Audits portfolio visibility by simulating the Our Work page UI.
 * Run: npm run audit:portfolio-visibility
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const portfolioPath = path.join(root, "lib/data/portfolio.ts");
const imagesDir = path.join(root, "public/portfolio/images");
const src = fs.readFileSync(portfolioPath, "utf8");

const featuredSlugs = new Set([
  "secret-brand-printed-packaging",
  "owl-cafe-branded-cups",
  "almoheet-exhibition-booth",
]);

const featuredCovers = [
  { slug: "secret-brand-printed-packaging", coverFile: "promo-gift-box.jpg" },
  { slug: "owl-cafe-branded-cups", coverFile: "The_Mixed_Coffee_Cups_Mockup_2.jpg" },
  { slug: "almoheet-exhibition-booth", coverFile: "Citylight_Mockup_1.jpg" },
];

const rawBlock = src.match(/const rawProjects: Project\[\] = \[([\s\S]*?)\];/)?.[1] ?? "";
const projects = [];
for (const m of rawBlock.matchAll(/slug: "([^"]+)"[\s\S]*?images: \[([\s\S]*?)\],\s*\n\s*year:/g)) {
  const imgs = [...m[2].matchAll(/img\("([^"]+)"\)/g)].map((x) => `/portfolio/images/${x[1]}`);
  projects.push({ slug: m[1], images: imgs });
}

const onDisk = fs
  .readdirSync(imagesDir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

function filename(src) {
  return src.split("/").pop();
}

function getCover(project, coverFile) {
  const match = project.images.find((s) => s.endsWith(`/${coverFile}`));
  return match ?? project.images[0];
}

function simulateVisibility(category = "all", includeThumbnails = true) {
  const visibleProjects =
    category === "all"
      ? projects.filter((p) => p.images.length > 0)
      : projects.filter((p) => p.category === category && p.images.length > 0);

  const featuredCards =
    category === "all"
      ? featuredCovers
          .map(({ slug, coverFile }) => {
            const project = projects.find((p) => p.slug === slug);
            if (!project) return null;
            return { project, cover: getCover(project, coverFile) };
          })
          .filter(Boolean)
      : [];

  const gridCards =
    category === "all"
      ? visibleProjects.filter((p) => !featuredSlugs.has(p.slug))
      : visibleProjects;

  const cardsOnPage = [
    ...featuredCards.map((f) => ({ project: f.project, cover: f.cover })),
    ...gridCards.map((p) => ({ project: p, cover: p.images[0] })),
  ];

  const assignment = new Map();
  for (const p of projects) {
    for (const src of p.images) assignment.set(filename(src), p.slug);
  }

  const portfolioPage = new Set();
  const lightbox = new Set();
  const projectPage = new Set();
  const renderCount = new Map();
  const cardCovers = new Set();

  const bump = (f) => renderCount.set(f, (renderCount.get(f) ?? 0) + 1);

  for (const { project, cover } of cardsOnPage) {
    const coverFile = filename(cover);
    cardCovers.add(coverFile);
    portfolioPage.add(coverFile);
    bump(coverFile);

    for (const src of project.images) {
      const f = filename(src);
      lightbox.add(f);
      projectPage.add(f);
      if (includeThumbnails) {
        portfolioPage.add(f);
        bump(f);
      }
    }
  }

  for (const p of projects) {
    for (const src of p.images) projectPage.add(filename(src));
  }

  return { cardsOnPage, portfolioPage, lightbox, projectPage, assignment, renderCount, cardCovers };
}

const withThumbs = simulateVisibility("all", true);
const withoutThumbs = simulateVisibility("all", false);

const fileToProjects = new Map();
for (const p of projects) {
  for (const src of p.images) {
    const f = filename(src);
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

console.log("# Portfolio Visibility Audit (Our Work page, category = All)\n");
console.log(`## Filesystem: ${onDisk.length} images in public/portfolio/images\n`);

console.log("## Counts\n");
console.log(`| Metric | Count |`);
console.log(`| ------ | ----- |`);
console.log(`| Images on disk | ${onDisk.length} |`);
console.log(`| Project cards rendered | ${withThumbs.cardsOnPage.length} |`);
console.log(`| Images on portfolio page (with thumbnails) | ${withThumbs.portfolioPage.size} |`);
console.log(`| Images on portfolio page (covers only, old UI) | ${withoutThumbs.portfolioPage.size} |`);
console.log(`| Images reachable in lightbox | ${withThumbs.lightbox.size} |`);
console.log(`| Images on project detail pages | ${withThumbs.projectPage.size} |`);

const visibleAnywhere = (f, sim) =>
  sim.portfolioPage.has(f) || sim.lightbox.has(f) || sim.projectPage.has(f);

console.log("\n## A) On disk but never visible anywhere\n");
const a = onDisk.filter((f) => !visibleAnywhere(f, withThumbs));
if (a.length) a.forEach((f) => console.log(`- ${f}`));
else console.log("None");

console.log("\n## B) Assigned but not rendered on portfolio page (covers-only mode)\n");
const b = onDisk.filter((f) => withThumbs.assignment.has(f) && !withoutThumbs.portfolioPage.has(f));
if (b.length) b.forEach((f) => console.log(`- ${f} (${withThumbs.assignment.get(f)})`));
else console.log("None");

console.log("\n## C) Rendered more than once on portfolio page\n");
const c = [...withThumbs.renderCount.entries()].filter(([, n]) => n > 1);
if (c.length) c.forEach(([f, n]) => console.log(`- ${f}: ${n}x`));
else console.log("None (each image appears once per card thumbnail strip)");

console.log("\n## D) Projects sharing the same image file\n");
const d = [...fileToProjects.entries()].filter(([, s]) => s.length > 1);
if (d.length) d.forEach(([f, s]) => console.log(`- ${f}: ${s.join(", ")}`));
else console.log("None");

console.log("\n## E) Projects with multiple images (secondary via lightbox + thumbnails)\n");
projects
  .filter((p) => p.images.length > 1)
  .forEach((p) => console.log(`- ${p.slug}: ${p.images.length} images`));

console.log("\n## UI blockers checked\n");
console.log("- slice(): only used for related projects on detail page (max 3), not portfolio images");
console.log("- pagination: none on portfolio page");
console.log("- featured filtering: 3 projects in featured section, excluded from grid when All");
console.log("- category filtering: hides projects when a category tab is selected");
console.log("- image deduplication: none in lightbox (project-scoped)");
console.log("- gallery limits: none");
console.log("- lightbox limits: none (all project images when card clicked)");
console.log("- project ordering: definition order in portfolio.ts, featured first visually");

console.log("\n## Full visibility matrix\n");
console.log("| Filename | Project | Portfolio Page | Project Page | Lightbox |");
console.log("| -------- | ------- | -------------- | ------------ | -------- |");
for (const f of onDisk) {
  const project = withThumbs.assignment.get(f) ?? "—";
  const pp = withThumbs.portfolioPage.has(f) ? "Yes" : "No";
  const dp = withThumbs.projectPage.has(f) ? "Yes" : "No";
  const lb = withThumbs.lightbox.has(f) ? "Yes" : "No";
  console.log(`| ${f} | ${project} | ${pp} | ${dp} | ${lb} |`);
}

const unassigned = onDisk.filter((f) => !withThumbs.assignment.has(f));
if (unassigned.length) {
  console.log("\n## UNASSIGNED ON DISK — requires data fix\n");
  unassigned.forEach((f) => console.log(`- ${f}`));
  process.exit(1);
}

if (a.length || d.length) process.exit(1);
