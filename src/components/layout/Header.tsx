"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LogoMark from "@/components/svg/LogoMark";
import { MenuIcon, CloseIcon } from "@/components/svg/icons";
import ThemeToggle from "@/components/svg/ThemeToggle";

const navLinks = [
  { label: "Europe", href: "/ship-car-to-europe" },
  { label: "North America", href: "/ship-car-to-north-america" },
  { label: "Asia", href: "/ship-car-to-asia" },
  { label: "UK Delivery", href: "/supercar-delivery-service-to-london" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border-subtle">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" aria-label="Home">
            <LogoMark />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-gold transition-colors tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="#quote">
              <Button size="sm">Get Quote</Button>
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text-heading cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-surface-secondary border-t border-border-subtle" aria-label="Mobile navigation">
          <Container>
            <div className="py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-text-secondary hover:text-gold transition-colors uppercase text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#quote" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full mt-2">
                  Get Quote
                </Button>
              </Link>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
