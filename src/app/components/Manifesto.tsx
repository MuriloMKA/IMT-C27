import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { useRef } from 'react';
import { manifesto } from '../data/content';
import { Reveal } from './brand/Reveal';

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}&nbsp;
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });
  const words = manifesto.statement.split(' ');

  return (
    <section id="sobre" className="bg-wall grain px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center justify-between border-b border-crimson/70 pb-3 text-crimson">
            <span className="eyebrow">Comissão</span>
            <span className="eyebrow">Mauá 27</span>
          </div>
        </Reveal>

        <p
          ref={ref}
          className="mt-16 font-display text-[clamp(1.9rem,4.6vw,3.9rem)] leading-[1.12] font-light text-crimson md:mt-24"
        >
          {words.map((word, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {word}
            </Word>
          ))}
        </p>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <p className="font-script text-6xl leading-none text-crimson md:text-7xl">Quem somos</p>
          </Reveal>
          <div className="space-y-6">
            {manifesto.body.map((text, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p className="text-xl leading-relaxed text-crimson/85 md:text-[1.4rem]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
