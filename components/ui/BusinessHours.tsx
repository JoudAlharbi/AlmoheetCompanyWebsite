import { cn } from "@/lib/utils";

type BusinessHoursProps = {
  weekdays: string;
  friday: string;
  className?: string;
  variant?: "card" | "inline" | "footer";
};

export default function BusinessHours({
  weekdays,
  friday,
  className,
  variant = "card",
}: BusinessHoursProps) {
  if (variant === "inline") {
    return (
      <div className={cn("space-y-1", className)}>
        <p className="text-sm font-semibold leading-relaxed text-brand-dark dark:text-white">
          {weekdays}
        </p>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {friday}
        </p>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className={cn("space-y-1", className)}>
        <p className="text-sm leading-relaxed text-white/70">{weekdays}</p>
        <p className="text-sm text-white/50">{friday}</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mt-2 space-y-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 dark:border-slate-700/80 dark:bg-slate-800/50",
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
      <div className="flex items-start gap-2.5 border-t border-slate-200/80 pt-2.5 dark:border-slate-700/80">
        <span
          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600"
          aria-hidden
        />
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {friday}
        </p>
      </div>
    </div>
  );
}
