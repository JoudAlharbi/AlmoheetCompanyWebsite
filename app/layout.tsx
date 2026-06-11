import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Muhait Advertising Agency",
  description: "Premium advertising agency in Jeddah, Saudi Arabia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
