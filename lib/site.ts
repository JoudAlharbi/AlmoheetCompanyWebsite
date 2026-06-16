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
    lat: 21.5476478,
    lng: 39.2056505,
  },
  addressShort: {
    ar: "حي العزيزية، شارع غرناطة",
    en: "Al Aziziyah District, Granada Street",
  } as Localized,
  addressFull: {
    ar: "وكالة المحيط للدعاية والإعلان — حي العزيزية، شارع غرناطة، جدة",
    en: "Al Moheet Advertising Agency — Al Aziziyah District, Granada Street, Jeddah",
  } as Localized,
  openingHours: {
    dayOfWeek: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    opens: "09:00",
    closes: "23:00",
  },
  social: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    behance: "https://behance.net",
  },
} as const;

export function getMapEmbed(locale: Locale) {
  const { lat, lng } = siteConfig.mapCoordinates;
  return `https://maps.google.com/maps?q=${lat},${lng}&hl=${locale}&z=16&output=embed`;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoLink() {
  return `mailto:${siteConfig.email}`;
}
