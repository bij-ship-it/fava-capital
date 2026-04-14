import type { Metadata } from "next";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

export const metadata: Metadata = {
  title: "Security — FAVA Digital | FAVA Capital",
  description:
    "Institutional-grade security protecting your digital assets. Cold storage, proof of reserves, SOC2 compliance, and comprehensive insurance coverage.",
};

const securitySections = [
  {
    stat: "95%",
    label: "Cold Storage",
    body: "95% of all client assets are held in air-gapped, geographically distributed cold storage vaults. Multi-signature authorisation requires consensus from independent custodians before any funds can be moved. Private keys are generated and stored in hardware security modules that have never been connected to the internet.",
  },
  {
    stat: "1:1",
    label: "Proof of Reserves",
    body: "We publish cryptographically verifiable proof of reserves on a monthly basis, audited by an independent third party. Every client can verify that their assets are fully backed 1:1 at all times through our Merkle tree-based verification system.",
  },
  {
    stat: "$250M",
    label: "Insurance Coverage",
    body: "Comprehensive insurance policy covering digital assets held in both hot and cold wallets. Our coverage is underwritten by Lloyd's of London syndicate partners, providing institutional confidence against theft, security breaches, and internal collusion.",
  },
  {
    stat: "100%",
    label: "2FA Enforcement",
    body: "Mandatory two-factor authentication on all accounts with support for hardware security keys (YubiKey), TOTP authenticator apps, and biometric verification for mobile withdrawals. Withdrawal address whitelisting with mandatory time-lock for new addresses.",
  },
  {
    stat: "Type II",
    label: "SOC 2 Certified",
    body: "SOC 2 Type II certified infrastructure with continuous monitoring. Annual penetration testing by leading cybersecurity firms and real-time intrusion detection across all systems. Full audit trail on every administrative action.",
  },
  {
    stat: "$100K",
    label: "Bug Bounty",
    body: "Active bug bounty programme with rewards up to $100,000 for critical vulnerabilities. Partnered with leading security researchers and white-hat hacker communities worldwide. Responsible disclosure policy with rapid remediation SLAs.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge name="FAVA DIGITAL" color="#6366F1" />
        <h1 className="text-display-alt text-primary mb-6">Institutional-Grade Protection</h1>
        <p className="text-secondary max-w-[560px] mb-20">
          Your assets are protected by multiple layers of security, insurance, and
          compliance. Trust is earned through transparency and rigorous operational standards.
        </p>

        {/* Security Sections */}
        <div className="border-t border-border">
          {securitySections.map((section, i) => (
            <div
              key={section.label}
              className="py-[60px] border-b border-border grid grid-cols-1 md:grid-cols-[200px_1fr] gap-10"
            >
              <div>
                <span className="text-numbers text-primary block mb-2">{section.stat}</span>
                <span className="text-label text-secondary">{section.label}</span>
              </div>
              <p className="text-secondary leading-[1.7] max-w-[640px]">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
