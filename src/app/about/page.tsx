"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const team = [
  {
    name: "Luke Broadbent",
    title: "Founding Partner",
    bio: "Former institutional trader with over a decade of experience across FX, equities, and digital assets. Luke founded FAVA Capital with a vision to build a vertically integrated financial ecosystem.",
  },
  {
    name: "Sophia Martinez",
    title: "Chief Operating Officer",
    bio: "Operational strategist with a background in scaling fintech ventures across multiple jurisdictions. Sophia oversees the day-to-day execution of FAVA's multi-subsidiary structure.",
  },
  {
    name: "James Chen",
    title: "Chief Technology Officer",
    bio: "Full-stack architect and blockchain specialist. James leads the engineering teams across all FAVA subsidiaries, building institutional-grade infrastructure from the ground up.",
  },
  {
    name: "Amara Osei",
    title: "Head of Strategy & Compliance",
    bio: "Regulatory affairs expert with deep experience in FCA, DFSA, and MiCA frameworks. Amara ensures every vertical operates within the highest compliance standards.",
  },
];

const subsidiaries = [
  { name: "FAVA Markets", description: "Multi-asset FX brokerage", href: "/markets", color: "bg-fx-teal" },
  { name: "Cryptorio", description: "Institutional crypto exchange", href: "/crypto", color: "bg-crypto-electric" },
  { name: "FAVA Wealth", description: "Multi-strategy investment fund", href: "/wealth", color: "bg-fund-emerald" },
  { name: "FAVA Commodities", description: "Physical & digital commodity trading", href: "/commodities", color: "bg-commodity-amber" },
];

const milestones = [
  { year: "2024", title: "Founded", description: "FAVA Capital established as a next-generation holding company with a mandate to build vertically integrated financial infrastructure." },
  { year: "2025", title: "First Subsidiary Launched", description: "FAVA Markets goes live, offering institutional-grade FX brokerage with proprietary execution technology." },
  { year: "2026", title: "Multi-Vertical Expansion", description: "Cryptorio, FAVA Wealth, and FAVA Commodities launched in rapid succession, completing the core ecosystem." },
];

export default function AboutPage() {
  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-6"
        >
          About FAVA Capital
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Building the Future
        </motion.h1>
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight mt-2"
        >
          of Finance
        </motion.h1>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <div className="gold-rule w-32 mx-auto" />
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-8">
            Our Mission
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-light text-ivory leading-snug">
            To construct a vertically integrated financial ecosystem that empowers institutions and individuals
            to access <span className="text-gold">world-class markets</span>, cutting-edge technology,
            and <span className="text-gold">compounding wealth strategies</span> — all under one roof.
          </p>
        </motion.div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Leadership
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            The Team Behind FAVA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/40 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-deep flex items-center justify-center mb-6">
                <span className="font-[family-name:var(--font-heading)] text-gold text-lg font-medium">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-medium mb-1">
                {member.name}
              </h3>
              <p className="text-gold text-sm mb-4">{member.title}</p>
              <p className="text-platinum/60 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Our Ecosystem
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            One Vision. Multiple Verticals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsidiaries.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={sub.href}
                className="block border border-platinum/10 rounded-sm p-6 bg-obsidian/30 hover:border-platinum/25 transition-all duration-300 group"
              >
                <div className={`w-3 h-3 rounded-full ${sub.color} mb-4`} />
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-medium mb-2 group-hover:text-gold transition-colors">
                  {sub.name}
                </h3>
                <p className="text-platinum/50 text-sm">{sub.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Milestones
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Our Journey So Far
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {milestones.map((milestone, i) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex gap-8 mb-12 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <span className="font-[family-name:var(--font-display)] text-gold text-2xl font-semibold">
                  {milestone.year}
                </span>
                {i < milestones.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-gold/40 to-transparent mt-4" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-medium mb-2">
                  {milestone.title}
                </h3>
                <p className="text-platinum/60 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
