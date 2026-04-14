"use client";

const assets = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%", up: true, marketCap: "$1.32T", pairs: "USD, EUR, USDT, USDC" },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%", up: true, marketCap: "$468.2B", pairs: "USD, EUR, USDT, BTC" },
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%", up: true, marketCap: "$82.4B", pairs: "USD, USDT, BTC, ETH" },
  { symbol: "AVAX", name: "Avalanche", price: "$42.18", change: "-0.92%", up: false, marketCap: "$16.1B", pairs: "USD, USDT, BTC" },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%", up: true, marketCap: "$10.9B", pairs: "USD, USDT, ETH" },
  { symbol: "DOT", name: "Polkadot", price: "$9.41", change: "-1.23%", up: false, marketCap: "$12.8B", pairs: "USD, USDT, BTC" },
  { symbol: "MATIC", name: "Polygon", price: "$1.12", change: "+0.89%", up: true, marketCap: "$10.4B", pairs: "USD, USDT, ETH" },
  { symbol: "ADA", name: "Cardano", price: "$0.62", change: "-0.45%", up: false, marketCap: "$21.8B", pairs: "USD, EUR, USDT, BTC" },
  { symbol: "XRP", name: "Ripple", price: "$0.58", change: "+1.12%", up: true, marketCap: "$31.2B", pairs: "USD, EUR, USDT, BTC" },
  { symbol: "UNI", name: "Uniswap", price: "$11.34", change: "+2.78%", up: true, marketCap: "$6.8B", pairs: "USD, USDT, ETH" },
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <p className="text-label text-secondary mb-6">01 — Assets</p>
        <h1 className="text-display-alt text-primary mb-6">Supported Assets</h1>
        <p className="text-secondary max-w-[520px] mb-12">
          Trade over 50 digital assets with deep liquidity and competitive spreads
          across multiple fiat and crypto pairs.
        </p>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search assets..."
            className="w-full max-w-[400px] bg-surface border border-border px-4 py-3 text-[14px] text-primary placeholder-tertiary focus:outline-none focus:border-border-hover transition-colors"
          />
        </div>

        {/* Asset Table */}
        <div className="border border-border">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-4 px-6 py-3 border-b border-border">
            <span className="text-caption text-tertiary">Name</span>
            <span className="text-caption text-tertiary text-right">Price</span>
            <span className="text-caption text-tertiary text-right">24h Change</span>
            <span className="text-caption text-tertiary text-right">Market Cap</span>
            <span className="text-caption text-tertiary text-right">Pairs</span>
          </div>

          {/* Table Rows */}
          {assets.map((asset, i) => (
            <div
              key={asset.symbol}
              className={`grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-4 px-6 py-4 border-b border-border last:border-b-0 ${
                i % 2 === 1 ? "bg-surface" : ""
              }`}
            >
              {/* Name */}
              <div className="flex items-baseline gap-3">
                <span className="text-primary text-[14px]">{asset.name}</span>
                <span className="text-tertiary text-[12px]">{asset.symbol}</span>
              </div>

              {/* Price */}
              <span className="text-primary text-[14px] font-mono text-right">{asset.price}</span>

              {/* 24h Change */}
              <span
                className={`text-[14px] font-mono text-right ${
                  asset.up ? "text-green-400" : "text-[#C47272]"
                }`}
              >
                {asset.change}
              </span>

              {/* Market Cap */}
              <span className="text-secondary text-[14px] text-right">{asset.marketCap}</span>

              {/* Pairs */}
              <span className="text-tertiary text-[12px] font-mono text-right">{asset.pairs}</span>
            </div>
          ))}
        </div>

        <p className="text-tertiary text-[12px] mt-6">
          Prices are indicative and updated every 15 seconds. Trading availability
          subject to regulatory requirements in your jurisdiction.
        </p>
      </div>
    </div>
  );
}
