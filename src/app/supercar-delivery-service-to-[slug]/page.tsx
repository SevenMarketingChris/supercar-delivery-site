import type { Metadata } from "next";
import Link from "next/link";
import {
  loadUKDomesticLocations,
  getUKRelatedLocations,
} from "@/data/csv-loader";
import { generateUKContent, generateFAQs } from "@/data/content-templates";
import { generateLocationMetadata } from "@/lib/metadata";
import {
  generateFAQSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { getDestinationName } from "@/lib/utils";
import Container from "@/components/ui/Container";
import HeroSection from "@/components/sections/HeroSection";
import TrustSignals from "@/components/sections/TrustSignals";
import HowItWorks from "@/components/sections/HowItWorks";
import VehicleTypes from "@/components/sections/VehicleTypes";
import FAQSection from "@/components/sections/FAQSection";
import LocationGrid from "@/components/sections/LocationGrid";
import CTABanner from "@/components/sections/CTABanner";
import LeadCaptureForm from "@/components/forms/LeadCaptureForm";
import { CheckmarkIcon } from "@/components/svg/icons";

export async function generateStaticParams() {
  const locations = loadUKDomesticLocations();
  return locations.map((loc) => ({
    slug: loc.urlSlug.replace("/supercar-delivery-service-to-", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locations = loadUKDomesticLocations();
  const location = locations.find(
    (l) => l.urlSlug === `/supercar-delivery-service-to-${slug}`
  );
  if (!location) return {};

  const { metaDescription } = generateUKContent(location);
  return generateLocationMetadata(
    location.h1,
    metaDescription,
    location.urlSlug
  );
}

export default async function UKDeliveryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allLocations = loadUKDomesticLocations();
  const location = allLocations.find(
    (l) => l.urlSlug === `/supercar-delivery-service-to-${slug}`
  );

  if (!location) {
    return <div className="pt-32 text-center text-text-heading">Page not found</div>;
  }

  const destination = getDestinationName(location.h1);
  const { intro, mainContent } = generateUKContent(location);
  const faqs = generateFAQs(destination, true);
  const related = getUKRelatedLocations(location, allLocations);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "UK Delivery", href: "/supercar-delivery-service-to-london" },
    { label: destination, href: location.urlSlug },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(destination, location.urlSlug)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <HeroSection
        h1={location.h1}
        subtitle={intro}
        sourcePageSlug={location.urlSlug}
      />

      <TrustSignals />

      <section className="py-16">
        <Container>
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-text-secondary">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href}>
                {i > 0 && <span className="mx-2 text-border-subtle">/</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-gold">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-gold transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {mainContent.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-text-secondary leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="mt-8 bg-surface-card border border-border-subtle rounded-lg p-6">
                <h2 className="text-xl font-display text-text-heading mb-4">
                  Why Choose Our {destination} Delivery Service
                </h2>
                <ul className="space-y-3">
                  {[
                    "Fully enclosed transport — no open trailers",
                    "Comprehensive transit insurance for full declared value",
                    "Real-time GPS tracking throughout delivery",
                    "Photographic condition reports at collection and delivery",
                    "Same-day and next-day express options available",
                    "Experienced drivers specialising in high-value vehicles",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckmarkIcon
                        className="text-gold shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-text-secondary text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadCaptureForm
                  deliveryLocation={destination}
                  sourcePageSlug={location.urlSlug}
                  sourcePageH1={location.h1}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <HowItWorks />
      <VehicleTypes />
      <FAQSection destination={destination} faqs={faqs} />
      <LocationGrid
        title="Other UK Destinations"
        locations={related}
      />
      <CTABanner destination={destination} />
    </>
  );
}
