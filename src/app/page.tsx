import { Hero } from "@/components/sections/home/Hero";
import { EcosystemRows } from "@/components/sections/home/EcosystemRows";
import { FlywheelSection } from "@/components/sections/home/FlywheelSection";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { LatestInsights } from "@/components/sections/home/LatestInsights";
import { VisionStatement } from "@/components/sections/home/VisionStatement";
import { CTAPanel } from "@/components/ui/CTAPanel";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EcosystemRows />
      <VisionStatement />
      <FlywheelSection />
      <TrustBar />
      <StatsBar />
      <LatestInsights />
      <CTAPanel
        eyebrow="TALK TO FAVA"
        title="Let's see what the ecosystem can do for you."
        description="Whether you're investing, trading, moving money, or building on our infrastructure — we'd like to hear from you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/about", label: "Learn about FAVA" }}
        variant="gold"
      />
    </>
  );
}
