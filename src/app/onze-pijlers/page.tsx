import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SimpleCta } from "@/components/SimpleCta";
import { pillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Onze pijlers — Tribe Foundation",
  description:
    "Educatie, sportparticipatie en talentontwikkeling: de drie pijlers waarmee TRIBE Foundation de mens achter de sporter versterkt.",
};

export default function OnzePijlers() {
  return (
    <>
      <PageHero
        eyebrow="Onze pijlers"
        title="Drie pijlers, één beweging."
        intro={
          <p>
            Sport is het middel, niet het doel. Onze drie pijlers versterken samen de
            mens achter de sporter — op school, op het veld en op weg naar een hoger
            niveau.
          </p>
        }
      />

      {pillars.map((pillar, i) => (
        <section
          key={pillar.tab}
          id={pillar.tab.toLowerCase()}
          className={`scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-sand"}`}
        >
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
              <span
                className="font-display text-7xl leading-none md:text-9xl"
                style={{ color: pillar.accent }}
              >
                {pillar.number}
              </span>
              <div className="max-w-2xl">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: pillar.accent }}
                >
                  {pillar.location}
                </p>
                <h2 className="font-display mt-3 text-3xl leading-[0.95] text-charcoal md:text-5xl">
                  {pillar.heading}
                </h2>
                <p className="mt-4 text-lg text-charcoal/70">{pillar.body}</p>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-4xl text-forest">{pillar.stat}</span>
                  <span className="text-sm text-charcoal/60">{pillar.statLabel}</span>
                </div>

                <ul className="mt-6 flex flex-col gap-2">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="mt-1 text-gold-dark">↗</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href={pillar.linkHref}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  {pillar.linkLabel} →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <SimpleCta
        heading="Welke pijler past bij jouw bijdrage?"
        body="Of het nu gaat om educatie, sportparticipatie of talentontwikkeling — er is altijd een concrete manier om aan te sluiten."
      />
    </>
  );
}
