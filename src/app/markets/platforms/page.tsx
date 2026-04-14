import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Platforms — FAVA Markets",
  description:
    "Trade on MetaTrader 4, MetaTrader 5, or FAVA WebTrader. Advanced charting, one-click execution, and mobile support.",
};

const platforms = [
  {
    name: "MetaTrader 4",
    tag: "Industry Standard",
    description:
      "The world's most popular retail trading platform. Proven reliability, extensive EA support, and a vast community of developers.",
    features: [
      "Expert Advisors (EA) support",
      "30+ built-in indicators",
      "One-click trading",
      "Custom indicator development",
      "9 timeframes",
      "Strategy backtesting",
    ],
    devices: ["Windows", "macOS", "iOS", "Android"],
    cta: "Download MT4",
    ctaStyle: "border border-fx-teal/30 text-fx-teal hover:bg-fx-teal/10",
  },
  {
    name: "MetaTrader 5",
    tag: "Advanced",
    description:
      "Next-generation multi-asset platform with enhanced execution, more order types, and superior analytical tools for professional traders.",
    features: [
      "Netting & hedging accounts",
      "38+ built-in indicators",
      "21 timeframes",
      "Depth of Market (DOM)",
      "Economic calendar",
      "Multi-threaded backtesting",
    ],
    devices: ["Windows", "macOS", "iOS", "Android", "Web"],
    cta: "Download MT5",
    ctaStyle: "border border-fx-teal/30 text-fx-teal hover:bg-fx-teal/10",
  },
  {
    name: "FAVA WebTrader",
    tag: "Proprietary",
    description:
      "Our in-house platform built for speed and simplicity. No downloads, no plugins. Trade directly from your browser with institutional-grade tools.",
    features: [
      "Zero installation required",
      "TradingView-powered charts",
      "One-click execution",
      "Real-time sentiment data",
      "Advanced risk management",
      "Multi-device sync",
    ],
    devices: ["Any modern browser", "Progressive Web App"],
    cta: "Launch WebTrader",
    ctaStyle: "bg-fx-teal text-void hover:bg-fx-teal/80 font-medium",
  },
];

const comparisonFeatures = [
  { feature: "Available Instruments", mt4: "Forex, CFDs", mt5: "Forex, CFDs, Shares", web: "Forex, CFDs, Shares" },
  { feature: "Order Types", mt4: "4", mt5: "6", web: "6" },
  { feature: "Timeframes", mt4: "9", mt5: "21", web: "Unlimited" },
  { feature: "Indicators", mt4: "30+", mt5: "38+", web: "100+ (TradingView)" },
  { feature: "Automated Trading", mt4: "EAs (MQL4)", mt5: "EAs (MQL5)", web: "API Access" },
  { feature: "Depth of Market", mt4: "No", mt5: "Yes", web: "Yes" },
  { feature: "Economic Calendar", mt4: "No", mt5: "Built-in", web: "Built-in" },
  { feature: "Mobile App", mt4: "Yes", mt5: "Yes", web: "PWA" },
  { feature: "One-Click Trading", mt4: "Yes", mt5: "Yes", web: "Yes" },
  { feature: "Multi-Asset Netting", mt4: "No", mt5: "Yes", web: "Yes" },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-4">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light text-ivory">
            Trading Platforms
          </h1>
          <p className="mt-4 text-platinum/60 max-w-2xl text-lg">
            Choose the platform that fits your style. From the industry-standard MetaTrader suite to our
            proprietary WebTrader, every tool you need is at your fingertips.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-obsidian/40 border border-white/5 rounded-sm p-8 flex flex-col hover:border-fx-teal/20 transition-colors duration-300"
            >
              <div className="mb-6">
                <span className="inline-block text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider text-fx-teal bg-fx-teal/10 px-3 py-1 rounded-sm mb-4">
                  {platform.tag}
                </span>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-ivory font-medium">
                  {platform.name}
                </h2>
                <p className="mt-3 text-platinum/60 text-sm leading-relaxed">
                  {platform.description}
                </p>
              </div>

              <div className="mb-6 flex-1">
                <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/40 mb-3">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {platform.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-platinum/70">
                      <svg className="w-4 h-4 text-fx-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/40 mb-2">
                  Supported Devices
                </p>
                <p className="text-sm text-platinum/60">{platform.devices.join(" / ")}</p>
              </div>

              <button
                className={`w-full rounded-sm px-6 py-3 font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 ${platform.ctaStyle}`}
              >
                {platform.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-ivory font-light mb-8 text-center">
            Platform Comparison
          </h2>
          <div className="border border-white/5 rounded-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-obsidian/60 px-6 py-4 border-b border-white/5">
              <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50">
                Feature
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50 text-center">
                MetaTrader 4
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-platinum/50 text-center">
                MetaTrader 5
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xs uppercase tracking-wider text-fx-teal text-center">
                FAVA WebTrader
              </span>
            </div>
            {comparisonFeatures.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 px-6 py-3.5 border-b border-white/5 last:border-b-0 ${
                  i % 2 === 0 ? "bg-obsidian/30" : "bg-obsidian/10"
                }`}
              >
                <span className="text-ivory text-sm">{row.feature}</span>
                <span className="text-platinum/60 text-sm text-center">{row.mt4}</span>
                <span className="text-platinum/60 text-sm text-center">{row.mt5}</span>
                <span className="text-fx-teal/80 text-sm text-center">{row.web}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-4">
            Not sure which platform to choose?
          </h3>
          <p className="text-platinum/60 text-sm mb-8 max-w-md mx-auto">
            Try all three with a free demo account. No risk, no commitment.
          </p>
          <Link
            href="/markets/accounts"
            className="inline-block bg-fx-teal hover:bg-fx-teal/80 rounded-sm px-8 py-3 text-void font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 font-medium"
          >
            Open Demo Account
          </Link>
        </div>
      </div>
    </div>
  );
}
