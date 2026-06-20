"use client";

import type { Project, PortfolioCategory } from "@/lib/data/portfolio";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import Image from "next/image";

type PortfolioProjectCardProps = {
  project: Project;
  cover: string;
  locale: Locale;
  dict: Dictionary;
  category?: PortfolioCategory;
  variant?: "featured" | "default";
  featuredLayout?: "hero" | "standard";
  onOpen: () => void;
};

export default function PortfolioProjectCard({
  project,
  cover,
  locale,
  dict,
  category,
  variant = "default",
  featuredLayout = "standard",
  onOpen,
}: PortfolioProjectCardProps) {
  const title = localized(project.title, locale);
  const isFeatured = variant === "featured";

  const heightClass =
    isFeatured && featuredLayout === "hero"
      ? "min-h-[340px] sm:min-h-[400px] lg:min-h-[560px]"
      : isFeatured
        ? "min-h-[260px] sm:min-h-[300px] lg:min-h-[268px]"
        : "aspect-[4/3]";

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative flex w-full overflow-hidden rounded-2xl border text-start transition-all duration-500 hover:scale-[1.02] hover:shadow-glow ${
        isFeatured
          ? "h-full border-brand-blue/20 bg-gradient-to-b from-slate-900 to-brand-dark shadow-lg shadow-brand-dark/20 hover:border-brand-blue/40 dark:border-brand-blue/25"
          : "border-slate-200/80 bg-white shadow-sm hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-blue/40"
      }`}
    >
      <div className={`relative w-full overflow-hidden ${heightClass}`}>
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          sizes={
            isFeatured
              ? featuredLayout === "hero"
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 100vw, 40vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
            isFeatured
              ? "from-brand-dark via-brand-dark/50 to-brand-dark/10 opacity-90 group-hover:opacity-100"
              : "from-brand-dark/90 via-brand-dark/30 to-transparent opacity-85 group-hover:opacity-100"
          }`}
        />
        {isFeatured && (
          <span className="absolute start-4 top-4 rounded-full bg-brand-gold/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-dark shadow-md">
            {locale === "ar" ? "مميز" : "Featured"}
          </span>
        )}
        {project.images.length > 1 && (
          <span className="absolute end-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand-dark backdrop-blur-sm">
            {project.images.length} {locale === "ar" ? "صور" : "photos"}
          </span>
        )}
        <div
          className={`absolute inset-x-0 bottom-0 ${
            isFeatured ? "p-6 md:p-8" : "p-5 md:p-6"
          }`}
        >
          {category && (
            <span className="mb-2 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold text-brand-gold ring-1 ring-brand-gold/20">
              {localized(category.label, locale)}
            </span>
          )}
          <h3
            className={`font-bold leading-snug text-white ${
              isFeatured && featuredLayout === "hero"
                ? "text-xl md:text-2xl lg:text-3xl"
                : isFeatured
                  ? "text-lg md:text-xl"
                  : "text-lg md:text-xl"
            }`}
          >
            {title}
          </h3>
          {project.summary && (
            <p className="mt-2 line-clamp-2 text-sm text-white/75 md:text-base">
              {localized(project.summary, locale)}
            </p>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/0 opacity-0 transition-all duration-300 group-hover:bg-brand-dark/20 group-hover:opacity-100">
          <span className="translate-y-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-dark shadow-lg transition-transform duration-300 group-hover:translate-y-0">
            {dict.portfolioPage.viewGallery}
          </span>
        </div>
      </div>
    </button>
  );
}
