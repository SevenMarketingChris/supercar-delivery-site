import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTABannerProps {
  destination: string;
}

export default function CTABanner({ destination }: CTABannerProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-secondary relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to Ship Your Supercar{destination ? ` to ${destination}` : ""}?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Get a free, no-obligation quote today. Our specialist team responds within 2 hours.
          </p>
          <Link href="#quote">
            <Button size="lg">Request Your Free Quote</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
