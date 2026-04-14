import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instrument Specifications — FAVA Commodities",
  description:
    "Detailed contract specifications for all commodity instruments. Margins, trading hours, contract sizes, and expiry schedules.",
};

interface Instrument {
  name: string;
  symbol: string;
  type: "Spot" | "Futures";
  contractSize: string;
  margin: string;
  tradingHours: string;
  expiry: string;
  spread: string;
}

const instruments: Instrument[] = [
  {
    name: "Gold",
    symbol: "XAU/USD",
    type: "Spot",
    contractSize: "100 oz",
    margin: "1.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "0.30",
  },
  {
    name: "Gold Futures",
    symbol: "GC",
    type: "Futures",
    contractSize: "100 oz",
    margin: "5.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Fri)",
    spread: "0.40",
  },
  {
    name: "Silver",
    symbol: "XAG/USD",
    type: "Spot",
    contractSize: "5,000 oz",
    margin: "1.5%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "0.025",
  },
  {
    name: "Silver Futures",
    symbol: "SI",
    type: "Futures",
    contractSize: "5,000 oz",
    margin: "6.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Fri)",
    spread: "0.030",
  },
  {
    name: "Platinum",
    symbol: "XPT/USD",
    type: "Spot",
    contractSize: "50 oz",
    margin: "2.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "1.50",
  },
  {
    name: "Copper",
    symbol: "HG",
    type: "Futures",
    contractSize: "25,000 lbs",
    margin: "4.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Wed)",
    spread: "0.0004",
  },
  {
    name: "Crude Oil (WTI)",
    symbol: "CL",
    type: "Futures",
    contractSize: "1,000 bbl",
    margin: "5.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (20th)",
    spread: "0.03",
  },
  {
    name: "Brent Crude",
    symbol: "BRN",
    type: "Futures",
    contractSize: "1,000 bbl",
    margin: "5.0%",
    tradingHours: "Mon 01:00 – Fri 22:00",
    expiry: "Monthly (15th)",
    spread: "0.03",
  },
  {
    name: "Natural Gas",
    symbol: "NG",
    type: "Futures",
    contractSize: "10,000 MMBtu",
    margin: "6.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Wed)",
    spread: "0.005",
  },
  {
    name: "Wheat",
    symbol: "ZW",
    type: "Futures",
    contractSize: "5,000 bu",
    margin: "5.0%",
    tradingHours: "Mon–Fri 01:00 – 19:20",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.50",
  },
  {
    name: "Corn",
    symbol: "ZC",
    type: "Futures",
    contractSize: "5,000 bu",
    margin: "4.5%",
    tradingHours: "Mon–Fri 01:00 – 19:20",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.50",
  },
  {
    name: "Coffee",
    symbol: "KC",
    type: "Futures",
    contractSize: "37,500 lbs",
    margin: "5.0%",
    tradingHours: "Mon–Fri 09:15 – 18:30",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.40",
  },
  {
    name: "Sugar",
    symbol: "SB",
    type: "Futures",
    contractSize: "112,000 lbs",
    margin: "5.0%",
    tradingHours: "Mon–Fri 08:10 – 17:55",
    expiry: "Mar, May, Jul, Oct",
    spread: "0.03",
  },
];

