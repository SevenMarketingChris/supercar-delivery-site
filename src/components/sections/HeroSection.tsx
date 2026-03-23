import Container from "@/components/ui/Container";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import SupercarSilhouette from "@/components/svg/SupercarSilhouette";
import HeroBgPattern from "@/components/svg/HeroBgPattern";

interface HeroSectionProps {
  h1: string;
  subtitle: string;
  sourcePageSlug: string;
}

export default function HeroSection({ h1, subtitle, sourcePageSlug }: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background pattern */}
      <HeroBgPattern className="absolute inset-0 w-full h-full opacity-30" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface" />

      {/* Supercar silhouette */}
      <SupercarSilhouette className="absolute right-0 bottom-0 w-[60%] max-w-3xl text-gold/10 translate-x-[10%] translate-y-[10%]" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
            {subtitle}
          </p>
          <QuickQuoteForm sourcePageSlug={sourcePageSlug} sourcePageH1={h1} />
        </div>
      </Container>
    </section>
  );
}
