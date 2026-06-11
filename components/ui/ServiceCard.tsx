import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import type { Service } from "@/lib/data/services";
import { ScrollReveal } from "./AnimatedCounter";
import ServiceIcon from "./ServiceIcon";
import Button from "./Button";

type ServiceCardProps = {
  service: Service;
  locale: Locale;
  ctaLabel?: string;
  compact?: boolean;
};

export default function ServiceCard({
  service,
  locale,
  ctaLabel,
  compact,
}: ServiceCardProps) {
  return (
    <ScrollReveal>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-blue/40 md:p-8">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 text-brand-blue transition-transform duration-300 group-hover:scale-110 dark:from-brand-blue/20 dark:to-brand-gold/20">
          <ServiceIcon name={service.icon} className="h-7 w-7" />
        </div>
        <h3 className="mb-3 text-xl font-bold text-brand-dark dark:text-white">
          {localized(service.title, locale)}
        </h3>
        <p className="mb-6 flex-1 text-slate-600 leading-relaxed dark:text-slate-400">
          {compact
            ? localized(service.short, locale)
            : localized(service.description, locale)}
        </p>
        {ctaLabel && (
          <Button
            href={`/${locale}/contact?service=${service.slug}`}
            variant="outline"
            size="sm"
            className="mt-auto w-fit"
          >
            {ctaLabel}
          </Button>
        )}
        <div className="pointer-events-none absolute -end-8 -top-8 h-24 w-24 rounded-full bg-brand-gold/5 transition-transform duration-500 group-hover:scale-150" />
      </article>
    </ScrollReveal>
  );
}
