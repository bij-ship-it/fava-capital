import Link from "next/link";
import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "Research & Analysis — FAVA Commodities",
  description:
    "Expert commodity research, weekly market reports, seasonal analysis, and in-depth commentary from the FAVA Commodities desk.",
};

interface Article {
  category: string;
  title: string;
  date: string;
  author: string;
}

const articles: Article[] = [
  {
    category: "Precious Metals",
    title: "Weekly Gold Report: Central Bank Demand Remains Elevated",
    date: "April 11, 2026",
    author: "Marcus Henley",
  },
  {
    category: "Energy",
    title: "Energy Market Outlook: OPEC+ Production Cuts and Summer Demand",
    date: "April 9, 2026",
    author: "Natasha Volkov",
  },
  {
    category: "Agriculture",
    title: "Agricultural Commodities Seasonal Trends: Planting Season Preview",
    date: "April 7, 2026",
    author: "James Whitfield",
  },
  {
    category: "Base Metals",
    title: "Base Metals Supply Analysis: Copper Deficit Widens",
    date: "April 4, 2026",
    author: "Elena Marchetti",
  },
  {
    category: "Energy",
    title: "Natural Gas: European Storage and the Path to Winter",
    date: "April 2, 2026",
    author: "Natasha Volkov",
  },
  {
    category: "Precious Metals",
    title: "Silver: Industrial Demand vs Investment Flows",
    date: "March 30, 2026",
    author: "Marcus Henley",
  },
];

interface Expert {
  name: string;
  title: string;
  speciality: string;
}

const experts: Expert[] = [
  {
    name: "Marcus Henley",
    title: "Head of Precious Metals Research",
    speciality: "Gold, Silver, PGMs",
  },
  {
    name: "Natasha Volkov",
    title: "Senior Energy Analyst",
    speciality: "Crude Oil, Natural Gas, Renewables",
  },
  {
    name: "James Whitfield",
    title: "Agricultural Commodities Strategist",
    speciality: "Grains, Softs, Livestock",
  },
  {
    name: "Elena Marchetti",
    title: "Base Metals Analyst",
    speciality: "Copper, Aluminium, Zinc, Nickel",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-base pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA COMMODITIES" color="#D97706" />
        <h1 className="text-display-alt text-primary">
          Market Intelligence
        </h1>
        <p className="text-secondary mt-4 max-w-[520px] leading-[1.7]">
          In-depth research, weekly reports, and expert commentary from the
          FAVA Commodities desk.
        </p>

        {/* Articles as rows */}
        <div className="mt-16">
          <p className="text-label text-secondary mb-8">02 — Latest</p>
          {articles.map((article, i) => (
            <div
              key={article.title}
              className={`group flex items-start justify-between gap-6 py-8 cursor-pointer ${
                i < articles.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-caption text-commodities">
                    {article.category}
                  </span>
                  <span className="text-caption text-tertiary">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-subhead text-primary group-hover:text-commodities transition-colors">
                  {article.title}
                </h3>
              </div>
              <span className="text-label text-secondary group-hover:text-commodities transition-colors shrink-0 pt-6">
                Read More →
              </span>
            </div>
          ))}
        </div>

        {/* Expert Commentary */}
        <div className="py-[140px]">
          <p className="text-label text-secondary mb-8">03 — The Desk</p>
          <h2 className="text-display-alt text-primary mb-16">
            Expert Commentary
          </h2>
          <div className="space-y-0">
            {experts.map((expert, i) => (
              <div
                key={expert.name}
                className={`flex items-start justify-between gap-6 py-6 ${
                  i < experts.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div>
                  <p className="text-primary">{expert.name}</p>
                  <p className="text-secondary mt-1">{expert.title}</p>
                </div>
                <span className="text-caption text-tertiary shrink-0 pt-1">
                  {expert.speciality}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
