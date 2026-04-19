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

  return (
    <section className="relative w-full pt-32 pb-[140px] max-md:pt-24 max-md:pb-20">
      <Container>
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
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
              <p className="text-secondary mt-6 max-w-xl leading-[1.7]">
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

          <div className="col-span-12 hidden lg:col-span-4 lg:flex justify-end">
            <Icon size={160} className="opacity-20" />
          </div>
        </div>
      </Container>
    </section>
  );
}
