import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks } from '../data/content';
import { lockScroll, scrollToId } from '../lib/smooth-scroll';
import { Ornament } from './brand/Ornament';
import { easeGallery } from './brand/Reveal';

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setSolid(y > window.innerHeight * 0.6);
    setHidden(y > window.innerHeight && y > previous + 2);
    if (y < previous - 2) setHidden(false);
  });

  useEffect(() => {
    lockScroll(open);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    lockScroll(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden && !open ? '-100%' : '0%' }}
        transition={{ duration: 0.5, ease: easeGallery }}
      >
        <div
          className={`transition-[background-color,backdrop-filter,border-color] duration-500 ${
            solid && !open
              ? 'border-b border-gold/25 bg-wine/75 backdrop-blur-xl backdrop-saturate-150'
              : 'border-b border-transparent'
          }`}
        >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
            <button
              onClick={() => go('top')}
              className="flex items-center gap-3 text-ivory"
              aria-label="Voltar ao início"
            >
              <span className="logo-gold block size-9 md:size-10" aria-hidden />
              <span className="eyebrow hidden text-ivory/90 sm:inline">Mauá 27</span>
            </button>

            <ul className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => go(link.id)}
                    className="group eyebrow relative py-2 text-ivory/75 transition-colors duration-300 hover:text-ivory"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 gold-fill transition-transform duration-500 ease-[var(--ease-gallery)] group-hover:scale-x-100" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 -mr-2 p-2 text-ivory lg:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              {open ? <X className="size-6" strokeWidth={1.25} /> : <Menu className="size-6" strokeWidth={1.25} />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="bg-velvet grain fixed inset-0 z-40 flex flex-col items-center justify-center lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: easeGallery }}
          >
            <motion.div
              className="w-60 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easeGallery }}
            >
              <Ornament />
            </motion.div>

            <ul className="my-10 flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.06, ease: easeGallery }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className="font-display text-2xl font-light tracking-[0.3em] text-ivory uppercase transition-colors duration-300 active:text-gold"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="w-60 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easeGallery }}
            >
              <Ornament />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
