import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { PaymentsIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "FAVA Payments — Cross-Border Payments & Settlement Infrastructure | FAVA Capital",
  description:
    "Dual-rail settlement platform combining regulated fiat corridors with tokenised settlement. Licensed in Nigeria, US, and Canada. Powered by Rebasive.",
};

const stats = [
  { value: "180+", label: "PAYOUT COUNTRIES" },
  { value: "130+", label: "CURRENCIES" },
  { value: "25", label: "AFRICAN MARKETS" },
  { value: "~$11M", label: "TPV TO DATE" },
];

const capabilities = [
  {
    title: "Send Money Globally",
    description:
      "Transfer funds to 180+ countries with competitive rates and real-time tracking. Fast settlement, no hidden fees.",
  },
  {
    title: "Multi-Currency Accounts",
    description:
      "Hold, convert, and manage balances in 130+ currencies. One account, multiple currencies, instant conversion.",
  },
  {
    title: "Cards & Wallets",
    description:
      "Virtual and physical cards for everyday spending. Fund from any wallet, spend anywhere cards are accepted.",
  },
  {
    title: "Business API",
    description:
      "Integrate payments directly into your platform. RESTful API with webhooks, batch payouts, and white-label options.",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in minutes with simple verification.",
  },
  {
    number: "02",
    title: "Fund Your Account",
    description: "Deposit via bank transfer, card, or crypto rails.",
  },
  {
    number: "03",
    title: "Send Anywhere",
    description: "Move money to 180+ countries at transparent rates.",
  },
];

const licences = [
  { name: "Nigerian Tier-1 MFB", operational: true, year: "2021" },
  { name: "US FinCEN MSB", operational: true, year: "2023" },
  { name: "Canadian FINTRAC MSB", operational: true, year: "2023" },
  { name: "UK EMI Licence", operational: false, year: "2026" },
];

const opportunityStats = [
  { value: "$190T", label: "Annual Cross-Border Flows" },
  { value: "$400B+", label: "Fees Extracted by Intermediaries" },
  { value: "8.4%", label: "Avg Cost to Send to Africa" },
  { value: "3–5 Days", label: "Avg Emerging Market Settlement" },
];

