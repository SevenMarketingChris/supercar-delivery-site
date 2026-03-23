export interface GlobalLocation {
  pageType: "Continent" | "Country" | "City";
  continent: string;
  country: string;
  cityOrState: string;
  urlSlug: string;
  h1: string;
  priority: "High" | "Medium" | "Low";
  notes: string;
}

export interface UKDomesticLocation {
  pageType: "City" | "County";
  region: string;
  countyOrArea: string;
  city: string;
  urlSlug: string;
  h1: string;
  priority: "High" | "Medium" | "Low";
  notes: string;
}

export interface USStateLocation {
  pageType: "State";
  continent: string;
  country: string;
  state: string;
  urlSlug: string;
  h1: string;
  priority: "High" | "Medium" | "Low";
  notes: string;
}

export type ShipCarLocation = GlobalLocation | USStateLocation;

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  carMakeModel: string;
  message?: string;
  sourcePageSlug: string;
  sourcePageH1: string;
  honeypot?: string;
}

export interface LocationPageProps {
  location: ShipCarLocation | UKDomesticLocation;
  relatedLocations: Array<{ h1: string; urlSlug: string }>;
  breadcrumbs: Array<{ label: string; href: string }>;
}
