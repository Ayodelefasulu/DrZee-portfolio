import { experience, bathRoles, education, memberships, training } from "@/lib/data";

function TimelineBlock({
  role,
  org,
  years,
  detail,
}: {
  role: string;
  org: string;
  years: string;
  detail: string;
}) {
  return (
    <div className="grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 py-6 border-b rule">
      <p className="text-sm text-ochre font-medium">{years}</p>
      <div>
        <h3 className="font-serif-display text-lg text-teal-deep">{role}</h3>
        <p className="text-sm text-ink-soft mb-2">{org}</p>
        <p className="text-ink-soft leading-relaxed">{detail}</p>
      </div>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif-display text-4xl text-teal-deep mb-4">Experience</h1>
      <p className="text-ink-soft max-w-2xl mb-14 leading-relaxed">
        Thirteen years of progressive responsibility at Nigeria&rsquo;s national
        oil spill regulator, run in parallel with a groundwater engineering
        research career at the University of Bath.
      </p>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-2">
        NOSDRA &mdash; Oil Field Assessment
      </h2>
      <p className="text-sm text-ink-soft mb-6">
        National Oil Spill Detection and Response Agency, Abuja, Nigeria &middot; 2013 &ndash; Present
      </p>
      <div className="mb-16">
        {experience.map((item) => (
          <TimelineBlock key={item.role} {...item} />
        ))}
      </div>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-2">
        University of Bath
      </h2>
      <p className="text-sm text-ink-soft mb-6">
        Department of Architecture & Civil Engineering, United Kingdom
      </p>
      <div className="mb-16">
        {bathRoles.map((item) => (
          <TimelineBlock key={item.role} {...item} />
        ))}
      </div>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-6">Education</h2>
      <div className="mb-16 space-y-8">
        {education.map((item) => (
          <div key={item.degree} className="border-b rule pb-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-serif-display text-lg text-teal-deep">{item.degree}</h3>
              <p className="text-sm text-ochre font-medium">{item.years}</p>
            </div>
            <p className="text-sm text-ink-soft mb-2">{item.institution}</p>
            <p className="text-ink-soft leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif-display text-2xl text-teal-deep mb-6">
            Professional memberships
          </h2>
          <ul className="space-y-3">
            {memberships.map((m) => (
              <li key={m} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre shrink-0" />
                {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif-display text-2xl text-teal-deep mb-6">
            Selected training
          </h2>
          <ul className="space-y-3">
            {training.map((t) => (
              <li key={t} className="flex items-start gap-3 text-ink-soft">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
