"use client";

import PortfolioLightbox from "@/components/portfolio/PortfolioLightbox";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import {
  buildProjectGalleryImages,
  getActivePortfolioCategories,
  getGridProjects,
  portfolioCategories,
  resolveFeaturedProjects,
  type GalleryImage,
  type Project,
} from "@/lib/data/portfolio";
import { localized } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type PortfolioGalleryProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function PortfolioGallery({ locale, dict }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);

  const featuredProjects = useMemo(() => resolveFeaturedProjects(), []);
  const activeCategories = useMemo(() => getActivePortfolioCategories(), []);

  const gridProjects = useMemo(
    () =>
      getGridProjects({
        category: activeCategory,
        excludeFeatured: activeCategory === "all",
      }),
    [activeCategory],
  );

  const openLightbox = (project: Project, imageIndex = 0) => {
    const images = buildProjectGalleryImages(project);
    setLightboxImages(images);
    setLightboxId(`${project.slug}-${imageIndex}`);
  };

  const closeLightbox = () => {
    setLightboxId(null);
    setLightboxImages([]);
  };

  const showFeatured = activeCategory === "all" && featuredProjects.length > 0;
  const hasResults = showFeatured || gridProjects.length > 0;

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-12">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
            activeCategory === "all"
              ? "bg-brand-blue text-white shadow-glow"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          {dict.portfolioPage.all}
        </button>
        {activeCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActiveCategory(cat.slug)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat.slug
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {localized(cat.label, locale)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.section
            key="featured-section"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="mb-14 md:mb-20"
          >
            <div className="mb-8 md:mb-10">
              <h2 className="text-2xl font-bold text-brand-dark dark:text-white md:text-3xl lg:text-4xl">
                {dict.featured.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                {dict.featured.subtitle}
              </p>
            </div>

            <div className="grid gap-5 md:gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
              {featuredProjects.map(({ project, cover, imageIndex }, i) => {
                const category = portfolioCategories.find(
                  (c) => c.slug === project.category,
                );

                return (
                  <div
                    key={project.slug}
                    className={i === 0 ? "lg:row-span-2" : "h-full"}
                  >
                    <PortfolioProjectCard
                      project={project}
                      cover={cover}
                      locale={locale}
                      dict={dict}
                      category={category}
                      variant="featured"
                      featuredLayout={i === 0 ? "hero" : "standard"}
                      onOpen={() => openLightbox(project, imageIndex)}
                    />
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {showFeatured && gridProjects.length > 0 && (
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
          <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            {dict.portfolioPage.all}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700" />
        </div>
      )}

      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {gridProjects.map((project, i) => {
            const cover = project.images[0];
            if (!cover) return null;

            const category = portfolioCategories.find(
              (c) => c.slug === project.category,
            );

            return (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.32) }}
              >
                <PortfolioProjectCard
                  project={project}
                  cover={cover}
                  locale={locale}
                  dict={dict}
                  category={category}
                  variant="default"
                  onOpen={() => openLightbox(project, 0)}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {!hasResults && (
        <p className="py-16 text-center text-slate-500 dark:text-slate-400">
          {dict.portfolioPage.emptyCategory}
        </p>
      )}

      <PortfolioLightbox
        locale={locale}
        images={lightboxImages}
        activeId={lightboxId}
        onClose={closeLightbox}
        onNavigate={setLightboxId}
      />
    </>
  );
}
