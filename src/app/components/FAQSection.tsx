import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Quando será a formatura?',
    answer: 'A data exata ainda será confirmada pela comissão de formatura. Assim que tivermos a data definida, todos os formandos serão notificados através dos canais oficiais.'
  },
  {
    question: 'Qual é o dress code?',
    answer: 'O dress code é traje formal de gala. Homens devem usar smoking ou terno escuro, e mulheres podem optar por vestidos longos de gala. O tema "Grandes Obras de Arte" permite que você se inspire em elementos artísticos no seu visual.'
  },
  {
    question: 'Onde será realizada a cerimônia?',
    answer: 'O local ainda está sendo definido pela comissão. Estamos buscando um espaço que reflita a elegância e sofisticação do tema "Grandes Obras de Arte". O endereço será divulgado em breve.'
  },
  {
    question: 'Posso levar acompanhantes?',
    answer: 'Sim! Informações sobre a quantidade de convites e valores para acompanhantes serão divulgadas em breve pela comissão de formatura.'
  },
  {
    question: 'Como funciona o tema "Grandes Obras de Arte"?',
    answer: 'O tema celebra as maiores criações artísticas da humanidade. A decoração, ambientação e toda experiência da noite serão inspiradas em obras-primas que marcaram a história da arte, criando uma atmosfera sofisticada e memorável.'
  },
  {
    question: 'Como posso entrar em contato com a comissão?',
    answer: 'A comissão de formatura está disponível através dos canais oficiais do Instituto Mauá. Em breve divulgaremos os contatos diretos para dúvidas e informações.'
  },
  {
    question: 'Haverá estacionamento no local?',
    answer: 'As informações sobre estacionamento e facilidades do local serão divulgadas assim que o endereço da cerimônia for confirmado.'
  },
  {
    question: 'Qual o valor e forma de pagamento?',
    answer: 'Os valores e opções de pagamento serão divulgados em breve pela comissão de formatura. Aguarde comunicados oficiais.'
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between text-left hover:bg-neutral-50 transition-colors duration-200 px-4 md:px-6"
      >
        <span className="text-lg pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 mt-1 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 px-4 md:px-6 text-neutral-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-neutral-600">
            Tire suas dúvidas sobre a formatura
          </p>
        </motion.div>

        <div className="bg-white rounded-sm border border-neutral-200 overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-neutral-600">
            Ainda tem dúvidas? Entre em contato com a comissão de formatura.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
