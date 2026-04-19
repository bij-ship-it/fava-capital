import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markets — Products",
  description:
    "FX, indices, commodities, equities, and crypto CFDs available on FAVA Markets.",
};

export default function MarketsProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
