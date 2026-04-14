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

const whyCryptorio = [
  {
    label: "Security",
    body: "95% of assets in air-gapped cold storage with multi-signature authorisation. SOC2-audited infrastructure with real-time threat monitoring across globally distributed systems.",
  },
  {
    label: "Regulation",
    body: "Fully licensed and regulated across multiple jurisdictions. KYC/AML compliant with institutional-grade reporting, audit trails, and transparent reserve attestations.",
  },
  {
    label: "Speed",
    body: "Sub-millisecond order matching with co-located infrastructure. 99.99% uptime SLA backed by redundant, geographically distributed systems and dedicated connectivity.",
  },
];

export default function CryptoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-6">01 — Exchange</p>
          <h1 className="text-display-alt text-primary">The Regulated Exchange</h1>
          <p className="mt-6 text-secondary max-w-[520px]">
            Institutional-grade infrastructure for digital asset trading. Fully
            licensed, deeply liquid, and built for the demands of serious capital.
          </p>
        </div>
      </section>

      {/* Price Ticker Strip */}
      <section className="border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex overflow-x-auto">
            {tickers.map((t, i) => (
              <div
                key={t.symbol}
                className={`flex items-center gap-6 py-5 pr-10 shrink-0 ${
                  i > 0 ? "pl-10 border-l border-border" : ""
                }`}
              >
                <div>
                  <span className="text-label text-secondary">{t.symbol}</span>
                  <span className="text-tertiary ml-2 text-[11px]">{t.name}</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-numbers text-primary">{t.price}</span>
                  <span
                    className={`text-[13px] font-mono ${
                      t.up ? "text-green-400" : "text-[#C47272]"
                    }`}
                  >
                    {t.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cryptorio */}
      <section className="py-[140px]">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-16">02 — Why Cryptorio</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {whyCryptorio.map((item) => (
              <div key={item.label} className="bg-base p-10 first:pl-0 last:pr-0 max-md:px-0 max-md:py-10">
                <h3 className="text-subhead text-primary mb-4">{item.label}</h3>
                <p className="text-secondary leading-[1.7]">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <a href="/crypto/trade" className="text-label text-crypto hover:text-crypto/80 transition-colors">
              Start Trading &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
