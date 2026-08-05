import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Flame, Instagram, Facebook } from "lucide-react";

import heroSteak from "@/assets/hero-steak.jpg";
import craftAging from "@/assets/craft-aging.jpg";
import ambianceDining from "@/assets/ambiance-dining.jpg";
import galleryBrisket from "@/assets/gallery-brisket.jpg";
import galleryRibs from "@/assets/gallery-ribs.jpg";
import galleryFire from "@/assets/gallery-fire.jpg";

import { SiteHeader } from "@/components/site/SiteHeader";
import { ReservationForm } from "@/components/site/ReservationForm";
import { BUSINESS, CUTS, HOURS_NOTE } from "@/components/site/data";

const TITLE = "Woodhouse Grill | Steakhouse in Gulshan, Dhaka";
const DESCRIPTION =
  "Texas-style steakhouse in Gulshan, Dhaka. Fire-grilled T-Bone, sirloin, tenderloin and smoked brisket. Reserve a table at Woodhouse Grill.";

/** Restaurant schema for local + high-intent search ("steakhouse in Gulshan"). */
const RESTAURANT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.name,
  description: DESCRIPTION,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  url: "/",
  priceRange: BUSINESS.priceRange,
  servesCuisine: ["Steakhouse", "American", "Barbecue"],
  acceptsReservations: true,
  hasMap: BUSINESS.maps,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: "Gulshan, Dhaka",
    postalCode: "1213",
    addressCountry: "BD",
  },
  sameAs: [BUSINESS.facebook, BUSINESS.instagram, BUSINESS.maps],
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "keywords", content: "steakhouse in Gulshan, best steak Dhaka, Woodhouse Grill reservation" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(RESTAURANT_SCHEMA) },
    ],
  }),
});

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Woodhouse Grill, BTI Laureate, House 56, Road 11, Block F, Gulshan, Dhaka 1213",
)}&output=embed`;

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={heroSteak}
            alt="Dry-aged T-bone steak searing over open flame at Woodhouse Grill, Gulshan Dhaka"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="char-veil absolute inset-0" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
            <p className="eyebrow">Gulshan · Dhaka</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] uppercase sm:text-6xl lg:text-7xl">
              Old-fashioned grill mastery,
              <span className="text-ember-gradient"> with a Dhaka accent</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              A Texas-style steakhouse built around fire, time and the cut itself — for guests who
              take their steak seriously.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#reservations"
                className="rounded-sm bg-primary px-7 py-3.5 font-display text-sm uppercase tracking-[0.2em] text-primary-foreground shadow-ember transition-transform hover:scale-[1.03]"
              >
                Reserve a Table
              </a>
              <a
                href="#cuts"
                className="rounded-sm border border-border bg-card/60 px-7 py-3.5 font-display text-sm uppercase tracking-[0.2em] text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                View Menu
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {BUSINESS.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- THE CRAFT (justifies the price point) ---------- */}
        <section id="craft" className="border-t border-border py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="order-2 lg:order-1">
              <p className="eyebrow">The Craft</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
                Nothing here is rushed
              </h2>
              <p className="mt-5 text-muted-foreground">
                A steak is decided long before it reaches the grill. We choose the cut for its
                grain, rest it until the flavour concentrates, then commit it to live fire and read
                it by hand — no timers, no shortcuts.
              </p>

              <dl className="mt-10 grid gap-8 sm:grid-cols-3">
                {[
                  {
                    title: "Aged",
                    body: "Cuts are held in controlled cold until the texture turns dense and the flavour deepens.",
                  },
                  {
                    title: "Fired",
                    body: "Wood and coal, worked at real heat, for a crust you can hear before you taste it.",
                  },
                  {
                    title: "Cut",
                    body: "Every steak is trimmed and portioned in-house so what reaches your table is the whole intention.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <dt className="flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] text-primary">
                      <Flame className="size-4" aria-hidden="true" />
                      {item.title}
                    </dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={craftAging}
                alt="Beef cuts dry-aging in the aging room at Woodhouse Grill, Gulshan Dhaka"
                width={1200}
                height={1408}
                loading="lazy"
                className="h-[420px] w-full rounded-sm object-cover shadow-deep sm:h-[560px]"
              />
            </div>
          </div>
        </section>

        {/* ---------- SIGNATURE CUTS ---------- */}
        <section id="cuts" className="border-t border-border bg-card/40 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Signature Cuts</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-5xl">
              The board we are known for
            </h2>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {CUTS.map((cut) => (
                <li key={cut.name} className="group bg-background p-7 transition-colors hover:bg-card">
                  <h3 className="font-display text-xl uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {cut.name}
                  </h3>
                  <p className="eyebrow mt-1 text-[0.6rem] text-muted-foreground">{cut.note}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{cut.description}</p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-muted-foreground">
              Cuts are served by weight and availability. Our team will walk you through the day's
              board when you're seated.
            </p>
          </div>
        </section>

        {/* ---------- AMBIANCE / GALLERY ---------- */}
        <section id="ambiance" className="border-t border-border py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="eyebrow">Ambiance</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl uppercase leading-tight sm:text-5xl">
              A room built around the fire
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <img
                src={ambianceDining}
                alt="Dining room with leather banquettes and low amber lighting at Woodhouse Grill, Gulshan Dhaka"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-72 w-full rounded-sm object-cover shadow-deep md:col-span-2 md:h-[420px]"
              />
              <img
                src={galleryFire}
                alt="Grill chef working the open flame at Woodhouse Grill, Gulshan Dhaka"
                width={1008}
                height={1008}
                loading="lazy"
                className="h-72 w-full rounded-sm object-cover shadow-deep md:h-[420px]"
              />
              <img
                src={galleryBrisket}
                alt="Sliced smoked brisket with peppered bark at Woodhouse Grill, Gulshan Dhaka"
                width={1008}
                height={1008}
                loading="lazy"
                className="h-72 w-full rounded-sm object-cover shadow-deep"
              />
              <img
                src={galleryRibs}
                alt="Glazed Austin ribs and short ribs at Woodhouse Grill, Gulshan Dhaka"
                width={1008}
                height={1008}
                loading="lazy"
                className="h-72 w-full rounded-sm object-cover shadow-deep"
              />
              <div className="flex flex-col justify-center rounded-sm border border-border bg-card p-8">
                <h3 className="font-display text-2xl uppercase leading-tight">
                  Photography by the house
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  This grid is built to carry the restaurant's own photography — swap in the shoot
                  and the layout holds.
                </p>
                <a
                  href="#reservations"
                  className="mt-6 font-display text-sm uppercase tracking-[0.2em] text-primary"
                >
                  Reserve a Table →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- RESERVATIONS ---------- */}
        <section id="reservations" className="border-t border-border bg-card/40 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="eyebrow">Reservations</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
                Book your table
              </h2>
              <p className="mt-5 text-muted-foreground">
                Tables are limited and evenings fill quickly. Send a request and our team will call
                you back to confirm the booking.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{HOURS_NOTE}</p>
            </div>
            <div className="rounded-sm border border-border bg-background p-6 shadow-deep sm:p-8">
              <ReservationForm />
            </div>
          </div>
        </section>

        {/* ---------- LOCATION ---------- */}
        <section id="location" className="border-t border-border py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">Location</p>
              <h2 className="mt-4 font-display text-3xl uppercase leading-tight sm:text-5xl">
                Find us in Gulshan
              </h2>

              <address className="mt-8 space-y-5 not-italic text-sm">
                <p className="flex gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {BUSINESS.streetAddress}
                    <br />
                    {BUSINESS.locality}, {BUSINESS.country}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a href={BUSINESS.phoneHref} className="text-muted-foreground hover:text-primary">
                    {BUSINESS.phone}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {BUSINESS.email}
                  </a>
                </p>
              </address>

              <a
                href={BUSINESS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-sm border border-border px-6 py-3 font-display text-sm uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded-sm border border-border shadow-deep">
              <iframe
                title="Map showing Woodhouse Grill in Gulshan, Dhaka"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full lg:h-full lg:min-h-[420px]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-border bg-char py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.22em]">Woodhouse Grill</p>
            <p className="eyebrow mt-1 text-[0.6rem]">{BUSINESS.tagline}</p>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{BUSINESS.fullAddress}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-3">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Woodhouse Grill on Facebook"
                className="rounded-sm border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Woodhouse Grill on Instagram, ${BUSINESS.instagramHandle}`}
                className="rounded-sm border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="size-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href={BUSINESS.phoneHref} className="hover:text-primary">
                {BUSINESS.phone}
              </a>{" "}
              ·{" "}
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">
                {BUSINESS.email}
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Woodhouse Grill. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
