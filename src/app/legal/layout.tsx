import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal information, regulatory disclosures, and policies for FAVA Capital and its operating entities.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
