"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const steps = [
  {
    title: "Luisteren",
    description:
      "We beginnen bij wat scholen, clubs en gezinnen zelf aangeven nodig te hebben, niet bij wat wij denken dat past.",
  },
  {
    title: "Opbouwen",
    description:
      "Met praktische middelen: boeken, schoon drinkwater, sportmateriaal en contributie. Zo is meedoen vanaf dag één mogelijk.",
  },
  {
    title: "Overdragen",
    description:
      "We leiden lokale trainers en coaches op, zodat het programma blijft draaien, ook als wij een stap terug doen.",
  },
];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const [lit, setLit] = useState(steps.length);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const r = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height));
      if (fillRef.current) fillRef.current.style.transform = `scaleY(${p})`;
      setLit(Math.ceil(p * steps.length));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-offwhite">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-28">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Onze werkwijze
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] text-charcoal md:text-5xl">
              Zo werken we.
            </h2>
            <p className="mt-5 max-w-sm text-charcoal/70">
              Impact die blijft begint niet met geven, maar met samen opbouwen en op tijd
              loslaten.
            </p>
          </Reveal>
        </div>

        <ol ref={listRef} className="relative flex flex-col gap-14 pl-12">
          <div aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-charcoal/15">
            <div
              ref={fillRef}
              className="h-full w-full origin-top bg-gold"
              style={{ transform: "scaleY(1)" }}
            />
          </div>
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                className={`absolute -left-12 top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors duration-500 ${
                  i < lit
                    ? "border-gold bg-gold text-charcoal"
                    : "border-charcoal/20 bg-offwhite text-charcoal/40"
                }`}
              >
                {i + 1}
              </span>
              <h3 className="font-display text-3xl text-charcoal">{step.title}</h3>
              <p className="mt-3 max-w-md text-charcoal/70">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
