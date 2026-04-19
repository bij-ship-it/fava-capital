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
  title: "Wealth",
  description:
    "FAVA Wealth — a managed investment fund that generates returns from trading volume, not market direction. Target 20% net annual return, AFSL-regulated.",
};

const navItems: SubNavItem[] = [
  { id: "strategy", label: "Strategy" },
  { id: "terms", label: "Terms" },
  { id: "returns", label: "Returns" },
  { id: "ecosystem", label: "Ecosystem" },
];

const strategySteps = [
  {
    title: "Capital deployment",
    body:
      "Investor capital is pooled and deployed through institutional-grade execution infrastructure shared across FAVA.",
  },
  {
    title: "Direct LP routing",
    body:
      "Every trade is routed directly to tier-1 liquidity providers. No market-making against client flow.",
  },
  {
    title: "Systematic hedging",
    body:
      "Long and short positions neutralise directional exposure. Returns come from flow, not market calls.",
  },
  {
    title: "Volume revenue",
    body:
      "Income is generated from spreads and commissions on executed trades inside the fund.",
  },
  {
    title: "Capital protection",
    body:
      "20% of capital is deployed. 80% is held in reserve. Principal is protected while the working capital earns.",
  },
];

const terms = [
  { label: "Target return", value: "20% per annum" },
  { label: "Distributions", value: "Quarterly" },
  { label: "Minimum investment", value: "USD $250,000" },
  { label: "Initial lock-in", value: "12 months" },
  { label: "Liquidity post-lock", value: "Quarterly" },
  { label: "Fees", value: "0% management / 0% performance" },
];

const illustrativeReturns = [
  { investment: "$250,000", quarterly: "$12,500", annual: "$50,000" },
  { investment: "$500,000", quarterly: "$25,000", annual: "$100,000" },
  { investment: "$1,000,000", quarterly: "$50,000", annual: "$200,000" },
  { investment: "$5,000,000", quarterly: "$250,000", annual: "$1,000,000" },
];

export default function WealthPage() {
  return (
    <>
      <SubsidiaryHero
        channel="wealth"
        eyebrow="FAVA WEALTH"
        title="A managed fund built on trading volume, not market direction."
        description="Returns come from institutional execution inside the FAVA ecosystem — paid quarterly, with zero management and performance fees. AFSL-regulated."
        primary={{ href: "/contact", label: "Investor enquiries" }}
        secondary={{ href: "#strategy", label: "How the strategy works" }}
      />

      <StatsStrip
        stats={[
          { value: "20%", label: "Target net annual", accent: true },
          { value: "Quarterly", label: "Distributions" },
          { value: "0 / 0", label: "Mgmt / perf fees" },
          { value: "$250K", label: "Minimum" },
        ]}
      />

      <SubNav items={navItems} variant="wealth" />

      <section id="strategy" className="py-[100px] max-md:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-label text-secondary mb-6">THE STRATEGY</p>
              <h2 className="text-subhead text-primary">
                A fund that earns from flow, not forecasts.
              </h2>
              <p className="text-secondary mt-5 leading-[1.7]">
                Wealth operates through the same execution infrastructure
                FAVA Markets clients trade on. The fund captures spread and
                commission across hedged flow &mdash; directionally neutral,
                repeatable, and independent of market conditions.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <Card size="large" accent="wealth">
                <ol className="flex flex-col">
                  {strategySteps.map((step, i) => (
                    <li
                      key={step.title}
                      className={`flex items-start gap-6 py-6 ${
                        i > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <span className="text-gold text-caption shrink-0 w-6 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-primary">{step.title}</p>
                        <p className="text-sm-body text-secondary mt-2 leading-[1.7]">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="terms" className="bg-surface py-[100px] max-md:py-16 border-y border-border">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-label text-secondary mb-6">INVESTMENT TERMS</p>
              <h2 className="text-subhead text-primary">
                Institutional structure. Retail-simple terms.
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="bg-base border border-border">
                {terms.map((term, i) => (
                  <div
                    key={term.label}
                    className={`flex items-center justify-between px-8 py-5 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="text-sm-body text-secondary">
                      {term.label}
                    </span>
                    <span className="text-primary text-right">
                      {term.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="returns" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">ILLUSTRATIVE RETURNS</p>
          <h2 className="text-subhead text-primary max-w-xl mb-12">
            Based on the target 20% net annual return.
          </h2>

          <div className="bg-surface border-l-2 border-l-wealth">
            <div className="grid grid-cols-3 px-8 max-md:px-5 py-4 border-b border-border">
              <span className="text-caption text-secondary">Investment</span>
              <span className="text-caption text-secondary text-right">
                Quarterly
              </span>
              <span className="text-caption text-secondary text-right">
                Annual
              </span>
            </div>

            {illustrativeReturns.map((row, i) => (
              <div
                key={row.investment}
                className={`grid grid-cols-3 px-8 max-md:px-5 py-5 ${
                  i < illustrativeReturns.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <span className="text-primary">{row.investment}</span>
                <span className="text-secondary text-right">
                  {row.quarterly}
                </span>
                <span className="text-gold text-right">{row.annual}</span>
              </div>
            ))}
          </div>

          <p className="text-caption text-tertiary mt-4">
            Past performance is not indicative of future results. See full
            disclosure in the information memorandum.
          </p>
        </Container>
      </section>

      <EcosystemConnections from="wealth" links={CONNECTIONS.wealth} />

      <CTAPanel
        eyebrow="START INVESTING"
        title="Ready to allocate?"
        description="Speak to the team about eligibility, minimums, and subscription timing. Minimum USD $250,000 · quarterly liquidity · zero fees."
        primary={{ href: "/contact", label: "Investor enquiries" }}
        secondary={{ href: "/about", label: "About FAVA Capital" }}
        variant="wealth"
      />
    </>
  );
}
