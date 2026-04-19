import type { Metadata } from "next";
import { SubsidiaryHero } from "@/components/ui/SubsidiaryHero";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SubNav, type SubNavItem } from "@/components/ui/SubNav";
import { CTAPanel } from "@/components/ui/CTAPanel";
import { EcosystemConnections } from "@/components/ui/EcosystemConnections";
import { CONNECTIONS } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "Markets",
  description:
    "FAVA Markets — multi-asset CFD and FX brokerage with 1,000+ instruments, raw spreads from 0.0 pips, and execution infrastructure across LD4, NY4, and TY3.",
};

const navItems: SubNavItem[] = [
  { id: "why", label: "Why FAVA" },
  { id: "instruments", label: "Instruments" },
  { id: "accounts", label: "Accounts" },
  { id: "platforms", label: "Platforms" },
  { id: "track-record", label: "Track record" },
  { id: "expansion", label: "Expansion" },
  { id: "ecosystem", label: "Ecosystem" },
];

const whyFavaMarkets = [
  {
    number: "01",
    title: "Execution that actually matters",
    body: "Tier-1 liquidity routing, co-located servers in LD4, NY4, and TY3. Trades get filled at the price you see, not the price you're given.",
  },
  {
    number: "02",
    title: "A desk with 15 years of memory",
    body: "$750B+ notional across six brokerage builds. You aren't the first client of a first-time team — you're the next in a long line.",
  },
  {
    number: "03",
    title: "Beyond the ticket",
    body: "Fund from FAVA Payments. Hedge digital exposure on FAVA Digital. Park profits with FAVA Wealth. One account reaches the whole ecosystem.",
  },
];

const instruments = [
  {
    name: "FX Pairs",
    count: "60+",
    body: "Major, minor, exotic. Raw spreads from 0.0 pips on Pro accounts.",
  },
  {
    name: "Indices",
    count: "20+",
    body: "US500, UK100, GER40, JPN225 and more — tight spreads, extended hours.",
  },
  {
    name: "Shares",
    count: "500+",
    body: "CFDs on US, UK, and EU equities. Long, short, flexible leverage.",
  },
  {
    name: "Commodities",
    count: "30+",
    body: "Gold, oil, silver, natural gas, agri softs — spot and futures.",
  },
  {
    name: "Crypto CFDs",
    count: "40+",
    body: "BTC, ETH, altcoin derivatives. Trade the move without a wallet.",
  },
];

const accountTiers = [
  { name: "Standard", min: "$100", tag: "Commission-free, everyday traders" },
  { name: "Professional", min: "$10,000", tag: "Raw spreads, ECN, dedicated manager" },
  { name: "Institutional", min: "$100,000", tag: "DMA, FIX, bespoke liquidity" },
];

const accountRows = [
  { label: "Minimum deposit", standard: "$100", pro: "$10,000", inst: "$100,000" },
  { label: "Spreads from", standard: "1.0 pip", pro: "0.0 pip", inst: "0.0 pip" },
  { label: "Commission", standard: "$0", pro: "$3.50 / lot", inst: "$2.00 / lot" },
  { label: "Execution", standard: "STP", pro: "ECN", inst: "ECN / DMA" },
  { label: "Max leverage", standard: "1:500", pro: "1:500", inst: "1:500" },
  { label: "API access", standard: "—", pro: "REST", inst: "REST + FIX" },
  { label: "Dedicated manager", standard: "—", pro: "Yes", inst: "Yes" },
  { label: "VPS hosting", standard: "Paid", pro: "Free", inst: "Free" },
  { label: "Stop-out level", standard: "50%", pro: "30%", inst: "20%" },
  { label: "Negative balance protection", standard: "Yes", pro: "Yes", inst: "Yes" },
];

const platforms = [
  {
    name: "MetaTrader 4",
    tag: "Industry standard",
    body: "The trader's default. EAs, custom indicators, the full MQL4 ecosystem.",
    bullets: ["Expert Advisors", "30+ indicators", "Mobile + desktop"],
  },
  {
    name: "MetaTrader 5",
    tag: "Multi-asset, advanced",
    body: "Depth of market, 21 timeframes, built-in economic calendar, MQL5 with multi-thread strategy tester.",
    bullets: ["Depth of market", "21 timeframes", "Strategy tester"],
  },
  {
    name: "FAVA WebTrader",
    tag: "Proprietary",
    body: "Zero install, TradingView charting, one-click execution, synced across devices.",
    bullets: ["No download", "TradingView charts", "Cross-device sync"],
  },
];

const expansionTimeline = [
  { phase: "Day 1", regions: "West Africa (Nigeria)" },
  { phase: "Year 1", regions: "Dubai · South Africa · South America" },
  { phase: "Year 2", regions: "London · Cyprus · Melbourne" },
  { phase: "Year 3+", regions: "8+ jurisdictions, 250K+ clients" },
];

