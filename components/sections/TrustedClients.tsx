import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/lib/data/clients";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type TrustedClientsProps = {
  dict: Dictionary;
};

export default function TrustedClients({ dict }: TrustedClientsProps) {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="container">
        <SectionHeading
          title={dict.clientsSection.title}
          subtitle={dict.clientsSection.subtitle}
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 0.05}>
              <div className="flex h-24 items-center justify-center rounded-xl border border-slate-200/80 bg-white px-4 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50">
                <span className="text-center text-sm font-bold text-slate-400 transition-colors hover:text-brand-dark dark:hover:text-white md:text-base">
                  {client.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
