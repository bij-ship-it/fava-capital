import { Hero } from "@/components/sections/home/Hero";
import { EcosystemRows } from "@/components/sections/home/EcosystemRows";
import { VisionStatement } from "@/components/sections/home/VisionStatement";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { LatestInsights } from "@/components/sections/home/LatestInsights";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EcosystemRows />
      <VisionStatement />
      <StatsBar />
      <LatestInsights />
    </main>
  );
}
