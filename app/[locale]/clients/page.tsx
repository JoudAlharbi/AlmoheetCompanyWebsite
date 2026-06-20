import ClientsPageContent from "@/components/pages/ClientsPageContent";
import { getClientLogos } from "@/lib/data/clientLogos";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/clients">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    title: dict.nav.clients,
    description: dict.clientsPage.subtitle,
    path: "/clients",
  });
}

export default async function ClientsPage({
  params,
}: PageProps<"/[locale]/clients">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const clientLogos = getClientLogos();

  return (
    <ClientsPageContent locale={locale} dict={dict} clientLogos={clientLogos} />
  );
}
