import { Button } from "./Button";
import { ContactForm } from "./ContactForm";

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="bg-charcoal text-offwhite">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Bouw mee aan de volgende stap
            </p>
            <h2 className="font-display mt-4 max-w-lg text-3xl leading-[0.95] md:text-4xl">
              Impact groeit als mensen in beweging komen.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-offwhite/70">
              Als partner, vrijwilliger of donateur kun je een concreet project
              versnellen. Vertel ons waar jij aan wilt bijdragen.
            </p>
            <Button href="#bijdrage-formulier" variant="primary" className="mt-6">
              Ik wil bijdragen →
            </Button>
          </div>
        </div>
      </div>

      <div id="bijdrage-formulier" className="bg-sand scroll-mt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
              Samenwerken
            </p>
            <h2 className="font-display mt-4 text-3xl leading-[0.95] text-charcoal md:text-4xl">
              Maak jouw bijdrage concreet.
            </h2>
            <p className="mt-4 max-w-sm text-charcoal/70">
              We bespreken graag welk project past bij jouw organisatie, netwerk of
              persoonlijke motivatie.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
