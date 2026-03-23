import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import QuickQuoteForm from "@/components/forms/QuickQuoteForm";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import SupercarSilhouette from "@/components/svg/SupercarSilhouette";
import HeroBgPattern from "@/components/svg/HeroBgPattern";
import TrustSignals from "@/components/sections/TrustSignals";
import HowItWorks from "@/components/sections/HowItWorks";
import VehicleTypes from "@/components/sections/VehicleTypes";
import { GoldDivider, MapPinIcon, ArrowRightIcon } from "@/components/svg/icons";

const popularDestinations = [
  { name: "Dubai", slug: "/ship-car-to-dubai", country: "UAE" },
  { name: "London", slug: "/ship-car-to-london", country: "UK" },
  { name: "Monaco", slug: "/ship-car-to-monaco", country: "Monaco" },
  { name: "Miami", slug: "/ship-car-to-miami", country: "USA" },
  { name: "Singapore", slug: "/ship-car-to-singapore", country: "Singapore" },
  { name: "Los Angeles", slug: "/ship-car-to-los-angeles", country: "USA" },
  { name: "New York", slug: "/ship-car-to-new-york", country: "USA" },
  { name: "Tokyo", slug: "/ship-car-to-tokyo", country: "Japan" },
  { name: "Paris", slug: "/ship-car-to-paris", country: "France" },
  { name: "Sydney", slug: "/ship-car-to-sydney", country: "Australia" },
  { name: "Zurich", slug: "/ship-car-to-zurich", country: "Switzerland" },
  { name: "Riyadh", slug: "/ship-car-to-riyadh", country: "Saudi Arabia" },
];

const continents = [
  {
    name: "Europe",
    slug: "/ship-car-to-europe",
    count: 33,
    desc: "UK, France, Germany, Italy, Spain, Switzerland & more",
  },
  {
    name: "North America",
    slug: "/ship-car-to-north-america",
    count: 10,
    desc: "USA, Canada, Mexico & Caribbean islands",
  },
  {
    name: "Asia",
    slug: "/ship-car-to-asia",
    count: 20,
    desc: "UAE, Saudi Arabia, Japan, Singapore, China & more",
  },
  {
    name: "South America",
    slug: "/ship-car-to-south-america",
    count: 8,
    desc: "Brazil, Argentina, Chile, Colombia & more",
  },
  {
    name: "Oceania",
    slug: "/ship-car-to-oceania",
    count: 3,
    desc: "Australia, New Zealand & Fiji",
  },
];

const ukHighlights = [
  { name: "London", slug: "/supercar-delivery-service-to-london" },
  { name: "Manchester", slug: "/supercar-delivery-service-to-manchester" },
  { name: "Birmingham", slug: "/supercar-delivery-service-to-birmingham" },
  { name: "Cheshire", slug: "/supercar-delivery-service-to-cheshire" },
  { name: "Surrey", slug: "/supercar-delivery-service-to-surrey" },
  { name: "Edinburgh", slug: "/supercar-delivery-service-to-edinburgh" },
  { name: "Essex", slug: "/supercar-delivery-service-to-essex" },
  { name: "Jersey", slug: "/supercar-delivery-service-to-jersey" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
        <HeroBgPattern className="absolute inset-0 w-full h-full opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface" />
        <SupercarSilhouette className="absolute right-0 bottom-[10%] w-[65%] max-w-4xl text-gold/8 translate-x-[10%]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-4">
              Worldwide Enclosed Transport
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.1] mb-6">
              Supercar Delivery{" "}
              <span className="gold-text">Worldwide</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl">
              Fully insured, enclosed transport for the world&apos;s finest vehicles.
              From Ferrari to Bugatti, we deliver door-to-door to over 50 countries.
            </p>
            <QuickQuoteForm sourcePageSlug="/" sourcePageH1="Homepage" />
          </div>
        </Container>
      </section>

      <TrustSignals />

      {/* Popular Destinations */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Popular Destinations
            </h2>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              We ship supercars to the world&apos;s most prestigious locations. Choose your destination to get a free quote.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularDestinations.map((dest) => (
              <Link
                key={dest.slug}
                href={dest.slug}
                className="group flex items-center gap-3 bg-surface-card border border-border-subtle rounded-md p-5 hover:border-gold/30 transition-all hover:bg-surface-elevated"
              >
                <MapPinIcon className="text-gold shrink-0" size={20} />
                <div className="flex-1">
                  <div className="text-white font-semibold text-sm group-hover:text-gold transition-colors">
                    {dest.name}
                  </div>
                  <div className="text-xs text-text-secondary">{dest.country}</div>
                </div>
                <ArrowRightIcon
                  className="text-gold/0 group-hover:text-gold transition-colors shrink-0"
                  size={16}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <HowItWorks />

      {/* Browse by Continent */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Ship by Region
            </h2>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continents.map((c) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="group bg-surface-card border border-border-subtle rounded-lg p-6 hover:border-gold/30 transition-all"
              >
                <h3 className="text-xl font-display text-white group-hover:text-gold transition-colors mb-2">
                  {c.name}
                </h3>
                <p className="text-sm text-text-secondary mb-3">{c.desc}</p>
                <span className="text-xs text-gold uppercase tracking-wide">
                  {c.count} countries &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <VehicleTypes />

      {/* UK Domestic Section */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              UK Supercar Delivery
            </h2>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
            <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
              Nationwide enclosed delivery across the UK. Same-day and next-day options available.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ukHighlights.map((loc) => (
              <Link
                key={loc.slug}
                href={loc.slug}
                className="group bg-surface-card border border-border-subtle rounded-md p-4 text-center hover:border-gold/30 transition-all"
              >
                <span className="text-sm text-text-secondary group-hover:text-gold transition-colors font-medium">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/supercar-delivery-service-to-london">
              <Button variant="outline" size="sm">
                View All UK Destinations
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA with full form */}
      <section className="py-20 bg-surface-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <Container>
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-text-secondary">
                Tell us about your vehicle and where it needs to go. We&apos;ll respond within 2 hours.
              </p>
            </div>
            <LeadCaptureForm
              sourcePageSlug="/"
              sourcePageH1="Homepage"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
