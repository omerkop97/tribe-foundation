import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SimpleCta } from "@/components/SimpleCta";

export const metadata: Metadata = {
  title: "Ons verhaal | Tribe Foundation",
  description:
    "Waarom TRIBE Foundation bestaat: sport als ingang naar zelfvertrouwen, structuur en kansen, zonder drempels van geld of afkomst.",
};

const approach = [
  {
    number: "01",
    title: "Geen drempel",
    description:
      "Meedoen mag niet afhangen van geld, afkomst of toegang. We verlagen de instapkosten van sport en onderwijs zodat niemand aan de kant blijft staan.",
  },
  {
    number: "02",
    title: "Blijvende kracht",
    description:
      "Eenmalige hulp lost weinig op. We investeren in lokale trainers, materialen en kennis die blijven werken als wij een stap terug doen.",
  },
  {
    number: "03",
    title: "Samen vooruit",
    description:
      "We werken met scholen, sportclubs en lokale partners die de omgeving kennen. Zij maken impact duurzaam, wij versnellen het.",
  },
];

const locations = [
  {
    place: "Zevenaar",
    scope: "Lokaal",
    description:
      "Dichtbij huis nemen we drempels weg die kinderen buiten de sportclub houden: contributie, materiaal en de eerste stap naar een team.",
  },
  {
    place: "Pakistan",
    scope: "Internationaal",
    description:
      "Bij een school in Pakistan combineren we onderwijsmiddelen met een structureel sportprogramma en toegang tot schoon drinkwater.",
  },
];

export default function OnsVerhaal() {
  return (
    <>
      <PageHero
        eyebrow="Ons verhaal"
        title="Waarom TRIBE bestaat."
        intro={
          <p>
            TRIBE is ontstaan uit een simpel idee: sport is een van de krachtigste
            manieren om mensen vooruit te helpen, maar alleen als de toegang ertoe
            niet afhangt van geld, afkomst of geluk.
          </p>
        }
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-20 md:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Het probleem
            </p>
            <h2 className="font-display mt-4 text-3xl leading-[0.95] text-charcoal md:text-5xl">
              Talent stopt te vaak bij de eerste drempel.
            </h2>
          </Reveal>
          <Reveal delay={150} className="text-lg text-charcoal/70">
            <p>
              Een lidmaatschap, sportkleding, vervoer naar de club, boeken op school:
              het zijn kleine kosten die voor sommige gezinnen net te veel zijn. Niet
              omdat de wil ontbreekt, maar omdat de rekening niet rond komt.
            </p>
            <p className="mt-4">
              Het gevolg: kinderen die niet meedoen, talent dat nooit ontdekt wordt en
              jongeren die de structuur en het zelfvertrouwen van sport mislopen op
              precies het moment dat het verschil maakt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Onze aanpak
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-[0.95] text-charcoal md:text-5xl">
              Hoe we dat aanpakken.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {approach.map((item, i) => (
              <Reveal key={item.number} delay={i * 130}>
                <span className="font-display text-sm text-gold-dark">{item.number}</span>
                <h3 className="mt-3 text-lg font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Waar we werken
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl leading-[0.95] text-charcoal md:text-5xl">
              Lokaal geworteld, internationaal actief.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal
                key={loc.place}
                delay={i * 150}
                className="rounded-sm border border-charcoal/10 bg-offwhite p-8 transition-shadow duration-500 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {loc.scope}
                </p>
                <h3 className="font-display mt-2 text-3xl text-forest">{loc.place}</h3>
                <p className="mt-3 text-charcoal/70">{loc.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SimpleCta
        heading="Wil je onderdeel worden van dit verhaal?"
        body="Als partner, vrijwilliger of donateur kun je vandaag nog bijdragen aan een concreet project."
      />
    </>
  );
}
