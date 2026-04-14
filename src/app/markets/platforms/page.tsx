import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "FAVA Markets — Trading Platforms",
  description:
    "Compare MetaTrader 4, MetaTrader 5, and FAVA WebTrader. Advanced charting, one-click execution, and full mobile support.",
};

const platforms = [
  {
    name: "MetaTrader 4",
    tag: "Industry Standard",
    description:
      "The world's most popular retail trading platform. Expert Advisors, custom indicators, and a vast community ecosystem.",
    features: [
      "Expert Advisors (EA) support",
      "30+ built-in indicators",
      "9 timeframes",
      "One-click trading",
      "Desktop, web, and mobile",
      "MQL4 programming language",
    ],
  },
  {
    name: "MetaTrader 5",
    tag: "Advanced",
    description:
      "Next-generation multi-asset platform with depth of market, economic calendar, and expanded order types.",
    features: [
      "Multi-asset support",
      "38+ built-in indicators",
      "21 timeframes",
      "Depth of Market (DOM)",
      "Built-in economic calendar",
      "MQL5 with strategy tester",
    ],
  },
  {
    name: "FAVA WebTrader",
    tag: "Proprietary",
    description:
      "Our in-house platform built for speed. No downloads, no plugins. Advanced charting powered by TradingView.",
    features: [
      "Zero installation required",
      "TradingView charting engine",
      "Real-time sentiment data",
      "Integrated news feed",
      "One-click execution",
      "Cross-device sync",
    ],
  },
];

const comparisonRows = [
  { feature: "Asset Classes", mt4: "FX, CFDs", mt5: "FX, CFDs, Futures", web: "FX, CFDs" },
  { feature: "Order Types", mt4: "4", mt5: "6", web: "5" },
  { feature: "Timeframes", mt4: "9", mt5: "21", web: "Unlimited" },
  { feature: "Indicators", mt4: "30+", mt5: "38+", web: "100+" },
  { feature: "Algorithmic Trading", mt4: "MQL4 / EA", mt5: "MQL5 / EA", web: "API" },
  { feature: "Depth of Market", mt4: "No", mt5: "Yes", web: "Yes" },
  { feature: "Economic Calendar", mt4: "Plugin", mt5: "Built-in", web: "Built-in" },
  { feature: "Mobile App", mt4: "iOS / Android", mt5: "iOS / Android", web: "Responsive" },
  { feature: "Strategy Tester", mt4: "Single-thread", mt5: "Multi-thread", web: "Cloud-based" },
  { feature: "Download Required", mt4: "Yes", mt5: "Yes", web: "No" },
];

export default function PlatformsPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
        <h1 className="text-display-alt text-primary mb-4">Platforms</h1>
        <p className="text-secondary max-w-[520px] mb-20">
          Choose the platform that fits your style. Every account includes
          access to all three.
        </p>

        {/* Platform Blocks */}
        <section className="mb-[140px] max-md:mb-20">
          <p className="text-label text-secondary mb-12">
            01 &mdash; Overview
          </p>
          <div className="grid md:grid-cols-3 gap-16 max-md:gap-12">
            {platforms.map((p) => (
              <div key={p.name}>
                <p className="text-caption text-markets mb-2">{p.tag}</p>
                <h3 className="text-subhead text-primary mb-3">{p.name}</h3>
                <p className="text-secondary text-[15px] leading-[1.7] mb-5">
                  {p.description}
                </p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="text-secondary text-[13px] flex items-start gap-2"
                    >
                      <span className="text-tertiary mt-[2px]">&mdash;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="pb-32">
          <p className="text-label text-secondary mb-12">
            02 &mdash; Comparison
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal w-[200px]">
                    Feature
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    MetaTrader 4
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    MetaTrader 5
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    FAVA WebTrader
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary text-[15px] py-3 px-4">
                      {row.feature}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.mt4}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.mt5}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.web}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-16 flex items-center gap-6">
            <Link
              href="/markets/accounts"
              className="inline-block bg-markets text-base text-label px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Open Live Account
            </Link>
            <Link
              href="/markets/products"
              className="inline-block text-label text-markets hover:opacity-80 transition-opacity"
            >
              View Instruments &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
