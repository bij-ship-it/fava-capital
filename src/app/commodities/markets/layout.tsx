import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commodities — Markets",
  description:
    "Live coverage and instruments across FAVA Commodities — metals, energy, and agriculture.",
};

export default function CommoditiesMarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
