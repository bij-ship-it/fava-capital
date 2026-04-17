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

const opportunityStats = [
  { value: "$190T", label: "Annual Cross-Border Flows" },
  { value: "$400B+", label: "Fees Extracted by Intermediaries" },
  { value: "8.4%", label: "Avg Cost to Send to Africa" },
  { value: "3–5 Days", label: "Avg Emerging Market Settlement" },
];

const structuralDrivers = [
  {
    title: "Banking Retreat",
    body: "Correspondent relationships contracting across emerging markets.",
  },
  {
    title: "Stablecoin Maturity",
    body: "$170B+ market cap. Settlement infrastructure ready at scale.",
  },
  {
    title: "Regulatory Clarity",
    body: "MiCA, GENIUS Act, IMTO frameworks now codified.",
  },
  {
    title: "Embedded Finance",
    body: "Platforms require plug-and-play cross-border access.",
  },
];

const licences = [
  { licence: "Nigerian Tier-1 MFB", status: "Operational", statusColor: "text-green-400", year: "2021" },
  { licence: "US FinCEN MSB", status: "Operational", statusColor: "text-green-400", year: "2023" },
  { licence: "Canadian FINTRAC MSB", status: "Operational", statusColor: "text-green-400", year: "2023" },
  { licence: "UK EMI Licence", status: "In Progress", statusColor: "text-gold", year: "2026" },
];

const platformCapabilities = [
  "Cross-border payments and collections",
  "Multi-currency wallets and accounts",
  "FX conversion and treasury routing",
  "Virtual account infrastructure (IBANs, local rails)",
  "Card issuance and transaction processing",
  "API and white-label integration",
];

const brokerageFeatures = [
  "Multi-currency wallets",
  "Cross-border transfers",
  "Card spending",
  "Savings and investment products",
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
      <section className="border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 ${
                  i < stats.length - 1
                    ? "md:border-r border-border"
                    : ""
                } ${i % 2 === 0 && i < 2 ? "max-md:border-r" : ""} ${
                  i < 2 ? "max-md:border-b border-border" : ""
                }`}
              >
                <div className={i > 0 ? "md:pl-10" : ""}>
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

      {/* The Opportunity */}
      <section className="py-[140px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">THE OPPORTUNITY</p>
          <h2 className="text-subhead text-primary max-w-xl mb-6">
            Correspondent banking is retreating.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.75] mb-16">
            Africa has lost 10% of correspondent banking relationships in three
            years. Cross-border payment infrastructure is fragmenting just as
            demand accelerates.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 mb-20">
            {opportunityStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-numbers text-primary">{stat.value}</p>
                <p className="text-caption text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="gold-rule mb-10" />
          <p className="text-label text-secondary mb-10">STRUCTURAL DRIVERS</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {structuralDrivers.map((driver) => (
              <div key={driver.title}>
                <div className="w-8 h-[2px] bg-[#0EA5E9] mb-6" />
                <h3 className="text-[15px] text-primary font-light mb-3">
                  {driver.title}
                </h3>
                <p className="text-[14px] text-secondary leading-[1.75]">
                  {driver.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Footprint & Platform Capabilities */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col md:flex-row gap-20">
            {/* Regulatory Footprint */}
            <div className="flex-1">
              <p className="text-label text-secondary mb-4">REGULATORY FOOTPRINT</p>
              <h2 className="text-subhead text-primary mb-12">
                Licensed across three continents.
              </h2>

              <div className="border-t border-border">
                <div className="grid grid-cols-[1fr_auto_auto] gap-x-8 py-4 border-b border-border">
                  <p className="text-label text-tertiary">LICENCE</p>
                  <p className="text-label text-tertiary">STATUS</p>
                  <p className="text-label text-tertiary">YEAR</p>
                </div>
                {licences.map((lic) => (
                  <div
                    key={lic.licence}
                    className="grid grid-cols-[1fr_auto_auto] gap-x-8 py-4 border-b border-border items-center"
                  >
                    <p className="text-[14px] text-primary">{lic.licence}</p>
                    <p className={`text-[14px] ${lic.statusColor}`}>{lic.status}</p>
                    <p className="text-[14px] text-secondary">{lic.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Capabilities */}
            <div className="md:w-[380px] shrink-0">
              <p className="text-label text-secondary mb-4">PLATFORM CAPABILITIES</p>
              <div className="flex flex-col gap-4 mt-12">
                {platformCapabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-payments mt-2 shrink-0" />
                    <span className="text-[14px] text-primary/70">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">PRICING</p>
          <h2 className="text-subhead text-primary mb-6 max-w-lg">
            Transparent, competitive rates. No hidden fees.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.75] mb-12">
            Rebasive earns from small margins on FX conversion and transaction
            fees — not from hidden markups or predatory pricing. What you see is
            what you pay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-numbers text-primary">0.4–0.8%</p>
              <p className="text-caption text-secondary mt-2">FX conversion spread</p>
            </div>
            <div>
              <p className="text-numbers text-primary">0–1%</p>
              <p className="text-caption text-secondary mt-2">Transfer fees</p>
            </div>
            <div>
              <p className="text-numbers text-primary">$0</p>
              <p className="text-caption text-secondary mt-2">Account maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brokerage Integration */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">BROKERAGE INTEGRATION</p>
          <h2 className="text-subhead text-primary mb-6 max-w-xl">
            Rails that extend the brokerage.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.75] mb-12">
            Rebasive rails integrate into FAVA Markets, extending the brokerage
            into a complete financial services environment.
          </p>

          <p className="text-label text-secondary mb-6">CLIENTS ACCESS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brokerageFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-payments mt-2 shrink-0" />
                <span className="text-[14px] text-primary/70">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-[140px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <h2 className="text-display-alt text-primary max-w-[560px]">
            The rails underneath the ecosystem.
          </h2>
          <p className="text-secondary mt-6 max-w-[440px] leading-[1.7]">
            Cross-border settlement infrastructure for consumers, businesses,
            and platforms &mdash; licensed, operational, and scaling.
          </p>
          <div className="mt-10 flex items-center gap-8">
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
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
