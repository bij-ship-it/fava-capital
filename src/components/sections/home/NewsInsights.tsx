"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Article {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
}

const articles: Article[] = [
  {
    title: "FAVA Markets Launches Zero-Commission Trading",
    category: "Markets",
    categoryColor: "#14B8A6",
    date: "March 28, 2026",
  },
  {
    title: "Cryptorio Achieves SOC2 Compliance",
    category: "Crypto",
    categoryColor: "#6366F1",
    date: "March 15, 2026",
  },
  {
    title: "Q1 2026 Commodities Outlook",
    category: "Commodities",
    categoryColor: "#D97706",
    date: "March 1, 2026",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export function NewsInsights() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-light text-ivory">
            News &amp; Insights
          </h2>
          <Link
            href="/news"
            className="font-[family-name:var(--font-heading)] text-sm text-accent hover:text-bright transition-colors duration-300"
          >
            View All &rarr;
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={cardVariants}
              className="bg-obsidian/30 border border-white/5 rounded-sm p-6 group"
            >
              <span
                className="inline-block font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider px-2 py-1 rounded-sm mb-4"
                style={{
                  color: article.categoryColor,
                  backgroundColor: `${article.categoryColor}15`,
                }}
              >
                {article.category}
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-sm text-platinum/40 mb-6">
                {article.date}
              </p>
              <Link
                href="/news"
                className="font-[family-name:var(--font-heading)] text-sm text-accent hover:text-bright transition-colors duration-300"
              >
                Read More &rarr;
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
