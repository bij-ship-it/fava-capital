import { Container } from "@/components/ui/Container";
import { Flywheel } from "@/components/ui/Flywheel";

export function FlywheelSection() {
  return (
    <section
      id="flywheel"
      className="relative bg-base py-[140px] max-md:py-20 border-t border-border"
      aria-labelledby="flywheel-title"
    >
      <Container>
        <div className="max-w-2xl mb-20">
          <p className="text-label text-secondary mb-6">THE FLYWHEEL</p>
          <h2 id="flywheel-title" className="text-display-alt text-primary">
            Each business strengthens the next.
          </h2>
          <p className="text-secondary mt-6 leading-[1.7]">
            Every FAVA business can stand alone. The value is in the
            connection. A client who enters through one product becomes
            reachable across all five. Data, capital, and trust compound
            as they move through the ecosystem.
          </p>
        </div>

        <Flywheel />
      </Container>
    </section>
  );
}
