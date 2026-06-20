import type { Localized } from "../site";

export type Testimonial = {
  name: Localized;
  role: Localized;
  quote: Localized;
};

export const testimonials: Testimonial[] = [
  {
    name: { ar: "أحمد العمري", en: "Ahmed Al-Amri" },
    role: { ar: "مدير التسويق، النهدي", en: "Marketing Director, Nahdi" },
    quote: {
      ar: "فريق المحيط فهم رؤيتنا بدقة ونفّذها باحترافية عالية. النتائج فاقت توقعاتنا والالتزام بالمواعيد كان مثالياً.",
      en: "The Al Muhait team understood our vision precisely and executed it with great professionalism. The results exceeded our expectations and the punctuality was perfect.",
    },
  },
  {
    name: { ar: "سارة القحطاني", en: "Sara Al-Qahtani" },
    role: { ar: "مديرة العلامة، بنك الجزيرة", en: "Brand Manager, Bank Aljazira" },
    quote: {
      ar: "جودة العمل والاهتمام بأدق التفاصيل جعلا التعاون مع المحيط تجربة مميزة. ننصح بهم بثقة تامة.",
      en: "The quality of work and attention to detail made working with Al Muhait a remarkable experience. We recommend them with complete confidence.",
    },
  },
  {
    name: { ar: "خالد المطيري", en: "Khalid Al-Mutairi" },
    role: { ar: "الرئيس التنفيذي، AMS Steel", en: "CEO, AMS Steel" },
    quote: {
      ar: "حوّل فريق المحيط هويتنا التجارية بالكامل. أصبح حضورنا في السوق أقوى بكثير بفضل إبداعهم.",
      en: "The Al Muhait team completely transformed our brand identity. Our market presence is now much stronger thanks to their creativity.",
    },
  },
];

export type SuccessStory = {
  client: Localized;
  title: Localized;
  metric: string;
  metricLabel: Localized;
  desc: Localized;
};

export const successStories: SuccessStory[] = [
  {
    client: { ar: "النهدي", en: "Nahdi" },
    title: { ar: "حملة موسمية متكاملة", en: "Integrated Seasonal Campaign" },
    metric: "+38%",
    metricLabel: { ar: "نمو التفاعل", en: "Engagement growth" },
    desc: {
      ar: "هوية حملة متكاملة عززت التعرّف على العلامة عبر الفروع والمنصات الرقمية.",
      en: "A complete campaign identity that boosted brand recognition across branches and digital platforms.",
    },
  },
  {
    client: { ar: "AMS Steel", en: "AMS Steel" },
    title: { ar: "إعادة بناء الهوية", en: "Brand Rebuild" },
    metric: "100%",
    metricLabel: { ar: "تطبيق متناسق", en: "Consistent rollout" },
    desc: {
      ar: "هوية صناعية جديدة طُبّقت عبر كل نقاط التواصل بشكل متماسك واحترافي.",
      en: "A new industrial identity applied cohesively and professionally across every touchpoint.",
    },
  },
  {
    client: { ar: "MBL", en: "MBL" },
    title: { ar: "تصميم تغليف منتج", en: "Product Packaging Design" },
    metric: "+25%",
    metricLabel: { ar: "اختيار المنتج", en: "Product selection" },
    desc: {
      ar: "تغليف مبتكر رفع من معدل اختيار المنتج عند نقاط البيع.",
      en: "Innovative packaging that increased the product selection rate at points of sale.",
    },
  },
];
