import Link from "next/link";
import { CHANNELS_LIST } from "@/lib/channels";
import { FavaLogo } from "@/components/ui/FavaLogo";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Partners", href: "/partners" },
];

const legalLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Legal & compliance", href: "/legal" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-base">
      <div className="mx-auto max-w-[1280px] px-20 max-lg:px-6 py-20 max-md:py-16">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-12 max-md:gap-y-10">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            <FavaLogo variant="full" className="text-primary" />
            <p className="text-sm-body text-secondary max-w-xs">
              A connected financial ecosystem. Five regulated businesses,
              built to compound across every client relationship.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 flex flex-col gap-4">
            <p className="text-caption text-tertiary">Businesses</p>
            <ul className="flex flex-col gap-3">
              {CHANNELS_LIST.map((channel) => (
                <li key={channel.slug}>
                  <Link
                    href={channel.href}
                    className="text-sm-body text-secondary link-hover transition-colors hover:text-primary"
                  >
                    {channel.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
            <p className="text-caption text-tertiary">Company</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm-body text-secondary link-hover transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
            <p className="text-caption text-tertiary">Talk to us</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm-body text-secondary link-hover transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule mt-16 mb-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-tertiary">
            &copy; {new Date().getFullYear()} FAVA Capital. All rights reserved.
          </p>
          <p className="text-caption text-tertiary max-w-md md:text-right">
            FAVA Capital and its subsidiaries are regulated financial
            entities. Trading involves risk.
          </p>
        </div>
      </div>
    </footer>
  );
}
