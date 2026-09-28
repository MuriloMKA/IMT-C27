import { motion } from 'motion/react';
import { easeGallery, Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  script: string;
  title: string;
  tone?: 'dark' | 'light';
  align?: 'center' | 'left';
};

/*
 * Título no estilo dos posts: palavra em script ("Conheça")
 * sobre uma linha em caixa alta ("A COMISSÃO").
 */
export function SectionHeading({ eyebrow, script, title, tone = 'dark', align = 'center' }: SectionHeadingProps) {
  const onDark = tone === 'dark';
  const centered = align === 'center';

  return (
    <div className={centered ? 'text-center' : 'text-left'}>
      <Reveal>
        <div className={`flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
          <motion.span
            className={`h-px w-10 origin-right ${onDark ? 'gold-fill' : 'bg-crimson/60'}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeGallery }}
          />
          <span className={`eyebrow ${onDark ? 'text-ivory/80' : 'text-crimson/80'}`}>{eyebrow}</span>
          <motion.span
            className={`h-px w-10 origin-left ${onDark ? 'gold-fill' : 'bg-crimson/60'} ${centered ? '' : 'hidden'}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeGallery }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-6 leading-none">
          <span
            className={`block font-script text-6xl font-normal md:text-8xl ${onDark ? 'gold-text' : 'text-crimson'} pb-2`}
          >
            {script}
          </span>
          <span
            className={`-mt-3 block font-display text-3xl font-light tracking-[0.08em] uppercase md:-mt-5 md:text-5xl ${
              onDark ? 'text-ivory' : 'text-crimson'
            }`}
          >
            {title}
          </span>
        </h2>
      </Reveal>
    </div>
  );
}
