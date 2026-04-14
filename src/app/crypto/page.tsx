import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptorio — The Regulated Exchange | FAVA Capital",
  description:
    "Trade digital assets on a fully regulated, institutional-grade exchange. Cold storage security, lightning execution, and transparent fees.",
};

const tickers = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%", up: true },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%", up: true },
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%", up: true },
  { symbol: "AVAX", name: "Avalanche", price: "$42.18", change: "-0.92%", up: false },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%", up: true },
  { symbol: "DOT", name: "Polkadot", price: "$9.41", change: "-1.23%", up: false },
];

const topMovers = [
  { symbol: "SOL", name: "Solana", price: "$187.42", change: "+5.63%" },
  { symbol: "LINK", name: "Chainlink", price: "$18.73", change: "+3.14%" },
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.18", change: "+2.41%" },
  { symbol: "ETH", name: "Ethereum", price: "$3,891.05", change: "+1.87%" },
];

const whyCryptorio = [
  {
    title: "Security",
    description:
      "95% of assets held in air-gapped cold storage with multi-signature authorisation. SOC2-audited infrastructure with real-time threat monitoring.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Regulation",
    description:
      "Fully licensed and regulated across multiple jurisdictions. KYC/AML compliant with institutional-grade reporting and audit trails.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Speed",
    description:
      "Sub-millisecond order matching with co-located infrastructure. 99.99% uptime SLA backed by globally distributed, redundant systems.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function CryptoPage() {
  return (
    <div className="bg-void min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-crypto-electric/30 text-crypto-electric text-sm font-[family-name:var(--font-heading)] tracking-wider uppercase">
              Cryptorio Exchange
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-ivory leading-[1.05] mb-6">
              The Regulated
              <br />
              <span className="text-crypto-electric">Exchange</span>
            </h1>
            <p className="max-w-2xl text-platinum/70 text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade infrastructure for digital asset trading. Fully
              licensed, deeply liquid, and built for the demands of serious capital.
            </p>
            <div className="flex gap-4">
              <a
                href="/crypto/trade"
                className="px-8 py-3.5 bg-crypto-electric text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-crypto-electric/90 transition-colors"
              >
                Start Trading
              </a>
              <a
                href="/crypto/assets"
                className="px-8 py-3.5 border border-ivory/20 text-ivory font-[family-name:var(--font-heading)] font-medium rounded-lg hover:border-ivory/40 transition-colors"
              >
                View Assets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Price Ticker */}
      <section className="border-y border-ivory/10 bg-void/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {tickers.map((t) => (
              <div
                key={t.symbol}
                className="flex items-center gap-4 py-4 px-6 min-w-[200px] border-r border-ivory/5 last:border-r-0"
              >
                <div>
                  <span className="text-ivory font-[family-name:var(--font-heading)] font-medium text-sm">
                    {t.symbol}
                  </span>
                  <span className="text-platinum/40 text-xs ml-1.5">{t.name}</span>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-ivory text-sm font-medium">{t.price}</div>
                  <div className={`text-xs ${t.up ? "text-green-400" : "text-red-400"}`}>
                    {t.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Movers */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-ivory">
              Top Movers
            </h2>
            <a
              href="/crypto/assets"
              className="text-crypto-electric text-sm font-[family-name:var(--font-heading)] hover:underline"
            >
              View All Assets &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMovers.map((asset) => (
              <div
                key={asset.symbol}
                className="group bg-obsidian/60 border border-ivory/5 rounded-xl p-6 hover:border-crypto-electric/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-crypto-electric/10 flex items-center justify-center text-crypto-electric font-[family-name:var(--font-heading)] font-semibold text-sm">
                    {asset.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-ivory font-[family-name:var(--font-heading)] font-medium">
                      {asset.symbol}
                    </div>
                    <div className="text-platinum/40 text-xs">{asset.name}</div>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-ivory text-xl font-[family-name:var(--font-heading)] font-medium">
                    {asset.price}
                  </span>
                  <span className="text-green-400 text-sm font-medium">
                    {asset.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cryptorio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory mb-4">
              Why Cryptorio
            </h2>
            <p className="text-platinum/60 text-lg max-w-xl mx-auto">
              Built for institutions. Trusted by traders. Regulated by design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyCryptorio.map((card) => (
              <div
                key={card.title}
                className="bg-obsidian/60 border border-ivory/5 rounded-2xl p-8 hover:border-crypto-electric/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-crypto-electric/10 flex items-center justify-center text-crypto-electric mb-6">
                  {card.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-3">
                  {card.title}
                </h3>
                <p className="text-platinum/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-obsidian border border-ivory/5 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)]" />
            <div className="relative">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-ivory mb-4">
                Ready to Trade?
              </h2>
              <p className="text-platinum/60 text-lg max-w-lg mx-auto mb-8">
                Open an account in minutes. Start trading on the exchange built for
                serious participants.
              </p>
              <a
                href="/crypto/trade"
                className="inline-block px-10 py-4 bg-crypto-electric text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-crypto-electric/90 transition-colors"
              >
                Start Trading
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
