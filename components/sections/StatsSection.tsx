"use client";

import AnimatedCounter, { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type StatsSectionProps = {
  dict: Dictionary;
};

export default function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="section-padding relative overflow-hidden bg-brand-dark text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute -start-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -end-32 top-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />

      <div className="container relative">
        <SectionHeading
          title={dict.stats.title}
          subtitle={dict.stats.subtitle}
          dark
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {dict.stats.items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08} className="h-full">
              <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-gold/30 hover:bg-white/[0.07] md:p-8">
                <p className="text-4xl font-bold tabular-nums tracking-tight text-brand-gold md:text-5xl">
                  <AnimatedCounter
                    value={item.value}
                    prefix={item.prefix ?? ""}
                    suffix={item.suffix ?? ""}
                    duration={2.2}
                  />
                </p>
                <h3 className="mt-5 text-lg font-bold leading-snug text-white md:text-xl">
                  {item.label}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.desc}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
