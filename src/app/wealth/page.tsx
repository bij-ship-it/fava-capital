import Link from "next/link";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

const strategies = [
  {
    title: "Multi-Strategy Allocation",
    description: "A diversified approach spanning global equities, fixed income, alternatives, and digital assets — dynamically weighted to capture asymmetric opportunities.",
  },
  {
    title: "Conviction-Driven Selection",
    description: "High-conviction positions informed by deep fundamental research, macro analysis, and proprietary quantitative signals. Quality over quantity.",
  },
  {
    title: "Risk-Managed Compounding",
    description: "Systematic drawdown controls, correlation monitoring, and volatility-targeting ensure capital preservation remains the foundation of every allocation decision.",
  },
];

const keyTerms = [
  { label: "Fund Structure", value: "Open-ended UCITS (Lux)" },
  { label: "Minimum Investment", value: "$250,000" },
  { label: "Management Fee", value: "1.5% p.a." },
  { label: "Performance Fee", value: "15% (HWM)" },
  { label: "Liquidity", value: "Monthly (30-day notice)" },
  { label: "Currency", value: "USD / GBP / EUR" },
];

const navLinks = [
  { title: "Strategy", description: "Our investment philosophy and approach", href: "/wealth/strategy" },
  { title: "Performance", description: "Track record and historical returns", href: "/wealth/performance" },
  { title: "Key Terms", description: "Fund structure, fees, and liquidity", href: "/wealth/terms" },
  { title: "Invest", description: "Begin the onboarding process", href: "/wealth/invest" },
];

export default function WealthPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <ChannelBadge name="FAVA WEALTH" color="#059669" />
        <h1 className="text-display-alt text-primary">
          Patient Capital. Compounding Returns.
        </h1>
        <p className="text-secondary text-[15px] leading-[1.7] font-light max-w-xl mt-6">
          A multi-strategy, conviction-driven investment fund designed for long-term capital
          appreciation through disciplined allocation and rigorous risk management.
        </p>
        <div className="gold-rule-left w-32 mt-10" />
      </section>

      {/* Strategy Overview */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Strategy</p>

        <div className="flex flex-col gap-12">
          {strategies.map((strategy) => (
            <div key={strategy.title} className="max-w-2xl">
              <h3 className="text-subhead text-primary mb-3">{strategy.title}</h3>
              <p className="text-primary/60 text-[15px] leading-[1.7] font-light">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Performance */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Performance</p>

        <div className="bg-surface border border-border p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {[
              { label: "YTD Return", value: "+8.4%" },
              { label: "Since Inception", value: "+24.7%" },
              { label: "Sharpe Ratio", value: "1.62" },
              { label: "Max Drawdown", value: "-6.3%" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-numbers text-primary">{stat.value}</p>
                <p className="text-caption text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-secondary/50 text-[11px] leading-relaxed">
            Past performance is not indicative of future results. All figures are placeholder estimates for illustrative purposes only.
          </p>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Key Terms */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Key Terms</p>

        <table className="w-full max-w-2xl">
          <tbody>
            {keyTerms.map((term, i) => (
              <tr
                key={term.label}
                className={i < keyTerms.length - 1 ? "border-b border-border" : ""}
              >
                <td className="py-4 text-secondary text-[15px] font-light pr-8">{term.label}</td>
                <td className="py-4 text-primary text-[15px] font-light text-right">{term.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Navigation */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Explore</p>

        <div className="flex flex-col">
          {navLinks.map((link, i) => (
            <Link
              key={link.title}
              href={link.href}
              className={`py-6 flex items-center justify-between group ${
                i < navLinks.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div>
                <h3 className="text-subhead text-primary group-hover:text-wealth transition-colors duration-200">
                  {link.title}
                </h3>
                <p className="text-secondary text-[15px] font-light mt-1">{link.description}</p>
              </div>
              <span className="text-secondary group-hover:text-wealth transition-colors duration-200 shrink-0 ml-8">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <h2 className="text-subhead text-primary mb-4">Start Compounding</h2>
        <p className="text-primary/60 text-[15px] leading-[1.7] font-light max-w-lg mb-8">
          For qualified investors seeking long-term capital appreciation through a disciplined,
          multi-strategy approach. Minimum investment $250,000.
        </p>
        <Link href="/wealth/invest" className="link-hover text-wealth text-label">
          Get Started &rarr;
        </Link>
      </section>
    </div>
  );
}
