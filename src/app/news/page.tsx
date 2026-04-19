"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const categories = ["All", "Company", "Markets", "Digital", "Commodities"] as const;
type Category = (typeof categories)[number];

type Article = {
  category: Exclude<Category, "All">;
  title: string;
  date: string;
  excerpt?: string;
};

const featuredArticle: Article = {
  category: "Company",
  title:
    "FAVA Capital Announces Multi-Vertical Expansion Across Five Subsidiaries",
  date: "12 April 2026",
  excerpt:
    "FAVA Capital has completed the launch of its full ecosystem — spanning FX brokerage, institutional digital assets, multi-strategy wealth management, cross-border payments, and physical commodities trading — marking a milestone in the group's ambition to build a vertically integrated financial platform.",
};

const articles: Article[] = [
  {
    category: "Markets",
    title: "FAVA Markets surpasses $2B in monthly trading volume",
    date: "8 April 2026",
  },
  {
    category: "Digital",
    title: "FAVA Digital receives full FCA cryptoasset registration",
    date: "28 March 2026",
  },
  {
    category: "Company",
    title: "FAVA Capital appoints new Chief Technology Officer",
    date: "15 March 2026",
  },
  {
    category: "Commodities",
    title: "FAVA Commodities launches physical gold trading desk",
    date: "2 March 2026",
  },
  {
    category: "Markets",
    title: "New institutional prime brokerage offering from FAVA Markets",
    date: "18 February 2026",
  },
  {
    category: "Digital",
    title:
      "FAVA Digital partners with leading custody provider for institutional storage",
    date: "5 February 2026",
  },
];

const categoryColor: Record<Exclude<Category, "All">, string> = {
  Company: "text-gold",
  Markets: "text-markets",
  Digital: "text-crypto",
  Commodities: "text-commodities",
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="pt-32 pb-[80px] max-md:pt-24 max-md:pb-16">
        <Container>
          <p className="text-label text-secondary mb-6">NEWSROOM</p>
          <h1 className="text-display text-primary max-w-2xl">
            Announcements from across the FAVA ecosystem.
          </h1>
          <div className="gold-rule-left w-20 mt-10" />
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-10">FEATURED</p>

          <article className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className={cn("text-caption", categoryColor[featuredArticle.category])}>
                {featuredArticle.category}
              </span>
              <span className="text-caption text-tertiary">
                {featuredArticle.date}
              </span>
            </div>
            <h2 className="text-display-alt text-primary">
              {featuredArticle.title}
            </h2>
            {featuredArticle.excerpt && (
              <p className="text-secondary leading-[1.7] mt-6">
                {featuredArticle.excerpt}
              </p>
            )}
          </article>
        </Container>
      </section>

      <section className="py-[100px] max-md:py-16">
        <Container>
          <div className="flex items-center justify-between gap-6 mb-12 flex-wrap">
            <p className="text-label text-secondary">ALL ANNOUNCEMENTS</p>
            <div className="flex items-center gap-6 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "text-label cursor-pointer transition-colors",
                    activeCategory === cat
                      ? "text-gold"
                      : "text-secondary hover:text-primary",
                  )}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border">
            {filtered.map((article) => (
              <article
                key={article.title}
                className="group border-b border-border py-7 flex flex-col md:flex-row md:items-center md:gap-12 cursor-pointer"
              >
                <div className="flex items-center gap-6 md:w-56 shrink-0 mb-2 md:mb-0">
                  <span className="text-caption text-tertiary">
                    {article.date}
                  </span>
                  <span
                    className={cn("text-caption", categoryColor[article.category])}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="text-subhead text-primary group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-secondary mt-10">
              No announcements in this category yet.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
