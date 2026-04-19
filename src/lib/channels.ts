export type ChannelSlug =
  | "wealth"
  | "markets"
  | "payments"
  | "crypto"
  | "commodities";

export type Channel = {
  slug: ChannelSlug;
  name: string;
  shortName: string;
  href: string;
  color: string;
  tagline: string;
  role: string;
};

export const CHANNELS: Record<ChannelSlug, Channel> = {
  wealth: {
    slug: "wealth",
    name: "FAVA Wealth",
    shortName: "Wealth",
    href: "/wealth",
    color: "#059669",
    tagline: "Patient capital. Compounding returns.",
    role: "The managed fund at the centre of the ecosystem.",
  },
  markets: {
    slug: "markets",
    name: "FAVA Markets",
    shortName: "Markets",
    href: "/markets",
    color: "#14B8A6",
    tagline: "Institutional execution for every trader.",
    role: "The trading venue for FX, CFDs, and commodities.",
  },
  payments: {
    slug: "payments",
    name: "FAVA Payments",
    shortName: "Payments",
    href: "/payments",
    color: "#0EA5E9",
    tagline: "Move money. Everywhere.",
    role: "The cross-border rails, powered by Rebasive.",
  },
  crypto: {
    slug: "crypto",
    name: "FAVA Digital",
    shortName: "Digital",
    href: "/crypto",
    color: "#6366F1",
    tagline: "Institutional crypto, without the theatre.",
    role: "The digital asset platform, powered by Cryptorio.",
  },
  commodities: {
    slug: "commodities",
    name: "FAVA Commodities",
    shortName: "Commodities",
    href: "/commodities",
    color: "#D97706",
    tagline: "The raw materials of growth.",
    role: "Metals, energy, agriculture — with research at the core.",
  },
};

export const CHANNEL_ORDER: ChannelSlug[] = [
  "wealth",
  "markets",
  "payments",
  "crypto",
  "commodities",
];

export const CHANNELS_LIST: Channel[] = CHANNEL_ORDER.map((s) => CHANNELS[s]);

export function channelByHref(href: string): Channel | undefined {
  return CHANNELS_LIST.find((c) => c.href === href);
}

export function siblingsOf(slug: ChannelSlug, count = 2): Channel[] {
  const others = CHANNEL_ORDER.filter((s) => s !== slug);
  return others.slice(0, count).map((s) => CHANNELS[s]);
}
