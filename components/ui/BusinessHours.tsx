import { cn } from "@/lib/utils";

type BusinessHoursProps = {
  weekdays: string;
  className?: string;
  variant?: "card" | "inline" | "footer";
};

export default function BusinessHours({
  weekdays,
  className,
  variant = "card",
}: BusinessHoursProps) {
  if (variant === "inline" || variant === "footer") {
    return (
      <p
        className={cn(
          "text-sm font-semibold leading-relaxed",
          variant === "footer"
            ? "text-white/70"
            : "text-brand-dark dark:text-white",
          className,
        )}
      >
        {weekdays}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "mt-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 dark:border-slate-700/80 dark:bg-slate-800/50",
        className,
      )}
    >
      <div className="flex items-start gap-2.5">
        <span
          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
          aria-hidden
        />
        <p className="text-sm font-semibold leading-relaxed text-brand-dark dark:text-white">
          {weekdays}
        </p>
      </div>
    </div>
  );
}
