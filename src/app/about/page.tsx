import Link from "next/link";

const team = [
  {
    name: "Luke Broadbent",
    title: "Founding Partner",
    bio: "Former institutional trader with over a decade of experience across FX, equities, and digital assets. Luke founded FAVA Capital with a vision to build a vertically integrated financial ecosystem.",
  },
  {
    name: "Sophia Martinez",
    title: "Chief Operating Officer",
    bio: "Operational strategist with a background in scaling fintech ventures across multiple jurisdictions. Sophia oversees the day-to-day execution of FAVA's multi-subsidiary structure.",
  },
  {
    name: "James Chen",
    title: "Chief Technology Officer",
    bio: "Full-stack architect and blockchain specialist. James leads the engineering teams across all FAVA subsidiaries, building institutional-grade infrastructure from the ground up.",
  },
  {
    name: "Amara Osei",
    title: "Head of Strategy & Compliance",
    bio: "Regulatory affairs expert with deep experience in FCA, DFSA, and MiCA frameworks. Amara ensures every vertical operates within the highest compliance standards.",
  },
];

const milestones = [
  { year: "2024", description: "FAVA Capital established as a next-generation holding company with a mandate to build vertically integrated financial infrastructure." },
  { year: "2025", description: "FAVA Markets goes live, offering institutional-grade FX brokerage with proprietary execution technology." },
  { year: "2026", description: "FAVA Digital, FAVA Wealth, and FAVA Commodities launched in rapid succession, completing the core ecosystem." },
];

export default function AboutPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary">
          Building the Future of Finance
        </h1>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Mission */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Mission</p>
        <p className="text-accent text-secondary max-w-3xl">
          To construct a vertically integrated financial ecosystem that empowers institutions and individuals
          to access world-class markets, cutting-edge technology, and compounding wealth strategies — all under one roof.
        </p>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Leadership */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Leadership</p>

        <div className="flex flex-col">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`py-8 ${i < team.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-12">
                <div className="md:w-64 shrink-0 mb-2 md:mb-0">
                  <h3 className="text-subhead text-primary">{member.name}</h3>
                  <p className="text-caption text-secondary mt-1">{member.title}</p>
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
