import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supported Assets — Cryptorio | FAVA Capital",
  description:
    "Browse all supported digital assets on Cryptorio. Real-time prices, 24-hour changes, market caps, and available trading pairs.",
};

const assets = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%", up: true, marketCap: "$1.32T", pairs: ["USD", "EUR", "USDT", "USDC"] },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%", up: true, marketCap: "$468.2B", pairs: ["USD", "EUR", "USDT", "BTC"] },
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%", up: true, marketCap: "$82.4B", pairs: ["USD", "USDT", "BTC", "ETH"] },
  { symbol: "AVAX", name: "Avalanche", price: "$42.18", change: "-0.92%", up: false, marketCap: "$16.1B", pairs: ["USD", "USDT", "BTC"] },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%", up: true, marketCap: "$10.9B", pairs: ["USD", "USDT", "ETH"] },
  { symbol: "DOT", name: "Polkadot", price: "$9.41", change: "-1.23%", up: false, marketCap: "$12.8B", pairs: ["USD", "USDT", "BTC"] },
  { symbol: "MATIC", name: "Polygon", price: "$1.12", change: "+0.89%", up: true, marketCap: "$10.4B", pairs: ["USD", "USDT", "ETH"] },
  { symbol: "ADA", name: "Cardano", price: "$0.62", change: "-0.45%", up: false, marketCap: "$21.8B", pairs: ["USD", "EUR", "USDT", "BTC"] },
  { symbol: "XRP", name: "Ripple", price: "$0.58", change: "+1.12%", up: true, marketCap: "$31.2B", pairs: ["USD", "EUR", "USDT", "BTC"] },
  { symbol: "UNI", name: "Uniswap", price: "$11.34", change: "+2.78%", up: true, marketCap: "$6.8B", pairs: ["USD", "USDT", "ETH"] },
];

export default function AssetsPage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory mb-4">
            Supported Assets
          </h1>
          <p className="text-platinum/60 text-lg max-w-xl">
            Trade over 50 digital assets with deep liquidity and competitive spreads
            across multiple fiat and crypto pairs.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md w-full">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-platinum/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full bg-obsidian/80 border border-ivory/10 rounded-lg pl-11 pr-4 py-3 text-sm text-ivory placeholder-platinum/30 focus:outline-none focus:border-crypto-electric/50"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Layer 1", "DeFi", "Stablecoins"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 text-xs rounded-lg font-[family-name:var(--font-heading)] transition-colors ${
                  filter === "All"
                    ? "bg-crypto-electric/10 text-crypto-electric border border-crypto-electric/20"
                    : "text-platinum/40 border border-ivory/10 hover:border-ivory/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Assets Table */}
        <div className="bg-obsidian/60 border border-ivory/5 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-4 px-6 py-4 border-b border-ivory/5 text-xs text-platinum/40 font-[family-name:var(--font-heading)] uppercase tracking-wider">
            <span>Asset</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h Change</span>
            <span className="text-right">Market Cap</span>
            <span className="text-right">Available Pairs</span>
          </div>

          {/* Table Rows */}
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-4 px-6 py-5 border-b border-ivory/5 last:border-b-0 hover:bg-ivory/[0.02] transition-colors cursor-pointer group"
            >
              {/* Asset */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-crypto-electric/10 flex items-center justify-center text-crypto-electric font-[family-name:var(--font-heading)] font-semibold text-xs shrink-0">
                  {asset.symbol.slice(0, 3)}
                </div>
                <div>
                  <div className="text-ivory font-[family-name:var(--font-heading)] font-medium group-hover:text-crypto-electric transition-colors">
                    {asset.name}
                  </div>
                  <div className="text-platinum/40 text-xs">{asset.symbol}</div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-end">
                <span className="text-ivory text-sm font-mono">{asset.price}</span>
              </div>

              {/* 24h Change */}
              <div className="flex items-center justify-end">
                <span
                  className={`text-sm font-mono ${
                    asset.up ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {asset.change}
                </span>
              </div>

              {/* Market Cap */}
              <div className="flex items-center justify-end">
                <span className="text-platinum/60 text-sm">{asset.marketCap}</span>
              </div>

              {/* Pairs */}
              <div className="flex items-center justify-end gap-1.5 flex-wrap">
                {asset.pairs.map((pair) => (
                  <span
                    key={pair}
                    className="px-2 py-0.5 text-[10px] bg-ivory/5 text-platinum/50 rounded font-mono"
                  >
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-platinum/30 text-sm text-center mt-8">
          Prices are indicative and updated every 15 seconds. Trading availability
          subject to regulatory requirements in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
