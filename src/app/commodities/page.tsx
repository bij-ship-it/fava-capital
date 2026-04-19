import type { Metadata } from "next";
import { SubsidiaryHero } from "@/components/ui/SubsidiaryHero";
import { StatsStrip } from "@/components/ui/StatsStrip";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SubNav, type SubNavItem } from "@/components/ui/SubNav";
import { CTAPanel } from "@/components/ui/CTAPanel";
import { EcosystemConnections } from "@/components/ui/EcosystemConnections";
import { CONNECTIONS } from "@/lib/ecosystem";

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "FAVA Commodities — a physical commodities trading desk. We source, structure, and settle deals across energy, metals, and soft commodities. JV, fund, supply, or buy.",
};

const navItems: SubNavItem[] = [
  { id: "how", label: "How we work" },
  { id: "commodities", label: "Commodities" },
  { id: "involvement", label: "Get involved" },
  { id: "process", label: "Deal process" },
  { id: "ecosystem", label: "Ecosystem" },
];

const commodityGroups = [
  {
    heading: "Energy",
    items: [
      { name: "Crude oil", body: "Brent, WTI, Urals. Spot and term contracts." },
      { name: "EN590", body: "10ppm ultra-low-sulphur diesel. ARA, ASWP, FOB." },
      { name: "Jet fuel", body: "JP54, Jet A-1. Airport-bonded and bulk." },
      { name: "LNG", body: "Cargo-level term and spot, DES and FOB." },
      { name: "Coal", body: "Thermal and metallurgical. Indonesia, South Africa, Australia." },
    ],
  },
  {
    heading: "Metals",
    items: [
      { name: "Gold bullion", body: "LBMA good delivery, 99.5% and 99.99% bars." },
      { name: "Aluminium", body: "P1020 ingots and billets. LME-grade." },
      { name: "Copper cathode", body: "LME Grade A, 99.99% Cu." },
      { name: "Copper concentrate", body: "25–30% Cu content. Mine-origin, CIF." },
      { name: "Iron ore", body: "62% Fe fines, lump, and pellets. FOB and CFR." },
    ],
  },
  {
    heading: "Soft commodities",
    items: [
      { name: "Sugar", body: "ICUMSA 45 white, Brazilian raw. FOB Santos, CIF ASWP." },
      { name: "Coffee", body: "Arabica and Robusta green beans. Origin to buyer." },
    ],
  },
];

const involvementModes = [
  {
    label: "01",
    title: "Join as a JV partner",
    body: "Partner with FAVA on deals we source. Share the structure, share the upside. Typical JVs run from single cargoes to multi-shipment off-take agreements.",
  },
  {
    label: "02",
    title: "Fund a deal",
    body: "Bring capital to a deal that's already structured and de-risked. Transaction-secured, time-boxed, with defined returns on successful completion.",
  },
  {
    label: "03",
    title: "Bring the supply",
    body: "If you control origin — refinery, smelter, mine, mill — we bring qualified buyers, contracts, and settlement. Long-term off-take preferred.",
  },
  {
    label: "04",
    title: "Bring the buyer",
    body: "If you represent demand — trader, end-user, state buyer — we source product, verify, and move it on terms your mandate requires.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Mandate & verification",
    body: "NCNDA / ICPO or SCO. We verify counterparty, product spec, and commercial intent before anything else moves.",
  },
  {
    number: "02",
    title: "Deal structuring",
    body: "Incoterms, payment instrument (SBLC, DLC, MT103/MT760), inspection regime, delivery window. Contract draft circulated for both sides to sign.",
  },
  {
    number: "03",
    title: "Pre-shipment & inspection",
    body: "SGS or CIQ inspection at load port. POP released on buyer confirmation. Shipping nominated, vessel booked.",
  },
  {
    number: "04",
    title: "Shipment & settlement",
    body: "Cargo moves. Payment settles on presentation of documents — LC at sight, MT103 on Q88, or agreed hybrid. Settlement rails via FAVA Payments.",
  },
];

