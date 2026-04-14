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

const partnershipModels = [
  {
    title: "Introducing Broker Programme",
    description:
      "Refer clients to FAVA Markets and earn competitive, tiered commissions on every trade. Our IB programme provides real-time tracking dashboards, dedicated relationship managers, and multi-tier sub-IB structures for maximum scalability.",
    features: [
      "Tiered commission structures up to $12/lot",
      "Real-time IB portal with client activity tracking",
      "Multi-tier sub-introducing broker support",
      "Dedicated IB relationship manager",
      "Custom marketing materials and landing pages",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "White-Label Solutions",
    description:
      "Launch your own branded brokerage powered by FAVA's institutional-grade infrastructure. From execution technology to compliance frameworks, we provide the complete back-end so you can focus on growth.",
    features: [
      "Fully branded trading platform (web, mobile, desktop)",
      "Institutional liquidity and execution engine",
      "Built-in compliance and regulatory reporting",
      "Risk management and margin systems",
      "CRM and client onboarding automation",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Institutional Access",
    description:
      "Direct market access, prime brokerage services, and bespoke liquidity solutions for hedge funds, family offices, and asset managers. Benefit from deep institutional liquidity across FX, crypto, and commodities.",
    features: [
      "FIX API and ultra-low-latency connectivity",
      "Prime-of-prime liquidity aggregation",
      "Multi-asset cross-margining",
      "Bespoke credit and leverage arrangements",
      "Dedicated institutional sales desk",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const institutionalBenefits = [
  { title: "Deep Liquidity", description: "Access aggregated pricing from tier-one banks and non-bank market makers across all asset classes." },
  { title: "Custom Integration", description: "FIX 4.4 / 5.0 connectivity, REST APIs, and WebSocket feeds tailored to your infrastructure." },
  { title: "Segregated Accounts", description: "Client funds held in segregated, ring-fenced accounts with tier-one custodian banks." },
  { title: "Regulatory Compliance", description: "FCA-authorised counterparty with full best execution, transaction reporting, and EMIR compliance." },
  { title: "24/5 Support", description: "Dedicated institutional support desk with direct access to our trading and operations teams." },
  { title: "Cross-Asset Coverage", description: "Trade FX, crypto, commodities, and structured products through a single prime relationship." },
];

export default function PartnersPage() {
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
          Partners & Institutions
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Partner With FAVA
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
          Whether you are an introducing broker, a fintech seeking white-label infrastructure,
          or an institution requiring direct market access — FAVA has a partnership model built for you.
        </motion.p>
      </section>

      {/* Partnership Models */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Partnership Models
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Choose Your Path
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnershipModels.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/30 hover:border-gold/20 transition-all duration-300 flex flex-col"
            >
              <div className="text-gold mb-6">{model.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-medium mb-4">
                {model.title}
              </h3>
              <p className="text-platinum/50 text-sm leading-relaxed mb-6">
                {model.description}
              </p>
              <ul className="space-y-2.5 mb-8 flex-1">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-platinum/60 text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold shrink-0 mt-0.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full border border-gold/30 hover:bg-gold/10 rounded-sm px-6 py-3 text-gold font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* IB Programme Details */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-platinum/10 rounded-sm p-8 md:p-12 bg-obsidian/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
                IB Programme
              </h2>
              <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-ivory mb-6">
                Grow With FAVA Markets
              </p>
              <p className="text-platinum/60 text-sm leading-relaxed mb-6">
                Our Introducing Broker programme is designed for financial professionals, money managers,
                and affiliates who want to build a sustainable revenue stream by referring clients to
                FAVA Markets. With competitive commissions, real-time analytics, and dedicated support,
                you have everything you need to scale.
              </p>
              <p className="text-platinum/60 text-sm leading-relaxed">
                Whether you manage a network of sub-IBs or refer clients directly, our flexible
                commission structures and transparent reporting ensure you are always fairly rewarded
                for your contributions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "$12", label: "Max Commission / Lot" },
                { value: "Real-time", label: "Tracking Dashboard" },
                { value: "Multi-tier", label: "Sub-IB Structure" },
                { value: "24/5", label: "Dedicated Support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-platinum/10 rounded-sm p-6 bg-void/50">
                  <p className="font-[family-name:var(--font-display)] text-2xl text-gold mb-2">{stat.value}</p>
                  <p className="text-platinum/50 text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Institutional Access Benefits */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Institutional Access
          </h2>
          <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory">
            Built for Professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionalBenefits.map((benefit, i) => (
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

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border border-platinum/10 rounded-sm p-12 md:p-16 bg-gradient-to-b from-deep/30 to-obsidian/30"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory mb-4">
            Ready to Partner?
          </h2>
          <p className="text-platinum/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Speak with our partnerships team to explore the model that best fits your business.
            We respond to all enquiries within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-bright hover:bg-mid rounded-sm px-10 py-3.5 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
