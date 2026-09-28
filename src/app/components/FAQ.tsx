import { AnimatePresence, motion } from 'motion/react';
import { useId, useState } from 'react';
import { faqs, site } from '../data/content';
import { easeGallery, Reveal } from './brand/Reveal';
import { SectionHeading } from './brand/SectionHeading';

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-gold/25">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-baseline gap-5 py-7 text-left md:gap-8"
      >
        <span className="w-8 shrink-0 font-display text-base tracking-[0.2em] text-gold">{String(index + 1).padStart(2, '0')}</span>
        <span className="flex-1 font-display text-2xl leading-snug font-light text-ivory transition-colors duration-300 group-hover:text-white md:text-3xl">
          {question}
        </span>
        <span className="relative mt-3 size-4 shrink-0 self-start" aria-hidden>
          <span className="absolute top-1/2 left-0 h-px w-full bg-ivory" />
          <motion.span
            className="absolute top-1/2 left-0 h-px w-full bg-ivory"
            animate={{ rotate: open ? 0 : 90 }}
            transition={{ duration: 0.5, ease: easeGallery }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: easeGallery }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-8 pl-13 text-xl leading-relaxed text-ivory/75 md:pl-16">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-velvet grain px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Perguntas frequentes" script="Dúvidas" title="da exposição" />

        <Reveal className="mt-16 border-t border-gold/25 md:mt-24">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </Reveal>

        <Reveal className="mt-14 text-center">
          <p className="text-xl text-ivory/70">Ainda ficou com alguma dúvida?</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow mt-6 inline-flex items-center gap-3 border border-gold/60 px-7 py-4 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-wine"
          >
            Fale com a comissão
          </a>
        </Reveal>
      </div>
    </section>
  );
}
