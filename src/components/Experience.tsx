import { experience } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="section-outer py-12 md:py-16" aria-label="Work experience">
      <hr className="section-rule mb-10 md:mb-14" />
      {experience.map((exp, i) => (
        <FadeIn key={i}>
          <div className="editorial-grid">
            <div className="section-label">
              <span className="block">Experience</span>
              <span
                className="block mt-1 text-[0.65rem] normal-case tracking-normal"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {exp.period}
              </span>
            </div>
            <div className="experience-item">
              <h2
                className="text-xl md:text-2xl mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {exp.company}
              </h2>
              <p
                className="text-xs text-[var(--color-muted)] mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {exp.role}
              </p>
              <ul className="content-list">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
