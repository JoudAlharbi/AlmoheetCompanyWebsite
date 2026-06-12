"use client";

import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { portfolioCategories, projects } from "@/lib/data/portfolio";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type FeaturedProjectsProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function FeaturedProjects({ locale, dict }: FeaturedProjectsProps) {
  const featured = projects.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title={dict.featured.title}
          subtitle={dict.featured.subtitle}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => {
            const category = portfolioCategories.find((c) => c.slug === project.category);

            return (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/${locale}/portfolio/${project.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-slate-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={localized(project.title, locale)}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    {category && (
                      <span className="mb-2 inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold text-brand-gold">
                        {localized(category.label, locale)}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {localized(project.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {dict.common.viewProject} →
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href={`/${locale}/portfolio`} variant="outline" size="lg">
            {dict.common.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
