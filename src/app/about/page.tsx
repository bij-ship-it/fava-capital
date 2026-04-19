import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTAPanel } from "@/components/ui/CTAPanel";
import { CHANNELS_LIST, type ChannelSlug } from "@/lib/channels";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About",
  description:
    "FAVA Capital is a connected financial ecosystem — five regulated businesses, one platform, built to compound across every client relationship.",
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
    title: "Co-Founder, CEO — FAVA Wealth",
    bio: "Leads capital strategy, investor relations, and growth of the FAVA Wealth platform. 25+ years in business leadership, with extensive experience building and scaling ventures across high-net-worth and private capital markets.",
  },
  {
    name: "Lenin Manirajah",
    initials: "LM",
    title: "Co-Founder, Head of Commercial & Partnerships — FAVA Markets",
    bio: "Leads commercial strategy, partnerships, and brokerage expansion across key markets. 12+ years in FX/CFD markets, specialising in scaling retail and institutional distribution.",
  },
  {
    name: "Bijan Abdollahi",
    initials: "BA",
    title: "Co-Founder, CMO — FAVA Markets",
    bio: "Leads marketing, brand positioning, and client acquisition across FAVA Markets. Experience building businesses from inception, with a focus on structured growth, performance marketing, and market expansion.",
  },
  {
    name: "Luke Broadbent",
    initials: "LB",
    title: "Co-Founder, Director — Sales & Client Relations — FAVA Markets",
    bio: "Leads global client acquisition, partnerships, and revenue growth across FAVA Markets. 15+ years in sales leadership, building and scaling high-performing teams across financial services.",
  },
  {
    name: "Anthony Doumit",
    initials: "AD",
    title: "Co-Founder, Director — HNW Investors — FAVA Wealth",
    bio: "Leads high-net-worth investor strategy and capital raising initiatives for FAVA Wealth. Extensive experience across company growth, acquisitions, capital formation, and successful project exits.",
  },
];

type LeaderColor = "markets" | "payments" | "wealth" | "crypto" | "commodities";

const coreLeadership: {
  name: string;
  initials: string;
  title: string;
  channel: LeaderColor;
  bio: string;
}[] = [
  {
    name: "James Murray",
    initials: "JM",
    title: "CEO, FAVA Markets",
    channel: "markets",
    bio: "Responsible for brokerage operations, growth strategy, and international expansion. 15+ years in FX/CFD markets with leadership experience across multiple jurisdictions.",
  },
  {
    name: "David Onaolapo",
    initials: "DO",
    title: "CEO, FAVA Payments",
    channel: "payments",
    bio: "Leads the development and expansion of FAVA Payments' global settlement infrastructure, powered by Rebasive. 20+ years across FX, fintech, and asset management.",
  },
  {
    name: "Keyu Ruan",
    initials: "KR",
    title: "CTO, FAVA Payments",
    channel: "payments",
    bio: "Leads technology architecture and platform development for the FAVA Payments platform. Former CTO at KuCoin, with prior experience at Microsoft and Nordea Bank.",
  },
];

const values = [
  {
    title: "Build to last",
    body: "We don't chase trends. We build regulated, institutional-grade infrastructure designed to compound over decades — not quarters.",
  },
  {
    title: "Earn trust through transparency",
    body: "Published licences. Segregated capital. Audited infrastructure. We give you every reason to trust us — and never ask you to take our word for it.",
  },
  {
    title: "Independence by design",
    body: "Each business operates autonomously with its own leadership, P&L, and regulatory framework. Shared infrastructure is an advantage, not a dependency.",
  },
  {
    title: "Move with conviction",
    body: "We enter markets we understand deeply, with operators who've done it before. Speed matters — but only when paired with precision.",
  },
];

const channelTextClass: Record<LeaderColor, string> = {
  markets: "text-markets",
  payments: "text-payments",
  wealth: "text-wealth",
  crypto: "text-crypto",
  commodities: "text-commodities",
};

const channelBorderClass: Record<ChannelSlug, string> = {
  wealth: "border-t-wealth",
  markets: "border-t-markets",
  payments: "border-t-payments",
  crypto: "border-t-crypto",
  commodities: "border-t-commodities",
};

