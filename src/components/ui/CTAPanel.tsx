import { Container } from "./Container";
import { CTAButton } from "./CTAButton";
import { CTALink } from "./CTALink";
import type { ChannelSlug } from "@/lib/channels";

export function CTAPanel({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  variant = "neutral",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  variant?: ChannelSlug | "gold" | "neutral";
}) {
  return (
    <section className="w-full border-t border-border bg-surface py-[100px] max-md:py-16">
      <Container>
        <div className="flex flex-col items-start gap-8">
          {eyebrow && (
            <p className="text-label text-secondary">{eyebrow}</p>
          )}
          <h2 className="text-display-alt text-primary max-w-2xl">{title}</h2>
          {description && (
            <p className="text-secondary max-w-xl leading-[1.7]">
              {description}
            </p>
          )}
          <div className="mt-2 flex flex-wrap items-center gap-8">
            <CTAButton
              href={primary.href}
              variant={variant}
              external={primary.external}
            >
              {primary.label}
            </CTAButton>
            {secondary && (
              <CTALink
                href={secondary.href}
                variant="neutral"
                external={secondary.external}
              >
                {secondary.label}
              </CTALink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
