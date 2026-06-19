"use client";

import { useActionState } from "react";
import { sendContactEmail } from "../actions/contact";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, null);

  if (state?.success) {
    return (
      <div className="rounded-lg border border-gold/30 bg-background/5 p-6 text-center">
        <p className="text-lg font-medium text-gold">Hvala vam!</p>
        <p className="mt-1 text-background/70">
          Vaša poruka je poslana. Javit ćemo vam se uskoro.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-background/70">
          Ime i prezime
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-background/20 bg-background/5 px-4 py-3 text-background placeholder-background/30 focus:border-gold/50 focus:outline-none"
          placeholder="Vaše ime"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="mb-1 block text-sm text-background/70"
        >
          Telefon ili e-mail
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          className="w-full rounded-lg border border-background/20 bg-background/5 px-4 py-3 text-background placeholder-background/30 focus:border-gold/50 focus:outline-none"
          placeholder="+387 6x xxx xxx"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm text-background/70"
        >
          Poruka
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-background/20 bg-background/5 px-4 py-3 text-background placeholder-background/30 focus:border-gold/50 focus:outline-none"
          placeholder="Broj osoba, datum, posebne napomene..."
        />
      </div>

      {state?.error && (
        <p className="text-sm text-accent">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-night transition-colors hover:bg-gold/90 disabled:opacity-60"
      >
        {pending ? "Šalje se..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
