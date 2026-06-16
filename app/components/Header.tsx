"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "O nama" },
  { href: "#menu", label: "Meni" },
  { href: "#gallery", label: "Galerija" },
  { href: "#contact", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-night/95 backdrop-blur-sm border-b border-gold/10"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <a href="#top" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.jpg"
              alt="La Trattoria"
              width={140}
              height={140}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </a>
          <nav className="hidden gap-8 text-sm uppercase tracking-wider sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-background/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gold px-5 py-2 text-sm font-medium text-night transition-colors hover:bg-gold/90 sm:inline-flex"
            >
              Rezervacija
            </a>
            <button
              aria-label={open ? "Zatvori meni" : "Otvori meni"}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-background"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-background"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-background"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-night sm:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                className="font-display text-3xl text-background"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + links.length * 0.07, ease: "easeOut" }}
              className="mt-4 rounded-full bg-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-night"
            >
              Rezervacija
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
