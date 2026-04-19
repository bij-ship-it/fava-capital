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
  title: "Payments",
  description:
    "FAVA Payments — cross-border payments and multi-currency accounts, powered by Rebasive. Licensed in Nigeria, the US, and Canada.",
};

const navItems: SubNavItem[] = [
  { id: "capabilities", label: "What you get" },
  { id: "process", label: "How it works" },
  { id: "compliance", label: "Compliance" },
  { id: "why", label: "Why it matters" },
  { id: "ecosystem", label: "Ecosystem" },
];

const capabilities = [
  {
    title: "Send money globally",
    body: "Transfer to 180+ countries with real-time tracking, transparent FX, and no hidden fees.",
  },
  {
    title: "Multi-currency accounts",
    body: "Hold, convert, and settle in 130+ currencies. One account, one statement, instant conversion.",
  },
  {
    title: "Cards & wallets",
    body: "Virtual and physical cards that spend from any balance, fund from any rail, and track every flow.",
  },
  {
    title: "Business API",
    body: "Plug cross-border payouts into your own platform. REST, webhooks, batch, and white-label.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up",
    body: "Open an account in minutes with streamlined verification.",
  },
  {
    number: "02",
    title: "Fund it",
    body: "Deposit via bank transfer, card, or crypto rail.",
  },
  {
    number: "03",
    title: "Send it anywhere",
    body: "Move money to 180+ countries at transparent rates.",
  },
];

const licences = [
  { name: "Nigerian Tier-1 MFB", operational: true, year: "2021" },
  { name: "US FinCEN MSB", operational: true, year: "2023" },
  { name: "Canadian FINTRAC MSB", operational: true, year: "2023" },
  { name: "UK EMI Licence", operational: false, year: "2026" },
];

const opportunityStats = [
  { value: "$190T", label: "Annual cross-border flows" },
  { value: "$400B+", label: "Fees extracted by intermediaries" },
  { value: "8.4%", label: "Average cost to send to Africa" },
  { value: "3–5 days", label: "Average emerging-market settlement" },
];

export default function PaymentsPage() {
  return (
    <>
      <SubsidiaryHero
        channel="payments"
        eyebrow="FAVA PAYMENTS"
        title="FAVA's cross-border payments platform, powered by Rebasive."
        description="Send, hold, spend, and settle in 130+ currencies across 180+ countries — licensed in Nigeria, the US, and Canada, with the UK in progress."
        primary={{
          href: "https://rebasive.com",
          label: "Launch Rebasive",
          external: true,
        }}
        secondary={{ href: "/contact", label: "Partnership enquiries" }}
      />

      <StatsStrip
        stats={[
          { value: "180+", label: "Payout countries" },
          { value: "130+", label: "Currencies" },
          { value: "3", label: "Operational licences" },
          { value: "~$11M", label: "TPV to date", accent: true },
        ]}
      />

      <SubNav items={navItems} variant="payments" />

      <section id="capabilities" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">WHAT YOU GET</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Everything you need to move money across borders.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <Card key={cap.title} accent="payments">
                <h3 className="text-primary">{cap.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {cap.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="process"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">HOW IT WORKS</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Three steps. That&rsquo;s it.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {steps.map((step) => (
              <div key={step.number} className="bg-base p-10">
                <span className="text-numbers text-payments leading-none">
                  {step.number}
                </span>
                <h3 className="text-primary mt-5">{step.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="compliance" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">COMPLIANCE</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Licensed where it matters. Regulated everywhere we operate.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {licences.map((lic) => (
              <div key={lic.name} className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 ${lic.operational ? "bg-payments" : "bg-gold"}`}
                  />
                  <span className="text-caption text-secondary">
                    {lic.operational ? "Operational" : "In progress"}
                  </span>
                </div>
                <p className="text-primary">{lic.name}</p>
                <p className="text-sm-body text-tertiary">{lic.year}</p>
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
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-label text-secondary mb-6">WHY IT MATTERS</p>
              <p className="text-display text-primary">
                8.4% is what it costs to send money to Africa.
              </p>
              <p className="text-display text-payments mt-2">
                We&rsquo;re changing that.
              </p>
              <p className="text-secondary mt-8 leading-[1.7] max-w-md">
                Cross-border payments are still slow, opaque, and expensive in
                most of the world. FAVA Payments is infrastructure designed
                to close the gap &mdash; especially where the cost of moving
                money matters most.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-8">
              {opportunityStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-numbers text-primary">{stat.value}</p>
                  <p className="text-caption text-secondary mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <EcosystemConnections from="payments" links={CONNECTIONS.payments} />

      <CTAPanel
        eyebrow="GET STARTED"
        title="Move money like the rails were built for you."
        description="Open an account, plug our API into your platform, or talk to the team about partnership. Rebasive is live today."
        primary={{
          href: "https://rebasive.com",
          label: "Launch Rebasive",
          external: true,
        }}
        secondary={{ href: "/contact", label: "Partnership enquiries" }}
        variant="payments"
      />
    </>
  );
}
