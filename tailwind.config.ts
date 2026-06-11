import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          blue: "#0D6EFD",
          dark: "#0B3A75",
          gold: "#D9A441",
          navy: "#072B57",
        },
        primary: {
          50: "#eaf2ff",
          100: "#d6e4ff",
          200: "#aecaff",
          300: "#7caaff",
          400: "#4d89ff",
          500: "#0D6EFD",
          600: "#0a57ca",
          700: "#0B3A75",
          800: "#092f5e",
          900: "#072342",
        },
        gold: {
          50: "#fbf6ea",
          100: "#f5e9cc",
          200: "#ecd49a",
          300: "#e2bf66",
          400: "#D9A441",
          500: "#c08d2f",
          600: "#9c7026",
          700: "#75531d",
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-tajawal)", "var(--font-inter)", "system-ui", "sans-serif"],
        latin: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 58, 117, 0.18)",
        glow: "0 0 60px -12px rgba(13, 110, 253, 0.45)",
        gold: "0 12px 40px -12px rgba(217, 164, 65, 0.45)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(13,110,253,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,110,253,0.06) 1px, transparent 1px)",
        "hero-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(13,110,253,0.18) 0%, rgba(13,110,253,0) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
