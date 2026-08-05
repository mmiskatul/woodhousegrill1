/**
 * Single source of truth for Woodhouse Grill business facts.
 * These values are supplied by the client — do not invent or alter them.
 */
export const BUSINESS = {
  name: "Woodhouse Grill",
  branch: "Gulshan Branch",
  tagline: "Texas-style steakhouse in Gulshan, Dhaka",
  streetAddress: "Level 4, BTI Laureate, House 56, Block F, Road No. 11",
  locality: "Gulshan, Dhaka 1213",
  country: "Bangladesh",
  fullAddress:
    "Level 4, BTI Laureate, House 56, Block F, Road No. 11, Gulshan, Dhaka 1213, Bangladesh",
  phone: "01319-069266",
  phoneHref: "tel:+8801319069266",
  email: "woodhousegrillbd@gmail.com",
  facebook: "https://www.facebook.com/WoodhouseGrillBD/",
  instagram: "https://www.instagram.com/wood_house_grill/",
  instagramHandle: "@wood_house_grill",
  maps: "https://maps.app.goo.gl/KsAezQjjm8d27tEx9",
  priceRange: "$$$",
  services: ["Dine-in", "Curbside pickup", "Reservations recommended"],
} as const;

/** Signature cuts — sensory descriptions only, no prices (client sign-off pending). */
export const CUTS = [
  {
    name: "T-Bone",
    note: "Two cuts, one bone",
    description:
      "Strip and tenderloin either side of the bone, seared hard over open flame until the crust cracks.",
  },
  {
    name: "Sirloin",
    note: "The beef-forward one",
    description:
      "Dense, deeply marbled and unapologetically savoury — the cut we recommend to first-time guests.",
  },
  {
    name: "Tenderloin",
    note: "Butter-soft",
    description:
      "The leanest, most yielding cut on the board, finished with fire-toasted butter and cracked pepper.",
  },
  {
    name: "Smoked Brisket",
    note: "Low and slow",
    description:
      "Hours in smoke until the bark turns near-black and the fat renders into the grain.",
  },
  {
    name: "Austin Ribs",
    note: "Texas by way of Dhaka",
    description:
      "Smoke-kissed ribs lacquered in a slow-reduced glaze with a quiet local heat behind it.",
  },
  {
    name: "Short Ribs",
    note: "Rich and slow-braised",
    description:
      "Thick-cut and cooked until they surrender, spooned over with their own dark, glossy jus.",
  },
] as const;

/**
 * Opening hours were not supplied in the client brief, so the site points guests
 * to the live Google Maps listing and the phone line instead of publishing times.
 */
export const HOURS_NOTE =
  "Current opening hours are kept up to date on our Google Maps listing. For same-day tables, call us directly.";
