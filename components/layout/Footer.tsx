import Logo from "@/components/layout/Logo";
import ContactInfo from "@/components/contact/ContactInfo";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { services } from "@/lib/data/services";
import { localized } from "@/lib/utils";
import Link from "next/link";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-brand-dark text-white dark:border-slate-800">
      <div className="container section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo locale={locale} size="footer" className="mb-4" />
            <p className="text-sm leading-relaxed text-white/70">
              {dict.footer.about}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {(
                [
                  ["home", ""],
                  ["about", "/about"],
                  ["services", "/services"],
                  ["portfolio", "/portfolio"],
                  ["clients", "/clients"],
                  ["contact", "/contact"],
                ] as const
              ).map(([key, href]) => (
                <li key={key}>
                  <Link
                    href={`/${locale}${href}`}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              {dict.footer.servicesTitle}
            </h3>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${locale}/services`}
                    className="text-sm text-white/70 transition-colors hover:text-brand-gold"
                  >
                    {localized(service.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-gold">
              {dict.footer.contactTitle}
            </h3>
            <ContactInfo locale={locale} dict={dict} variant="footer" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">
            © {year} {dict.brand.name}. {dict.footer.rights}.
          </p>
          <p className="text-sm text-white/50">{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
