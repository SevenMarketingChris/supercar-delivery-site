import Container from "@/components/ui/Container";
import { GoldDivider } from "@/components/svg/icons";

const brands = [
  "Ferrari",
  "Lamborghini",
  "McLaren",
  "Porsche",
  "Rolls-Royce",
  "Bentley",
  "Aston Martin",
  "Bugatti",
  "Pagani",
  "Koenigsegg",
  "Mercedes-AMG",
  "BMW M",
];

export default function VehicleTypes() {
  return (
    <section className="py-20 bg-surface-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Vehicles We Transport
          </h2>
          <div className="text-gold mx-auto w-48">
            <GoldDivider className="w-full h-5" />
          </div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            From modern hypercars to vintage classics, we specialise in the safe transport of the world&apos;s most valuable vehicles.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-surface-card border border-border-subtle rounded-md p-4 text-center hover:border-gold/30 transition-colors group"
            >
              <span className="text-sm font-semibold text-text-secondary group-hover:text-gold transition-colors tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
