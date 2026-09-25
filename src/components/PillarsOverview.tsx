const pillars = [
  {
    number: "01",
    title: "Geen drempel",
    description: "Meedoen mag niet afhangen van geld, afkomst of toegang.",
  },
  {
    number: "02",
    title: "Blijvende kracht",
    description: "We bouwen aan zelfstandigheid, niet aan tijdelijke oplossingen.",
  },
  {
    number: "03",
    title: "Samen vooruit",
    description: "Lokale partners en de gemeenschap maken impact duurzaam.",
  },
];

export function PillarsOverview() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-20 md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
            Meer dan sport
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[0.95] text-charcoal md:text-5xl">
            Together We Rise.
          </h2>
        </div>
        <div className="text-lg text-charcoal/70">
          <p>
            TRIBE betekent gemeenschap. Niet kijken naar waar iemand vandaan komt,
            maar naar waar iemand naartoe kan groeien.
          </p>
          <p className="mt-4">
            Sport is daarbij geen eindpunt. Het is een ingang naar zelfvertrouwen,
            structuur, gezondheid en verbinding. Vanuit die overtuiging bouwen we aan
            projecten die drempels wegnemen en perspectief openen — lokaal in
            Zevenaar én internationaal.
          </p>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`px-6 py-10 md:px-10 md:py-12 ${
                i > 0 ? "border-t border-charcoal/10 md:border-t-0 md:border-l" : ""
              }`}
            >
              <span className="font-display text-sm text-gold-dark">{pillar.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-charcoal">{pillar.title}</h3>
              <p className="mt-2 text-sm text-charcoal/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
