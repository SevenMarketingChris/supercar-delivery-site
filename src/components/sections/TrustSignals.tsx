import Container from "@/components/ui/Container";
import { ShieldIcon, GlobeIcon, ClockIcon, KeyIcon } from "@/components/svg/icons";

const signals = [
  { icon: ShieldIcon, label: "Fully Insured", desc: "Complete value coverage" },
  { icon: GlobeIcon, label: "50+ Countries", desc: "Worldwide network" },
  { icon: ClockIcon, label: "Tracked Delivery", desc: "Real-time GPS updates" },
  { icon: KeyIcon, label: "Door-to-Door", desc: "White glove service" },
];

export default function TrustSignals() {
  return (
    <section className="border-y border-border-subtle bg-surface-secondary py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <div key={signal.label} className="flex items-center gap-3">
              <signal.icon className="text-gold shrink-0" size={36} />
              <div>
                <div className="text-sm font-semibold text-text-heading">{signal.label}</div>
                <div className="text-xs text-text-secondary">{signal.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
