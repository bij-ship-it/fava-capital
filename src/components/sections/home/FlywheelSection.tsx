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
          <p className="text-label text-secondary mb-6">THE ECOSYSTEM</p>
          <h2 id="flywheel-title" className="text-display-alt text-primary">
            One account. Every move your money makes.
          </h2>
          <p className="text-secondary mt-6 leading-[1.7]">
            Every FAVA business is complete on its own. The ecosystem is the
            upside. Invest with one product, discover the others already fit
            &mdash; trade, pay, hold, hedge &mdash; all from a platform that
            works harder the more of it you use.
          </p>
        </div>

        <Flywheel />
      </Container>
    </section>
  );
}
