import ServiceCard from "@/components/ui/ServiceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";
import { services } from "@/lib/data/services";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.services,
    description: dict.servicesPage.subtitle,
    path: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="container relative">
          <SectionHeading
            badge={dict.servicesPage.badge}
            title={dict.servicesPage.title}
            subtitle={dict.servicesPage.subtitle}
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                locale={locale}
                ctaLabel={dict.servicesPage.cta}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