const brokerageItems = [
  "Multi-currency wallets for trading and spending",
  "Instant cross-border transfers between accounts",
  "Card issuance linked to brokerage balances",
  "Integrated savings and investment products",
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-base">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <ChannelBadge name="FAVA PAYMENTS" color="#0EA5E9" />
              <h1 className="text-display-alt text-primary">
                Cross-Border Payments &amp; Settlement Infrastructure
              </h1>
              <p className="mt-6 text-secondary max-w-[560px] leading-[1.75]">
                A dual-rail settlement platform combining regulated fiat
                corridors with tokenised settlement. Powered by{" "}
                <Link
                  href="https://rebasive.com"
                  target="_blank"
                  className="text-payments link-hover"
                >
                  Rebasive
                </Link>
                , our consumer and business-facing payments platform.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <Link
                  href="https://rebasive.com"
                  target="_blank"
                  className="text-label text-payments link-hover"
                >
                  Visit Rebasive &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="text-label text-secondary link-hover transition-colors hover:text-primary"
                >
                  Partnership enquiries
                </Link>
              </div>
            </div>
            <PaymentsIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 ${
                  i < stats.length - 1 ? "md:border-r border-border" : ""
                } ${i % 2 === 0 && i < 2 ? "max-md:border-r" : ""} ${
                  i < 2 ? "max-md:border-b border-border" : ""
                }`}
              >
                <div className={i > 0 ? "md:pl-10" : ""}>
                  <div className="w-8 h-[2px] bg-payments mb-5" />
                  <p className="text-numbers text-primary">{stat.value}</p>
                  <p className="text-caption text-secondary mt-2">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Rebasive Does */}
      <section className="py-[120px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-payments mb-4">WHAT YOU GET</p>
          <h2 className="text-subhead text-primary max-w-xl mb-16">
            Everything you need to move money across borders.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-surface border border-border p-10"
              >
                <div className="w-10 h-[2px] bg-payments mb-6" />
                <h3 className="text-primary mb-3">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-secondary leading-[1.75]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[120px] max-md:py-20">
          <p className="text-label text-payments mb-4">HOW IT WORKS</p>
          <h2 className="text-subhead text-primary mb-16">
            Three steps. That&rsquo;s it.
          </h2>

          <div className="bg-surface border border-border p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative ${
                    i < steps.length - 1
                      ? "md:border-r border-border md:pr-10"
                      : ""
                  } ${i > 0 ? "md:pl-10" : ""} ${
                    i < steps.length - 1
                      ? "max-md:border-b max-md:pb-10"
                      : ""
                  }`}
                >
                  <span className="text-numbers text-payments leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-primary mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-secondary leading-[1.75]">
                    {step.description}
                  </p>
                </div>
              ))}

              {/* Connecting lines — desktop only */}
              <div className="hidden md:block absolute top-5 left-[33.33%] w-[2px] h-3 bg-payments -translate-x-[1px]" />
              <div className="hidden md:block absolute top-5 left-[66.66%] w-[2px] h-3 bg-payments -translate-x-[1px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Trust */}
      <section className="bg-surface border-t border-b border-border py-[80px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-payments mb-4">COMPLIANCE</p>
          <h2 className="text-subhead text-primary mb-14">
            Licensed &amp; Regulated
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {licences.map((lic) => (
              <div key={lic.name} className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2 h-2 ${
                      lic.operational ? "bg-green-400" : "bg-gold"
                    }`}
                  />
                  <span className="text-[12px] text-secondary uppercase tracking-wider">
                    {lic.operational ? "Operational" : "In Progress"}
                  </span>
                </div>
                <p className="text-primary">
                  {lic.name}
                </p>
                <p className="text-[13px] text-tertiary">{lic.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity Context */}
      <section className="py-[120px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20 items-start">
            {/* Left — narrative */}
            <div className="flex-1">
              <p className="text-label text-payments mb-6">WHY IT MATTERS</p>
              <p className="text-display text-primary">
                8.4% is what it costs to send money to Africa.
              </p>
              <p className="text-display text-payments mt-1">
                We&rsquo;re changing that.
              </p>
            </div>

            {/* Right — stats */}
            <div className="md:w-[440px] shrink-0 grid grid-cols-2 gap-x-12 gap-y-10">
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
        </div>
      </section>

      {/* Brokerage Integration */}
      <section className="border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[120px] max-md:py-20">
          <div className="bg-surface border border-border p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-14 md:gap-20">
              {/* Left */}
              <div className="flex-1">
                <p className="text-label text-payments mb-4">
                  BROKERAGE INTEGRATION
                </p>
                <h2 className="text-subhead text-primary mb-4">
                  One account. Trading + Payments.
                </h2>
                <p className="text-[14px] text-secondary leading-[1.75] max-w-md">
                  Rebasive rails integrate directly into FAVA Markets, giving
                  brokerage clients a complete financial services environment
                  from a single account.
                </p>
              </div>

              {/* Right */}
              <div className="md:w-[380px] shrink-0 flex flex-col gap-5">
                <p className="text-label text-secondary mb-1">
                  CLIENTS ACCESS
                </p>
                {brokerageItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-payments mt-2 shrink-0" />
                    <span className="text-[14px] text-primary/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-border py-[120px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 text-center">
          <h2 className="text-display-alt text-primary">
            Move money. Everywhere.
          </h2>
          <p className="text-secondary mt-6 max-w-[480px] mx-auto leading-[1.75]">
            Licensed in three jurisdictions. Live in 180+ countries. Transparent
            rates. No hidden fees.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="https://rebasive.com"
              target="_blank"
              className="inline-block border border-payments text-payments text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-payments/10 transition-colors"
            >
              Visit Rebasive
            </Link>
            <Link
              href="/contact"
              className="text-label text-secondary link-hover transition-colors hover:text-primary"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
