"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/menu", label: "Меню" },
  { href: "/contacts", label: "Контакты" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#F0EDE8", borderBottom: "1px solid #DDD7CF" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-inter-tight)", fontWeight: 600 }}
        >
          <span
            className="text-xl tracking-tight"
            style={{ color: "#D7A37B" }}
          >
            HoReCa
          </span>
          <span
            className="text-xl tracking-tight"
            style={{ color: "#2F2A27" }}
          >
            demo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors hover:opacity-70"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: 500,
                color: pathname === l.href ? "#5C3A2E" : "#2F2A27",
                borderBottom:
                  pathname === l.href ? "1.5px solid #5C3A2E" : "none",
                paddingBottom: "2px",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+37360045800"
            className="text-sm transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontWeight: 500,
              color: "#5C3A2E",
            }}
          >
            +373 600 45 800
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#2F2A27" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ backgroundColor: "#F0EDE8", borderTop: "1px solid #DDD7CF" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base"
              style={{
                fontFamily: "var(--font-inter-tight)",
                fontWeight: pathname === l.href ? 600 : 500,
                color: pathname === l.href ? "#5C3A2E" : "#2F2A27",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+37360045800"
            className="text-base"
            style={{
              fontFamily: "var(--font-inter-tight)",
              fontWeight: 500,
              color: "#5C3A2E",
            }}
          >
            +373 600 45 800
          </a>
        </div>
      )}
    </header>
  );
}
