import { publications, conferences, funding } from "@/lib/data";

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif-display text-4xl text-teal-deep mb-4">
        Research & Publications
      </h1>
      <p className="text-ink-soft max-w-2xl mb-14 leading-relaxed">
        Dr. Babika&rsquo;s research applies GIS-based groundwater vulnerability
        modelling &mdash; principally the DRASTIC and GOD frameworks &mdash; to
        hydrocarbon contamination risk in semi-arid, oil-producing regions of
        Northern Nigeria, an area underrepresented in a literature historically
        centred on temperate climates and nitrate contamination.
      </p>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-6">Publications</h2>
      <div className="mb-16 space-y-8">
        {publications.map((pub) => (
          <div key={pub.citation} className="border-b rule pb-8">
            <p className="text-xs tracking-wide uppercase text-ochre font-medium mb-2">
              {pub.type}
            </p>
            <p className="text-ink leading-relaxed mb-2">{pub.citation}</p>
            <p className="text-ink-soft leading-relaxed mb-3">{pub.note}</p>
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-teal hover:text-teal-deep border-b border-teal/40 hover:border-teal-deep"
            >
              View publication
            </a>
          </div>
        ))}
      </div>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-6">
        Conference presentations
      </h2>
      <div className="mb-16 space-y-6">
        {conferences.map((c) => (
          <div key={c.event} className="grid sm:grid-cols-[100px_1fr] gap-3 sm:gap-8">
            <p className="text-sm text-ochre font-medium">{c.year}</p>
            <div>
              <h3 className="text-ink font-medium">{c.event}</h3>
              <p className="text-ink-soft">{c.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-serif-display text-2xl text-teal-deep mb-6">
        Funding & awards
      </h2>
      <div className="space-y-6">
        {funding.map((f) => (
          <div key={f.title} className="grid sm:grid-cols-[140px_1fr] gap-3 sm:gap-8">
            <p className="text-sm text-ochre font-medium">{f.years}</p>
            <p className="text-ink-soft">{f.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
