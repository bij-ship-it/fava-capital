"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WealthIcon, MarketsIcon, DigitalIcon, CommoditiesIcon, PaymentsIcon } from "@/components/ui/SubsidiaryIcons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "/wealth": WealthIcon,
  "/markets": MarketsIcon,
  "/crypto": DigitalIcon,
  "/commodities": CommoditiesIcon,
  "/payments": PaymentsIcon,
};

const subsidiaries = [
  {
    number: "01",
    name: "FAVA Wealth",
    tagline: "Patient capital. Compounding returns.",
    descriptor:
      "Multi-strategy investment fund with a conviction-driven mandate. Designed for long-horizon investors who value disciplined allocation and institutional-grade risk management.",
    stats: [
      { label: "Strategy", value: "Multi-asset" },
      { label: "Min. Investment", value: "$250K" },
    ],
    href: "/wealth",
    color: "#059669",
  },
  {
    number: "02",
    name: "FAVA Markets",
    tagline: "Institutional execution for every trader.",
    descriptor:
      "CFD and FX brokerage offering 1,000+ instruments with raw spreads from 0.0 pips. Co-located infrastructure in LD4, NY4, and TY3 for sub-30ms execution.",
    stats: [
      { label: "Instruments", value: "1,000+" },
      { label: "Spreads from", value: "0.0 pips" },
    ],
    href: "/markets",
    color: "#14B8A6",
  },
  {
    number: "03",
    name: "FAVA Payments",
    tagline: "Move money. Everywhere.",
    descriptor:
      "Global payment infrastructure powered by Rebasive. Licensed in Africa, the USA, and Canada. Cards, wallets, cross-border transfers, and multi-currency accounts — built for the next billion.",
    stats: [
      { label: "Platform", value: "Rebasive" },
      { label: "Licences", value: "3 regions" },
    ],
    href: "/payments",
    color: "#0EA5E9",
  },
  {
    number: "04",
    name: "FAVA Digital",
    tagline: "The regulated digital asset exchange.",
    descriptor:
      "Institutional crypto exchange and OTC infrastructure. Trade, settle, and custody digital assets on a single regulated platform — powered by Cryptorio.",
    stats: [
      { label: "Platform", value: "Cryptorio" },
      { label: "Liquidity", value: "Multi-venue" },
    ],
    href: "/crypto",
    color: "#6366F1",
  },
  {
    number: "05",
    name: "FAVA Commodities",
    tagline: "The raw materials of growth.",
    descriptor:
      "Physical and derivative exposure across precious metals, energy, base metals, and agriculture. Expert research, transparent pricing, and global market access.",
    stats: [
      { label: "Markets", value: "40+" },
      { label: "Coverage", value: "24/5" },
    ],
    href: "/commodities",
    color: "#D97706",
  },
];

export function EcosystemRows() {
  return (
    <section id="ecosystem" className="py-[140px] max-md:py-20">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <p className="text-label text-secondary mb-4">OUR ECOSYSTEM</p>
        <h2 className="text-subhead text-primary mb-16 max-w-lg">
          {subsidiaries.length} verticals. One infrastructure. Every market that matters.
        </h2>

        <div className="flex flex-col">
          {subsidiaries.map((sub, i) => {
            const Icon = iconMap[sub.href];
            return (
              <motion.div
                key={sub.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.33, 1, 0.68, 1] as const,
                  delay: i * 0.08,
                }}
              >
                <Link
                  href={sub.href}
                  className={`group block py-10 md:py-12 transition-colors duration-300 hover:bg-surface relative ${
                    i < subsidiaries.length - 1 ? "border-b border-border" : ""
                  } ${i === 0 ? "border-t border-border" : ""}`}
                >
                  {/* Left accent bar on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                    style={{ backgroundColor: sub.color }}
                  />

                  <div className="flex items-start gap-8 md:gap-12 pl-6 md:pl-8">
                    {/* Icon */}
                    {Icon && (
                      <div className="hidden md:block shrink-0 mt-1">
                        <Icon
                          size={56}
                          className="opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-caption" style={{ color: sub.color }}>
                          {sub.number}
                        </span>
                        <span className="text-subhead text-primary group-hover:translate-x-0.5 transition-transform duration-300">
                          {sub.name}
                        </span>
                      </div>

                      <p className="text-accent text-primary/60 mb-3">
                        {sub.tagline}
                      </p>

                      <p className="text-[14px] text-secondary leading-[1.7] max-w-2xl">
                        {sub.descriptor}
                      </p>
                    </div>

                    {/* Stats + Arrow */}
                    <div className="hidden md:flex items-start gap-10 shrink-0">
                      {sub.stats.map((stat) => (
                        <div key={stat.label} className="text-right">
                          <p className="text-[17px] text-primary font-light">
                            {stat.value}
                          </p>
                          <p className="text-caption text-tertiary mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                      <span
                        className="text-tertiary group-hover:translate-x-1 transition-all duration-300 mt-1"
                        style={{ color: undefined }}
                      >
                        <span className="group-hover:text-gold transition-colors duration-300">&rarr;</span>
                      </span>
                    </div>

                    {/* Mobile CTA */}
                    <span
                      className="md:hidden text-label mt-1 shrink-0"
                      style={{ color: sub.color }}
                    >
                      &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
