import { motion } from 'motion/react';
import { Calendar, MapPin, Palette, Users } from 'lucide-react';

const infoItems = [
  {
    icon: Calendar,
    title: 'Data',
    description: 'A ser definida',
    detail: 'Aguarde divulgação oficial'
  },
  {
    icon: Palette,
    title: 'Tema',
    description: 'Grandes Obras de Arte',
    detail: 'Uma celebração inspirada nas maiores criações da humanidade'
  },
  {
    icon: Users,
    title: 'Dress Code',
    description: 'Traje Formal',
    detail: 'Traje de gala para uma noite memorável'
  },
  {
    icon: MapPin,
    title: 'Local',
    description: 'Em breve',
    detail: 'O local será divulgado em breve'
  }
];

export function InfoSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Uma Noite Inesquecível</h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            A formatura de 2027 do Instituto Mauá de Tecnologia será uma celebração única, 
            inspirada nas maiores obras de arte da história. Prepare-se para uma experiência memorável.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-sm border border-neutral-200 hover:border-neutral-400 transition-all duration-300 hover:shadow-lg"
            >
              <item.icon className="w-10 h-10 mb-4 text-neutral-800" strokeWidth={1.5} />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-neutral-900 mb-2">{item.description}</p>
              <p className="text-sm text-neutral-500">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
