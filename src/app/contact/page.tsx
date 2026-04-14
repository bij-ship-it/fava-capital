"use client";

import { useState } from "react";

const enquiryTypes = [
  { label: "Investor Relations", email: "investors@favacapital.com" },
  { label: "Partnerships", email: "partners@favacapital.com" },
  { label: "Media", email: "press@favacapital.com" },
  { label: "General", email: "info@favacapital.com" },
];

const offices = [
  {
    city: "London",
    address: "One Bishopsgate Plaza, 80 Bishopsgate, London EC2N 4AG, United Kingdom",
  },
  {
    city: "Dubai",
    address: "Gate District, DIFC, Level 14, Dubai, United Arab Emirates",
  },
];

export default function ContactPage() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<string>("General");

  return (
    <div className="bg-base pt-32">
      {/* Hero */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 pb-[140px]">
        <h1 className="text-display text-primary">
          Get in Touch
        </h1>
        <div className="gold-rule w-32 mt-10" />
      </section>

      {/* Enquiry Types */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px] border-t border-border">
        <p className="text-label text-secondary mb-12">Enquiry Type</p>

        <div className="flex flex-col">
          {enquiryTypes.map((type, i) => (
            <button
              key={type.label}
              onClick={() => setSelectedEnquiry(type.label)}
              className={`py-5 flex items-center justify-between text-left cursor-pointer transition-colors duration-200 ${
                i < enquiryTypes.length - 1 ? "border-b border-border" : ""
              } ${selectedEnquiry === type.label ? "text-gold" : "text-primary/60 hover:text-primary"}`}
            >
              <span className="text-subhead">{type.label}</span>
              <span className="text-caption text-secondary">{type.email}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Contact Form */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Send a Message</p>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-label text-secondary block mb-3">Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-surface border border-border px-4 py-3 text-primary text-[15px] font-light placeholder:text-tertiary focus:outline-none focus:border-border-hover transition-colors"
              />
            </div>
            <div>
              <label className="text-label text-secondary block mb-3">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-surface border border-border px-4 py-3 text-primary text-[15px] font-light placeholder:text-tertiary focus:outline-none focus:border-border-hover transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-label text-secondary block mb-3">Enquiry Type</label>
              <select
                value={selectedEnquiry}
                onChange={(e) => setSelectedEnquiry(e.target.value)}
                className="w-full bg-surface border border-border px-4 py-3 text-primary text-[15px] font-light focus:outline-none focus:border-border-hover transition-colors appearance-none"
              >
                {enquiryTypes.map((type) => (
                  <option key={type.label} value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-label text-secondary block mb-3">Subsidiary</label>
              <select className="w-full bg-surface border border-border px-4 py-3 text-primary text-[15px] font-light focus:outline-none focus:border-border-hover transition-colors appearance-none">
                <option value="">Select subsidiary...</option>
                <option value="capital">FAVA Capital (Group)</option>
                <option value="markets">FAVA Markets</option>
                <option value="crypto">FAVA Digital</option>
                <option value="wealth">FAVA Wealth</option>
                <option value="commodities">FAVA Commodities</option>
                <option value="payments">FAVA Payments</option>
              </select>
            </div>
          </div>

          <div className="mb-8">
            <label className="text-label text-secondary block mb-3">Message</label>
            <textarea
              rows={6}
              placeholder="Tell us how we can help..."
              className="w-full bg-surface border border-border px-4 py-3 text-primary text-[15px] font-light placeholder:text-tertiary focus:outline-none focus:border-border-hover transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-bright text-primary text-label px-10 py-3.5 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>

      <div className="max-w-[1160px] mx-auto px-20 max-lg:px-6">
        <div className="gold-rule" />
      </div>

      {/* Office Locations */}
      <section className="max-w-[1160px] mx-auto px-20 max-lg:px-6 py-[140px]">
        <p className="text-label text-secondary mb-12">Offices</p>

        <div className="flex flex-col md:flex-row md:gap-24">
          {offices.map((office) => (
            <div key={office.city} className="mb-8 md:mb-0">
              <p className="text-subhead text-primary mb-2">{office.city}</p>
              <p className="text-secondary text-[15px] font-light leading-[1.7]">{office.address}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
