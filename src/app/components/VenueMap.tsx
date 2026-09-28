import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { event, tableMap } from '../data/content';
import { lockScroll } from '../lib/smooth-scroll';
import { easeGallery, Reveal } from './brand/Reveal';
import { SectionHeading } from './brand/SectionHeading';

/* Esboço de planta enquanto o mapa oficial não chega */
function FloorPlanSketch() {
  const tables: { x: number; y: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 3; col++) {
      tables.push({ x: 90 + col * 70, y: 175 + row * 62 });
      tables.push({ x: 570 + col * 70, y: 175 + row * 62 });
    }
  }

  return (
    <svg viewBox="0 0 800 500" className="h-full w-full text-crimson" aria-hidden>
      <motion.rect
        x="20" y="20" width="760" height="460" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 2, ease: easeGallery }}
      />
      {/* palco */}
      <motion.rect
        x="300" y="40" width="200" height="60" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.5"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 1 }}
      />
      <text x="400" y="76" textAnchor="middle" className="fill-current font-display text-[13px] tracking-[0.3em]" opacity="0.6">PALCO</text>
      {/* pista */}
      <motion.rect
        x="310" y="160" width="180" height="220" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="4 6"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 1 }}
      />
      <text x="400" y="275" textAnchor="middle" className="fill-current font-display text-[13px] tracking-[0.3em]" opacity="0.5">PISTA</text>
      {tables.map((t, i) => (
        <motion.circle
          key={i} cx={t.x} cy={t.y} r="20" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.45"
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 1 + i * 0.035, duration: 0.6, ease: easeGallery }}
          style={{ transformOrigin: `${t.x}px ${t.y}px` }}
        />
      ))}
      <text x="400" y="455" textAnchor="middle" className="fill-current font-display text-[12px] tracking-[0.3em]" opacity="0.5">ENTRADA</text>
    </svg>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-auto bg-wine-deep/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-lenis-prevent
    >
      <button onClick={onClose} className="fixed top-5 right-5 z-10 p-2 text-ivory" aria-label="Fechar mapa">
        <X className="size-7" strokeWidth={1.25} />
      </button>
      <motion.img
        src={src}
        alt={tableMap.caption}
        className="mx-auto my-16 w-[min(1600px,160vw)] max-w-none md:w-[min(1600px,95vw)]"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeGallery }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

export function VenueMap() {
  const [zoomed, setZoomed] = useState(false);

  return (
    <section id="planta" className="bg-wall grain px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Planta da exposição" script="Mapa" title="das mesas" tone="light" />

        <Reveal y={60} className="mt-16 md:mt-24">
          <div className="frame-gold p-3 md:p-4">
            <div className="relative aspect-[16/10] overflow-hidden bg-ivory">
              {tableMap.image ? (
                <button
                  onClick={() => setZoomed(true)}
                  className="group block h-full w-full"
                  aria-label="Ampliar mapa das mesas"
                >
                  <img
                    src={tableMap.image}
                    alt={tableMap.caption}
                    className="h-full w-full object-contain transition-transform duration-700 ease-[var(--ease-gallery)] group-hover:scale-[1.02]"
                  />
                  <span className="eyebrow absolute right-4 bottom-4 flex items-center gap-2 bg-wine/85 px-4 py-2 text-ivory backdrop-blur">
                    <Maximize2 className="size-4" strokeWidth={1.5} /> Ampliar
                  </span>
                </button>
              ) : (
                <>
                  <FloorPlanSketch />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-ivory/90 px-8 py-5 text-center text-crimson shadow-[0_10px_30px_rgb(81_8_6/0.15)] backdrop-blur-sm">
                      <span className="block font-script text-4xl md:text-5xl">Em breve</span>
                      <span className="eyebrow mt-1 block text-crimson/70">Mapa oficial das mesas</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>

        {/* Placa do local */}
        <Reveal delay={0.1} className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-6 text-center text-crimson md:flex-row md:justify-between md:text-left">
          <div>
            <span className="eyebrow text-crimson/65">Local</span>
            <p className="mt-2 font-display text-3xl font-light">{event.venue}</p>
            <p className="mt-1 text-lg text-crimson/75">{event.address}</p>
          </div>
          {event.mapsUrl ? (
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group eyebrow inline-flex shrink-0 items-center gap-3 border border-crimson px-6 py-4 transition-colors duration-500 hover:bg-crimson hover:text-ivory"
            >
              Como chegar
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
            </a>
          ) : (
            <span className="eyebrow shrink-0 border border-crimson/30 px-6 py-4 text-crimson/50">Endereço em breve</span>
          )}
        </Reveal>
      </div>

      <AnimatePresence>{zoomed && tableMap.image && <Lightbox src={tableMap.image} onClose={() => setZoomed(false)} />}</AnimatePresence>
    </section>
  );
}
