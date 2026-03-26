import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://supercardelivery.com";

export function generateLocationMetadata(
  h1: string,
  metaDescription: string,
  slug: string
): Metadata {
  const absoluteUrl = `${BASE_URL}${slug}`;

  return {
    title: h1,
    description: metaDescription,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      title: h1,
      description: metaDescription,
      type: "website",
      url: absoluteUrl,
      siteName: "Supercar Delivery",
      locale: "en_GB",
    },
  };
}
