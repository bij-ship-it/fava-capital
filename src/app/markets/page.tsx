import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { MarketsIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "FAVA Markets — Multi-Asset CFD & FX Brokerage",
  description:
    "Built on a proven operating model. Not a first-time build — a repeatable deployment framework with established infrastructure.",
};

const trackRecord = [
  { value: "15+", label: "YEARS IN FX CFD MARKETS" },
  { value: "6", label: "BROKERAGE DEPLOYMENTS" },
  { value: "$750B+", label: "NOTIONAL DELIVERED" },
  { value: "25K+", label: "CLIENT BOOK BUILT" },
];

const whyFavaMarkets = [
  {
    number: "01",
    title: "Institutional-Grade Execution",
    description:
      "Proprietary dealing desk with deep liquidity pool access. Your trades are routed directly to tier-1 liquidity providers for the tightest spreads and fastest fills.",
  },
  {
    number: "02",
    title: "Proven Track Record",
    description:
      "Built by a team with 15+ years in FX/CFD markets and six successful brokerage deployments. Over $750 billion in notional volume executed across global markets.",
  },
  {
    number: "03",
    title: "Beyond Trading",
    description:
      "Multi-currency wallets, cross-border transfers, cards, and savings — all integrated into your trading account. Powered by Rebasive, our payments infrastructure.",
  },
];

const instruments = [
  {
    name: "FX Pairs",
    count: "60+",
    description:
      "Major, minor, and exotic currency pairs with spreads from 0.0 pips on raw accounts.",
  },
  {
    name: "Indices",
    count: "20+",
    description:
      "Trade US500, UK100, GER40, and more global indices with tight spreads.",
  },
  {
    name: "Shares",
    count: "500+",
    description:
      "CFDs on US, UK, and EU equities. Go long or short with flexible leverage.",
  },
  {
    name: "Commodities",
    count: "30+",
    description:
      "Gold, oil, silver, natural gas, and agricultural commodities.",
  },
  {
    name: "Crypto CFDs",
    count: "40+",
    description:
      "BTC, ETH, and altcoin derivatives. Trade crypto without a wallet.",
  },
];

