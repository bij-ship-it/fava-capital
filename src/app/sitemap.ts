import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CHANNELS_LIST } from "@/lib/channels";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "/",
    "/about",
    "/contact",
    "/careers",
    "/news",
    "/partners",
    "/legal",
  ];

  const channelPaths = CHANNELS_LIST.map((c) => c.href);

  return [...staticPaths, ...channelPaths].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
