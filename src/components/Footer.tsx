import Link from "next/link";
import { Reveal } from "./Reveal";

const columns = [
  {
    title: "Stichting",
    links: [
      { href: "/ons-verhaal", label: "Ons verhaal" },
      { href: "/onze-pijlers", label: "Onze pijlers" },
      { href: "/projecten-en-impact", label: "Projecten & impact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "mailto:info@tribefoundation.nl", label: "info@tribefoundation.nl" },
      { href: "/contact", label: "Samen impact maken" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="overflow-hidden bg-forest text-offwhite">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
        <Reveal>
          <p
            aria-hidden
            className="font-display mb-16 select-none text-[15vw] leading-[0.85] text-offwhite/10 md:mb-24 md:text-[9.5rem]"
          >
            Together we rise.
          </p>
        </Reveal>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <span className="font-display text-xl tracking-wide">Tribe Foundation</span>
            <p className="mt-4 text-sm text-offwhite/70">
              Wij gebruiken de kracht van sport om mensen verder te brengen — lokaal in
              Zevenaar én internationaal.
            </p>
          </div>
          <div className="flex gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-offwhite/50">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-offwhite/80 transition-colors hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-offwhite/15 pt-6 text-xs text-offwhite/50 md:flex-row md:justify-between">
          <span>&copy; {new Date().getFullYear()} Tribe Foundation. Alle rechten voorbehouden.</span>
          <span>Zevenaar, Nederland</span>
        </div>
      </div>
    </footer>
  );
}
