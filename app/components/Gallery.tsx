import fs from "fs";
import path from "path";
import Reveal from "./Reveal";
import GalleryLightbox from "./GalleryLightbox";

function getGalleryPhotos() {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort()
    .map((file) => `/images/gallery/${file}`);
}

export default function Gallery() {
  const photos = getGalleryPhotos();

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal className="mb-14 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Galerija
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <GalleryLightbox photos={photos} />
      </Reveal>
    </section>
  );
}
