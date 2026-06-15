import localFont from "next/font/local";

export const tajawal = localFont({
  src: [
    {
      path: "../fonts/tajawal/Tajawal-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/tajawal/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/tajawal/Tajawal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/tajawal/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/tajawal/Tajawal-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/tajawal/Tajawal-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
  display: "swap",
});

export const inter = localFont({
  src: "../fonts/inter/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});
