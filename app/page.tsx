import Image from "next/image";
import Link from "next/link";
import { profile, collaboration, skills } from "@/lib/data";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="contour-field border-b rule">
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-20">
          <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 rule overflow-hidden shrink-0">
              <Image
                src="/main.jpeg"
                alt={`Photo of ${profile.name}`}
                fill
                sizes="(min-width: 640px) 144px, 112px"
                priority
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-base text-xl tracking-wide text-ochre font-medium mb-3">
                {profile.role} &middot; {profile.employer}
              </p>
              <h1 className="font-serif-display text-4xl sm:text-5xl text-teal-deep leading-tight mb-5">
                {profile.name}
              </h1>
              <p className="max-w-2xl text-lg text-ink-soft leading-relaxed">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/research"
                  className="px-5 py-2.5 bg-teal-deep text-paper text-sm rounded-full hover:bg-teal transition-colors"
                >
                  View research & publications
                </Link>
                <Link
                  href="/cv"
                  className="px-5 py-2.5 border rule text-sm rounded-full hover:border-teal-deep hover:text-teal-deep transition-colors"
                >
                  View CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-5xl px-6 py-16 grid sm:grid-cols-[1fr_1.4fr] gap-10">
        <h2 className="font-serif-display text-2xl text-teal-deep">
          Thirteen years in the field. A PhD behind the science.
        </h2>
        <div className="space-y-5 text-ink-soft leading-relaxed">
          <p>
            Dr. Babika has spent her career at the intersection of environmental
            regulation and applied earth science &mdash; thirteen years assessing,
            monitoring and responding to oil spill incidents across Nigeria for
            NOSDRA, now as Chief Environmental Scientist within the Oil Field
            Assessment department. That practitioner&rsquo;s grounding sits
            alongside a PhD in groundwater engineering from the University of
            Bath, where her research mapped hydrocarbon contamination risk
            across semi-arid aquifers using GIS-based vulnerability modelling.
          </p>
          <p>
            Her academic interest grew directly out of the operational work: years
            of assessing oil spill sites raised questions about groundwater
            vulnerability that existing models, built mainly for temperate
            climates, could not fully answer for semi-arid, oil-producing
            regions like Northern Nigeria. That question became the basis of her
            doctoral research, and remains the throughline of the collaborations
            she is now looking to build &mdash; connecting regulatory experience
            in the oil and gas sector with scientifically rigorous, field-validated
            research.
          </p>
        </div>
      </section>

      {/* Collaboration highlight */}
      <section className="border-y rule bg-teal-deep text-paper">
        <div className="mx-auto max-w-5xl px-6 py-14 grid sm:grid-cols-[1fr_1.6fr] gap-8">
          <p className="text-sm tracking-wide text-ochre-soft font-medium">
            Featured collaboration
          </p>
          <div>
            <h3 className="font-serif-display text-2xl mb-4">{collaboration.title}</h3>
            <p className="text-paper/85 leading-relaxed">{collaboration.detail}</p>
          </div>
        </div>
      </section>

      {/* Core skills */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-serif-display text-2xl text-teal-deep mb-8">
          Core areas of expertise
        </h2>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-start gap-3 text-ink-soft border-b rule pb-4"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ochre shrink-0" />
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="border rule rounded-2xl p-8 sm:p-10 bg-white/40">
          <h2 className="font-serif-display text-2xl text-teal-deep mb-3">
            Open to research collaboration
          </h2>
          <p className="text-ink-soft leading-relaxed max-w-2xl mb-6">
            Dr. Babika welcomes conversations with academic and industry
            partners working on groundwater, hydrocarbon contamination, or
            environmental risk in oil-producing and semi-arid regions &mdash;
            particularly where field-based, scientifically grounded
            investigation can inform practical water and environmental
            outcomes for underserved communities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 bg-ochre text-teal-deep font-medium text-sm rounded-full hover:bg-ochre-soft transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
