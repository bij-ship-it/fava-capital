import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { DigitalIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "FAVA Digital — The Regulated Exchange | FAVA Capital",
  description:
    "Trade digital assets on Cryptorio, our fully regulated institutional-grade exchange. Cold storage security, lightning execution, and transparent fees.",
};

const tickers = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%", up: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%", up: true },
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%", up: true },
  { symbol: "AVAX", name: "Avalanche", price: "$42.18", change: "-0.92%", up: false },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%", up: true },
  { symbol: "DOT", name: "Polkadot", price: "$9.41", change: "-1.23%", up: false },
];

const whyCards = [
  {
    stat: "95%",
    title: "Cold Storage Security",
    description:
      "Assets secured in air-gapped cold storage with multi-signature authorisation and SOC2-audited infrastructure.",
  },
  {
    stat: "4",
    title: "Regulated Jurisdictions",
    description:
      "Fully licensed across four jurisdictions with institutional-grade KYC/AML compliance and transparent reserve attestations.",
  },
  {
    stat: "<1ms",
    title: "Order Matching",
    description:
      "Sub-millisecond execution with co-located infrastructure, 99.99% uptime SLA, and dedicated institutional connectivity.",
  },
];

const platformFeatures = [
  "Spot & margin trading",
  "TradingView charts",
  "REST & WebSocket API",
  "Institutional custody",
];

const trustPanels = [
  {
    stat: "95%",
    title: "Cold Storage",
    description: "Air-gapped, multi-sig custody for the vast majority of all assets under management.",
  },
  {
    stat: "1:1",
    title: "Proof of Reserves",
    description: "Independently verified on-chain attestations published on a regular cadence.",
  },
  {
    stat: "$250M",
    title: "Insurance Coverage",
    description: "Comprehensive coverage against theft, breach, and internal fraud across all custodied assets.",
  },
  {
    stat: "SOC2",
    title: "Audited Infrastructure",
    description: "Type II certified with continuous monitoring, penetration testing, and incident response.",
  },
];

export default function CryptoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <ChannelBadge name="FAVA DIGITAL" color="#6366F1" />
              <h1 className="text-display-alt text-primary">The Regulated Exchange</h1>
              <p className="mt-6 text-secondary max-w-[560px] leading-[1.75]">
            FAVA Digital operates{" "}
            <Link href="https://cryptorio.com" target="_blank" className="text-crypto link-hover">
              Cryptorio
            </Link>
            {" "}&mdash; our institutional-grade cryptocurrency exchange. Fully licensed,
            deeply liquid, and built for traders who demand security, transparency,
            and serious infrastructure behind every trade.
          </p>
              <div className="mt-8 flex items-center gap-8">
                <Link href="/crypto/trade" className="text-label text-crypto link-hover">
                  Start trading on Cryptorio &rarr;
                </Link>
                <Link href="/crypto/assets" className="text-label text-secondary link-hover transition-colors hover:text-primary">
                  View supported assets
                </Link>
              </div>
            </div>
            <DigitalIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Price Ticker Strip */}
      <section className="bg-[#120E1E]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex overflow-x-auto">
            {tickers.map((t, i) => (
              <div
                key={t.symbol}
                className={`flex items-center gap-4 py-4 pr-8 shrink-0 ${
                  i > 0 ? "pl-8 border-l border-[#1E1735]" : ""
                }`}
              >
                <span className="text-label text-[#7B6F8E]">{t.symbol}</span>
                <span className="text-numbers text-[#E8E4EC] text-[15px]">{t.price}</span>
                <span
                  className={`font-mono text-[13px] ${
                    t.up ? "text-green-400" : "text-[#C47272]"
                  }`}
                >
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cryptorio */}
      <section className="py-[120px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-[#7B6F8E] mb-16">Why Cryptorio</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1E1735]">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-[#120E1E] p-10 border-t-2 border-t-[#6366F1]">
                <p className="text-[#6366F1] text-[40px] font-mono font-medium leading-none mb-5">
                  {card.stat}
                </p>
                <h3 className="text-label text-[#E8E4EC] mb-3">{card.title}</h3>
                <p className="text-[#7B6F8E] leading-[1.7] text-[14px]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cryptorio Platform */}
      <section className="bg-[#120E1E] py-[100px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-subhead text-[#E8E4EC]">Cryptorio</h2>
            <p className="text-[#7B6F8E] mt-4 max-w-xl mx-auto leading-[1.75]">
              The exchange engine powering FAVA Digital. Purpose-built for digital
              assets with institutional-grade custody, professional trading tools,
              and an API designed for algorithmic desks.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#1E1735] mb-16">
            {[
              { stat: "95%", label: "Cold Storage" },
              { stat: "1:1", label: "Proof of Reserves" },
              { stat: "<1ms", label: "Order Matching" },
              { stat: "99.99%", label: "Uptime" },
            ].map((item) => (
              <div key={item.label} className="bg-[#17122A] py-8 px-6 text-center">
                <p className="text-numbers text-[#E8E4EC] text-[28px] leading-none mb-2">
                  {item.stat}
                </p>
                <p className="text-caption text-[#7B6F8E]">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-8 mb-12">
            {platformFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#6366F1] shrink-0" />
                <span className="text-[#E8E4EC] text-[14px]">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://cryptorio.com"
              target="_blank"
              className="text-label text-[#6366F1] link-hover"
            >
              Visit cryptorio.com &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Supported Assets Preview */}
      <section className="border-t border-b border-[#1E1735] py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-center justify-between mb-10">
            <p className="text-label text-[#7B6F8E]">Top Assets</p>
            <Link href="/crypto/assets" className="text-label text-[#6366F1] link-hover text-[13px]">
              View all assets &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[1px] bg-[#1E1735]">
            {tickers.map((t) => (
              <div key={t.symbol} className="bg-[#0C0716] py-6 px-5">
                <p className="text-label text-[#E8E4EC] mb-1">{t.symbol}</p>
                <p className="text-numbers text-[#7B6F8E] text-[14px]">{t.price}</p>
                <p
                  className={`font-mono text-[12px] mt-1 ${
                    t.up ? "text-green-400" : "text-[#C47272]"
                  }`}
                >
                  {t.change}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-[120px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-[#7B6F8E] mb-16">Security &amp; Trust</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#1E1735]">
            {trustPanels.map((panel) => (
              <div key={panel.title} className="bg-[#120E1E] p-10">
                <p className="text-numbers text-[#E8E4EC] text-[32px] leading-none mb-3">
                  {panel.stat}
                </p>
                <h3 className="text-label text-[#E8E4EC] mb-2">{panel.title}</h3>
                <p className="text-[#7B6F8E] leading-[1.7] text-[14px]">{panel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#120E1E] py-[80px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 text-center">
          <h2 className="text-subhead text-[#E8E4EC] mb-4">Trade on Cryptorio</h2>
          <p className="text-[#7B6F8E] text-[14px] mb-10">
            Regulated &middot; Insured &middot; Audited
          </p>
          <div className="flex items-center justify-center gap-8">
            <Link href="/crypto/trade" className="text-label text-[#6366F1] link-hover">
              Start Trading &rarr;
            </Link>
            <Link href="/crypto/fees" className="text-label text-[#7B6F8E] link-hover transition-colors hover:text-[#E8E4EC]">
              View Fees &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
