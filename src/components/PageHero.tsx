import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: ReactNode;
};

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
        <span className="h-px w-6 bg-gold" />
        {eyebrow}
      </p>
      <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[0.95] text-charcoal md:text-6xl">
        {title}
      </h1>
      <div className="mt-6 max-w-xl text-lg text-charcoal/70">{intro}</div>
    </section>
  );
}
