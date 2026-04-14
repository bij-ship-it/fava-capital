"use client";

import { useState } from "react";
import Link from "next/link";

type Category =
  | "All"
  | "Precious Metals"
  | "Base Metals"
  | "Energy"
  | "Agriculture";

interface CommodityRow {
  name: string;
  symbol: string;
  category: Category;
  price: string;
  change: string;
  changePercent: string;
  high: string;
  low: string;
  volume: string;
}

const commodities: CommodityRow[] = [
  {
    name: "Gold",
    symbol: "XAU",
    category: "Precious Metals",
    price: "2,341.00",
    change: "+9.80",
    changePercent: "+0.42%",
    high: "2,358.40",
    low: "2,328.10",
    volume: "184.2K",
  },
  {
    name: "Silver",
    symbol: "XAG",
    category: "Precious Metals",
    price: "27.84",
    change: "+0.05",
    changePercent: "+0.18%",
    high: "28.12",
    low: "27.68",
    volume: "92.7K",
  },
  {
    name: "Platinum",
    symbol: "XPT",
    category: "Precious Metals",
    price: "968.50",
    change: "-3.20",
    changePercent: "-0.33%",
    high: "976.80",
    low: "962.10",
    volume: "28.4K",
  },
  {
    name: "Copper",
    symbol: "HG",
    category: "Base Metals",
    price: "4.12",
    change: "+0.03",
    changePercent: "+0.73%",
    high: "4.15",
    low: "4.08",
    volume: "67.9K",
  },
  {
    name: "Crude Oil (WTI)",
    symbol: "CL",
    category: "Energy",
    price: "78.52",
    change: "-0.24",
    changePercent: "-0.31%",
    high: "79.18",
    low: "77.90",
    volume: "312.8K",
  },
  {
    name: "Brent Oil",
    symbol: "BRN",
    category: "Energy",
    price: "82.36",
    change: "+0.18",
    changePercent: "+0.22%",
    high: "83.04",
    low: "81.72",
    volume: "246.1K",
  },
  {
    name: "Natural Gas",
    symbol: "NG",
    category: "Energy",
    price: "2.14",
    change: "+0.02",
    changePercent: "+1.07%",
    high: "2.18",
    low: "2.10",
    volume: "158.3K",
  },
  {
    name: "Wheat",
    symbol: "ZW",
    category: "Agriculture",
    price: "612.25",
    change: "-2.50",
    changePercent: "-0.41%",
    high: "618.00",
    low: "608.75",
    volume: "74.6K",
  },
  {
    name: "Corn",
    symbol: "ZC",
    category: "Agriculture",
    price: "478.50",
    change: "+1.75",
    changePercent: "+0.37%",
    high: "481.00",
    low: "475.25",
    volume: "112.4K",
  },
  {
    name: "Coffee",
    symbol: "KC",
    category: "Agriculture",
    price: "184.30",
    change: "+3.10",
    changePercent: "+1.71%",
    high: "186.50",
    low: "180.20",
    volume: "41.8K",
  },
  {
    name: "Sugar",
    symbol: "SB",
    category: "Agriculture",
    price: "21.46",
    change: "-0.12",
    changePercent: "-0.56%",
    high: "21.72",
    low: "21.30",
    volume: "89.2K",
  },
];

const categories: Category[] = [
  "All",
  "Precious Metals",
  "Base Metals",
  "Energy",
  "Agriculture",
];

export default function CommoditiesMarketsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? commodities
      : commodities.filter((c) => c.category === activeCategory);

  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <Link
            href="/commodities"
            className="text-commodity-amber/70 text-sm font-[family-name:var(--font-heading)] hover:text-commodity-amber transition-colors"
          >
            ← FAVA Commodities
          </Link>
        </div>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-commodity-amber" />
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              Markets Overview
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-ivory mb-4">
            Commodity <span className="text-commodity-amber">Markets</span>
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl">
            Real-time pricing across precious metals, base metals, energy, and
            agricultural commodities. Monitor spreads, volume, and daily ranges.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm font-[family-name:var(--font-heading)] tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-commodity-amber text-void"
                  : "border border-platinum/20 text-platinum/60 hover:border-commodity-amber/40 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Dashboard */}
        <div className="border border-platinum/10 bg-obsidian/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-platinum/10">
                  <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                    Commodity
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                    Price
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                    Change
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden md:table-cell">
                    High
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden md:table-cell">
                    Low
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden lg:table-cell">
                    Volume
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((commodity) => (
                  <tr
                    key={commodity.symbol}
                    className="border-b border-platinum/5 hover:bg-commodity-amber/5 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-ivory font-[family-name:var(--font-heading)] font-medium">
                          {commodity.name}
                        </span>
                        <span className="text-platinum/30 text-xs">
                          {commodity.symbol}
                        </span>
                      </div>
                    </td>
                    <td className="text-right px-6 py-5 text-ivory tabular-nums font-medium">
                      {commodity.price}
                    </td>
                    <td className="text-right px-6 py-5">
                      <div className="flex flex-col items-end">
                        <span
                          className={`tabular-nums text-sm ${
                            commodity.change.startsWith("+")
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {commodity.change}
                        </span>
                        <span
                          className={`tabular-nums text-xs ${
                            commodity.changePercent.startsWith("+")
                              ? "text-green-400/70"
                              : "text-red-400/70"
                          }`}
                        >
                          {commodity.changePercent}
                        </span>
                      </div>
                    </td>
                    <td className="text-right px-6 py-5 text-platinum/60 tabular-nums text-sm hidden md:table-cell">
                      {commodity.high}
                    </td>
                    <td className="text-right px-6 py-5 text-platinum/60 tabular-nums text-sm hidden md:table-cell">
                      {commodity.low}
                    </td>
                    <td className="text-right px-6 py-5 text-platinum/40 tabular-nums text-sm hidden lg:table-cell">
                      {commodity.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Hours Notice */}
        <div className="mt-8 flex items-center gap-3 text-platinum/40 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>
            Markets open. Prices are indicative and updated every 5 seconds
            during trading hours.
          </span>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-platinum/10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl text-ivory mb-4">
            Ready to Trade?
          </h2>
          <p className="text-platinum/60 mb-8 max-w-lg mx-auto">
            Access all commodity markets with institutional spreads and
            professional execution.
          </p>
          <Link
            href="/commodities/apply"
            className="inline-flex items-center gap-2 bg-commodity-amber text-void px-8 py-4 font-[family-name:var(--font-heading)] font-medium tracking-wide hover:bg-commodity-amber/90 transition-colors"
          >
            Open Account
          </Link>
        </div>
      </div>
    </div>
  );
}
