"use client";

import type { GalleryImage } from "@/lib/data/portfolio";
import type { Locale } from "@/lib/i18n/config";
import { localized } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PortfolioLightboxProps = {
  locale: Locale;
  images: GalleryImage[];
  activeId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export default function PortfolioLightbox({
  locale,
  images,
  activeId,
  onClose,
  onNavigate,
}: PortfolioLightboxProps) {
  const activeIndex = images.findIndex((img) => img.id === activeId);
  const active = activeIndex >= 0 ? images[activeIndex] : null;

  const goNext = useCallback(() => {
    if (activeIndex < 0) return;
    const next = images[(activeIndex + 1) % images.length];
    onNavigate(next.id);
  }, [activeIndex, images, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex < 0) return;
    const prev = images[(activeIndex - 1 + images.length) % images.length];
    onNavigate(prev.id);
  }, [activeIndex, images, onNavigate]);

  useEffect(() => {
    if (!activeId) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") locale === "ar" ? goPrev() : goNext();
      if (e.key === "ArrowLeft") locale === "ar" ? goNext() : goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, goNext, goPrev, locale, onClose]);

  const [touchStart, setTouchStart] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-brand-dark/95 backdrop-blur-md"
          role="dialog"
          aria-modal
          aria-label={localized(active.title, locale)}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-white md:text-base">
                {localized(active.title, locale)}
              </p>
              {active.summary && (
                <p className="mt-0.5 truncate text-xs text-white/60 md:text-sm">
                  {localized(active.summary, locale)}
                </p>
              )}
            </div>
            <p className="shrink-0 text-sm tabular-nums text-white/70">
              {activeIndex + 1} / {images.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-16"
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStart === null) return;
              const delta = e.changedTouches[0].clientX - touchStart;
              if (Math.abs(delta) > 50) {
                if (delta > 0) locale === "ar" ? goNext() : goPrev();
                else locale === "ar" ? goPrev() : goNext();
              }
              setTouchStart(null);
            }}
          >
            <button
              type="button"
              onClick={goPrev}
              className="absolute start-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
              aria-label="Previous"
            >
              <svg className="h-6 w-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative h-full max-h-[70vh] w-full max-w-5xl"
            >
              <Image
                src={active.src}
                alt={localized(active.title, locale)}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={goNext}
              className="absolute end-2 z-10 hidden h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 md:flex"
              aria-label="Next"
            >
              <svg className="h-6 w-6 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
