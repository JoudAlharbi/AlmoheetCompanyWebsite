import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/sections/ContactCTA";
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
    title: dict.nav.portfolio,
    description: dict.portfolioPage.subtitle,
    path: "/portfolio",
  });
}

export default async function PortfolioPage({
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
            badge={dict.portfolioPage.badge}
            title={dict.portfolioPage.title}
            subtitle={dict.portfolioPage.subtitle}
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <PortfolioGallery locale={locale} dict={dict} />
        </div>
      </section>

      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
