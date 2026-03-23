import type { GlobalLocation, UKDomesticLocation, USStateLocation, ShipCarLocation } from "@/types";
import { getDestinationName } from "@/lib/utils";

const vehicleBrands = [
  "Ferrari", "Lamborghini", "McLaren", "Porsche", "Rolls-Royce",
  "Bentley", "Aston Martin", "Bugatti", "Pagani", "Koenigsegg",
  "Mercedes-AMG", "BMW M", "Audi RS", "Maserati",
];

function pickBrands(seed: string, count: number = 6): string[] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const shuffled = [...vehicleBrands].sort(
    (a, b) => ((a.charCodeAt(0) * hash) % 13) - ((b.charCodeAt(0) * hash) % 13)
  );
  return shuffled.slice(0, count);
}

export function generatePageContent(location: ShipCarLocation): {
  intro: string;
  mainContent: string[];
  metaDescription: string;
} {
  const dest = getDestinationName(location.h1);
  const brands = pickBrands(dest);
  const brandList = brands.slice(0, 4).join(", ");

  if ("state" in location) {
    return generateStateContent(location, dest, brandList);
  }

  const loc = location as GlobalLocation;
  switch (loc.pageType) {
    case "Continent":
      return generateContinentContent(loc, dest, brandList);
    case "Country":
      return generateCountryContent(loc, dest, brandList);
    case "City":
      return generateCityContent(loc, dest, brandList);
    default:
      return generateCityContent(loc, dest, brandList);
  }
}

function generateContinentContent(
  loc: GlobalLocation,
  dest: string,
  brandList: string
): { intro: string; mainContent: string[]; metaDescription: string } {
  return {
    intro: `Looking to ship your supercar to ${dest}? Our specialist enclosed transport service delivers high-value vehicles safely across every major destination in ${dest}. From ${brandList} and beyond, we handle the logistics so you can focus on the drive.`,
    mainContent: [
      `${dest} is home to some of the world's most prestigious driving roads, circuits, and automotive events. Whether you're relocating, attending a rally, or purchasing a vehicle overseas, our dedicated supercar shipping service ensures your vehicle arrives in showroom condition.`,
      `Every shipment to ${dest} includes fully enclosed transport, comprehensive marine and transit insurance, real-time GPS tracking, and white-glove collection and delivery. Our specialist team manages all customs documentation, import duties, and regulatory compliance for each destination country.`,
      `We operate a network of trusted logistics partners across ${dest}, with regular sailings and air freight options to all major ports and airports. Transit times vary by destination, but our team will provide a detailed timeline and keep you informed at every stage.`,
      `Our service covers the full spectrum of high-value vehicles — from modern hypercars and supercars to classic and vintage automobiles. ${loc.notes ? loc.notes + "." : ""} No vehicle is too valuable or too rare for our team to handle.`,
    ],
    metaDescription: `Ship your supercar to ${dest} with our fully insured enclosed transport service. Safe delivery of ${brandList} and more across ${dest}. Get a free quote today.`,
  };
}

function generateCountryContent(
  loc: GlobalLocation,
  dest: string,
  brandList: string
): { intro: string; mainContent: string[]; metaDescription: string } {
  const continent = loc.continent;
  return {
    intro: `Need to ship a supercar to ${dest}? Our premium enclosed vehicle transport service specialises in delivering high-value cars to ${dest} from anywhere in the world. ${brandList} — whatever you drive, we'll get it there safely.`,
    mainContent: [
      `Shipping a supercar to ${dest} requires specialist knowledge of local import regulations, customs procedures, and vehicle standards. Our experienced logistics team handles every detail, from export documentation at origin to import clearance and final delivery to your door in ${dest}.`,
      `${loc.notes ? loc.notes + ". " : ""}We offer both sea freight and air freight options for shipments to ${dest}, with fully enclosed containers that protect your vehicle from the elements and transit damage. Every vehicle is secured using soft-strap tie-down systems designed specifically for low-clearance, high-value cars.`,
      `Our ${dest} service includes collection from any address worldwide, professional vehicle inspection and condition reporting before and after transit, full marine and transit insurance covering the declared value of your vehicle, and door-to-door delivery to any address in ${dest}.`,
      `Whether you're permanently relocating your car collection to ${dest}, shipping a recent purchase from an international dealer, or transporting a vehicle for a driving event or rally in ${continent}, we have the expertise and infrastructure to make it happen.`,
    ],
    metaDescription: `Professional supercar shipping to ${dest}. Fully insured enclosed transport for ${brandList} and all high-value vehicles. Door-to-door delivery. Free quote.`,
  };
}

