"use client";

import PortfolioLightbox from "@/components/portfolio/PortfolioLightbox";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import {
  buildGalleryImages,
  portfolioCategories,
  projects,
  type Project,
} from "@/lib/data/portfolio";
import { localized } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PortfolioGalleryProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function PortfolioGallery({ locale, dict }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);

  const filtered: Project[] =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const galleryImages = useMemo(() => buildGalleryImages(), []);
  const filteredGalleryImages = useMemo(
    () =>
      activeCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory, galleryImages],
  );

  const openLightbox = (project: Project, imageIndex = 0) => {
    setLightboxId(`${project.slug}-${imageIndex}`);
  };

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
            activeCategory === "all"
              ? "bg-brand-blue text-white shadow-glow"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          {dict.portfolioPage.all}
        </button>
        {portfolioCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActiveCategory(cat.slug)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              activeCategory === cat.slug
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {localized(cat.label, locale)}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const cover = project.images[0];
            const title = localized(project.title, locale);
            const category = portfolioCategories.find((c) => c.slug === project.category);

            return (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => openLightbox(project)}
                  className="group w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-start shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-blue/40"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={cover}
                      alt={title}
                      width={800}
                      height={600}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                    {project.images.length > 1 && (
                      <span className="absolute end-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand-dark backdrop-blur-sm">
                        {project.images.length} {locale === "ar" ? "صور" : "photos"}
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      {category && (
                        <span className="mb-2 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold text-brand-gold">
                          {localized(category.label, locale)}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-white md:text-xl">{title}</h3>
                      {project.summary && (
                        <p className="mt-1 line-clamp-2 text-sm text-white/75">
                          {localized(project.summary, locale)}
                        </p>
                      )}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-dark shadow-lg">
                        {dict.portfolioPage.viewGallery}
                      </span>
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-500 dark:text-slate-400">
          {dict.portfolioPage.emptyCategory}
        </p>
      )}

      <PortfolioLightbox
        locale={locale}
        images={filteredGalleryImages.length ? filteredGalleryImages : galleryImages}
        activeId={lightboxId}
        onClose={() => setLightboxId(null)}
        onNavigate={setLightboxId}
      />
    </>
  );
}
