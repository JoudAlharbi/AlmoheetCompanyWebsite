import type { Localized } from "../site";

export type PortfolioCategory = {
  slug: string;
  label: Localized;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "prints", label: { ar: "مطبوعات", en: "Prints" } },
  { slug: "packaging", label: { ar: "تغليف", en: "Packaging" } },
  { slug: "logos", label: { ar: "شعارات", en: "Logos" } },
  { slug: "shields", label: { ar: "دروع", en: "Shields" } },
  { slug: "identity", label: { ar: "هويات بصرية", en: "Visual Identity" } },
  { slug: "billboards", label: { ar: "لوحات إعلانية", en: "Billboards" } },
];

/** Consistent 4:3 crop for all portfolio imagery */
const portfolioImage = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&h=900&q=85`;

export type Project = {
  slug: string;
  category: string;
  title: Localized;
  client: Localized;
  year: string;
  image: string;
  accent: string;
  summary: Localized;
  challenge: Localized;
  solution: Localized;
  result: Localized;
};

export const projects: Project[] = [
  {
    slug: "nahdi-identity",
    category: "identity",
    title: { ar: "هوية حملة موسمية", en: "Seasonal Campaign Identity" },
    client: { ar: "النهدي", en: "Nahdi" },
    year: "2025",
    image: portfolioImage("photo-1611224923853-80b023f02d71"),
    accent: "from-primary-500 to-brand-dark",
    summary: {
      ar: "هوية بصرية متكاملة لحملة موسمية كبرى.",
      en: "A complete visual identity for a major seasonal campaign.",
    },
    challenge: {
      ar: "إطلاق حملة موسمية تتميز عن المنافسين وتحافظ على هوية العلامة.",
      en: "Launch a seasonal campaign that stands out from competitors while staying on-brand.",
    },
    solution: {
      ar: "طورنا نظاماً بصرياً مرناً يجمع بين روح المناسبة وهوية العلامة الأساسية.",
      en: "We built a flexible visual system blending the occasion's spirit with the core brand identity.",
    },
    result: {
      ar: "زيادة ملحوظة في التفاعل والتعرّف على الحملة عبر الفروع والمنصات.",
      en: "A notable increase in engagement and campaign recognition across branches and platforms.",
    },
  },
  {
    slug: "aljazira-report",
    category: "prints",
    title: { ar: "التقرير السنوي", en: "Annual Report" },
    client: { ar: "بنك الجزيرة", en: "Bank Aljazira" },
    year: "2024",
    image: portfolioImage("photo-1544716278-ca5e3f4abd8c"),
    accent: "from-brand-dark to-brand-navy",
    summary: {
      ar: "تصميم وطباعة تقرير سنوي فاخر.",
      en: "Design and print of a premium annual report.",
    },
    challenge: {
      ar: "تقديم بيانات مالية معقدة بأسلوب بصري واضح وأنيق.",
      en: "Present complex financial data in a clear, elegant visual style.",
    },
    solution: {
      ar: "صممنا نظام إنفوجرافيك متناسق مع طباعة فاخرة بتشطيبات راقية.",
      en: "We designed a consistent infographic system with premium printing and refined finishes.",
    },
    result: {
      ar: "تقرير حاز إشادة واسعة من المساهمين والجهات الرسمية.",
      en: "A report widely praised by shareholders and official entities.",
    },
  },
  {
    slug: "mbl-packaging",
    category: "packaging",
    title: { ar: "تصميم عبوات منتج", en: "Product Packaging" },
    client: { ar: "MBL", en: "MBL" },
    year: "2025",
    image: portfolioImage("photo-1556228720-195a672e8a03"),
    accent: "from-gold-400 to-gold-600",
    summary: {
      ar: "عبوات مبتكرة تميّز المنتج على الرف.",
      en: "Innovative packaging that makes the product stand out.",
    },
    challenge: {
      ar: "تمييز المنتج في سوق مزدحم مع إبراز قيمته.",
      en: "Differentiate the product in a crowded market while highlighting its value.",
    },
    solution: {
      ar: "ابتكرنا تصميم تغليف جريء بخامات مميزة وتجربة فتح فريدة.",
      en: "We created a bold packaging design with premium materials and a unique unboxing experience.",
    },
    result: {
      ar: "ارتفاع في معدل اختيار المنتج عند نقاط البيع.",
      en: "An increase in product selection rate at points of sale.",
    },
  },
  {
    slug: "ams-logo",
    category: "logos",
    title: { ar: "تصميم شعار الشركة", en: "Corporate Logo" },
    client: { ar: "AMS Steel", en: "AMS Steel" },
    year: "2024",
    image: portfolioImage("photo-1561070791-2526d30994b5"),
    accent: "from-primary-600 to-primary-900",
    summary: {
      ar: "شعار صناعي قوي يعكس المتانة.",
      en: "A strong industrial logo reflecting durability.",
    },
    challenge: {
      ar: "تصميم شعار يجمع بين القوة الصناعية والحداثة.",
      en: "Design a logo combining industrial strength with modernity.",
    },
    solution: {
      ar: "اعتمدنا أشكالاً هندسية متينة مع لمسة معاصرة ولوحة ألوان جريئة.",
      en: "We used solid geometric forms with a contemporary touch and a bold color palette.",
    },
    result: {
      ar: "هوية صناعية متماسكة طُبّقت عبر كل نقاط التواصل.",
      en: "A cohesive industrial identity applied across every touchpoint.",
    },
  },
  {
    slug: "excellence-shields",
    category: "shields",
    title: { ar: "دروع تكريم الموظفين", en: "Employee Award Shields" },
    client: { ar: "جهة حكومية", en: "Government Entity" },
    year: "2025",
    image: portfolioImage("photo-1513885535751-8b9238bd12a7"),
    accent: "from-gold-300 to-gold-500",
    summary: {
      ar: "دروع كريستالية فاخرة لحفل التكريم.",
      en: "Premium crystal shields for an awards ceremony.",
    },
    challenge: {
      ar: "تصميم درع راقٍ يعبّر عن قيمة التكريم.",
      en: "Design an elegant shield that conveys the value of recognition.",
    },
    solution: {
      ar: "نفّذنا دروعاً كريستالية بنقش ليزري دقيق وتغليف فاخر.",
      en: "We produced crystal shields with precise laser engraving and premium packaging.",
    },
    result: {
      ar: "دروع نالت إعجاب المكرَّمين والجهة المنظِّمة.",
      en: "Shields admired by recipients and the organizing entity alike.",
    },
  },
  {
    slug: "retail-billboards",
    category: "billboards",
    title: { ar: "حملة لوحات طرقية", en: "Outdoor Billboard Campaign" },
    client: { ar: "علامة تجزئة", en: "Retail Brand" },
    year: "2024",
    image: portfolioImage("photo-1573164713714-d95e4362428a"),
    accent: "from-primary-500 to-brand-dark",
    summary: {
      ar: "لوحات طرقية تغطي مداخل المدينة.",
      en: "Roadside billboards covering the city's entrances.",
    },
    challenge: {
      ar: "إيصال رسالة واضحة في ثوانٍ لجمهور سريع الحركة.",
      en: "Deliver a clear message in seconds to a fast-moving audience.",
    },
    solution: {
      ar: "صممنا لوحات بسيطة بصرياً برسالة قوية وألوان عالية التباين.",
      en: "We designed visually simple billboards with a strong message and high-contrast colors.",
    },
    result: {
      ar: "زيادة في الوعي بالعلامة خلال فترة الحملة.",
      en: "Increased brand awareness throughout the campaign period.",
    },
  },
  {
    slug: "cafe-identity",
    category: "identity",
    title: { ar: "هوية مقهى", en: "Café Brand Identity" },
    client: { ar: "مقهى محلي", en: "Local Café" },
    year: "2025",
    image: portfolioImage("photo-1445116575220-99a8f20b28da"),
    accent: "from-gold-400 to-brand-dark",
    summary: {
      ar: "هوية دافئة لمقهى متخصص.",
      en: "A warm identity for a specialty café.",
    },
    challenge: {
      ar: "بناء هوية تعكس تجربة ضيافة مميزة.",
      en: "Build an identity reflecting a distinctive hospitality experience.",
    },
    solution: {
      ar: "طورنا لوحة ألوان دافئة وخطوطاً مخصصة وتطبيقات على أكواب وتغليف ولوحات.",
      en: "We developed a warm palette, custom typography, and applications on cups, packaging, and signage.",
    },
    result: {
      ar: "هوية متماسكة عززت ولاء العملاء وحضور المقهى.",
      en: "A cohesive identity that strengthened customer loyalty and presence.",
    },
  },
  {
    slug: "menu-prints",
    category: "prints",
    title: { ar: "قوائم طعام فاخرة", en: "Premium Menus" },
    client: { ar: "مطعم راقٍ", en: "Fine Restaurant" },
    year: "2024",
    image: portfolioImage("photo-1568668043996-9a2d09e8c4ce"),
    accent: "from-brand-dark to-primary-500",
    summary: {
      ar: "قوائم مطبوعة بخامات فاخرة.",
      en: "Printed menus with premium materials.",
    },
    challenge: {
      ar: "تصميم قائمة تعكس مستوى المطعم الراقي.",
      en: "Design a menu reflecting the restaurant's upscale level.",
    },
    solution: {
      ar: "اخترنا ورقاً فاخراً وتشطيبات ذهبية مع تنسيق أنيق.",
      en: "We chose premium paper, gold finishes, and an elegant layout.",
    },
    result: {
      ar: "تجربة طعام أكثر فخامة انعكست على رضا الضيوف.",
      en: "A more luxurious dining experience reflected in guest satisfaction.",
    },
  },
  {
    slug: "corporate-stationery",
    category: "prints",
    title: { ar: "مطبوعات مؤسسية", en: "Corporate Stationery" },
    client: { ar: "شركة استثمار", en: "Investment Firm" },
    year: "2025",
    image: portfolioImage("photo-1507679799987-c73779587ccf"),
    accent: "from-brand-dark to-brand-navy",
    summary: {
      ar: "بطاقات وظروف وملفات بتصميم مؤسسي راقٍ.",
      en: "Business cards, envelopes, and folders with refined corporate design.",
    },
    challenge: {
      ar: "توحيد مطبوعات الشركة بمظهر يعكس مصداقيتها المالية.",
      en: "Unify company print materials with a look that reflects financial credibility.",
    },
    solution: {
      ar: "صممنا نظام مطبوعات متكامل بخامات فاخرة وتشطيبات دقيقة.",
      en: "We designed an integrated print system with premium materials and precise finishes.",
    },
    result: {
      ar: "هوية مطبوعة متناسقة عززت حضور الشركة في كل تواصل رسمي.",
      en: "A consistent print identity that elevated the company's presence in every formal touchpoint.",
    },
  },
  {
    slug: "luxury-packaging",
    category: "packaging",
    title: { ar: "تغليف منتجات فاخرة", en: "Luxury Product Packaging" },
    client: { ar: "علامة تجارية", en: "Luxury Brand" },
    year: "2024",
    image: portfolioImage("photo-1608306448193-e3a32d5b38d4"),
    accent: "from-gold-400 to-gold-600",
    summary: {
      ar: "عبوات فاخرة تعكس قيمة المنتج.",
      en: "Premium packaging that reflects product value.",
    },
    challenge: {
      ar: "إبراز فخامة المنتج منذ أول نظرة على الرف.",
      en: "Convey product luxury from the first glance on the shelf.",
    },
    solution: {
      ar: "اعتمدنا خامات مميزة وتشطيبات ذهبية وتصميم بسيط أنيق.",
      en: "We used distinctive materials, gold finishes, and an elegant minimalist design.",
    },
    result: {
      ar: "تغليف رفع من تصور العلامة وزاد من جاذبية المنتج.",
      en: "Packaging that elevated brand perception and increased product appeal.",
    },
  },
  {
    slug: "storefront-signage",
    category: "billboards",
    title: { ar: "هوية واجهة متجر", en: "Storefront Branding" },
    client: { ar: "علامة تجزئة", en: "Retail Brand" },
    year: "2025",
    image: portfolioImage("photo-1582719478250-c89cae4dc85b"),
    accent: "from-primary-500 to-brand-dark",
    summary: {
      ar: "تصميم وتنفيذ هوية واجهة متجر تجاري.",
      en: "Design and execution of a retail storefront identity.",
    },
    challenge: {
      ar: "جذب انتباه الزوار وتمييز المتجر في موقع مزدحم.",
      en: "Attract visitors and distinguish the store in a busy location.",
    },
    solution: {
      ar: "طورنا نظام لافتات وواجهة متناسق مع الهوية البصرية للعلامة.",
      en: "We developed a signage and facade system aligned with the brand's visual identity.",
    },
    result: {
      ar: "زيادة في عدد الزوار وتعزيز حضور العلامة في المنطقة.",
      en: "Increased foot traffic and stronger brand presence in the area.",
    },
  },
  {
    slug: "exhibition-booth",
    category: "identity",
    title: { ar: "جناح معرض تجاري", en: "Exhibition Booth" },
    client: { ar: "شركة تقنية", en: "Tech Company" },
    year: "2024",
    image: portfolioImage("photo-1540575467063-178a50c2d87b"),
    accent: "from-primary-600 to-brand-navy",
    summary: {
      ar: "تصميم جناح احترافي لمعرض دولي.",
      en: "Professional booth design for an international exhibition.",
    },
    challenge: {
      ar: "إبراز العلامة في معرض مزدحم بمنافسين عالميين.",
      en: "Stand out at a crowded exhibition among global competitors.",
    },
    solution: {
      ar: "صممنا جناحاً معمارياً جذاباً بمواد عالية الجودة وإضاءة استراتيجية.",
      en: "We designed an architecturally striking booth with premium materials and strategic lighting.",
    },
    result: {
      ar: "جناح حصد اهتماماً واسعاً وزاد من فرص الشراكات التجارية.",
      en: "A booth that drew wide attention and increased business partnership opportunities.",
    },
  },
  {
    slug: "vehicle-branding",
    category: "billboards",
    title: { ar: "تغليف مركبات", en: "Vehicle Branding" },
    client: { ar: "شركة لوجستية", en: "Logistics Company" },
    year: "2025",
    image: portfolioImage("photo-1619642751034-765bf136d6eb"),
    accent: "from-brand-dark to-primary-500",
    summary: {
      ar: "تصميم وتنفيذ تغليف أسطول مركبات.",
      en: "Design and wrap of a fleet of branded vehicles.",
    },
    challenge: {
      ar: "تحويل أسطول التوصيل إلى وسيط إعلاني متحرك.",
      en: "Turn a delivery fleet into a mobile advertising medium.",
    },
    solution: {
      ar: "طورنا تصميم تغليف جريء وواضح يحافظ على هوية الشركة على كل مركبة.",
      en: "We developed a bold, clear wrap design maintaining company identity on every vehicle.",
    },
    result: {
      ar: "زيادة في التعرّف على العلامة في شوارع المدينة.",
      en: "Increased brand recognition across city streets.",
    },
  },
  {
    slug: "social-campaign",
    category: "identity",
    title: { ar: "حملة وسائل التواصل", en: "Social Media Campaign" },
    client: { ar: "علامة استهلاكية", en: "Consumer Brand" },
    year: "2024",
    image: portfolioImage("photo-1611162616305-c69b4a5a6f8b"),
    accent: "from-primary-500 to-gold-400",
    summary: {
      ar: "تصاميم حملة رقمية متكاملة.",
      en: "Integrated digital campaign designs.",
    },
    challenge: {
      ar: "بناء حضور رقمي متناسق عبر جميع المنصات.",
      en: "Build a consistent digital presence across all platforms.",
    },
    solution: {
      ar: "أنشأنا نظاماً بصرياً للحملة يشمل منشورات وقصص وإعلانات.",
      en: "We created a campaign visual system covering posts, stories, and ads.",
    },
    result: {
      ar: "نمو ملحوظ في التفاعل والوصول خلال فترة الحملة.",
      en: "Notable growth in engagement and reach during the campaign period.",
    },
  },
];
