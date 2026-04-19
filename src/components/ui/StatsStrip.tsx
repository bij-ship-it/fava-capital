import { cn } from "@/lib/cn";
import { Stat } from "./Stat";
import { Container } from "./Container";

type StatItem = {
  value: React.ReactNode;
  label: string;
  accent?: boolean;
};

export function StatsStrip({
  stats,
  tone = "surface",
  className,
}: {
  stats: StatItem[];
  tone?: "base" | "surface";
  className?: string;
}) {
  return (
    <section
      className={cn(
        "w-full border-y border-border py-12",
        tone === "surface" ? "bg-surface" : "bg-base",
        className,
      )}
    >
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              accent={stat.accent}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
