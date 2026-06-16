import AboutPageContent from "@/components/pages/AboutPageContent";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.about,
    description: dict.about.intro,
    path: "/about",
  });
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return <AboutPageContent dict={dict} />;
}
