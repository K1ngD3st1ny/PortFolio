import { projects } from "@/data/content";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="section-outer py-12 md:py-16" aria-label="Projects">
      <hr className="section-rule mb-10 md:mb-14" />
      <div className="editorial-grid mb-8">
        <div className="section-label">Projects</div>
        <div />
      </div>

      <div className="space-y-14 md:space-y-16">
        {projects.map((project) => (
          <FadeIn key={project.index}>
            <div className="editorial-grid project-item">
              {/* Left column: index number */}
              <div className="flex items-start gap-3 md:flex-col md:gap-1">
                <span className="project-index">{project.index}</span>
              </div>

              {/* Right column: project content */}
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                  <h3
                    className="text-xl md:text-2xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm text-[var(--color-muted)]">
                    {project.summary}
                  </span>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <ul className="content-list mb-4">
                  {project.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>

                {/* GitHub link */}
                {/* TODO: replace # with actual GitHub repo URL */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
