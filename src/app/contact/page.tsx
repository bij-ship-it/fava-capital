"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const enquiryTypes = [
  {
    title: "Investor Relations",
    description: "For current and prospective investors seeking information about FAVA Capital and its subsidiaries.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Partnership Enquiry",
    description: "Explore introducing broker programmes, white-label solutions, and institutional partnerships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Media Enquiry",
    description: "Press, media, and communications requests. For interviews, quotes, and press releases.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "General Contact",
    description: "All other enquiries including career questions, technical support, and general information.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const offices = [
  {
    city: "London",
    address: "One Bishopsgate Plaza, 80 Bishopsgate",
    postcode: "London EC2N 4AG, United Kingdom",
    phone: "+44 (0) 20 7946 0958",
  },
  {
    city: "Dubai",
    address: "Gate District, DIFC, Level 14",
    postcode: "Dubai, United Arab Emirates",
    phone: "+971 4 375 8200",
  },
];

export default function ContactPage() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<string | null>(null);

  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-bright text-sm uppercase tracking-[0.2em] mb-6"
        >
          Contact
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Get in Touch
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
      </section>

      {/* Enquiry Type Selector */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            How Can We Help?
          </h2>
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-ivory">
            Select Your Enquiry Type
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {enquiryTypes.map((type, i) => (
            <motion.button
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedEnquiry(type.title)}
              className={`border rounded-sm p-6 text-left transition-all duration-300 cursor-pointer ${
                selectedEnquiry === type.title
                  ? "border-bright bg-bright/10"
                  : "border-platinum/10 bg-obsidian/30 hover:border-platinum/25"
              }`}
            >
              <div className={`mb-4 ${selectedEnquiry === type.title ? "text-bright" : "text-gold"}`}>
                {type.icon}
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-ivory text-base font-medium mb-2">
                {type.title}
              </h3>
              <p className="text-platinum/50 text-xs leading-relaxed">{type.description}</p>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="border border-platinum/10 rounded-sm p-8 md:p-12 bg-obsidian/30">
            <h3 className="font-[family-name:var(--font-heading)] text-ivory text-xl font-medium mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-platinum/60 text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-void border border-platinum/15 rounded-sm px-4 py-3 text-ivory text-sm placeholder:text-platinum/30 focus:outline-none focus:border-bright/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-platinum/60 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-void border border-platinum/15 rounded-sm px-4 py-3 text-ivory text-sm placeholder:text-platinum/30 focus:outline-none focus:border-bright/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-platinum/60 text-sm mb-2">Enquiry Type</label>
                  <select className="w-full bg-void border border-platinum/15 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-bright/50 transition-colors appearance-none">
                    <option value="">Select type...</option>
                    <option value="investor">Investor Relations</option>
                    <option value="partnership">Partnership Enquiry</option>
                    <option value="media">Media Enquiry</option>
                    <option value="general">General Contact</option>
                  </select>
                </div>
                <div>
                  <label className="block text-platinum/60 text-sm mb-2">Subsidiary</label>
                  <select className="w-full bg-void border border-platinum/15 rounded-sm px-4 py-3 text-ivory text-sm focus:outline-none focus:border-bright/50 transition-colors appearance-none">
                    <option value="">Select subsidiary...</option>
                    <option value="capital">FAVA Capital (Group)</option>
                    <option value="markets">FAVA Markets</option>
                    <option value="crypto">Cryptorio</option>
                    <option value="wealth">FAVA Wealth</option>
                    <option value="commodities">FAVA Commodities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-platinum/60 text-sm mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full bg-void border border-platinum/15 rounded-sm px-4 py-3 text-ivory text-sm placeholder:text-platinum/30 focus:outline-none focus:border-bright/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-bright hover:bg-mid rounded-sm px-8 py-3.5 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Office Locations */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-gold text-sm uppercase tracking-[0.2em] mb-4">
            Our Offices
          </h2>
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-ivory">
            Global Presence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="border border-platinum/10 rounded-sm p-8 bg-obsidian/30"
            >
              <h3 className="font-[family-name:var(--font-heading)] text-gold text-lg font-medium mb-4">
                {office.city}
              </h3>
              <p className="text-ivory text-sm mb-1">{office.address}</p>
              <p className="text-platinum/50 text-sm mb-4">{office.postcode}</p>
              <p className="text-platinum/60 text-sm">{office.phone}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
