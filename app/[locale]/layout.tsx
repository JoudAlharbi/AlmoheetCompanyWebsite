import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingScreen from "@/components/layout/LoadingScreen";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { localeDirection, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { resolveLocale } from "@/lib/i18n/resolveLocale";
import { buildMetadata } from "@/lib/metadata";
import { inter, tajawal } from "@/lib/fonts";
import "../globals.css";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  const dir = localeDirection[locale];

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${tajawal.variable} ${inter.variable} font-sans antialiased`}
      >
        <LocalBusinessSchema locale={locale} />
        <ThemeProvider>
          <LoadingScreen label={dict.common.loading} locale={locale} />
          <Header locale={locale} dict={dict} />
          <main>{children}</main>
          <Footer locale={locale} dict={dict} />
          <WhatsAppButton label={dict.common.chatWhatsapp} />
        </ThemeProvider>
      </body>
    </html>
  );
}
