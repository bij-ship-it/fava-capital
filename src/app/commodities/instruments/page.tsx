import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "Instrument Specifications — FAVA Commodities",
  description:
    "Detailed contract specifications for all commodity instruments. Margins, trading hours, contract sizes, and expiry schedules.",
};

interface Instrument {
  name: string;
  symbol: string;
  type: "Spot" | "Futures";
  contractSize: string;
  margin: string;
  tradingHours: string;
  expiry: string;
  spread: string;
}

const instruments: Instrument[] = [
  {
    name: "Gold",
    symbol: "XAU/USD",
    type: "Spot",
    contractSize: "100 oz",
    margin: "1.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "0.30",
  },
  {
    name: "Gold Futures",
    symbol: "GC",
    type: "Futures",
    contractSize: "100 oz",
    margin: "5.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Fri)",
    spread: "0.40",
  },
  {
    name: "Silver",
    symbol: "XAG/USD",
    type: "Spot",
    contractSize: "5,000 oz",
    margin: "1.5%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "0.025",
  },
  {
    name: "Silver Futures",
    symbol: "SI",
    type: "Futures",
    contractSize: "5,000 oz",
    margin: "6.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Fri)",
    spread: "0.030",
  },
  {
    name: "Platinum",
    symbol: "XPT/USD",
    type: "Spot",
    contractSize: "50 oz",
    margin: "2.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "No expiry",
    spread: "1.50",
  },
  {
    name: "Copper",
    symbol: "HG",
    type: "Futures",
    contractSize: "25,000 lbs",
    margin: "4.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Wed)",
    spread: "0.0004",
  },
  {
    name: "Crude Oil (WTI)",
    symbol: "CL",
    type: "Futures",
    contractSize: "1,000 bbl",
    margin: "5.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (20th)",
    spread: "0.03",
  },
  {
    name: "Brent Crude",
    symbol: "BRN",
    type: "Futures",
    contractSize: "1,000 bbl",
    margin: "5.0%",
    tradingHours: "Mon 01:00 – Fri 22:00",
    expiry: "Monthly (15th)",
    spread: "0.03",
  },
  {
    name: "Natural Gas",
    symbol: "NG",
    type: "Futures",
    contractSize: "10,000 MMBtu",
    margin: "6.0%",
    tradingHours: "Sun 23:00 – Fri 22:00",
    expiry: "Monthly (3rd Wed)",
    spread: "0.005",
  },
  {
    name: "Wheat",
    symbol: "ZW",
    type: "Futures",
    contractSize: "5,000 bu",
    margin: "5.0%",
    tradingHours: "Mon–Fri 01:00 – 19:20",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.50",
  },
  {
    name: "Corn",
    symbol: "ZC",
    type: "Futures",
    contractSize: "5,000 bu",
    margin: "4.5%",
    tradingHours: "Mon–Fri 01:00 – 19:20",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.50",
  },
  {
    name: "Coffee",
    symbol: "KC",
    type: "Futures",
    contractSize: "37,500 lbs",
    margin: "5.0%",
    tradingHours: "Mon–Fri 09:15 – 18:30",
    expiry: "Mar, May, Jul, Sep, Dec",
    spread: "0.40",
  },
  {
    name: "Sugar",
    symbol: "SB",
    type: "Futures",
    contractSize: "112,000 lbs",
    margin: "5.0%",
    tradingHours: "Mon–Fri 08:10 – 17:55",
    expiry: "Mar, May, Jul, Oct",
    spread: "0.03",
  },
];

function InstrumentTable({
  items,
  label,
  index,
}: {
  items: Instrument[];
  label: string;
  index: string;
}) {
  return (
    <div>
      <p className="text-label text-secondary mb-8">{index} — {label}</p>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 pr-4 text-label text-tertiary">
                Instrument
              </th>
              <th className="text-right py-4 px-4 text-label text-tertiary">
                Contract Size
              </th>
              <th className="text-right py-4 px-4 text-label text-tertiary">
                Margin
              </th>
              <th className="text-left py-4 px-4 text-label text-tertiary hidden md:table-cell">
                Hours (GMT)
              </th>
              <th className="text-left py-4 px-4 text-label text-tertiary hidden md:table-cell">
                Expiry
              </th>
              <th className="text-right py-4 pl-4 text-label text-tertiary hidden lg:table-cell">
                Spread
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((inst) => (
              <tr
                key={inst.symbol}
                className="border-b border-border/50 hover:bg-surface/50 transition-colors"
              >
                <td className="py-5 pr-4">
                  <span className="text-primary">{inst.name}</span>
                  <span className="text-tertiary text-caption ml-3">
                    {inst.symbol}
                  </span>
                </td>
                <td className="text-right py-5 px-4 text-secondary tabular-nums">
                  {inst.contractSize}
                </td>
                <td className="text-right py-5 px-4 text-secondary tabular-nums">
                  {inst.margin}
                </td>
                <td className="py-5 px-4 text-secondary hidden md:table-cell">
                  {inst.tradingHours}
                </td>
                <td className="py-5 px-4 text-secondary hidden md:table-cell">
                  {inst.expiry}
                </td>
                <td className="text-right py-5 pl-4 text-secondary tabular-nums hidden lg:table-cell">
                  {inst.spread}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function InstrumentsPage() {
  const spotInstruments = instruments.filter((i) => i.type === "Spot");
  const futuresInstruments = instruments.filter((i) => i.type === "Futures");

  return (
    <div className="min-h-screen bg-base pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA COMMODITIES" color="#D97706" />
        <h1 className="text-display-alt text-primary">
          Instrument Specifications
        </h1>
        <p className="text-secondary mt-4 max-w-[520px] leading-[1.7]">
          Contract sizes, margin requirements, trading hours, expiry schedules,
          and spreads for every commodity instrument.
        </p>

        {/* Spot / Futures distinction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 border-t border-b border-border">
          <div className="py-8 pr-8 max-md:border-b max-md:border-border md:border-r md:border-border">
            <p className="text-label text-commodities mb-3">Spot</p>
            <p className="text-secondary leading-[1.7]">
              Current market price, no expiry. Positions held indefinitely,
              subject to overnight financing.
            </p>
          </div>
          <div className="py-8 md:pl-8">
            <p className="text-label text-secondary mb-3">Futures</p>
            <p className="text-secondary leading-[1.7]">
              Defined expiry and contract month. Forward curve pricing. No
              overnight financing — cost built into spread.
            </p>
          </div>
        </div>

        {/* Spot Table */}
        <div className="py-[140px] border-b border-border">
          <InstrumentTable
            items={spotInstruments}
            label="Spot Contracts"
            index="02"
          />
        </div>

        {/* Futures Table */}
        <div className="py-[140px] border-b border-border">
          <InstrumentTable
            items={futuresInstruments}
            label="Futures Contracts"
            index="03"
          />
        </div>

        {/* Notes */}
        <div className="py-[140px]">
          <p className="text-label text-secondary mb-8">Notes</p>
          <div className="space-y-4">
            {[
              "All times are in GMT. Trading hours may vary on public holidays and during daylight saving transitions.",
              "Margin requirements may be adjusted during periods of high volatility or low liquidity.",
              "Spreads shown are minimum typical spreads under normal market conditions. Actual spreads may vary.",
              "Futures positions approaching expiry will be automatically rolled to the next contract month unless closed.",
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-tertiary">—</span>
                <p className="text-secondary">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
