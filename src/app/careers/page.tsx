"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const values = [
  {
    title: "Innovation",
    description: "We challenge convention and build technology that reshapes how markets operate. Every team member is empowered to think beyond the status quo.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Institutional-grade standards across every function. We hold ourselves to the highest benchmarks in execution, compliance, and client service.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "Transparency and trust underpin everything we do. From regulatory compliance to client communication, we operate with unwavering honesty.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Ambition",
    description: "We think in decades and build for scale. Every hire joins a team committed to constructing something truly enduring in global finance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const positions = [
  {
    title: "Senior FX Dealer",
    subsidiary: "FAVA Markets",
    location: "London, UK",
    type: "Full-time",
    color: "bg-fx-teal",
    textColor: "text-fx-teal",
  },
  {
    title: "Blockchain Engineer",
    subsidiary: "Cryptorio",
    location: "Remote / Dubai",
    type: "Full-time",
    color: "bg-crypto-electric",
    textColor: "text-crypto-electric",
  },
  {
    title: "Portfolio Analyst",
    subsidiary: "FAVA Wealth",
    location: "London, UK",
    type: "Full-time",
    color: "bg-fund-emerald",
    textColor: "text-fund-emerald",
  },
  {
    title: "Head of Compliance",
    subsidiary: "FAVA Capital",
    location: "London, UK",
    type: "Full-time",
    color: "bg-bright",
    textColor: "text-bright",
  },
];

const benefits = [
  { title: "Competitive Compensation", description: "Industry-leading base salary with performance bonuses and equity participation." },
  { title: "Remote Flexibility", description: "Hybrid and fully remote options across most roles, with hubs in London and Dubai." },
  { title: "Learning Budget", description: "Annual personal development fund for courses, conferences, and certifications." },
  { title: "Health & Wellbeing", description: "Comprehensive private medical, dental, and mental health support." },
  { title: "Equity & Ownership", description: "Share in the upside through our employee equity programme across all subsidiaries." },
  { title: "Global Exposure", description: "Work across multiple verticals — FX, crypto, commodities, and wealth management." },
];

export default function CareersPage() {
  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-32">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-bright text-sm uppercase tracking-[0.2em] mb-6"
        >
          Careers at FAVA
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Build What&apos;s Next
        </motion.h1>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <div className="gold-rule w-32 mx-auto" />
        </motion.div>
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-platinum/60 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Join a team of ambitious builders shaping the future of institutional finance,
          digital assets, and wealth management.
        </motion.p>
      </section>

      {/* Culture & Values */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Culture & Values
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            What Drives Us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/30 text-center"
            >
              <div className="text-gold mb-5 flex justify-center">{value.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-medium mb-3">
                {value.title}
              </h3>
              <p className="text-platinum/50 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Open Positions
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Current Opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/30 hover:border-platinum/25 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`${pos.textColor} font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider`}>
                  {pos.subsidiary}
                </span>
                <span className={`${pos.color} w-2 h-2 rounded-full`} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-medium mb-4 group-hover:text-gold transition-colors">
                {pos.title}
              </h3>
              <div className="flex items-center gap-4 text-platinum/50 text-sm">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {pos.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {pos.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Benefits & Perks
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Why Join FAVA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-platinum/10 rounded-sm p-6 bg-obsidian/20"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-base font-medium mb-2">
                {benefit.title}
              </h3>
              <p className="text-platinum/50 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
