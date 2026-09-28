import { Instagram, Mail } from 'lucide-react';
import { site } from '../data/content';
import { Reveal } from './brand/Reveal';

export function Footer() {
  return (
    <footer className="grain relative isolate bg-wine-deep px-6 pt-24 pb-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <Reveal>
          <span className="logo-gold mx-auto block size-28 md:size-32" role="img" aria-label="Logo Mauá 2027" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-script text-5xl text-ivory md:text-6xl">Obrigado pela visita</p>
          <p className="eyebrow mt-3 text-ivory/60">
            {site.title} · {site.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex gap-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da comissão"
            className="flex size-12 items-center justify-center rounded-full border border-gold/50 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-wine"
          >
            <Instagram className="size-5" strokeWidth={1.5} />
          </a>
          {site.contactEmail && (
            <a
              href={`mailto:${site.contactEmail}`}
              aria-label="E-mail da comissão"
              className="flex size-12 items-center justify-center rounded-full border border-gold/50 text-ivory transition-colors duration-500 hover:bg-ivory hover:text-wine"
            >
              <Mail className="size-5" strokeWidth={1.5} />
            </a>
          )}
        </Reveal>

        <div className="mt-20 flex w-full flex-col items-center justify-between gap-3 border-t border-gold/20 pt-8 text-sm text-ivory/45 md:flex-row">
          <span>Comissão de Formatura · Turma 2027</span>
          <span>{site.institution}</span>
        </div>
      </div>
    </footer>
  );
}
