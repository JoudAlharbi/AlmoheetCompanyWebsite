import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function resolveLocaleParams<T extends { locale: string }>(
  params: Promise<T>,
): Promise<Omit<T, "locale"> & { locale: Locale }> {
  const resolved = await params;
  if (!isLocale(resolved.locale)) notFound();
  return { ...resolved, locale: resolved.locale };
}
