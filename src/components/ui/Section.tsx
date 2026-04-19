import { cn } from "@/lib/cn";

type Size = "standard" | "compact" | "hero";
type Tone = "base" | "surface";

export function Section({
  id,
  children,
  className,
  size = "standard",
  tone = "base",
  bleed = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  size?: Size;
  tone?: Tone;
  bleed?: boolean;
}) {
  const sizing =
    size === "compact"
      ? "py-12"
      : size === "hero"
        ? "pt-32 pb-[140px] max-md:pt-24 max-md:pb-20"
        : "py-[100px] max-md:py-16";

  const background =
    tone === "surface" ? "bg-surface" : "bg-base";

  return (
    <section
      id={id}
      className={cn(background, sizing, bleed && "w-full", className)}
    >
      {children}
    </section>
  );
}
