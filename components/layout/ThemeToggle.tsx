"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

type ThemeToggleProps = {
  label: string;
};

export default function ThemeToggle({ label }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        aria-label={label}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-brand-dark transition-all hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:border-brand-blue"
    >
      {theme === "light" ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="5" />
          <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}
