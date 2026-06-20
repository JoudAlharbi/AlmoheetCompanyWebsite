import ClientLogoGrid from "@/components/ui/ClientLogoGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { getClientLogos } from "@/lib/data/clientLogos";
import type { Dictionary } from "@/lib/i18n/getDictionary";

type TrustedClientsProps = {
  dict: Dictionary;
};

export default function TrustedClients({ dict }: TrustedClientsProps) {
  const logos = getClientLogos();

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="container">
        <SectionHeading
          title={dict.clientsSection.title}
          subtitle={dict.clientsSection.subtitle}
        />
        <ClientLogoGrid logos={logos} logoAlt={dict.clientsSection.logoAlt} />
      </div>
    </section>
  );
}
