import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAVA Markets — Trade 1,000+ Instruments",
  description:
    "Institutional-grade execution across FX, indices, shares, commodities, and crypto CFDs. Tight spreads, lightning execution, full regulation.",
};

const valueProps = [
  {
    title: "Lightning Execution",
    description:
      "Ultra-low latency infrastructure with average execution speeds under 30ms. Co-located servers in LD4, NY4, and TY3 data centres.",
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Tight Spreads",
    description:
      "Raw spreads from 0.0 pips on major FX pairs. Deep liquidity aggregated from tier-1 banks and non-bank market makers.",
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Full Regulation",
    description:
      "Regulated across multiple jurisdictions. Client funds held in segregated accounts with tier-1 banking partners.",
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const instruments = [
  { name: "FX Pairs", count: "60+", description: "Major, minor, and exotic currency pairs", href: "/markets/products" },
  { name: "Indices", count: "20+", description: "Global equity indices including US500, UK100, GER40", href: "/markets/products" },
  { name: "Shares", count: "500+", description: "CFDs on US, UK, and EU equities", href: "/markets/products" },
  { name: "Commodities", count: "30+", description: "Precious metals, energies, and agricultural products", href: "/markets/products" },
  { name: "Crypto CFDs", count: "40+", description: "Bitcoin, Ethereum, and altcoin derivatives", href: "/markets/products" },
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fx-teal/10 via-obsidian/50 to-void" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-fx-teal/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-6">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-light text-ivory leading-tight">
            Trade 1,000+ Instruments
          </h1>
          <p className="mt-6 text-lg md:text-xl text-platinum/70 max-w-2xl mx-auto leading-relaxed">
            Institutional-grade execution, deep liquidity, and transparent pricing across global markets.
            Built for traders who demand more.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/markets/accounts"
              className="inline-block bg-fx-teal hover:bg-fx-teal/80 rounded-sm px-8 py-3 text-void font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 font-medium"
            >
              Open Live Account
            </Link>
            <Link
              href="/markets/products"
              className="inline-block border border-white/10 hover:border-fx-teal/40 rounded-sm px-8 py-3 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
            >
              View Instruments
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-obsidian/40 border border-white/5 rounded-sm p-8 hover:border-fx-teal/20 transition-colors duration-300"
              >
                <div className="mb-5">{prop.icon}</div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory font-medium mb-3">
                  {prop.title}
                </h3>
                <p className="text-platinum/60 leading-relaxed text-sm">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrument Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ivory font-light">
              Global Market Access
            </h2>
            <p className="mt-4 text-platinum/60 max-w-xl mx-auto">
              Diversify across asset classes with a single account and unified margin.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {instruments.map((inst) => (
              <Link
                key={inst.name}
                href={inst.href}
                className="group bg-obsidian/30 border border-white/5 rounded-sm p-6 hover:border-fx-teal/30 transition-all duration-300"
              >
                <p className="font-[family-name:var(--font-heading)] text-2xl text-fx-teal font-medium">
                  {inst.count}
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg mt-1">
                  {inst.name}
                </h3>
                <p className="text-platinum/50 text-sm mt-2 leading-relaxed">
                  {inst.description}
                </p>
                <span className="inline-block mt-4 text-fx-teal text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-obsidian/40 border border-white/5 rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-xs mb-4">
                Trading Platforms
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-ivory font-light leading-tight">
                Trade Your Way
              </h2>
              <p className="mt-4 text-platinum/60 leading-relaxed">
                Choose from MetaTrader 4, MetaTrader 5, or our proprietary FAVA WebTrader.
                Advanced charting, one-click execution, and full mobile support across every platform.
              </p>
              <Link
                href="/markets/platforms"
                className="inline-block mt-8 border border-fx-teal/30 hover:bg-fx-teal/10 rounded-sm px-6 py-2.5 text-fx-teal font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
              >
                Compare Platforms
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-void/60 border border-white/5 rounded-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full border border-fx-teal/30 flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-fx-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-platinum/40 text-sm">Platform Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory font-light">
            Ready to Start Trading?
          </h2>
          <p className="mt-4 text-platinum/60 max-w-lg mx-auto">
            Open an account in minutes. Fund instantly. Trade globally.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/markets/accounts"
              className="inline-block bg-fx-teal hover:bg-fx-teal/80 rounded-sm px-8 py-3 text-void font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 font-medium"
            >
              Open Live Account
            </Link>
            <Link
              href="/markets/accounts"
              className="inline-block border border-white/10 hover:border-fx-teal/40 rounded-sm px-8 py-3 text-ivory font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300"
            >
              Try Demo Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
