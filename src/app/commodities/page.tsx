import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { CommoditiesIcon } from "@/components/ui/SubsidiaryIcons";

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
      "Gold, silver, platinum, and palladium — timeless stores of value.",
    instruments: 4,
    href: "/commodities/precious-metals",
  },
  {
    title: "Base Metals",
    description:
      "Copper, aluminium, zinc, nickel — the industrial backbone.",
    instruments: 6,
    href: "/commodities/base-metals",
  },
  {
    title: "Energy",
    description:
      "Crude oil, Brent, natural gas, heating oil — powering the global economy.",
    instruments: 5,
    href: "/commodities/energy",
  },
  {
    title: "Soft Commodities & Agriculture",
    description:
      "Wheat, corn, soybeans, coffee, cocoa, sugar, cotton, and more.",
    instruments: 8,
    href: "/commodities/agriculture",
  },
];

const reasons = [
  {
    title: "Expert Research",
    description:
      "Weekly market reports, seasonal analysis, and commentary from experienced commodity analysts.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Live quotes, competitive spreads, and no hidden markups on any instrument.",
  },
  {
    title: "Global Access",
    description:
      "Trade 24/5 across multiple order types, on mobile and desktop.",
  },
];

const research = [
  {
    category: "Energy",
    title: "Crude Oil Outlook: OPEC+ Dynamics and Summer Demand",
    date: "11 Apr 2026",
    excerpt:
      "With production cuts extended through Q3, we examine the supply-demand balance heading into peak driving season and its implications for WTI and Brent.",
  },
  {
    category: "Precious Metals",
    title: "Gold in a Rate-Cutting Cycle: Historical Patterns",
    date: "8 Apr 2026",
    excerpt:
      "Central banks continue accumulating reserves while real rates decline. We review how gold has performed in prior easing cycles and what it signals now.",
  },
  {
    category: "Agriculture",
    title: "Soft Commodities: Weather Risk and Planting Season",
    date: "4 Apr 2026",
    excerpt:
      "La Nina conditions are reshaping planting forecasts across the Americas. We assess the impact on wheat, corn, and soybean positioning.",
  },
];

export default function CommoditiesPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="pt-32">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <ChannelBadge name="FAVA COMMODITIES" color="#D97706" />
              <h1 className="text-display-alt text-primary max-w-[680px]">
                The Raw Materials of Growth
              </h1>
              <p className="text-secondary mt-6 max-w-[520px] leading-[1.7]">
                From precious metals to agricultural futures, access the world&apos;s
                most essential markets with institutional execution, deep liquidity,
                and expert research.
              </p>
              <Link href="/commodities/apply" className="inline-block mt-8 text-label text-commodities link-hover">
                Open an account &rarr;
              </Link>
            </div>
            <CommoditiesIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Live Pricing Ribbon */}
      <section className="mt-16 bg-surface">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-center overflow-x-auto">
            {livePrices.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-baseline gap-3 py-5 px-6 first:pl-0 shrink-0 ${
                  i < livePrices.length - 1
                    ? "border-r border-border"
                    : ""
                }`}
              >
                <span className="text-label text-secondary">{item.name}</span>
                <span className="text-numbers text-primary">{item.price}</span>
                <span
                  className={`text-numbers text-[13px] ${
                    item.change.startsWith("+")
                      ? "text-green-500"
                      : "text-[#C47272]"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Categories */}
      <section className="py-[120px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">Markets</p>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[1px] bg-border">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-surface p-8 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="w-full h-[2px] bg-[#D97706] mb-6" />
                  <h3 className="text-subhead text-primary">{cat.title}</h3>
                  <p className="text-numbers text-commodities mt-2">
                    {cat.instruments} instruments
                  </p>
                  <p className="text-secondary mt-3 leading-[1.6] text-[15px]">
                    {cat.description}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  className="text-label text-commodities hover:text-primary transition-colors mt-6 inline-block"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAVA Commodities */}
      <section className="py-[100px] border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">Why FAVA Commodities</p>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-12">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <div className="w-8 h-[2px] bg-[#D97706] mb-5" />
                <h3 className="text-subhead text-primary">{reason.title}</h3>
                <p className="text-secondary mt-3 leading-[1.7] text-[15px]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Preview */}
      <section className="py-[100px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="bg-surface p-10 max-lg:p-6">
            <div className="flex items-center justify-between mb-10">
              <p className="text-label text-secondary">Latest Research</p>
              <Link
                href="/commodities/research"
                className="text-label text-commodities hover:text-primary transition-colors"
              >
                View all research →
              </Link>
            </div>
            <div className="space-y-0">
              {research.map((piece, i) => (
                <div
                  key={piece.title}
                  className={`py-7 ${
                    i < research.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-caption text-commodities uppercase tracking-wider">
                      {piece.category}
                    </span>
                    <span className="text-caption text-tertiary">
                      {piece.date}
                    </span>
                  </div>
                  <h4 className="text-subhead text-primary">{piece.title}</h4>
                  <p className="text-secondary mt-2 leading-[1.6] text-[15px] max-w-[680px]">
                    {piece.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[140px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="bg-surface p-14 max-lg:p-8 text-center">
            <h2 className="text-display-alt text-primary">
              Start Trading Commodities
            </h2>
            <p className="text-secondary mt-4 text-[15px]">
              24+ instruments · Competitive spreads · Expert research
            </p>
            <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
              <Link
                href="/commodities/apply"
                className="inline-block border border-commodities text-commodities text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-commodities/10 transition-colors"
              >
                Open Account
              </Link>
              <Link
                href="/commodities/instruments"
                className="text-label text-secondary link-hover hover:text-primary transition-colors"
              >
                View Instruments &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
