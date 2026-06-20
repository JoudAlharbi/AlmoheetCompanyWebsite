"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";

type ClientLogoGridProps = {
  logos: string[];
  logoAlt: string;
  cardHeight?: "sm" | "md";
};

export default function ClientLogoGrid({
  logos,
  logoAlt,
  cardHeight = "sm",
}: ClientLogoGridProps) {
  const heightClass = cardHeight === "md" ? "h-28 md:h-32" : "h-24 md:h-28";

  if (logos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-5">
      {logos.map((logo, i) => (
        <ScrollReveal key={logo} delay={Math.min(i * 0.04, 0.6)}>
          <div
            className={`group flex ${heightClass} items-center justify-center rounded-xl border border-slate-200/80 bg-white p-3 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:border-brand-blue/30 hover:shadow-soft dark:border-slate-700/80 dark:bg-slate-900/50 sm:p-4`}
          >
            <div className="relative h-full w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100">
              <Image
                src={logo}
                alt={`${logoAlt} ${i + 1}`}
                fill
                loading="lazy"
                className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
