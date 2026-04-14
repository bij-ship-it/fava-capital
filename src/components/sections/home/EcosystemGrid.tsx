"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Subsidiary {
  name: string;
  href: string;
  descriptor: string;
  accent: string;
  icon: string;
}

const subsidiaries: Subsidiary[] = [
  {
    name: "FAVA Wealth",
    href: "/wealth",
    descriptor: "Investment Fund",
    accent: "#059669",
    icon: "\u25B3",
  },
  {
    name: "FAVA Markets",
    href: "/markets",
    descriptor: "CFD & FX Brokerage",
    accent: "#14B8A6",
    icon: "\u20A3",
  },
  {
    name: "Cryptorio",
    href: "/crypto",
    descriptor: "Crypto Exchange",
    accent: "#6366F1",
    icon: "\u25C8",
  },
  {
    name: "FAVA Commodities",
    href: "/commodities",
    descriptor: "Commodities Trading",
    accent: "#D97706",
    icon: "\u2B21",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function EcosystemGrid() {
  return (
    <section id="ecosystem" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-ivory mb-16 text-center"
        >
          The FAVA Ecosystem
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {subsidiaries.map((sub) => (
            <motion.div
              key={sub.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, borderColor: sub.accent }}
              className="bg-obsidian/50 border border-white/5 rounded-sm p-8 transition-colors duration-300 group"
              style={
                { "--card-accent": sub.accent } as React.CSSProperties
              }
            >
              <Link href={sub.href} className="block">
                <div
                  className="text-4xl mb-4"
                  style={{ color: sub.accent }}
                >
                  {sub.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-1">
                  {sub.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-platinum/50 mb-6">
                  {sub.descriptor}
                </p>
                <span
                  className="font-[family-name:var(--font-heading)] text-sm tracking-wide transition-colors duration-300"
                  style={{ color: sub.accent }}
                >
                  Learn More &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
