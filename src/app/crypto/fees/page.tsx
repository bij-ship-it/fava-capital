import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fee Schedule — Cryptorio | FAVA Capital",
  description:
    "Transparent, competitive fee structure with volume-based discounts. Maker-taker model with VIP tiers for high-volume traders.",
};

const tradingTiers = [
  { tier: "Standard", volume: "< $50K", maker: "0.16%", taker: "0.26%" },
  { tier: "Silver", volume: "$50K — $500K", maker: "0.14%", taker: "0.22%" },
  { tier: "Gold", volume: "$500K — $5M", maker: "0.10%", taker: "0.18%" },
  { tier: "Platinum", volume: "> $5M", maker: "0.06%", taker: "0.12%" },
];

const networkFees = [
  { asset: "BTC", network: "Bitcoin", deposit: "Free", withdrawal: "0.0002 BTC", minWithdrawal: "0.001 BTC" },
  { asset: "ETH", network: "Ethereum", deposit: "Free", withdrawal: "0.003 ETH", minWithdrawal: "0.01 ETH" },
  { asset: "SOL", network: "Solana", deposit: "Free", withdrawal: "0.01 SOL", minWithdrawal: "0.1 SOL" },
  { asset: "USDT", network: "ERC-20", deposit: "Free", withdrawal: "10 USDT", minWithdrawal: "20 USDT" },
  { asset: "USDT", network: "TRC-20", deposit: "Free", withdrawal: "1 USDT", minWithdrawal: "10 USDT" },
  { asset: "USDC", network: "ERC-20", deposit: "Free", withdrawal: "8 USDC", minWithdrawal: "20 USDC" },
];

export default function FeesPage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory mb-4">
            Fee Schedule
          </h1>
          <p className="text-platinum/60 text-lg max-w-xl">
            Transparent, volume-based pricing. The more you trade, the less you pay.
            No hidden fees, ever.
          </p>
        </div>

        {/* Trading Fees */}
        <section className="mb-20">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            Trading Fees
          </h2>
          <p className="text-platinum/50 text-sm mb-8">
            Maker-taker model based on 30-day trailing volume.
          </p>

          <div className="bg-obsidian/60 border border-ivory/5 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-ivory/5 text-xs text-platinum/40 font-[family-name:var(--font-heading)] uppercase tracking-wider">
              <span>Tier</span>
              <span>30-Day Volume</span>
              <span className="text-right">Maker Fee</span>
              <span className="text-right">Taker Fee</span>
            </div>

            {tradingTiers.map((tier, i) => (
              <div
                key={tier.tier}
                className={`grid grid-cols-4 gap-4 px-6 py-5 border-b border-ivory/5 last:border-b-0 ${
                  i === tradingTiers.length - 1 ? "bg-crypto-electric/[0.03]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-ivory font-[family-name:var(--font-heading)] font-medium">
                    {tier.tier}
                  </span>
                  {i === tradingTiers.length - 1 && (
                    <span className="px-2 py-0.5 text-[10px] bg-crypto-electric/10 text-crypto-electric rounded-full font-[family-name:var(--font-heading)]">
                      BEST RATE
                    </span>
                  )}
                </div>
                <span className="text-platinum/60 text-sm">{tier.volume}</span>
                <span className="text-right text-ivory text-sm font-mono">{tier.maker}</span>
                <span className="text-right text-ivory text-sm font-mono">{tier.taker}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deposit & Withdrawal Fees */}
        <section className="mb-20">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory mb-2">
            Deposit &amp; Withdrawal Fees
          </h2>
          <p className="text-platinum/50 text-sm mb-8">
            Deposits are always free. Withdrawal fees cover network transaction costs.
          </p>

          <div className="bg-obsidian/60 border border-ivory/5 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b border-ivory/5 text-xs text-platinum/40 font-[family-name:var(--font-heading)] uppercase tracking-wider">
              <span>Asset</span>
              <span>Network</span>
              <span className="text-right">Deposit Fee</span>
              <span className="text-right">Withdrawal Fee</span>
              <span className="text-right">Min Withdrawal</span>
            </div>

            {networkFees.map((fee, i) => (
              <div
                key={`${fee.asset}-${fee.network}`}
                className="grid grid-cols-5 gap-4 px-6 py-5 border-b border-ivory/5 last:border-b-0 hover:bg-ivory/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-crypto-electric/10 flex items-center justify-center text-crypto-electric text-[10px] font-[family-name:var(--font-heading)] font-semibold shrink-0">
                    {fee.asset.slice(0, 2)}
                  </div>
                  <span className="text-ivory font-[family-name:var(--font-heading)] font-medium text-sm">
                    {fee.asset}
                  </span>
                </div>
                <span className="text-platinum/60 text-sm flex items-center">{fee.network}</span>
                <span className="text-right text-green-400 text-sm flex items-center justify-end">
                  {fee.deposit}
                </span>
                <span className="text-right text-ivory text-sm font-mono flex items-center justify-end">
                  {fee.withdrawal}
                </span>
                <span className="text-right text-platinum/50 text-sm font-mono flex items-center justify-end">
                  {fee.minWithdrawal}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* VIP Programme */}
        <section>
          <div className="bg-obsidian border border-ivory/5 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(99,102,241,0.06),transparent_60%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block mb-4 px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-[family-name:var(--font-heading)] tracking-wider uppercase">
                  VIP Programme
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ivory mb-4">
                  Volume Discounts
                </h2>
                <p className="text-platinum/60 leading-relaxed mb-6">
                  High-volume traders and institutional clients qualify for our VIP
                  programme with custom fee structures, dedicated account management,
                  and priority API access. Contact our institutional desk to discuss
                  bespoke arrangements.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3.5 bg-crypto-electric text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-crypto-electric/90 transition-colors"
                >
                  Contact Institutional Desk
                </a>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Custom maker/taker rates", desc: "Negotiated fees based on monthly volume" },
                  { label: "Dedicated account manager", desc: "White-glove support for institutional clients" },
                  { label: "Priority API access", desc: "Higher rate limits and co-location options" },
                  { label: "OTC trading desk", desc: "Block trades with minimal market impact" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-crypto-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-crypto-electric" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-ivory text-sm font-[family-name:var(--font-heading)] font-medium">
                        {item.label}
                      </div>
                      <div className="text-platinum/40 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
