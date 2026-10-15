import { hero } from "@/data/content";

export default function Hero() {
  return (
    <header id="hero" className="section-outer pt-28 pb-16 md:pt-36 md:pb-20">
      <h1
        className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {hero.name}
      </h1>

      <p className="text-base md:text-lg text-[var(--color-muted)] max-w-[60ch] leading-relaxed mb-4">
        {hero.tagline}
      </p>

      <p
        className="text-xs text-[var(--color-muted)] mb-8"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {hero.location} · {hero.education}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={hero.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          aria-label="Download resume PDF"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 1v9m0 0L4 7m3 3l3-3M2 12h10" />
          </svg>
          Download Resume
        </a>

        <a
          href={`mailto:${hero.email}`}
          className="btn-secondary"
          aria-label="Send email"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="3" width="12" height="8" rx="1" />
            <path d="M1 3l6 5 6-5" />
          </svg>
          Email
        </a>

        {/* TODO: replace # with actual GitHub URL */}
        <a
          href={hero.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="GitHub profile"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>

        {/* TODO: replace # with actual LinkedIn URL */}
        <a
          href={hero.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="LinkedIn profile"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193V6.169H6.312c.032.678 0 7.225 0 7.225h2.339z"/>
          </svg>
          LinkedIn
        </a>
      </div>
    </header>
  );
}
