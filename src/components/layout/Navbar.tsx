"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Wealth", href: "/wealth" },
  { label: "Markets", href: "/markets" },
  { label: "Cryptorio", href: "/crypto" },
  { label: "Commodities", href: "/commodities" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          opacity: visible || mobileOpen ? 1 : 0,
          pointerEvents: visible || mobileOpen ? "auto" : "none",
          backgroundColor: visible ? "rgba(12, 7, 22, 0.85)" : "transparent",
          backdropFilter: visible ? "blur(12px)" : "none",
          borderBottom: visible ? "1px solid #1E1735" : "1px solid transparent",
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
          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label text-secondary link-hover transition-colors duration-250 hover:text-primary"
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-subhead text-primary transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
            <div className="gold-rule w-12 my-4" />
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-label text-gold"
            >
              Contact &rarr;
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
