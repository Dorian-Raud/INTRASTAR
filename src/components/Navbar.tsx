"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/devis", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="a-nav" style={{ position: "relative" }}>
      <Link href="/"  onClick={() => setOpen(false)}>
      <img className="a-brandname" src="/logo_long_intrastar.png" alt="logo-intrastar" />
      </Link>

      <div className={`a-navlinks ${styles.desktopLinks}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`a-navlink ${pathname === link.href ? "is-on" : ""}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/devis" className="a-btn a-btn-sm">
          Demander un devis
        </Link>
      </div>

      <button
        type="button"
        className={styles.menuBtn}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`a-navlink ${pathname === link.href ? "is-on" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/devis" className="a-btn a-btn-sm" onClick={() => setOpen(false)}>
            Demander un devis
          </Link>
        </div>
      )}
    </nav>
  );
}
