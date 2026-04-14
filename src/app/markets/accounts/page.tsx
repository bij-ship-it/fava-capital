import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Types — FAVA Markets",
  description:
    "Choose from Standard, Professional, or Institutional accounts. Competitive conditions tailored to your trading needs.",
};

const tiers = [
  {
    name: "Standard",
    description: "For retail traders seeking competitive conditions with no commission on forex.",
    highlighted: false,
    features: {
      "Min Deposit": "$100",
      "Max Leverage": "1:500",
      "Spreads From": "1.0 pips",
      Commission: "None",
      "Execution Type": "STP",
      "Dedicated Manager": "No",
      Platforms: "MT4, MT5, WebTrader",
      "Minimum Trade Size": "0.01 lots",
      "Stop Out Level": "50%",
      "Deposit Methods": "Card, Wire, Crypto",
    },
    cta: "Open Standard Account",
  },
  {
    name: "Professional",
    description: "Raw spreads and low commissions for experienced, high-volume traders.",
    highlighted: true,
    features: {
      "Min Deposit": "$5,000",
      "Max Leverage": "1:500",
      "Spreads From": "0.0 pips",
      Commission: "$3.50 / lot",
      "Execution Type": "ECN",
      "Dedicated Manager": "Yes",
      Platforms: "MT4, MT5, WebTrader",
      "Minimum Trade Size": "0.01 lots",
      "Stop Out Level": "30%",
      "Deposit Methods": "Card, Wire, Crypto",
    },
    cta: "Open Professional Account",
  },
  {
    name: "Institutional",
    description: "Bespoke liquidity, dedicated infrastructure, and white-glove service.",
    highlighted: false,
    features: {
      "Min Deposit": "$50,000",
      "Max Leverage": "1:500",
      "Spreads From": "0.0 pips",
      Commission: "$2.00 / lot",
      "Execution Type": "ECN / DMA",
      "Dedicated Manager": "Senior Account Manager",
      Platforms: "MT4, MT5, WebTrader, FIX API",
      "Minimum Trade Size": "0.1 lots",
      "Stop Out Level": "20%",
      "Deposit Methods": "Wire, Crypto",
    },
    cta: "Contact Institutional Desk",
  },
];

export default function AccountsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-4">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light text-ivory">
            Account Types
          </h1>
          <p className="mt-4 text-platinum/60 max-w-2xl mx-auto text-lg">
            Three tiers designed for every level of trader. Scale your account as you grow.
          </p>
        </div>

        {/* Account Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-sm p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-obsidian/60 border-2 border-fx-teal/40 relative"
                  : "bg-obsidian/40 border border-white/5"
              } hover:border-fx-teal/30 transition-colors duration-300`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fx-teal text-void text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider px-4 py-1 rounded-sm">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory font-medium">
                  {tier.name}
                </h2>
                <p className="mt-2 text-platinum/60 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 space-y-0">
                {Object.entries(tier.features).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-platinum/50 text-sm">{key}</span>
                    <span
                      className={`text-sm font-medium ${
                        key === "Spreads From" || key === "Commission"
                          ? "text-fx-teal"
                          : "text-ivory"
                      }`}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`mt-8 block text-center rounded-sm px-6 py-3 font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 ${
                  tier.highlighted
                    ? "bg-fx-teal text-void hover:bg-fx-teal/80 font-medium"
                    : "border border-fx-teal/30 text-fx-teal hover:bg-fx-teal/10"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-obsidian/30 border border-white/5 rounded-sm p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory font-medium mb-4">
              Demo Account
            </h3>
            <p className="text-platinum/60 text-sm leading-relaxed mb-4">
              Not ready to trade live? Practice with $100,000 in virtual funds. Full platform access,
              real market conditions, zero risk.
            </p>
            <Link
              href="/contact"
              className="inline-block text-fx-teal text-sm font-[family-name:var(--font-heading)] hover:underline"
            >
              Open Demo Account &rarr;
            </Link>
          </div>
          <div className="bg-obsidian/30 border border-white/5 rounded-sm p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory font-medium mb-4">
              Islamic (Swap-Free) Account
            </h3>
            <p className="text-platinum/60 text-sm leading-relaxed mb-4">
              Shariah-compliant trading with no overnight swap charges. Available on all account tiers
              upon request.
            </p>
            <Link
              href="/contact"
              className="inline-block text-fx-teal text-sm font-[family-name:var(--font-heading)] hover:underline"
            >
              Learn More &rarr;
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/5 pt-8">
          <p className="text-platinum/40 text-xs leading-relaxed max-w-4xl">
            Leverage and account features may vary based on regulatory jurisdiction. Professional and
            Institutional account classifications may require additional documentation and eligibility
            criteria. Trading CFDs carries a high level of risk and may not be suitable for all investors.
          </p>
        </div>
      </div>
    </div>
  );
}
