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

const strategies = [
  {
    title: "Multi-Strategy Allocation",
    description: "A diversified approach spanning global equities, fixed income, alternatives, and digital assets — dynamically weighted to capture asymmetric opportunities.",
  },
  {
    title: "Conviction-Driven Selection",
    description: "High-conviction positions informed by deep fundamental research, macro analysis, and proprietary quantitative signals. Quality over quantity.",
  },
  {
    title: "Risk-Managed Compounding",
    description: "Systematic drawdown controls, correlation monitoring, and volatility-targeting ensure capital preservation remains the foundation of every allocation decision.",
  },
];

const keyTerms = [
  { label: "Fund Structure", value: "Open-ended UCITS (Lux)" },
  { label: "Minimum Investment", value: "$250,000" },
  { label: "Management Fee", value: "1.5% p.a." },
  { label: "Performance Fee", value: "15% (HWM)" },
  { label: "Liquidity", value: "Monthly (30-day notice)" },
  { label: "Currency", value: "USD / GBP / EUR" },
];

const navLinks = [
  { title: "Strategy", description: "Our investment philosophy and approach", href: "/wealth/strategy" },
  { title: "Performance", description: "Track record and historical returns", href: "/wealth/performance" },
  { title: "Key Terms", description: "Fund structure, fees, and liquidity", href: "/wealth/terms" },
  { title: "Invest", description: "Begin the onboarding process", href: "/wealth/invest" },
];

export default function WealthPage() {
  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block px-4 py-1.5 border border-fund-emerald/30 rounded-sm mb-8"
        >
          <span className="text-fund-emerald font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em]">
            FAVA Wealth
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Patient Capital.
        </motion.h1>
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight mt-2"
        >
          Compounding Returns.
        </motion.h1>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-fund-emerald to-transparent" />
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-platinum/60 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          A multi-strategy, conviction-driven investment fund designed for long-term capital
          appreciation through disciplined allocation and rigorous risk management.
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10"
        >
          <Link
            href="/wealth/invest"
            className="inline-block bg-fund-emerald hover:bg-fund-emerald/80 rounded-sm px-10 py-3.5 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Strategy Overview */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-fund-emerald text-sm uppercase tracking-[0.2em] mb-4">
            Our Approach
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Strategy Overview
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strategies.map((strategy, i) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/30 hover:border-fund-emerald/20 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-fund-emerald mb-6" />
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-medium mb-3">
                {strategy.title}
              </h3>
              <p className="text-platinum/50 text-sm leading-relaxed">{strategy.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Performance Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-fund-emerald text-sm uppercase tracking-[0.2em] mb-4">
            Performance
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Track Record
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-platinum/10 rounded-sm p-8 md:p-12 bg-obsidian/30"
        >
          {/* Placeholder chart area */}
          <div className="aspect-[21/9] bg-gradient-to-br from-deep/40 to-void rounded-sm flex items-center justify-center border border-platinum/5">
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-fund-emerald/40 mx-auto mb-4">
                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-platinum/30 text-sm font-[family-name:var(--font-heading)]">
                Performance Chart
              </p>
              <p className="text-platinum/20 text-xs mt-1">
                Historical NAV and benchmark comparison
              </p>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "YTD Return", value: "+8.4%" },
              { label: "Since Inception", value: "+24.7%" },
              { label: "Sharpe Ratio", value: "1.62" },
              { label: "Max Drawdown", value: "-6.3%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[family-name:var(--font-display)] text-2xl text-fund-emerald">{stat.value}</p>
                <p className="text-platinum/40 text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-platinum/30 text-xs mt-8 text-center">
            Past performance is not indicative of future results. All figures are placeholder estimates for illustrative purposes only.
          </p>
        </motion.div>
      </section>

      {/* Key Terms */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-fund-emerald text-sm uppercase tracking-[0.2em] mb-4">
            Fund Details
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Key Terms
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-platinum/10 rounded-sm overflow-hidden bg-obsidian/30">
            {keyTerms.map((term, i) => (
              <motion.div
                key={term.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`flex items-center justify-between px-8 py-5 ${
                  i < keyTerms.length - 1 ? "border-b border-platinum/5" : ""
                }`}
              >
                <span className="text-platinum/50 text-sm">{term.label}</span>
                <span className="font-[family-name:var(--font-heading)] text-ivory text-sm font-medium">
                  {term.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-fund-emerald text-sm uppercase tracking-[0.2em] mb-4">
            Explore
          </h2>
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-ivory">
            Learn More
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="block border border-platinum/10 rounded-sm p-6 bg-obsidian/20 hover:border-fund-emerald/30 transition-all duration-300 group"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-base font-medium mb-1 group-hover:text-fund-emerald transition-colors">
                  {link.title}
                </h3>
                <p className="text-platinum/40 text-sm">{link.description}</p>
                <div className="mt-4 text-fund-emerald/60 group-hover:text-fund-emerald transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border border-fund-emerald/15 rounded-sm p-12 md:p-16 bg-gradient-to-b from-fund-emerald/5 to-transparent"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory mb-4">
            Start Compounding
          </h2>
          <p className="text-platinum/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            For qualified investors seeking long-term capital appreciation through a disciplined,
            multi-strategy approach. Minimum investment $250,000.
          </p>
          <Link
            href="/wealth/invest"
            className="inline-block bg-fund-emerald hover:bg-fund-emerald/80 rounded-sm px-10 py-3.5 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Get Started
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
