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

type NewProps = {
  channel: ChannelSlug;
  label: string;
  name?: never;
  color?: never;
  className?: string;
};

type LegacyProps = {
  channel?: never;
  label?: never;
  name: string;
  color: string;
  className?: string;
};

export type ChannelBadgeProps = NewProps | LegacyProps;

export function ChannelBadge(props: ChannelBadgeProps) {
  const { className } = props;

  if ("channel" in props && props.channel) {
    const { bar, text } = colorClasses[props.channel];
    return (
      <div className={cn("flex items-center gap-3 mb-6", className)}>
        <span className={cn("h-[2px] w-6", bar)} />
        <span className={cn("text-label", text)}>{props.label}</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <span className="h-[2px] w-6" style={{ backgroundColor: props.color }} />
      <span className="text-label" style={{ color: props.color }}>
        {props.name}
      </span>
    </div>
  );
}
