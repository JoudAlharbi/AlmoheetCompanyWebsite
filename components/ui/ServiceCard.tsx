import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import type { Service } from "@/lib/data/services";
import { ScrollReveal } from "./AnimatedCounter";
import ServiceIcon from "./ServiceIcon";
import Button from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  const title = localized(service.title, locale);
  const summary = compact
    ? localized(service.short, locale)
    : localized(service.description, locale);

  return (
    <ScrollReveal className="h-full">
      <article
        className={cn(
          "group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/25 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-blue/35",
          !service.image && "p-6 md:p-7",
        )}
      >
        {service.image && (
          <div className="relative aspect-[16/7] w-full overflow-hidden">
            <Image
              src={service.image}
              alt={title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-slate-900/80" />
          </div>
        )}

        <div className={cn("flex flex-1 flex-col", service.image && "p-6 md:p-7")}>
          <div className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-gold/10 text-brand-blue ring-1 ring-brand-blue/10 transition-all duration-300 group-hover:scale-105 group-hover:from-brand-blue/15 group-hover:to-brand-gold/15 group-hover:ring-brand-blue/20 dark:from-brand-blue/20 dark:to-brand-gold/10">
            <ServiceIcon name={service.icon} className="h-7 w-7" />
          </div>

          <h3 className="mb-2 text-lg font-bold leading-snug text-brand-dark dark:text-white md:text-xl">
            {title}
          </h3>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-[0.9375rem]">
            {summary}
          </p>

          {ctaLabel && (
            <Button
              href={`/${locale}/contact?service=${service.slug}`}
              variant="outline"
              size="sm"
              className="mt-auto w-fit opacity-90 transition-opacity group-hover:opacity-100"
            >
              {ctaLabel}
            </Button>
          )}
        </div>

        <div
          className="pointer-events-none absolute -end-10 -top-10 h-28 w-28 rounded-full bg-brand-gold/5 transition-transform duration-500 group-hover:scale-150"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-start scale-x-0 bg-gradient-to-r from-brand-blue to-brand-gold transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden
        />
      </article>
    </ScrollReveal>
  );
}
