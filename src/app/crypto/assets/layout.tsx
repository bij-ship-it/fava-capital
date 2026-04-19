import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital — Assets",
  description:
    "Supported digital assets on FAVA Digital, powered by Cryptorio. Custody, liquidity, and compliance you can underwrite.",
};

export default function DigitalAssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
