import Link from "next/link";
import { LatticeLogo } from "@/components/ui/LatticeLogo";

const footerColumns = [
  {
    title: "Subsidiaries",
    links: [
      { label: "FAVA Wealth", href: "/wealth" },
      { label: "FAVA Markets", href: "/markets" },
      { label: "Cryptorio", href: "/crypto" },
      { label: "FAVA Commodities", href: "/commodities" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "/news" },
      { label: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal" },
      { label: "Privacy Policy", href: "/legal" },
      { label: "Risk Disclosures", href: "/legal" },
      { label: "Regulatory Licences", href: "/legal" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Telegram", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top — Logo & tagline */}
        <div className="mb-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <LatticeLogo size={28} />
            <span className="font-[family-name:var(--font-heading)] text-lg font-medium tracking-widest text-ivory">
              FAVA
            </span>
          </div>
          <p className="font-[family-name:var(--font-display)] text-lg font-light italic text-platinum/50">
            Building Empires. Compounding Futures.
          </p>
        </div>

        {/* Link grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-medium tracking-wide text-ivory">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-platinum/40 transition-colors hover:text-platinum/70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="gold-rule mb-8" />

        {/* Regulatory fine print */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-platinum/30">
            FAVA Capital Group and its subsidiaries are regulated entities.
            Trading CFDs, forex, cryptocurrencies, and commodities carries
            significant risk. Past performance is not indicative of future
            results.
          </p>
          <p className="text-xs text-platinum/30">
            &copy; {new Date().getFullYear()} FAVA Capital Group. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
