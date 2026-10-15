import { positions } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Positions() {
  return (
    <section id="positions" className="section-outer py-12 md:py-16" aria-label="Positions of responsibility">
      <hr className="section-rule mb-10 md:mb-14" />
      <FadeIn>
        <div className="editorial-grid">
          <div className="section-label">Responsibility</div>
          <div className="space-y-6">
            {positions.map((pos, i) => (
              <div key={i}>
                <h3
                  className="text-lg md:text-xl mb-0.5"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {pos.role}
                </h3>
                <p className="text-sm text-[var(--color-ink)] mb-0.5">
                  {pos.organization}
                </p>
                <p
                  className="text-xs text-[var(--color-muted)] mb-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {pos.period}
                </p>
                <p className="text-sm text-[var(--color-muted)] max-w-[65ch]">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
