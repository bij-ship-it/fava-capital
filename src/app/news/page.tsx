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

const categories = ["All", "Company", "Markets", "Crypto", "Commodities"];

const featuredArticle = {
  category: "Company",
  title: "FAVA Capital Announces Multi-Vertical Expansion Across Four Subsidiaries",
  date: "12 April 2026",
  excerpt:
    "FAVA Capital Holdings has completed the launch of its full ecosystem, spanning FX brokerage, institutional crypto exchange, multi-strategy wealth management, and physical commodity trading — marking a milestone in the group's ambition to build a vertically integrated financial infrastructure.",
};

const articles = [
  {
    category: "Markets",
    title: "FAVA Markets Surpasses $2B in Monthly Trading Volume",
    date: "8 April 2026",
    excerpt: "Institutional FX volumes continue to grow as FAVA Markets expands its liquidity provider network and launches new exotic currency pairs.",
  },
  {
    category: "Crypto",
    title: "Cryptorio Receives Full FCA Cryptoasset Registration",
    date: "28 March 2026",
    excerpt: "Cryptorio Digital Assets has secured its FCA registration, enabling compliant cryptocurrency exchange services for UK-based institutional and retail clients.",
  },
  {
    category: "Company",
    title: "FAVA Capital Appoints New Chief Technology Officer",
    date: "15 March 2026",
    excerpt: "James Chen joins from a leading global exchange to lead engineering across all FAVA Capital subsidiaries, bringing deep expertise in distributed systems and blockchain infrastructure.",
  },
  {
    category: "Commodities",
    title: "FAVA Commodities Launches Physical Gold Trading Desk",
    date: "2 March 2026",
    excerpt: "The new physical gold trading desk provides institutional clients with direct access to LBMA-accredited vaults and competitive pricing on spot and forward contracts.",
  },
  {
    category: "Markets",
    title: "New Institutional Prime Brokerage Offering from FAVA Markets",
    date: "18 February 2026",
    excerpt: "FAVA Markets introduces a full prime brokerage suite for hedge funds and asset managers, including multi-asset margin accounts and advanced execution algorithms.",
  },
  {
    category: "Crypto",
    title: "Cryptorio Partners with Leading Custody Provider for Institutional Storage",
    date: "5 February 2026",
    excerpt: "A new strategic partnership brings institutional-grade cold storage and insurance coverage to Cryptorio's growing base of professional and corporate clients.",
  },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const categoryColors: Record<string, string> = {
    Company: "text-bright bg-bright/10",
    Markets: "text-fx-teal bg-fx-teal/10",
    Crypto: "text-crypto-electric bg-crypto-electric/10",
    Commodities: "text-commodity-amber bg-commodity-amber/10",
  };

  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-bright text-sm uppercase tracking-[0.2em] mb-6"
        >
          Latest Updates
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight"
        >
          Newsroom
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

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-platinum/10 rounded-sm overflow-hidden bg-obsidian/40 hover:border-platinum/20 transition-all duration-300 cursor-pointer group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Thumbnail placeholder */}
            <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-deep to-obsidian flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-bright/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bright">
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <p className="text-platinum/30 text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider">
                  Featured Story
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className={`inline-block w-fit px-3 py-1 rounded-sm text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider mb-4 ${categoryColors[featuredArticle.category]}`}>
                {featuredArticle.category}
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-light text-ivory leading-snug mb-4 group-hover:text-gold transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="text-platinum/40 text-sm mb-4">{featuredArticle.date}</p>
              <p className="text-platinum/60 text-sm leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-sm text-sm font-[family-name:var(--font-heading)] transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-bright text-ivory"
                  : "border border-platinum/15 text-platinum/50 hover:text-ivory hover:border-platinum/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-platinum/10 rounded-sm overflow-hidden bg-obsidian/30 hover:border-platinum/20 transition-all duration-300 cursor-pointer group"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-deep/60 to-obsidian/80 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-platinum/15">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-sm text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="text-platinum/30 text-xs">{article.date}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-base font-medium leading-snug mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-platinum/50 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <button className="border border-platinum/20 hover:border-platinum/40 rounded-sm px-10 py-3 text-platinum/60 hover:text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer">
          Load More
        </button>
      </section>
    </div>
  );
}
