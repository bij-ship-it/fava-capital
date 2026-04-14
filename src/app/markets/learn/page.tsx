import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Academy — FAVA Markets",
  description:
    "Free trading education. Guides, webinars, glossary, and daily market analysis to sharpen your edge.",
};

const categories = [
  {
    title: "Trading Guides",
    description:
      "Step-by-step guides covering everything from the basics of forex trading to advanced strategies. Written by our in-house analysts for traders at every level.",
    articles: [
      "Introduction to Forex Trading",
      "Understanding Leverage & Margin",
      "Technical Analysis Fundamentals",
      "Risk Management Essentials",
      "Building a Trading Plan",
    ],
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    href: "/markets/learn",
  },
  {
    title: "Webinars & Events",
    description:
      "Live and on-demand sessions with professional traders and market strategists. Interactive Q&A, real-time analysis, and actionable insights.",
    articles: [
      "Weekly Market Outlook (Live)",
      "Mastering Price Action",
      "Central Bank Policy & FX Impact",
      "Algorithmic Trading 101",
      "Q&A with Senior Analysts",
    ],
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    href: "/markets/learn",
  },
  {
    title: "Trading Glossary",
    description:
      "A comprehensive dictionary of trading terms and concepts. From 'Ask Price' to 'Zero-Coupon Bond', understand the language of the markets.",
    articles: [
      "Spread, Pip, & Lot Explained",
      "Order Types (Market, Limit, Stop)",
      "Margin Call vs Stop Out",
      "Slippage & Requotes",
      "Swap & Rollover",
    ],
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    href: "/markets/learn",
  },
  {
    title: "Market Analysis",
    description:
      "Daily and weekly research from our team of analysts. Technical setups, fundamental macro views, and trade ideas across all major asset classes.",
    articles: [
      "Daily FX Briefing",
      "Weekly Commodities Report",
      "US Equities Outlook",
      "Crypto Market Review",
      "Economic Calendar Preview",
    ],
    icon: (
      <svg className="w-8 h-8 text-fx-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    href: "/markets/learn",
  },
];

const featuredResources = [
  {
    tag: "Guide",
    title: "The Complete Guide to Forex Trading",
    description: "Everything you need to know to start trading currencies, from zero to your first trade.",
    readTime: "15 min read",
  },
  {
    tag: "Webinar",
    title: "Weekly Market Outlook",
    description: "Join our senior analyst every Monday for a breakdown of the week ahead across FX and indices.",
    readTime: "Live, Mondays 9:00 GMT",
  },
  {
    tag: "Analysis",
    title: "Central Banks in Focus: Rate Decisions & FX",
    description: "How monetary policy divergence is shaping major currency pair trends heading into Q2.",
    readTime: "8 min read",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-[family-name:var(--font-heading)] text-fx-teal uppercase tracking-widest text-sm mb-4">
            FAVA Markets
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-light text-ivory">
            Trading Academy
          </h1>
          <p className="mt-4 text-platinum/60 max-w-2xl text-lg">
            Sharpen your edge with free educational resources. From foundational concepts to advanced
            strategies, we equip you with the knowledge to trade with confidence.
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-ivory font-medium mb-6">
            Featured
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((item) => (
              <div
                key={item.title}
                className="bg-obsidian/40 border border-white/5 rounded-sm p-6 hover:border-fx-teal/20 transition-colors duration-300 group cursor-pointer"
              >
                <span className="inline-block text-xs font-[family-name:var(--font-heading)] uppercase tracking-wider text-fx-teal bg-fx-teal/10 px-2.5 py-0.5 rounded-sm mb-4">
                  {item.tag}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory font-medium mb-2 group-hover:text-fx-teal transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-platinum/60 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-platinum/40 text-xs">{item.readTime}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-obsidian/30 border border-white/5 rounded-sm p-8 hover:border-fx-teal/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0">{cat.icon}</div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory font-medium">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-platinum/60 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 ml-12 mb-6">
                {cat.articles.map((article) => (
                  <li key={article} className="text-sm text-platinum/50 flex items-center gap-2">
                    <span className="w-1 h-1 bg-fx-teal/50 rounded-full shrink-0" />
                    {article}
                  </li>
                ))}
              </ul>
              <div className="ml-12">
                <Link
                  href={cat.href}
                  className="text-fx-teal text-sm font-[family-name:var(--font-heading)] hover:underline"
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-obsidian/40 border border-white/5 rounded-sm p-10 md:p-14 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-ivory font-light mb-3">
            Stay Ahead of the Markets
          </h2>
          <p className="text-platinum/60 max-w-lg mx-auto text-sm mb-8">
            Subscribe to our daily briefing for market analysis, trade ideas, and educational content
            delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 bg-void/60 border border-white/10 rounded-sm px-4 py-3 text-sm text-ivory placeholder:text-platinum/30 focus:outline-none focus:border-fx-teal/40 transition-colors"
            />
            <button className="w-full sm:w-auto bg-fx-teal hover:bg-fx-teal/80 rounded-sm px-6 py-3 text-void font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider transition-colors duration-300 font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-platinum/30 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
}
