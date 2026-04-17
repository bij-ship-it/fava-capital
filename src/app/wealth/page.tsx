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
          </div>
          <WealthIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
        </div>
      </section>

      {/* Key Highlight Panel */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <div className="bg-surface border border-border p-10">
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <div>
              <p className="text-primary font-semibold" style={{ fontSize: "72px", lineHeight: 1 }}>
                20%
              </p>
              <p className="text-accent text-primary mt-3">Net annual return</p>
            </div>
            <div className="flex flex-col gap-2 pb-1">
              <p className="text-caption text-primary">Paid quarterly &middot; Zero fees</p>
              <p className="text-caption text-secondary">AFSL-regulated framework</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* How the Strategy Works */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">How the Strategy Works</p>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex items-start gap-8 py-8 ${
                i < steps.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="text-gold font-semibold text-[15px] shrink-0 w-8">
                {step.number}
              </span>
              <div className="max-w-2xl">
                <h3 className="text-subhead text-primary mb-2">{step.title}</h3>
                <p className="text-primary/60 text-[15px] leading-[1.7] font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Investment Terms */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Investment Terms</p>

        <table className="w-full max-w-2xl">
          <tbody>
            {investmentTerms.map((term, i) => (
              <tr
                key={term.label}
                className={i < investmentTerms.length - 1 ? "border-b border-border" : ""}
              >
                <td className="py-4 text-secondary text-[15px] font-light pr-8">{term.label}</td>
                <td className="py-4 text-primary text-[15px] font-light text-right">
                  {term.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Illustrative Returns */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Illustrative Returns</p>

        <table className="w-full max-w-3xl">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-4 text-left text-caption text-secondary font-normal">
                Investment
              </th>
              <th className="pb-4 text-right text-caption text-secondary font-normal">
                Quarterly
              </th>
              <th className="pb-4 text-right text-caption text-secondary font-normal">Annual</th>
            </tr>
          </thead>
          <tbody>
            {illustrativeReturns.map((row, i) => (
              <tr
                key={row.investment}
                className={i < illustrativeReturns.length - 1 ? "border-b border-border" : ""}
              >
                <td className="py-4 text-primary text-[15px] font-light">{row.investment}</td>
                <td className="py-4 text-primary text-[15px] font-light text-right">
                  {row.quarterly}
                </td>
                <td className="py-4 text-gold text-[15px] font-light text-right">{row.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <h2 className="text-subhead text-primary mb-4">Yield-generating managed fund.</h2>
        <p className="text-primary/60 text-[15px] leading-[1.7] font-light max-w-lg mb-8">
          For qualified investors seeking consistent, volume-based returns with zero fees and
          quarterly distributions. Minimum investment $250,000 USD.
        </p>
        <Link href="/contact" className="link-hover text-wealth text-label">
          Investor Enquiries &rarr;
        </Link>
      </section>
    </div>
  );
}