const channelDotClass: Record<ChannelSlug, string> = {
  wealth: "bg-wealth",
  markets: "bg-markets",
  payments: "bg-payments",
  crypto: "bg-crypto",
  commodities: "bg-commodities",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-[100px] max-md:pt-24 max-md:pb-20">
        <Container>
          <p className="text-label text-secondary mb-6">ABOUT FAVA CAPITAL</p>
          <h1 className="text-display text-primary max-w-3xl">
            A connected financial ecosystem.
          </h1>
          <p className="text-secondary leading-[1.7] max-w-2xl mt-8">
            FAVA Capital is a diversified holding company operating across
            wealth, trading, payments, digital assets, and commodities.
            Each business is independent. Each is built to be the best
            in its category. Together, they form one platform &mdash;
            compounding value at every step.
          </p>
          <div className="gold-rule-left w-20 mt-10" />
        </Container>
      </section>

      <section className="bg-surface border-y border-border">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14 py-12">
            <Image
              src="/images/fava-lattice-mark-only-dark-bg.svg"
              alt=""
              width={40}
              height={60}
              className="opacity-40 shrink-0"
              aria-hidden="true"
            />
            <blockquote className="text-accent text-primary leading-[1.4] max-w-2xl">
              &ldquo;Independent businesses. Shared infrastructure.
              Compounding value.&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      <section className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">WHAT WE BELIEVE</p>
          <h2 className="text-subhead text-primary mb-14 max-w-md">
            Principles that shape every decision we make.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-14">
            {values.map((v) => (
              <div key={v.title}>
                <div className="gold-rule-left w-10 mb-6" />
                <h3 className="text-primary">{v.title}</h3>
                <p className="text-secondary leading-[1.7] mt-3">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface border-y border-border py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">THE ECOSYSTEM</p>
          <h2 className="text-subhead text-primary mb-14 max-w-xl">
            Five businesses. One platform. Each works on its own &mdash;
            and together.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CHANNELS_LIST.map((channel) => (
              <Link
                key={channel.slug}
                href={channel.href}
                className="group bg-base p-8 flex flex-col gap-4 transition-colors hover:bg-elevated"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn("w-2 h-2", channelDotClass[channel.slug])}
                  />
                  <span className="text-primary">{channel.name}</span>
                </div>
                <p className="text-sm-body text-secondary leading-[1.7]">
                  {channel.role}
                </p>
                <p className="text-label text-secondary mt-auto group-hover:text-gold transition-colors">
                  Explore &rarr;
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[100px] max-md:py-16">
        <Container>
          <div className="grid grid-cols-12 gap-y-12 lg:gap-12 items-start">
            <div className="col-span-12 lg:col-span-6">
              <p className="text-label text-secondary mb-6">GLOBAL PRESENCE</p>
              <h2 className="text-subhead text-primary">
                Regulated across three continents. Operational from day one.
              </h2>
              <p className="text-secondary leading-[1.7] mt-6 max-w-lg">
                FAVA holds licences and registrations across multiple
                jurisdictions, with banking relationships, liquidity
                partnerships, and operational teams in place. We don&rsquo;t
                announce markets we plan to enter &mdash; we enter them.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-8">
              <div>
                <p className="text-numbers text-primary">5+</p>
                <p className="text-caption text-secondary mt-2">
                  Active licences
                </p>
              </div>
              <div>
                <p className="text-numbers text-primary">180+</p>
                <p className="text-caption text-secondary mt-2">
                  Payout countries
                </p>
              </div>
              <div>
                <p className="text-numbers text-primary">9</p>
                <p className="text-caption text-secondary mt-2">
                  Target jurisdictions
                </p>
              </div>
              <div>
                <p className="text-numbers text-gold">3</p>
                <p className="text-caption text-secondary mt-2">Continents</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface border-y border-border py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">FOUNDERS</p>
          <h2 className="text-subhead text-primary mb-14">
            Six co-founders. Operators, not observers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {founders.map((member) => (
              <div key={member.name} className="bg-surface p-8">
                <div className="w-12 h-12 bg-elevated border border-border flex items-center justify-center mb-5">
                  <span className="text-caption text-gold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-primary">{member.name}</h3>
                <p className="text-caption text-gold mt-2 mb-4">
                  {member.title}
                </p>
                <p className="text-sm-body text-secondary leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">LEADERSHIP</p>
          <h2 className="text-subhead text-primary mb-14">
            The operators running each vertical.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {coreLeadership.map((member) => (
              <div key={member.name} className="bg-base p-8">
                <div className="w-12 h-12 bg-surface border border-border flex items-center justify-center mb-5">
                  <span
                    className={cn(
                      "text-caption",
                      channelTextClass[member.channel],
                    )}
                  >
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-primary">{member.name}</h3>
                <p
                  className={cn(
                    "text-caption mt-2 mb-4",
                    channelTextClass[member.channel],
                  )}
                >
                  {member.title}
                </p>
                <p className="text-sm-body text-secondary leading-[1.7]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface border-t border-border py-[100px] max-md:py-16">
        <Container>
          <div className="flex flex-col items-center text-center">
            <p className="text-label text-secondary mb-10">GROUP STRUCTURE</p>

            <div className="bg-elevated border border-border px-10 py-6 mb-2">
              <p className="text-caption text-gold mb-2">GROUP CEO</p>
              <p className="text-subhead text-primary">Nathan Pasic</p>
            </div>

            <div className="w-px h-8 bg-border" />
            <div className="w-full max-w-2xl h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl mt-0">
              {(
                [
                  { name: "James Murray", role: "CEO, FAVA Markets", channel: "markets" },
                  { name: "David Onaolapo", role: "CEO, FAVA Payments", channel: "payments" },
                  { name: "Corey Turner", role: "CEO, FAVA Wealth", channel: "wealth" },
                ] as const
              ).map((ceo) => (
                <div
                  key={ceo.name}
                  className={cn(
                    "bg-base border border-border border-t-2 p-5 text-center",
                    channelBorderClass[ceo.channel],
                  )}
                >
                  <p
                    className={cn(
                      "text-caption mb-2",
                      channelTextClass[ceo.channel as LeaderColor],
                    )}
                  >
                    {ceo.role}
                  </p>
                  <p className="text-primary">{ceo.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTAPanel
        eyebrow="WORK WITH FAVA"
        title="Want to be part of what we're building?"
        description="Whether you're a client, a partner, or someone who wants to join the team — we'd like to hear from you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/careers", label: "View careers" }}
        variant="gold"
      />
    </>
  );
}
