"use client";

import { useState } from "react";
import Link from "next/link";
import { pillars } from "@/lib/pillars";
import { Reveal } from "./Reveal";

export function PillarShowcase() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];

  return (
    <section className="bg-forest text-offwhite">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/50">
            Waar we voor staan
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[0.95] md:text-5xl">
            Drie pijlers die de mens achter de sporter versterken.
          </h2>
        </Reveal>

        <div role="tablist" className="mt-10 flex flex-wrap gap-2 border-b border-offwhite/15">
          {pillars.map((p, i) => (
            <button
              key={p.tab}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="relative px-4 py-4 text-left text-sm font-semibold transition-colors md:px-6"
              style={{ color: i === active ? p.accent : "rgba(247,245,240,0.55)" }}
            >
              <span className="mr-2 font-display text-xs">{p.number}</span>
              {p.tab}
              {i === active && (
                <span
                  className="absolute inset-x-0 -bottom-px h-0.5"
                  style={{ backgroundColor: p.accent }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <div key={active} role="tabpanel" className="tab-fade max-w-2xl">
            <p
              className="text-xs font-semibold uppercase tracking-[0.15em]"
              style={{ color: pillar.accent }}
            >
              {pillar.location}
            </p>
            <h3 className="font-display mt-3 text-3xl leading-[0.95] md:text-4xl">
              {pillar.heading}
            </h3>
            <p className="mt-4 text-offwhite/75">{pillar.body}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="font-display text-4xl" style={{ color: pillar.accent }}>
                {pillar.stat}
              </span>
              <span className="text-sm text-offwhite/60">{pillar.statLabel}</span>
            </div>

            <ul className="mt-6 flex flex-col gap-2">
              {pillar.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-offwhite/80">
                  <span className="mt-1" style={{ color: pillar.accent }}>
                    ↗
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <Link
              href={pillar.linkHref}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
              style={{ color: pillar.accent }}
            >
              {pillar.linkLabel} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
