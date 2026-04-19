"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categoryColors: Record<string, string> = {
  MARKETS: "text-markets",
  DIGITAL: "text-crypto",
  COMMODITIES: "text-commodities",
};

const insights = [
  {
    category: "MARKETS",
    date: "12 APR 2026",
    title:
      "FAVA Markets Launches Zero-Commission Trading Across 400+ Instruments",
    excerpt: "Retail and professional traders now access 400+ instruments with zero commission on standard accounts.",
  },
  {
    category: "DIGITAL",
    date: "08 APR 2026",
    title: "FAVA Digital Achieves SOC2 Type II Compliance Certification",
    excerpt: "Our Cryptorio exchange platform passes the industry's most rigorous operational security audit.",
  },
  {
    category: "COMMODITIES",
    date: "01 APR 2026",
    title:
      "Q1 Outlook: Supply Constraints Reshape Global Commodity Pricing",
    excerpt: "Our research team analyses the macro forces driving unprecedented moves across energy and metals.",
  },
];

export function LatestInsights() {
  return (
    <section className="py-[140px] max-md:py-20">
      <div className="max-w-[1280px] mx-auto px-20 max-lg:px-6">
        {/* Header row */}
        <div className="flex items-center justify-between mb-16">
          <p className="text-label text-secondary">INSIGHTS</p>
          <Link href="/news" className="text-caption text-gold link-hover">
            View all →
          </Link>
        </div>

        {/* News items */}
        <div className="border-t border-border">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: i * 0.08,
              }}
            >
              <Link
                href="/news"
                className="group block py-6 border-b border-border transition-all duration-300 hover:border-border-hover"
              >
                <div className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <p className="text-caption text-secondary mb-2">
                    <span className={categoryColors[item.category]}>
                      {item.category}
                    </span>
                    <span className="mx-2">·</span>
                    {item.date}
                  </p>
                  <p className="text-subhead text-primary transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </p>
                  <p className="text-sm-body text-secondary mt-2 max-w-xl">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
