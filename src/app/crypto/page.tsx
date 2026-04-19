import type { Metadata } from "next";
import { SubsidiaryHero } from "@/components/ui/SubsidiaryHero";
import { Container } from "@/components/ui/Container";
import { SubNav, type SubNavItem } from "@/components/ui/SubNav";
import { CTAPanel } from "@/components/ui/CTAPanel";
import { EcosystemConnections } from "@/components/ui/EcosystemConnections";
import { CONNECTIONS } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "Digital",
  description:
    "FAVA Digital — institutional crypto exchange, OTC desk, custody, and compliant fiat-stablecoin settlement. Powered by Cryptorio.",
};

const navItems: SubNavItem[] = [
  { id: "platform", label: "Platform" },
  { id: "clients", label: "Who we serve" },
  { id: "execution", label: "Execution" },
  { id: "security", label: "Security" },
  { id: "compliance", label: "Compliance" },
  { id: "fees", label: "Fees" },
  { id: "regulatory", label: "Regulatory" },
  { id: "ecosystem", label: "Ecosystem" },
];

const tickers = [
  { symbol: "BTC", price: "$67,432", change: "+2.41%", up: true },
  { symbol: "ETH", price: "$3,891", change: "+1.87%", up: true },
  { symbol: "SOL", price: "$187.42", change: "+5.63%", up: true },
  { symbol: "AVAX", price: "$42.18", change: "-0.92%", up: false },
  { symbol: "LINK", price: "$18.73", change: "+3.14%", up: true },
  { symbol: "DOT", price: "$9.41", change: "-1.23%", up: false },
];

const platformServices = [
  {
    title: "Spot exchange",
    body: "Institutional-grade spot trading with aggregated liquidity across major venues.",
  },
  {
    title: "OTC desk",
    body: "Private block execution. Minimal market impact, competitive pricing, white-glove service.",
  },
  {
    title: "Fiat & stablecoin ramps",
    body: "Seamless on/off-ramps between fiat and digital assets, on compliant banking rails.",
  },
  {
    title: "Institutional custody",
    body: "MPC-secured wallets with hot, warm, and cold architecture. Multi-sig treasury controls.",
  },
  {
    title: "APIs & white-label",
    body: "Enterprise REST and WebSocket. Full white-label infrastructure for platforms and institutions.",
  },
  {
    title: "Settlement & treasury",
    body: "USDC/USDT stablecoin settlement with optional fiat rails. Flexible to counterparty preference.",
  },
];

const clientSegments = [
  {
    title: "Institutions",
    items: ["Funds", "Corporates", "Miners", "Family offices"],
  },
  {
    title: "Commodity firms",
    items: ["Oil traders", "Metals", "Resource companies", "Stablecoin settlement"],
  },
  {
    title: "Individuals",
    items: ["Active traders", "HNWIs", "Secure access", "Compliant operations"],
  },
  {
    title: "Governments & sovereigns",
    items: ["CBDCs", "Reserves management", "Regulated adoption"],
  },
];

const executionItems = [
  { title: "Aggregated multi-venue liquidity", body: "Deep pools across global venues." },
  { title: "Smart order routing", body: "Optimal execution pathfinding for every order." },
  { title: "Minimal market impact", body: "OTC block execution without slippage or leakage." },
  { title: "Institutional APIs", body: "Direct integration, FIX support, and real-time dashboards." },
];

const securitySections = [
  {
    stat: "95%",
    label: "Cold storage",
    body: "Client assets held in air-gapped, geographically distributed vaults. Multi-signature authorisation requires consensus. Keys generated inside HSMs that have never touched the internet.",
  },
  {
    stat: "1:1",
    label: "Proof of reserves",
    body: "Cryptographically verifiable proof of reserves, published monthly and audited by an independent third party. Every client can verify their balance is backed via our Merkle-tree verification.",
  },
  {
    stat: "$250M",
    label: "Insurance coverage",
    body: "Comprehensive policy covering assets in both hot and cold wallets, underwritten by Lloyd's of London syndicate partners. Covers theft, breach, and internal collusion.",
  },
  {
    stat: "Type II",
    label: "SOC 2 certified",
    body: "Continuous monitoring. Annual penetration testing by leading cybersecurity firms. Real-time intrusion detection and full audit trail on every administrative action.",
  },
  {
    stat: "100%",
    label: "2FA enforced",
    body: "Hardware security keys (YubiKey), TOTP, and biometric verification for mobile. Withdrawal address whitelisting with mandatory time-lock for new addresses.",
  },
  {
    stat: "$100K",
    label: "Bug bounty",
    body: "Active bounty up to $100K for critical vulnerabilities. Partnered with leading security researchers and white-hat communities. Rapid remediation SLAs.",
  },
];

