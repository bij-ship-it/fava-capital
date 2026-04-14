import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAVA Markets — Transparent Pricing",
  description:
    "No hidden fees. Clear spreads, commissions, swap rates, and margin requirements across all instruments.",
};

const spreadData = [
  { instrument: "EUR/USD", standard: "1.0", professional: "0.2", institutional: "0.0" },
  { instrument: "GBP/USD", standard: "1.2", professional: "0.3", institutional: "0.1" },
  { instrument: "USD/JPY", standard: "1.1", professional: "0.3", institutional: "0.1" },
  { instrument: "XAU/USD", standard: "0.25", professional: "0.12", institutional: "0.08" },
  { instrument: "US500", standard: "0.5", professional: "0.3", institutional: "0.2" },
  { instrument: "BTC/USD", standard: "25.0", professional: "18.0", institutional: "15.0" },
];

const commissionData = [
  { account: "Standard", commission: "$0", note: "Spreads from 1.0 pip" },
  { account: "Professional", commission: "$3.50 / lot", note: "Spreads from 0.0 pip" },
  { account: "Institutional", commission: "$2.00 / lot", note: "Spreads from 0.0 pip, volume-based" },
];

const swapData = [
  { instrument: "EUR/USD", longSwap: "-6.50", shortSwap: "+1.20" },
  { instrument: "GBP/USD", longSwap: "-5.80", shortSwap: "+0.90" },
  { instrument: "USD/JPY", longSwap: "+3.40", shortSwap: "-8.20" },
  { instrument: "XAU/USD", longSwap: "-12.50", shortSwap: "+2.10" },
  { instrument: "US500", longSwap: "-4.20", shortSwap: "-1.80" },
  { instrument: "BTC/USD", longSwap: "-25.00", shortSwap: "-15.00" },
];

const marginData = [
  { category: "Major FX Pairs", standard: "0.2%", professional: "0.5%", institutional: "0.2%" },
  { category: "Minor FX Pairs", standard: "0.5%", professional: "1.0%", institutional: "0.5%" },
  { category: "Indices", standard: "0.5%", professional: "1.0%", institutional: "0.5%" },
  { category: "Shares CFDs", standard: "5.0%", professional: "10.0%", institutional: "5.0%" },
  { category: "Commodities", standard: "0.5%", professional: "1.0%", institutional: "0.5%" },
  { category: "Crypto CFDs", standard: "10.0%", professional: "20.0%", institutional: "10.0%" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <p className="text-label text-markets mb-6">FAVA Markets</p>
        <h1 className="text-display-alt text-primary mb-4">Pricing</h1>
        <p className="text-secondary max-w-[520px] mb-20">
          Transparent pricing with no hidden fees. What you see is what you
          trade.
        </p>

        {/* Spreads */}
        <section className="mb-[140px] max-md:mb-20">
          <p className="text-label text-secondary mb-12">01 &mdash; Spreads</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Instrument
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Standard
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Professional
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Institutional
                  </th>
                </tr>
              </thead>
              <tbody>
                {spreadData.map((row, i) => (
                  <tr
                    key={row.instrument}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary text-[15px] py-3 px-4">
                      {row.instrument}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.standard}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.professional}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.institutional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-caption text-tertiary mt-4">
            Spreads in pips. Values shown are minimum typical during peak
            liquidity hours.
          </p>
        </section>

        {/* Commissions */}
        <section className="mb-[140px] max-md:mb-20">
          <p className="text-label text-secondary mb-12">
            02 &mdash; Commissions
          </p>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                  Account
                </th>
                <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                  Commission
                </th>
                <th className="text-caption text-secondary text-left py-3 px-4 font-normal max-sm:hidden">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              {commissionData.map((row, i) => (
                <tr
                  key={row.account}
                  className={`border-b border-border ${
                    i % 2 === 0 ? "bg-surface" : ""
                  }`}
                >
                  <td className="text-primary text-[15px] py-3 px-4">
                    {row.account}
                  </td>
                  <td className="text-primary text-[15px] text-right py-3 px-4 tabular-nums">
                    {row.commission}
                  </td>
                  <td className="text-secondary text-[13px] py-3 px-4 max-sm:hidden">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Swap Rates */}
        <section className="mb-[140px] max-md:mb-20">
          <p className="text-label text-secondary mb-12">
            03 &mdash; Swap Rates
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[440px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Instrument
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Long Swap
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Short Swap
                  </th>
                </tr>
              </thead>
              <tbody>
                {swapData.map((row, i) => (
                  <tr
                    key={row.instrument}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary text-[15px] py-3 px-4">
                      {row.instrument}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.longSwap}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.shortSwap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-caption text-tertiary mt-4">
            Swap rates in points per lot. Updated daily. Triple swap on
            Wednesdays.
          </p>
        </section>

        {/* Margin Requirements */}
        <section className="pb-32">
          <p className="text-label text-secondary mb-12">
            04 &mdash; Margin Requirements
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[580px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Category
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Standard
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Professional
                  </th>
                  <th className="text-caption text-secondary text-right py-3 px-4 font-normal">
                    Institutional
                  </th>
                </tr>
              </thead>
              <tbody>
                {marginData.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary text-[15px] py-3 px-4">
                      {row.category}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.standard}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.professional}
                    </td>
                    <td className="text-secondary text-[15px] text-right py-3 px-4 tabular-nums">
                      {row.institutional}
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
              View All Instruments &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
