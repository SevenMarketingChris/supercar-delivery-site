import type { Metadata } from "next";
import Link from "next/link";
import {
  loadAllShipCarLocations,
  getRelatedLocations,
} from "@/data/csv-loader";
import { generatePageContent, generateFAQs } from "@/data/content-templates";
import { generateLocationMetadata } from "@/lib/metadata";
import {
  generateFAQSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/structured-data";
import { getDestinationName } from "@/lib/utils";
import type { GlobalLocation, ShipCarLocation } from "@/types";
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
  const locations = loadAllShipCarLocations();
  return locations.map((loc) => ({
    slug: loc.urlSlug.replace("/ship-car-to-", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locations = loadAllShipCarLocations();
  const location = locations.find(
    (l) => l.urlSlug === `/ship-car-to-${slug}`
  );
  if (!location) return {};

  const { metaDescription } = generatePageContent(location);
  return generateLocationMetadata(
    location.h1,
    metaDescription,
    location.urlSlug
  );
}

export default async function ShipCarToPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allLocations = loadAllShipCarLocations();
  const location = allLocations.find(
    (l) => l.urlSlug === `/ship-car-to-${slug}`
  );

  if (!location) {
    return <div className="pt-32 text-center text-white">Page not found</div>;
  }

  const destination = getDestinationName(location.h1);
  const { intro, mainContent } = generatePageContent(location);
  const faqs = generateFAQs(destination, false);
  const related = getRelatedLocations(location, allLocations);

  // Breadcrumbs
  const breadcrumbs = [{ label: "Home", href: "/" }];
  if ("continent" in location && (location as GlobalLocation).continent) {
    const continent = (location as GlobalLocation).continent;
    const continentLoc = allLocations.find(
      (l): l is GlobalLocation =>
        "continent" in l &&
        l.pageType === "Continent" &&
        l.continent === continent
    );
    if (continentLoc && continentLoc.urlSlug !== location.urlSlug) {
      breadcrumbs.push({ label: continent, href: continentLoc.urlSlug });
    }
  }
  if (
    "country" in location &&
    (location as GlobalLocation).country &&
    (location as GlobalLocation).pageType === "City"
  ) {
    const country = (location as GlobalLocation).country;
    const countryLoc = allLocations.find(
      (l): l is GlobalLocation =>
        "country" in l &&
        l.pageType === "Country" &&
        l.country === country
    );
    if (countryLoc) {
      breadcrumbs.push({ label: country, href: countryLoc.urlSlug });
    }
  }
  breadcrumbs.push({ label: destination, href: location.urlSlug });

  // Related title
  let relatedTitle = "Other Destinations";
  const loc = location as GlobalLocation;
  if (loc.pageType === "Continent") relatedTitle = `Countries in ${destination}`;
  else if (loc.pageType === "Country")
    relatedTitle = `Cities in ${destination}`;
  else if ("state" in location)
    relatedTitle = "Popular US Destinations";

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

      {/* Main content + sidebar */}
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
            {/* Content */}
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
                <h2 className="text-xl font-display text-white mb-4">
                  Why Choose Us for {destination}
                </h2>
                <ul className="space-y-3">
                  {[
                    "Fully enclosed, climate-controlled transport",
                    "Comprehensive insurance covering full declared value",
                    "Real-time GPS tracking on every shipment",
                    "Professional condition reports with photographs",
                    "Customs and import documentation handled",
                    "Dedicated account manager for your shipment",
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

            {/* Sidebar form */}
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
      <LocationGrid title={relatedTitle} locations={related} />
      <CTABanner destination={destination} />
    </>
  );
}
