"use client";

import Button from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { motion } from "framer-motion";

type HeroSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function HeroSection({ locale, dict }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 md:pt-[92px] lg:pt-[100px]">
      <div className="absolute inset-0 hero-grid opacity-60" />
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="absolute -end-32 top-1/4 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="absolute -start-32 bottom-1/4 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="container relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-16 md:min-h-[calc(100svh-92px)] lg:min-h-[calc(100svh-100px)]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl font-bold leading-[1.15] text-brand-dark dark:text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance"
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl"
        >
          {dict.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href={`/${locale}/contact`} size="lg">
            {dict.hero.ctaPrimary}
          </Button>
          <Button href={`/${locale}/portfolio`} variant="outline" size="lg">
            {dict.hero.ctaSecondary}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="text-xs text-slate-400">{dict.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-5 rounded-full border-2 border-slate-300 p-1 dark:border-slate-600"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-brand-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