export default function InstrumentsPage() {
  const spotInstruments = instruments.filter((i) => i.type === "Spot");
  const futuresInstruments = instruments.filter((i) => i.type === "Futures");

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
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-commodity-amber" />
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              Specifications
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-ivory mb-4">
            Instrument <span className="text-commodity-amber">Specifications</span>
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl">
            Detailed contract specifications for every commodity instrument we
            offer. Review margins, contract sizes, trading hours, and expiry
            schedules before you trade.
          </p>
        </div>

        {/* Spot vs Futures Explainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="border border-commodity-amber/30 bg-commodity-amber/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-commodity-amber" />
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory">
                Spot Contracts
              </h3>
            </div>
            <p className="text-platinum/60 text-sm leading-relaxed">
              Spot instruments trade at the current market price with no expiry
              date. Positions can be held indefinitely, subject to overnight
              financing charges. Ideal for short-to-medium-term trading
              strategies.
            </p>
          </div>
          <div className="border border-platinum/10 bg-obsidian/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-platinum/50" />
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory">
                Futures Contracts
              </h3>
            </div>
            <p className="text-platinum/60 text-sm leading-relaxed">
              Futures instruments have a defined expiry date and contract month.
              Pricing reflects the forward curve. No overnight financing — cost
              is built into the spread. Suitable for hedging and directional
              positioning.
            </p>
          </div>
        </div>

        {/* Spot Instruments Table */}
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-6 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-commodity-amber" />
            Spot Instruments
          </h2>
          <div className="border border-platinum/10 bg-obsidian/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-platinum/10">
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Instrument
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Symbol
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Contract Size
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Margin
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden md:table-cell">
                      Trading Hours (GMT)
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden lg:table-cell">
                      Spread From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {spotInstruments.map((inst) => (
                    <tr
                      key={inst.symbol}
                      className="border-b border-platinum/5 hover:bg-commodity-amber/5 transition-colors"
                    >
                      <td className="px-6 py-5 text-ivory font-[family-name:var(--font-heading)] font-medium">
                        {inst.name}
                      </td>
                      <td className="px-6 py-5 text-commodity-amber/80 text-sm">
                        {inst.symbol}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums">
                        {inst.contractSize}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums">
                        {inst.margin}
                      </td>
                      <td className="px-6 py-5 text-platinum/50 text-sm hidden md:table-cell">
                        {inst.tradingHours}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums hidden lg:table-cell">
                        {inst.spread}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Futures Instruments Table */}
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-6 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-platinum/50" />
            Futures Instruments
          </h2>
          <div className="border border-platinum/10 bg-obsidian/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-platinum/10">
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Instrument
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Symbol
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Contract Size
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase">
                      Margin
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden md:table-cell">
                      Trading Hours (GMT)
                    </th>
                    <th className="text-left px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden md:table-cell">
                      Expiry
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-[family-name:var(--font-heading)] text-platinum/40 tracking-wider uppercase hidden lg:table-cell">
                      Spread From
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {futuresInstruments.map((inst) => (
                    <tr
                      key={inst.symbol}
                      className="border-b border-platinum/5 hover:bg-commodity-amber/5 transition-colors"
                    >
                      <td className="px-6 py-5 text-ivory font-[family-name:var(--font-heading)] font-medium">
                        {inst.name}
                      </td>
                      <td className="px-6 py-5 text-commodity-amber/80 text-sm">
                        {inst.symbol}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums">
                        {inst.contractSize}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums">
                        {inst.margin}
                      </td>
                      <td className="px-6 py-5 text-platinum/50 text-sm hidden md:table-cell">
                        {inst.tradingHours}
                      </td>
                      <td className="px-6 py-5 text-platinum/50 text-sm hidden md:table-cell">
                        {inst.expiry}
                      </td>
                      <td className="text-right px-6 py-5 text-platinum/60 text-sm tabular-nums hidden lg:table-cell">
                        {inst.spread}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="border border-platinum/10 bg-obsidian/20 p-8">
          <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-4">
            Important Information
          </h3>
          <ul className="space-y-3 text-platinum/50 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-commodity-amber mt-1">—</span>
              All times are in GMT. Trading hours may vary on public holidays
              and during daylight saving transitions.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-commodity-amber mt-1">—</span>
              Margin requirements may be adjusted during periods of high
              volatility or low liquidity at our discretion.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-commodity-amber mt-1">—</span>
              Spreads shown are minimum typical spreads under normal market
              conditions. Actual spreads may vary.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-commodity-amber mt-1">—</span>
              Futures positions approaching expiry will be automatically rolled
              to the next contract month unless closed by the client.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-platinum/10 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl text-ivory mb-4">
            View Live Pricing
          </h2>
          <p className="text-platinum/60 mb-8 max-w-lg mx-auto">
            See real-time prices and spreads across all commodity instruments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/commodities/markets"
              className="inline-flex items-center gap-2 bg-commodity-amber text-void px-8 py-4 font-[family-name:var(--font-heading)] font-medium tracking-wide hover:bg-commodity-amber/90 transition-colors"
            >
              Markets Dashboard
            </Link>
            <Link
              href="/commodities/apply"
              className="inline-flex items-center gap-2 border border-platinum/20 text-ivory px-8 py-4 font-[family-name:var(--font-heading)] font-medium tracking-wide hover:border-commodity-amber/50 transition-colors"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
