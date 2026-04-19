import type { Metadata } from "next";
import Link from "next/link";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { WealthIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "Wealth",
  description:
    "FAVA Wealth — a multi-strategy managed fund offering institutional-grade investing for long-horizon investors.",
};

const investmentTerms = [
  { label: "Target Return", value: "20% per annum" },
  { label: "Distributions", value: "Quarterly" },
  { label: "Minimum Investment", value: "$250,000 USD" },
  { label: "Initial Lock-in", value: "12 months" },
  { label: "Liquidity Post-Lock", value: "Quarterly" },
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
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <div className="flex items-start justify-between gap-12">
          <div className="flex-1">
            <ChannelBadge name="FAVA WEALTH" color="#059669" />
            <h1 className="text-display-alt text-primary">
              20% Annual Returns. Zero Fees.
            </h1>
            <p className="text-secondary leading-[1.7] max-w-xl mt-6">
              A managed investment fund that generates returns from trading
              volume — not market direction. Your capital works through
              institutional execution infrastructure, paid quarterly, with
              no management or performance fees. AFSL-regulated.
            </p>
            <Link href="/contact" className="inline-block mt-10 text-label text-wealth link-hover">
              Inquire now &rarr;
            </Link>
          </div>
          <WealthIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
        </div>
      </section>

      {/* 20% Strip — compact, impactful */}
      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-10">
          <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
            <div className="flex items-baseline gap-5">
              <span
                className="text-primary font-semibold tracking-tight"
                style={{ fontSize: "clamp(48px, 7vw, 64px)", lineHeight: 1 }}
              >
                20%
              </span>
              <span className="text-accent text-gold">Net annual return</span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {["Paid quarterly", "Zero fees", "AFSL-regulated"].map(
                (item, i) => (
                  <span
                    key={item}
                    className="flex items-center gap-3 text-secondary text-[12px] tracking-wide uppercase"
                  >
                    {i > 0 && (
                      <span className="w-1 h-1 bg-gold inline-block" />
                    )}
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How it works + Terms — side by side */}
      <section className="py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left — How the strategy works */}
            <div className="flex-1">
              <p className="text-label text-secondary mb-8">How the Strategy Works</p>
              <div className="bg-surface p-8">
                <div className="flex flex-col gap-0">
                  {[
                    { title: "Capital Deployment", desc: "Investor capital is pooled and deployed through institutional-grade execution." },
                    { title: "Direct LP Routing", desc: "All trades passed directly to tier-1 liquidity providers." },
                    { title: "Systematic Hedging", desc: "Long and short positions neutralise directional exposure." },
                    { title: "Volume Revenue", desc: "Income generated from spreads and commissions on executed trades." },
                    { title: "Capital Protection", desc: "20% deployed, 80% held in reserve. Principal protected." },
                  ].map((step, i) => (
                    <div
                      key={step.title}
                      className={`flex items-start gap-5 py-5 ${
                        i > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <span className="text-gold text-caption mt-0.5 shrink-0 w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-primary text-[14px] font-medium">{step.title}</p>
                        <p className="text-secondary text-[13px] leading-[1.7] mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Investment Terms */}
            <div className="lg:w-[420px] shrink-0">
              <p className="text-label text-secondary mb-8">Investment Terms</p>
              <div className="bg-surface">
                {investmentTerms.map((term, i) => (
                  <div
                    key={term.label}
                    className={`flex items-center justify-between px-8 py-5 ${
                      i > 0 ? "border-t border-border" : ""
                    }`}
                  >
                    <span className="text-secondary text-[13px]">{term.label}</span>
                    <span className="text-primary text-[14px] text-right">{term.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Returns */}
      <section className="pb-[100px] max-md:pb-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-8">Illustrative Returns</p>

          <div className="bg-surface border-l-2 border-l-wealth">
            {/* Header */}
            <div className="grid grid-cols-3 px-8 max-md:px-5 py-4 border-b border-border">
              <span className="text-caption text-secondary">Investment</span>
              <span className="text-caption text-secondary text-right">Quarterly</span>
              <span className="text-caption text-secondary text-right">Annual</span>
            </div>

            {/* Rows */}
            {illustrativeReturns.map((row, i) => (
              <div
                key={row.investment}
                className={`grid grid-cols-3 px-8 max-md:px-5 py-5 ${
                  i < illustrativeReturns.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-primary">{row.investment}</span>
                <span className="text-secondary text-right">{row.quarterly}</span>
                <span className="text-gold text-right">{row.annual}</span>
              </div>
            ))}
          </div>

          <p className="text-tertiary text-[12px] mt-4 italic">
            Based on target 20% net annual return. Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-[140px] max-md:pb-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="bg-surface p-14 max-lg:p-8 text-center">
          <h2 className="text-display-alt text-primary">
            Start your investment journey
          </h2>
          <p className="text-caption text-secondary mb-10 mt-5 tracking-wide">
            Minimum $250,000 USD &middot; Quarterly liquidity &middot; Zero fees
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="inline-block border border-wealth text-wealth text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-wealth/10 transition-colors"
            >
              Investor Enquiries
            </Link>
            <Link
              href="/about"
              className="text-label text-secondary link-hover hover:text-primary transition-colors"
            >
              About FAVA Capital &rarr;
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
