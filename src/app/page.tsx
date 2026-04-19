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
        title="Wherever you start, there's more the ecosystem can do for you."
        description="Investing, trading, moving money, holding digital assets, or partnering with us on the rails — tell us what you're looking for and we'll point you to the right team."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/about", label: "About FAVA" }}
        variant="gold"
      />
    </>
  );
}
