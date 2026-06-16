import fs from "fs";
import path from "path";
import Reveal from "./Reveal";

const VIDEO_PUBLIC_PATH = "/videos/video.mp4";

function videoExists() {
  return fs.existsSync(
    path.join(process.cwd(), "public", "videos", "video.mp4")
  );
}

export default function VideoFeature() {
  const hasVideo = videoExists();

  return (
    <section className="bg-night py-16 text-background">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 sm:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gold">
            Doživite atmosferu
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-background/70">
            Kratki uvid u atmosferu La Trattorije - od pripreme jela do
            ambijenta naše terase. Pratite nas i na Facebooku i Instagramu za
            više sadržaja.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-[260px] sm:max-w-[280px]">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gold/20 bg-background/5">
            {hasVideo ? (
              <video
                src={VIDEO_PUBLIC_PATH}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-gold/30 p-6 text-center text-sm text-background/60">
                <p>Video još nije dodan.</p>
                <p className="text-background/40">
                  Stavite uspravan video (9:16) ovdje:
                </p>
                <code className="rounded bg-background/10 px-2 py-1 text-xs text-gold">
                  public/videos/video.mp4
                </code>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
