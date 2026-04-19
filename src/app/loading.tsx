import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="flex items-center gap-4">
          <span className="h-[2px] w-12 bg-gold animate-pulse" />
          <span className="text-label text-secondary">Loading</span>
        </div>
      </Container>
    </section>
  );
}
