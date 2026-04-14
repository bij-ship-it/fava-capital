"use client";

import { useState } from "react";
import Link from "next/link";

type AccountType = "individual" | "corporate";

export default function ApplyPage() {
  const [accountType, setAccountType] = useState<AccountType>("individual");

  return (
    <div className="bg-void min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-4">
          <Link
            href="/commodities"
            className="text-commodity-amber/70 text-sm font-[family-name:var(--font-heading)] hover:text-commodity-amber transition-colors"
          >
            ← FAVA Commodities
          </Link>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-commodity-amber" />
            <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] uppercase">
              Get Started
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-ivory mb-4">
            Open Your <span className="text-commodity-amber">Account</span>
          </h1>
          <p className="text-platinum/60 text-lg max-w-2xl">
            Begin trading global commodities markets in minutes. Complete the
            application below and our team will review your account within one
            business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Account Type Selector */}
            <div className="mb-10">
              <label className="text-ivory font-[family-name:var(--font-heading)] text-sm tracking-wider uppercase block mb-4">
                Account Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setAccountType("individual")}
                  className={`p-6 border text-left transition-all duration-200 ${
                    accountType === "individual"
                      ? "border-commodity-amber bg-commodity-amber/5"
                      : "border-platinum/10 bg-obsidian/30 hover:border-platinum/20"
                  }`}
                >
                  <div
                    className={`text-lg font-[family-name:var(--font-heading)] mb-1 ${
                      accountType === "individual"
                        ? "text-commodity-amber"
                        : "text-ivory"
                    }`}
                  >
                    Individual
                  </div>
                  <p className="text-platinum/50 text-sm">
                    Personal trading account for individual investors
                  </p>
                </button>
                <button
                  onClick={() => setAccountType("corporate")}
                  className={`p-6 border text-left transition-all duration-200 ${
                    accountType === "corporate"
                      ? "border-commodity-amber bg-commodity-amber/5"
                      : "border-platinum/10 bg-obsidian/30 hover:border-platinum/20"
                  }`}
                >
                  <div
                    className={`text-lg font-[family-name:var(--font-heading)] mb-1 ${
                      accountType === "corporate"
                        ? "text-commodity-amber"
                        : "text-ivory"
                    }`}
                  >
                    Corporate
                  </div>
                  <p className="text-platinum/50 text-sm">
                    Business account for companies and institutions
                  </p>
                </button>
              </div>
            </div>

            {/* Personal / Company Details */}
            <div className="border border-platinum/10 bg-obsidian/30 p-8 mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-6">
                {accountType === "individual"
                  ? "Personal Details"
                  : "Company Details"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accountType === "individual" ? (
                  <>
                    <div>
                      <label className="text-platinum/50 text-sm block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-platinum/50 text-sm block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                        readOnly
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-platinum/50 text-sm block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Trading Ltd"
                        className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-platinum/50 text-sm block mb-2">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        placeholder="12345678"
                        className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                        readOnly
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="text-platinum/50 text-sm block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-platinum/50 text-sm block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 20 7123 4567"
                    className="w-full px-4 py-3 bg-void border border-platinum/15 text-ivory placeholder:text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-platinum/50 text-sm block mb-2">
                    Country of Residence
                  </label>
                  <select className="w-full px-4 py-3 bg-void border border-platinum/15 text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors appearance-none">
                    <option>Select country</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>United Arab Emirates</option>
                    <option>Singapore</option>
                    <option>Switzerland</option>
                    <option>Germany</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-platinum/50 text-sm block mb-2">
                    Experience Level
                  </label>
                  <select className="w-full px-4 py-3 bg-void border border-platinum/15 text-platinum/25 text-sm focus:outline-none focus:border-commodity-amber/50 transition-colors appearance-none">
                    <option>Select experience</option>
                    <option>Beginner (0–1 years)</option>
                    <option>Intermediate (1–3 years)</option>
                    <option>Advanced (3–5 years)</option>
                    <option>Professional (5+ years)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* KYC Upload */}
            <div className="border border-platinum/10 bg-obsidian/30 p-8 mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-2">
                Identity Verification (KYC)
              </h3>
              <p className="text-platinum/50 text-sm mb-6">
                Upload a valid government-issued photo ID and proof of address
                to verify your identity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-dashed border-platinum/20 p-8 text-center hover:border-commodity-amber/30 transition-colors cursor-pointer">
                  <div className="text-platinum/30 text-3xl mb-3">+</div>
                  <p className="text-platinum/50 text-sm">
                    Photo ID
                  </p>
                  <p className="text-platinum/30 text-xs mt-1">
                    Passport, Driver&apos;s Licence, or National ID
                  </p>
                </div>
                <div className="border border-dashed border-platinum/20 p-8 text-center hover:border-commodity-amber/30 transition-colors cursor-pointer">
                  <div className="text-platinum/30 text-3xl mb-3">+</div>
                  <p className="text-platinum/50 text-sm">
                    Proof of Address
                  </p>
                  <p className="text-platinum/30 text-xs mt-1">
                    Utility bill or bank statement (last 3 months)
                  </p>
                </div>
              </div>
            </div>

            {/* Suitability Assessment */}
            <div className="border border-commodity-amber/20 bg-commodity-amber/5 p-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="text-commodity-amber text-xl mt-0.5">i</div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-2">
                    Suitability Assessment
                  </h3>
                  <p className="text-platinum/60 text-sm leading-relaxed">
                    As a regulated entity, FAVA Commodities is required to
                    assess your knowledge and experience before granting access
                    to leveraged commodity products. After submitting this
                    application, you will be asked to complete a brief
                    suitability questionnaire covering your financial background,
                    trading objectives, and risk tolerance.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full bg-commodity-amber text-void py-4 font-[family-name:var(--font-heading)] font-medium text-lg tracking-wide hover:bg-commodity-amber/90 transition-colors">
              Submit Application
            </button>
            <p className="text-platinum/30 text-xs text-center mt-4">
              By submitting, you agree to our Terms of Service and Privacy
              Policy. Your data is encrypted and handled in accordance with GDPR.
            </p>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              {/* Process Steps */}
              <div className="border border-platinum/10 bg-obsidian/30 p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-6">
                  Application Process
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Complete Application",
                      desc: "Fill in your personal details and trading experience.",
                    },
                    {
                      step: "02",
                      title: "Verify Identity",
                      desc: "Upload KYC documents for identity verification.",
                    },
                    {
                      step: "03",
                      title: "Suitability Check",
                      desc: "Complete the regulatory suitability assessment.",
                    },
                    {
                      step: "04",
                      title: "Account Approved",
                      desc: "Fund your account and start trading commodities.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="text-commodity-amber font-[family-name:var(--font-heading)] text-sm tabular-nums">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-ivory text-sm font-medium">
                          {item.title}
                        </p>
                        <p className="text-platinum/50 text-xs mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="border border-platinum/10 bg-obsidian/30 p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-ivory mb-6">
                  Why Trust FAVA
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      label: "Regulated",
                      desc: "Multi-jurisdictional regulatory oversight",
                    },
                    {
                      label: "Segregated Funds",
                      desc: "Client assets held in segregated accounts",
                    },
                    {
                      label: "Encrypted",
                      desc: "256-bit SSL encryption on all data",
                    },
                    {
                      label: "GDPR Compliant",
                      desc: "Full compliance with data protection regulations",
                    },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-commodity-amber mt-2 shrink-0" />
                      <div>
                        <p className="text-ivory text-sm">{badge.label}</p>
                        <p className="text-platinum/40 text-xs">
                          {badge.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="border border-platinum/10 bg-obsidian/30 p-8">
                <h3 className="font-[family-name:var(--font-heading)] text-sm text-ivory mb-3">
                  Need Help?
                </h3>
                <p className="text-platinum/50 text-sm mb-4">
                  Our onboarding team is available to assist you through the
                  application process.
                </p>
                <Link
                  href="/contact"
                  className="text-commodity-amber text-sm font-[family-name:var(--font-heading)] hover:underline"
                >
                  Contact Support →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
