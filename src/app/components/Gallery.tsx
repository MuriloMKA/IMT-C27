import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Instagram } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { posts, site, type Post } from '../data/content';
import { Reveal } from './brand/Reveal';
import { SectionHeading } from './brand/SectionHeading';

function Artwork({ post, index }: { post: Post; index: number }) {
  return (
    <figure className="relative w-[72vw] shrink-0 snap-center sm:w-[46vw] lg:w-[min(24vw,340px,calc((100svh_-_27rem)*0.75))]">
      {/* luz de galeria sobre o quadro */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -top-32 bottom-1/4 -z-10"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 45%, rgb(255 200 160 / 0.14), transparent 100%)' }}
      />
      <div className="frame-gold p-2 transition-transform duration-700 ease-[var(--ease-gallery)] hover:-translate-y-1.5 md:p-2.5">
        <img src={post.src} alt={`Post: ${post.title}`} loading="lazy" className="block aspect-[3/4] w-full object-cover" />
      </div>
      <figcaption className="mx-auto mt-6 w-fit min-w-40 bg-ivory px-4 py-3 text-crimson shadow-[0_8px_20px_rgb(20_0_0/0.35)]">
        <span className="eyebrow block text-[0.6rem] text-crimson/60">Nº {String(index + 1).padStart(2, '0')}</span>
        <span className="mt-1 block font-display text-lg leading-tight">{post.title}</span>
        <span className="block text-sm text-crimson/70 italic">{post.caption}</span>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // quanto a trilha precisa andar na horizontal (só no desktop)
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      setDistance(isDesktop ? Math.max(0, track.scrollWidth - window.innerWidth) : 0);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const x = useTransform(smooth, (p) => -p * distance);
  const pinned = distance > 0;

  return (
    <section
      id="acervo"
      ref={sectionRef}
      className="bg-velvet grain relative"
      style={{ height: pinned ? `calc(100svh + ${distance}px)` : undefined }}
    >
      <div className={pinned ? 'sticky top-0 flex h-svh flex-col justify-center overflow-hidden' : 'py-28 md:py-36'}>
        <div className="px-6 md:px-10">
          <SectionHeading eyebrow="Acervo" script="Em exibição" title="Nossos posts" />
        </div>

        <motion.div
          ref={trackRef}
          style={{ x: pinned ? x : 0 }}
          className={`mt-14 flex gap-10 px-[14vw] md:gap-14 lg:mt-12 lg:w-max lg:gap-20 lg:px-[12vw] ${
            pinned ? '' : 'snap-x snap-mandatory overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
          }`}
        >
          {posts.map((post, i) => (
            <Artwork key={post.src} post={post} index={i} />
          ))}

          <div className="flex w-[60vw] shrink-0 snap-center flex-col items-center justify-center gap-6 text-center sm:w-[40vw] lg:w-[min(24vw,340px,calc((100svh_-_27rem)*0.75))]">
            <p className="font-script text-5xl gold-text">E a exposição continua</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex items-center gap-3 border border-gold/60 px-6 py-4 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-wine"
            >
              <Instagram className="size-4" strokeWidth={1.5} /> Siga no Instagram
            </a>
          </div>
        </motion.div>

        {pinned && (
          <Reveal className="mx-auto mt-10 h-px w-48 bg-ivory/15">
            <motion.div className="h-full origin-left gold-fill" style={{ scaleX: smooth }} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
