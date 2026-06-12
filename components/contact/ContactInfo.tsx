import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { mailtoLink, siteConfig } from "@/lib/site";
import { cn, localized } from "@/lib/utils";
import Button from "@/components/ui/Button";

type ContactInfoProps = {
  locale: Locale;
  dict: Dictionary;
  variant?: "page" | "footer" | "mobile";
  className?: string;
};

const icons = {
  location: (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  phone: (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  email: (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
};

export default function ContactInfo({
  locale,
  dict,
  variant = "page",
  className,
}: ContactInfoProps) {
  const address = localized(siteConfig.addressShort, locale);

  if (variant === "footer") {
    return (
      <ul className={cn("space-y-4 text-sm", className)}>
        <li className="flex items-start gap-3 text-white/70">
          <span className="mt-0.5 text-brand-gold">{icons.location}</span>
          <span>{address}</span>
        </li>
        <li>
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-3 text-white/70 transition-colors hover:text-brand-gold"
          >
            <span className="text-brand-gold">{icons.phone}</span>
            <span dir="ltr">{siteConfig.phoneDisplay}</span>
          </a>
        </li>
        <li>
          <a
            href={mailtoLink()}
            className="flex items-center gap-3 break-all text-white/70 transition-colors hover:text-brand-gold"
          >
            <span className="text-brand-gold">{icons.email}</span>
            <span>{siteConfig.email}</span>
          </a>
        </li>
        <li>
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-gold transition-colors hover:text-white"
          >
            {icons.location}
            <span>{dict.contactPage.viewMap}</span>
          </a>
        </li>
      </ul>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={cn("mt-8 space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800", className)}>
        <p className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-blue">
          {dict.contactPage.infoTitle}
        </p>
        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <span className="text-brand-blue">{icons.phone}</span>
          <span dir="ltr">{siteConfig.phoneDisplay}</span>
        </a>
        <a
          href={mailtoLink()}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:border-brand-blue/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          <span className="text-brand-blue">{icons.email}</span>
          <span className="break-all">{siteConfig.email}</span>
        </a>
        <Button
          href={siteConfig.mapUrl}
          external
          variant="outline"
          size="sm"
          className="w-full"
        >
          {icons.location}
          {dict.contactPage.viewMap}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {[
        {
          key: "location",
          icon: icons.location,
          label: dict.contactPage.addressLabel,
          value: address,
          href: siteConfig.mapUrl,
          external: true,
        },
        {
          key: "phone",
          icon: icons.phone,
          label: dict.contactPage.phoneLabel,
          value: siteConfig.phoneDisplay,
          href: siteConfig.phoneHref,
          ltr: true,
        },
        {
          key: "email",
          icon: icons.email,
          label: dict.contactPage.emailLabel,
          value: siteConfig.email,
          href: mailtoLink(),
        },
        {
          key: "hours",
          icon: (
            <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>
          ),
          label: dict.contactPage.hoursLabel,
          value: dict.contactPage.hours,
        },
      ].map((item) => (
        <div
          key={item.key}
          className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 transition-shadow hover:shadow-soft dark:border-slate-700 dark:bg-slate-900/80"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20">
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-1 block text-base font-semibold text-brand-dark transition-colors hover:text-brand-blue dark:text-white"
                dir={item.ltr ? "ltr" : undefined}
              >
                {item.value}
              </a>
            ) : (
              <p className="mt-1 text-base font-semibold text-brand-dark dark:text-white">
                {item.value}
              </p>
            )}
          </div>
        </div>
      ))}

    </div>
  );
}
