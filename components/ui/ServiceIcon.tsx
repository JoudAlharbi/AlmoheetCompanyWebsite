import { cn } from "@/lib/utils";

type ServiceIconProps = {
  name: string;
  className?: string;
};

export default function ServiceIcon({ name, className }: ServiceIconProps) {
  const props = {
    className: cn("stroke-current fill-none stroke-[1.5]", className),
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "identity":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
    case "logo":
      return (
        <svg {...props}>
          <path d="M12 3L4 21h16L12 3z" />
          <circle cx="12" cy="15" r="2" />
        </svg>
      );
    case "print":
      return (
        <svg {...props}>
          <rect x="6" y="2" width="12" height="8" rx="1" />
          <path d="M6 14h12v6H6z" />
          <path d="M6 10h12" />
        </svg>
      );
    case "stamp":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "gift":
      return (
        <svg {...props}>
          <rect x="3" y="8" width="18" height="13" rx="1" />
          <path d="M12 8v13M3 12h18" />
          <path d="M12 8c-2-3-5-3-5 0s3 0 5 0 5-3 5 0-3 0-5 0z" />
        </svg>
      );
    case "billboard":
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="12" rx="1" />
          <path d="M12 16v4M8 20h8" />
        </svg>
      );
    case "social":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12a4 4 0 008 0" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 14l4-4 3 3 5-6" />
        </svg>
      );
    case "web":
      return (
        <svg {...props}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 8h20M8 4v16" />
        </svg>
      );
    case "motion":
      return (
        <svg {...props}>
          <polygon points="5,3 19,12 5,21" />
        </svg>
      );
    case "packaging":
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "sticker":
      return (
        <svg {...props}>
          <path d="M7 3h7l7 7v11H7V3z" />
          <path d="M14 3v7h7" />
        </svg>
      );
    case "acrylic":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="M8 19v2M16 19v2" />
          <path d="M7 9h10M7 13h6" />
        </svg>
      );
    case "cup":
      return (
        <svg {...props}>
          <path d="M6 8h12v8a4 4 0 01-4 4h-4a4 4 0 01-4-4V8z" />
          <path d="M18 10h1a2 2 0 012 2v1a2 2 0 01-2 2h-1" />
        </svg>
      );
    case "apparel":
      return (
        <svg {...props}>
          <path d="M8 4l4-2 4 2 4 3-2 2v11H6V9L4 7l4-3z" />
        </svg>
      );
    case "exhibition":
      return (
        <svg {...props}>
          <path d="M4 10h16v8H4z" />
          <path d="M8 10V6h8v4M12 18v3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
