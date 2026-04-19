import { cn } from "@/lib/cn";
import type { ChannelSlug } from "@/lib/channels";

type Size = "standard" | "large";

const accentColorClass: Record<ChannelSlug, string> = {
  wealth: "bg-wealth",
  markets: "bg-markets",
  payments: "bg-payments",
  crypto: "bg-crypto",
  commodities: "bg-commodities",
};

export function Card({
  children,
  size = "standard",
  accent,
  className,
  bordered = false,
}: {
  children: React.ReactNode;
  size?: Size;
  accent?: ChannelSlug;
  className?: string;
  bordered?: boolean;
}) {
  const padding =
    size === "large" ? "p-14 max-lg:p-8" : "p-8 max-lg:p-6";

  return (
    <div
      className={cn(
        "bg-surface",
        bordered && "border border-border",
        padding,
        className,
      )}
    >
      {accent && (
        <div className={cn("h-[2px] w-full mb-6", accentColorClass[accent])} />
      )}
      {children}
    </div>
  );
}
