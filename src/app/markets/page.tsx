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

const caseBStats = [
  { value: "102,040", label: "LOTS TRADED" },
  { value: "$12.8M", label: "CLIENT DEPOSITS (Y1)" },
  { value: "18,822", label: "ACTIVE TRADERS" },
  { value: "590", label: "ACTIVE IB PARTNERS" },
  { value: "$427K+", label: "PARTNER COMMISSIONS" },
];

const expansionTimeline = [
  { phase: "DAY 1", regions: "West Africa (Nigeria)" },
  { phase: "YEAR 1", regions: "Dubai · South Africa · South America" },
  { phase: "YEAR 2", regions: "London · Cyprus · Melbourne" },
  { phase: "YEAR 3+", regions: "8+ jurisdictions, 250K+ clients" },
];

const instruments = [
  {
    name: "FX Pairs",
    count: "60+",
    description: "Major, minor, and exotic currency pairs",
  },
  {
    name: "Indices",
    count: "20+",
    description: "US500, UK100, GER40 and more",
  },
  {
    name: "Shares",
    count: "500+",
    description: "CFDs on US, UK, and EU equities",
  },
  {
    name: "Commodities",
    count: "30+",
    description: "Metals, energies, agriculturals",
  },
  {
    name: "Crypto CFDs",
    count: "40+",
    description: "BTC, ETH, and altcoin derivatives",
  },
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

      {/* Track Record Stats Bar */}
      <section className="border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
            {trackRecord.map((stat) => (
              <div key={stat.label}>
                <p className="text-numbers text-primary">{stat.value}</p>
                <p className="text-label text-tertiary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FAVA Markets */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">
            WHY FAVA MARKETS
          </p>
          <h2 className="text-subhead text-primary mb-16 max-md:mb-10">
            A trading experience built on real infrastructure, not marketing.
          </h2>
          <div className="grid md:grid-cols-3 gap-16 max-md:gap-12">
            {whyFavaMarkets.map((engine) => (
              <div key={engine.title}>
                <p className="text-label text-markets mb-4">{engine.number}</p>
                <h3 className="text-subhead text-primary mb-3">
                  {engine.title}
                </h3>
                <p className="text-secondary text-[15px] leading-[1.7]">
                  {engine.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Model */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">
            OUR TRACK RECORD
          </p>
          <h2 className="text-subhead text-primary mb-4">
            Built by operators, not first-timers.
          </h2>
          <p className="text-secondary max-w-[600px] mb-16 max-md:mb-10">
            The team behind FAVA Markets has built and scaled brokerages
            from scratch across multiple continents. This is what that looks like.
          </p>

          {/* Case A */}
          <div className="border-t border-border pt-10 mb-16 max-md:mb-10">
            <p className="text-label text-tertiary mb-4">
              Case A &mdash; Long-term execution
            </p>
            <p className="text-accent text-primary max-w-[600px]">
              $320M client deposits over nine years. One office. Six deployments
              across Sub-Saharan Africa.
            </p>
          </div>

          {/* Case B */}
          <div className="border-t border-border pt-10">
            <p className="text-label text-tertiary mb-8">
              Case B &mdash; One-year snapshot
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10">
              {caseBStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-numbers text-primary">{stat.value}</p>
                  <p className="text-label text-tertiary mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">GLOBAL REACH</p>
          <h2 className="text-subhead text-primary mb-6 max-w-lg">
            Trade from anywhere. We&apos;re expanding across every major market.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.75] mb-16">
            FAVA Markets is deploying across multiple jurisdictions to bring
            institutional-grade execution closer to traders everywhere.
          </p>

          <div className="border-t border-border">
            {expansionTimeline.map((phase) => (
              <div
                key={phase.phase}
                className="flex items-baseline gap-10 py-5 border-b border-border"
              >
                <span className="text-label text-markets w-20 shrink-0">
                  {phase.phase}
                </span>
                <span className="text-primary text-[15px]">
                  {phase.regions}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrument Categories */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">
            INSTRUMENTS
          </p>
          <div className="border-t border-border">
            {instruments.map((inst) => (
              <Link
                key={inst.name}
                href="/markets/products"
                className="group flex items-center justify-between py-5 border-b border-border hover:bg-elevated transition-colors px-4 -mx-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-numbers text-primary w-16">
                    {inst.count}
                  </span>
                  <div>
                    <span className="text-primary text-[15px]">
                      {inst.name}
                    </span>
                    <span className="text-secondary text-[13px] ml-4 max-sm:hidden">
                      {inst.description}
                    </span>
                  </div>
                </div>
                <span className="text-label text-tertiary group-hover:text-markets transition-colors">
                  View &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="gold-rule mb-10" />
          <h2 className="text-display-alt text-primary mb-4">
            Ready to trade with FAVA Markets?
          </h2>
          <p className="text-secondary mb-10 max-w-[520px]">
            Open your account in minutes. Access 1,000+ instruments with
            institutional-grade execution and a team built for global markets.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/markets/accounts"
              className="link-hover text-label text-markets"
            >
              Open Live Account &rarr;
            </Link>
            <Link
              href="/contact"
              className="link-hover text-label text-primary"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
