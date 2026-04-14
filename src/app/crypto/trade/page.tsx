import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade — Cryptorio | FAVA Capital",
  description:
    "Professional trading terminal with deep liquidity, advanced order types, and real-time market data.",
};

const orderBookBids = [
  { price: "67,430.20", size: "0.4521", total: "30,504.18" },
  { price: "67,428.50", size: "1.2034", total: "81,128.72" },
  { price: "67,425.00", size: "0.8712", total: "58,746.30" },
  { price: "67,422.80", size: "2.1500", total: "144,959.02" },
  { price: "67,420.10", size: "0.3200", total: "21,574.43" },
  { price: "67,418.00", size: "1.5680", total: "105,791.42" },
  { price: "67,415.50", size: "0.7890", total: "53,170.83" },
];

const orderBookAsks = [
  { price: "67,435.00", size: "0.3210", total: "21,646.64" },
  { price: "67,437.50", size: "0.9870", total: "66,582.94" },
  { price: "67,440.20", size: "1.4500", total: "97,788.29" },
  { price: "67,442.00", size: "0.2100", total: "14,162.82" },
  { price: "67,445.80", size: "1.8900", total: "127,472.56" },
  { price: "67,448.00", size: "0.5430", total: "36,624.26" },
  { price: "67,450.50", size: "2.3400", total: "157,834.17" },
];

