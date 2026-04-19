import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-20 max-lg:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
