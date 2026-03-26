import Link from "next/link";
import Container from "@/components/ui/Container";
import { MapPinIcon, ArrowRightIcon, GoldDivider } from "@/components/svg/icons";
import { getDestinationName } from "@/lib/utils";

interface LocationGridProps {
  title: string;
  locations: Array<{ h1: string; urlSlug: string }>;
}

export default function LocationGrid({ title, locations }: LocationGridProps) {
  if (locations.length === 0) return null;

  return (
    <section className="py-20 bg-surface-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-heading mb-4">
            {title}
          </h2>
          <div className="text-gold mx-auto w-48">
            <GoldDivider className="w-full h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.urlSlug}
              href={loc.urlSlug}
              className="group flex items-center gap-3 bg-surface-card border border-border-subtle rounded-md p-4 hover:border-gold/30 transition-all hover:bg-surface-elevated"
            >
              <MapPinIcon className="text-gold shrink-0" size={18} />
              <span className="text-sm text-text-secondary group-hover:text-text-heading transition-colors flex-1">
                {getDestinationName(loc.h1)}
              </span>
              <ArrowRightIcon
                className="text-gold/0 group-hover:text-gold transition-colors shrink-0"
                size={16}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
