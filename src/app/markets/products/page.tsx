"use client";

import { useState } from "react";

const categories = ["FX Pairs", "Indices", "Shares", "Commodities", "Crypto CFDs"] as const;

type Category = (typeof categories)[number];

interface Instrument {
  name: string;
  spreadFrom: string;
  leverage: string;
  tradingHours: string;
}

const instrumentData: Record<Category, Instrument[]> = {
  "FX Pairs": [
    { name: "EUR/USD", spreadFrom: "0.1 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "GBP/USD", spreadFrom: "0.3 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "USD/JPY", spreadFrom: "0.2 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "AUD/USD", spreadFrom: "0.4 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "USD/CHF", spreadFrom: "0.4 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "EUR/GBP", spreadFrom: "0.5 pips", leverage: "1:500", tradingHours: "24/5" },
    { name: "GBP/JPY", spreadFrom: "0.8 pips", leverage: "1:200", tradingHours: "24/5" },
    { name: "EUR/AUD", spreadFrom: "0.9 pips", leverage: "1:200", tradingHours: "24/5" },
  ],
  Indices: [
    { name: "US500", spreadFrom: "0.4 pts", leverage: "1:200", tradingHours: "23/5" },
    { name: "US30", spreadFrom: "1.0 pts", leverage: "1:200", tradingHours: "23/5" },
    { name: "UK100", spreadFrom: "0.8 pts", leverage: "1:200", tradingHours: "23/5" },
    { name: "GER40", spreadFrom: "0.9 pts", leverage: "1:200", tradingHours: "10h/day" },
    { name: "JPN225", spreadFrom: "6.0 pts", leverage: "1:200", tradingHours: "23/5" },
    { name: "AUS200", spreadFrom: "1.2 pts", leverage: "1:100", tradingHours: "23/5" },
  ],
  Shares: [
    { name: "Apple (AAPL)", spreadFrom: "0.02%", leverage: "1:20", tradingHours: "US Session" },
    { name: "Tesla (TSLA)", spreadFrom: "0.03%", leverage: "1:20", tradingHours: "US Session" },
    { name: "Amazon (AMZN)", spreadFrom: "0.02%", leverage: "1:20", tradingHours: "US Session" },
    { name: "Microsoft (MSFT)", spreadFrom: "0.02%", leverage: "1:20", tradingHours: "US Session" },
    { name: "NVIDIA (NVDA)", spreadFrom: "0.03%", leverage: "1:20", tradingHours: "US Session" },
    { name: "BP (BP.L)", spreadFrom: "0.05%", leverage: "1:10", tradingHours: "UK Session" },
  ],
  Commodities: [
    { name: "Gold (XAU/USD)", spreadFrom: "0.15 pts", leverage: "1:200", tradingHours: "23/5" },
    { name: "Silver (XAG/USD)", spreadFrom: "0.02 pts", leverage: "1:100", tradingHours: "23/5" },
    { name: "Crude Oil (WTI)", spreadFrom: "0.03 pts", leverage: "1:100", tradingHours: "23/5" },
    { name: "Brent Crude", spreadFrom: "0.03 pts", leverage: "1:100", tradingHours: "23/5" },
    { name: "Natural Gas", spreadFrom: "0.005 pts", leverage: "1:50", tradingHours: "23/5" },
    { name: "Copper", spreadFrom: "0.004 pts", leverage: "1:50", tradingHours: "23/5" },
  ],
  "Crypto CFDs": [
    { name: "BTC/USD", spreadFrom: "15.0 pts", leverage: "1:10", tradingHours: "24/7" },
    { name: "ETH/USD", spreadFrom: "1.5 pts", leverage: "1:10", tradingHours: "24/7" },
    { name: "SOL/USD", spreadFrom: "0.10 pts", leverage: "1:5", tradingHours: "24/7" },
    { name: "XRP/USD", spreadFrom: "0.003 pts", leverage: "1:5", tradingHours: "24/7" },
    { name: "ADA/USD", spreadFrom: "0.002 pts", leverage: "1:5", tradingHours: "24/7" },
    { name: "DOGE/USD", spreadFrom: "0.001 pts", leverage: "1:5", tradingHours: "24/7" },
  ],
};

export default function ProductsPage() {
  const [active, setActive] = useState<Category>("FX Pairs");

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-4">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light text-ivory">
            Instruments
          </h1>
          <p className="mt-4 text-platinum/60 max-w-2xl text-lg">
            Explore our full range of tradable instruments across global markets.
            Competitive spreads, flexible leverage, and extended trading hours.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-sm font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-all duration-300 ${
                active === cat
                  ? "bg-fx-teal text-void font-medium"
                  : "border border-white/10 text-platinum/60 hover:border-fx-teal/30 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="border border-white/5 rounded-sm overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-obsidian/60 px-6 py-4 border-b border-white/5">
            <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
              Instrument
            </span>
            <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
              Spread From
            </span>
            <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
              Leverage
            </span>
            <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
              Trading Hours
            </span>
          </div>

          {/* Data Rows */}
          {instrumentData[active].map((inst, i) => (
            <div
              key={inst.name}
              className={`grid grid-cols-4 px-6 py-4 border-b border-white/5 last:border-b-0 ${
                i % 2 === 0 ? "bg-obsidian/30" : "bg-obsidian/10"
              } hover:bg-fx-teal/5 transition-colors duration-200`}
            >
              <span className="text-ivory font-medium">{inst.name}</span>
              <span className="text-fx-teal">{inst.spreadFrom}</span>
              <span className="text-platinum/70">{inst.leverage}</span>
              <span className="text-platinum/70">{inst.tradingHours}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-platinum/40 text-xs leading-relaxed max-w-3xl">
          Spreads shown are indicative minimum values under normal market conditions. Actual spreads may vary
          depending on market volatility and liquidity. Leverage may be subject to regulatory limits depending
          on your jurisdiction. Trading CFDs carries significant risk.
        </p>
      </div>
    </div>
  );
}
