"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="flex flex-col items-start gap-8 max-w-xl">
          <p className="text-label text-secondary">Something went wrong</p>
          <h1 className="text-display text-primary">
            An unexpected error occurred.
          </h1>
          <p className="text-secondary leading-[1.7]">
            Our systems have flagged this and we&rsquo;re looking into it. You
            can retry, or head back to the home page.
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <button
              onClick={reset}
              className="inline-block border border-gold px-10 py-4 text-label text-gold transition-colors hover:bg-gold/10"
            >
              Try again
            </button>
            <Link href="/" className="text-label text-secondary link-hover hover:text-primary">
              Back to home &rarr;
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