export default function MarketsPage() {
  return (
    <>
      <SubsidiaryHero
        channel="markets"
        eyebrow="FAVA MARKETS"
        title="Multi-asset execution, built for traders who know the difference."
        description="Trade FX, indices, shares, commodities, and crypto CFDs on infrastructure with 15+ years of operator memory behind it."
        primary={{ href: "/contact", label: "Open a live account" }}
        secondary={{ href: "#accounts", label: "Compare accounts" }}
      />

      <StatsStrip
        stats={[
          { value: "15+", label: "Years in FX/CFD" },
          { value: "6", label: "Brokerage deployments" },
          { value: "$750B+", label: "Notional delivered", accent: true },
          { value: "25K+", label: "Clients onboarded" },
        ]}
      />

      <SubNav items={navItems} variant="markets" />

      <section id="why" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">WHY FAVA MARKETS</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            A trading experience built on real infrastructure, not marketing.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyFavaMarkets.map((item) => (
              <Card key={item.number} accent="markets">
                <span className="text-numbers text-markets">
                  {item.number}
                </span>
                <h3 className="text-subhead text-primary mt-4">{item.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="instruments"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">INSTRUMENTS</p>
          <h2 className="text-subhead text-primary mb-4 max-w-xl">
            1,000+ instruments. Five asset classes. One account.
          </h2>
          <p className="text-secondary leading-[1.7] max-w-xl mb-12">
            From major FX pairs to crypto derivatives, access global markets
            from a single account with institutional-grade pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instruments.map((inst) => (
              <div
                key={inst.name}
                className="bg-base p-8 border-t-2 border-markets"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-primary">{inst.name}</h3>
                  <span className="text-numbers text-markets">
                    {inst.count}
                  </span>
                </div>
                <p className="text-sm-body text-secondary leading-[1.7]">
                  {inst.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="accounts" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">ACCOUNTS</p>
          <h2 className="text-subhead text-primary mb-4 max-w-xl">
            Three tiers. Same platforms. Same protections.
          </h2>
          <p className="text-secondary leading-[1.7] max-w-xl mb-12">
            Pick the tier that matches your style and volume. All accounts
            include segregated funds, negative balance protection, and access
            to every platform we offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {accountTiers.map((tier) => (
              <Card key={tier.name} accent="markets">
                <p className="text-caption text-markets">{tier.name}</p>
                <p className="text-subhead text-primary mt-2">{tier.min}</p>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {tier.tag}
                </p>
              </Card>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-4 px-6 w-[240px]">
                    Feature
                  </th>
                  <th className="text-caption text-secondary text-left py-4 px-6">
                    Standard
                  </th>
                  <th className="text-caption text-secondary text-left py-4 px-6">
                    Professional
                  </th>
                  <th className="text-caption text-secondary text-left py-4 px-6">
                    Institutional
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary py-4 px-6">{row.label}</td>
                    <td className="text-sm-body text-secondary py-4 px-6">
                      {row.standard}
                    </td>
                    <td className="text-sm-body text-secondary py-4 px-6">
                      {row.pro}
                    </td>
                    <td className="text-sm-body text-secondary py-4 px-6">
                      {row.inst}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section
        id="platforms"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">PLATFORMS</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            MT4, MT5, WebTrader. Every account, every platform, every device.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <Card key={p.name} accent="markets">
                <p className="text-caption text-markets">{p.tag}</p>
                <h3 className="text-subhead text-primary mt-2">{p.name}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-4">
                  {p.body}
                </p>
                <ul className="mt-6 flex flex-col gap-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-sm-body text-secondary flex items-start gap-3"
                    >
                      <span className="text-markets mt-[9px] w-[6px] h-px bg-markets shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="track-record" className="py-[100px] max-md:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-label text-secondary mb-6">TRACK RECORD</p>
              <p className="text-accent text-primary leading-[1.4]">
                &ldquo;Built and scaled from scratch. Six times. $320M in
                deposits over nine years, out of a single office across
                Sub-Saharan Africa.&rdquo;
              </p>
              <p className="text-secondary mt-8 leading-[1.7]">
                The team behind FAVA Markets has built and scaled brokerages
                from zero across multiple continents. This isn&rsquo;t a
                first-time build &mdash; it&rsquo;s a repeatable framework
                with known-good results.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-8">
              <div>
                <p className="text-numbers text-primary">$320M</p>
                <p className="text-caption text-secondary mt-2">Client deposits</p>
              </div>
              <div>
                <p className="text-numbers text-primary">18K+</p>
                <p className="text-caption text-secondary mt-2">Active traders</p>
              </div>
              <div>
                <p className="text-numbers text-primary">102K</p>
                <p className="text-caption text-secondary mt-2">Lots traded</p>
              </div>
              <div>
                <p className="text-numbers text-primary">590</p>
                <p className="text-caption text-secondary mt-2">IB partners</p>
              </div>
              <div className="col-span-2">
                <p className="text-numbers text-gold">9 years</p>
                <p className="text-caption text-secondary mt-2">
                  Continuous operation
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="expansion"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">GLOBAL EXPANSION</p>
          <h2 className="text-subhead text-primary mb-4 max-w-xl">
            Execution closer to you, wherever you trade.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.7] mb-14">
            FAVA Markets is deploying across jurisdictions. The goal: bring
            institutional-grade execution within one latency hop of every
            serious trader.
          </p>

          <div className="grid grid-cols-[auto_1fr] gap-x-16 max-md:gap-x-6">
            {expansionTimeline.map((phase, i) => (
              <div key={phase.phase} className="contents">
                <div className="flex flex-col items-center max-md:hidden">
                  <div className="w-3 h-3 bg-markets mt-2 shrink-0" />
                  {i < expansionTimeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-10 max-md:border-l-2 max-md:border-markets max-md:pl-6">
                  <p className="text-caption text-markets">{phase.phase}</p>
                  <p className="text-primary mt-2">{phase.regions}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EcosystemConnections from="markets" links={CONNECTIONS.markets} />

      <CTAPanel
        eyebrow="OPEN AN ACCOUNT"
        title="Start trading with FAVA Markets."
        description="1,000+ instruments · Raw spreads · Regulated execution · 15 years of operator memory behind every fill."
        primary={{ href: "/contact", label: "Open a live account" }}
        secondary={{ href: "/contact", label: "Talk to a specialist" }}
        variant="markets"
      />
    </>
  );
}
