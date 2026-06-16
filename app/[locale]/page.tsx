import ContactCTA from "@/components/sections/ContactCTA";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustedClients from "@/components/sections/TrustedClients";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.home,
    description: dict.hero.subtitle,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection locale={locale} dict={dict} />
      <StatsSection dict={dict} locale={locale} />
      <WhyChooseUs dict={dict} />
      <ServicesOverview locale={locale} dict={dict} />
      <FeaturedProjects locale={locale} dict={dict} />
      <TestimonialsSection locale={locale} dict={dict} />
      <TrustedClients dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
