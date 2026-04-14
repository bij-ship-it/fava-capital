import { Hero } from "@/components/sections/home/Hero";
import { EcosystemGrid } from "@/components/sections/home/EcosystemGrid";
import { VisionStatement } from "@/components/sections/home/VisionStatement";
import { StatsCredibility } from "@/components/sections/home/StatsCredibility";
import { NewsInsights } from "@/components/sections/home/NewsInsights";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <EcosystemGrid />
      <VisionStatement />
      <StatsCredibility />
      <NewsInsights />
    </main>
  );
}
