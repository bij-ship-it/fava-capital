import type { Metadata } from "next";
import { SubsidiaryHero } from "@/components/ui/SubsidiaryHero";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SubNav, type SubNavItem } from "@/components/ui/SubNav";
import { CTAPanel } from "@/components/ui/CTAPanel";
import { EcosystemConnections } from "@/components/ui/EcosystemConnections";
import { CONNECTIONS } from "@/lib/ecosystem";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "FAVA Commodities — trade metals, energy, and agriculture with research-led execution and transparent pricing across spot and futures markets.",
};

const navItems: SubNavItem[] = [
  { id: "markets", label: "Markets" },
  { id: "why", label: "Why FAVA" },
  { id: "instruments", label: "Instruments" },
  { id: "research", label: "Research" },
  { id: "ecosystem", label: "Ecosystem" },
];

const livePrices = [
  { name: "Gold", price: "$2,341.00", change: "+0.42%", up: true },
  { name: "Silver", price: "$27.84", change: "+0.18%", up: true },
  { name: "Crude Oil", price: "$78.52", change: "-0.31%", up: false },
  { name: "Natural Gas", price: "$2.14", change: "+1.07%", up: true },
];

const categories = [
  {
    title: "Precious Metals",
    body:
      "Gold, silver, platinum, and palladium — timeless stores of value, traded spot and futures.",
    count: "4 instruments",
  },
  {
    title: "Base Metals",
    body:
      "Copper, aluminium, zinc, nickel — the industrial backbone of every supply chain.",
    count: "6 instruments",
  },
  {
    title: "Energy",
    body:
      "WTI and Brent crude, natural gas, heating oil — the markets that move with the macro.",
    count: "5 instruments",
  },
  {
    title: "Agriculture & Softs",
    body:
      "Wheat, corn, soybeans, coffee, cocoa, sugar, cotton and more — weather-driven, seasonal, dense with signal.",
    count: "8 instruments",
  },
];

const reasons = [
  {
    title: "Research-led execution",
    body:
      "Weekly reports, seasonal analysis, and commentary from analysts who've traded these markets for decades.",
  },
  {
    title: "Transparent pricing",
    body:
      "Live quotes and visible spreads across every instrument. No hidden markups, no surprise overnight financing.",
  },
  {
    title: "Spot and futures, one account",
    body:
      "Take positions indefinitely or trade defined expiries. Both sit inside the same FAVA Markets infrastructure.",
  },
];

const instrumentSample = [
  { name: "Gold", symbol: "XAU/USD", type: "Spot", spread: "0.30", margin: "1.0%" },
  { name: "Silver", symbol: "XAG/USD", type: "Spot", spread: "0.02", margin: "2.0%" },
  { name: "Copper", symbol: "HG", type: "Futures", spread: "0.0015", margin: "5.0%" },
  { name: "WTI Crude", symbol: "CL", type: "Futures", spread: "0.03", margin: "3.0%" },
  { name: "Brent Crude", symbol: "BRN", type: "Futures", spread: "0.03", margin: "3.0%" },
  { name: "Natural Gas", symbol: "NG", type: "Futures", spread: "0.005", margin: "5.0%" },
  { name: "Wheat", symbol: "ZW", type: "Futures", spread: "0.25", margin: "5.0%" },
  { name: "Coffee", symbol: "KC", type: "Futures", spread: "0.15", margin: "8.0%" },
];

const research = [
  {
    category: "Energy",
    date: "11 Apr 2026",
    title: "Crude oil outlook: OPEC+ dynamics and summer demand",
    excerpt:
      "Production cuts extended through Q3. We examine the supply-demand balance into peak driving season.",
  },
  {
    category: "Precious Metals",
    date: "8 Apr 2026",
    title: "Gold in a rate-cutting cycle: historical patterns",
    excerpt:
      "Central banks keep accumulating reserves while real rates fall. We review prior easing cycles.",
  },
  {
    category: "Agriculture",
    date: "4 Apr 2026",
    title: "Soft commodities: weather risk and planting season",
    excerpt:
      "La Niña is reshaping planting forecasts across the Americas. The impact on wheat, corn, soybeans.",
  },
];

