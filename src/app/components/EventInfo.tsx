import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { event, exhibitFacts } from '../data/content';
import { daysUntil, formatDate } from '../lib/dates';
import { Reveal } from './brand/Reveal';
import { SectionHeading } from './brand/SectionHeading';

function Countdown({ date }: { date: string }) {
  const days = daysUntil(date);
  if (days < 0) return null;

  return (
    <Reveal delay={0.2} className="mt-10 flex items-end gap-5 border-t border-gold/30 pt-8">
      <div className="leading-none">
        <span className="eyebrow block text-ivory/60">{days === 0 ? 'É hoje' : days === 1 ? 'Falta' : 'Faltam'}</span>
        <span className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-7xl font-light text-ivory">{days === 0 ? '✦' : days}</span>
          {days > 0 && <span className="gold-text font-script text-5xl">{days === 1 ? 'dia' : 'dias'}</span>}
        </span>
      </div>
      <p className="pb-2 text-lg leading-snug text-ivory/75">
        {days === 0 ? 'A noite do baile chegou' : 'para o baile'}
        <br />
        <span className="text-ivory/50">{formatDate(date)}</span>
      </p>
    </Reveal>
  );
}

export function EventInfo() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const frameY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  const [day, month] = event.date ? event.date.split('-').reverse() : [];

  return (
    <section id="evento" ref={ref} className="bg-velvet grain overflow-hidden px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="O Evento" script="A Exposição" title="Ficha técnica" />

        <div className="mt-20 grid items-center gap-16 md:mt-28 lg:grid-cols-2 lg:gap-24">
          {/* O "quadro" */}
          <motion.div style={{ y: frameY }} className="mx-auto w-full max-w-md">
            <Reveal y={50}>
              <div className="frame-gold aspect-[3/4]">
                <div className="bg-wall flex h-full flex-col items-center justify-center text-crimson">
                  <span className="eyebrow">Save the date</span>
                  {event.date ? (
                    <div className="mt-6 text-center font-display font-light">
                      <span className="block text-8xl leading-none md:text-9xl">{day}</span>
                      <span className="mx-auto my-4 block h-px w-24 bg-crimson" />
                      <span className="block text-8xl leading-none md:text-9xl">{month}</span>
                    </div>
                  ) : (
                    <div className="mt-4 text-center">
                      <span className="block font-script text-7xl leading-tight md:text-8xl">Em breve</span>
                      <span className="mt-2 block font-display text-xl tracking-[0.3em] uppercase">2027</span>
                    </div>
                  )}
                  <span className="logo-crimson mt-10 block size-20 opacity-80" aria-hidden />
                </div>
              </div>
            </Reveal>
          </motion.div>

          {/* Etiqueta de museu */}
          <div>
            <Reveal>
              <dl className="divide-y divide-gold/25 border-y border-gold/25">
                {exhibitFacts.map((fact) => (
                  <div key={fact.label} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-5 md:grid-cols-[9rem_1fr]">
                    <dt className="eyebrow text-ivory/55">{fact.label}</dt>
                    <dd className="text-xl text-ivory md:text-2xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            {event.date && <Countdown date={event.date} />}
          </div>
        </div>
      </div>
    </section>
  );
}
