import { skills } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="section-outer py-12 md:py-16" aria-label="Technical skills">
      <hr className="section-rule mb-10 md:mb-14" />
      <FadeIn>
        <div className="editorial-grid">
          <div className="section-label">Skills</div>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3
                  className="text-sm font-medium text-[var(--color-ink)] mb-1.5"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {group.category}
                </h3>
                <p
                  className="text-xs text-[var(--color-muted)] leading-relaxed max-w-[65ch]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
