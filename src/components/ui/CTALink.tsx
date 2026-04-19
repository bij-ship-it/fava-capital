import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ChannelSlug } from "@/lib/channels";

const colorClass: Record<ChannelSlug | "gold" | "neutral", string> = {
  wealth: "text-wealth",
  markets: "text-markets",
  payments: "text-payments",
  crypto: "text-crypto",
  commodities: "text-commodities",
  gold: "text-gold",
  neutral: "text-secondary hover:text-primary",
};

export function CTALink({
  href,
  children,
  variant = "neutral",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ChannelSlug | "gold" | "neutral";
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "text-label link-hover transition-colors",
    colorClass[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children} &nearr;
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children} &rarr;
    </Link>
  );
}
