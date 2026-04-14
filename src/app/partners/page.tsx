import Link from "next/link";

const partnershipModels = [
  {
    title: "Introducing Broker Programme",
    description:
      "Refer clients to FAVA Markets and earn competitive, tiered commissions on every trade. Our IB programme provides real-time tracking dashboards, dedicated relationship managers, and multi-tier sub-IB structures for maximum scalability.",
    features: [
      "Tiered commission structures up to $12/lot",
      "Real-time IB portal with client activity tracking",
      "Multi-tier sub-introducing broker support",
      "Dedicated IB relationship manager",
      "Custom marketing materials and landing pages",
    ],
  },
  {
    title: "White-Label Solutions",
    description:
      "Launch your own branded brokerage powered by FAVA's institutional-grade infrastructure. From execution technology to compliance frameworks, we provide the complete back-end so you can focus on growth.",
    features: [
      "Fully branded trading platform (web, mobile, desktop)",
      "Institutional liquidity and execution engine",
      "Built-in compliance and regulatory reporting",
      "Risk management and margin systems",
      "CRM and client onboarding automation",
    ],
  },
  {
    title: "Institutional Access",
    description:
      "Direct market access, prime brokerage services, and bespoke liquidity solutions for hedge funds, family offices, and asset managers. Benefit from deep institutional liquidity across FX, crypto, and commodities.",
    features: [
      "FIX API and ultra-low-latency connectivity",
      "Prime-of-prime liquidity aggregation",
      "Multi-asset cross-margining",
      "Bespoke credit and leverage arrangements",
      "Dedicated institutional sales desk",
    ],
  },
];

const ibStats = [
  { value: "$12", label: "Max Commission / Lot" },
  { value: "Real-time", label: "Tracking Dashboard" },
  { value: "Multi-tier", label: "Sub-IB Structure" },
  { value: "24/5", label: "Dedicated Support" },
];

export default function PartnersPage() {
  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary">
          Partner With FAVA
        </h1>
        <p className="text-secondary text-[15px] leading-[1.7] font-light max-w-xl mt-6">
          Whether you are an introducing broker, a fintech seeking white-label infrastructure,
          or an institution requiring direct market access — FAVA has a partnership model built for you.
        </p>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Partnership Models */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-16">Partnership Models</p>

        <div className="flex flex-col gap-24">
          {partnershipModels.map((model) => (
            <div key={model.title}>
              <h3 className="text-subhead text-primary mb-4">{model.title}</h3>
              <p className="text-primary/60 text-[15px] leading-[1.7] font-light max-w-2xl mb-8">
                {model.description}
              </p>
              <ul className="flex flex-col gap-3 mb-8 max-w-lg">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-gold mt-2 shrink-0 block" />
                    <span className="text-secondary text-[15px] font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="link-hover text-gold text-label">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* IB Programme Details */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">IB Programme</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-subhead text-primary mb-4">Grow With FAVA Markets</h3>
            <p className="text-primary/60 text-[15px] leading-[1.7] font-light mb-6">
              Our Introducing Broker programme is designed for financial professionals, money managers,
              and affiliates who want to build a sustainable revenue stream by referring clients to
              FAVA Markets. With competitive commissions, real-time analytics, and dedicated support,
              you have everything you need to scale.
            </p>
            <p className="text-primary/60 text-[15px] leading-[1.7] font-light">
              Whether you manage a network of sub-IBs or refer clients directly, our flexible
              commission structures and transparent reporting ensure you are always fairly rewarded
              for your contributions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-border">
            {ibStats.map((stat) => (
              <div key={stat.label} className="bg-surface p-8">
                <p className="text-numbers text-gold">{stat.value}</p>
                <p className="text-caption text-secondary mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* CTA */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Get Started</p>

        <h2 className="text-subhead text-primary mb-4">Ready to Partner?</h2>
        <p className="text-primary/60 text-[15px] leading-[1.7] font-light max-w-lg mb-8">
          Speak with our partnerships team to explore the model that best fits your business.
          We respond to all enquiries within 24 hours.
        </p>
        <Link href="/contact" className="link-hover text-gold text-label">
          Get in Touch &rarr;
        </Link>
      </section>
    </div>
  );
}
