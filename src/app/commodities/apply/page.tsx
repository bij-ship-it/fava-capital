"use client";

import { useState } from "react";
import Link from "next/link";
import { ChannelBadge } from "@/components/ui/ChannelBadge";

type AccountType = "individual" | "corporate";

const inputClasses =
  "w-full px-4 py-3 bg-surface border border-border text-primary placeholder:text-tertiary focus:outline-none focus:border-border-hover transition-colors";

const selectClasses =
  "w-full px-4 py-3 bg-surface border border-border text-secondary focus:outline-none focus:border-border-hover transition-colors appearance-none";

export default function ApplyPage() {
  const [accountType, setAccountType] = useState<AccountType>("individual");

  return (
    <div className="min-h-screen bg-base pt-32">
      <div className="max-w-[1280px] mx-auto px-20 max-lg:px-6">
        {/* Header */}
        <ChannelBadge channel="commodities" label="FAVA COMMODITIES" />
        <h1 className="text-display-alt text-primary">Open Your Account</h1>
        <p className="text-secondary mt-4 max-w-[520px] leading-[1.7]">
          Begin trading global commodities markets in minutes. Complete the
          application below and our team will review within one business day.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 mt-16 pb-[140px]">
          {/* Form */}
          <div>
            {/* Account Type Toggle */}
            <div className="mb-12">
              <p className="text-label text-secondary mb-5">Account Type</p>
              <div className="flex border-b border-border">
                <button
                  onClick={() => setAccountType("individual")}
                  className={`pb-3 mr-8 text-label transition-colors ${
                    accountType === "individual"
                      ? "text-commodities border-b border-commodities"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  Individual
                </button>
                <button
                  onClick={() => setAccountType("corporate")}
                  className={`pb-3 text-label transition-colors ${
                    accountType === "corporate"
                      ? "text-commodities border-b border-commodities"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  Corporate
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="mb-12">
              <p className="text-label text-secondary mb-6">
                02 —{" "}
                {accountType === "individual"
                  ? "Personal Details"
                  : "Company Details"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accountType === "individual" ? (
                  <>
                    <div>
                      <label className="text-caption text-secondary block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className={inputClasses}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-caption text-secondary block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className={inputClasses}
                        readOnly
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="text-caption text-secondary block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Trading Ltd"
                        className={inputClasses}
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-caption text-secondary block mb-2">
                        Registration Number
                      </label>
                      <input
                        type="text"
                        placeholder="12345678"
                        className={inputClasses}
                        readOnly
                      />
                    </div>
                  </>
                )}
                <div>
                  <label className="text-caption text-secondary block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={inputClasses}
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-caption text-secondary block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+44 20 7123 4567"
                    className={inputClasses}
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-caption text-secondary block mb-2">
                    Country of Residence
                  </label>
                  <select className={selectClasses}>
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
                  <label className="text-caption text-secondary block mb-2">
                    Experience Level
                  </label>
                  <select className={selectClasses}>
                    <option>Select experience</option>
                    <option>Beginner (0-1 years)</option>
                    <option>Intermediate (1-3 years)</option>
                    <option>Advanced (3-5 years)</option>
                    <option>Professional (5+ years)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* KYC Upload */}
            <div className="mb-12">
              <p className="text-label text-secondary mb-2">
                Identity Verification
              </p>
              <p className="text-secondary mb-6">
                Upload a valid government-issued photo ID and proof of address.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-dashed border-border p-8 text-center hover:border-border-hover transition-colors cursor-pointer">
                  <p className="text-tertiary text-2xl mb-2">+</p>
                  <p className="text-secondary text-caption">Photo ID</p>
                  <p className="text-tertiary text-caption mt-1">
                    Passport, Licence, or National ID
                  </p>
                </div>
                <div className="border border-dashed border-border p-8 text-center hover:border-border-hover transition-colors cursor-pointer">
                  <p className="text-tertiary text-2xl mb-2">+</p>
                  <p className="text-secondary text-caption">Proof of Address</p>
                  <p className="text-tertiary text-caption mt-1">
                    Utility bill or bank statement (last 3 months)
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button className="w-full bg-surface border border-border text-commodities py-4 text-label hover:border-border-hover transition-colors">
              Submit Application
            </button>
            <p className="text-caption text-tertiary text-center mt-4">
              By submitting, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>

          {/* Sidebar */}
          <div>
            <div className="sticky top-32 space-y-10">
              {/* Application Steps */}
              <div>
                <p className="text-label text-secondary mb-6">
                  Application Process
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Complete Application",
                      desc: "Fill in your details and trading experience.",
                    },
                    {
                      step: "02",
                      title: "Verify Identity",
                      desc: "Upload KYC documents for verification.",
                    },
                    {
                      step: "03",
                      title: "Suitability Check",
                      desc: "Complete the regulatory suitability assessment.",
                    },
                    {
                      step: "04",
                      title: "Account Approved",
                      desc: "Fund your account and start trading.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="text-label text-commodities">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-primary text-[15px]">{item.title}</p>
                        <p className="text-tertiary text-[13px] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div className="border-t border-border pt-8">
                <p className="text-label text-secondary mb-6">Why Trust FAVA</p>
                <div className="space-y-4">
                  {[
                    "Multi-jurisdictional regulatory oversight",
                    "Client assets in segregated accounts",
                    "256-bit SSL encryption",
                    "Full GDPR compliance",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="text-tertiary mt-0.5">—</span>
                      <p className="text-secondary text-[13px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="border-t border-border pt-8">
                <p className="text-secondary mb-2">Need help?</p>
                <Link
                  href="/contact"
                  className="text-label text-commodities hover:text-primary transition-colors"
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
