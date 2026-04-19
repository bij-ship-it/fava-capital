"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import type { ChannelSlug } from "@/lib/channels";

const activeColor: Record<ChannelSlug | "neutral", string> = {
  wealth: "text-wealth",
  markets: "text-markets",
  payments: "text-payments",
  crypto: "text-crypto",
  commodities: "text-commodities",
  neutral: "text-primary",
};

export type SubNavItem = {
  id: string;
  label: string;
};

export function SubNav({
  items,
  variant = "neutral",
}: {
  items: SubNavItem[];
  variant?: ChannelSlug | "neutral";
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-14 z-30 border-y border-border bg-base/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1160px] items-center gap-8 overflow-x-auto px-20 py-4 max-lg:px-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "text-label whitespace-nowrap transition-colors",
              active === item.id
                ? activeColor[variant]
                : "text-secondary hover:text-primary",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
