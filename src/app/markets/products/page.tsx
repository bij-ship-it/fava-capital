"use client";

import { useState } from "react";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

const categories = ["FX", "Indices", "Shares", "Commodities", "Crypto"] as const;
type Category = (typeof categories)[number];

const instruments: Record<
  Category,
  { instrument: string; spreadFrom: string; leverage: string; hours: string }[]
> = {
  FX: [
    { instrument: "EUR/USD", spreadFrom: "0.0", leverage: "1:500", hours: "24/5" },
    { instrument: "GBP/USD", spreadFrom: "0.1", leverage: "1:500", hours: "24/5" },
    { instrument: "USD/JPY", spreadFrom: "0.1", leverage: "1:500", hours: "24/5" },
    { instrument: "AUD/USD", spreadFrom: "0.2", leverage: "1:500", hours: "24/5" },
    { instrument: "USD/CAD", spreadFrom: "0.3", leverage: "1:500", hours: "24/5" },
    { instrument: "USD/CHF", spreadFrom: "0.2", leverage: "1:500", hours: "24/5" },
    { instrument: "NZD/USD", spreadFrom: "0.4", leverage: "1:500", hours: "24/5" },
    { instrument: "EUR/GBP", spreadFrom: "0.3", leverage: "1:500", hours: "24/5" },
    { instrument: "EUR/JPY", spreadFrom: "0.4", leverage: "1:400", hours: "24/5" },
    { instrument: "GBP/JPY", spreadFrom: "0.6", leverage: "1:400", hours: "24/5" },
  ],
  Indices: [
    { instrument: "US500", spreadFrom: "0.3", leverage: "1:200", hours: "23/5" },
    { instrument: "US30", spreadFrom: "1.0", leverage: "1:200", hours: "23/5" },
    { instrument: "US100", spreadFrom: "0.8", leverage: "1:200", hours: "23/5" },
    { instrument: "UK100", spreadFrom: "0.8", leverage: "1:200", hours: "23/5" },
    { instrument: "GER40", spreadFrom: "0.8", leverage: "1:200", hours: "23/5" },
    { instrument: "JPN225", spreadFrom: "5.0", leverage: "1:200", hours: "23/5" },
    { instrument: "AUS200", spreadFrom: "1.0", leverage: "1:200", hours: "23/5" },
    { instrument: "FRA40", spreadFrom: "1.0", leverage: "1:100", hours: "23/5" },
  ],
  Shares: [
    { instrument: "AAPL", spreadFrom: "0.10", leverage: "1:20", hours: "Market" },
    { instrument: "TSLA", spreadFrom: "0.15", leverage: "1:20", hours: "Market" },
    { instrument: "AMZN", spreadFrom: "0.20", leverage: "1:20", hours: "Market" },
    { instrument: "MSFT", spreadFrom: "0.10", leverage: "1:20", hours: "Market" },
    { instrument: "GOOGL", spreadFrom: "0.25", leverage: "1:20", hours: "Market" },
    { instrument: "NVDA", spreadFrom: "0.15", leverage: "1:20", hours: "Market" },
    { instrument: "META", spreadFrom: "0.20", leverage: "1:20", hours: "Market" },
    { instrument: "JPM", spreadFrom: "0.10", leverage: "1:20", hours: "Market" },
  ],
  Commodities: [
    { instrument: "XAU/USD", spreadFrom: "0.10", leverage: "1:200", hours: "23/5" },
    { instrument: "XAG/USD", spreadFrom: "0.02", leverage: "1:100", hours: "23/5" },
    { instrument: "WTI Crude", spreadFrom: "0.03", leverage: "1:100", hours: "23/5" },
    { instrument: "Brent", spreadFrom: "0.03", leverage: "1:100", hours: "23/5" },
    { instrument: "Natural Gas", spreadFrom: "0.005", leverage: "1:50", hours: "23/5" },
    { instrument: "Copper", spreadFrom: "0.003", leverage: "1:50", hours: "23/5" },
  ],
  Crypto: [
    { instrument: "BTC/USD", spreadFrom: "15.0", leverage: "1:10", hours: "24/7" },
    { instrument: "ETH/USD", spreadFrom: "1.5", leverage: "1:10", hours: "24/7" },
    { instrument: "LTC/USD", spreadFrom: "0.3", leverage: "1:10", hours: "24/7" },
    { instrument: "XRP/USD", spreadFrom: "0.003", leverage: "1:10", hours: "24/7" },
    { instrument: "SOL/USD", spreadFrom: "0.10", leverage: "1:5", hours: "24/7" },
    { instrument: "ADA/USD", spreadFrom: "0.002", leverage: "1:5", hours: "24/7" },
  ],
};

export default function ProductsPage() {
  const [active, setActive] = useState<Category>("FX");

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
        <h1 className="text-display-alt text-primary mb-4">Products</h1>
        <p className="text-secondary max-w-[520px] mb-16">
          Trade 1,000+ instruments across FX, indices, shares, commodities, and
          crypto with institutional-grade conditions.
        </p>

        {/* Category Tabs */}
        <div className="flex gap-0 border-b border-border mb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-label px-5 py-3 transition-colors relative ${
                active === cat
                  ? "text-markets"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-markets" />
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                Instrument
              </th>
              <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                Spread From
              </th>
              <th className="text-caption text-secondary text-right py-3 px-4 font-normal max-sm:hidden">
                Leverage
              </th>
              <th className="text-caption text-secondary text-right py-3 px-4 font-normal max-sm:hidden">
                Hours
              </th>
            </tr>
          </thead>
          <tbody>
            {instruments[active].map((row, i) => (
              <tr
                key={row.instrument}
                className={`border-b border-border ${
                  i % 2 === 0 ? "bg-surface" : ""
                }`}
              >
                <td className="text-primary text-[15px] py-3 px-4">
                  {row.instrument}
                </td>
                <td className="text-primary text-[15px] text-right py-3 px-4 tabular-nums">
                  {row.spreadFrom}
                </td>
                <td className="text-secondary text-[15px] text-right py-3 px-4 max-sm:hidden">
                  {row.leverage}
                </td>
                <td className="text-secondary text-[15px] text-right py-3 px-4 max-sm:hidden">
                  {row.hours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer note */}
        <p className="text-caption text-tertiary mt-6 mb-32">
          Spreads shown are minimum. Actual spreads may vary based on market
          conditions and account type. Leverage subject to regulatory
          requirements.
        </p>
      </div>
    </div>
  );
}
