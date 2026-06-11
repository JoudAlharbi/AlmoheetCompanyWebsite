"use client";

import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import {
  portfolioCategories,
  projects,
  type Project,
} from "@/lib/data/portfolio";
import { localized } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioGalleryProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function PortfolioGallery({ locale, dict }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered: Project[] =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
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
            onClick={() => setActiveCategory(cat.slug)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              activeCategory === cat.slug
                ? "bg-brand-blue text-white shadow-glow"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {localized(cat.label, locale)}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <ScrollReveal>
                <Link
                  href={`/${locale}/portfolio/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900/50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={localized(project.title, locale)}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-300 group-hover:bg-brand-dark/40" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-dark">
                        {dict.common.viewProject}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-semibold text-brand-gold">
                      {localized(project.client, locale)}
                    </p>
                    <h3 className="font-bold text-brand-dark dark:text-white">
                      {localized(project.title, locale)}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {localized(project.summary, locale)}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
