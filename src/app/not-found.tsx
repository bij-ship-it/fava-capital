import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <Container>
        <div className="flex flex-col items-start gap-8 max-w-xl">
          <p className="text-label text-secondary">404</p>
          <h1 className="text-display text-primary">
            Lost in the ecosystem.
          </h1>
          <p className="text-secondary leading-[1.7]">
            The page you were looking for isn&rsquo;t here. It may have moved,
            or it may never have existed. Either way, let&rsquo;s get you
            back on track.
          </p>
          <Link
            href="/"
            className="text-label text-gold link-hover"
          >
            Back to FAVA Capital &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
