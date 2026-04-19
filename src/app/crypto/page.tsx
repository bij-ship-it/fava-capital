import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";
import { DigitalIcon } from "@/components/ui/SubsidiaryIcons";

export const metadata: Metadata = {
  title: "FAVA Digital — Cryptorio | Institutional Crypto Exchange & OTC",
  description:
    "Cryptorio combines exchange trading, OTC execution, institutional custody, and compliant fiat-stablecoin settlement into a single platform. Built for real capital.",
};

const tickers = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%", up: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%", up: true },
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%", up: true },
  { symbol: "AVAX", name: "Avalanche", price: "$42.18", change: "-0.92%", up: false },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%", up: true },
  { symbol: "DOT", name: "Polkadot", price: "$9.41", change: "-1.23%", up: false },
];

const platformServices = [
  {
    title: "Spot Exchange",
    description:
      "Institutional-grade spot trading with deep aggregated liquidity across major venues.",
  },
  {
    title: "OTC Desk",
    description:
      "Private execution for large block trades. Minimal market impact, competitive pricing, white-glove service.",
  },
  {
    title: "Fiat & Stablecoin Ramps",
    description:
      "Seamless on/off-ramps between fiat currencies and digital assets. Integrated banking rails.",
  },
  {
    title: "Institutional Custody",
    description:
      "MPC-secured wallets with hot, warm, and cold architecture. Treasury controls and multi-sig authorisation.",
  },
  {
    title: "APIs & White-Label",
    description:
      "Enterprise-grade REST and WebSocket APIs. Full white-label infrastructure for platforms and institutions.",
  },
  {
    title: "Settlement & Treasury",
    description:
      "Stablecoin-based settlement (USDC/USDT) with optional fiat rails. Flexible based on counterparty preference.",
  },
];

const clientSegments = [
  {
    title: "Institutions",
    items: ["Funds", "Corporates", "Miners", "Family Offices"],
  },
  {
    title: "Commodity Firms",
    items: ["Oil traders", "Metals", "Resource companies", "Stablecoin settlement"],
  },
  {
    title: "Individuals",
    items: ["Active traders", "HNWIs", "Secure access", "Compliant operations"],
  },
  {
    title: "Governments & Sovereigns",
    items: ["CBDCs", "Reserves management", "Regulated adoption"],
  },
];

const executionItems = [
  { title: "Aggregated Multi-Venue Liquidity", description: "Deep pools across global venues" },
  { title: "Smart Order Routing", description: "Optimal execution pathfinding" },
  { title: "Minimal Market Impact", description: "OTC execution without slippage" },
  { title: "Institutional APIs", description: "Direct integration and dashboards" },
];

const complianceItems = [
  { title: "KYC / KYB / KYT", description: "Identity verification for all participants" },
  { title: "AML / CFT / Travel Rule", description: "Anti-money laundering and sanctions compliance" },
  {
    title: "Jurisdiction-Aware Onboarding",
    description: "Regulatory requirements by geography",
  },
  {
    title: "Treasury & Liquidity Risk",
    description: "Real-time risk monitoring and controls",
  },
  { title: "Audit-Ready Reporting", description: "Comprehensive transaction audit trails" },
  {
    title: "MPC Custody Architecture",
    description: "Multi-party computation with cold/warm/hot tiers",
  },
];

const bankingPartners = [
  { name: "FV Bank", status: "Onboarded", active: true },
  { name: "Swissquote", status: "In Progress", active: false },
];

const liquidityPartners = [
  { name: "KuCoin", status: "Onboarded", active: true },
  { name: "Bybit", status: "Onboarded", active: true },
  { name: "Bitget", status: "Onboarded", active: true },
  { name: "Gate.io", status: "Onboarded", active: true },
];

