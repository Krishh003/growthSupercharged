import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/* Shared site nav + footer for the live (motion-kit) pages. */

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav({ active }: { active: string }) {
  return (
    <header className="mk-nav">
      <div className="mk-nav__in">
        <Link href="/" className="mk-nav__brand">
          Growth Supercharge
        </Link>
        <nav className="mk-nav__links">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className={active === l.href ? "is-active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="mk-btn mk-btn--blue">
          Book Consultation
          <ArrowRight size={15} />
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mk-foot">
      <div className="mk-foot__in">
        <div>
          <div className="mk-foot__brand">Growth Supercharge (GSC)</div>
          <p>
            High-performance leadership tools for the modern enterprise. Built
            for efficiency, momentum and rapid scaling.
          </p>
        </div>
        <div>
          <div className="mk-foot__label">Contact</div>
          <p>Get the latest insights on business operations.</p>
          <form className="mk-foot__form" action="#">
            <input type="email" placeholder="email@company.com" aria-label="Email" />
            <button type="button" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
