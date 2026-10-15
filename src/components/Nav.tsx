"use client";

import { useState, useEffect } from "react";
import { navLinks, hero } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[var(--color-paper)]/95 backdrop-blur-sm border-b border-[var(--color-rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-outer flex items-center justify-between h-14">
        {/* Name / Logo */}
        <a
          href="#"
          className="font-[var(--font-serif)] text-base tracking-tight text-[var(--color-ink)]"
          style={{ fontFamily: "var(--font-serif)" }}
          aria-label="Scroll to top"
        >
          DV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-1.5 !px-3 !text-[0.65rem]"
          >
            Resume ↓
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--color-ink)]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-paper)] border-b border-[var(--color-rule)] pb-4 px-6">
          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-1.5 !px-3 !text-[0.65rem] w-fit mt-2"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
