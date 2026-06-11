import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import { siteConfig, whatsappLink } from "@/lib/site";
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
    title: dict.nav.contact,
    description: dict.contactPage.subtitle,
    path: "/contact",
  });
}

export default async function ContactPage({
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
            badge={dict.contactPage.badge}
            title={dict.contactPage.title}
            subtitle={dict.contactPage.subtitle}
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/50 md:p-8">
                <h2 className="mb-6 text-xl font-bold text-brand-dark dark:text-white">
                  {dict.contactPage.formTitle}
                </h2>
                <ContactForm locale={locale} dict={dict} />
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" delay={0.15}>
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 to-white p-6 shadow-soft dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-900/50 md:p-8">
                  <h3 className="mb-6 text-lg font-bold text-brand-dark dark:text-white">
                    {dict.contactPage.infoTitle}
                  </h3>
                  <ContactInfo locale={locale} dict={dict} variant="page" />
                </div>

                <Button
                  href={whatsappLink(
                    locale === "ar"
                      ? "مرحباً، أود الاستفسار عن خدماتكم"
                      : "Hello, I'd like to inquire about your services",
                  )}
                  external
                  variant="gold"
                  className="w-full"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {dict.common.chatWhatsapp}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold text-brand-dark dark:text-white">
                {dict.contactPage.mapTitle}
              </h2>
              <Button href={siteConfig.mapUrl} external variant="secondary" size="sm">
                {dict.contactPage.viewMap}
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-soft dark:border-slate-800">
              <iframe
                src={siteConfig.mapEmbed}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={dict.contactPage.mapTitle}
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
