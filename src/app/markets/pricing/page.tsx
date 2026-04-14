import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Spreads — FAVA Markets",
  description:
    "Transparent pricing with tight spreads, low commissions, and competitive swap rates. No hidden fees.",
};

const spreadData = [
  { instrument: "EUR/USD", standard: "1.0 pips", professional: "0.1 pips", institutional: "0.0 pips" },
  { instrument: "GBP/USD", standard: "1.3 pips", professional: "0.3 pips", institutional: "0.1 pips" },
  { instrument: "USD/JPY", standard: "1.1 pips", professional: "0.2 pips", institutional: "0.0 pips" },
  { instrument: "Gold (XAU/USD)", standard: "0.30 pts", professional: "0.15 pts", institutional: "0.10 pts" },
  { instrument: "US500", standard: "0.6 pts", professional: "0.4 pts", institutional: "0.3 pts" },
  { instrument: "BTC/USD", standard: "25.0 pts", professional: "15.0 pts", institutional: "10.0 pts" },
];

const commissionData = [
  { account: "Standard", forex: "None (spread only)", indices: "None", shares: "0.10%", crypto: "None" },
  { account: "Professional", forex: "$3.50 / lot", indices: "None", shares: "0.06%", crypto: "None" },
  { account: "Institutional", forex: "$2.00 / lot", indices: "None", shares: "0.04%", crypto: "0.05%" },
];

const swapData = [
  { pair: "EUR/USD", longSwap: "-6.25", shortSwap: "+1.10" },
  { pair: "GBP/USD", longSwap: "-5.80", shortSwap: "+0.90" },
  { pair: "USD/JPY", longSwap: "+3.20", shortSwap: "-8.40" },
  { pair: "AUD/USD", longSwap: "-3.10", shortSwap: "+0.50" },
  { pair: "Gold (XAU/USD)", longSwap: "-12.50", shortSwap: "+5.80" },
];

const marginData = [
  { instrument: "Major FX Pairs", retail: "3.33% (1:30)", professional: "0.20% (1:500)" },
  { instrument: "Minor FX Pairs", retail: "5.00% (1:20)", professional: "0.50% (1:200)" },
  { instrument: "Major Indices", retail: "5.00% (1:20)", professional: "0.50% (1:200)" },
  { instrument: "Commodities (Gold)", retail: "5.00% (1:20)", professional: "0.50% (1:200)" },
  { instrument: "Shares CFDs", retail: "20.00% (1:5)", professional: "5.00% (1:20)" },
  { instrument: "Crypto CFDs", retail: "50.00% (1:2)", professional: "10.00% (1:10)" },
];

function SectionTable({
  title,
  subtitle,
  headers,
  rows,
}: {
  title: string;
  subtitle: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mb-20">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-ivory font-light mb-2">
        {title}
      </h2>
      <p className="text-platinum/60 text-sm mb-8 max-w-2xl">{subtitle}</p>
      <div className="border border-white/5 rounded-sm overflow-hidden">
        <div
          className="grid bg-obsidian/60 px-6 py-4 border-b border-white/5"
          style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
        >
          {headers.map((h) => (
            <span key={h} className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
              {h}
            </span>
          ))}
        </div>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid px-6 py-3.5 border-b border-white/5 last:border-b-0 ${
              i % 2 === 0 ? "bg-obsidian/30" : "bg-obsidian/10"
            }`}
            style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))` }}
          >
            {row.map((cell, j) => (
              <span
                key={j}
                className={j === 0 ? "text-ivory text-sm font-medium" : "text-platinum/70 text-sm"}
              >
                {cell}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-4">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light text-ivory">
            Pricing &amp; Spreads
          </h1>
          <p className="mt-4 text-platinum/60 max-w-2xl text-lg">
            Complete transparency. No hidden mark-ups, no requotes. What you see is what you trade.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {[
            { value: "0.0", unit: "pips", label: "Raw spreads from" },
            { value: "$2", unit: "/lot", label: "Commissions from" },
            { value: "0", unit: "", label: "Hidden fees" },
          ].map((stat) => (
            <div key={stat.label} className="bg-obsidian/40 border border-white/5 rounded-sm p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl text-fx-teal">
                {stat.value}
                <span className="text-lg text-fx-teal/60 ml-1">{stat.unit}</span>
              </p>
              <p className="mt-2 text-platinum/60 text-sm font-[family-name:var(--font-heading)] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Spreads */}
        <SectionTable
          title="Typical Spreads"
          subtitle="Indicative spreads under normal market conditions by account type."
          headers={["Instrument", "Standard", "Professional", "Institutional"]}
          rows={spreadData.map((d) => [d.instrument, d.standard, d.professional, d.institutional])}
        />

        {/* Commissions */}
        <SectionTable
          title="Commissions"
          subtitle="Round-turn commission rates per asset class and account type."
          headers={["Account Type", "Forex", "Indices", "Shares", "Crypto"]}
          rows={commissionData.map((d) => [d.account, d.forex, d.indices, d.shares, d.crypto])}
        />

        {/* Swap Rates */}
        <SectionTable
          title="Swap Rates"
          subtitle="Overnight financing rates in points. Updated daily. Positive values indicate credit."
          headers={["Pair", "Long Swap", "Short Swap"]}
          rows={swapData.map((d) => [d.pair, d.longSwap, d.shortSwap])}
        />

        {/* Margin Requirements */}
        <SectionTable
          title="Margin Requirements"
          subtitle="Margin rates vary based on client classification and applicable regulation."
          headers={["Instrument", "Retail Client", "Professional Client"]}
          rows={marginData.map((d) => [d.instrument, d.retail, d.professional])}
        />

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-platinum/40 text-xs leading-relaxed max-w-4xl">
            All pricing information is indicative and subject to change. Spreads may widen during periods of
            low liquidity or high volatility. Swap rates are updated daily and reflect prevailing interbank
            rates. Margin requirements may differ based on your regulatory jurisdiction. CFDs are complex
            instruments and come with a high risk of losing money rapidly due to leverage. You should consider
            whether you understand how CFDs work and whether you can afford to take the high risk of losing
            your money.
          </p>
        </div>
      </div>
    </div>
  );
}
