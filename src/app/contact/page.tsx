"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { CHANNELS_LIST } from "@/lib/channels";

type EnquiryType =
  | "Investor relations"
  | "Partnerships"
  | "Media"
  | "General";

const enquiryTypes: { label: EnquiryType; email: string; body: string }[] = [
  {
    label: "Investor relations",
    email: "investors@favacapital.com",
    body: "Subscription enquiries for FAVA Wealth, institutional allocations, and capital structure questions.",
  },
  {
    label: "Partnerships",
    email: "partners@favacapital.com",
    body: "IBs, white-label, institutional liquidity, and bank/PSP integrations across the ecosystem.",
  },
  {
    label: "Media",
    email: "press@favacapital.com",
    body: "Press enquiries, interviews, and speaking requests.",
  },
  {
    label: "General",
    email: "info@favacapital.com",
    body: "Anything else — we'll route it to the right team within one business day.",
  },
];

const offices = [
  {
    city: "London",
    address:
      "One Bishopsgate Plaza, 80 Bishopsgate, London EC2N 4AG, United Kingdom",
  },
  {
    city: "Dubai",
    address: "Gate District, DIFC, Level 14, Dubai, United Arab Emirates",
  },
];

const inputClasses =
  "w-full bg-surface border border-border px-4 py-3 text-primary placeholder:text-tertiary focus:outline-none focus:border-border-hover transition-colors";

const selectClasses =
  "w-full bg-surface border border-border px-4 py-3 text-primary focus:outline-none focus:border-border-hover transition-colors appearance-none";

export default function ContactPage() {
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryType>("General");

  return (
    <>
      <section className="pt-32 pb-[80px] max-md:pt-24 max-md:pb-16">
        <Container>
          <p className="text-label text-secondary mb-6">TALK TO FAVA</p>
          <h1 className="text-display text-primary max-w-2xl">
            Tell us what you&rsquo;re looking for.
          </h1>
          <p className="text-secondary leading-[1.7] max-w-xl mt-8">
            Pick the team that fits your question. We respond within one
            business day.
          </p>
          <div className="gold-rule-left w-20 mt-10" />
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-10">WHO TO TALK TO</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {enquiryTypes.map((type) => {
              const active = selectedEnquiry === type.label;
              return (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => setSelectedEnquiry(type.label)}
                  aria-pressed={active}
                  className={cn(
                    "text-left bg-base p-8 flex flex-col gap-3 transition-colors",
                    active ? "bg-elevated" : "hover:bg-elevated",
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={cn(
                        "text-subhead",
                        active ? "text-gold" : "text-primary",
                      )}
                    >
                      {type.label}
                    </span>
                    <span className="text-caption text-secondary">
                      {type.email}
                    </span>
                  </div>
                  <p className="text-sm-body text-secondary leading-[1.7]">
                    {type.body}
                  </p>
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-6">SEND A MESSAGE</p>
          <h2 className="text-subhead text-primary mb-12 max-w-xl">
            Or drop us a line here and we&rsquo;ll route it to the right team.
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-2xl flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="text-caption text-secondary block mb-3"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-caption text-secondary block mb-3"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="enquiry"
                  className="text-caption text-secondary block mb-3"
                >
                  Enquiry type
                </label>
                <select
                  id="enquiry"
                  value={selectedEnquiry}
                  onChange={(e) =>
                    setSelectedEnquiry(e.target.value as EnquiryType)
                  }
                  className={selectClasses}
                >
                  {enquiryTypes.map((type) => (
                    <option key={type.label} value={type.label}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="subsidiary"
                  className="text-caption text-secondary block mb-3"
                >
                  About which product?
                </label>
                <select id="subsidiary" className={selectClasses} defaultValue="">
                  <option value="">Select one…</option>
                  <option value="group">FAVA Capital (group)</option>
                  {CHANNELS_LIST.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-caption text-secondary block mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us how we can help…"
                className={cn(inputClasses, "resize-none")}
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-block border border-gold text-gold text-label px-10 py-4 transition-colors hover:bg-gold/10"
              >
                Send message
              </button>
            </div>
          </form>
        </Container>
      </section>

      <section className="bg-surface border-t border-border py-[100px] max-md:py-16">
        <Container>
          <p className="text-label text-secondary mb-10">OFFICES</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {offices.map((office) => (
              <div key={office.city} className="bg-surface p-8">
                <p className="text-subhead text-primary mb-3">{office.city}</p>
                <p className="text-secondary leading-[1.7]">{office.address}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
