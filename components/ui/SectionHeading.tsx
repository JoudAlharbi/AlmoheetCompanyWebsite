import { cn } from "@/lib/utils";
import { ScrollReveal } from "./AnimatedCounter";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
  className?: string;
  dark?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-start max-w-3xl",
        className,
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-semibold text-brand-blue dark:bg-brand-blue/20 dark:text-brand-blue">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-balance",
          dark ? "text-white" : "text-brand-dark dark:text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed md:text-xl",
            dark
              ? "text-white/80"
              : "text-slate-600 dark:text-slate-400",
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
