import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "FAVA Capital builds financial infrastructure that compounds — one connected platform for investing, trading, payments, digital assets, and commodities.",
};

const founders = [
  {
    name: "Nathan Pasic",
    initials: "NP",
    title: "Co-Founder, Group CEO",
    bio: "Leads group strategy, capital formation, and execution across all FAVA entities. Experience in structuring and scaling multi-entity financial platforms, with a focus on aligning brokerage, payments, and investment infrastructure.",
  },
  {
    name: "Corey Turner",
    initials: "CT",
    title: "Co-Founder, CEO \u2014 FAVA Wealth",
    bio: "Leads capital strategy, investor relations, and growth of the FAVA Wealth platform. 25+ years in business leadership, with extensive experience building and scaling ventures across high-net-worth and private capital markets.",
  },
  {
    name: "Lenin Manirajah",
    initials: "LM",
    title: "Co-Founder, Head of Commercial & Partnerships \u2014 FAVA Markets",
    bio: "Leads commercial strategy, partnerships, and brokerage expansion across key markets. 12+ years in FX/CFD markets, specialising in scaling retail and institutional distribution.",
  },
  {
    name: "Bijan Abdollahi",
    initials: "BA",
    title: "Co-Founder, CMO \u2014 FAVA Markets",
    bio: "Leads marketing, brand positioning, and client acquisition across FAVA Markets. Experience building businesses from inception, with a focus on structured growth, performance marketing, and market expansion.",
  },
  {
    name: "Luke Broadbent",
    initials: "LB",
    title: "Co-Founder, Director \u2014 Sales & Client Relations \u2014 FAVA Markets",
    bio: "Leads global client acquisition, partnerships, and revenue growth across FAVA Markets. 15+ years in sales leadership, building and scaling high-performing teams across financial services.",
  },
  {
    name: "Anthony Doumit",
    initials: "AD",
    title: "Co-Founder, Director \u2014 HNW Investors \u2014 FAVA Wealth",
    bio: "Leads high-net-worth investor strategy and capital raising initiatives for FAVA Wealth. Extensive experience across company growth, acquisitions, capital formation, and successful project exits.",
  },
];

const coreLeadership = [
  {
    name: "James Murray",
    initials: "JM",
    title: "CEO, FAVA Markets",
    colorClass: "text-markets",
    bio: "Responsible for brokerage operations, growth strategy, and international expansion. 15+ years in FX/CFD markets with leadership experience across multiple jurisdictions.",
  },
  {
    name: "David Onaolapo",
    initials: "DO",
    title: "CEO, Rebasive",
    colorClass: "text-payments",
    bio: "Leads the development and expansion of Rebasive\u2019s global payments and settlement infrastructure. 20+ years across FX, fintech, and asset management.",
  },
  {
    name: "Keyu Ruan",
    initials: "KR",
    title: "CTO, Rebasive",
    colorClass: "text-payments",
    bio: "Leads technology architecture and platform development for Rebasive. Former CTO at KuCoin, with prior experience at Microsoft and Nordea Bank.",
  },
];

const values = [
  {
    title: "Build to last",
    body: "We don\u2019t chase trends. We build regulated, institutional-grade infrastructure designed to compound over decades \u2014 not quarters.",
  },
  {
    title: "Earn trust through transparency",
    body: "Published licences. Segregated capital. Audited infrastructure. We give you every reason to trust us \u2014 and never ask you to take our word for it.",
  },
  {
    title: "Independence by design",
    body: "Each business operates autonomously with its own leadership, P&L, and regulatory framework. Shared infrastructure is an advantage, not a dependency.",
  },
  {
    title: "Move with conviction",
    body: "We enter markets we understand deeply, with operators who\u2019ve done it before. Speed matters \u2014 but only when paired with precision.",
  },
];

const ecosystem = [
  { name: "FAVA Wealth", desc: "Managed investment fund", color: "bg-wealth", href: "/wealth" },
  { name: "FAVA Markets", desc: "CFD & FX brokerage", color: "bg-markets", href: "/markets" },
  { name: "FAVA Payments", desc: "Cross-border payments", color: "bg-payments", href: "/payments" },
  { name: "FAVA Digital", desc: "Crypto exchange & OTC", color: "bg-crypto", href: "/crypto" },
  { name: "FAVA Commodities", desc: "Commodity trading", color: "bg-commodities", href: "/commodities" },
];

