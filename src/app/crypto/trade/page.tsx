"use client";

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
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-6 border-b border-border pb-4">
          <div className="flex items-baseline gap-4">
            <span className="text-label text-secondary">BTC / USD</span>
            <span className="text-numbers text-primary">$67,432.18</span>
            <span className="text-[13px] font-mono text-green-400">+2.41%</span>
          </div>
          <div className="hidden md:flex items-baseline gap-8 text-[13px]">
            <div>
              <span className="text-tertiary mr-2">24h High</span>
              <span className="text-secondary font-mono">$67,891.00</span>
            </div>
            <div>
              <span className="text-tertiary mr-2">24h Low</span>
              <span className="text-secondary font-mono">$65,230.50</span>
            </div>
            <div>
              <span className="text-tertiary mr-2">24h Vol</span>
              <span className="text-secondary font-mono">$2.14B</span>
            </div>
          </div>
        </div>

        {/* Trading Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_240px] gap-[1px] bg-border">
          {/* Left Panel -- Order Form */}
          <div className="bg-surface p-5">
            {/* Buy/Sell Toggle */}
            <div className="flex border border-border mb-5">
              <button className="flex-1 py-2.5 bg-green-400/10 text-green-400 text-label text-[11px]">
                Buy
              </button>
              <button className="flex-1 py-2.5 text-tertiary text-label text-[11px] border-l border-border">
                Sell
              </button>
            </div>

            {/* Order Type */}
            <div className="mb-4">
              <span className="text-caption text-tertiary block mb-2">Order Type</span>
              <div className="flex gap-3">
                <span className="text-label text-[11px] text-crypto">Limit</span>
                <span className="text-label text-[11px] text-tertiary cursor-pointer hover:text-secondary transition-colors">Market</span>
                <span className="text-label text-[11px] text-tertiary cursor-pointer hover:text-secondary transition-colors">Stop</span>
              </div>
            </div>

            {/* Price Input */}
            <div className="mb-4">
              <span className="text-caption text-tertiary block mb-2">Price (USD)</span>
              <div className="bg-base border border-border px-4 py-3 flex items-center">
                <span className="text-primary text-[14px] font-mono">67,432.18</span>
                <span className="ml-auto text-tertiary text-[11px]">USD</span>
              </div>
            </div>

            {/* Amount Input */}
            <div className="mb-4">
              <span className="text-caption text-tertiary block mb-2">Amount (BTC)</span>
              <div className="bg-base border border-border px-4 py-3 flex items-center">
                <span className="text-tertiary text-[14px] font-mono">0.00</span>
                <span className="ml-auto text-tertiary text-[11px]">BTC</span>
              </div>
            </div>

            {/* Percentage Buttons */}
            <div className="flex gap-[1px] mb-4">
              {["25%", "50%", "75%", "100%"].map((pct) => (
                <button
                  key={pct}
                  className="flex-1 py-1.5 text-[11px] text-tertiary border border-border hover:border-border-hover hover:text-secondary transition-colors"
                >
                  {pct}
                </button>
              ))}
            </div>

            {/* Total */}
            <div className="mb-5">
              <span className="text-caption text-tertiary block mb-2">Total (USD)</span>
              <div className="bg-base border border-border px-4 py-3 flex items-center">
                <span className="text-tertiary text-[14px] font-mono">0.00</span>
                <span className="ml-auto text-tertiary text-[11px]">USD</span>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full py-3 bg-green-400/10 text-green-400 text-label text-[11px] border border-green-400/20 hover:bg-green-400/15 transition-colors">
              Buy BTC
            </button>
          </div>

          {/* Center -- Chart Placeholder */}
          <div className="bg-surface flex flex-col min-h-[500px]">
            {/* Chart toolbar */}
            <div className="flex items-center gap-5 px-5 py-3 border-b border-border">
              {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
                <button
                  key={tf}
                  className={`text-[11px] font-mono ${
                    tf === "1H" ? "text-crypto" : "text-tertiary hover:text-secondary"
                  } transition-colors`}
                >
                  {tf}
                </button>
              ))}
            </div>
            {/* Chart area */}
            <div className="flex-1 flex items-center justify-center">
              <span className="text-tertiary text-[13px]">TradingView Integration</span>
            </div>
          </div>

          {/* Right Panel -- Order Book */}
          <div className="bg-surface p-5">
            <span className="text-caption text-tertiary block mb-4">Order Book</span>

            {/* Header */}
            <div className="grid grid-cols-3 text-caption text-tertiary mb-2">
              <span>Price</span>
              <span className="text-right">Size</span>
              <span className="text-right">Total</span>
            </div>

            {/* Asks (reversed) */}
            <div className="mb-2">
              {[...orderBookAsks].reverse().map((ask, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-[12px] py-[3px] hover:bg-elevated/50 transition-colors"
                >
                  <span className="text-[#C47272] font-mono">{ask.price}</span>
                  <span className="text-secondary text-right font-mono">{ask.size}</span>
                  <span className="text-tertiary text-right font-mono">{ask.total}</span>
                </div>
              ))}
            </div>

            {/* Spread */}
            <div className="py-2 border-t border-b border-border mb-2 text-center">
              <span className="text-primary font-mono text-[14px]">$67,432.60</span>
              <span className="text-tertiary text-[11px] ml-2">Spread $4.80</span>
            </div>

            {/* Bids */}
            <div>
              {orderBookBids.map((bid, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 text-[12px] py-[3px] hover:bg-elevated/50 transition-colors"
                >
                  <span className="text-green-400 font-mono">{bid.price}</span>
                  <span className="text-secondary text-right font-mono">{bid.size}</span>
                  <span className="text-tertiary text-right font-mono">{bid.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Orders */}
        <div className="mt-[1px] bg-surface border-t border-border p-5">
          <div className="flex items-center gap-6 mb-4">
            <span className="text-caption text-primary">Open Orders</span>
            <span className="text-caption text-tertiary cursor-pointer hover:text-secondary transition-colors">
              Order History
            </span>
            <span className="text-caption text-tertiary cursor-pointer hover:text-secondary transition-colors">
              Trade History
            </span>
          </div>
          <div className="grid grid-cols-6 text-caption text-tertiary pb-3 border-b border-border">
            <span>Pair</span>
            <span>Type</span>
            <span>Side</span>
            <span className="text-right">Price</span>
            <span className="text-right">Amount</span>
            <span className="text-right">Action</span>
          </div>
          <div className="py-12 text-center">
            <p className="text-tertiary text-[13px]">No open orders</p>
          </div>
        </div>
      </div>
    </div>
  );
}
