import { cn } from "@/lib/cn";

export function Stat({
  value,
  label,
  accent = false,
  className,
}: {
  value: React.ReactNode;
  label: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <p
        className={cn(
          "text-numbers",
          accent ? "text-gold" : "text-primary",
        )}
      >
        {value}
      </p>
      <p className="text-caption text-secondary">{label}</p>
    </div>
  );
}
