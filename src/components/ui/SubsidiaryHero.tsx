import { Container } from "./Container";
import { ChannelBadge } from "./ChannelBadge";
import { CTAButton } from "./CTAButton";
import { CTALink } from "./CTALink";
import {
  WealthIcon,
  MarketsIcon,
  DigitalIcon,
  CommoditiesIcon,
  PaymentsIcon,
} from "./SubsidiaryIcons";
import type { ChannelSlug } from "@/lib/channels";
import { CHANNELS } from "@/lib/channels";

const iconByChannel: Record<
  ChannelSlug,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  wealth: WealthIcon,
  markets: MarketsIcon,
  payments: PaymentsIcon,
  crypto: DigitalIcon,
  commodities: CommoditiesIcon,
};

// Radial glow behind the icon — uses the subsidiary colour itself
// at low alpha so it reads as "this is the [channel]" hero.
const glowByChannel: Record<ChannelSlug, string> = {
  wealth: "rgba(61, 129, 88, 0.35)",
  markets: "rgba(59, 130, 246, 0.35)",
  payments: "rgba(8, 145, 178, 0.35)",
  crypto: "rgba(124, 110, 243, 0.35)",
  commodities: "rgba(196, 122, 60, 0.35)",
};

export function SubsidiaryHero({
  channel,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  italic = false,
}: {
  channel: ChannelSlug;
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  italic?: boolean;
}) {
  const meta = CHANNELS[channel];
  const Icon = iconByChannel[channel];
  const glow = glowByChannel[channel];

  return (
    <section className="relative w-full pt-32 pb-[140px] max-md:pt-24 max-md:pb-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-8 relative z-10">
            <ChannelBadge
              channel={channel}
              label={eyebrow ?? meta.name.toUpperCase()}
            />
            <h1
              className={
                italic ? "text-display text-primary" : "text-display-alt text-primary"
              }
            >
              {title}
            </h1>
            {description && (
              <p className="text-secondary mt-8 max-w-xl leading-[1.6]">
                {description}
              </p>
            )}
            {(primary || secondary) && (
              <div className="mt-10 flex flex-wrap items-center gap-8">
                {primary && (
                  <CTAButton
                    href={primary.href}
                    variant={channel}
                    external={primary.external}
                  >
                    {primary.label}
                  </CTAButton>
                )}
                {secondary && (
                  <CTALink
                    href={secondary.href}
                    external={secondary.external}
                  >
                    {secondary.label}
                  </CTALink>
                )}
              </div>
            )}
          </div>

          <div
            className="col-span-12 hidden lg:col-span-4 lg:flex justify-end items-center relative"
            aria-hidden="true"
          >
            {/* Subsidiary-coloured radial glow — matches the home hero treatment. */}
            <div
              className="absolute inset-0 pointer-events-none blur-3xl"
              style={{
                background: `radial-gradient(closest-side, ${glow} 0%, transparent 70%)`,
              }}
            />
            <Icon size={260} className="relative opacity-30" />
          </div>
        </div>
      </Container>
    </section>
  );
}
