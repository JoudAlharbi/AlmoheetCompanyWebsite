"use client";

import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import { clients, successStories } from "@/lib/data/clients";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";

type ClientsPageContentProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function ClientsPageContent({
  locale,
  dict,
}: ClientsPageContentProps) {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="container relative">
          <SectionHeading
            badge={dict.clientsPage.badge}
            title={dict.clientsPage.title}
            subtitle={dict.clientsPage.subtitle}
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-dark dark:text-white">
            {dict.clientsPage.logosTitle}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client, i) => (
              <ScrollReveal key={client.name} delay={i * 0.04}>
                <div className="flex h-28 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50">
                  <span className="text-center text-sm font-bold text-slate-500 transition-colors hover:text-brand-dark dark:text-slate-400 dark:hover:text-white md:text-base">
                    {client.name}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container">
          <SectionHeading
            title={dict.clientsPage.storiesTitle}
            subtitle={dict.clientsPage.storiesSubtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {successStories.map((story, i) => (
              <ScrollReveal key={story.title.ar} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50 md:p-8">
                  <p className="mb-1 text-sm font-semibold text-brand-gold">
                    {localized(story.client, locale)}
                  </p>
                  <h3 className="mb-4 text-lg font-bold text-brand-dark dark:text-white">
                    {localized(story.title, locale)}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {localized(story.desc, locale)}
                  </p>
                  <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                    <p className="text-3xl font-bold text-brand-blue">
                      {story.metric}
                    </p>
                    <p className="text-sm text-slate-500">
                      {localized(story.metricLabel, locale)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection locale={locale} dict={dict} />
    </>
  );
}
