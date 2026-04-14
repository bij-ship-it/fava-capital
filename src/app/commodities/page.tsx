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
      "Gold, silver, platinum, and palladium. Timeless stores of value that anchor portfolios against uncertainty.",
    instruments: "4 instruments",
  },
  {
    title: "Base Metals",
    description:
      "Copper, aluminium, zinc, and nickel. The industrial backbone of global infrastructure and manufacturing.",
    instruments: "6 instruments",
  },
  {
    title: "Energy",
    description:
      "Crude oil, Brent, natural gas, and heating oil. The lifeblood of the modern economy.",
    instruments: "5 instruments",
  },
  {
    title: "Agriculture",
    description:
      "Wheat, corn, soybeans, coffee, cocoa, sugar, and cotton. Shaped by weather, demand, and geopolitics.",
    instruments: "8 instruments",
  },
];

export default function CommoditiesPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="pt-32">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-6">
            01 — FAVA Commodities
          </p>
          <h1 className="text-display-alt text-primary max-w-[680px]">
            The Raw Materials of Growth
          </h1>
          <p className="text-secondary mt-6 max-w-[520px] leading-[1.7]">
            From precious metals to agricultural futures, access the world's
            most essential markets with institutional execution, deep liquidity,
            and expert research.
          </p>
        </div>
      </section>

      {/* Pricing Ribbon */}
      <section className="mt-16 border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-center gap-12 max-lg:gap-8 py-5 overflow-x-auto">
            {livePrices.map((item) => (
              <div key={item.name} className="flex items-baseline gap-3 shrink-0">
                <span className="text-label text-secondary">{item.name}</span>
                <span className="text-numbers text-primary">{item.price}</span>
                <span
                  className={`text-caption ${
                    item.change.startsWith("+")
                      ? "text-green-500"
                      : "text-rose-500"
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
      <section className="py-[140px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-16">02 — Markets</p>
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`flex items-start justify-between gap-8 py-8 ${
                i < categories.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-subhead text-primary">{cat.title}</h3>
                <p className="text-secondary mt-2 max-w-[480px]">
                  {cat.description}
                </p>
              </div>
              <span className="text-caption text-tertiary shrink-0 pt-2">
                {cat.instruments}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-[140px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-6">03 — Get Started</p>
          <h2 className="text-display-alt text-primary max-w-[560px]">
            Start Trading Commodities
          </h2>
          <p className="text-secondary mt-6 max-w-[440px] leading-[1.7]">
            Open your account in minutes. Access 24+ commodity instruments with
            competitive spreads and dedicated support.
          </p>
          <Link
            href="/commodities/apply"
            className="inline-block mt-10 text-commodities text-label hover:text-primary transition-colors"
          >
            Open Account →
          </Link>
        </div>
      </section>
    </div>
  );
}
