import { profile } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif-display text-4xl text-teal-deep mb-6">Get in touch</h1>
      <p className="text-ink-soft leading-relaxed mb-10 max-w-xl">
        For research collaboration, academic partnership, or speaking
        enquiries related to groundwater vulnerability, hydrocarbon
        contamination or environmental risk in oil-producing regions,
        reach out directly.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4 border-b rule pb-6">
          <span className="w-2 h-2 rounded-full bg-ochre shrink-0" />
          <div>
            <p className="text-sm text-ink-soft">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-lg text-teal-deep hover:text-teal"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b rule pb-6">
          <span className="w-2 h-2 rounded-full bg-ochre shrink-0" />
          <div>
            <p className="text-sm text-ink-soft">LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-teal-deep hover:text-teal"
            >
              linkedin.com/in/zaharatu-mohammed-babika
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-ochre shrink-0" />
          <div>
            <p className="text-sm text-ink-soft">Based in</p>
            <p className="text-lg text-teal-deep">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