export default function CommoditiesPage() {
  return (
    <>
      <SubsidiaryHero
        channel="commodities"
        eyebrow="FAVA COMMODITIES"
        title="A physical commodities desk. Real cargoes, real counterparties."
        description="We source, structure, and settle physical deals across energy, metals, and soft commodities — matching qualified supply with qualified demand. JV partners, deal funders, producers, and buyers welcome."
        primary={{ href: "/contact", label: "Bring a deal" }}
        secondary={{ href: "#involvement", label: "Ways to get involved" }}
      />

      <StatsStrip
        stats={[
          { value: "12", label: "Active commodities" },
          { value: "40+", label: "Vetted counterparties" },
          { value: "6", label: "Continents sourced", accent: true },
          { value: "$0 fee", label: "To verified mandates" },
        ]}
      />

      <SubNav items={navItems} variant="commodities" />

      <section id="how" className="py-[100px] max-md:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-label text-secondary mb-6">HOW WE WORK</p>
              <h2 className="text-subhead text-primary">
                Not a broker. A trading desk with a network.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <p className="text-secondary leading-[1.7]">
                FAVA Commodities isn&rsquo;t a derivatives shop. We trade
                physical cargoes &mdash; crude, EN590, bullion, cathode,
                cargoes of sugar and coffee. We hold relationships with
                refineries, smelters, mines, mills, end-users, state buyers,
                and the banks that sit behind them.
              </p>
              <p className="text-secondary leading-[1.7] mt-5">
                If you have a deal, we&rsquo;ll look at it. If you have
                supply, we&rsquo;ll find the buyer. If you have demand, we&rsquo;ll
                find the product. If you want to co-fund, there&rsquo;s
                usually something open.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="commodities"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">WHAT WE TRADE</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Physical commodities across energy, metals, and softs.
          </h2>

          <div className="flex flex-col gap-16">
            {commodityGroups.map((group) => (
              <div key={group.heading}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[2px] w-8 bg-commodities" />
                  <p className="text-caption text-commodities">
                    {group.heading}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                  {group.items.map((item) => (
                    <div key={item.name} className="bg-surface p-8">
                      <h3 className="text-primary">{item.name}</h3>
                      <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="involvement" className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">GET INVOLVED</p>
          <h2 className="text-subhead text-primary mb-4 max-w-xl">
            Four ways into a deal.
          </h2>
          <p className="text-secondary leading-[1.7] max-w-xl mb-12">
            Whether you bring capital, product, demand, or want to partner
            on the structure &mdash; the desk is open.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {involvementModes.map((mode) => (
              <Card key={mode.label} accent="commodities">
                <span className="text-numbers text-commodities">
                  {mode.label}
                </span>
                <h3 className="text-subhead text-primary mt-4">
                  {mode.title}
                </h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-4">
                  {mode.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="process"
        className="bg-surface border-y border-border py-[100px] max-md:py-16"
      >
        <Container>
          <p className="text-label text-secondary mb-6">DEAL PROCESS</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            From mandate to settlement.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-base p-8">
                <span className="text-numbers text-commodities">
                  {step.number}
                </span>
                <h3 className="text-primary mt-5">{step.title}</h3>
                <p className="text-sm-body text-secondary leading-[1.7] mt-3">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-caption text-tertiary mt-8 max-w-3xl">
            Standard procedures apply: NCNDA/IMFPA for introductions,
            verifiable POP before payment instrument, SGS/CIQ inspection
            at load port. Timelines vary by commodity, origin, and
            counterparty.
          </p>
        </Container>
      </section>

      <EcosystemConnections
        from="commodities"
        links={CONNECTIONS.commodities}
      />

      <CTAPanel
        eyebrow="TALK TO THE DESK"
        title="Got a deal? Got supply? Got demand? Got capital?"
        description="Tell us what you're bringing and what you need. We respond within one business day to every qualified approach."
        primary={{ href: "/contact", label: "Bring a deal" }}
        secondary={{ href: "/about", label: "About FAVA" }}
        variant="commodities"
      />
    </>
  );
}
