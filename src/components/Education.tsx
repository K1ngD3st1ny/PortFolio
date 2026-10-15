import { education } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Education() {
  return (
    <section id="education" className="section-outer py-12 md:py-16" aria-label="Education">
      <hr className="section-rule mb-10 md:mb-14" />
      <FadeIn>
        <div className="editorial-grid">
          <div className="section-label">Education</div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i}>
                <h3
                  className="text-lg md:text-xl mb-0.5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {edu.institution}
                </h3>
                <p className="text-sm text-[var(--color-ink)] mb-0.5">
                  {edu.degree}
                </p>
                <p
                  className="text-xs text-[var(--color-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {edu.period} · {edu.detail} · {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
