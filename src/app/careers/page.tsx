import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the connected financial ecosystem at FAVA Capital. Open roles across investing, trading, payments, digital assets, and commodities.",
};

const values = [
  {
    title: "Innovation",
    description: "We challenge convention and build technology that reshapes how markets operate. Every team member is empowered to think beyond the status quo.",
  },
  {
    title: "Excellence",
    description: "Institutional-grade standards across every function. We hold ourselves to the highest benchmarks in execution, compliance, and client service.",
  },
  {
    title: "Integrity",
    description: "Transparency and trust underpin everything we do. From regulatory compliance to client communication, we operate with unwavering honesty.",
  },
  {
    title: "Ambition",
    description: "We think in decades and build for scale. Every hire joins a team committed to constructing something truly enduring in global finance.",
  },
];

const positions = [
  {
    title: "Senior FX Dealer",
    subsidiary: "FAVA Markets",
    location: "London, UK",
    type: "Full-time",
    color: "text-markets",
  },
  {
    title: "Blockchain Engineer",
    subsidiary: "FAVA Digital",
    location: "Remote / Dubai",
    type: "Full-time",
    color: "text-crypto",
  },
  {
    title: "Portfolio Analyst",
    subsidiary: "FAVA Wealth",
    location: "London, UK",
    type: "Full-time",
    color: "text-wealth",
  },
  {
    title: "Head of Compliance",
    subsidiary: "FAVA Capital",
    location: "London, UK",
    type: "Full-time",
    color: "text-bright",
  },
];

const benefits = [
  "Industry-leading base salary with performance bonuses and equity participation",
  "Hybrid and fully remote options across most roles, with hubs in London and Dubai",
  "Annual personal development fund for courses, conferences, and certifications",
  "Comprehensive private medical, dental, and mental health support",
  "Share in the upside through our employee equity programme across all subsidiaries",
  "Work across multiple verticals — FX, crypto, commodities, and wealth management",
];

export default function CareersPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary">
          Build What&apos;s Next
        </h1>
        <p className="text-secondary leading-[1.7] max-w-xl mt-6">
          Join a team of ambitious builders shaping the future of institutional finance,
          digital assets, and wealth management.
        </p>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Values */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Values</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {values.map((value) => (
            <div key={value.title}>
              <p className="text-label text-gold mb-4">{value.title}</p>
              <p className="text-secondary leading-[1.7]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Open Positions */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Open Positions</p>

        <div className="flex flex-col">
          {positions.map((pos, i) => (
            <div
              key={pos.title}
              className={`py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${
                i < positions.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-8">
                <h3 className="text-subhead text-primary">{pos.title}</h3>
                <span className={`text-caption ${pos.color}`}>{pos.subsidiary}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-secondary">{pos.location}</span>
                <span className="text-tertiary">{pos.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Benefits */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Benefits</p>

        <ul className="flex flex-col gap-4 max-w-2xl">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-4">
              <span className="text-gold mt-2 shrink-0 w-1 h-1 bg-gold block" />
              <span className="text-secondary leading-[1.7]">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
