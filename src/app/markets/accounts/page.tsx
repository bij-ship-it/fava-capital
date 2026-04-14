import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "FAVA Markets — Account Types",
  description:
    "Compare Standard, Professional, and Institutional accounts. Choose the tier that matches your trading style and volume.",
};

const features = [
  { label: "Minimum Deposit", standard: "$100", professional: "$10,000", institutional: "$100,000" },
  { label: "Spreads From", standard: "1.0 pip", professional: "0.0 pip", institutional: "0.0 pip" },
  { label: "Commission", standard: "$0", professional: "$3.50 / lot", institutional: "$2.00 / lot" },
  { label: "Max Leverage", standard: "1:500", professional: "1:500", institutional: "1:500" },
  { label: "Execution", standard: "STP", professional: "ECN", institutional: "ECN / DMA" },
  { label: "Platforms", standard: "MT4, MT5, Web", professional: "MT4, MT5, Web", institutional: "MT4, MT5, Web, FIX" },
  { label: "Instruments", standard: "1,000+", professional: "1,000+", institutional: "1,200+" },
  { label: "Dedicated Manager", standard: "No", professional: "Yes", institutional: "Yes" },
  { label: "VPS Hosting", standard: "Paid", professional: "Free", institutional: "Free" },
  { label: "API Access", standard: "No", professional: "REST API", institutional: "REST + FIX API" },
  { label: "Swap-Free Option", standard: "Yes", professional: "Yes", institutional: "Yes" },
  { label: "Stop Out Level", standard: "50%", professional: "30%", institutional: "20%" },
  { label: "Margin Call", standard: "80%", professional: "60%", institutional: "50%" },
  { label: "Segregated Funds", standard: "Yes", professional: "Yes", institutional: "Yes" },
  { label: "Negative Balance Protection", standard: "Yes", professional: "Yes", institutional: "Yes" },
];

export default function AccountsPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
        <h1 className="text-display-alt text-primary mb-4">Account Types</h1>
        <p className="text-secondary max-w-[520px] mb-20">
          Three tiers designed for different trading profiles. All accounts
          include access to every platform and full regulatory protection.
        </p>

        {/* Comparison Table */}
        <section className="pb-32">
          <p className="text-label text-secondary mb-12">
            01 &mdash; Comparison
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal w-[220px]">
                    Feature
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Standard
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Professional
                  </th>
                  <th className="text-caption text-secondary text-left py-3 px-4 font-normal">
                    Institutional
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border ${
                      i % 2 === 0 ? "bg-surface" : ""
                    }`}
                  >
                    <td className="text-primary text-[15px] py-3 px-4">
                      {row.label}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.standard}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.professional}
                    </td>
                    <td className="text-secondary text-[15px] py-3 px-4">
                      {row.institutional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTAs */}
          <div className="mt-16 border-t border-border pt-16">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="text-caption text-markets mb-2">Standard</p>
                <p className="text-subhead text-primary mb-2">$100</p>
                <p className="text-secondary text-[13px] mb-5">
                  Commission-free trading with competitive spreads. Ideal for
                  new and intermediate traders.
                </p>
                <Link
                  href="/markets/accounts"
                  className="text-label text-markets hover:opacity-80 transition-opacity"
                >
                  Open Standard &rarr;
                </Link>
              </div>
              <div>
                <p className="text-caption text-markets mb-2">Professional</p>
                <p className="text-subhead text-primary mb-2">$10,000</p>
                <p className="text-secondary text-[13px] mb-5">
                  Raw spreads and ECN execution. Dedicated account manager and
                  VPS included.
                </p>
                <Link
                  href="/markets/accounts"
                  className="text-label text-markets hover:opacity-80 transition-opacity"
                >
                  Open Professional &rarr;
                </Link>
              </div>
              <div>
                <p className="text-caption text-markets mb-2">Institutional</p>
                <p className="text-subhead text-primary mb-2">$100,000</p>
                <p className="text-secondary text-[13px] mb-5">
                  Direct market access, FIX API, and bespoke liquidity. Built
                  for funds and prop firms.
                </p>
                <Link
                  href="/markets/accounts"
                  className="text-label text-markets hover:opacity-80 transition-opacity"
                >
                  Contact Sales &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
