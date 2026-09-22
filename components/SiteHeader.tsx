"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research & Publications" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b rule sticky top-0 z-40 bg-paper/95 backdrop-blur">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-9 w-9 place-items-center rounded-xl bg-teal-deep pb-0.5 font-serif-display text-xl leading-none text-paper ring-2 ring-ochre transition-colors group-hover:bg-teal"
            >
              Z
            </span>
            {/* <span className="font-serif-display text-lg font-semibold uppercase leading-none tracking-[0.22em] text-teal-deep transition-colors group-hover:text-teal">
              Dr. Z
            </span> */}
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`pb-0.5 border-b transition-colors text-lg ${active
                    ? "border-ochre text-teal-deep"
                    : "border-transparent text-ink-soft hover:text-teal-deep hover:border-line"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
