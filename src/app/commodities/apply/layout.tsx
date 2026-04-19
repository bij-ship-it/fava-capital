import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commodities — Apply",
  description:
    "Open a FAVA Commodities account to access metals, energy, and agriculture markets with research-led execution.",
};

export default function CommoditiesApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
