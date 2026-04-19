"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Multi-Jurisdictional Regulation",
    body: "Every FAVA subsidiary operates under the oversight of relevant financial authorities. FCA-authorised, DFSA-regulated, and structured to meet the compliance demands of institutional capital.",
  },
  {
    title: "Segregated Client Capital",
    body: "Client funds are held in segregated accounts with tier-one global banks. Your capital is protected, ring-fenced, and never commingled with operational funds.",
  },
  {
    title: "Institutional Infrastructure",
    body: "Co-located execution servers, multi-signature cold storage, 99.99% uptime SLAs, and SOC2-audited systems. Built for the demands of serious capital at scale.",
  },
  {
    title: "Transparent Operations",
    body: "Published fee schedules, proof of reserves, real-time reporting, and independently audited financials. We believe trust is earned through transparency, not marketing.",
  },
];

export function TrustBar() {
  return (
    <section className="py-[140px] max-md:py-20 border-t border-border">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
          <div>
            <p className="text-label text-secondary mb-4">
              WHY FAVA
            </p>
            <h2 className="text-subhead text-primary max-w-md">
              Built for people who take their money seriously.
            </h2>
          </div>
          <p className="text-secondary max-w-sm leading-[1.7] md:pt-8">
            We don&apos;t ask you to trust us. We give you every reason to.
            Licensing, infrastructure, transparency, and track record.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1] as const,
                delay: i * 0.08,
              }}
            >
              <div className="gold-rule-left w-8 mb-6" />
              <h3 className="text-primary font-light mb-3">
                {pillar.title}
              </h3>
              <p className="text-secondary leading-[1.75]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
