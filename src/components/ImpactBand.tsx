import Image from "next/image";
import { CountUp } from "./CountUp";
import { Parallax } from "./Parallax";
import { Reveal } from "./Reveal";

const stats = [
  {
    to: 250,
    suffix: "+",
    label: "kinderen met schoon drinkwater op school in Pakistan",
  },
  {
    to: 2,
    suffix: "",
    label: "locaties waar we structureel actief zijn: Zevenaar en Pakistan",
  },
  {
    to: 3,
    suffix: "",
    label: "pijlers: educatie, sportparticipatie en talentontwikkeling",
  },
];

export function ImpactBand() {
  return (
    <section className="relative overflow-hidden bg-forest-dark text-offwhite">
      <div className="absolute inset-0">
        <Parallax className="absolute inset-x-0 -top-[15%] -bottom-[15%]" speed={0.1}>
          <Image
            src="https://images.unsplash.com/photo-1680024436315-fb06267264b2?q=75&w=1800&auto=format&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-forest-dark/85" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Impact in cijfers
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[0.95] md:text-6xl">
            Elke stap telt.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className="border-t border-offwhite/25 pt-6">
                <CountUp
                  to={stat.to}
                  suffix={stat.suffix}
                  className="font-display block text-7xl leading-none text-gold md:text-8xl"
                />
                <p className="mt-4 max-w-xs text-sm text-offwhite/75">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
