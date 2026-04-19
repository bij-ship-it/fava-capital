"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CHANNELS, type ChannelSlug } from "@/lib/channels";
import {
  WealthIcon,
  MarketsIcon,
  DigitalIcon,
  CommoditiesIcon,
  PaymentsIcon,
} from "@/components/ui/SubsidiaryIcons";

const iconByChannel: Record<
  ChannelSlug,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  wealth: WealthIcon,
  markets: MarketsIcon,
  payments: PaymentsIcon,
  crypto: DigitalIcon,
  commodities: CommoditiesIcon,
};

type Row = {
  slug: ChannelSlug;
  number: string;
  descriptor: string;
  stats: { label: string; value: string }[];
};

const rows: Row[] = [
  {
    slug: "wealth",
    number: "01",
    descriptor:
      "Multi-strategy investment fund with a conviction-driven mandate. Designed for long-horizon investors who value disciplined allocation and institutional-grade risk management.",
    stats: [
      { label: "Strategy", value: "Multi-asset" },
      { label: "Min. Investment", value: "$250K" },
    ],
  },
  {
    slug: "markets",
    number: "02",
    descriptor:
      "CFD and FX brokerage offering 1,000+ instruments with raw spreads from 0.0 pips. Co-located infrastructure in LD4, NY4, and TY3 for sub-30ms execution.",
    stats: [
      { label: "Instruments", value: "1,000+" },
      { label: "Spreads from", value: "0.0 pips" },
    ],
  },
  {
    slug: "payments",
    number: "03",
    descriptor:
      "Global payment infrastructure powered by Rebasive. Licensed in Africa, the USA, and Canada. Cards, wallets, cross-border transfers, and multi-currency accounts.",
    stats: [
      { label: "Platform", value: "Rebasive" },
      { label: "Licences", value: "3 regions" },
    ],
  },
  {
    slug: "crypto",
    number: "04",
    descriptor:
      "Institutional crypto exchange and OTC infrastructure, powered by Cryptorio. Trade, settle, and custody digital assets on a single regulated platform.",
    stats: [
      { label: "Platform", value: "Cryptorio" },
      { label: "Liquidity", value: "Multi-venue" },
    ],
  },
  {
    slug: "commodities",
    number: "05",
    descriptor:
      "Physical and derivative exposure across precious metals, energy, base metals, and agriculture. Research-led execution with transparent pricing.",
    stats: [
      { label: "Markets", value: "40+" },
      { label: "Coverage", value: "24/5" },
    ],
  },
];

export function EcosystemRows() {
  return (
    <section id="ecosystem" className="py-[140px] max-md:py-20">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <p className="text-label text-secondary mb-4">THE ECOSYSTEM</p>
        <h2 className="text-subhead text-primary mb-16 max-w-xl">
          Five businesses. One platform. Each a standalone company &mdash;
          built to work as one.
        </h2>

        <div className="flex flex-col">
          {rows.map((row, i) => {
            const channel = CHANNELS[row.slug];
            const Icon = iconByChannel[row.slug];
            return (
              <motion.div
                key={row.slug}
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
                  href={channel.href}
                  className={`group block py-10 md:py-12 transition-colors duration-300 hover:bg-surface relative ${
                    i < rows.length - 1 ? "border-b border-border" : ""
                  } ${i === 0 ? "border-t border-border" : ""}`}
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                    style={{ backgroundColor: channel.color }}
                  />

                  <div className="flex items-start gap-8 md:gap-12 pl-6 md:pl-8">
                    {Icon && (
                      <div className="hidden md:block shrink-0 mt-1" aria-hidden="true">
                        <Icon
                          size={56}
                          className="opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                        />
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-caption"
                          style={{ color: channel.color }}
                        >
                          {row.number}
                        </span>
                        <span className="text-subhead text-primary group-hover:translate-x-0.5 transition-transform duration-300">
                          {channel.name}
                        </span>
                      </div>

                      <p className="text-accent text-secondary mb-3">
                        {channel.tagline}
                      </p>

                      <p className="text-sm-body text-secondary max-w-2xl">
                        {row.descriptor}
                      </p>
                    </div>

                    <div className="hidden md:flex items-start gap-10 shrink-0">
                      {row.stats.map((stat) => (
                        <div key={stat.label} className="text-right">
                          <p className="text-primary">{stat.value}</p>
                          <p className="text-caption text-tertiary mt-1">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                      <span className="text-tertiary group-hover:translate-x-1 transition-all duration-300 mt-1">
                        <span className="group-hover:text-gold transition-colors duration-300">
                          &rarr;
                        </span>
                      </span>
                    </div>

                    <span
                      className="md:hidden text-label mt-1 shrink-0"
                      style={{ color: channel.color }}
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
