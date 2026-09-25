"use client";

import { useState, type FormEvent } from "react";

const contributionOptions = [
  "Een specifiek project",
  "Als vrijwilliger",
  "Als partner of sponsor",
  "Met een donatie",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contribution, setContribution] = useState(contributionOptions[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = `Bijdrage aan TRIBE Foundation — ${contribution}`;
    const body = `Naam: ${name}\nE-mailadres: ${email}\nIk wil bijdragen aan: ${contribution}\n\nBericht:\n${message}`;
    window.location.href = `mailto:info@tribefoundation.nl?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  const inputClasses =
    "w-full rounded-sm border border-charcoal/20 bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="naam" className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/60">
            Naam
          </label>
          <input
            id="naam"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jouw naam"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/60">
            E-mailadres
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="naam@organisatie.nl"
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bijdrage" className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/60">
          Ik wil bijdragen aan
        </label>
        <select
          id="bijdrage"
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
          className={`mt-2 ${inputClasses}`}
        >
          {contributionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="bericht" className="text-xs font-semibold uppercase tracking-[0.1em] text-charcoal/60">
          Bericht
        </label>
        <textarea
          id="bericht"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Vertel kort waar je aan denkt"
          className={`mt-2 resize-none ${inputClasses}`}
        />
      </div>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-dark"
      >
        Open e-mail om te versturen →
      </button>
      <p className="text-xs text-charcoal/50">
        Je e-mailprogramma opent met het bericht alvast ingevuld.
      </p>
    </form>
  );
}
