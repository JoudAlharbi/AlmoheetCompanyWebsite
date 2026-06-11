"use client";

import Logo from "@/components/layout/Logo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import ContactInfo from "@/components/contact/ContactInfo";
import type { Dictionary } from "@/lib/i18n/getDictionary";
import type { Locale } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems = [
  { key: "home", href: "" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "/portfolio" },
  { key: "clients", href: "/clients" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    return href === "" ? pathname === full : pathname.startsWith(full);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-soft backdrop-blur-xl dark:bg-slate-950/90"
            : "bg-white/95 backdrop-blur-sm dark:bg-slate-950/95",
        )}
      >
        <div className="container grid h-20 grid-cols-[minmax(0,auto)_1fr_auto] items-center gap-4 md:h-[92px] md:gap-6 lg:h-[100px] lg:gap-8">
          <Logo locale={locale} className="justify-self-start" />

          <nav
            className="hidden items-center justify-center gap-1 lg:flex"
            aria-label="Main"
          >
            {navItems.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors link-underline",
                  isActive(href)
                    ? "text-brand-blue"
                    : "text-slate-700 hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue",
                )}
              >
                {dict.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-dark md:inline-flex lg:hidden dark:hover:text-white"
              aria-label={siteConfig.phoneDisplay}
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span dir="ltr" className="hidden sm:inline">
                {siteConfig.phoneDisplay}
              </span>
            </a>
            <ThemeToggle label={dict.common.toggleTheme} />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden dark:border-slate-700 dark:bg-slate-800"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.common.menu}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: locale === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 start-0 w-[min(320px,85vw)] bg-white p-6 shadow-2xl dark:bg-slate-950"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <Logo locale={locale} className="max-w-[75%]" size="header" />
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label={dict.common.close}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="space-y-1">
                {navItems.map(({ key, href }) => (
                  <li key={key}>
                    <Link
                      href={`/${locale}${href}`}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                        isActive(href)
                          ? "bg-brand-blue/10 text-brand-blue"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
                      )}
                    >
                      {dict.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
              <ContactInfo locale={locale} dict={dict} variant="mobile" />
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