export default function CommoditiesPage() {
  return (
    <>
      <SubsidiaryHero
        channel="commodities"
        eyebrow="FAVA COMMODITIES"
        title="Metals, energy, agriculture — traded with research at the core."
        description="Access 40+ instruments across spot and futures with transparent pricing and live research from analysts who've traded these markets for decades."
        primary={{ href: "/commodities/apply", label: "Open an account" }}
        secondary={{ href: "#instruments", label: "See instruments" }}
      />

      <section className="w-full border-y border-border bg-surface">
        <Container>
          <div className="flex items-center overflow-x-auto">
            {livePrices.map((item, i) => (
              <div
                key={item.name}
                className={`flex items-baseline gap-4 py-5 pr-6 shrink-0 ${
                  i > 0 ? "pl-6 border-l border-border" : ""
                }`}
              >
                <span className="text-label text-secondary">{item.name}</span>
                <span className="text-ticker text-primary">{item.price}</span>
                <span
                  className={`text-ticker ${
                    item.up ? "text-commodities" : "text-tertiary"
                  }`}
                >
                  {item.change}
                </span>
              </div>
            ))}
            <span className="ml-auto pr-2 py-5 text-caption text-tertiary whitespace-nowrap">
              Indicative, updated in trading hours
            </span>
          </div>
        </Container>
      </section>

      <SubNav items={navItems} variant="commodities" />

      <section id="markets" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">MARKETS WE COVER</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            From Gold to grain. From barrels to bushels.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-surface p-10">
                <div className="h-[2px] w-12 bg-commodities mb-6" />
                <h3 className="text-subhead text-primary">{cat.title}</h3>
                <p className="text-caption text-commodities mt-2">
                  {cat.count}
                </p>
                <p className="text-sm-body text-secondary leading-[1.7] mt-4">
                  {cat.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="why"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">WHY FAVA COMMODITIES</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Same execution as Markets. Depth you&rsquo;d expect from a research desk.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <div className="h-[2px] w-10 bg-commodities mb-6" />
                <h3 className="text-subhead text-primary">{reason.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-4">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="instruments" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">INSTRUMENTS</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Spot for indefinite positions. Futures for the curve.
          </h2>

          <div className="grid grid-cols-12 gap-12">
            <Card
              size="standard"
              className="col-span-12 md:col-span-6"
              accent="commodities"
            >
              <h3 className="text-subhead text-primary">Spot</h3>
              <p className="text-sm-body text-secondary mt-3 leading-[1.7]">
                Hold positions indefinitely. Financing accrues on overnight
                positions. Best for directional views without expiry pressure.
              </p>
            </Card>

            <Card
              size="standard"
              className="col-span-12 md:col-span-6"
              accent="commodities"
            >
              <h3 className="text-subhead text-primary">Futures</h3>
              <p className="text-sm-body text-secondary mt-3 leading-[1.7]">
                Defined expiry, standardised contracts, full forward curve.
                Positions auto-roll near expiry unless closed.
              </p>
            </Card>
          </div>

          <div className="bg-surface border-l-2 border-l-commodities mt-12">
            <div className="grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.8fr] gap-4 px-8 max-md:px-5 py-4 border-b border-border">
              <span className="text-caption text-secondary">Instrument</span>
              <span className="text-caption text-secondary">Symbol</span>
              <span className="text-caption text-secondary">Type</span>
              <span className="text-caption text-secondary text-right">
                Spread
              </span>
              <span className="text-caption text-secondary text-right">
                Margin
              </span>
            </div>
            {instrumentSample.map((inst, i) => (
              <div
                key={inst.symbol}
                className={`grid grid-cols-[1.5fr_1fr_0.8fr_0.8fr_0.8fr] gap-4 px-8 max-md:px-5 py-4 ${
                  i < instrumentSample.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-primary">{inst.name}</span>
                <span className="text-ticker text-secondary">{inst.symbol}</span>
                <span className="text-sm-body text-secondary">{inst.type}</span>
                <span className="text-ticker text-secondary text-right">
                  {inst.spread}
                </span>
                <span className="text-ticker text-commodities text-right">
                  {inst.margin}
                </span>
              </div>
            ))}
          </div>

          <p className="text-caption text-tertiary mt-4">
            Sample of available instruments. Spreads widen in low-liquidity
            conditions; margin may tighten in elevated volatility. Contact
            us for the full spec sheet.
          </p>
        </Container>
      </section>

      <section
        id="research"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <div className="flex items-center justify-between mb-12">
            <p className="text-label text-secondary">LATEST RESEARCH</p>
            <Link
              href="/news"
              className="text-label text-commodities link-hover"
            >
              All research &rarr;
            </Link>
          </div>

          <div className="border-t border-border">
            {research.map((piece) => (
              <article
                key={piece.title}
                className="border-b border-border py-7"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-caption text-commodities">
                    {piece.category}
                  </span>
                  <span className="text-caption text-tertiary">
                    {piece.date}
                  </span>
                </div>
                <h3 className="text-subhead text-primary">{piece.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3 max-w-3xl">
                  {piece.excerpt}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <EcosystemConnections from="commodities" links={CONNECTIONS.commodities} />

      <CTAPanel
        eyebrow="OPEN AN ACCOUNT"
        title="Trade the raw materials of growth."
        description="40+ instruments · Spot and futures · Research-led · Same-day onboarding for qualified applicants."
        primary={{ href: "/commodities/apply", label: "Open an account" }}
        secondary={{ href: "/contact", label: "Talk to a specialist" }}
        variant="commodities"
      />
    </>
  );
}
