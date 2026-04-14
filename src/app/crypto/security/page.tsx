import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Cryptorio | FAVA Capital",
  description:
    "Institutional-grade security protecting your digital assets. Cold storage, proof of reserves, SOC2 compliance, and comprehensive insurance coverage.",
};

const securityFeatures = [
  {
    title: "Cold Storage",
    description:
      "95% of all client assets are held in air-gapped, geographically distributed cold storage vaults. Multi-signature authorisation requires consensus from independent custodians before any funds can be moved.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    stat: "95%",
    statLabel: "Assets in cold storage",
  },
  {
    title: "Proof of Reserves",
    description:
      "We publish cryptographically verifiable proof of reserves on a monthly basis, audited by an independent third party. Every client can verify that their assets are fully backed 1:1 at all times.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    stat: "1:1",
    statLabel: "Reserve ratio",
  },
  {
    title: "Insurance Coverage",
    description:
      "Comprehensive insurance policy covering digital assets held in both hot and cold wallets. Our coverage is underwritten by Lloyd's of London syndicate partners, providing institutional confidence.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
    stat: "$250M",
    statLabel: "Insurance coverage",
  },
  {
    title: "2FA & Biometric",
    description:
      "Mandatory two-factor authentication on all accounts with support for hardware security keys (YubiKey), TOTP authenticator apps, and biometric verification for mobile withdrawals.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-6 0c0 1.97-.15 3.897-.436 5.78m6.936 6.22a48.028 48.028 0 01-7.548-3.228M3.75 4.5l16.5 16.5" />
      </svg>
    ),
    stat: "100%",
    statLabel: "Accounts with 2FA",
  },
  {
    title: "SOC2 Compliance",
    description:
      "SOC 2 Type II certified infrastructure with continuous monitoring. Annual penetration testing by leading cybersecurity firms and real-time intrusion detection across all systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    stat: "Type II",
    statLabel: "SOC 2 certified",
  },
  {
    title: "Bug Bounty Programme",
    description:
      "Active bug bounty programme with rewards up to $100,000 for critical vulnerabilities. Partnered with leading security researchers and white-hat hacker communities worldwide.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.22-2.058-1.907-3.555-3.97-3.555H8.915c-2.063 0-3.75 1.497-3.97 3.555a23.863 23.863 0 01-1.152 6.135c2.56-.932 5.324-1.44 8.207-1.44z" />
      </svg>
    ),
    stat: "$100K",
    statLabel: "Max bounty reward",
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-crypto-electric/30 text-crypto-electric text-sm font-[family-name:var(--font-heading)] tracking-wider uppercase">
            Security
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ivory mb-4">
            Institutional-Grade Protection
          </h1>
          <p className="text-platinum/60 text-lg leading-relaxed">
            Your assets are protected by multiple layers of security, insurance, and
            compliance. We hold ourselves to the highest standards in the industry
            because trust is earned, not assumed.
          </p>
        </div>

        {/* Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-obsidian/60 border border-ivory/5 rounded-2xl p-8 hover:border-crypto-electric/15 transition-colors group"
            >
              {/* Icon & Stat Row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-crypto-electric/10 flex items-center justify-center text-crypto-electric">
                  {feature.icon}
                </div>
                <div className="text-right">
                  <div className="text-crypto-electric font-[family-name:var(--font-heading)] text-2xl font-semibold">
                    {feature.stat}
                  </div>
                  <div className="text-platinum/30 text-xs">{feature.statLabel}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-ivory mb-3">
                {feature.title}
              </h3>
              <p className="text-platinum/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 bg-obsidian border border-ivory/5 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.06),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-ivory mb-4">
              Trust Through Transparency
            </h2>
            <p className="text-platinum/60 max-w-2xl mx-auto mb-8 leading-relaxed">
              We publish monthly proof-of-reserve attestations, undergo annual
              third-party security audits, and maintain open communication with
              regulators across every jurisdiction in which we operate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/crypto/fees"
                className="px-8 py-3.5 bg-crypto-electric text-white font-[family-name:var(--font-heading)] font-medium rounded-lg hover:bg-crypto-electric/90 transition-colors"
              >
                View Fee Schedule
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 border border-ivory/20 text-ivory font-[family-name:var(--font-heading)] font-medium rounded-lg hover:border-ivory/40 transition-colors"
              >
                Contact Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
