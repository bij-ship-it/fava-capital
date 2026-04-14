import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "Fee Schedule — FAVA Digital | FAVA Capital",
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
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA DIGITAL" color="#6366F1" />
        <h1 className="text-display-alt text-primary mb-6">Fee Schedule</h1>
        <p className="text-secondary max-w-[520px] mb-20">
          Transparent, volume-based pricing. The more you trade, the less you pay.
          No hidden fees.
        </p>

        {/* Trading Fees */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">02 — Trading Fees</p>
          <p className="text-secondary text-[14px] mb-8">
            Maker-taker model based on 30-day trailing volume.
          </p>

          <div className="border border-border">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-border">
              <span className="text-caption text-tertiary">Tier</span>
              <span className="text-caption text-tertiary">30-Day Volume</span>
              <span className="text-caption text-tertiary text-right">Maker Fee</span>
              <span className="text-caption text-tertiary text-right">Taker Fee</span>
            </div>

            {tradingTiers.map((tier, i) => (
              <div
                key={tier.tier}
                className={`grid grid-cols-4 gap-4 px-6 py-4 border-b border-border last:border-b-0 ${
                  i % 2 === 1 ? "bg-surface" : ""
                }`}
              >
                <span className="text-primary text-[14px]">{tier.tier}</span>
                <span className="text-secondary text-[14px]">{tier.volume}</span>
                <span className="text-primary text-[14px] font-mono text-right">{tier.maker}</span>
                <span className="text-primary text-[14px] font-mono text-right">{tier.taker}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Deposit & Withdrawal Fees */}
        <section className="py-[140px] border-t border-border">
          <p className="text-label text-secondary mb-10">03 — Network Fees</p>
          <p className="text-secondary text-[14px] mb-8">
            Deposits are always free. Withdrawal fees cover network transaction costs.
          </p>

          <div className="border border-border">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 px-6 py-3 border-b border-border">
              <span className="text-caption text-tertiary">Asset</span>
              <span className="text-caption text-tertiary">Network</span>
              <span className="text-caption text-tertiary text-right">Deposit</span>
              <span className="text-caption text-tertiary text-right">Withdrawal</span>
              <span className="text-caption text-tertiary text-right">Min Withdrawal</span>
            </div>

            {networkFees.map((fee, i) => (
              <div
                key={`${fee.asset}-${fee.network}`}
                className={`grid grid-cols-5 gap-4 px-6 py-4 border-b border-border last:border-b-0 ${
                  i % 2 === 1 ? "bg-surface" : ""
                }`}
              >
                <span className="text-primary text-[14px]">{fee.asset}</span>
                <span className="text-secondary text-[14px]">{fee.network}</span>
                <span className="text-green-400 text-[14px] text-right">{fee.deposit}</span>
                <span className="text-primary text-[14px] font-mono text-right">{fee.withdrawal}</span>
                <span className="text-secondary text-[14px] font-mono text-right">{fee.minWithdrawal}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
