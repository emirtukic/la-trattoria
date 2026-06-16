import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <div className="grid items-center gap-10 sm:gap-12 sm:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Naša priča
          </p>
          <h2 className="font-display text-3xl sm:text-4xl">
            Okus Italije u srcu Sarajeva
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/80">
            La Trattoria donosi toplinu i jednostavnost italijanske kuhinje u
            Sarajevo. Od svježe tjestenine do pažljivo pripremljenih pizza i
            pinsa, svako jelo nastaje od kvalitetnih sastojaka i s puno pažnje.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Bilo da nas posjećujete na brzom ručku ili dugoj večeri s
            prijateljima, naš sto je uvijek spreman da se osjećate kao kod
            kuće.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/stol.jpeg"
              alt="Ambijent restorana La Trattoria"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
