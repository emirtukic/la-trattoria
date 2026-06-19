import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-night text-background py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:gap-12 sm:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Posjetite nas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">Pronađite svoj sto</h2>

          <div className="mt-8 space-y-5 text-background/80">
            <div>
              <p className="font-medium text-background">Adresa</p>
              <p>Radićeva 4a, Sarajevo</p>
            </div>
            <div>
              <p className="font-medium text-background">Radno vrijeme</p>
              <p>Svaki dan: 09:00 – 23:30</p>
            </div>
            <div>
              <p className="font-medium text-background">Kontakt</p>
              <p>+387 33 864 470</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.facebook.com/people/La-Trattoria/61591024044855/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-background/30 px-5 py-2 text-sm transition-colors hover:bg-background/10"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/latrattoria.sarajevo/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-background/30 px-5 py-2 text-sm transition-colors hover:bg-background/10"
            >
              Instagram
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6">
          <ContactForm />
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <iframe
              title="Lokacija La Trattoria"
              src="https://maps.google.com/maps?q=Radi%C4%87eva%204a%2C%20Sarajevo%2C%20Bosnia%20and%20Herzegovina&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
