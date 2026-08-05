# Brand Blueprint Builder

# Production-Grade Website Generation Brief
### A professional framework for turning client social/map data into a strategic, deployable AI prompt

This isn't a fill-in-the-blank form — it's a creative-and-technical brief, the kind an agency would write before touching code. It forces the thinking (positioning, information architecture, SEO strategy) that separates a "generated site" from a site that actually converts and ranks. The final section is the ready-to-paste master prompt, built from real Woodhouse Grill data as the working case study.

---

## PART 1 — DISCOVERY (source data, not filler)

Pull this directly from the client's Facebook "About" tab and Google Maps listing before writing anything — these two sources cover almost everything a local restaurant website needs.

**Woodhouse Grill — Gulshan Branch**

| Category | Data |
|---|---|
| Legal/brand name | Woodhouse Grill |
| Positioning | Texas-style steakhouse grill, adapted with local Dhaka flavor |
| Location | Level 4, BTI Laureate, House 56, Block F, Road No. 11, Gulshan, Dhaka 1213, Bangladesh |
| Phone | 01319-069266 |
| Email | woodhousegrillbd@gmail.com |
| Facebook | facebook.com/WoodhouseGrillBD |
| Instagram | @wood_house_grill |
| Google Maps | maps.app.goo.gl/KsAezQjjm8d27tEx9 |
| Signature offerings | T-Bone, Sirloin, Tenderloin, Smoked Brisket, Austin Ribs, Short Ribs |
| Services | Dine-in, curbside pickup, reservations recommended |
| Price tier | Premium ($$$) |
| Third-party validation | 4.4/5 on Tripadvisor, ~187K Facebook followers, consistent praise for steak quality and ambiance; some feedback on pricing-vs-decor gap |
| Market | Gulshan, Dhaka — competitive premium dining district |

---

## PART 2 — STRATEGIC VISION (the thinking layer)

Before any AI touches code, define these four things. This is what makes a prompt "production-grade" instead of "dummy":

**1. Brand Positioning Statement**
One sentence that the entire site design and copy must serve. For Woodhouse Grill:
*"The definitive Texas-style steakhouse experience in Gulshan — old-fashioned grill mastery with a Dhaka accent, for guests who take their steak seriously."*

**2. Primary User Intent**
What is the #1 action a visitor should take? For a premium steakhouse: *reserve a table* (not "browse menu," not "learn more" — reservations drive revenue).

**3. Competitive Differentiation**
What does this site need to do that competitors' sites don't? Real reviews reference ambiance/pricing tension — so the site should over-deliver on perceived value: show the craft (aging, grilling technique, sourcing) to justify the price point before the visitor ever sees a number.

**4. SEO Intent Mapping**
What search intent are we capturing? Local + high-intent: "steakhouse in Gulshan," "best steak Dhaka," "Woodhouse Grill Gulshan reservation" — not generic "restaurant Dhaka."

---

## PART 3 — THE MASTER PRODUCTION PROMPT

Paste this directly into your AI website builder (v0, Lovable, Cursor, Claude, Bolt, etc.). It's written as a strategic brief, not a bracketed template — every line carries intent, not placeholder.

