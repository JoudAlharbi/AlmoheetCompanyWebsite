"use client";

import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/clients";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TestimonialsSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function TestimonialsSection({ locale, dict }: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          title={dict.testimonials.title}
          subtitle={dict.testimonials.subtitle}
        />
        <ScrollReveal>
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/50 md:p-12">
              <svg
                className="mb-6 h-10 w-10 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
              </svg>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl">
                    &ldquo;{localized(testimonials[active].quote, locale)}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-dark text-sm font-bold text-white">
                      {localized(testimonials[active].name, locale).charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark dark:text-white">
                        {localized(testimonials[active].name, locale)}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {localized(testimonials[active].role, locale)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-8 bg-brand-blue"
                      : "w-2.5 bg-slate-300 dark:bg-slate-600"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
