import ClientLogoGrid from "@/components/ui/ClientLogoGrid";
import SectionHeading from "@/components/ui/SectionHeading";
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
        <ClientLogoGrid logoAlt={dict.clientsSection.logoAlt} />
      </div>
    </section>
  );
}
