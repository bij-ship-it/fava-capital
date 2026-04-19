import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Wealth", href: "/wealth" },
  { label: "Markets", href: "/markets" },
  { label: "Digital", href: "/crypto" },
  { label: "Commodities", href: "/commodities" },
  { label: "Payments", href: "/payments" },
  { label: "About", href: "/about" },
  { label: "Legal", href: "/legal" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-base">
      <div className="mx-auto max-w-[1160px] px-20 max-lg:px-6 py-16">
        {/* Gold rule */}
        <div className="gold-rule mb-16" />

        {/* Center content */}
        <div className="flex flex-col items-center text-center gap-6">
          <Image
            src="/images/fava-lattice-mark-only-dark-bg.svg"
            alt="FAVA"
            width={24}
            height={36}
          />

          <span className="text-label text-secondary tracking-[0.2em]">
            FAVA Capital
          </span>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link, i) => (
              <span key={link.href} className="flex items-center gap-6">
                <Link
                  href={link.href}
                  className="text-caption text-secondary link-hover transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
                {i < links.length - 1 && (
                  <span className="text-tertiary hidden sm:inline">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-16 pt-8">
          <p className="text-center text-[11px] leading-relaxed text-tertiary max-w-2xl mx-auto">
            FAVA Capital and its subsidiaries are regulated financial
            entities. Trading CFDs, forex, cryptocurrencies, and commodities
            carries significant risk. Past performance is not indicative of
            future results.
          </p>
          <p className="text-center text-[11px] text-tertiary mt-4">
            &copy; {new Date().getFullYear()} FAVA Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
