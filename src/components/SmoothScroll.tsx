"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

const SKIP = new Set<string>(["/contact", "/legal"]);

function shouldSmoothScroll(pathname: string | null) {
  if (!pathname) return true;
  if (SKIP.has(pathname)) return false;
  if (pathname.endsWith("/apply")) return false;
  return true;
}

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (!shouldSmoothScroll(pathname)) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
