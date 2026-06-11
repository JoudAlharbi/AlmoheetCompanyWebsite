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
    slug: "visual-identity",
    icon: "identity",
    title: { ar: "الهوية البصرية", en: "Visual Identity" },
    short: {
      ar: "بناء هوية متكاملة تعكس شخصية علامتك.",
      en: "Building a complete identity that reflects your brand's personality.",
    },
    description: {
      ar: "نصمم هوية بصرية متكاملة تشمل الألوان والخطوط والعناصر التي تميز علامتك التجارية وتمنحها حضوراً متناسقاً عبر كل المنصات.",
      en: "We craft a complete visual identity — colors, typography, and elements that distinguish your brand with a consistent presence across all platforms.",
    },
  },
  {
    slug: "logo-design",
    icon: "logo",
    title: { ar: "تصميم الشعارات", en: "Logo Design" },
    short: {
      ar: "شعارات مميزة تترك انطباعاً لا يُنسى.",
      en: "Distinctive logos that leave a lasting impression.",
    },
    description: {
      ar: "نبتكر شعارات فريدة وعصرية تعبّر عن جوهر علامتك التجارية وتبقى راسخة في ذهن جمهورك.",
      en: "We create unique, modern logos that capture the essence of your brand and stay memorable to your audience.",
    },
  },
  {
    slug: "commercial-print",
    icon: "print",
    title: { ar: "المطبوعات التجارية", en: "Commercial Printing" },
    short: {
      ar: "مطبوعات احترافية بأعلى جودة طباعة.",
      en: "Professional prints with top-tier print quality.",
    },
    description: {
      ar: "نوفّر تصميم وطباعة كل احتياجاتك من البطاقات والبروشورات والفواتير والمظاريف بجودة عالية ودقة في التنفيذ.",
      en: "We design and print all your needs — business cards, brochures, invoices, and envelopes — with high quality and precise execution.",
    },
  },
  {
    slug: "stamps",
    icon: "stamp",
    title: { ar: "الأختام", en: "Stamps" },
    short: {
      ar: "أختام دقيقة بمختلف الأنواع والأحجام.",
      en: "Precise stamps in all types and sizes.",
    },
    description: {
      ar: "نصنع الأختام الرسمية والتجارية بمختلف الأنواع تلقائية ويدوية بدقة عالية وجودة تدوم طويلاً.",
      en: "We produce official and commercial stamps — automatic and manual — with high precision and long-lasting quality.",
    },
  },
  {
    slug: "shields",
    icon: "shield",
    title: { ar: "الدروع التذكارية", en: "Commemorative Shields" },
    short: {
      ar: "دروع تكريم أنيقة تليق بالمناسبات.",
      en: "Elegant award shields worthy of any occasion.",
    },
    description: {
      ar: "نصمم وننفّذ الدروع التذكارية من الكريستال والمعدن والخشب لتكريم الإنجازات والمناسبات بأسلوب راقٍ.",
      en: "We design and produce commemorative shields in crystal, metal, and wood to honor achievements and occasions with elegance.",
    },
  },
  {
    slug: "promo-gifts",
    icon: "gift",
    title: { ar: "الهدايا الدعائية", en: "Promotional Gifts" },
    short: {
      ar: "هدايا تحمل علامتك إلى عملائك.",
      en: "Gifts that carry your brand to your clients.",
    },
    description: {
      ar: "نوفّر تشكيلة واسعة من الهدايا الدعائية المخصصة بشعار علامتك لتعزيز حضورها وبناء علاقة دائمة مع عملائك.",
      en: "We offer a wide range of custom promotional gifts branded with your logo to boost presence and build lasting client relationships.",
    },
  },
  {
    slug: "billboards",
    icon: "billboard",
    title: { ar: "اللوحات الإعلانية", en: "Billboards & Signage" },
    short: {
      ar: "لوحات تجذب الأنظار في كل مكان.",
      en: "Signage that grabs attention everywhere.",
    },
    description: {
      ar: "نصمم وننفّذ اللوحات الإعلانية الخارجية والداخلية واللوحات المضيئة بأحدث التقنيات لتعزيز ظهور علامتك.",
      en: "We design and install indoor and outdoor billboards and illuminated signs using the latest technology to maximize your brand's visibility.",
    },
  },
  {
    slug: "social-media",
    icon: "social",
    title: { ar: "إدارة وسائل التواصل الاجتماعي", en: "Social Media Management" },
    short: {
      ar: "إدارة احترافية تنمّي حضورك الرقمي.",
      en: "Professional management that grows your digital presence.",
    },
    description: {
      ar: "ندير حساباتك على منصات التواصل الاجتماعي بمحتوى إبداعي وخطة منظمة تزيد من تفاعل جمهورك وولائه لعلامتك.",
      en: "We manage your social media accounts with creative content and a structured plan that increases audience engagement and loyalty.",
    },
  },
  {
    slug: "digital-marketing",
    icon: "marketing",
    title: { ar: "التسويق الرقمي", en: "Digital Marketing" },
    short: {
      ar: "حملات مدروسة تحقق نتائج قابلة للقياس.",
      en: "Data-driven campaigns with measurable results.",
    },
    description: {
      ar: "نخطط وننفّذ حملات تسويقية رقمية عبر مختلف القنوات لاستهداف جمهورك المثالي وتحقيق أعلى عائد على الاستثمار.",
      en: "We plan and run digital marketing campaigns across channels to reach your ideal audience and maximize return on investment.",
    },
  },
  {
    slug: "web-design",
    icon: "web",
    title: { ar: "تصميم المواقع الإلكترونية", en: "Web Design" },
    short: {
      ar: "مواقع عصرية سريعة وسهلة الاستخدام.",
      en: "Modern, fast, and user-friendly websites.",
    },
    description: {
      ar: "نصمم ونطوّر مواقع إلكترونية احترافية متجاوبة مع جميع الأجهزة، تجمع بين الجمال والأداء العالي وتجربة مستخدم متميزة.",
      en: "We design and develop professional, responsive websites that combine beauty, high performance, and an outstanding user experience.",
    },
  },
  {
    slug: "motion-graphics",
    icon: "motion",
    title: { ar: "الموشن جرافيك", en: "Motion Graphics" },
    short: {
      ar: "فيديوهات متحركة تروي قصة علامتك.",
      en: "Animated videos that tell your brand's story.",
    },
    description: {
      ar: "ننتج فيديوهات موشن جرافيك إبداعية تبسّط أفكارك وتقدّم رسالتك بأسلوب جذاب يلفت الأنظار ويزيد التفاعل.",
      en: "We produce creative motion graphics videos that simplify your ideas and deliver your message in an engaging, eye-catching way.",
    },
  },
  {
    slug: "packaging",
    icon: "packaging",
    title: { ar: "التغليف والعبوات", en: "Packaging & Boxes" },
    short: {
      ar: "تصاميم تغليف تميّز منتجك على الرف.",
      en: "Packaging designs that make your product stand out.",
    },
    description: {
      ar: "نصمم عبوات وتغليفاً مبتكراً يعكس قيمة منتجك ويجذب المستهلك ويعزز تجربة العلامة التجارية.",
      en: "We design innovative packaging that reflects your product's value, attracts consumers, and elevates the brand experience.",
    },
  },
];
