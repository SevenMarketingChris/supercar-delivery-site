export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function slugToDestination(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getDestinationName(h1: string): string {
  return h1
    .replace(/^Ship Car to /i, "")
    .replace(/^Supercar Delivery Service to /i, "");
}
