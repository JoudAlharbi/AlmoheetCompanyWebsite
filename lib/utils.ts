export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function localized<T extends Record<string, string>>(
  obj: T,
  locale: keyof T,
): string {
  return obj[locale] ?? obj.ar ?? Object.values(obj)[0] ?? "";
}
