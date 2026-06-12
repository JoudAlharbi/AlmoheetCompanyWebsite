import type { Localized } from "../site";

export type Service = {
  slug: string;
  icon: string;
  title: Localized;
  short: Localized;
  description: Localized;
};

export const services: Service[] = [
  {
    slug: "stamps",
    icon: "stamp",
    title: { ar: "الأختام", en: "Stamps" },
    short: {
      ar: "خشبية – أوتوماتيك – كريستال",
      en: "Wooden – Automatic – Crystal",
    },
    description: {
      ar: "نصنع الأختام الرسمية والتجارية بأنواعها: خشبية، أوتوماتيك، وكريستال، بدقة عالية وجودة تدوم.",
      en: "We produce official and commercial stamps — wooden, automatic, and crystal — with precision and lasting quality.",
    },
  },
  {
    slug: "shields",
    icon: "shield",
    title: { ar: "الدروع التذكارية", en: "Commemorative Shields" },
    short: {
      ar: "كريستال – جلدية – أكريليك",
      en: "Crystal – Leather – Acrylic",
    },
    description: {
      ar: "نصمم وننفّذ دروع التكريم من الكريستال والجلد والأكريليك لتناسب المناسبات الرسمية والاحتفالات.",
      en: "We design and produce award shields in crystal, leather, and acrylic for formal occasions and celebrations.",
    },
  },
  {
    slug: "banners-signage",
    icon: "billboard",
    title: { ar: "البنرات واللوحات الإعلانية", en: "Banners & Signage" },
    short: {
      ar: "بنرات، لوحات خارجية وداخلية بجودة عالية.",
      en: "High-quality banners and indoor/outdoor signage.",
    },
    description: {
      ar: "نصمم ونطبع البنرات واللوحات الإعلانية بمختلف المقاسات والخامات لتعزيز حضور علامتك في أي موقع.",
      en: "We design and print banners and signage in various sizes and materials to maximize your brand visibility.",
    },
  },
  {
    slug: "stickers-labels",
    icon: "sticker",
    title: { ar: "الملصقات والستيكرات", en: "Stickers & Labels" },
    short: {
      ar: "ملصقات لاصقة بمختلف الأشكال والاستخدامات.",
      en: "Adhesive labels and stickers for every need.",
    },
    description: {
      ar: "نوفر طباعة الملصقات والستيكرات للمنتجات والمركبات والواجهات بجودة لاصقة وطباعة واضحة.",
      en: "We print stickers and labels for products, vehicles, and storefronts with strong adhesion and crisp output.",
    },
  },
  {
    slug: "acrylic-lightboxes",
    icon: "acrylic",
    title: { ar: "الأكريليك واللوحات المضيئة", en: "Acrylic & Light Boxes" },
    short: {
      ar: "لوحات أكريليك ومضيئة لافتة للأنظار.",
      en: "Eye-catching acrylic and illuminated displays.",
    },
    description: {
      ar: "ننفّذ لوحات الأكريليك واللوحات المضيئة بأحدث التقنيات لإبراز هوية علامتك ليلاً ونهاراً.",
      en: "We produce acrylic signs and light boxes using modern techniques to showcase your brand day and night.",
    },
  },
  {
    slug: "logo-design",
    icon: "logo",
    title: { ar: "تصميم الشعارات", en: "Logo Design" },
    short: {
      ar: "شعارات احترافية تعكس هوية علامتك.",
      en: "Professional logos that reflect your brand identity.",
    },
    description: {
      ar: "نبتكر شعارات مميزة وعصرية تعبّر عن جوهر نشاطك وتبقى راسخة في ذهن جمهورك.",
      en: "We create distinctive, modern logos that capture your business essence and stay memorable.",
    },
  },
  {
    slug: "visual-identity",
    icon: "identity",
    title: { ar: "تصميم الهوية البصرية", en: "Visual Identity Design" },
    short: {
      ar: "هوية متكاملة من الألوان إلى التطبيقات.",
      en: "Complete identity from colors to applications.",
    },
    description: {
      ar: "نبني هوية بصرية شاملة تشمل الشعار والألوان والخطوط ودليل الاستخدام لضمان حضور متناسق.",
      en: "We build comprehensive visual identities including logo, colors, typography, and brand guidelines.",
    },
  },
  {
    slug: "cup-printing",
    icon: "cup",
    title: { ar: "الطباعة على الأكواب", en: "Cup Printing" },
    short: {
      ar: "أكواب مطبوعة بشعارك للمناسبات والهدايا.",
      en: "Branded cups for events and corporate gifts.",
    },
    description: {
      ar: "نطبع على الأكواب بجودة عالية ومقاومة للاستخدام اليومي، مثالية للفعاليات والهدايا.",
      en: "We print on cups and mugs with durable, high-quality output — ideal for events and promotional gifts.",
    },
  },
  {
    slug: "apparel-printing",
    icon: "apparel",
    title: { ar: "الطباعة على الملابس والتيشيرتات", en: "Apparel & T-Shirt Printing" },
    short: {
      ar: "تيشيرات وملابس مطبوعة بشعارك.",
      en: "Branded t-shirts and apparel printing.",
    },
    description: {
      ar: "نوفر طباعة التيشيرتات والملابس بمختلف المقاسات والألوان للفرق والفعاليات والهدايا الدعائية.",
      en: "We print t-shirts and apparel in various sizes and colors for teams, events, and promotions.",
    },
  },
  {
    slug: "promo-gifts",
    icon: "gift",
    title: { ar: "الهدايا الدعائية", en: "Promotional Gifts" },
    short: {
      ar: "هدايا مخصصة تحمل شعار علامتك.",
      en: "Custom gifts branded with your logo.",
    },
    description: {
      ar: "نوفّر تشكيلة واسعة من الهدايا الدعائية المطبوعة بشعارك لتعزيز حضور علامتك وبناء علاقة مع عملائك.",
      en: "We offer a wide range of logo-branded promotional gifts to strengthen your brand presence and client relationships.",
    },
  },
  {
    slug: "exhibition-stands",
    icon: "exhibition",
    title: { ar: "تجهيز المعارض والستاندات", en: "Exhibition & Stand Setup" },
    short: {
      ar: "ستاندات ومعارض احترافية لإبراز علامتك.",
      en: "Professional stands and exhibition booths.",
    },
    description: {
      ar: "نصمم وننفّذ الستاندات ومساحات العرض للمعارض والمؤتمرات بأسلوب احترافي يلفت انتباه الزوار.",
      en: "We design and build exhibition stands and display spaces for trade shows and conferences that attract visitors.",
    },
  },
  {
    slug: "integrated-advertising",
    icon: "marketing",
    title: { ar: "خدمات الدعاية والإعلان المتكاملة", en: "Integrated Advertising Services" },
    short: {
      ar: "حلول دعائية شاملة من الفكرة للتنفيذ.",
      en: "End-to-end advertising solutions.",
    },
    description: {
      ar: "نقدم حزمة متكاملة من خدمات الدعاية والإعلان تشمل التصميم والطباعة والتنفيذ والتسويق تحت سقف واحد.",
      en: "We deliver integrated advertising services covering design, printing, production, and marketing under one roof.",
    },
  },
];
