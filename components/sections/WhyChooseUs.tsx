import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type WhyChooseUsProps = {
  dict: Dictionary;
};

const icons = [
  <svg key="0" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="1" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" d="M12 6v6l4 2" />
  </svg>,
  <svg key="2" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="3" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>,
];

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title={dict.why.title}
          subtitle={dict.why.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50 md:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white dark:bg-brand-blue/20">
                  {icons[i]}
                </div>
                <h3 className="mb-3 text-lg font-bold text-brand-dark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
