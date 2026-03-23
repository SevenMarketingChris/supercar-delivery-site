import fs from "fs";
import path from "path";
import Papa from "papaparse";
import type {
  GlobalLocation,
  UKDomesticLocation,
  USStateLocation,
  ShipCarLocation,
} from "@/types";

function readCSV(filename: string): string {
  const filePath = path.join(process.cwd(), "src", "data", filename);
  return fs.readFileSync(filePath, "utf-8");
}

export function loadGlobalLocations(): GlobalLocation[] {
  const csv = readCSV("sitemap.csv");
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

  return (data as Record<string, string>[])
    .filter((row) => row["Page Type"] && row["URL Slug"])
    .map((row) => ({
      pageType: row["Page Type"] as GlobalLocation["pageType"],
      continent: row["Continent"] || "",
      country: row["Country"] || "",
      cityOrState: row["City/State"] || "",
      urlSlug: row["URL Slug"],
      h1: row["Page Title (H1)"],
      priority: row["Priority"] as GlobalLocation["priority"],
      notes: row["Notes"] || "",
    }));
}

export function loadUKDomesticLocations(): UKDomesticLocation[] {
  const csv = readCSV("sitemap-uk-domestic.csv");
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

  return (data as Record<string, string>[])
    .filter((row) => row["Page Type"] && row["URL Slug"])
    .map((row) => ({
      pageType: row["Page Type"] as UKDomesticLocation["pageType"],
      region: row["Region"] || "",
      countyOrArea: row["Country"] || row["County/Area"] || "",
      city: row["City/County"] || row["City"] || "",
      urlSlug: row["URL Slug"],
      h1: row["Page Title (H1)"],
      priority: row["Priority"] as UKDomesticLocation["priority"],
      notes: row["Notes"] || "",
    }));
}

export function loadUSStateLocations(): USStateLocation[] {
  const csv = readCSV("sitemap-us-states.csv");
  const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });

  return (data as Record<string, string>[])
    .filter((row) => row["Page Type"] && row["URL Slug"])
    .map((row) => ({
      pageType: "State" as const,
      continent: row["Continent"] || "",
      country: row["Country"] || "",
      state: row["State"] || "",
      urlSlug: row["URL Slug"],
      h1: row["Page Title (H1)"],
      priority: row["Priority"] as USStateLocation["priority"],
      notes: row["Notes"] || "",
    }));
}

export function loadAllShipCarLocations(): ShipCarLocation[] {
  const global = loadGlobalLocations();
  const usStates = loadUSStateLocations();
  return [...global, ...usStates];
}

export function getRelatedLocations(
  location: ShipCarLocation,
  allLocations: ShipCarLocation[]
): Array<{ h1: string; urlSlug: string }> {
  if ("state" in location) {
    const globalLocs = allLocations.filter(
      (l): l is GlobalLocation => "country" in l && l.country === "United States"
    );
    return globalLocs
      .filter((l) => l.pageType === "City")
      .slice(0, 12)
      .map((l) => ({ h1: l.h1, urlSlug: l.urlSlug }));
  }

  const loc = location as GlobalLocation;
  if (loc.pageType === "Continent") {
    return allLocations
      .filter(
        (l): l is GlobalLocation =>
          "continent" in l &&
          l.continent === loc.continent &&
          l.pageType === "Country"
      )
      .map((l) => ({ h1: l.h1, urlSlug: l.urlSlug }));
  }

  if (loc.pageType === "Country") {
    return allLocations
      .filter(
        (l): l is GlobalLocation =>
          "country" in l &&
          l.country === loc.country &&
          l.pageType === "City"
      )
      .map((l) => ({ h1: l.h1, urlSlug: l.urlSlug }));
  }

  // City - show sibling cities in same country
  return allLocations
    .filter(
      (l): l is GlobalLocation =>
        "country" in l &&
        l.country === loc.country &&
        l.pageType === "City" &&
        l.urlSlug !== loc.urlSlug
    )
    .slice(0, 12)
    .map((l) => ({ h1: l.h1, urlSlug: l.urlSlug }));
}

export function getUKRelatedLocations(
  location: UKDomesticLocation,
  allLocations: UKDomesticLocation[]
): Array<{ h1: string; urlSlug: string }> {
  // Show other locations in the same region first, then others
  const sameRegion = allLocations
    .filter(
      (l) => l.region === location.region && l.urlSlug !== location.urlSlug
    )
    .slice(0, 8);
  const otherRegions = allLocations
    .filter((l) => l.region !== location.region)
    .slice(0, 12 - sameRegion.length);

  return [...sameRegion, ...otherRegions].map((l) => ({
    h1: l.h1,
    urlSlug: l.urlSlug,
  }));
}
