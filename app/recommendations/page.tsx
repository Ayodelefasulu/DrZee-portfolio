import { recommendations } from "@/lib/data";

const linkedinProfile =
  "https://www.linkedin.com/in/zaharatu-mohammed-babika-phd-msc-bsc-5a434658";

export default function RecommendationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif-display text-4xl text-teal-deep mb-4">
        Recommendations
      </h1>
      <p className="text-ink-soft max-w-2xl mb-14 leading-relaxed">
        Endorsements from colleagues and supervisors at the National Oil Spill
        Detection and Response Agency, as published on{" "}
        <a
          href={linkedinProfile}
          target="_blank"
          rel="noreferrer"
          className="text-teal-deep underline decoration-ochre underline-offset-4 hover:text-teal"
        >
          LinkedIn
        </a>
        .
      </p>

      <div className="border-t rule">
        {recommendations.map((r) => (
          <figure key={r.name} className="border-b rule py-12">
            <blockquote className="font-serif-display text-xl leading-relaxed text-ink">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-4">
              <span className="h-px w-10 bg-ochre shrink-0" />
              <div>
                {r.link ? (
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block font-semibold text-teal-deep hover:text-teal"
                  >
                    {r.name}
                  </a>
                ) : (
                  <p className="font-semibold text-teal-deep">{r.name}</p>
                )}
                <p className="text-sm text-ink-soft">{r.title}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}