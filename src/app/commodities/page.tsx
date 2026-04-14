import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAVA Commodities — The Raw Materials of Growth",
  description:
    "Access global commodities markets through FAVA. Trade precious metals, energy, agriculture, and more with institutional-grade execution.",
};

const livePrices = [
  { name: "Gold", price: "$2,341.00", change: "+0.42%" },
  { name: "Silver", price: "$27.84", change: "+0.18%" },
  { name: "Crude Oil", price: "$78.52", change: "-0.31%" },
  { name: "Natural Gas", price: "$2.14", change: "+1.07%" },
];

const categories = [
  {
    title: "Precious Metals",
    description:
      "Gold, silver, platinum, and palladium. The timeless stores of value that anchor portfolios against uncertainty.",
    icon: "◆",
    instruments: "4 instruments",
  },
  {
    title: "Base Metals",
    description:
      "Copper, aluminium, zinc, and nickel. The industrial backbone of global infrastructure and manufacturing.",
    icon: "⬡",
    instruments: "6 instruments",
  },
  {
    title: "Energy",
    description:
      "Crude oil, Brent, natural gas, and heating oil. The lifeblood of the modern economy.",
    icon: "⚡",
    instruments: "5 instruments",
  },
  {
    title: "Soft Commodities",
    description:
      "Coffee, cocoa, sugar, and cotton. Agricultural products shaped by weather, demand, and geopolitics.",
    icon: "◉",
    instruments: "4 instruments",
  },
  {
    title: "Agriculture",
    description:
      "Wheat, corn, soybeans, and rice. The essential grains feeding a growing world population.",
    icon: "▲",
    instruments: "5 instruments",
  },
];

const reasons = [
  {
    title: "Institutional Spreads",
    description:
      "Ultra-tight spreads on all major commodities, sourced from tier-1 liquidity providers.",
  },
  {
    title: "Physical & Derivative",
    description:
      "Access both spot and futures markets with seamless execution across contract types.",
  },
  {
    title: "Deep Research",
    description:
      "Weekly market reports, seasonal analysis, and expert commentary from our commodities desk.",
  },
  {
    title: "Risk Management",
    description:
      "Sophisticated hedging tools and margin management for professional-grade portfolio protection.",
  },
  {
    title: "24/5 Market Access",
    description:
      "Trade across global sessions — from Sydney to New York — with zero interruption.",
  },
  {
    title: "Regulated & Secure",
    description:
      "Segregated client funds, multi-jurisdictional oversight, and enterprise-grade infrastructure.",
  },
];

export default function CommoditiesPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-commodity-amber/5 via-void to-void" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-commodity-amber/8 rounded-full blur-[160px]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-commodity-amber" />
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              FAVA Commodities
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-ivory leading-[0.95] mb-8">
            The Raw Materials
            <br />
            <span className="text-commodity-amber">of Growth</span>
          </h1>
          <p className="text-platinum/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            From precious metals to agricultural futures, access the world's
            most essential markets with institutional-grade execution, deep
            liquidity, and expert research.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/commodities/apply"
              className="inline-flex items-center gap-2 bg-commodity-amber text-void px-8 py-4 font-[family-name:var(--font-heading)] font-medium tracking-wide hover:bg-commodity-amber/90 transition-colors"
            >
              Open Account
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/commodities/markets"
              className="inline-flex items-center gap-2 border border-platinum/20 text-ivory px-8 py-4 font-[family-name:var(--font-heading)] font-medium tracking-wide hover:border-commodity-amber/50 hover:text-commodity-amber transition-colors"
            >
              View Markets
            </Link>
          </div>
        </div>
      </section>

      {/* Live Pricing Ribbon */}
      <section className="border-y border-platinum/10 bg-obsidian/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 overflow-x-auto gap-8">
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-platinum/50 text-xs font-[family-name:var(--font-heading)] tracking-wider uppercase">
                Live Prices
              </span>
            </div>
            {livePrices.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-4 shrink-0"
              >
                <span className="text-ivory font-[family-name:var(--font-heading)] font-medium">
                  {item.name}
                </span>
                <span className="text-ivory text-lg font-medium tabular-nums">
                  {item.price}
                </span>
                <span
                  className={`text-sm tabular-nums ${
                    item.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              Markets
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-ivory mt-4 mb-6">
              Comprehensive Coverage
            </h2>
            <p className="text-platinum/60 text-lg max-w-2xl">
              Five distinct commodity sectors, each with deep liquidity and
              expert analysis to support your trading strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group border border-platinum/10 bg-obsidian/30 p-8 hover:border-commodity-amber/30 transition-all duration-300"
              >
                <div className="text-commodity-amber text-2xl mb-4">
                  {cat.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-3">
                  {cat.title}
                </h3>
                <p className="text-platinum/60 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-commodity-amber/70 text-xs font-[family-name:var(--font-heading)] tracking-wider uppercase">
                    {cat.instruments}
                  </span>
                  <svg
                    className="w-4 h-4 text-platinum/30 group-hover:text-commodity-amber transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAVA Commodities */}
      <section className="py-24 border-t border-platinum/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              The FAVA Edge
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-ivory mt-4 mb-6">
              Why FAVA Commodities
            </h2>
            <p className="text-platinum/60 text-lg max-w-2xl mx-auto">
              Built for serious traders who demand institutional execution,
              transparent pricing, and world-class research.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="p-6">
                <div className="w-10 h-px bg-commodity-amber mb-6" />
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-3">
                  {reason.title}
                </h3>
                <p className="text-platinum/60 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-platinum/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-ivory mb-6">
            Start Trading <span className="text-commodity-amber">Commodities</span>
          </h2>
          <p className="text-platinum/60 text-lg max-w-xl mx-auto mb-10">
            Open your account in minutes. Access 24+ commodity instruments with
            competitive spreads and dedicated support.
          </p>
          <Link
            href="/commodities/apply"
            className="inline-flex items-center gap-2 bg-commodity-amber text-void px-10 py-4 font-[family-name:var(--font-heading)] font-medium text-lg tracking-wide hover:bg-commodity-amber/90 transition-colors"
          >
            Open Account
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
