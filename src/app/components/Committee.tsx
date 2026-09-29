import { members, type Member } from '../data/content';
import { Reveal } from './brand/Reveal';
import { SectionHeading } from './brand/SectionHeading';

// Todas as fotos de src/assets/membros, indexadas pelo nome do arquivo sem extensão ("01", "02"...)
const photoFiles = import.meta.glob<string>('../../assets/membros/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
});
const photos = Object.fromEntries(
  Object.entries(photoFiles).map(([path, url]) => [path.split('/').pop()!.replace(/\.[^.]+$/, ''), url]),
);

function initials(name: string) {
  // remove caracteres invisíveis que vêm junto ao copiar do WhatsApp
  const parts = name.replace(/[\u200B-\u200F\u2060\uFEFF]/g, '').trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

function Portrait({ member }: { member: Member }) {
  const photo = photos[member.photo];

  return (
    <figure className="group">
      <div className="frame-gold rounded-t-full p-1.5 transition-transform duration-700 ease-[var(--ease-gallery)] group-hover:-translate-y-1.5 md:p-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
          {photo ? (
            <img
              src={photo}
              alt={member.name}
              loading="lazy"
              className="h-full w-full object-cover object-[center_25%] sepia-[0.3] transition-[filter,transform] duration-1000 ease-[var(--ease-gallery)] group-hover:scale-105 group-hover:sepia-0"
            />
          ) : (
            <div className="bg-velvet grain flex h-full w-full items-center justify-center">
              <span className="gold-text font-script text-5xl">{initials(member.name)}</span>
            </div>
          )}
        </div>
      </div>
      <figcaption className="mt-4 text-center text-crimson">
        <span className="block font-display text-lg leading-tight md:text-xl">{member.name}</span>
        <span className="eyebrow mt-1.5 block text-[0.62rem] text-crimson/70">{member.role}</span>
      </figcaption>
    </figure>
  );
}

export function Committee() {
  return (
    <section id="membros" className="bg-wall grain px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Os curadores" script="Conheça" title="A Comissão" tone="light" />

        {/* flex-wrap centralizado: a última linha fica no meio, seja qual for o número de membros */}
        <ul className="mt-16 flex flex-wrap justify-center gap-x-5 gap-y-12 md:mt-24 lg:gap-x-6 lg:gap-y-14">
          {members.map((member, i) => (
            <Reveal
              as="li"
              key={`${member.photo}-${i}`}
              delay={(i % 7) * 0.05}
              className="w-[calc((100%-1.25rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-9rem)/7)]"
            >
              <Portrait member={member} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
