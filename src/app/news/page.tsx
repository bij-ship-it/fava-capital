"use client";

import { useState } from "react";

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
  },
  {
    category: "Crypto",
    title: "FAVA Digital Receives Full FCA Cryptoasset Registration",
    date: "28 March 2026",
  },
  {
    category: "Company",
    title: "FAVA Capital Appoints New Chief Technology Officer",
    date: "15 March 2026",
  },
  {
    category: "Commodities",
    title: "FAVA Commodities Launches Physical Gold Trading Desk",
    date: "2 March 2026",
  },
  {
    category: "Markets",
    title: "New Institutional Prime Brokerage Offering from FAVA Markets",
    date: "18 February 2026",
  },
  {
    category: "Crypto",
    title: "FAVA Digital Partners with Leading Custody Provider for Institutional Storage",
    date: "5 February 2026",
  },
];

const categoryColors: Record<string, string> = {
  Company: "text-bright",
  Markets: "text-markets",
  Crypto: "text-crypto",
  Commodities: "text-commodities",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary">
          Newsroom
        </h1>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Featured Article */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Featured</p>

        <div>
          <p className="text-caption text-secondary mb-4">{featuredArticle.date}</p>
          <h2 className="text-subhead text-primary !text-[28px] !leading-[1.3] mb-6">
            {featuredArticle.title}
          </h2>
          <p className="text-primary/60 text-[15px] leading-[1.7] font-light max-w-2xl">
            {featuredArticle.excerpt}
          </p>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Category Filters + Article List */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <div className="flex flex-wrap gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-label cursor-pointer transition-colors duration-200 ${
                activeCategory === cat
                  ? "text-gold"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col">
          {filteredArticles.map((article, i) => (
            <div
              key={article.title}
              className={`py-6 flex flex-col md:flex-row md:items-center md:gap-12 cursor-pointer group ${
                i < filteredArticles.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-6 md:w-56 shrink-0 mb-2 md:mb-0">
                <span className="text-caption text-secondary">{article.date}</span>
                <span className={`text-caption ${categoryColors[article.category] || "text-secondary"}`}>
                  {article.category}
                </span>
              </div>
              <h3 className="text-subhead text-primary group-hover:text-gold transition-colors duration-200">
                {article.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="text-label text-gold link-hover cursor-pointer">
            Load More
          </button>
        </div>
      </section>
    </div>
  );
}
