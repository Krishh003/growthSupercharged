"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "./icons";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={"nav" + (open ? " open" : "")}>
      <div className="container nav-inner">
        <Link href="/" className="brand">
          GrowthSupercharge
        </Link>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">
            Book Consultation
          </Link>
        </div>
        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
}
