import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LoadingScreen from "@/components/layout/LoadingScreen";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { locales, localeDirection, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildMetadata } from "@/lib/metadata";
import { Tajawal, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({ locale });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const dir = localeDirection[locale];

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${tajawal.variable} ${inter.variable} font-sans antialiased`}
      >
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
