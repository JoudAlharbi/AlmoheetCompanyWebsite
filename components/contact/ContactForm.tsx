"use client";

import Button from "@/components/ui/Button";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { services } from "@/lib/data/services";
import { localized } from "@/lib/utils";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

type ContactFormProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function ContactForm({ locale, dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-green-800 dark:text-green-300">
          {dict.contactPage.success}
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-brand-dark dark:text-white">
            {dict.contactPage.name}
          </label>
          <input
            type="text"
            required
            placeholder={dict.contactPage.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-brand-dark dark:text-white">
            {dict.contactPage.email}
          </label>
          <input
            type="email"
            required
            placeholder={dict.contactPage.emailPlaceholder}
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-brand-dark dark:text-white">
            {dict.contactPage.phone}
          </label>
          <input
            type="tel"
            placeholder={dict.contactPage.phonePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-semibold text-brand-dark dark:text-white">
            {dict.contactPage.service}
          </label>
          <select required className={inputClass} defaultValue="">
            <option value="" disabled>
              {dict.contactPage.servicePlaceholder}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {localized(s.title, locale)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold text-brand-dark dark:text-white">
          {dict.contactPage.message}
        </label>
        <textarea
          required
          rows={5}
          placeholder={dict.contactPage.messagePlaceholder}
          className={inputClass}
        />
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full sm:w-auto">
        {loading ? "..." : dict.contactPage.submit}
      </Button>
    </form>
  );
}
