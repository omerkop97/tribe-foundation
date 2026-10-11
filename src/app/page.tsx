import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { CountUp } from "@/components/CountUp";
import { ContactCta } from "@/components/ContactCta";
import { ImpactBand } from "@/components/ImpactBand";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/Parallax";
import { PillarsOverview } from "@/components/PillarsOverview";
import { PillarShowcase } from "@/components/PillarShowcase";
import { Process } from "@/components/Process";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p
              className="rise flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark"
              style={delay(0)}
            >
              <span className="h-px w-6 bg-gold" />
              Tribe Foundation &middot; Sportstichting
            </p>
            <h1 className="font-display mt-6 text-5xl leading-[0.95] text-charcoal md:text-7xl">
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="hero-line block" style={delay(150)}>
                  Sport is het begin.
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="hero-line block text-forest" style={delay(300)}>
                  Kansen zijn het doel.
                </span>
              </span>
            </h1>
            <p className="rise mt-6 max-w-xl text-lg text-charcoal/70" style={delay(550)}>
              Wij gebruiken de kracht van sport om mensen verder te brengen: met
              onderwijs, vrije toegang tot beweging en steun voor talent dat anders
              verloren gaat.
            </p>
            <div className="rise mt-8 flex flex-wrap items-center gap-4" style={delay(700)}>
              <Button href="/projecten-en-impact" variant="primary">
                Ontdek onze projecten →
              </Button>
              <Button href="/ons-verhaal" variant="ghost">
                Waarom TRIBE?
              </Button>
            </div>
          </div>

          <div className="relative mb-6 md:mb-10">
            <div
              className="img-reveal relative aspect-[4/5] overflow-hidden rounded-sm"
              style={delay(200)}
            >
              <Parallax className="absolute inset-x-0 -bottom-[12%] -top-[12%]" speed={0.08}>
                <Image
                  src="https://images.unsplash.com/photo-1622659097509-4d56de14539e?q=80&w=1000&auto=format&fit=crop"
                  alt="Kinderen spelen voetbal op een grasveld, met een doel op de achtergrond"
                  fill
                  preload
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
            <div
              className="rise absolute -bottom-6 -left-6 max-w-[220px] rounded-sm border border-charcoal/10 bg-white p-5 shadow-lg md:-left-10"
              style={delay(1000)}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
                Impact in beweging
              </p>
              <CountUp to={250} suffix="+" className="font-display mt-2 block text-4xl text-forest" />
              <p className="mt-1 text-sm text-charcoal/70">
                kinderen bereikt met schoon drinkwater op school in Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={["Sport", "Onderwijs", "Gemeenschap", "Talent", "Kansen", "Samen vooruit"]} />

      <section className="bg-offwhite">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-40">
          <Reveal>
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              <span className="h-px w-6 bg-gold" />
              Wie we zijn
            </p>
          </Reveal>
          <WordReveal
            text="TRIBE betekent gemeenschap. Niet kijken naar waar iemand vandaan komt, maar naar waar iemand naartoe kan groeien."
            className="font-display text-4xl leading-[1.02] text-charcoal md:text-6xl lg:text-7xl"
          />
        </div>
      </section>

      <PillarsOverview />
      <ImpactBand />
      <Process />
      <PillarShowcase />
      <ContactCta />
    </>
  );
}
