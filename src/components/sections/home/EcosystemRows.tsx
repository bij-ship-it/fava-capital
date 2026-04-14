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
      "Institutional-grade crypto exchange built on our Cryptorio platform. Fully licensed, deeply liquid, with 95% cold storage and 1:1 proof of reserves.",
    stats: [
      { label: "Platform", value: "Cryptorio" },
      { label: "Cold storage", value: "95%" },
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
          Five verticals. One infrastructure. Every market that matters.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1] as const,
                delay: i * 0.1,
              }}
            >
              <Link
                href={sub.href}
                className="group block bg-base p-8 md:p-10 h-full transition-colors duration-300 hover:bg-surface relative"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: sub.color }}
                />

                {/* Icon + Name row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-caption" style={{ color: sub.color }}>
                      {sub.number}
                    </span>
                    <span className="text-subhead text-primary group-hover:translate-x-0.5 transition-transform duration-300">
                      {sub.name}
                    </span>
                  </div>
                  {(() => {
                    const Icon = iconMap[sub.href];
                    return Icon ? (
                      <Icon
                        size={48}
                        className="opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                      />
                    ) : null;
                  })()}
                </div>

                {/* Tagline */}
                <p className="text-accent text-primary/70 mb-4">
                  {sub.tagline}
                </p>

                {/* Description */}
                <p className="text-[14px] text-secondary leading-[1.7] mb-8">
                  {sub.descriptor}
                </p>

                {/* Stats */}
                <div className="flex gap-8 mb-6">
                  {sub.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-caption text-tertiary mb-1">
                        {stat.label}
                      </p>
                      <p className="text-[15px] text-primary font-light">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <span
                  className="text-label transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: sub.color }}
                >
                  Learn more &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
