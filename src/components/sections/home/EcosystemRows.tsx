"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const subsidiaries = [
  {
    number: "01",
    name: "FAVA Wealth",
    descriptor: "Multi-strategy investment fund",
    href: "/wealth",
    color: "#059669",
  },
  {
    number: "02",
    name: "FAVA Markets",
    descriptor: "Institutional FX & CFD execution",
    href: "/markets",
    color: "#14B8A6",
  },
  {
    number: "03",
    name: "Cryptorio",
    descriptor: "The regulated digital asset exchange",
    href: "/crypto",
    color: "#6366F1",
  },
  {
    number: "04",
    name: "FAVA Commodities",
    descriptor: "Physical & derivative commodity access",
    href: "/commodities",
    color: "#D97706",
  },
];

export function EcosystemRows() {
  return (
    <section className="py-[140px] max-md:py-20">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <p className="text-label text-secondary mb-16">01 — OUR ECOSYSTEM</p>

        <div className="border-t border-border">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: i * 0.1,
              }}
            >
              <Link
                href={sub.href}
                className="group flex items-center py-6 border-b border-border transition-colors duration-300 hover:bg-surface relative"
              >
                {/* Left accent border on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                  style={{ backgroundColor: sub.color }}
                />

                {/* Dot + Number */}
                <div className="flex items-center gap-2 w-16 shrink-0 pl-4">
                  <div
                    className="w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: sub.color }}
                  />
                  <span className="text-caption text-gold">{sub.number}</span>
                </div>

                {/* Name */}
                <span className="text-subhead text-primary w-56 max-md:w-40 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  {sub.name}
                </span>

                {/* Descriptor */}
                <span className="text-secondary flex-1 max-md:hidden">
                  {sub.descriptor}
                </span>

                {/* Arrow */}
                <span className="text-tertiary group-hover:text-gold transition-all duration-300 group-hover:translate-x-2 ml-auto pr-4">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
