"use client";

import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import PortfolioProjectCard from "@/components/portfolio/PortfolioProjectCard";
import { portfolioCategories, resolveFeaturedProjects } from "@/lib/data/portfolio";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

type FeaturedProjectsProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function FeaturedProjects({ locale, dict }: FeaturedProjectsProps) {
  const featured = resolveFeaturedProjects();

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title={dict.featured.title}
          subtitle={dict.featured.subtitle}
        />
        <div className="grid gap-5 md:gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
          {featured.map(({ project, cover }, i) => {
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
                  href={`/${locale}/portfolio/${project.slug}`}
                />
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
