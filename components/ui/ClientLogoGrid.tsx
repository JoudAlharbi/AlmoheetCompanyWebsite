"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/AnimatedCounter";
import { clients } from "@/lib/data/clients";

type ClientLogoGridProps = {
  logoAlt: string;
  cardHeight?: "sm" | "md";
};

export default function ClientLogoGrid({
  logoAlt,
  cardHeight = "sm",
}: ClientLogoGridProps) {
  const heightClass = cardHeight === "md" ? "h-28 md:h-32" : "h-24 md:h-28";

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-5">
      {clients.map((client, i) => (
        <ScrollReveal key={client.id} delay={Math.min(i * 0.04, 0.6)}>
          <div
            className={`group flex ${heightClass} items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:scale-[1.03] hover:border-brand-blue/25 hover:shadow-soft dark:border-slate-200/60`}
          >
            <div className="relative h-full w-full">
              <Image
                src={client.logo}
                alt={`${logoAlt} ${i + 1}`}
                fill
                className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
