"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const subsidiaries = [
  { label: "Wealth", href: "/wealth", color: "#059669" },
  { label: "Markets", href: "/markets", color: "#14B8A6" },
  { label: "Digital", href: "/crypto", color: "#6366F1" },
  { label: "Commodities", href: "/commodities", color: "#D97706" },
];

const globalLinks = [
  { label: "About", href: "/about" },
];

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(12, 7, 22, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1E1735" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-20 max-lg:px-6 h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/fava-lattice-logo-dark-bg.svg"
              alt="FAVA Capital"
              width={100}
              height={40}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* Subsidiary channels — each with color dot */}
            {subsidiaries.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="group flex items-center gap-2 transition-all duration-300"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-opacity duration-300"
                  style={{
                    backgroundColor: sub.color,
                    opacity: isActive(sub.href) ? 1 : 0,
                  }}
                />
                <span
                  className="text-label transition-colors duration-300 group-hover:text-primary"
                  style={{
                    color: isActive(sub.href) ? sub.color : undefined,
                  }}
                >
                  <span className={isActive(sub.href) ? "" : "text-secondary"}>
                    {sub.label}
                  </span>
                </span>
              </Link>
            ))}

            {/* Divider */}
            <span className="h-3 w-px bg-border" />

            {/* Global links */}
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

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden text-label text-gold link-hover lg:block"
          >
            Contact &rarr;
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1 lg:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-5 bg-primary transition-all duration-300 ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-primary transition-all duration-300 ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-base/95 backdrop-blur-sm lg:hidden">
          <nav className="flex flex-col items-center gap-8">
            {subsidiaries.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 transition-colors"
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: sub.color }}
                />
                <span
                  className="text-subhead text-primary"
                  style={{ color: isActive(sub.href) ? sub.color : undefined }}
                >
                  {sub.label}
                </span>
              </Link>
            ))}
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