function generateCityContent(
  loc: GlobalLocation,
  dest: string,
  brandList: string
): { intro: string; mainContent: string[]; metaDescription: string } {
  const country = loc.country;
  return {
    intro: `Ship your supercar directly to ${dest}${country ? `, ${country}` : ""} with our premium enclosed transport service. We specialise in the safe, discreet delivery of ${brandList} and all high-performance vehicles to ${dest}.`,
    mainContent: [
      `${dest} is ${loc.notes ? loc.notes.toLowerCase().includes("major") || loc.notes.toLowerCase().includes("capital") || loc.notes.toLowerCase().includes("hub") ? `recognised as ${loc.notes.toLowerCase()}.` : `known for ${loc.notes.toLowerCase()}.` : `a key destination for luxury and high-performance vehicle owners.`} Our dedicated supercar delivery service provides door-to-door enclosed transport to any address in and around ${dest}.`,
      `Every shipment to ${dest} is handled by our specialist team who understand the unique requirements of transporting vehicles worth six and seven figures. From the moment we collect your car to the moment it arrives at your door in ${dest}, your vehicle is fully insured, GPS-tracked, and protected inside a climate-controlled enclosed carrier.`,
      `Our ${dest} service covers collection from any worldwide location — whether that's a dealership, auction house, private residence, or storage facility. We handle all shipping documentation, customs clearance${country ? ` for ${country}` : ""}, and local delivery logistics.`,
      `We regularly transport supercars and hypercars to ${dest} for private collectors, dealerships, automotive events, and corporate clients. Our reputation is built on discretion, reliability, and the safe handling of the world's most valuable vehicles.`,
    ],
    metaDescription: `Ship your supercar to ${dest}${country ? `, ${country}` : ""}. Fully insured enclosed transport for ${brandList} and more. Door-to-door delivery. Get your free quote.`,
  };
}

function generateStateContent(
  loc: USStateLocation,
  dest: string,
  brandList: string
): { intro: string; mainContent: string[]; metaDescription: string } {
  return {
    intro: `Looking to ship a supercar to ${dest}? Our specialist enclosed vehicle transport service delivers high-value cars safely to any address across ${dest}. ${brandList} and more — fully insured, door-to-door.`,
    mainContent: [
      `${loc.notes ? loc.notes + ". " : ""}Shipping a supercar to ${dest} requires carriers who understand the specific requirements of high-performance vehicles. Our enclosed auto transport service is purpose-built for cars worth six and seven figures, with soft-strap securing systems, hydraulic lift gates, and climate-controlled trailers.`,
      `Whether you're shipping to ${dest} from overseas or transporting a vehicle from another US state, our service includes white-glove collection, comprehensive insurance covering the full declared value, real-time GPS tracking, and professional delivery to any address in ${dest}.`,
      `We work with private collectors, dealerships, auction houses, and corporate clients across ${dest}. From recent purchases at Barrett-Jackson or Monterey Car Week to permanent relocations of entire car collections, our team has the experience to handle any high-value vehicle shipment.`,
      `Every vehicle we transport to ${dest} is fully documented with a detailed condition report at collection and delivery. Our team is available throughout the transit to provide updates and answer any questions about your shipment.`,
    ],
    metaDescription: `Professional supercar shipping to ${dest}. Fully insured enclosed transport for ${brandList} and all exotic vehicles. Door-to-door across ${dest}. Free quote.`,
  };
}

