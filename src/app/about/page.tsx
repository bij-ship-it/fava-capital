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

const milestones = [
  { year: "2021", description: "Nigerian Tier-1 MFB licence secured for Rebasive" },
  { year: "2023", description: "US FinCEN MSB and Canadian FINTRAC MSB licences obtained" },
  { year: "2024", description: "FAVA Capital established as the holding company" },
  { year: "2025", description: "FAVA Markets goes live with proprietary dealing desk" },
  { year: "2026", description: "UK EMI licence in progress. Full ecosystem operational." },
];

const stats = [
  { value: "3", label: "Operating Verticals" },
  { value: "5+", label: "Regulatory Licences" },
  { value: "180+", label: "Payout Countries" },
  { value: "9", label: "Target Jurisdictions" },
];

export default function AboutPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary max-w-4xl">
          Independent businesses. Shared infrastructure. Scalable economics.
        </h1>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Mission */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Mission</p>
        <p className="text-accent text-secondary max-w-3xl">
          A diversified financial holding company building institutional-grade businesses across three
          core verticals. Each business operates independently. Shared payments infrastructure is an
          upside lever, not a dependency.
        </p>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Stats */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span className="text-numbers text-gold">{stat.value}</span>
              <span className="text-caption text-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Founders & Equity Holders */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Founders & Equity Holders</p>

        <div className="flex flex-col">
          {founders.map((member, i) => (
            <div
              key={member.name}
              className={`py-8 ${i < founders.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="flex items-start gap-4 md:w-80 shrink-0 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center shrink-0">
                    <span className="text-caption text-gold">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-subhead text-primary">{member.name}</h3>
                    <p className="text-caption text-secondary mt-1">{member.title}</p>
                  </div>
                </div>
                <p className="text-primary/60 text-[15px] leading-[1.7] font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Core Leadership Team */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Execution</p>

        <div className="flex flex-col">
          {coreLeadership.map((member, i) => (
            <div
              key={member.name}
              className={`py-8 ${i < coreLeadership.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="flex items-start gap-4 md:w-80 shrink-0 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center shrink-0">
                    <span className={`text-caption ${member.colorClass}`}>{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-subhead text-primary">{member.name}</h3>
                    <p className="text-caption text-secondary mt-1">{member.title}</p>
                  </div>
                </div>
                <p className="text-primary/60 text-[15px] leading-[1.7] font-light">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Group Leadership Structure */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Group Leadership Structure</p>

        {/* Group CEO */}
        <div className="flex flex-col items-center mb-16">
          <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center mb-4">
            <span className="text-caption text-gold">NP</span>
          </div>
          <h3 className="text-subhead text-primary text-center">Nathan Pasic</h3>
          <p className="text-caption text-secondary mt-1">Group CEO</p>
          <div className="w-px h-12 bg-border mt-6" />
        </div>

        {/* Subsidiary CEOs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center mb-4">
              <span className="text-caption text-markets">JM</span>
            </div>
            <h3 className="text-subhead text-primary">James Murray</h3>
            <p className="text-caption text-secondary mt-1">CEO, FAVA Markets</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center mb-4">
              <span className="text-caption text-payments">DO</span>
            </div>
            <h3 className="text-subhead text-primary">David Onaolapo</h3>
            <p className="text-caption text-secondary mt-1">CEO, Rebasive</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-surface border border-border flex items-center justify-center mb-4">
              <span className="text-caption text-wealth">CT</span>
            </div>
            <h3 className="text-subhead text-primary">Corey Turner</h3>
            <p className="text-caption text-secondary mt-1">CEO, FAVA Wealth</p>
          </div>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Timeline */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Timeline</p>

        <div className="flex flex-col gap-10">
          {milestones.map((milestone) => (
            <div key={milestone.year} className="flex flex-col md:flex-row md:gap-12">
              <span className="text-numbers text-gold md:w-32 shrink-0">
                {milestone.year}
              </span>
              <p className="text-primary/60 text-[15px] leading-[1.7] font-light mt-2 md:mt-1">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
