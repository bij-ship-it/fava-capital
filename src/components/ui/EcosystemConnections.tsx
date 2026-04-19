import Link from "next/link";
import { Container } from "./Container";
import { CHANNELS, type ChannelSlug } from "@/lib/channels";
import { cn } from "@/lib/cn";

const accentClass: Record<ChannelSlug, string> = {
  wealth: "bg-wealth",
  markets: "bg-markets",
  payments: "bg-payments",
  crypto: "bg-crypto",
  commodities: "bg-commodities",
};

const textClass: Record<ChannelSlug, string> = {
  wealth: "text-wealth",
  markets: "text-markets",
  payments: "text-payments",
  crypto: "text-crypto",
  commodities: "text-commodities",
};

export type EcosystemLink = {
  to: ChannelSlug;
  headline: string;
  body: string;
};

export function EcosystemConnections({
  from,
  links,
}: {
  from: ChannelSlug;
  links: EcosystemLink[];
}) {
  const fromChannel = CHANNELS[from];

  return (
    <section
      id="ecosystem"
      className="w-full border-t border-border bg-surface py-[100px] max-md:py-16"
      aria-labelledby="connections-title"
    >
      <Container>
        <div className="max-w-2xl mb-14">
          <p className="text-label text-secondary mb-6">
            ACROSS THE ECOSYSTEM
          </p>
          <h2
            id="connections-title"
            className="text-display-alt text-primary"
          >
            Where {fromChannel.shortName} meets the rest of FAVA.
          </h2>
          <p className="text-secondary mt-5 leading-[1.7]">
            Clients rarely stop at one product. Here are the two places{" "}
            {fromChannel.shortName} connects hardest &mdash; and the
            leverage you get when they&rsquo;re used together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {links.map(({ to, headline, body }) => {
            const target = CHANNELS[to];
            return (
              <Link
                key={to}
                href={target.href}
                className="group block bg-base p-10 max-lg:p-8 transition-colors hover:bg-elevated"
              >
                <div
                  className={cn(
                    "h-[2px] w-12 mb-8 transition-all duration-300 group-hover:w-20",
                    accentClass[to],
                  )}
                />
                <p className={cn("text-caption mb-3", textClass[to])}>
                  {target.name}
                </p>
                <h3 className="text-subhead text-primary mb-4">{headline}</h3>
                <p className="text-sm-body text-secondary leading-[1.7]">
                  {body}
                </p>
                <p
                  className={cn(
                    "text-label mt-8 link-hover",
                    textClass[to],
                  )}
                >
                  Go to {target.shortName} &rarr;
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
