import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { GoldDivider } from "@/components/svg/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Supercar Delivery for a free quote. Specialist enclosed vehicle transport worldwide. We respond within 2 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-heading mb-6">
              Contact Us
            </h1>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
            <p className="mt-4 text-text-secondary text-lg">
              Ready to ship your supercar? Fill in the form below and our team will respond within 2 hours with a personalised quote.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <LeadCaptureForm
              sourcePageSlug="/contact"
              sourcePageH1="Contact Us"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
