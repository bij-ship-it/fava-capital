import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Announcements and updates from across the FAVA Capital ecosystem.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
