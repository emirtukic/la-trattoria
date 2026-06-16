"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-background"
    >
      <Image
        src="/images/restoran.jpg"
        alt="Terasa restorana La Trattoria"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-night/80" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto mb-6 w-56 sm:w-72"
        >
          <Image
            src="/images/logo.jpg"
            alt="La Trattoria - Restaurant & Pizzeria"
            width={600}
            height={600}
            className="w-full rounded-xl"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mb-2 text-sm uppercase tracking-[0.3em] text-gold"
        >
          Radićeva 4a, Sarajevo
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="mx-auto max-w-xl font-display text-lg italic text-background/85"
        >
          Autentični italijanski okusi, svježe pripremljeni svaki dan. Topli
          sto čeka vas u srcu Sarajeva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#menu"
            className="rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-night transition-colors hover:bg-gold/90"
          >
            Pogledajte meni
          </a>
          <a
            href="#contact"
            className="rounded-full border border-background/40 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-background/10"
          >
            Rezervišite sto
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Skrolujte dole"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-background/50 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-background/70" />
        </motion.div>
      </motion.a>
    </section>
  );
}
