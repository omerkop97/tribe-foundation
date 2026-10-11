import type { CSSProperties, ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
};

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p
        className="rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark"
        style={delay(0)}
      >
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </p>
      <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[0.95] text-charcoal md:text-6xl">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="hero-line block" style={delay(120)}>
            {title}
          </span>
        </span>
      </h1>
      <div className="rise mt-6 max-w-xl text-lg text-charcoal/70" style={delay(350)}>
        {intro}
      </div>
    </section>
  );
}
