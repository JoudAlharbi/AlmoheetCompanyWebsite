import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";

type ServicesOverviewProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function ServicesOverview({ locale, dict }: ServicesOverviewProps) {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="container">
        <SectionHeading
          title={dict.servicesOverview.title}
          subtitle={dict.servicesOverview.subtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              locale={locale}
              compact
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href={`/${locale}/services`} variant="secondary" size="lg">
            {dict.common.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
}