export default function AboutPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero — big, bold, emotional */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[100px]">
        <p className="text-label text-secondary mb-6">ABOUT FAVA CAPITAL</p>
        <h1 className="text-display text-primary max-w-3xl">
          We build financial infrastructure that compounds.
        </h1>
        <p className="text-secondary leading-[1.7] max-w-2xl mt-8">
          FAVA Capital is a diversified holding company operating across wealth
          management, institutional trading, global payments, digital assets,
          and commodities. Each business is independent. Each is built to be
          the best in its category. Together, they form something bigger.
        </p>
        <div className="gold-rule-left w-20 mt-10" />
      </section>

      {/* Full-width brand statement */}
      <section className="bg-surface border-t border-b border-border">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
            <Image
              src="/images/fava-lattice-mark-only-dark-bg.svg"
              alt=""
              width={40}
              height={60}
              className="opacity-40 shrink-0"
            />
            <blockquote className="text-accent text-[20px] md:text-[24px] text-primary leading-[1.4] max-w-2xl">
              &ldquo;Independent businesses. Shared infrastructure.
              Scalable economics.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">WHAT WE BELIEVE</p>
          <h2 className="text-subhead text-primary mb-16 max-w-md">
            Principles that shape every decision we make.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            {values.map((v) => (
              <div key={v.title}>
                <div className="gold-rule-left w-10 mb-6" />
                <h3 className="text-[17px] text-primary font-medium mb-3">
                  {v.title}
                </h3>
                <p className="text-secondary leading-[1.7]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ecosystem — visual */}
      <section className="bg-surface border-t border-b border-border py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-12">THE ECOSYSTEM</p>
          <div className="flex flex-wrap gap-4">
            {ecosystem.map((e) => (
              <Link
                key={e.name}
                href={e.href}
                className="group flex items-center gap-3 bg-base border border-border px-6 py-4 hover:border-border-hover transition-colors"
              >
                <span className={`w-2 h-2 ${e.color} shrink-0`} />
                <span className="text-primary text-[15px]">{e.name}</span>
                <span className="text-tertiary text-[13px] hidden sm:inline">{e.desc}</span>
                <span className="text-tertiary group-hover:text-gold transition-colors ml-2">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Where we operate — replaces stale stats */}
      <section className="py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <p className="text-label text-secondary mb-4">GLOBAL PRESENCE</p>
              <h2 className="text-subhead text-primary mb-6">
                Regulated across three continents. Operational from day one.
              </h2>
              <p className="text-secondary leading-[1.7] max-w-lg">
                FAVA holds licences and registrations across multiple jurisdictions,
                with banking relationships, liquidity partnerships, and operational
                teams in place. We don&apos;t announce markets we plan to enter &mdash;
                we enter them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-16 gap-y-10 shrink-0">
              <div>
                <p className="text-numbers text-primary">5+</p>
                <p className="text-caption text-secondary mt-2">Active Licences</p>
              </div>
              <div>
                <p className="text-numbers text-primary">180+</p>
                <p className="text-caption text-secondary mt-2">Payout Countries</p>
              </div>
              <div>
                <p className="text-numbers text-primary">9</p>
                <p className="text-caption text-secondary mt-2">Target Jurisdictions</p>
              </div>
              <div>
                <p className="text-numbers text-primary">3</p>
                <p className="text-caption text-secondary mt-2">Continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders — with more visual presence */}
      <section className="bg-surface border-t border-b border-border py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">FOUNDERS</p>
          <h2 className="text-subhead text-primary mb-16">
            Six co-founders. Operators, not observers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {founders.map((member) => (
              <div key={member.name} className="bg-surface p-8">
                <div className="w-12 h-12 bg-elevated border border-border flex items-center justify-center mb-5">
                  <span className="text-[13px] text-gold font-medium tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-[17px] text-primary font-medium">
                  {member.name}
                </h3>
                <p className="text-caption text-gold mt-1 mb-4">
                  {member.title}
                </p>
                <p className="text-[13px] text-secondary leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core leadership */}
      <section className="py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <p className="text-label text-secondary mb-4">LEADERSHIP</p>
          <h2 className="text-subhead text-primary mb-16">
            The operators running each vertical.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {coreLeadership.map((member) => (
              <div key={member.name} className="bg-base p-8">
                <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center mb-5">
                  <span className={`text-[13px] font-medium tracking-wider ${member.colorClass}`}>
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-[17px] text-primary font-medium">
                  {member.name}
                </h3>
                <p className={`text-caption mt-1 mb-4 ${member.colorClass}`}>
                  {member.title}
                </p>
                <p className="text-[13px] text-secondary leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group structure — visual */}
      <section className="bg-surface border-t border-border py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-label text-secondary mb-10">GROUP STRUCTURE</p>

            {/* CEO */}
            <div className="bg-elevated border border-border px-10 py-6 mb-2">
              <p className="text-[13px] text-gold font-medium tracking-wider mb-1">GROUP CEO</p>
              <p className="text-subhead text-primary">Nathan Pasic</p>
            </div>

            <div className="w-px h-8 bg-border" />

            {/* Connector bar */}
            <div className="w-full max-w-2xl h-px bg-border" />

            {/* Subsidiary CEOs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-0 w-full max-w-2xl">
              {[
                { name: "James Murray", role: "CEO, FAVA Markets", color: "text-markets", borderColor: "border-t-[#14B8A6]" },
                { name: "David Onaolapo", role: "CEO, Rebasive", color: "text-payments", borderColor: "border-t-[#0EA5E9]" },
                { name: "Corey Turner", role: "CEO, FAVA Wealth", color: "text-wealth", borderColor: "border-t-[#059669]" },
              ].map((ceo) => (
                <div key={ceo.name} className={`bg-base border border-border ${ceo.borderColor} border-t-2 p-5 text-center`}>
                  <p className={`text-caption ${ceo.color} mb-2`}>{ceo.role}</p>
                  <p className="text-primary text-[15px]">{ceo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Join us / Get in touch */}
      <section className="py-[100px] max-md:py-16">
        <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <h2 className="text-display text-primary max-w-lg">
                Want to be part of what we&apos;re building?
              </h2>
              <p className="text-secondary mt-6 max-w-md leading-[1.7]">
                Whether you&apos;re an investor, a partner, or someone
                who wants to join the team &mdash; we&apos;d like to hear from you.
              </p>
            </div>
            <div className="flex flex-col gap-5 shrink-0">
              <Link
                href="/contact"
                className="inline-block border border-gold text-gold text-label px-10 py-4 tracking-wider uppercase text-[12px] hover:bg-gold/10 transition-colors"
              >
                Get in Touch
              </Link>
              <Link href="/careers" className="text-label text-secondary link-hover hover:text-primary transition-colors">
                View careers &rarr;
              </Link>
              <Link href="/partners" className="text-label text-secondary link-hover hover:text-primary transition-colors">
                Partner with us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