const complianceItems = [
  { title: "KYC / KYB / KYT", body: "Identity verification for every participant." },
  { title: "AML / CFT / Travel Rule", body: "Anti-money laundering and sanctions compliance by design." },
  { title: "Jurisdiction-aware onboarding", body: "Regulatory requirements adapted per geography." },
  { title: "Treasury & liquidity risk", body: "Real-time monitoring with automated controls." },
  { title: "Audit-ready reporting", body: "Comprehensive transaction audit trails." },
  { title: "MPC custody", body: "Multi-party computation with cold, warm, and hot tiers." },
];

const tradingTiers = [
  { tier: "Standard", volume: "< $50K", maker: "0.16%", taker: "0.26%" },
  { tier: "Silver", volume: "$50K – $500K", maker: "0.14%", taker: "0.22%" },
  { tier: "Gold", volume: "$500K – $5M", maker: "0.10%", taker: "0.18%" },
  { tier: "Platinum", volume: "> $5M", maker: "0.06%", taker: "0.12%" },
];

const operationalLicences = [
  {
    name: "El Salvador BSP",
    body: "Bitcoin Service Provider licence for regulated digital asset operations.",
  },
  {
    name: "US FinCEN MSB",
    body: "Money Services Business registration for digital asset operations in the US.",
  },
  {
    name: "Canadian FINTRAC MSB",
    body: "Money Services Business registration for digital asset services in Canada.",
  },
];

const targetLicences = [
  { name: "DASP — Europe", body: "Digital Asset Service Provider registration for European market access." },
  { name: "VARA — Dubai, UAE", body: "Virtual Assets Regulatory Authority licence for UAE operations." },
  { name: "MiCA — Austria, Europe", body: "Markets in Crypto-Assets regulation for EU-passported operations." },
  { name: "MAS — Singapore", body: "Monetary Authority of Singapore digital payment token service licence." },
  { name: "AUSTRAC — Australia", body: "Digital currency exchange registration for the Australian market." },
];

const partners = [
  { name: "FV Bank", kind: "Banking", active: true },
  { name: "Swissquote", kind: "Banking", active: false },
  { name: "KuCoin", kind: "Liquidity", active: true },
  { name: "Bybit", kind: "Liquidity", active: true },
  { name: "Bitget", kind: "Liquidity", active: true },
  { name: "Gate.io", kind: "Liquidity", active: true },
];