export default function CryptoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex items-start justify-between gap-12">
            <div className="flex-1">
              <ChannelBadge name="FAVA DIGITAL" color="#6366F1" />
              <h1 className="text-display-alt text-primary">
                Institutional Crypto Exchange
                <br />& OTC Infrastructure
              </h1>
              <p className="mt-6 text-secondary max-w-[560px] leading-[1.75]">
                <Link
                  href="https://cryptorio.com"
                  target="_blank"
                  className="text-crypto link-hover"
                >
                  Cryptorio
                </Link>{" "}
                combines exchange trading, OTC execution, institutional custody,
                and compliant fiat-stablecoin settlement into a single platform.
                Built for real capital, not speculation.
              </p>
              <div className="mt-8 flex items-center gap-8">
                <Link
                  href="https://cryptorio.com"
                  target="_blank"
                  className="text-label text-crypto link-hover"
                >
                  Start trading on Cryptorio &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="text-label text-secondary link-hover transition-colors hover:text-primary"
                >
                  OTC enquiries
                </Link>
              </div>
            </div>
            <DigitalIcon size={160} className="opacity-20 shrink-0 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Price Ticker Strip */}
      <section className="bg-surface">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex overflow-x-auto">
            {tickers.map((t, i) => (
              <div
                key={t.symbol}
                className={`flex items-center gap-4 py-4 pr-8 shrink-0 ${
                  i > 0 ? "pl-8 border-l border-border" : ""
                }`}
              >
                <span className="text-label text-secondary">{t.symbol}</span>
                <span className="text-numbers text-primary">{t.price}</span>
                <span
                  className={`font-mono text-caption ${
                    t.up ? "text-green-400" : "text-[#C47272]"
                  }`}
                >
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-[120px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-16">Platform Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
            {platformServices.map((service) => (
              <div
                key={service.title}
                className="bg-surface p-10 border-t-2 border-t-crypto"
              >
                <h3 className="text-label text-primary mb-3">{service.title}</h3>
                <p className="text-secondary leading-[1.7]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Cryptorio Serves */}
      <section className="bg-surface py-[100px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-16">Who Cryptorio Serves</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {clientSegments.map((segment) => (
              <div key={segment.title}>
                <h3 className="text-label text-primary mb-5">{segment.title}</h3>
                <ul className="space-y-3">
                  {segment.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-crypto shrink-0" />
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquidity & Execution */}
      <section className="py-[120px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="bg-surface p-10 max-lg:p-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1">
                <p className="text-label text-crypto mb-6">EXECUTION</p>
                <h2 className="text-subhead text-primary mb-6">
                  Deep aggregated liquidity with intelligent routing.
                </h2>
                <p className="text-secondary leading-[1.75] max-w-[480px]">
                  Cryptorio aggregates liquidity across multiple global venues,
                  applying smart order routing to achieve optimal execution for
                  every trade. For large block orders, our OTC desk provides
                  private execution with minimal market impact and competitive
                  pricing — no slippage, no information leakage.
                </p>
              </div>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-border">
                  {executionItems.map((item) => (
                    <div key={item.title} className="bg-surface p-8">
                      <h4 className="text-label text-primary mb-2">{item.title}</h4>
                      <p className="text-secondary leading-[1.7]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="bg-surface py-[100px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-crypto mb-6">COMPLIANCE</p>
          <h2 className="text-subhead text-primary mb-16">
            Institutional-grade compliance at every layer.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border">
            {complianceItems.map((item) => (
              <div key={item.title} className="bg-surface p-8">
                <h4 className="text-label text-primary mb-2">{item.title}</h4>
                <p className="text-secondary leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking & Partnerships */}
      <section className="py-[100px] border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-crypto mb-4">INFRASTRUCTURE</p>
          <h2 className="text-subhead text-primary mb-12">
            Integrated banking and deep liquidity from day one.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-border">
            {[...bankingPartners, ...liquidityPartners].map((partner) => (
              <div key={partner.name} className="bg-surface p-6 flex flex-col items-center text-center gap-3">
                <span
                  className={`w-2 h-2 ${
                    partner.active ? "bg-green-400" : "bg-gold"
                  }`}
                />
                <span className="text-primary">{partner.name}</span>
                <span className="text-caption text-tertiary">{partner.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Foundation */}
      <section className="bg-surface py-[80px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-crypto mb-10">REGULATORY FOUNDATION</p>
          <p className="text-label text-secondary mb-6">OPERATIONAL</p>
          <div className="space-y-4 mb-12">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-400 shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">El Salvador BSP</span>
                <span className="text-secondary text-caption ml-3">Bitcoin Service Provider licence enabling regulated digital asset operations.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-400 shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">US FinCEN MSB</span>
                <span className="text-secondary text-caption ml-3">Money Services Business registration for digital asset operations in the United States.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-green-400 shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">Canadian FINTRAC MSB</span>
                <span className="text-secondary text-caption ml-3">Money Services Business registration for digital asset services in Canada.</span>
              </div>
            </div>
          </div>

          <p className="text-label text-secondary mb-6">TARGET</p>
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">DASP &mdash; Europe</span>
                <span className="text-secondary text-caption ml-3">Digital Asset Service Provider registration for European market access.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">VARA &mdash; Dubai, UAE</span>
                <span className="text-secondary text-caption ml-3">Virtual Assets Regulatory Authority licence for operations in the UAE.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">MiCA &mdash; Austria, Europe</span>
                <span className="text-secondary text-caption ml-3">Markets in Crypto-Assets regulation for EU-wide passported operations.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">VASP &mdash; Pakistan</span>
                <span className="text-secondary text-caption ml-3">Virtual Asset Service Provider registration for the Pakistani market.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">MAS &mdash; Singapore</span>
                <span className="text-secondary text-caption ml-3">Monetary Authority of Singapore digital payment token service licence.</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="w-2 h-2 bg-gold shrink-0 mt-1.5" />
              <div>
                <span className="text-primary">AUSTRAC &mdash; Australia</span>
                <span className="text-secondary text-caption ml-3">Digital currency exchange registration for the Australian market.</span>
              </div>
            </div>
          </div>
          <p className="text-secondary leading-[1.75] max-w-[640px]">
            Centralised technology, jurisdiction-specific compliance. One
            platform, global operations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface border-t border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[100px] max-md:py-16 text-center">
          <h2 className="text-display-alt text-primary mb-5">
            Trade on Cryptorio
          </h2>
          <p className="text-caption text-secondary mb-10 tracking-wide">
            Regulated &middot; Institutional custody &middot; Deep liquidity
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="https://cryptorio.com"
              target="_blank"
              className="inline-block border border-crypto text-crypto text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-crypto/10 transition-colors"
            >
              Visit Cryptorio
            </Link>
            <Link
              href="/contact"
              className="text-label text-secondary link-hover transition-colors hover:text-primary"
            >
              Contact us &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