export function generateUKContent(location: UKDomesticLocation): {
  intro: string;
  mainContent: string[];
  metaDescription: string;
} {
  const dest = getDestinationName(location.h1);
  const brands = pickBrands(dest);
  const brandList = brands.slice(0, 4).join(", ");

  return {
    intro: `Need a supercar delivered to ${dest}? Our specialist enclosed vehicle delivery service operates across the UK, providing safe, discreet transport of ${brandList} and all high-performance vehicles directly to ${dest}.`,
    mainContent: [
      `${location.notes ? location.notes + ". " : ""}Our ${dest} supercar delivery service is designed for owners who demand the highest standards of vehicle care. Every car is transported in a fully enclosed, GPS-tracked carrier with soft-strap securing and hydraulic lift loading — no exposure to road debris, weather, or unnecessary mileage on your vehicle.`,
      `We collect from any UK location — private residences, dealerships, storage facilities, or auction houses — and deliver directly to your door in ${dest}. Our drivers are experienced in handling vehicles from ${brandList} and every other prestige marque.`,
      `Our ${dest} delivery service includes full transit insurance covering the declared value of your vehicle, a detailed photographic condition report at collection and delivery, real-time tracking so you always know where your car is, and flexible scheduling including same-day and next-day options for urgent deliveries.`,
      `Whether you've just purchased a new supercar, need to transport a vehicle to a show or event in ${dest}, or are relocating your collection, our professional team ensures your car arrives in perfect condition every time.`,
    ],
    metaDescription: `Supercar delivery service to ${dest}. Fully insured enclosed transport for ${brandList} and all high-value vehicles. UK-wide collection, door-to-door delivery. Free quote.`,
  };
}

export function generateFAQs(
  destination: string,
  isUK: boolean = false
): Array<{ question: string; answer: string }> {
  if (isUK) {
    return [
      {
        question: `How much does supercar delivery to ${destination} cost?`,
        answer: `The cost of supercar delivery to ${destination} depends on the collection location, vehicle dimensions, and service level (standard or express). We provide tailored quotes for every shipment — request your free quote above for an accurate price.`,
      },
      {
        question: `How long does delivery to ${destination} take?`,
        answer: `UK deliveries to ${destination} typically take 1-3 working days depending on collection location. Same-day and next-day express services are available for urgent requirements.`,
      },
      {
        question: `Is my supercar insured during delivery to ${destination}?`,
        answer: `Yes, every vehicle we transport is covered by comprehensive transit insurance for the full declared value. We provide proof of insurance cover before collection.`,
      },
      {
        question: `Do you use enclosed transporters for delivery to ${destination}?`,
        answer: `Yes, all our supercar deliveries use fully enclosed carriers. We never transport high-value vehicles on open trailers. Your car is protected from road debris, weather, and public view throughout the journey.`,
      },
      {
        question: `Can you collect from a dealership or auction house?`,
        answer: `Absolutely. We regularly collect from dealerships, auction houses, private residences, and storage facilities across the UK for delivery to ${destination}. Our team coordinates directly with the vendor for a seamless handover.`,
      },
      {
        question: `What types of vehicles do you deliver to ${destination}?`,
        answer: `We specialise in supercars, hypercars, classic cars, and all high-value vehicles. From Ferrari and Lamborghini to Rolls-Royce and vintage classics, if it's valuable, we'll deliver it to ${destination} with the care it deserves.`,
      },
    ];
  }

  return [
    {
      question: `How much does it cost to ship a supercar to ${destination}?`,
      answer: `Shipping costs to ${destination} vary based on origin location, vehicle dimensions, shipping method (sea or air freight), and service level. We provide detailed, no-obligation quotes tailored to your specific requirements. Request your free quote above.`,
    },
    {
      question: `How long does it take to ship a car to ${destination}?`,
      answer: `Transit times to ${destination} depend on the origin and shipping method. Sea freight typically takes 2-6 weeks, while air freight can deliver in 3-10 days. We'll provide an accurate timeline with your quote.`,
    },
    {
      question: `Is my vehicle insured during shipping to ${destination}?`,
      answer: `Yes, every vehicle is covered by comprehensive marine and transit insurance for the full declared value. We provide documentation of cover before your vehicle is collected.`,
    },
    {
      question: `Do you handle customs and import duties for ${destination}?`,
      answer: `Yes, our team manages all export and import documentation, customs clearance, and duty calculations for ${destination}. We'll advise you on any applicable duties and taxes before shipment.`,
    },
    {
      question: `What type of container is used for shipping?`,
      answer: `We use fully enclosed, climate-controlled containers with professional vehicle securing systems. Your car is protected from all elements throughout the journey and never shares container space with other cargo.`,
    },
    {
      question: `Can you ship from a dealership or auction house?`,
      answer: `Yes, we collect from any location worldwide — dealerships, auction houses, private residences, race circuits, or storage facilities. Our team coordinates directly with the vendor for seamless pickup.`,
    },
  ];
}
