import type { Locale } from "./config";
import ar from "./dictionaries/ar";
import type { Dictionary } from "./dictionaries/types";
import en from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { ar, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.ar;
}

export type { Dictionary };
