import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const LOGO_PATH = "/logo.png";

type LogoProps = {
  locale: string;
  className?: string;
  size?: "header" | "footer" | "loading";
};

const sizeClasses = {
  header: "h-[55px] w-auto md:h-[70px] lg:h-[85px]",
  footer: "h-[40px] w-auto md:h-[48px]",
  loading: "h-[48px] w-auto md:h-[60px]",
};

export default function Logo({
  locale,
  className,
  size = "header",
}: LogoProps) {
  const alt =
    locale === "ar"
      ? "وكالة المحيط للدعاية والإعلان"
      : "Al Muhait Advertising Agency";

  return (
    <Link
      href={`/${locale}`}
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-90",
        className,
      )}
      aria-label={alt}
    >
      <Image
        src={LOGO_PATH}
        alt={alt}
        width={703}
        height={355}
        priority={size === "header"}
        className={cn("object-contain object-center", sizeClasses[size])}
        sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 340px"
      />
    </Link>
  );
}
