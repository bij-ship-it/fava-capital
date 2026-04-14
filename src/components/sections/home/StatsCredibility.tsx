"use client";

import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "5", label: "Regulated Verticals" },
  { value: "1,000+", label: "Tradeable Instruments" },
  { value: "24/7", label: "Market Access" },
  { value: "4", label: "Global Jurisdictions" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function StatsCredibility() {
  return (
    <section className="py-20 px-6 border-y border-white/5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-10"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center"
          >
            <div className="font-[family-name:var(--font-display)] text-5xl md:text-6xl text-gold mb-3">
              {stat.value}
            </div>
            <div className="font-[family-name:var(--font-heading)] text-sm text-platinum/50 uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
