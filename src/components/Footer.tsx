import { hero } from "@/data/content";

export default function Footer() {
  return (
    <footer className="section-outer py-12 md:py-16" role="contentinfo">
      <hr className="section-rule mb-10" />
      <div className="editorial-grid">
        <div />
        <div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4">
            <a
              href={`mailto:${hero.email}`}
              className="arrow-link"
              aria-label="Email Deepu"
            >
              {hero.email}
            </a>
            {/* TODO: replace # with actual GitHub URL */}
            <a
              href={hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
              aria-label="GitHub profile"
            >
              GitHub <span aria-hidden="true">→</span>
            </a>
            {/* TODO: replace # with actual LinkedIn URL */}
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
              aria-label="LinkedIn profile"
            >
              LinkedIn <span aria-hidden="true">→</span>
            </a>
          </div>
          <p
            className="text-xs text-[var(--color-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2026 Deepu Vishwakarma
          </p>
        </div>
      </div>
    </footer>
  );
}
