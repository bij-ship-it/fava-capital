interface ChannelBadgeProps {
  name: string;
  color: string;
}

export function ChannelBadge({ name, color }: ChannelBadgeProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="h-[2px] w-6"
        style={{ backgroundColor: color }}
      />
      <span
        className="text-label tracking-[0.18em]"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}
