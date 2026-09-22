"use client";

import {
  profile,
  education,
  experience,
  bathRoles,
  skills,
  memberships,
  training,
  publications,
} from "@/lib/data";

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-10 print:hidden">
        <h1 className="font-serif-display text-4xl text-teal-deep">Curriculum Vitae</h1>
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-teal-deep text-paper text-sm rounded-full hover:bg-teal transition-colors"
        >
          Save / print as PDF
        </button>
      </div>

      <div className="border rule rounded-2xl p-8 sm:p-12 bg-white/50 print:border-none print:p-0 print:bg-transparent">
        <header className="mb-8 border-b rule pb-6">
          <h2 className="font-serif-display text-2xl text-teal-deep">{profile.name}</h2>
          <p className="text-ink-soft">{profile.credentials}</p>
          <p className="text-ink-soft mt-1">
            {profile.role}, {profile.employer}
          </p>
          <p className="text-sm text-ink-soft mt-2">
            {profile.email} &middot; {profile.location}
          </p>
        </header>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-2">Profile</h3>
          <p className="text-ink-soft leading-relaxed">{profile.tagline}</p>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">Education</h3>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="font-medium text-ink">
                  {e.degree} &mdash; {e.institution}{" "}
                  <span className="text-ink-soft font-normal">({e.years})</span>
                </p>
                <p className="text-ink-soft text-sm mt-1">{e.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">
            Professional Experience &mdash; NOSDRA
          </h3>
          <ul className="space-y-3">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="font-medium text-ink">
                  {e.role}{" "}
                  <span className="text-ink-soft font-normal">
                    &mdash; {e.org} ({e.years})
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">
            Research & Teaching &mdash; University of Bath
          </h3>
          <ul className="space-y-3">
            {bathRoles.map((r) => (
              <li key={r.role}>
                <p className="font-medium text-ink">
                  {r.role}{" "}
                  <span className="text-ink-soft font-normal">({r.years})</span>
                </p>
                <p className="text-ink-soft text-sm mt-1">{r.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">
            Selected Publications
          </h3>
          <ul className="space-y-2">
            {publications.map((p) => (
              <li key={p.citation} className="text-ink-soft text-sm leading-relaxed">
                {p.citation}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">Core Skills</h3>
          <p className="text-ink-soft leading-relaxed">{skills.join(" \u00b7 ")}</p>
        </section>

        <section className="mb-8">
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">
            Professional Memberships
          </h3>
          <p className="text-ink-soft leading-relaxed">{memberships.join(" \u00b7 ")}</p>
        </section>

        <section>
          <h3 className="font-serif-display text-lg text-teal-deep mb-3">
            Selected Training
          </h3>
          <p className="text-ink-soft leading-relaxed">{training.join(" \u00b7 ")}</p>
        </section>
      </div>
    </div>
  );
}
