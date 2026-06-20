import type { Localized } from "../site";

export type PortfolioCategory = {
  slug: string;
  label: Localized;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "stamps", label: { ar: "الأختام", en: "Stamps" } },
  {
    slug: "billboards",
    label: { ar: "البنرات واللوحات الإعلانية", en: "Banners & Signage" },
  },
  {
    slug: "stickers",
    label: { ar: "الملصقات والستيكرات", en: "Stickers & Labels" },
  },
  {
    slug: "product-printing",
    label: { ar: "الطباعة على المنتجات", en: "Product Printing" },
  },
  {
    slug: "packaging",
    label: { ar: "الطباعة على العبوات والتغليف", en: "Packaging & Containers" },
  },
  {
    slug: "identity",
    label: { ar: "الهوية البصرية والعلامات التجارية", en: "Visual Identity & Branding" },
  },
  {
    slug: "exhibitions",
    label: { ar: "المعارض والستاندات", en: "Exhibitions & Stands" },
  },
  { slug: "misc", label: { ar: "مشاريع متنوعة", en: "Miscellaneous Projects" } },
];

const img = (filename: string) => `/portfolio/images/${filename}`;

export type Project = {
  slug: string;
  category: string;
  title: Localized;
  summary?: Localized;
  images: string[];
  year: string;
};

/** Featured covers — single source of truth (order + cover image per project). */
export const featuredPortfolioItems = [
  { slug: "secret-brand-printed-packaging", coverFile: "promo-gift-box.jpg" },
  { slug: "almoheet-branded-mug", coverFile: "The_Mixed_Coffee_Cups_Mockup_2.jpg" },
  { slug: "almoheet-exhibition-booth", coverFile: "Citylight_Mockup_1.jpg" },
] as const;

export const featuredPortfolioSlugs = new Set<string>(
  featuredPortfolioItems.map((item) => item.slug),
);

