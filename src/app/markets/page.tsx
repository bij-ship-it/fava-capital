import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "FAVA Markets — Trade 1,000+ Instruments",
  description:
    "Institutional-grade execution across FX, indices, shares, commodities, and crypto CFDs. Tight spreads, lightning execution, full regulation.",
};

const valueProps = [
  {
    title: "Lightning Execution",
    description:
      "Average fill speeds under 30ms. Co-located in LD4, NY4, and TY3.",
  },
  {
    title: "Tight Spreads",
    description:
      "Raw spreads from 0.0 pips. Tier-1 bank and non-bank liquidity.",
  },
  {
    title: "Full Regulation",
    description:
      "Multi-jurisdictional oversight. Segregated client funds with tier-1 banks.",
  },
];

const instruments = [
  {
    name: "FX Pairs",
    count: "60+",
    description: "Major, minor, and exotic currency pairs",
  },
  {
    name: "Indices",
    count: "20+",
    description: "US500, UK100, GER40 and more",
  },
  {
    name: "Shares",
    count: "500+",
    description: "CFDs on US, UK, and EU equities",
  },
  {
    name: "Commodities",
    count: "30+",
    description: "Metals, energies, agriculturals",
  },
  {
    name: "Crypto CFDs",
    count: "40+",
    description: "BTC, ETH, and altcoin derivatives",
  },
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 max-md:pb-14">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <ChannelBadge name="FAVA MARKETS" color="#14B8A6" />
          <h1 className="text-display-alt text-primary">
            Trade 1,000+ Instruments
          </h1>
          <p className="mt-5 text-secondary max-w-[520px]">
            Institutional-grade execution, deep liquidity, and transparent
            pricing across global markets. Built for traders who demand more.
          </p>
          <Link
            href="/markets/accounts"
            className="inline-block mt-8 text-label text-markets hover:opacity-80 transition-opacity"
          >
            Open Live Account &rarr;
          </Link>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">
            01 &mdash; Why FAVA Markets
          </p>
          <div className="grid md:grid-cols-3 gap-16 max-md:gap-10">
            {valueProps.map((prop) => (
              <div key={prop.title}>
                <h3 className="text-subhead text-primary mb-3">
                  {prop.title}
                </h3>
                <p className="text-secondary text-[15px] leading-[1.7]">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrument Categories */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">
            02 &mdash; Instruments
          </p>
          <div className="border-t border-border">
            {instruments.map((inst) => (
              <Link
                key={inst.name}
                href="/markets/products"
                className="group flex items-center justify-between py-5 border-b border-border hover:bg-elevated transition-colors px-4 -mx-4"
              >
                <div className="flex items-center gap-8">
                  <span className="text-numbers text-primary w-16">
                    {inst.count}
                  </span>
                  <div>
                    <span className="text-primary text-[15px]">
                      {inst.name}
                    </span>
                    <span className="text-secondary text-[13px] ml-4 max-sm:hidden">
                      {inst.description}
                    </span>
                  </div>
                </div>
                <span className="text-label text-tertiary group-hover:text-markets transition-colors">
                  View &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">
            03 &mdash; Platforms
          </p>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-subhead text-primary mb-4">Trade Your Way</h2>
              <p className="text-secondary max-w-[440px]">
                MetaTrader 4, MetaTrader 5, or our proprietary FAVA WebTrader.
                Advanced charting, one-click execution, and full mobile support.
              </p>
              <Link
                href="/markets/platforms"
                className="inline-block mt-6 text-label text-markets hover:opacity-80 transition-opacity"
              >
                Compare Platforms &rarr;
              </Link>
            </div>
            <div className="flex-1 w-full">
              <div className="aspect-video bg-surface border border-border flex items-center justify-center">
                <p className="text-caption text-tertiary">Platform Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[140px] max-md:py-20 border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <h2 className="text-display-alt text-primary mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-secondary mb-8">
            Open an account in minutes. Fund instantly. Trade globally.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/markets/accounts"
              className="inline-block bg-markets text-base text-label px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Open Live Account
            </Link>
            <Link
              href="/markets/accounts"
              className="inline-block border border-border text-label text-primary px-6 py-3 hover:border-border-hover transition-colors"
            >
              Try Demo Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
