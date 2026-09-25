import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SimpleCta } from "@/components/SimpleCta";
import { pillars } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Projecten & impact — Tribe Foundation",
  description:
    "De concrete projecten van TRIBE Foundation in Zevenaar en Pakistan, en de impact die daaruit voortkomt.",
};

const stats = [
  { value: "250+", label: "kinderen bereikt met schoon drinkwater op school in Pakistan" },
  { value: "2", label: "locaties waar we structureel actief zijn: Zevenaar en Pakistan" },
  { value: "3", label: "pijlers die samen de mens achter de sporter versterken" },
];

export default function ProjectenEnImpact() {
  return (
    <>
      <PageHero
        eyebrow="Projecten & impact"
        title="Waar onze impact concreet wordt."
        intro={
          <p>
            Geen abstracte beloftes, maar projecten met een naam, een plek en een
            resultaat. Dit is waar jouw bijdrage terechtkomt.
          </p>
        }
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
          <div className="grid gap-px overflow-hidden rounded-sm border border-charcoal/10 bg-charcoal/10 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-offwhite p-8">
                <p className="font-display text-4xl text-forest">{stat.value}</p>
                <p className="mt-2 text-sm text-charcoal/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Onze projecten
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-[0.95] text-charcoal md:text-4xl">
            Per pijler, per plek.
          </h2>

          <div className="mt-12 flex flex-col gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.tab}
                id={pillar.tab.toLowerCase()}
                className="scroll-mt-20 rounded-sm border-l-4 bg-white p-8 md:p-10"
                style={{ borderColor: pillar.accent }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.15em]"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.location}
                  </p>
                  <span className="font-display text-3xl text-forest">
                    {pillar.stat}
                    <span className="ml-2 text-xs font-sans font-medium normal-case text-charcoal/50">
                      {pillar.statLabel}
                    </span>
                  </span>
                </div>
                <h3 className="font-display mt-3 text-2xl text-charcoal md:text-3xl">
                  {pillar.heading}
                </h3>
                <p className="mt-3 max-w-2xl text-charcoal/70">{pillar.body}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <span className="mt-1 text-gold-dark">↗</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/onze-pijlers"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  Meer over deze pijler →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SimpleCta
        heading="Help mee een volgend project van de grond te krijgen."
        body="Elke bijdrage, groot of klein, brengt een concreet project een stap dichterbij."
      />
    </>
  );
}
