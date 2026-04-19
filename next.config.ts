import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/markets/accounts", destination: "/markets#accounts", permanent: true },
      { source: "/markets/pricing", destination: "/markets#accounts", permanent: true },
      { source: "/markets/products", destination: "/markets#instruments", permanent: true },
      { source: "/markets/platforms", destination: "/markets#platforms", permanent: true },
      { source: "/markets/learn", destination: "/markets", permanent: true },

      { source: "/commodities/markets", destination: "/commodities#markets", permanent: true },
      { source: "/commodities/instruments", destination: "/commodities#instruments", permanent: true },
      { source: "/commodities/research", destination: "/commodities#research", permanent: true },

      { source: "/crypto/trade", destination: "/crypto#platform", permanent: true },
      { source: "/crypto/assets", destination: "/crypto#platform", permanent: true },
      { source: "/crypto/fees", destination: "/crypto#fees", permanent: true },
      { source: "/crypto/security", destination: "/crypto#security", permanent: true },
      { source: "/crypto/api", destination: "/crypto#platform", permanent: true },
    ];
  },
};

export default nextConfig;
