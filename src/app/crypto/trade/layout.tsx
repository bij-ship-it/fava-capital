import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital — Trade",
  description:
    "Spot and OTC execution on FAVA Digital, powered by Cryptorio. Deep liquidity, intelligent routing, institutional-grade compliance.",
};

export default function DigitalTradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
