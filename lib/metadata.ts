import type { Locale } from "@/lib/i18n/config";
import { localeDirection } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

type MetadataParams = {
  locale: Locale;
  title?: string;
  description?: string;
  path?: string;
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
}: MetadataParams): Metadata {
  const dict = getDictionary(locale);
  const fullTitle = title
    ? `${title} | ${dict.brand.shortName}`
    : `${dict.brand.name} | ${dict.brand.tagline}`;
  const desc = description ?? dict.brand.tagline;
  const url = `${siteConfig.url}/${locale}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        ar: `${siteConfig.url}/ar${path}`,
        en: `${siteConfig.url}/en${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/logo.png",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: dict.brand.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [{ url: "/logo.png", alt: dict.brand.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ["/logo.png"],
    },
  };
}

export function getLocaleDir(locale: Locale) {
  return localeDirection[locale];
}
