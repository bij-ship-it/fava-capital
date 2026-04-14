import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "FAVA Markets — Trading Academy",
  description:
    "Learn to trade with guides, tutorials, and market analysis from the FAVA Markets education team.",
};

const content = [
  {
    title: "Introduction to Forex Trading",
    type: "Guide",
    readTime: "12 min",
    category: "Beginner",
  },
  {
    title: "Understanding Leverage and Margin",
    type: "Guide",
    readTime: "8 min",
    category: "Beginner",
  },
  {
    title: "Technical Analysis Fundamentals",
    type: "Course",
    readTime: "25 min",
    category: "Beginner",
  },
  {
    title: "Reading Candlestick Patterns",
    type: "Guide",
    readTime: "15 min",
    category: "Intermediate",
  },
  {
    title: "Risk Management Strategies",
    type: "Guide",
    readTime: "10 min",
    category: "Intermediate",
  },
  {
    title: "Building a Trading Plan",
    type: "Workshop",
    readTime: "18 min",
    category: "Intermediate",
  },
  {
    title: "Algorithmic Trading with MQL5",
    type: "Course",
    readTime: "45 min",
    category: "Advanced",
  },
  {
    title: "Institutional Order Flow Analysis",
    type: "Guide",
    readTime: "20 min",
    category: "Advanced",
  },
  {
    title: "Multi-Asset Portfolio Construction",
    type: "Course",
    readTime: "30 min",
    category: "Advanced",
  },
  {
    title: "Macroeconomic Indicators for Traders",
    type: "Guide",
    readTime: "14 min",
    category: "Intermediate",
  },
  {
    title: "Using the Economic Calendar",
    type: "Tutorial",
    readTime: "6 min",
    category: "Beginner",
  },
  {
    title: "Advanced Order Types Explained",
    type: "Guide",
    readTime: "10 min",
    category: "Intermediate",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
        <h1 className="text-display-alt text-primary mb-4">Learn</h1>
        <p className="text-secondary max-w-[520px] mb-20">
          Structured education for every level. From first trade to algorithmic
          strategy development.
        </p>

        {/* Content Rows */}
        <section className="pb-32">
          <p className="text-label text-secondary mb-12">
            01 &mdash; All Resources
          </p>
          <div className="border-t border-border">
            {/* Header row */}
            <div className="hidden sm:grid grid-cols-[1fr_100px_80px_100px] gap-4 py-3 px-4 border-b border-border">
              <span className="text-caption text-secondary">Title</span>
              <span className="text-caption text-secondary">Type</span>
              <span className="text-caption text-secondary text-right">
                Time
              </span>
              <span className="text-caption text-secondary text-right">
                Level
              </span>
            </div>

            {content.map((item, i) => (
              <Link
                key={item.title}
                href="/markets/learn"
                className={`group grid sm:grid-cols-[1fr_100px_80px_100px] gap-4 py-4 px-4 border-b border-border hover:bg-elevated transition-colors ${
                  i % 2 === 0 ? "bg-surface" : ""
                }`}
              >
                <span className="text-primary text-[15px] group-hover:text-markets transition-colors">
                  {item.title}
                </span>
                <span className="text-secondary text-[13px]">{item.type}</span>
                <span className="text-secondary text-[13px] sm:text-right tabular-nums">
                  {item.readTime}
                </span>
                <span className="text-tertiary text-[13px] sm:text-right">
                  {item.category}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 flex items-center gap-6">
            <Link
              href="/markets/accounts"
              className="inline-block bg-markets text-base text-label px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Start Trading
            </Link>
            <Link
              href="/markets/products"
              className="inline-block text-label text-markets hover:opacity-80 transition-opacity"
            >
              View Instruments &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