const expansionTimeline = [
  { phase: "Day 1", regions: "West Africa (Nigeria)" },
  { phase: "Year 1", regions: "Dubai \u00b7 South Africa \u00b7 South America" },
  { phase: "Year 2", regions: "London \u00b7 Cyprus \u00b7 Melbourne" },
  { phase: "Year 3+", regions: "8+ jurisdictions, 250K+ clients" },
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 max-md:pb-14">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
              <h1 className="text-display-alt text-primary">
                Multi-Asset CFD &amp; FX Brokerage
              </h1>
              <p className="mt-5 text-secondary max-w-[520px]">
                Trade FX, indices, shares, commodities, and crypto CFDs with
                institutional-grade execution. Deep liquidity, tight spreads,
                and a team with 15+ years of market experience behind every trade.
              </p>
              <Link
                href="/markets/accounts"
                className="inline-block mt-8 text-label text-markets hover:opacity-80 transition-opacity"
              >
                Open Live Account &rarr;
              </Link>
            </div>
            <MarketsIcon
              size={160}
              className="opacity-20 shrink-0 hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* Track Record Bar */}
      <section className="bg-surface">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {trackRecord.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 max-md:py-8 ${
                  i > 0 ? "md:border-l border-border md:pl-10" : ""
                } ${i % 2 !== 0 ? "max-md:border-l max-md:pl-6 border-border" : ""} ${
                  i >= 2 ? "max-md:border-t max-md:pt-8" : ""
                }`}
              >
                <p className="text-[40px] max-md:text-[32px] font-bold tracking-tight text-primary leading-none">
                  {stat.value}
                </p>
                <p className="text-caption text-tertiary mt-3 tracking-widest uppercase text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAVA Markets */}
      <section className="py-[120px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">WHY FAVA MARKETS</p>
          <h2 className="text-subhead text-primary mb-16 max-md:mb-10">
            A trading experience built on real infrastructure, not marketing.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {whyFavaMarkets.map((item, i) => (
              <div
                key={item.title}
                className={`${i === 2 ? "md:col-span-2 md:max-w-[560px]" : ""}`}
              >
                <div className="border-t-2 border-[#14B8A6] pt-8 pb-14">
                  <span className="text-[48px] max-md:text-[36px] font-light text-markets leading-none tracking-tight">
                    {item.number}
                  </span>
                  <h3 className="text-subhead text-primary mt-5 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-[15px] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments */}
      <section className="py-[120px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">INSTRUMENTS</p>
          <h2 className="text-subhead text-primary mb-4">
            1,000+ instruments across 5 asset classes.
          </h2>
          <p className="text-secondary max-w-[520px] mb-14 max-md:mb-10">
            From major FX pairs to crypto derivatives, access global markets
            from a single account with institutional-grade pricing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-md:gap-4">
            {instruments.map((inst) => (
              <Link
                key={inst.name}
                href="/markets/products"
                className="group block bg-surface border-t-2 border-transparent hover:border-[#14B8A6] transition-colors"
              >
                <div className="p-8 max-md:p-6">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-primary text-[17px] font-medium">
                      {inst.name}
                    </h3>
                    <span className="text-numbers text-markets text-[28px] max-md:text-[24px] font-bold leading-none">
                      {inst.count}
                    </span>
                  </div>
                  <p className="text-secondary text-[14px] leading-[1.65] mb-6">
                    {inst.description}
                  </p>
                  <span className="text-label text-tertiary group-hover:text-markets transition-colors text-[12px] tracking-wider">
                    View instruments &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Track Record */}
      <section className="bg-surface">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid md:grid-cols-2 gap-16 max-md:gap-10 py-[100px] max-md:py-16">
            <div>
              <p className="text-label text-secondary mb-8">OUR TRACK RECORD</p>
              <blockquote className="text-[28px] max-md:text-[22px] text-primary leading-[1.4] italic font-light">
                &ldquo;Built and scaled from scratch. Six times. $320M in
                deposits over nine years, from a single office across
                Sub-Saharan Africa.&rdquo;
              </blockquote>
              <p className="text-secondary mt-6 text-[15px] leading-[1.7]">
                The team behind FAVA Markets has built and scaled brokerages
                from zero across multiple continents. This is not a first-time
                build &mdash; it is a repeatable, proven deployment framework.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <p className="text-[36px] max-md:text-[28px] font-bold text-primary leading-none tracking-tight">
                    102K
                  </p>
                  <p className="text-caption text-tertiary mt-2 uppercase text-[11px] tracking-widest">
                    LOTS TRADED
                  </p>
                </div>
                <div>
                  <p className="text-[36px] max-md:text-[28px] font-bold text-primary leading-none tracking-tight">
                    18K+
                  </p>
                  <p className="text-caption text-tertiary mt-2 uppercase text-[11px] tracking-widest">
                    ACTIVE TRADERS
                  </p>
                </div>
                <div>
                  <p className="text-[36px] max-md:text-[28px] font-bold text-primary leading-none tracking-tight">
                    $320M
                  </p>
                  <p className="text-caption text-tertiary mt-2 uppercase text-[11px] tracking-widest">
                    CLIENT DEPOSITS
                  </p>
                </div>
                <div>
                  <p className="text-[36px] max-md:text-[28px] font-bold text-primary leading-none tracking-tight">
                    590
                  </p>
                  <p className="text-caption text-tertiary mt-2 uppercase text-[11px] tracking-widest">
                    IB PARTNERS
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[36px] max-md:text-[28px] font-bold text-primary leading-none tracking-tight">
                    9 years
                  </p>
                  <p className="text-caption text-tertiary mt-2 uppercase text-[11px] tracking-widest">
                    CONTINUOUS OPERATION
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Expansion Timeline */}
      <section className="py-[120px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">GLOBAL EXPANSION</p>
          <h2 className="text-subhead text-primary mb-4 max-w-lg">
            Trade from anywhere. We&apos;re expanding across every major market.
          </h2>
          <p className="text-secondary max-w-[520px] leading-[1.75] mb-16 max-md:mb-10">
            FAVA Markets is deploying across multiple jurisdictions to bring
            institutional-grade execution closer to traders everywhere.
          </p>
          <div className="grid md:grid-cols-[auto_1fr] gap-x-16">
            {expansionTimeline.map((phase, i) => (
              <div key={phase.phase} className="contents">
                {/* Timeline column */}
                <div className="flex flex-col items-center max-md:hidden">
                  <div className="w-3 h-3 bg-[#14B8A6] shrink-0 mt-1" />
                  {i < expansionTimeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                {/* Content column */}
                <div className="pb-12 max-md:pb-8 max-md:border-l-2 max-md:border-[#14B8A6] max-md:pl-6 max-md:ml-1">
                  <p className="text-label text-markets mb-1 text-[13px] tracking-wider">
                    {phase.phase}
                  </p>
                  <p className="text-primary text-[17px] max-md:text-[15px]">
                    {phase.regions}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[100px] max-md:py-16 text-center">
          <h2 className="text-display-alt text-primary mb-5">
            Start trading with FAVA Markets
          </h2>
          <p className="text-caption text-secondary mb-10 tracking-wide">
            1,000+ instruments &middot; Tight spreads &middot; Regulated
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/markets/accounts"
              className="inline-block border border-markets text-markets text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-markets/10 transition-colors"
            >
              Open Live Account
            </Link>
            <Link
              href="/markets/platforms"
              className="text-label text-secondary link-hover hover:text-primary transition-colors"
            >
              View Platforms &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
