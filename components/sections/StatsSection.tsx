import AnimatedCounter, { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type StatsSectionProps = {
  dict: Dictionary;
};

export default function StatsSection({ dict }: StatsSectionProps) {
  return (
    <section className="section-padding bg-brand-dark text-white">
      <div className="container">
        <SectionHeading
          title={dict.stats.title}
          subtitle={dict.stats.subtitle}
          dark
        />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {dict.stats.items.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-bold text-brand-gold md:text-5xl lg:text-6xl">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/70 md:text-base">
                  {item.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
