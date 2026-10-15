import { achievements } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="section-outer py-12 md:py-16" aria-label="Achievements">
      <hr className="section-rule mb-10 md:mb-14" />
      <FadeIn>
        <div className="editorial-grid">
          <div className="section-label">Achievements</div>
          <ul className="content-list">
            {achievements.map((item, i) => (
              <li key={i}>{item.text}</li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
