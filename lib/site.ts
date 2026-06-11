import type { Locale } from "./i18n/config";

export type Localized = Record<Locale, string>;

export const siteConfig = {
  url: "https://almuhait.sa",
  whatsapp: "966502534149",
  phoneDisplay: "+966 50 253 4149",
  phoneHref: "tel:+966502534149",
  email: "Almohet26@gmail.com",
  mapUrl: "https://maps.app.goo.gl/Aa4AHF2nvNbKSQCy7?g_st=iw",
  mapEmbed:
    "https://www.google.com/maps?q=https%3A%2F%2Fmaps.app.goo.gl%2FAa4AHF2nvNbKSQCy7&hl=ar&z=16&output=embed",
  addressShort: {
    ar: "جدة، المملكة العربية السعودية",
    en: "Jeddah, Saudi Arabia",
  } as Localized,
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink() {
  return `mailto:${siteConfig.email}`;
}
