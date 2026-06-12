import type { Locale } from "./i18n/config";

export type Localized = Record<Locale, string>;

export const siteConfig = {
  url: "https://almuhait.sa",
  whatsapp: "966502534149",
  phoneDisplay: "+966 50 253 4149",
  phoneHref: "tel:+966502534149",
  email: "Almohet26@gmail.com",
  mapUrl: "https://maps.app.goo.gl/Aa4AHF2nvNbKSQCy7?g_st=iw",
  mapCoordinates: {
    lat: 21.5810048,
    lng: 39.223296,
  },
  mapPlaceId: "0x15c3d1361a84a46f:0x99a360f44d31891d",
  mapEmbed:
    "https://maps.google.com/maps?q=21.5810048,39.223296&hl=ar&z=16&output=embed",
  addressShort: {
    ar: "حي التضامن العربي، Mishrifah، جدة 23336",
    en: "Al Tadamun Al Arabi, Mishrifah, Jeddah 23336",
  } as Localized,
  addressFull: {
    ar: "وكالة المحيط للدعاية والإعلان — حي التضامن العربي، Mishrifah، جدة",
    en: "Al Moheet Advertising Agency — Al Tadamun Al Arabi, Mishrifah, Jeddah",
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
