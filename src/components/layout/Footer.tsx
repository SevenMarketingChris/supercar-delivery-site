import Link from "next/link";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/svg/LogoMark";
import { GoldDivider } from "@/components/svg/icons";

const popularDestinations = [
  { label: "Dubai", href: "/ship-car-to-dubai" },
  { label: "London", href: "/ship-car-to-london" },
  { label: "Monaco", href: "/ship-car-to-monaco" },
  { label: "Miami", href: "/ship-car-to-miami" },
  { label: "Singapore", href: "/ship-car-to-singapore" },
  { label: "Los Angeles", href: "/ship-car-to-los-angeles" },
  { label: "New York", href: "/ship-car-to-new-york" },
  { label: "Tokyo", href: "/ship-car-to-tokyo" },
  { label: "Paris", href: "/ship-car-to-paris" },
  { label: "Sydney", href: "/ship-car-to-sydney" },
];

const ukCities = [
  { label: "London", href: "/supercar-delivery-service-to-london" },
  { label: "Manchester", href: "/supercar-delivery-service-to-manchester" },
  { label: "Birmingham", href: "/supercar-delivery-service-to-birmingham" },
  { label: "Edinburgh", href: "/supercar-delivery-service-to-edinburgh" },
  { label: "Cheshire", href: "/supercar-delivery-service-to-cheshire" },
  { label: "Surrey", href: "/supercar-delivery-service-to-surrey" },
  { label: "Essex", href: "/supercar-delivery-service-to-essex" },
  { label: "Bristol", href: "/supercar-delivery-service-to-bristol" },
];

const continents = [
  { label: "Europe", href: "/ship-car-to-europe" },
  { label: "North America", href: "/ship-car-to-north-america" },
  { label: "South America", href: "/ship-car-to-south-america" },
  { label: "Asia", href: "/ship-car-to-asia" },
  { label: "Oceania", href: "/ship-car-to-oceania" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-border-subtle mt-20">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <LogoMark />
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Specialist enclosed transport for supercars, hypercars, and
              high-value vehicles worldwide. Fully insured, door-to-door.
            </p>
          </div>

          {/* Popular destinations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              {popularDestinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    Ship Car to {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UK Delivery */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              UK Delivery
            </h3>
            <ul className="space-y-2">
              {ukCities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    Delivery to {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Continents */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4">
              Ship by Region
            </h3>
            <ul className="space-y-2">
              {continents.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-4 mt-8">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-secondary hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-text-secondary hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-gold">
          <GoldDivider className="w-full max-w-md mx-auto h-5" />
        </div>

        <div className="mt-8 text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Supercar Delivery. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
