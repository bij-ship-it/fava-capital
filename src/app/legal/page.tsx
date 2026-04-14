"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const tabs = [
  { id: "terms", label: "Terms of Service" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "risk", label: "Risk Disclosures" },
  { id: "regulatory", label: "Regulatory Licences" },
];

const content: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  terms: {
    title: "Terms of Service",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: "By accessing or using any services provided by FAVA Capital Holdings Ltd and its subsidiaries (collectively, \"FAVA Capital\", \"we\", \"us\"), you agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and FAVA Capital. If you do not agree to these terms, you must not access or use our services. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting on this website.",
      },
      {
        heading: "2. Services and Eligibility",
        body: "FAVA Capital provides financial services through its subsidiary companies, including but not limited to foreign exchange brokerage, cryptocurrency exchange services, investment fund management, and commodities trading. Access to specific services may be subject to additional terms, eligibility requirements, and regulatory approvals. You represent and warrant that you are at least 18 years of age, legally capable of entering into binding contracts, and not prohibited from accessing financial services under any applicable laws or regulations.",
      },
      {
        heading: "3. Intellectual Property",
        body: "All content, trademarks, service marks, logos, and intellectual property displayed on this website and across FAVA Capital platforms are the exclusive property of FAVA Capital Holdings Ltd or its licensors. No part of this website or any associated materials may be reproduced, distributed, modified, or transmitted without prior written consent from FAVA Capital. Unauthorised use of any intellectual property may result in legal action.",
      },
      {
        heading: "4. Limitation of Liability",
        body: "To the maximum extent permitted by applicable law, FAVA Capital and its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability shall not exceed the fees paid by you to FAVA Capital in the twelve months preceding the event giving rise to the claim.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "FAVA Capital collects personal information necessary to provide our financial services and comply with regulatory obligations. This includes identity verification data (full name, date of birth, nationality, government-issued identification), contact information (email address, telephone number, residential address), financial information (source of funds, employment details, investment experience), and technical data (IP address, browser type, device identifiers). We collect this information directly from you, from third-party verification services, and automatically through cookies and similar technologies.",
      },
      {
        heading: "2. How We Use Your Information",
        body: "We process your personal data for the following purposes: to provide and maintain our financial services; to verify your identity in compliance with anti-money laundering (AML) and know-your-customer (KYC) regulations; to communicate with you regarding your accounts and our services; to detect and prevent fraud, market abuse, and other unlawful activities; to improve our products, services, and user experience; and to comply with legal and regulatory obligations across all jurisdictions in which we operate.",
      },
      {
        heading: "3. Data Sharing and Transfers",
        body: "FAVA Capital may share your personal information with affiliated subsidiary companies within the FAVA Capital group, regulated financial institutions and counterparties, regulatory authorities and law enforcement agencies where required by law, third-party service providers who assist in delivering our services (subject to appropriate data processing agreements), and professional advisors including lawyers, auditors, and insurers. Where personal data is transferred internationally, we ensure appropriate safeguards are in place in accordance with applicable data protection legislation.",
      },
      {
        heading: "4. Your Rights",
        body: "Depending on your jurisdiction, you may have the right to access, rectify, erase, or port your personal data, as well as the right to restrict or object to certain processing activities. To exercise any of these rights, please contact our Data Protection Officer at privacy@favacapital.com. We will respond to all legitimate requests within the timeframes required by applicable law.",
      },
    ],
  },
  risk: {
    title: "Risk Disclosures",
    sections: [
      {
        heading: "General Risk Warning",
        body: "Trading and investing in financial instruments, including foreign exchange (forex), contracts for difference (CFDs), cryptocurrencies, commodities, and securities, involves substantial risk of loss. Past performance is not indicative of future results. You should carefully consider whether trading or investing is appropriate for you in light of your financial circumstances, investment experience, and risk tolerance. You should not invest money that you cannot afford to lose.",
      },
      {
        heading: "Leveraged Products",
        body: "Leveraged trading products such as forex and CFDs carry a high degree of risk. Leverage can amplify both profits and losses. A relatively small market movement can lead to a proportionately much larger movement in the value of your position, which can work against you as well as for you. You may sustain losses in excess of your initial deposit. Between 70-80% of retail investor accounts lose money when trading leveraged products. You should ensure you fully understand the risks involved before opening a position.",
      },
      {
        heading: "Cryptocurrency Risk",
        body: "Cryptocurrency assets are highly volatile and speculative. The value of digital assets can fluctuate significantly within short time periods due to market sentiment, regulatory developments, technological changes, and macroeconomic factors. Cryptocurrency markets operate 24/7 and may be subject to manipulation, liquidity constraints, and cybersecurity risks. Regulatory frameworks for digital assets are evolving, and changes in regulation may adversely affect the value, availability, or legality of certain digital assets.",
      },
      {
        heading: "No Investment Advice",
        body: "Nothing on this website or in any FAVA Capital communication constitutes investment, financial, tax, or legal advice. All information is provided for general informational purposes only and should not be relied upon for making investment decisions. You should seek independent professional advice before making any investment or trading decisions. FAVA Capital does not provide personalised investment recommendations.",
      },
    ],
  },
  regulatory: {
    title: "Regulatory Licences",
    sections: [
      {
        heading: "FAVA Capital Holdings Ltd",
        body: "FAVA Capital Holdings Ltd is registered in England and Wales (Company No. 00000000) with its registered office at One Bishopsgate Plaza, 80 Bishopsgate, London EC2N 4AG. FAVA Capital Holdings Ltd operates as a holding company and does not itself provide regulated financial services directly to clients. Regulated activities are conducted through its authorised subsidiary entities.",
      },
      {
        heading: "FAVA Markets Ltd",
        body: "FAVA Markets Ltd is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 000000. FAVA Markets Ltd is authorised to provide execution-only brokerage services in foreign exchange, contracts for difference, and other derivative instruments. Client funds are held in segregated accounts with tier-one banking institutions in accordance with FCA Client Assets Sourcebook (CASS) rules.",
      },
      {
        heading: "Cryptorio Digital Assets Ltd",
        body: "Cryptorio Digital Assets Ltd is registered with the Financial Conduct Authority (FCA) as a cryptoasset business under the Money Laundering, Terrorist Financing and Transfer of Funds Regulations 2017. Registration number: 000000. Cryptorio operates in compliance with applicable anti-money laundering (AML) and counter-terrorist financing (CTF) requirements. Cryptoassets are not covered by the Financial Services Compensation Scheme (FSCS).",
      },
      {
        heading: "FAVA Wealth Management Ltd",
        body: "FAVA Wealth Management Ltd is authorised and regulated by the Financial Conduct Authority (FCA) under firm reference number 000000 as a full-scope alternative investment fund manager (AIFM). FAVA Wealth is authorised to manage alternative investment funds and provide discretionary portfolio management services to eligible investors. Minimum investment thresholds and suitability requirements apply.",
      },
    ],
  },
};

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState("terms");
  const activeContent = content[activeTab];

  return (
    <div className="bg-void pt-32 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-heading)] text-bright text-sm uppercase tracking-[0.2em] mb-6"
        >
          Legal
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-light text-ivory leading-tight"
        >
          Legal & Compliance
        </motion.h1>
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <div className="gold-rule w-32 mx-auto" />
        </motion.div>
      </section>

      {/* Risk Warning Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-commodity-amber/30 rounded-sm p-6 bg-commodity-amber/5"
        >
          <div className="flex items-start gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-commodity-amber shrink-0 mt-0.5">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm font-medium mb-1">
                Risk Warning
              </p>
              <p className="text-platinum/60 text-sm leading-relaxed">
                Trading leveraged products such as forex and CFDs carries a high level of risk and may not be suitable for all investors.
                Cryptocurrency assets are highly volatile and unregulated. You should carefully consider your objectives, financial situation,
                needs, and level of experience before engaging with any FAVA Capital subsidiary. You may lose more than your initial investment.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tabbed Content */}
      <section className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-12 border-b border-platinum/10 pb-4"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-sm text-sm font-[family-name:var(--font-heading)] transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-bright text-ivory"
                  : "text-platinum/50 hover:text-ivory hover:bg-platinum/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-light text-ivory mb-10">
            {activeContent.title}
          </h2>

          <div className="space-y-10">
            {activeContent.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="font-[family-name:var(--font-heading)] text-ivory text-lg font-medium mb-4">
                  {section.heading}
                </h3>
                <p className="text-platinum/60 text-sm leading-[1.8]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-platinum/10">
            <p className="text-platinum/40 text-xs leading-relaxed">
              Last updated: March 2026. FAVA Capital Holdings Ltd. All rights reserved.
              This document is for informational purposes only and does not constitute legal advice.
              Please consult a qualified legal professional for guidance specific to your circumstances.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
