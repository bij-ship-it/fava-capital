import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Analysis — FAVA Commodities",
  description:
    "Expert commodity research, weekly market reports, seasonal analysis, and in-depth commentary from the FAVA Commodities desk.",
};

interface ResearchCard {
  category: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  readTime: string;
}

const research: ResearchCard[] = [
  {
    category: "Precious Metals",
    title: "Weekly Gold Report: Central Bank Demand Remains Elevated",
    date: "April 11, 2026",
    author: "Marcus Henley",
    excerpt:
      "Central bank gold purchases continued at a record pace through Q1, with emerging market reserves diversifying away from dollar-denominated assets. We examine the structural implications for gold pricing through H2.",
    readTime: "8 min read",
  },
  {
    category: "Energy",
    title: "Energy Market Outlook: OPEC+ Production Cuts and Summer Demand",
    date: "April 9, 2026",
    author: "Natasha Volkov",
    excerpt:
      "With OPEC+ extending voluntary cuts into the summer driving season, crude markets face a tightening supply backdrop. Our model projects Brent could retest $90 if compliance holds above 95%.",
    readTime: "12 min read",
  },
  {
    category: "Agriculture",
    title: "Agricultural Commodities Seasonal Trends: Planting Season Preview",
    date: "April 7, 2026",
    author: "James Whitfield",
    excerpt:
      "Spring planting conditions in the US Midwest point to a potential acreage shift from corn to soybeans. We review historical seasonal patterns and their implications for grain complex pricing.",
    readTime: "10 min read",
  },
  {
    category: "Base Metals",
    title: "Base Metals Supply Analysis: Copper Deficit Widens",
    date: "April 4, 2026",
    author: "Elena Marchetti",
    excerpt:
      "Global refined copper supply fell short of demand by 184,000 tonnes in Q1. With mine disruptions in Chile and rising EV demand, the structural deficit thesis remains firmly intact.",
    readTime: "9 min read",
  },
  {
    category: "Energy",
    title: "Natural Gas: European Storage and the Path to Winter",
    date: "April 2, 2026",
    author: "Natasha Volkov",
    excerpt:
      "European gas storage levels sit at 42% capacity — well above the five-year average for April. We assess whether the current contango structure offers hedging opportunities for industrial consumers.",
    readTime: "7 min read",
  },
  {
    category: "Precious Metals",
    title: "Silver: Industrial Demand vs Investment Flows",
    date: "March 30, 2026",
    author: "Marcus Henley",
    excerpt:
      "Silver's dual role as an industrial metal and monetary asset creates unique dynamics. Solar panel demand is set to consume 20% of annual supply by 2027, tightening the physical market significantly.",
    readTime: "11 min read",
  },
];

interface Expert {
  name: string;
  title: string;
  speciality: string;
  bio: string;
}

const experts: Expert[] = [
  {
    name: "Marcus Henley",
    title: "Head of Precious Metals Research",
    speciality: "Gold, Silver, PGMs",
    bio: "15 years in commodities research, previously with Goldman Sachs and the World Gold Council. Specialises in central bank reserve analysis and physical market flows.",
  },
  {
    name: "Natasha Volkov",
    title: "Senior Energy Analyst",
    speciality: "Crude Oil, Natural Gas, Renewables",
    bio: "Former energy strategist at BP Trading. Covers OPEC dynamics, refinery economics, and the energy transition. Regular contributor to the Financial Times Commodities section.",
  },
  {
    name: "James Whitfield",
    title: "Agricultural Commodities Strategist",
    speciality: "Grains, Softs, Livestock",
    bio: "Decade of experience in agricultural markets, previously with Cargill and ADM. Expert in seasonal patterns, weather modelling, and USDA crop report analysis.",
  },
  {
    name: "Elena Marchetti",
    title: "Base Metals Analyst",
    speciality: "Copper, Aluminium, Zinc, Nickel",
    bio: "Former LME floor trader turned research analyst. Deep expertise in mine supply dynamics, Chinese demand forecasting, and exchange inventory analysis.",
  },
];

const categoryColors: Record<string, string> = {
  "Precious Metals": "bg-commodity-amber/20 text-commodity-amber",
  Energy: "bg-red-500/20 text-red-400",
  Agriculture: "bg-green-500/20 text-green-400",
  "Base Metals": "bg-blue-500/20 text-blue-400",
};

export default function ResearchPage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <Link
            href="/commodities"
            className="text-commodity-amber/70 text-sm font-[family-name:var(--font-heading)] hover:text-commodity-amber transition-colors"
          >
            ← FAVA Commodities
          </Link>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-commodity-amber" />
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              Research & Analysis
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-ivory mb-4">
            Market <span className="text-commodity-amber">Intelligence</span>
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl">
            In-depth research, weekly reports, and expert commentary from the
            FAVA Commodities desk. Stay informed on the forces shaping global
            commodity markets.
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {research.map((article) => (
            <article
              key={article.title}
              className="group border border-platinum/10 bg-obsidian/30 flex flex-col hover:border-commodity-amber/20 transition-all duration-300"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`px-3 py-1 text-xs font-[family-name:var(--font-heading)] tracking-wide ${
                      categoryColors[article.category] ||
                      "bg-platinum/20 text-platinum"
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-platinum/30 text-xs">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-3 leading-snug group-hover:text-commodity-amber transition-colors">
                  {article.title}
                </h3>
                <p className="text-platinum/50 text-sm leading-relaxed mb-6 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-platinum/10">
                  <div>
                    <span className="text-ivory text-sm">{article.author}</span>
                    <span className="text-platinum/30 text-xs ml-3">
                      {article.date}
                    </span>
                  </div>
                  <span className="text-commodity-amber text-sm font-[family-name:var(--font-heading)] group-hover:translate-x-1 transition-transform">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expert Commentary */}
        <section className="border-t border-platinum/10 pt-20">
          <div className="mb-12">
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              The Desk
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-ivory mt-4 mb-4">
              Expert Commentary
            </h2>
            <p className="text-platinum/60 text-lg max-w-2xl">
              Our research team brings decades of institutional experience
              across every major commodity sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="border border-platinum/10 bg-obsidian/20 p-8 hover:border-commodity-amber/20 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-full bg-commodity-amber/10 border border-commodity-amber/30 flex items-center justify-center shrink-0">
                    <span className="text-commodity-amber font-[family-name:var(--font-display)] text-xl">
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory">
                      {expert.name}
                    </h3>
                    <p className="text-commodity-amber/70 text-sm mb-1">
                      {expert.title}
                    </p>
                    <p className="text-platinum/40 text-xs mb-4">
                      {expert.speciality}
                    </p>
                    <p className="text-platinum/60 text-sm leading-relaxed">
                      {expert.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-24 border border-commodity-amber/20 bg-commodity-amber/5 p-12 text-center">
          <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl text-ivory mb-4">
            Weekly Commodity Briefing
          </h3>
          <p className="text-platinum/60 max-w-lg mx-auto mb-8">
            Receive our flagship weekly report covering all major commodity
            sectors, delivered every Monday before market open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-5 py-3.5 bg-void border border-platinum/20 text-ivory placeholder:text-platinum/30 text-sm focus:outline-none focus:border-commodity-amber/50"
              readOnly
            />
            <button className="w-full sm:w-auto bg-commodity-amber text-void px-8 py-3.5 font-[family-name:var(--font-heading)] font-medium text-sm tracking-wide hover:bg-commodity-amber/90 transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
