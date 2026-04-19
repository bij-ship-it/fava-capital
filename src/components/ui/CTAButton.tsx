import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ChannelSlug } from "@/lib/channels";

const styles: Record<ChannelSlug | "gold" | "neutral", string> = {
  wealth: "border-wealth text-wealth hover:bg-wealth/10",
  markets: "border-markets text-markets hover:bg-markets/10",
  payments: "border-payments text-payments hover:bg-payments/10",
  crypto: "border-crypto text-crypto hover:bg-crypto/10",
  commodities: "border-commodities text-commodities hover:bg-commodities/10",
  gold: "border-gold text-gold hover:bg-gold/10",
  neutral: "border-primary text-primary hover:bg-primary/5",
};

export function CTAButton({
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
    "inline-block border px-10 py-4 text-label transition-colors",
    styles[variant],
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
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
