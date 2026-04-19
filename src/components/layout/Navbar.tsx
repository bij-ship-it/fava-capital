"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CHANNELS_LIST, type ChannelSlug } from "@/lib/channels";
import { cn } from "@/lib/cn";
import { FavaLogo } from "@/components/ui/FavaLogo";

const globalLinks = [
  { label: "About", href: "/about" },
  { label: "News", href: "/news" },
];

const dotColor: Record<ChannelSlug, string> = {
  wealth: "bg-wealth",
  markets: "bg-markets",
  payments: "bg-payments",
  crypto: "bg-crypto",
  commodities: "bg-commodities",
};

const textColor: Record<ChannelSlug, string> = {
  wealth: "text-wealth",
  markets: "text-markets",
  payments: "text-payments",
  crypto: "text-crypto",
  commodities: "text-commodities",
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-base/85 backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-20 max-lg:px-6 h-14">
          <Link href="/" className="flex items-center" aria-label="FAVA Capital home">
            <FavaLogo variant="nav" className="text-primary" />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {CHANNELS_LIST.map((channel) => {
              const active = isActive(channel.href);
              return (
                <Link
                  key={channel.slug}
                  href={channel.href}
                  className="group flex items-center gap-2"
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full transition-opacity duration-300",
                      dotColor[channel.slug],
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span
                    className={cn(
                      "text-label transition-colors duration-300 group-hover:text-primary",
                      active ? textColor[channel.slug] : "text-secondary",
                    )}
                  >
                    {channel.shortName}
                  </span>
                </Link>
              );
            })}

            <span className="h-3 w-px bg-border" />

            {globalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label text-secondary link-hover transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden text-label text-gold link-hover lg:block"
          >
            Contact &rarr;
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "h-px w-5 bg-primary transition-all duration-300",
                mobileOpen && "translate-y-[5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-primary transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-primary transition-all duration-300",
                mobileOpen && "-translate-y-[5px] -rotate-45",
              )}
            />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-base/95 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col items-center gap-8">
            {CHANNELS_LIST.map((channel) => {
              const active = isActive(channel.href);
              return (
                <Link
                  key={channel.slug}
                  href={channel.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full",
                      dotColor[channel.slug],
                    )}
                  />
                  <span
                    className={cn(
                      "text-subhead",
                      active ? textColor[channel.slug] : "text-primary",
                    )}
                  >
                    {channel.shortName}
                  </span>
                </Link>
              );
            })}
            <div className="gold-rule w-12 my-2" />
            {globalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-subhead text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-label text-gold mt-4"
            >
              Contact &rarr;
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
