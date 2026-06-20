"use client";

import PortfolioLightbox from "@/components/portfolio/PortfolioLightbox";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import {
  buildGalleryImages,
  featuredPortfolioSlugs,
  portfolioCategories,
  projects,
  resolveFeaturedProjects,
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

  const featuredProjects = useMemo(() => resolveFeaturedProjects(), []);

  const filtered: Project[] = (
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  ).filter((p) => p.images.length > 0);

  const gridProjects =
    activeCategory === "all"
      ? filtered.filter((p) => !featuredPortfolioSlugs.has(p.slug))
      : filtered;

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

  const showFeatured = activeCategory === "all" && featuredProjects.length > 0;

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
        {portfolioCategories.map((cat) => (
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
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
                  <ScrollReveal
                    key={project.slug}
                    delay={i * 0.1}
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
                  </ScrollReveal>
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
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
              >
                <ScrollReveal delay={Math.min(i * 0.05, 0.35)}>
                  <PortfolioProjectCard
                    project={project}
                    cover={cover}
                    locale={locale}
                    dict={dict}
                    category={category}
                    variant="default"
                    onOpen={() => openLightbox(project, 0)}
                  />
                </ScrollReveal>
              </motion.div>
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
