import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { site } from '../data/content';
import { easeGallery } from './brand/Reveal';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Ao rolar: a logo recua para a parede e a luz se apaga
  const logoScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.72]);
  const logoY = useTransform(scrollYProgress, [0, 0.7], ['0vh', '-6vh']);
  const logoOpacity = useTransform(scrollYProgress, [0.25, 0.65], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], ['0px', '-30px']);
  const shade = useTransform(scrollYProgress, [0.3, 0.9], [0, 0.85]);

  return (
    <section id="top" ref={ref} className="relative h-[190svh]">
      <div className="bg-velvet grain sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        {/* Spot de luz de galeria acendendo */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 45% 55% at 50% 42%, rgb(255 190 150 / 0.22), transparent 70%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.4, delay: 1.1, ease: 'easeOut' }}
        />

        <motion.div className="relative mb-6 md:mb-8" style={{ opacity: textOpacity, y: textY }}>
          <motion.p
            className="eyebrow px-6 text-center text-ivory/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
          >
            Formatura · {site.institution}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          style={{ scale: logoScale, y: logoY, opacity: logoOpacity }}
        >
          <motion.div
            className="relative size-[min(62vw,46svh)] drop-shadow-[0_18px_30px_rgb(20_0_0/0.55)]"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 2, delay: 0.7, ease: easeGallery }}
          >
            <div className="logo-gold absolute inset-0" role="img" aria-label="Logo Mauá 2027" />
            <div className="logo-shine absolute inset-0" aria-hidden />
          </motion.div>
        </motion.div>

        <motion.h1
          className="relative mt-8 text-center md:mt-10"
          style={{ opacity: textOpacity, y: textY }}
        >
          <span className="sr-only">
            {site.title}: {site.subtitle}
          </span>
          <motion.span
            aria-hidden
            className="block font-display text-2xl font-light tracking-[0.35em] text-ivory uppercase md:text-4xl"
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 2, delay: 1.5, ease: easeGallery }}
          >
            {site.subtitle}
          </motion.span>
        </motion.h1>

        {/* Indicador de scroll */}
        <motion.div className="absolute bottom-8" style={{ opacity: textOpacity }}>
          <motion.div
            className="flex flex-col items-center gap-3 text-ivory/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            <span className="eyebrow text-[0.65rem]">Entre na exposição</span>
            <span className="scroll-cue block h-10 w-px bg-ivory/60" />
          </motion.div>
        </motion.div>

        {/* Escurece ao sair, emendando na próxima sala */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 bg-wine-deep" style={{ opacity: shade }} />

        {/* Cortinas abrindo */}
        {!reduceMotion && (
          <>
            <motion.div
              aria-hidden
              className="curtain pointer-events-none absolute inset-y-0 left-0 z-10 w-[52%] shadow-[20px_0_40px_rgb(0_0_0/0.5)]"
              initial={{ x: '0%' }}
              animate={{ x: '-102%' }}
              transition={{ duration: 2.1, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            />
            <motion.div
              aria-hidden
              className="curtain pointer-events-none absolute inset-y-0 right-0 z-10 w-[52%] shadow-[-20px_0_40px_rgb(0_0_0/0.5)]"
              initial={{ x: '0%' }}
              animate={{ x: '102%' }}
              transition={{ duration: 2.1, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
            />
          </>
        )}
      </div>
    </section>
  );
}
