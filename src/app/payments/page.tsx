import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { PaymentsIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "FAVA Payments — Move Money. Everywhere. | FAVA Capital",
  description:
    "Global payment infrastructure powered by Rebasive. Licensed in Africa, the USA, and Canada. Cards, wallets, cross-border transfers, and multi-currency accounts.",
};

const capabilities = [
  {
    title: "Multi-Currency Accounts",
    body: "Hold, send, and receive in 30+ currencies. Seamless conversion at interbank rates with no hidden markups. Personal and business accounts with full IBAN support.",
  },
  {
    title: "Cross-Border Transfers",
    body: "Send money across borders in minutes, not days. Direct corridors into Africa, North America, and Europe with transparent fees and real-time tracking.",
  },
  {
    title: "Cards & Wallets",
    body: "Physical and virtual cards linked to your Rebasive account. Spend globally, earn cashback, and manage everything from one app. Apple Pay and Google Pay ready.",
  },
  {
    title: "Business Payments",
    body: "Payroll, vendor payments, and treasury management for businesses operating across borders. API-first infrastructure for platforms that need to move money programmatically.",
  },
];

const licences = [
  {
    region: "Africa",
    detail: "Licensed payment service provider across key African markets. Local currency settlement, mobile money interoperability, and agent network access.",
  },
  {
    region: "United States",
    detail: "Money transmitter licences across regulated US states. Compliant with FinCEN requirements, BSA/AML frameworks, and state-level regulatory obligations.",
  },
  {
    region: "Canada",
    detail: "Registered money services business (MSB) with FINTRAC. Authorised to provide foreign exchange dealing, money transfer, and payment services nationwide.",
  },
];

const platformFeatures = [
  { label: "Currencies", value: "30+" },
  { label: "Transfer corridors", value: "50+" },
  { label: "API uptime", value: "99.99%" },
  { label: "Avg. transfer time", value: "<2 min" },
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
                Move Money. Everywhere.
              </h1>
              <p className="mt-6 text-secondary max-w-[560px] leading-[1.75]">
                FAVA Payments operates{" "}
                <Link
                  href="https://rebasive.com"
                  target="_blank"
                  className="text-payments link-hover"
                >
                  Rebasive
                </Link>
                {" "}&mdash; our global payment platform. Licensed in Africa, the United
                States, and Canada. Multi-currency accounts, cross-border transfers,
                cards, and wallets — built for people and businesses that move money
                across borders.
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

      {/* Platform Stats */}
      <section className="border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {platformFeatures.map((feat, i) => (
              <div
                key={feat.label}
                className={`py-10 ${
                  i < platformFeatures.length - 1
                    ? "md:border-r border-border"
                    : ""
                } ${i % 2 === 0 && i < 2 ? "max-md:border-r" : ""} ${
                  i < 2 ? "max-md:border-b border-border" : ""
                }`}
              >
                <div className={i > 0 ? "md:pl-10" : ""}>
                  <p className="text-numbers text-primary">{feat.value}</p>
                  <p className="text-caption text-secondary mt-2">
                    {feat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-[140px] max-md:py-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-20">
            <div>
              <p className="text-label text-secondary mb-4">CAPABILITIES</p>
              <h2 className="text-subhead text-primary max-w-md">
                Everything you need to move money globally.
              </h2>
            </div>
            <p className="text-secondary max-w-sm text-[14px] leading-[1.7] md:pt-8">
              Rebasive is the platform. FAVA Payments is the infrastructure,
              licensing, and regulatory backbone that makes it possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {capabilities.map((cap) => (
              <div key={cap.title}>
                <div className="w-8 h-[2px] bg-[#0EA5E9] mb-6" />
                <h3 className="text-[15px] text-primary font-light mb-3">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-secondary leading-[1.75]">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">LICENSING</p>
          <h2 className="text-subhead text-primary mb-16 max-w-lg">
            Regulated across three continents.
          </h2>

          <div className="border-t border-border">
            {licences.map((lic) => (
              <div
                key={lic.region}
                className="py-8 border-b border-border flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
              >
                <h3 className="text-subhead text-primary md:w-48 shrink-0">
                  {lic.region}
                </h3>
                <p className="text-[14px] text-secondary leading-[1.75]">
                  {lic.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebasive Platform */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">THE PLATFORM</p>
          <h2 className="text-subhead text-primary mb-6 max-w-lg">
            Rebasive &mdash; payments infrastructure for the next billion.
          </h2>
          <p className="text-secondary max-w-xl leading-[1.75] mb-12">
            Rebasive is the consumer and business-facing product powering FAVA
            Payments. A modern fintech platform — think Revolut — with
            multi-currency accounts, instant transfers, physical and virtual
            cards, and an API for businesses that need to move money at scale.
            Available at{" "}
            <Link
              href="https://rebasive.com"
              target="_blank"
              className="text-payments link-hover"
            >
              rebasive.com
            </Link>
            .
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              "Multi-currency accounts",
              "Physical & virtual cards",
              "Cross-border transfers",
              "Mobile money corridors",
              "Business API",
              "Real-time FX",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-payments rounded-full mt-2 shrink-0" />
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
            Ready to move money differently?
          </h2>
          <p className="text-secondary mt-6 max-w-[440px] leading-[1.7]">
            Whether you&apos;re a consumer, a business, or a platform — Rebasive
            has the infrastructure to power your payments.
          </p>
          <div className="mt-10 flex items-center gap-8">
            <Link
              href="https://rebasive.com"
              target="_blank"
              className="text-label text-payments link-hover"
            >
              Get started on Rebasive &rarr;
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
