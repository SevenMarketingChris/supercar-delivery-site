import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ShieldIcon, GlobeIcon, ClockIcon, KeyIcon } from "@/components/svg/icons";
import { GoldDivider } from "@/components/svg/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Specialist enclosed supercar transport worldwide. Fully insured, door-to-door delivery of high-value vehicles to over 50 countries.",
};

const values = [
  {
    icon: ShieldIcon,
    title: "Fully Insured",
    desc: "Every vehicle we transport is covered by comprehensive transit insurance for its full declared value. We provide documentation before collection.",
  },
  {
    icon: GlobeIcon,
    title: "Global Network",
    desc: "We operate across 50+ countries with trusted logistics partners, regular shipping routes, and local expertise at every destination.",
  },
  {
    icon: ClockIcon,
    title: "Tracked & Transparent",
    desc: "Real-time GPS tracking on every shipment. Your dedicated account manager keeps you informed at every stage of the journey.",
  },
  {
    icon: KeyIcon,
    title: "Door-to-Door",
    desc: "White-glove collection and delivery to any address worldwide. We handle every detail from pickup to final handover.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-text-heading mb-6">
              About Supercar Delivery
            </h1>
            <div className="text-gold mx-auto w-48">
              <GoldDivider className="w-full h-5" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed">
            <p>
              Supercar Delivery is a specialist enclosed vehicle transport service built for owners of the world&apos;s most valuable cars. We move supercars, hypercars, classic cars, and high-value vehicles across the UK and to over 50 countries worldwide.
            </p>
            <p>
              Every vehicle we handle is transported in a fully enclosed, climate-controlled carrier with soft-strap securing systems designed specifically for low-clearance, high-performance vehicles. We never use open trailers. Your car is protected from road debris, weather, and public view from the moment we collect it to the moment it arrives at your door.
            </p>
            <p>
              Our team has decades of combined experience in automotive logistics, with specialist knowledge of customs regulations, import procedures, and vehicle standards across every market we serve. Whether you&apos;re shipping a Ferrari from London to Dubai, a Lamborghini from New York to Monaco, or moving your collection across the UK, we have the infrastructure and expertise to make it happen safely.
            </p>
            <p>
              We work with private collectors, dealerships, auction houses, motorsport teams, and corporate clients. Our reputation is built on discretion, reliability, and the safe handling of vehicles worth six and seven figures.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-surface-secondary">
        <Container>
          <h2 className="text-3xl font-display font-bold text-text-heading text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 bg-surface-card border border-border-subtle rounded-lg p-6">
                <v.icon className="text-gold shrink-0" size={36} />
                <div>
                  <h3 className="text-lg font-display text-text-heading mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
