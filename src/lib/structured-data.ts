export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(destination: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Supercar Delivery to ${destination}`,
    description: `Professional enclosed vehicle transport service for supercars and high-value vehicles to ${destination}. Fully insured, door-to-door delivery.`,
    provider: {
      "@type": "Organization",
      name: "Supercar Delivery",
    },
    areaServed: {
      "@type": "Place",
      name: destination,
    },
    url: slug,
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ label: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: crumb.href,
    })),
  };
}
