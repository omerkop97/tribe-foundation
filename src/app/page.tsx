import Image from "next/image";
import { Button } from "@/components/Button";
import { PillarsOverview } from "@/components/PillarsOverview";
import { PillarShowcase } from "@/components/PillarShowcase";
import { ContactCta } from "@/components/ContactCta";

export default function Home() {
  return (
    <>
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
            <span className="h-px w-6 bg-gold" />
            Tribe Foundation &middot; Sportstichting
          </p>
          <h1 className="font-display mt-6 text-5xl leading-[0.95] text-charcoal md:text-7xl">
            Sport is het begin.
            <br />
            <span className="text-forest">Kansen zijn het doel.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-charcoal/70">
            Wij gebruiken de kracht van sport om mensen verder te brengen — met
            onderwijs, vrije toegang tot beweging en steun voor talent dat anders
            verloren gaat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/projecten-en-impact" variant="primary">
              Ontdek onze projecten →
            </Button>
            <Button href="/ons-verhaal" variant="ghost">
              Waarom TRIBE?
            </Button>
          </div>
        </div>

        <div className="relative mb-6 md:mb-10">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1622659097509-4d56de14539e?q=80&w=1000&auto=format&fit=crop"
              alt="Kinderen spelen voetbal op een grasveld, met een doel op de achtergrond"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-sm border border-charcoal/10 bg-white p-5 shadow-lg md:-left-10">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-charcoal/50">
              Impact in beweging
            </p>
            <p className="font-display mt-2 text-4xl text-forest">250+</p>
            <p className="mt-1 text-sm text-charcoal/70">
              kinderen bereikt met schoon drinkwater op school in Pakistan
            </p>
          </div>
        </div>
      </div>
    </section>

    <PillarsOverview />
    <PillarShowcase />
    <ContactCta />
    </>
  );
}
