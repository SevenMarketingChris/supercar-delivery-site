import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import { GoldDivider } from "@/components/svg/icons";

interface FAQSectionProps {
  destination: string;
  faqs: Array<{ question: string; answer: string }>;
}

export default function FAQSection({ destination, faqs }: FAQSectionProps) {
  return (
    <section className="py-20 bg-surface">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
            <p className="mt-4 text-text-secondary">
              Common questions about shipping supercars to {destination}.
            </p>
          </div>
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
