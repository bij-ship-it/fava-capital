import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-label text-secondary mb-6">{eyebrow}</p>
      )}
      <h2 className="text-subhead text-primary">{title}</h2>
      {description && (
        <p className="text-secondary mt-5 leading-[1.7]">{description}</p>
      )}
    </div>
  );
}