export default function DigitalPage() {
  return (
    <>
      <SubsidiaryHero
        channel="crypto"
        eyebrow="FAVA DIGITAL"
        title="FAVA's digital asset platform, powered by Cryptorio."
        description="Exchange, OTC, custody, and compliant fiat-stablecoin settlement on one platform. Built for real capital, not speculation."
        primary={{
          href: "https://cryptorio.com",
          label: "Launch Cryptorio",
          external: true,
        }}
        secondary={{ href: "/contact", label: "OTC enquiries" }}
      />

      <section className="w-full border-y border-border bg-surface">
        <Container>
          <div className="flex items-center overflow-x-auto">
            {tickers.map((t, i) => (
              <div
                key={t.symbol}
                className={`flex items-center gap-4 py-4 pr-6 shrink-0 ${
                  i > 0 ? "pl-6 border-l border-border" : ""
                }`}
              >
                <span className="text-label text-secondary">{t.symbol}</span>
                <span className="text-ticker text-primary">{t.price}</span>
                <span
                  className={`text-ticker ${t.up ? "text-crypto" : "text-tertiary"}`}
                >
                  {t.change}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <SubNav items={navItems} variant="crypto" />

      <section id="platform" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">THE PLATFORM</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Six services. One integrated platform.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {platformServices.map((s) => (
              <div key={s.title} className="bg-surface p-10 border-t-2 border-crypto">
                <h3 className="text-primary">{s.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="clients"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">WHO WE SERVE</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Institutions to individuals. Regulated everywhere we operate.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {clientSegments.map((seg) => (
              <div key={seg.title}>
                <p className="text-label text-primary mb-5">{seg.title}</p>
                <ul className="flex flex-col gap-3">
                  {seg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-crypto shrink-0" />
                      <span className="text-sm-body text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="execution" className="py-[100px] max-md:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-label text-secondary mb-6">EXECUTION</p>
              <h2 className="text-subhead text-primary">
                Deep aggregated liquidity. Intelligent routing.
              </h2>
              <p className="text-secondary mt-5 leading-[1.7]">
                Cryptorio aggregates liquidity across global venues with smart
                order routing for optimal fills. For block orders, the OTC
                desk provides private execution &mdash; no slippage, no
                information leakage.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {executionItems.map((e) => (
                <div key={e.title} className="bg-surface p-8">
                  <p className="text-label text-primary">{e.title}</p>
                  <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="security"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">SECURITY</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Institutional-grade protection at every layer.
          </h2>

          <div className="border-t border-border">
            {securitySections.map((s) => (
              <div
                key={s.label}
                className="border-b border-border py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start"
              >
                <div>
                  <p className="text-numbers text-primary">{s.stat}</p>
                  <p className="text-caption text-crypto mt-2">{s.label}</p>
                </div>
                <p className="text-secondary leading-[1.7] max-w-3xl">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="compliance" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">COMPLIANCE</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Regulated by design, audited by default.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {complianceItems.map((c) => (
              <div key={c.title} className="bg-surface p-8">
                <p className="text-label text-primary">{c.title}</p>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="fees"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">FEES</p>
          <h2 className="text-subhead text-primary mb-4 max-w-xl">
            Transparent pricing. Volume-based discounts.
          </h2>
          <p className="text-secondary leading-[1.7] max-w-xl mb-12">
            Maker-taker model, 30-day trailing volume tiers. Deposits are
            always free; withdrawals cover network costs only.
          </p>

          <div className="overflow-x-auto -mx-6 px-6 max-lg:-mx-0 max-lg:px-0">
            <div className="bg-base border border-border min-w-[480px]">
              <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-border">
                <span className="text-caption text-secondary">Tier</span>
                <span className="text-caption text-secondary">30-day volume</span>
                <span className="text-caption text-secondary text-right">
                  Maker
                </span>
                <span className="text-caption text-secondary text-right">
                  Taker
                </span>
              </div>
              {tradingTiers.map((t, i) => (
                <div
                  key={t.tier}
                  className={`grid grid-cols-4 gap-4 px-6 py-4 ${
                    i < tradingTiers.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-primary">{t.tier}</span>
                  <span className="text-sm-body text-secondary">{t.volume}</span>
                  <span className="text-ticker text-primary text-right">
                    {t.maker}
                  </span>
                  <span className="text-ticker text-primary text-right">
                    {t.taker}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="regulatory" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">REGULATORY FOOTPRINT</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Centralised technology. Jurisdiction-specific compliance.
          </h2>

          <div className="grid grid-cols-12 gap-y-12 lg:gap-12">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-caption text-crypto mb-6">OPERATIONAL</p>
              <div className="flex flex-col gap-6">
                {operationalLicences.map((lic) => (
                  <div key={lic.name} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-crypto mt-[10px] shrink-0" />
                    <div>
                      <p className="text-primary">{lic.name}</p>
                      <p className="text-sm-body text-secondary leading-[1.7] mt-1">
                        {lic.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <p className="text-caption text-gold mb-6">TARGET</p>
              <div className="flex flex-col gap-6">
                {targetLicences.map((lic) => (
                  <div key={lic.name} className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-gold mt-[10px] shrink-0" />
                    <div>
                      <p className="text-primary">{lic.name}</p>
                      <p className="text-sm-body text-secondary leading-[1.7] mt-1">
                        {lic.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-caption text-secondary mb-6">
              BANKING & LIQUIDITY PARTNERS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="bg-surface p-6 flex flex-col items-center gap-2 text-center"
                >
                  <span
                    className={`w-2 h-2 ${p.active ? "bg-crypto" : "bg-gold"}`}
                  />
                  <span className="text-sm-body text-primary">{p.name}</span>
                  <span className="text-caption text-tertiary">{p.kind}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <EcosystemConnections from="crypto" links={CONNECTIONS.crypto} />

      <CTAPanel
        eyebrow="TRADE ON CRYPTORIO"
        title="Institutional crypto, without the theatre."
        description="Regulated. Institutional custody. Deep liquidity. OTC when size matters."
        primary={{
          href: "https://cryptorio.com",
          label: "Launch Cryptorio",
          external: true,
        }}
        secondary={{ href: "/contact", label: "OTC enquiries" }}
        variant="crypto"
      />
    </>
  );
}