const rawProjects: Project[] = [
  {
    slug: "automatic-stamps-catalog",
    category: "stamps",
    title: {
      ar: "أختام أوتوماتيك بمقاسات متعددة",
      en: "Automatic Stamps in Multiple Sizes",
    },
    images: [img("shield-01.jpg"), img("shield-02.jpg"), img("shield-03.jpg")],
    year: "2024",
  },
  {
    slug: "quriyat-cafeteria-sign",
    category: "billboards",
    title: {
      ar: "لوحة محل كفتيريا القريات الحديثة",
      en: "Al-Quriyat Modern Cafeteria Shop Sign",
    },
    images: [img("billboard-street.jpg")],
    year: "2024",
  },
  {
    slug: "jamrat-hatab-shop-sign",
    category: "billboards",
    title: {
      ar: "لوحة محل جمرة حطب",
      en: "Jamrat Hatab Shop Signboard",
    },
    images: [img("billboard-outdoor.jpg")],
    year: "2024",
  },
  {
    slug: "amsteel-truck-wrap",
    category: "billboards",
    title: {
      ar: "تغليف شاحنة AMSteel",
      en: "AMSteel Truck Branding Wrap",
    },
    images: [img("billboard-vehicle-wrap.jpg")],
    year: "2024",
  },
  {
    slug: "abaaq-perfume-roll-up",
    category: "billboards",
    title: {
      ar: "رول اب بنر لبراند عبق",
      en: "Abaaq Perfume Roll-Up Banner",
    },
    images: [img("billboard-roll-up-1.jpg")],
    year: "2024",
  },
  {
    slug: "federation-restaurant-roll-ups",
    category: "billboards",
    title: {
      ar: "رول اب بنرات الاتحاد السعودي والركن الدمشقي",
      en: "Saudi Federation & Al Rukn Al Dimashqi Roll-Ups",
    },
    images: [img("billboard-roll-up-2.jpg")],
    year: "2024",
  },
  {
    slug: "al-hammadi-wedding-x-stand",
    category: "exhibitions",
    title: {
      ar: "ستاند X-Banner لأفراح الحمادي",
      en: "Al-Hammadi Wedding X-Stand Banner",
    },
    images: [img("free-roll-up-mockup-1.jpg")],
    year: "2024",
  },
  {
    slug: "feather-flag-service-display",
    category: "billboards",
    title: {
      ar: "أعلام ريشة لعرض خدمات المحيط",
      en: "Feather Flags Showcasing Al Moheet Services",
    },
    images: [img("billboard-flag.jpg")],
    year: "2024",
  },
  {
    slug: "large-format-billboard-mockup",
    category: "misc",
    title: {
      ar: "لوحة طرق إعلانية كبيرة",
      en: "Large-Format Roadside Billboard",
    },
    images: [img("billboard-display.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-exhibition-booth",
    category: "exhibitions",
    title: {
      ar: "بوث معرض متكامل لوكالة المحيط",
      en: "Al Moheet Integrated Exhibition Booth",
    },
    images: [
      img("Citylight_Mockup_1.jpg"),
      img("acrylic-exhibition-wall.jpg"),
      img("Free_Banner_Mockup_4.jpg"),
      img("free-billboard-banner-mockup-2.jpg"),
      img("free-roll-up-mockup-2.jpg"),
    ],
    year: "2024",
  },
  {
    slug: "madar-grid-display-stands",
    category: "exhibitions",
    title: {
      ar: "ستاندات شبكية لشركة مدار الأصلي",
      en: "Madar Al-Asli Grid Display Stands",
    },
    images: [img("apparel-tshirt.jpg")],
    year: "2024",
  },
  {
    slug: "madar-auto-exhibition-popup",
    category: "exhibitions",
    title: {
      ar: "خلفية منحنية وطاولة لشركة مدار الأصلي",
      en: "Madar Al-Asli Curved Backdrop & Counter",
    },
    images: [img("Mockup_TSB_1.jpg")],
    year: "2024",
  },
  {
    slug: "rafeeqat-tamr-product-stickers",
    category: "stickers",
    title: {
      ar: "ملصقات دائرية لمنتج رقيقة تمر",
      en: "Round Labels for Rafeeqat Tamr Product",
    },
    images: [img("stickers-round-roll.jpg")],
    year: "2024",
  },
  {
    slug: "carwash-loyalty-cards",
    category: "identity",
    title: {
      ar: "بطاقات ولاء لمغسلة سيارات",
      en: "Car Wash Loyalty Punch Cards",
    },
    images: [img("stickers-note-case.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-mug",
    category: "product-printing",
    title: {
      ar: "كوب سيراميك مطبوع لوكالة المحيط",
      en: "Al Moheet Branded Ceramic Mug",
    },
    images: [
      img("The_Mixed_Coffee_Cups_Mockup_2.jpg"),
      img("product-coffee-mug.jpg"),
      img("Coffee_Brand_Mockup_1.jpg"),
    ],
    year: "2024",
  },
  {
    slug: "dr-reem-branded-cups",
    category: "product-printing",
    title: {
      ar: "أكواب Dr. Reem مطبوعة",
      en: "Dr. Reem Branded Paper Cups",
    },
    images: [img("product-paper-cup-2.jpg")],
    year: "2024",
  },
  {
    slug: "secret-brand-printed-packaging",
    category: "packaging",
    title: {
      ar: "علب وأكياس وأكواب مطبوعة لبراند سكريت",
      en: "Secret Brand Printed Boxes, Bags & Cups",
    },
    images: [
      img("promo-gift-box.jpg"),
      img("promo-paper-bag.jpg"),
      img("product-paper-cup-1.jpg"),
    ],
    year: "2024",
  },
  {
    slug: "fresh-mango-juice-label",
    category: "packaging",
    title: {
      ar: "ملصق عبوة عصير Fresh مانجو",
      en: "Fresh Mango Juice Bottle Label",
    },
    images: [img("product-orange-juice.jpg")],
    year: "2024",
  },
  {
    slug: "fawakeh-baladi-container-label",
    category: "packaging",
    title: {
      ar: "ملصق عبوة فواكه بلدي",
      en: "Fawakeh Baladi Container Label",
    },
    images: [img("product-blueberries-pack.jpg")],
    year: "2024",
  },
  {
    slug: "harir-spray-bottle-label",
    category: "packaging",
    title: {
      ar: "ملصق زجاجة مطهر HARIR",
      en: "HARIR Disinfectant Spray Label",
    },
    images: [img("product-spray-bottle.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-gift-box",
    category: "packaging",
    title: {
      ar: "علبة مطوية مطبوعة لوكالة المحيط",
      en: "Al Moheet Branded Folding Gift Box",
    },
    images: [
      img("product-folding-box.jpg"),
      img("Free_Pouch_Mockup_1.jpg"),
      img("Large_Honey_Jar_Mockup_3.jpg"),
    ],
    year: "2024",
  },
  {
    slug: "almoheet-branded-wrapping-paper",
    category: "packaging",
    title: {
      ar: "ورق تغليف مطبوع بشعار المحيط",
      en: "Al Moheet Logo Printed Wrapping Paper",
    },
    images: [img("product-wrapping-paper.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-pens",
    category: "product-printing",
    title: {
      ar: "أقلام مطبوعة بشعار المحيط",
      en: "Al Moheet Logo Printed Pens",
    },
    images: [img("promo-pen.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-keychain",
    category: "product-printing",
    title: {
      ar: "ميدالية مفاتيح مطبوعة",
      en: "Branded Metal Keychain",
    },
    images: [img("promo-keychain.jpg"), img("Free_Plastic_ID_Mockup_3.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-tote-bag",
    category: "product-printing",
    title: {
      ar: "حقيبة قماشية مطبوعة لوكالة المحيط",
      en: "Al Moheet Branded Canvas Tote Bag",
    },
    images: [img("promo-tote-bag.jpg"), img("Bag_Mockup.jpg")],
    year: "2024",
  },
  {
    slug: "wedding-table-tent-cards",
    category: "identity",
    title: {
      ar: "بطاقات ترحيب طاولة لحفل زفاف",
      en: "Wedding Table Tent Welcome Cards",
    },
    images: [img("promo-table-tent.jpg")],
    year: "2024",
  },
  {
    slug: "astrastack-business-cards",
    category: "identity",
    title: {
      ar: "بطاقات عمل Astra Stack",
      en: "Astra Stack Business Cards",
    },
    images: [img("identity-business-cards.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-corporate-stationery",
    category: "identity",
    title: {
      ar: "قرطاسية مكتبية لوكالة المحيط",
      en: "Al Moheet Corporate Stationery Set",
    },
    images: [
      img("identity-stationery.jpg"),
      img("PHOTO-2026-06-21-00-05-08.jpg"),
      img("photo-2026-06-21-00-05-08-2.jpg"),
      img("PHOTO-2026-06-21-00-11-26.jpg"),
      img("A4_Borchure_Mockup_8.jpg"),
      img("Poster_Mockup_1.jpg"),
      img("Vertcial_Spiral_Book_Mockup_2.jpg"),
    ],
    year: "2024",
  },
  {
    slug: "glamour-touch-salon-print",
    category: "identity",
    title: {
      ar: "مطبوعات مركز غلامور توتش للتزيين النسائي",
      en: "Glamour Touch Beauty Salon Print Collateral",
    },
    images: [img("identity-flyer-dl.jpg")],
    year: "2024",
  },
  {
    slug: "qadat-invoice-forms",
    category: "identity",
    title: {
      ar: "فواتير تجارية لمؤسسة قادة الصفقات",
      en: "Qadat Al-Safaqat Commercial Invoice Forms",
    },
    images: [img("misc-a4-flyer.jpg")],
    year: "2024",
  },
  {
    slug: "arkan-company-profile",
    category: "identity",
    title: {
      ar: "بروفايل شركة مكتب أركان",
      en: "Maktab Arkan Company Profile Booklet",
    },
    images: [img("misc-book-print.jpg")],
    year: "2024",
  },
];

function uniqueImages(images: string[]): string[] {
  return [...new Set(images)];
}

/** Normalize projects: dedupe images within each project. */
export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  images: uniqueImages(project.images),
}));

export function getProjectCoverImage(project: Project, coverFile?: string): string {
  if (coverFile) {
    const match = project.images.find((src) => src.endsWith(`/${coverFile}`));
    if (match) return match;
  }
  return project.images[0];
}

export function resolveFeaturedProjects(): Array<{
  project: Project;
  cover: string;
  imageIndex: number;
}> {
  return featuredPortfolioItems
    .map(({ slug, coverFile }) => {
      const project = projects.find((p) => p.slug === slug);
      if (!project || project.images.length === 0) return null;
      const cover = getProjectCoverImage(project, coverFile);
      const imageIndex = Math.max(0, project.images.indexOf(cover));
      return { project, cover, imageIndex };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);
}

/** Grid order: featured first (by config), then remaining projects in definition order. */
export function getGridProjects(options?: {
  category?: string;
  excludeFeatured?: boolean;
}): Project[] {
  const category = options?.category ?? "all";
  const excludeFeatured = options?.excludeFeatured ?? category === "all";

  let list =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  list = list.filter((p) => p.images.length > 0);

  if (excludeFeatured) {
    list = list.filter((p) => !featuredPortfolioSlugs.has(p.slug));
  }

  return list;
}

export type GalleryImage = {
  id: string;
  projectSlug: string;
  category: string;
  title: Localized;
  summary?: Localized;
  src: string;
  imageIndex: number;
  imageCount: number;
};

export function buildGalleryImages(sourceProjects: Project[] = projects): GalleryImage[] {
  const seenSrc = new Set<string>();

  return sourceProjects
    .filter((project) => project.images.length > 0)
    .flatMap((project) =>
      project.images
        .map((src, imageIndex) => ({
          id: `${project.slug}-${imageIndex}`,
          projectSlug: project.slug,
          category: project.category,
          title: project.title,
          summary: project.summary,
          src,
          imageIndex,
          imageCount: project.images.length,
        }))
        .filter((entry) => {
          if (seenSrc.has(entry.src)) return false;
          seenSrc.add(entry.src);
          return true;
        }),
    );
}

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getActivePortfolioCategories(): PortfolioCategory[] {
  const used = new Set(projects.filter((p) => p.images.length > 0).map((p) => p.category));
  return portfolioCategories.filter((c) => used.has(c.slug));
}

export function resolveGalleryImageId(
  galleryImages: GalleryImage[],
  project: Project,
  imageIndex: number,
): string | null {
  const src = project.images[imageIndex];
  if (!src) return null;
  const match =
    galleryImages.find((g) => g.src === src && g.projectSlug === project.slug) ??
    galleryImages.find((g) => g.src === src);
  return match?.id ?? null;
}
