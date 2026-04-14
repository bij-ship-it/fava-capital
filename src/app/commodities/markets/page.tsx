"use client";

import { useState } from "react";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

type Category =
  | "All"
  | "Precious Metals"
  | "Base Metals"
  | "Energy"
  | "Agriculture";

interface CommodityRow {
  name: string;
  symbol: string;
  category: Exclude<Category, "All">;
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
    <div className="min-h-screen bg-base pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA COMMODITIES" color="#D97706" />
        <h1 className="text-display-alt text-primary">
          Commodity Markets
        </h1>
        <p className="text-secondary mt-4 max-w-[520px] leading-[1.7]">
          Real-time pricing across precious metals, base metals, energy, and
          agricultural commodities.
        </p>

        {/* Category Filters */}
        <div className="flex gap-8 mt-12 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-3 text-label transition-colors ${
                activeCategory === cat
                  ? "text-commodities border-b border-commodities"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 text-label text-tertiary">
                  Commodity
                </th>
                <th className="text-right py-4 px-6 text-label text-tertiary">
                  Price
                </th>
                <th className="text-right py-4 px-6 text-label text-tertiary">
                  Change
                </th>
                <th className="text-right py-4 px-6 text-label text-tertiary hidden md:table-cell">
                  High
                </th>
                <th className="text-right py-4 px-6 text-label text-tertiary hidden md:table-cell">
                  Low
                </th>
                <th className="text-right py-4 pl-6 text-label text-tertiary hidden lg:table-cell">
                  Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.symbol}
                  className="border-b border-border/50 hover:bg-surface/50 transition-colors"
                >
                  <td className="py-5 pr-6">
                    <span className="text-primary">{c.name}</span>
                    <span className="text-tertiary text-caption ml-3">
                      {c.symbol}
                    </span>
                  </td>
                  <td className="text-right py-5 px-6 text-numbers text-primary text-[20px]">
                    {c.price}
                  </td>
                  <td className="text-right py-5 px-6">
                    <span
                      className={`block ${
                        c.change.startsWith("+")
                          ? "text-green-500"
                          : "text-rose-500"
                      }`}
                    >
                      {c.change}
                    </span>
                    <span
                      className={`text-caption block mt-0.5 ${
                        c.changePercent.startsWith("+")
                          ? "text-green-500/70"
                          : "text-rose-500/70"
                      }`}
                    >
                      {c.changePercent}
                    </span>
                  </td>
                  <td className="text-right py-5 px-6 text-secondary hidden md:table-cell">
                    {c.high}
                  </td>
                  <td className="text-right py-5 px-6 text-secondary hidden md:table-cell">
                    {c.low}
                  </td>
                  <td className="text-right py-5 pl-6 text-tertiary hidden lg:table-cell">
                    {c.volume}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="text-caption text-tertiary mt-8 pb-[140px]">
          Prices are indicative and updated during trading hours.
        </p>
      </div>
    </div>
  );
}
