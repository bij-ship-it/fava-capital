import Link from "next/link";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { WealthIcon } from "@/components/ui/SubsidiaryIcons";

const steps = [
  {
    number: "01",
    title: "Capital Deployment",
    description: "Investor capital is pooled and deployed through institutional-grade execution infrastructure.",
  },
  {
    number: "02",
    title: "Direct LP Routing",
    description: "All trades passed directly to liquidity providers.",
  },
  {
    number: "03",
    title: "Systematic Hedging",
    description: "Long and short positions neutralise directional exposure.",
  },
  {
    number: "04",
    title: "Volume Revenue",
    description: "Income from spreads and commissions on executed trades.",
  },
  {
    number: "05",
    title: "Capital Protection",
    description: "20% deployed, 80% reserve. Principal protected via reserve framework.",
  },
];

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
            <p className="text-secondary text-[15px] leading-[1.7] font-light max-w-xl mt-6">
              A managed investment fund that generates returns from trading
              volume — not market direction. Your capital works through
              institutional execution infrastructure, paid quarterly, with
              no management or performance fees. AFSL-regulated.
            </p>
            <div className="gold-rule-left w-32 mt-10" />
            <Link href="/contact" className="inline-block mt-8 text-label text-wealth link-hover">
              Inquire now &rarr;
            </Link>
          </div>
          <WealthIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
        </div>
      </section>

      {/* 20% Return Panel — Full-width commanding moment */}
      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-24 max-lg:py-16">
          <div className="flex flex-col items-center text-center">
            <p
              className="text-primary font-semibold tracking-tight"
              style={{ fontSize: "clamp(64px, 10vw, 96px)", lineHeight: 1 }}
            >
              20%
            </p>
            <p className="text-accent text-gold mt-4 text-[17px] italic">
              Net annual return
            </p>
            <div className="flex items-center gap-3 mt-10 flex-wrap justify-center">
              {["Paid quarterly", "Zero fees", "AFSL-regulated"].map(
                (item, i) => (
                  <span
                    key={item}
                    className="flex items-center gap-3 text-primary text-[13px] tracking-wide uppercase"
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

      {/* How the Strategy Works — Horizontal stepper */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pt-[120px] pb-[100px]">
        <p className="text-label text-secondary mb-16">How the Strategy Works</p>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid grid-cols-5 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-[11px] left-[calc(50%+12px)] right-0 h-px bg-border" />
              )}
              {i > 0 && (
                <div className="absolute top-[11px] right-[calc(50%+12px)] left-0 h-px bg-border" />
              )}
              {/* Step number dot */}
              <div className="relative z-10 flex items-center justify-center">
                <span className="text-numbers text-gold text-[13px] font-semibold bg-base px-2">
                  {step.number}
                </span>
              </div>
              <h3 className="text-primary text-[14px] font-medium mt-5 text-center px-2">
                {step.title}
              </h3>
              <p className="text-secondary text-[13px] leading-[1.65] font-light mt-2 text-center px-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow with gold line */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gold/30" />
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="absolute -left-8 top-[2px] w-[15px] h-[15px] border border-gold flex items-center justify-center">
                  <span className="w-[5px] h-[5px] bg-gold" />
                </span>
                <span className="text-numbers text-gold text-[12px] font-semibold">
                  {step.number}
                </span>
                <h3 className="text-primary text-[14px] font-medium mt-1">
                  {step.title}
                </h3>
                <p className="text-secondary text-[13px] leading-[1.65] font-light mt-1 max-w-md">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Terms — 2-column card grid on bg-surface */}
      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[100px]">
          <p className="text-label text-secondary mb-12">Investment Terms</p>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-border">
            {investmentTerms.map((term) => (
              <div key={term.label} className="bg-surface p-6">
                <p className="text-caption text-secondary text-[11px] uppercase tracking-wider mb-2">
                  {term.label}
                </p>
                <p className="text-primary text-[17px] font-light">
                  {term.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative Returns — Visual conversion table */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[120px]">
        <p className="text-label text-secondary mb-12">Illustrative Returns</p>

        <div className="bg-surface border border-border">
          <div className="border-l-2 border-wealth">
            {/* Table header */}
            <div className="grid grid-cols-3 px-8 max-md:px-5 py-5 border-b border-border">
              <span className="text-caption text-secondary text-[11px] uppercase tracking-wider">
                Investment
              </span>
              <span className="text-caption text-secondary text-[11px] uppercase tracking-wider text-right">
                Quarterly
              </span>
              <span className="text-caption text-secondary text-[11px] uppercase tracking-wider text-right">
                Annual
              </span>
            </div>

            {/* Table rows — increasing visual weight */}
            {illustrativeReturns.map((row, i) => {
              const scale = 15 + i * 1.5;
              const opacity = 0.7 + i * 0.1;
              return (
                <div
                  key={row.investment}
                  className={`grid grid-cols-3 px-8 max-md:px-5 items-center ${
                    i < illustrativeReturns.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                  style={{ paddingTop: "18px", paddingBottom: "18px" }}
                >
                  <span
                    className="text-primary font-light"
                    style={{ fontSize: `${scale}px`, opacity }}
                  >
                    {row.investment}
                  </span>
                  <span
                    className="text-primary font-light text-right"
                    style={{ fontSize: `${scale}px`, opacity }}
                  >
                    {row.quarterly}
                  </span>
                  <span
                    className="text-gold font-medium text-right"
                    style={{ fontSize: `${scale + 1}px` }}
                  >
                    {row.annual}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-secondary text-[12px] font-light mt-5 italic">
          Based on target 20% net annual return. Past performance is not indicative of future results.
        </p>
      </section>

      {/* CTA Section — Full-width conversion panel */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[120px]">
          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            <div className="w-12 h-px bg-gold mb-10" />
            <h2 className="text-display-alt text-primary text-[28px] max-md:text-[22px]">
              Start your investment journey
            </h2>
            <p className="text-secondary text-[15px] leading-[1.7] font-light mt-5 mb-10">
              For qualified investors seeking consistent, volume-based returns
              with full transparency and quarterly distributions.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-wealth text-wealth text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-wealth/10 transition-colors"
            >
              Investor Enquiries
            </Link>
            <p className="text-tertiary text-[12px] tracking-wide mt-8">
              Minimum $250,000 USD &middot; Quarterly liquidity &middot; Zero
              fees
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
