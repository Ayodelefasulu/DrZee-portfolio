"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "About", summary: "Overview & field background" },
  { href: "/experience", label: "Experience", summary: "13+ years at NOSDRA & leadership" },
  { href: "/research", label: "Research & Publications", summary: "PhD research, papers & reports" },
  { href: "/recommendations", label: "Recommendations", summary: "Academic & agency references" },
  { href: "/cv", label: "CV", summary: "Complete professional curriculum vitae" },
  { href: "/contact", label: "Contact", summary: "Collaboration & speaking enquiries" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route changes during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Close mobile menu on browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu if viewport resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b rule bg-paper/95 backdrop-blur-md transition-colors">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Brand / Logo */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep rounded-lg"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal-deep pb-0.5 font-serif-display text-xl font-bold leading-none text-paper ring-2 ring-ochre transition-transform duration-200 group-hover:scale-105 group-hover:bg-teal shadow-xs"
              >
                Z
              </span>
              <div className="flex flex-col text-left">
                <span className="font-serif-display text-base font-semibold leading-tight tracking-tight text-teal-deep transition-colors group-hover:text-teal sm:text-lg">
                  Dr. Zaharatu Babika
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-ink-soft/75">
                  Environmental Scientist &middot; PhD
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Desktop Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-1.5"
            >
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                      active
                        ? "text-teal-deep font-semibold bg-teal-deep/8"
                        : "text-ink-soft hover:text-teal-deep hover:bg-teal-deep/5"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-ochre rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-xl border rule bg-paper text-teal-deep hover:bg-teal-deep/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep transition-colors md:hidden"
            >
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              <div className="relative flex h-3.5 w-4 flex-col justify-between">
                <span
                  className={`h-0.5 w-full rounded-full bg-teal-deep transition-all duration-300 ${
                    isOpen ? "translate-y-[6px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-teal-deep transition-all duration-200 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 w-full rounded-full bg-teal-deep transition-all duration-300 ${
                    isOpen ? "-translate-y-[6px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Dropdown */}
      <div
        id="mobile-navigation"
        aria-label="Mobile Navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-paper/98 backdrop-blur-xl border-b rule overflow-y-auto px-5 py-6 pb-12 md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1.5">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-soft/60">
            Navigation
          </p>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className={`group flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                  active
                    ? "bg-teal-deep text-paper shadow-sm"
                    : "text-ink hover:bg-teal-deep/6 hover:text-teal-deep"
                }`}
              >
                <div className="flex flex-col">
                  <span
                    className={`font-serif-display text-lg leading-tight ${
                      active ? "text-paper font-medium" : "text-teal-deep"
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`text-xs mt-0.5 ${
                      active ? "text-paper/75" : "text-ink-soft/75"
                    }`}
                  >
                    {link.summary}
                  </span>
                </div>
                <div className="flex items-center">
                  {active ? (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ochre text-teal-deep text-[11px] font-bold shadow-xs">
                      &#10003;
                    </span>
                  ) : (
                    <span className="text-ink-soft/50 group-hover:text-teal-deep transition-transform group-hover:translate-x-0.5 text-sm">
                      &rarr;
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Quick Actions & Profile Footer in Drawer */}
        <div className="mt-8 pt-6 border-t rule space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center py-2.5 px-3 rounded-xl border rule text-xs font-medium text-teal-deep hover:bg-teal-deep/5 transition-colors text-center"
            >
              View CV
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              className="flex items-center justify-center py-2.5 px-3 rounded-xl bg-teal-deep text-paper text-xs font-medium hover:bg-teal transition-colors text-center"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex items-center justify-between text-xs text-ink-soft/75 pt-2">
            <span>{profile.location}</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              className="hover:text-teal-deep underline underline-offset-2"
            >
              LinkedIn Profile &rarr;
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
