"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function GalleryLightbox({ photos }: { photos: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  if (photos.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="relative h-40 w-full overflow-hidden rounded-lg bg-foreground/5 sm:h-48"
          >
            <Image
              src={src}
              alt="La Trattoria"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {openIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-100 flex items-center justify-center bg-night p-4"
                onClick={close}
              >
                <button
                  aria-label="Zatvori"
                  onClick={close}
                  className="absolute right-4 top-4 text-3xl text-background"
                >
                  ×
                </button>
                <button
                  aria-label="Prethodna slika"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-background"
                >
                  ‹
                </button>
                <button
                  aria-label="Sljedeća slika"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-background"
                >
                  ›
                </button>
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative h-[85vh] w-full max-w-5xl touch-pan-y"
                  onClick={(e) => e.stopPropagation()}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipe = info.offset.x;
                    const velocity = info.velocity.x;
                    if (swipe < -60 || velocity < -500) {
                      next();
                    } else if (swipe > 60 || velocity > 500) {
                      prev();
                    }
                  }}
                >
                  <Image
                    src={photos[openIndex]}
                    alt="La Trattoria"
                    fill
                    className="object-contain"
                    sizes="100vw"
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
