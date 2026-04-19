import type { ChannelSlug } from "./channels";

export type Connection = {
  to: ChannelSlug;
  headline: string;
  body: string;
};

export const CONNECTIONS: Record<ChannelSlug, Connection[]> = {
  wealth: [
    {
      to: "markets",
      headline: "The execution engine behind the fund.",
      body: "Wealth deploys capital through the same institutional infrastructure Markets clients trade on — FX, CFDs, and commodities, co-located across LD4, NY4, and TY3.",
    },
    {
      to: "payments",
      headline: "Move capital in and out, across borders.",
      body: "Subscribe, redeem, and distribute in the currency that fits — 130+ currencies and 180+ payout countries through FAVA's payments rail.",
    },
  ],
  markets: [
    {
      to: "payments",
      headline: "Fund and withdraw without friction.",
      body: "Move capital into your trading account on FAVA's payments rail. Multi-currency accounts, card top-ups, and cross-border transfers on the same platform.",
    },
    {
      to: "wealth",
      headline: "Park profits with the fund.",
      body: "When you're ready to step off the screen, allocate to FAVA Wealth's managed strategy — returns generated from the same institutional execution you trade on.",
    },
  ],
  payments: [
    {
      to: "markets",
      headline: "Plug into a regulated brokerage.",
      body: "Route client funding and withdrawals for FAVA Markets' 250K+ clients through the same payments infrastructure — retail and B2B.",
    },
    {
      to: "crypto",
      headline: "Bridge fiat and digital assets.",
      body: "Dual-rail settlement: compliant fiat-to-stablecoin flows alongside crypto spot and OTC on FAVA Digital. One platform, two rails.",
    },
  ],
  crypto: [
    {
      to: "payments",
      headline: "On-ramp and settle in fiat.",
      body: "Move between fiat and digital assets on a licensed payments rail. 130+ currencies, 180+ countries — built for institutional flows.",
    },
    {
      to: "markets",
      headline: "Trade digital asset CFDs alongside FX.",
      body: "Hold spot on Cryptorio, hedge with digital asset CFDs on FAVA Markets. One view of your exposure across both venues.",
    },
  ],
  commodities: [
    {
      to: "markets",
      headline: "Same trading desk, full coverage.",
      body: "Metals, energy, and agriculture alongside FX, indices, and equities — the full commodities complex inside FAVA Markets' execution infrastructure.",
    },
    {
      to: "wealth",
      headline: "Commodities exposure, managed.",
      body: "Gain diversified commodities exposure through FAVA Wealth's multi-strategy fund — research-led allocation, professional execution.",
    },
  ],
};
