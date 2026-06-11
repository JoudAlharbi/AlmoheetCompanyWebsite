"use client";

import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type AboutPageContentProps = {
  dict: Dictionary;
};

const valueIcons = ["✦", "◆", "●", "▲", "★"];

const pillars = [
  { key: "who" as const, icon: "🏢" },
  { key: "vision" as const, icon: "👁" },
  { key: "mission" as const, icon: "🎯" },
  { key: "goal" as const, icon: "🚀" },
];

export default function AboutPageContent({ dict }: AboutPageContentProps) {
  const pillarData = {
    who: { title: dict.about.whoTitle, desc: dict.about.whoDesc },
    vision: { title: dict.about.visionTitle, desc: dict.about.visionDesc },
    mission: { title: dict.about.missionTitle, desc: dict.about.missionDesc },
    goal: { title: dict.about.goalTitle, desc: dict.about.goalDesc },
  };

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="container relative">
          <SectionHeading
            badge={dict.about.badge}
            title={dict.about.title}
            subtitle={dict.about.intro}
            align="start"
          />
        </div>
      </section>

      <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map(({ key, icon }, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="flex h-full gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-slate-800 dark:bg-slate-900/50 md:p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-2xl dark:bg-brand-blue/20">
                    {icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-brand-dark dark:text-white">
                      {pillarData[key].title}
                    </h3>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      {pillarData[key].desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            title={dict.about.valuesTitle}
            subtitle={dict.about.valuesSubtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.about.values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 text-center transition-all duration-300 hover:border-brand-gold/40 hover:shadow-gold dark:border-slate-800 dark:bg-slate-900/50 md:p-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-blue/10 text-2xl font-bold text-brand-gold transition-transform group-hover:scale-110">
                    {valueIcons[i]}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-brand-dark dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {value.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
