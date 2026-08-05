import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "./data";

const NAV_LINKS = [
  { href: "#craft", label: "The Craft" },
  { href: "#cuts", label: "Signature Cuts" },
  { href: "#ambiance", label: "Ambiance" },
  { href: "#location", label: "Location" },
];

/** Sticky header. The "Reserve a Table" CTA stays visible at every breakpoint. */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:py-4">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-[0.22em] uppercase sm:text-xl">
            Woodhouse
          </span>
          <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">Grill · Gulshan</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneHref}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            {BUSINESS.phone}
          </a>
          <a
            href="#reservations"
            className="rounded-sm bg-primary px-4 py-2.5 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-transform hover:scale-[1.03] sm:px-5 sm:text-sm"
          >
            Reserve a Table
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-sm uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
