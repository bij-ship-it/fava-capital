import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// =============================================================================
// PRE-LAUNCH MODE — site is blocked from search engines.
// Combined with `robots: { index: false, follow: false }` in src/app/layout.tsx.
//
// To make the site crawlable again:
//   1. In this file: replace the rules array below with
//          rules: [{ userAgent: "*", allow: "/" }],
//      and uncomment the sitemap line.
//   2. In src/app/layout.tsx: change `robots` to `{ index: true, follow: true }`.
// =============================================================================

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    // sitemap: `${SITE.url}/sitemap.xml`,
  };
}

// Keep the import alive so swapping the sitemap line back is a one-line change.
void SITE;
