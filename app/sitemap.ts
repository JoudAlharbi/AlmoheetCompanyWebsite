import { siteConfig } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/portfolio", "/clients", "/contact"];
  const locales = ["ar", "en"];

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${siteConfig.url}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
  );
}
