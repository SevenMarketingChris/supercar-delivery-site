import type { Metadata } from "next";

export function generateLocationMetadata(
  h1: string,
  metaDescription: string,
  slug: string
): Metadata {
  return {
    title: h1,
    description: metaDescription,
    alternates: {
      canonical: slug,
    },
    openGraph: {
      title: h1,
      description: metaDescription,
      type: "website",
    },
  };
}
