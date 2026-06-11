import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { mailtoLink, siteConfig } from "@/lib/site";

type ContactCTAProps = {
  locale: Locale;
  dict: Dictionary;
};

const cardIcons = {
  phone: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  email: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  location: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};

export default function ContactCTA({ locale, dict }: ContactCTAProps) {
  const cards = [
    {
      key: "phone",
      icon: cardIcons.phone,
      label: dict.contactPage.phoneLabel,
      value: siteConfig.phoneDisplay,
      href: siteConfig.phoneHref,
      ltr: true,
    },
    {
      key: "email",
      icon: cardIcons.email,
      label: dict.contactPage.emailLabel,
      value: siteConfig.email,
      href: mailtoLink(),
    },
    {
      key: "location",
      icon: cardIcons.location,
      label: dict.contactPage.addressLabel,
      value: dict.contactPage.viewMap,
      href: siteConfig.mapUrl,
      external: true,
    },
  ] as const;

  return (
    <section className="section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-dark via-brand-navy to-brand-dark px-8 py-16 text-center md:px-16 md:py-20">
            <div className="absolute -end-20 -top-20 h-60 w-60 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="absolute -bottom-20 -start-20 h-60 w-60 rounded-full bg-brand-gold/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
                {dict.ctaSection.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                {dict.ctaSection.subtitle}
              </p>
              <div className="mt-8">
                <Button href={`/${locale}/contact`} variant="gold" size="lg">
                  {dict.ctaSection.button}
                </Button>
              </div>

              <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
                {cards.map((card) => (
                  <a
                    key={card.key}
                    href={card.href}
                    {...("external" in card && card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition-all hover:border-brand-gold/40 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold transition-colors group-hover:bg-brand-gold/25">
                      {card.icon}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {card.label}
                    </span>
                    <span
                      className="text-sm font-semibold text-white transition-colors group-hover:text-brand-gold"
                      dir={"ltr" in card && card.ltr ? "ltr" : undefined}
                    >
                      {card.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
