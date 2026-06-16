import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { localized } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function buildLocalBusinessSchema(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: dict.brand.name,
    description: dict.brand.tagline,
    url: `${siteConfig.url}/${locale}`,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    image: `${siteConfig.url}/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: localized(siteConfig.addressShort, locale),
      addressLocality: locale === "ar" ? "جدة" : "Jeddah",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.mapCoordinates.lat,
      longitude: siteConfig.mapCoordinates.lng,
    },
    hasMap: siteConfig.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.dayOfWeek,
        opens: siteConfig.openingHours.opens,
        closes: siteConfig.openingHours.closes,
      },
    ],
  };
}
