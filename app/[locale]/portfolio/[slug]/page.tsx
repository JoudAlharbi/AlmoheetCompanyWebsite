import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import {
  featuredPortfolioItems,
  findProjectBySlug,
  getProjectCoverImage,
  portfolioCategories,
  projects,
} from "@/lib/data/portfolio";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { resolveLocaleParams } from "@/lib/i18n/resolveLocale";
import { buildMetadata } from "@/lib/metadata";
import { localized } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.flatMap((project) =>
    ["ar", "en"].map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/portfolio/[slug]">) {
  const { locale, slug } = await resolveLocaleParams(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return buildMetadata({
    locale,
    title: localized(project.title, locale),
    description: project.summary
      ? localized(project.summary, locale)
      : localized(project.title, locale),
    path: `/portfolio/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/[locale]/portfolio/[slug]">) {
  const { locale, slug } = await resolveLocaleParams(params);
  const dict = getDictionary(locale);
  const project = findProjectBySlug(slug);

  if (!project || project.images.length === 0) notFound();

  const featuredItem = featuredPortfolioItems.find((item) => item.slug === slug);
  const heroImage = getProjectCoverImage(
    project,
    featuredItem?.coverFile,
  );

  const category = portfolioCategories.find((c) => c.slug === project.category);
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative pt-32">
        <div className="relative aspect-[21/9] overflow-hidden md:aspect-[21/8]">
          <Image
            src={heroImage}
            alt={localized(project.title, locale)}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 container pb-10">
            <span className="mb-3 inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-sm font-semibold text-brand-gold">
              {category ? localized(category.label, locale) : ""}
            </span>
            <h1 className="text-3xl font-bold text-white md:text-5xl">
              {localized(project.title, locale)}
            </h1>
            {project.summary && (
              <p className="mt-3 max-w-2xl text-lg text-white/75">
                {localized(project.summary, locale)}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-brand-dark dark:text-white">
                {dict.portfolioPage.gallery}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((src, index) => (
                  <ScrollReveal key={src} delay={index * 0.05}>
                    <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800">
                      <Image
                        src={src}
                        alt={`${localized(project.title, locale)} ${index + 1}`}
                        width={800}
                        height={600}
                        className="h-auto w-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="mb-4 font-bold text-brand-dark dark:text-white">
                  {dict.portfolioPage.category}
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500">{dict.portfolioPage.category}</dt>
                    <dd className="font-semibold text-brand-dark dark:text-white">
                      {category ? localized(category.label, locale) : ""}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">{dict.portfolioPage.year}</dt>
                    <dd className="font-semibold text-brand-dark dark:text-white">
                      {project.year}
                    </dd>
                  </div>
                </dl>
                <Button
                  href={`/${locale}/contact`}
                  className="mt-6 w-full"
                  size="sm"
                >
                  {dict.common.requestQuote}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-8 text-2xl font-bold text-brand-dark dark:text-white">
                {dict.portfolioPage.related}
              </h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/portfolio/${rel.slug}`}
                    className="group overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={rel.images[0]}
                        alt={localized(rel.title, locale)}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand-dark dark:text-white">
                        {localized(rel.title, locale)}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Button href={`/${locale}/portfolio`} variant="outline">
              ← {dict.common.backToPortfolio}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
