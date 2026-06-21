import type { Project } from "../data/portfolio";
import {
  featuredPortfolioSlugs,
  findProjectBySlug,
  projects,
  featuredPortfolioItems,
  getProjectCoverImage,
} from "../data/portfolio";

export type PortfolioUiState = {
  /** Default Our Work page: "all" */
  category: string;
};

export type ImageVisibilityRow = {
  filename: string;
  src: string;
  projectSlug: string | null;
  /** Rendered in DOM on /portfolio (cards + thumbnails) when category matches */
  visibleOnPortfolioPage: boolean;
  /** Rendered on /portfolio/[slug] detail gallery */
  visibleOnProjectPage: boolean;
  /** Reachable via lightbox after clicking a visible project card */
  visibleInLightbox: boolean;
  /** Shown as card hero/cover only (not thumbnail) */
  isCardCover: boolean;
  /** images[1+] hidden from portfolio DOM before thumbnails fix */
  isSecondary: boolean;
};

function filenameFromSrc(src: string): string {
  return src.split("/").pop() ?? src;
}

/** Projects whose cards render on Our Work for the given UI state. */
export function getVisiblePortfolioProjects(state: PortfolioUiState = { category: "all" }): Project[] {
  const { category } = state;
  let list =
    category === "all"
      ? projects.filter((p) => p.images.length > 0)
      : projects.filter((p) => p.category === category && p.images.length > 0);

  return list;
}

/** Featured section cards — only when category is "all". */
export function getFeaturedCardsOnPage(state: PortfolioUiState = { category: "all" }) {
  if (state.category !== "all") return [];

  return featuredPortfolioItems
    .map(({ slug, coverFile }) => {
      const project = findProjectBySlug(slug);
      if (!project || project.images.length === 0) return null;
      const cover = getProjectCoverImage(project, coverFile);
      return { project, cover, imageIndex: project.images.indexOf(cover) };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);
}

/** Grid cards — excludes featured slugs when category is "all". */
export function getGridCardsOnPage(state: PortfolioUiState = { category: "all" }): Project[] {
  const visible = getVisiblePortfolioProjects(state);
  if (state.category === "all") {
    return visible.filter((p) => !featuredPortfolioSlugs.has(p.slug));
  }
  return visible;
}

/**
 * Simulates what the Our Work page renders and what users can reach.
 * Mirrors PortfolioGallery + detail pages — not raw data references alone.
 */
export function auditImageVisibility(
  state: PortfolioUiState = { category: "all" },
  diskFilenames: string[],
): {
  rows: ImageVisibilityRow[];
  reports: {
    onDiskNotVisibleAnywhere: string[];
    assignedButNotRendered: string[];
    renderedMoreThanOnce: string[];
    projectsSharingImage: Array<{ filename: string; projects: string[] }>;
    projectsHidingSecondaryImages: Array<{ slug: string; hiddenCount: number; total: number }>;
  };
  counts: {
    onDisk: number;
    portfolioCards: number;
    portfolioImagesRendered: number;
    lightboxReachable: number;
    projectPageReachable: number;
  };
  blockers: string[];
} {
  const featuredCards = getFeaturedCardsOnPage(state);
  const gridCards = getGridCardsOnPage(state);
  const cardsOnPage = [
    ...featuredCards.map((f) => ({ project: f.project, cover: f.cover })),
    ...gridCards.map((p) => ({ project: p, cover: p.images[0] })),
  ];

  const assignment = new Map<string, string>();
  for (const p of projects) {
    for (const src of p.images) {
      assignment.set(filenameFromSrc(src), p.slug);
    }
  }

  const portfolioRendered = new Set<string>();
  const cardCovers = new Set<string>();
  const lightboxReachable = new Set<string>();
  const renderCount = new Map<string, number>();

  const bump = (filename: string) => {
    renderCount.set(filename, (renderCount.get(filename) ?? 0) + 1);
  };

  for (const { project, cover } of cardsOnPage) {
    const coverFile = filenameFromSrc(cover);
    cardCovers.add(coverFile);
    portfolioRendered.add(coverFile);
    bump(coverFile);

    // All project images render as thumbnail strip on portfolio cards (PortfolioProjectCard).
    for (const src of project.images) {
      const file = filenameFromSrc(src);
      portfolioRendered.add(file);
      bump(file);
      lightboxReachable.add(file);
    }
  }

  const projectPageReachable = new Set<string>();
  for (const p of projects) {
    for (const src of p.images) {
      projectPageReachable.add(filenameFromSrc(src));
    }
  }

  const fileToProjects = new Map<string, string[]>();
  for (const p of projects) {
    for (const src of p.images) {
      const file = filenameFromSrc(src);
      if (!fileToProjects.has(file)) fileToProjects.set(file, []);
      fileToProjects.get(file)!.push(p.slug);
    }
  }

  const rows: ImageVisibilityRow[] = diskFilenames.map((filename) => {
    const projectSlug = assignment.get(filename) ?? null;
    const isSecondary =
      projectSlug !== null &&
      (() => {
        const p = findProjectBySlug(projectSlug);
        if (!p || p.images.length <= 1) return false;
        return filenameFromSrc(p.images[0]) !== filename;
      })();

    return {
      filename,
      src: `/portfolio/images/${filename}`,
      projectSlug,
      visibleOnPortfolioPage: portfolioRendered.has(filename),
      visibleOnProjectPage: projectPageReachable.has(filename),
      visibleInLightbox: lightboxReachable.has(filename),
      isCardCover: cardCovers.has(filename),
      isSecondary,
    };
  });

  const visibleAnywhere = (f: string) => {
    const row = rows.find((r) => r.filename === f);
    return row
      ? row.visibleOnPortfolioPage || row.visibleOnProjectPage || row.visibleInLightbox
      : false;
  };

  const blockers: string[] = [];
  if (state.category !== "all") {
    blockers.push(`category filter "${state.category}" hides projects outside this category`);
  }
  blockers.push(
    "featured filtering removes 3 featured slugs from the main grid (they still render in the featured section when category is All)",
  );
  if (cardsOnPage.some(({ project }) => project.images.length > 1)) {
    blockers.push(
      "multi-image projects: all images render as thumbnail strips on cards and in project-scoped lightbox",
    );
  }

  return {
    rows,
    reports: {
      onDiskNotVisibleAnywhere: diskFilenames.filter((f) => !visibleAnywhere(f)),
      assignedButNotRendered: diskFilenames.filter((f) => {
        const row = rows.find((r) => r.filename === f);
        return row?.projectSlug && !row.visibleOnPortfolioPage && !row.visibleInLightbox;
      }),
      renderedMoreThanOnce: [...renderCount.entries()]
        .filter(([, n]) => n > 1)
        .map(([f]) => f),
      projectsSharingImage: [...fileToProjects.entries()]
        .filter(([, slugs]) => slugs.length > 1)
        .map(([filename, projectsSlugs]) => ({ filename, projects: projectsSlugs })),
      projectsHidingSecondaryImages: projects
        .filter((p) => p.images.length > 1)
        .map((p) => ({
          slug: p.slug,
          hiddenCount: p.images.length - 1,
          total: p.images.length,
        })),
    },
    counts: {
      onDisk: diskFilenames.length,
      portfolioCards: cardsOnPage.length,
      portfolioImagesRendered: portfolioRendered.size,
      lightboxReachable: lightboxReachable.size,
      projectPageReachable: projectPageReachable.size,
    },
    blockers,
  };
}
