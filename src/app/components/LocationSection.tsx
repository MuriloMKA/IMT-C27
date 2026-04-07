import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export function LocationSection() {
  // Coordenadas do Instituto Mauá de Tecnologia em São Caetano do Sul
  const location = {
    name: 'Local a ser definido',
    address: 'Aguardando confirmação',
    city: 'São Paulo, SP',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Instituto+Mauá+de+Tecnologia'
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <MapPin className="w-12 h-12 mx-auto mb-4 text-neutral-800" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-5xl mb-4">Localização</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Informações sobre o local da cerimônia serão divulgadas em breve
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-4">Endereço</h3>
                <div className="space-y-3 text-neutral-700">
                  <p className="text-lg">{location.name}</p>
                  <p>{location.address}</p>
                  <p>{location.city}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-4 rounded-sm transition-all duration-300 hover:shadow-lg"
                >
                  <Navigation className="w-5 h-5" />
                  <span>Ver no Google Maps</span>
                </a>
                <p className="text-sm text-neutral-500 mt-4 text-center">
                  Clique para abrir as direções no Google Maps
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-sm">
            <p className="text-sm text-amber-900 text-center">
              <strong>Atenção:</strong> O local definitivo da cerimônia será divulgado pela comissão de formatura. 
              Fique atento aos canais oficiais de comunicação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