export default function TradePage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h1 className="font-[family-name:var(--font-heading)] text-2xl text-ivory font-medium">
              BTC / USD
            </h1>
            <span className="text-2xl text-ivory font-[family-name:var(--font-heading)]">
              $67,432.18
            </span>
            <span className="text-green-400 text-sm font-medium">+2.41%</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-platinum/50">
            <div>
              <span className="text-platinum/30 mr-1.5">24h High</span>
              <span className="text-ivory">$67,891.00</span>
            </div>
            <div>
              <span className="text-platinum/30 mr-1.5">24h Low</span>
              <span className="text-ivory">$65,230.50</span>
            </div>
            <div>
              <span className="text-platinum/30 mr-1.5">24h Vol</span>
              <span className="text-ivory">$2.14B</span>
            </div>
          </div>
        </div>

        {/* Trading Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-3">
          {/* Left Panel — Order Form */}
          <div className="bg-obsidian/80 border border-ivory/5 rounded-xl p-5">
            {/* Buy/Sell Tabs */}
            <div className="flex mb-5 bg-void rounded-lg p-1">
              <button className="flex-1 py-2.5 rounded-md bg-green-500/20 text-green-400 font-[family-name:var(--font-heading)] font-medium text-sm">
                Buy
              </button>
              <button className="flex-1 py-2.5 rounded-md text-platinum/40 font-[family-name:var(--font-heading)] font-medium text-sm">
                Sell
              </button>
            </div>

            {/* Order Type */}
            <div className="mb-4">
              <label className="text-platinum/40 text-xs mb-1.5 block font-[family-name:var(--font-heading)]">
                Order Type
              </label>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-crypto-electric/10 text-crypto-electric text-xs rounded-md font-medium">
                  Limit
                </span>
                <span className="px-3 py-1.5 text-platinum/40 text-xs rounded-md hover:bg-ivory/5 cursor-pointer">
                  Market
                </span>
                <span className="px-3 py-1.5 text-platinum/40 text-xs rounded-md hover:bg-ivory/5 cursor-pointer">
                  Stop
                </span>
              </div>
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <label className="text-platinum/40 text-xs mb-1.5 block font-[family-name:var(--font-heading)]">
                Price (USD)
              </label>
              <div className="bg-void border border-ivory/10 rounded-lg px-4 py-3 flex items-center">
                <span className="text-ivory text-sm">67,432.18</span>
                <span className="ml-auto text-platinum/30 text-xs">USD</span>
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <label className="text-platinum/40 text-xs mb-1.5 block font-[family-name:var(--font-heading)]">
                Amount (BTC)
              </label>
              <div className="bg-void border border-ivory/10 rounded-lg px-4 py-3 flex items-center">
                <span className="text-platinum/30 text-sm">0.00</span>
                <span className="ml-auto text-platinum/30 text-xs">BTC</span>
              </div>
            </div>

            {/* Percentage Buttons */}
            <div className="flex gap-2 mb-4">
              {["25%", "50%", "75%", "100%"].map((pct) => (
                <button
                  key={pct}
                  className="flex-1 py-1.5 text-xs text-platinum/40 border border-ivory/10 rounded-md hover:border-crypto-electric/30 hover:text-crypto-electric transition-colors"
                >
                  {pct}
                </button>
              ))}
            </div>

            {/* Total */}
            <div className="mb-5">
              <label className="text-platinum/40 text-xs mb-1.5 block font-[family-name:var(--font-heading)]">
                Total (USD)
              </label>
              <div className="bg-void border border-ivory/10 rounded-lg px-4 py-3 flex items-center">
                <span className="text-platinum/30 text-sm">0.00</span>
                <span className="ml-auto text-platinum/30 text-xs">USD</span>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full py-3.5 bg-green-500 text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-green-500/90 transition-colors">
              Buy BTC
            </button>
          </div>

          {/* Center — Chart Placeholder */}
          <div className="bg-obsidian/80 border border-ivory/5 rounded-xl flex flex-col min-h-[500px]">
            {/* Chart toolbar */}
            <div className="flex items-center gap-4 px-5 py-3 border-b border-ivory/5">
              {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
                <button
                  key={tf}
                  className={`text-xs font-[family-name:var(--font-heading)] ${
                    tf === "1H"
                      ? "text-crypto-electric"
                      : "text-platinum/40 hover:text-ivory"
                  } transition-colors`}
                >
                  {tf}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-3">
                <span className="text-platinum/30 text-xs">Candles</span>
                <span className="text-platinum/20 text-xs">|</span>
                <span className="text-platinum/30 text-xs">Line</span>
              </div>
            </div>

            {/* Chart area */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-crypto-electric/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-crypto-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                  </svg>
                </div>
                <p className="text-ivory font-[family-name:var(--font-heading)] font-medium mb-1">
                  TradingView Integration
                </p>
                <p className="text-platinum/40 text-sm">
                  Advanced charting powered by TradingView
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel — Order Book */}
          <div className="bg-obsidian/80 border border-ivory/5 rounded-xl p-5">
            <h3 className="font-[family-name:var(--font-heading)] text-sm text-ivory mb-4">
              Order Book
            </h3>

            {/* Header */}
            <div className="grid grid-cols-3 text-xs text-platinum/30 mb-2 font-[family-name:var(--font-heading)]">
              <span>Price</span>
              <span className="text-right">Size</span>
              <span className="text-right">Total</span>
            </div>

            {/* Asks (reversed) */}
            <div className="mb-2">
              {[...orderBookAsks].reverse().map((ask, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-xs py-0.5 hover:bg-ivory/5 transition-colors"
                >
                  <span className="text-red-400 font-mono">{ask.price}</span>
                  <span className="text-platinum/60 text-right font-mono">{ask.size}</span>
                  <span className="text-platinum/30 text-right font-mono">{ask.total}</span>
                </div>
              ))}
            </div>

            {/* Spread */}
            <div className="py-2 border-y border-ivory/5 mb-2 text-center">
              <span className="text-crypto-electric font-[family-name:var(--font-heading)] text-sm font-medium">
                $67,432.60
              </span>
              <span className="text-platinum/30 text-xs ml-2">Spread $4.80</span>
            </div>

            {/* Bids */}
            <div>
              {orderBookBids.map((bid, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-xs py-0.5 hover:bg-ivory/5 transition-colors"
                >
                  <span className="text-green-400 font-mono">{bid.price}</span>
                  <span className="text-platinum/60 text-right font-mono">{bid.size}</span>
                  <span className="text-platinum/30 text-right font-mono">{bid.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Orders */}
        <div className="mt-3 bg-obsidian/80 border border-ivory/5 rounded-xl p-5">
          <div className="flex items-center gap-6 mb-4">
            <h3 className="font-[family-name:var(--font-heading)] text-sm text-ivory">
              Open Orders
            </h3>
            <span className="font-[family-name:var(--font-heading)] text-sm text-platinum/30">
              Order History
            </span>
            <span className="font-[family-name:var(--font-heading)] text-sm text-platinum/30">
              Trade History
            </span>
          </div>
          <div className="grid grid-cols-6 text-xs text-platinum/30 font-[family-name:var(--font-heading)] pb-3 border-b border-ivory/5">
            <span>Pair</span>
            <span>Type</span>
            <span>Side</span>
            <span className="text-right">Price</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Action</span>
          </div>
          <div className="py-12 text-center">
            <p className="text-platinum/30 text-sm">No open orders</p>
            <p className="text-platinum/20 text-xs mt-1">
              Your active orders will appear here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
