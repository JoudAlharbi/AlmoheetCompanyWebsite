import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { localized } from "@/lib/utils";

type LocationMapSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function LocationMapSection({ locale, dict }: LocationMapSectionProps) {
  const address = localized(siteConfig.addressFull, locale);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900/50">
      <div className="border-b border-slate-200/80 px-6 py-5 dark:border-slate-800 md:px-8">
        <h2 className="text-xl font-bold text-brand-dark dark:text-white md:text-2xl">
          {dict.contactPage.mapTitle}
        </h2>
      </div>

      <div className="grid lg:grid-cols-5">
        <div className="relative min-h-[280px] lg:col-span-3 lg:min-h-[440px]">
          <iframe
            src={siteConfig.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={dict.contactPage.mapTitle}
            className="absolute inset-0 h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-center gap-5 border-t border-slate-200/80 p-6 dark:border-slate-800 md:p-8 lg:col-span-2 lg:border-t-0 lg:border-s border-slate-200/80 dark:lg:border-slate-800">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20">
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {dict.contactPage.addressLabel}
            </p>
            <p className="mt-2 text-base font-bold leading-relaxed text-brand-dark dark:text-white">
              {address}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {dict.contactPage.mapDescription}
            </p>
          </div>

          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-dark dark:hover:text-white"
          >
            {dict.contactPage.openInGoogleMaps}
            <svg
              className="h-4 w-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
