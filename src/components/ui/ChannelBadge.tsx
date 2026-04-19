import { cn } from "@/lib/cn";
import type { ChannelSlug } from "@/lib/channels";

const colorClasses: Record<
  ChannelSlug,
  { bar: string; text: string }
> = {
  wealth: { bar: "bg-wealth", text: "text-wealth" },
  markets: { bar: "bg-markets", text: "text-markets" },
  payments: { bar: "bg-payments", text: "text-payments" },
  crypto: { bar: "bg-crypto", text: "text-crypto" },
  commodities: { bar: "bg-commodities", text: "text-commodities" },
};

export function ChannelBadge({
  channel,
  label,
  className,
}: {
  channel: ChannelSlug;
  label: string;
  className?: string;
}) {
  const { bar, text } = colorClasses[channel];
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <span className={cn("h-[2px] w-6", bar)} />
      <span className={cn("text-label", text)}>{label}</span>
    </div>
  );
}
