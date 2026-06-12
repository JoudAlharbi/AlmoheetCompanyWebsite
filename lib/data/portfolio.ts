import type { Localized } from "../site";

export type PortfolioCategory = {
  slug: string;
  label: Localized;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "stamps", label: { ar: "الأختام", en: "Stamps" } },
  { slug: "shields", label: { ar: "الدروع والتكريم", en: "Shields & Awards" } },
  {
    slug: "billboards",
    label: { ar: "البنرات واللوحات الإعلانية", en: "Banners & Signage" },
  },
  {
    slug: "acrylic-light",
    label: { ar: "الأكريليك واللوحات المضيئة", en: "Acrylic & Light Boxes" },
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
  { slug: "apparel", label: { ar: "الطباعة على الملابس", en: "Apparel Printing" } },
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

export const projects: Project[] = [
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
    images: [img("billboard-x-stand.jpg")],
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
    images: [img("acrylic-exhibition-wall.jpg")],
    year: "2024",
  },
  {
    slug: "madar-grid-display-stands",
    category: "exhibitions",
    title: {
      ar: "ستاندات شبكية لشركة مدار الأصلي",
      en: "Madar Al-Asli Grid Display Stands",
    },
    images: [img("acrylic-display-stand.jpg")],
    year: "2024",
  },
  {
    slug: "madar-auto-exhibition-popup",
    category: "exhibitions",
    title: {
      ar: "خلفية منحنية وطاولة لشركة مدار الأصلي",
      en: "Madar Al-Asli Curved Backdrop & Counter",
    },
    images: [img("apparel-tshirt.jpg")],
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
    images: [img("product-coffee-mug.jpg")],
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
    images: [img("product-folding-box.jpg")],
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
    images: [img("promo-keychain.jpg")],
    year: "2024",
  },
  {
    slug: "almoheet-branded-tote-bag",
    category: "product-printing",
    title: {
      ar: "حقيبة قماشية مطبوعة لوكالة المحيط",
      en: "Al Moheet Branded Canvas Tote Bag",
    },
    images: [img("promo-tote-bag.jpg")],
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
    images: [img("identity-stationery.jpg")],
    year: "2024",
  },
  {
    slug: "glamour-touch-salon-print",
    category: "identity",
    title: {
      ar: "مطبوعات مركز غلامور توتش للتزيين النسائي",
      en: "Glamour Touch Beauty Salon Print Collateral",
    },
    images: [img("billboard-curved-poster.jpg"), img("identity-flyer-dl.jpg")],
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

export function buildGalleryImages(): GalleryImage[] {
  return projects.flatMap((project) =>
    project.images.map((src, imageIndex) => ({
      id: `${project.slug}-${imageIndex}`,
      projectSlug: project.slug,
      category: project.category,
      title: project.title,
      summary: project.summary,
      src,
      imageIndex,
      imageCount: project.images.length,
    })),
  );
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
