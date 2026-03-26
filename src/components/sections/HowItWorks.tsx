import Container from "@/components/ui/Container";
import { GoldDivider } from "@/components/svg/icons";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description:
      "Tell us where your vehicle needs to go. We'll provide a detailed, no-obligation quote within 2 hours.",
  },
  {
    number: "02",
    title: "We Handle Everything",
    description:
      "From collection to customs, insurance to delivery — our specialist team manages every detail of your shipment.",
  },
  {
    number: "03",
    title: "Your Car Arrives",
    description:
      "Your vehicle is delivered to your door in perfect condition, with a full photographic condition report.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-heading mb-4">
            How It Works
          </h2>
          <div className="text-gold mx-auto w-48">
            <GoldDivider className="w-full h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-surface-card border border-border-subtle rounded-lg p-8 text-center group hover:border-gold/30 transition-colors"
            >
              <div className="text-5xl font-display font-bold text-gold/20 group-hover:text-gold/40 transition-colors mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-display text-text-heading mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