```
ROLE
You are a senior web developer and SEO strategist building a production-grade,
deployable website for a premium local restaurant. This is not a demo or mockup —
treat it as a real client deliverable that will go live.

BRAND
Woodhouse Grill (Gulshan Branch) is a Texas-style steakhouse in Gulshan, Dhaka,
Bangladesh, known for old-fashioned grill mastery — T-Bone, Sirloin, Tenderloin,
Smoked Brisket, Austin Ribs, and Short Ribs — served with a hint of local Dhaka
character. It is a premium ($$$) dining destination. Public sentiment (Tripadvisor
4.4/5, ~187K Facebook followers) consistently praises the steak quality and
ambiance, with occasional feedback that the price point deserves an equally
elevated presentation. The site's job is to justify that price before the guest
ever sees a number — by making the craft visible.

BUSINESS DATA (factual — do not alter or invent additional data)
- Address: Level 4, BTI Laureate, House 56, Block F, Road No. 11, Gulshan, Dhaka 1213, Bangladesh
- Phone: 01319-069266
- Email: woodhousegrillbd@gmail.com
- Facebook: https://www.facebook.com/WoodhouseGrillBD/
- Instagram: @wood_house_grill
- Google Maps: https://maps.app.goo.gl/KsAezQjjm8d27tEx9
- Services: Dine-in, curbside pickup, reservations recommended during peak hours

PRIMARY CONVERSION GOAL
The single most important action on every page is "Reserve a Table." Every layout
decision should support this — the reservation CTA must be visible above the fold
on every viewport size, and reachable within one scroll or one tap from anywhere
on the site.

INFORMATION ARCHITECTURE
1. Hero — brand name, positioning line, high-quality imagery placeholder (grilled
   steak / open flame), primary CTA ("Reserve a Table") and secondary CTA
   ("View Menu")
2. The Craft — a short section that visually and verbally communicates technique:
   aging, fire, cut selection. This is the section that justifies the price point.
3. Signature Cuts — T-Bone, Sirloin, Tenderloin, Smoked Brisket, Austin Ribs,
   Short Ribs, each with a one-line sensory description (no invented prices)
4. Ambiance / Gallery — image grid placeholder ready for real photography
5. Reservations — functional form (name, phone, date, time, party size, notes)
   with client-side validation
6. Location — embedded Google Maps, address, phone, email, hours
7. Footer — social links, contact info, copyright

DESIGN DIRECTION
Rustic-luxe steakhouse: charred wood tones, deep charcoal and ember/amber accents,
confident serif or industrial-sans typography, generous negative space so the
imagery of the food carries the page. Avoid generic "restaurant template" clichés
(stock cursive script fonts, red-and-white checkered patterns). This should feel
closer to a modern premium hospitality brand than a neighborhood eatery.

SEO ARCHITECTURE
- Title tag: "Woodhouse Grill | Steakhouse in Gulshan, Dhaka"
- Meta description (<160 chars): premium steakhouse positioning + Gulshan, Dhaka + reservation CTA
- One H1 per page; logical H2/H3 hierarchy matching the information architecture above
- Restaurant Schema.org / JSON-LD: name, address, phone, cuisine (Steakhouse),
  priceRange ($$$), servesCuisine, acceptsReservations, url, sameAs (Facebook, Instagram)
- Open Graph + Twitter Card metadata for social sharing
- Descriptive alt text on every image tying dish + brand + location
  (e.g. "Smoked brisket at Woodhouse Grill, Gulshan Dhaka")
- Target keyword intent: "steakhouse in Gulshan," "best steak Dhaka,"
  "Woodhouse Grill reservation" — avoid generic "restaurant Dhaka" phrasing
- Clean semantic URLs if multi-page (/menu, /reservations, /location)
- Sitemap.xml and robots.txt if multi-page

TECHNICAL STANDARDS
- Mobile-first, fully responsive across breakpoints
- Core Web Vitals discipline: optimized/lazy-loaded images, no render-blocking
  scripts, target LCP under 2.5s
- Semantic HTML5 throughout (header, nav, main, section, article, footer)
- WCAG AA contrast and accessibility minimums
- Production-ready, commented code — no lorem ipsum, no "TODO" placeholders
  in copy that will ship
- All social/map links must point to the exact URLs listed above

CONTENT RULES (non-negotiable)
- Do not invent reviews, star ratings, awards, or menu prices
- Do not lift text verbatim from the Facebook page — write original copy that
  reflects the brand positioning above
- Do not borrow visual identity or copy from any competitor brand

DELIVERABLE
Full, deployable website code implementing everything above, ready to hand to
the client for photography and copy sign-off.
```

---

## PART 4 — HOW TO REUSE THIS FOR OTHER CLIENTS

Don't just swap the bracketed facts — redo Part 2 (Strategic Vision) for every client. The four questions (positioning statement, primary user intent, competitive differentiation, SEO intent) are what make the final prompt "production-grade" instead of generic. Two restaurants with identical menus can need completely different sites if one is a $5 street-food stall and the other is a $$$ steakhouse — the vision layer is what an AI can't infer from a Facebook page alone, so it's the one part you always write by hand.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b6010065-538e-493d-86d4-17abe0ea3e46).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
