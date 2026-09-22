import { profile } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t rule mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-ink-soft">
        <p>
          {profile.name} &middot; {profile.location}
        </p>
        <div className="flex gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-teal-deep">
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-deep"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
