import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import { projects, portfolioCategories } from "@/lib/data/portfolio";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
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
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return buildMetadata({
    locale,
    title: localized(project.title, locale),
    description: localized(project.summary, locale),
    path: `/portfolio/${slug}`,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const category = portfolioCategories.find((c) => c.slug === project.category);
  const related = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <section className="relative pt-32">
        <div className="relative aspect-[21/9] overflow-hidden md:aspect-[21/8]">
          <Image
            src={project.image}
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
            <p className="mt-2 text-white/70">
              {localized(project.client, locale)} · {project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              {(
                [
                  ["challenge", project.challenge],
                  ["solution", project.solution],
                  ["result", project.result],
                ] as const
              ).map(([key, content], i) => (
                <ScrollReveal key={key} delay={i * 0.1}>
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-brand-dark dark:text-white">
                      {dict.portfolioPage[key]}
                    </h2>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      {localized(content, locale)}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                <h3 className="mb-4 font-bold text-brand-dark dark:text-white">
                  {dict.portfolioPage.category}
                </h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-slate-500">{dict.portfolioPage.client}</dt>
                    <dd className="font-semibold text-brand-dark dark:text-white">
                      {localized(project.client, locale)}
                    </dd>
                  </div>
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
                        src={rel.image}
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
