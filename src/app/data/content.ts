/*
 * Todo o conteúdo do site fica aqui.
 * Para atualizar informações, edite só este arquivo — os componentes se ajustam sozinhos.
 */

import post01 from '../../assets/posts/01.webp';
import post02 from '../../assets/posts/02.webp';
import post03 from '../../assets/posts/03.webp';
import post04 from '../../assets/posts/04.webp';
import post05 from '../../assets/posts/05.webp';
import post06 from '../../assets/posts/06.webp';
import post07 from '../../assets/posts/07.webp';
import post08 from '../../assets/posts/08.webp';
import { formatDate } from '../lib/dates';

export const site = {
  title: 'Mauá 2027',
  subtitle: 'The Exhibition',
  institution: 'Instituto Mauá de Tecnologia',
  instagram: 'https://www.instagram.com/mauac27?stkn=Njg5bmU2dTNiZzR2',
  contactEmail: '', // TODO: e-mail da comissão (deixe vazio para esconder)
};

/*
 * Lançamento oficial: abertura das vendas.
 * A contagem regressiva no topo do site usa esta data/hora (horário de Brasília)
 * e some sozinha quando ela passa.
 */
export const launch = {
  date: '2026-10-18T18:00:00-03:00',
  label: 'Lançamento oficial',
  note: 'Abertura das vendas · 18.10 às 18h',
};

// Mude para `true` quando o mapa das mesas puder aparecer (seção e link no menu)
export const showVenueMap = false;

export const navLinks = [
  { id: 'sobre', label: 'A Comissão' },
  { id: 'evento', label: 'O Evento' },
  { id: 'planta', label: 'Mapa' },
  { id: 'acervo', label: 'Acervo' },
  { id: 'membros', label: 'Membros' },
  { id: 'faq', label: 'Dúvidas' },
].filter((link) => showVenueMap || link.id !== 'planta');

export const manifesto = {
  statement:
    'Cada formando é uma obra. Anos de esboços, rascunhos e tentativas que, finalmente, ganham moldura. A formatura Mauá 2027 é a nossa exposição.',
  body: [
    'Somos a comissão de formatura da turma de 2027 do Instituto Mauá de Tecnologia: um grupo de alunos de diferentes cursos que se juntou para transformar o fim dessa jornada em uma noite à altura dela.',
    'Nosso tema é a galeria de arte: elegância, curadoria e cuidado em cada detalhe. Aqui você encontra tudo o que precisa saber, em um só lugar.',
  ],
};

/*
 * Data do baile no formato 'AAAA-MM-DD' (ex.: '2027-12-11').
 * Enquanto for `null`, o site mostra "A definir" e não exibe contagem regressiva.
 * Quando preencher, aparecem sozinhos a data e o "Faltam X dias para o baile".
 */
export const event = {
  name: 'Mauá 2027: The Exhibition',
  date: null as string | null,
  dateLabel: 'A definir',
  venue: 'A definir',
  address: 'O endereço será divulgado em breve',
  mapsUrl: '', // link do Google Maps quando o local for confirmado
  dressCode: 'Traje de gala',
  company: 'Empresa parceira', // TODO: nome da empresa de formatura
};

export const exhibitFacts = [
  { label: 'Obra', value: event.name },
  { label: 'Data', value: event.date ? formatDate(event.date) : event.dateLabel },
  { label: 'Local', value: event.venue },
  { label: 'Traje', value: event.dressCode },
  { label: 'Acervo', value: 'Turma de 2027 · Instituto Mauá de Tecnologia' },
];

/*
 * Mapa das mesas: importe a imagem e coloque aqui, ex.:
 *   import planta from '../../assets/planta-mesas.webp';
 *   export const tableMap = { image: planta, ... }
 */
export const tableMap = {
  image: null as string | null,
  caption: 'Planta do salão com a distribuição das mesas',
};

// `date` é opcional (ex.: '15.10.2026'); sem data, a placa mostra só o ornamento
export type Post = { src: string; title: string; caption: string; date?: string };

// Do post mais recente para o mais antigo: o primeiro da lista é o primeiro que aparece no site
export const posts: Post[] = [
  { src: post08, title: 'Sorteio das 27 Horas', caption: 'Para quem aderir nas primeiras 27 horas' },
  { src: post07, title: 'Kit dos Aderidos', caption: 'Brindes dos primeiros aderidos!' },
  { src: post06, title: '1º Lote', caption: 'Valor da adesão' },
  { src: post05, title: 'Pré-cadastro Aberto', caption: 'Passo a passo' },
  { src: post04, title: 'Forms Social', caption: 'Nosso Forms social' },
  { src: post03, title: 'Save the Date', caption: 'Lançamento na Mauá', date: '15.10.2026' },
  { src: post02, title: 'O Brasão', caption: 'A identidade da Mauá 27' },
  { src: post01, title: 'Agência Escolhida', caption: 'Mauá C27 + Kaz' },
];

/*
 * Membros da comissão (aparecem na ordem desta lista).
 *
 * Fotos: coloque os arquivos em src/assets/membros/ com o nome indicado em `photo`
 * (ex.: 01.jpg, 02.png, 03.webp — qualquer uma dessas extensões funciona).
 * Enquanto a foto não existir, aparecem as iniciais do nome.
 */
export type Member = { photo: string; name: string; role: string };

export const members: Member[] = [
  { photo: '01', name: 'Laura Haenel', role: 'Diretora de Eventos' }, //ok
  { photo: '02', name: 'Sofia Aranda', role: 'Diretora Comunica' },//ok
  { photo: '03', name: 'Felipe Vidal', role: 'Diretor Financeiro' },//ok
  { photo: '04', name: 'Maria Vitória Jatobá', role: 'Presidente' },//ok
  { photo: '05', name: 'Isabella Signorini', role: 'Eventos' }, //ok
  { photo: '06', name: 'Murillo Cunha', role: 'Eventos' }, //ok
  { photo: '07', name: 'Geraldo', role: 'Diretor Financeiro' }, 
  { photo: '08', name: 'João Pedro Marques', role: 'Vice-Presidente' }, //ok
  { photo: '09', name: 'Murilo Kaspar', role: 'Eventos' }, //ok
  { photo: '10', name: 'Victoria Ramos', role: 'Comunica' }, 
  { photo: '11', name: 'Enzo Sampaio', role: 'Financeiro' }, //ok
  { photo: '12', name: 'Joaquim Anderlini', role: 'Financeiro' }, //ok
  { photo: '13', name: 'Ana Luiza Perez', role: 'Diretora Comunica' }, //ok
  { photo: '14', name: 'Pietra Izabel', role: 'Vice-Presidente Criativo' },
  { photo: '15', name: 'Aline Arakaki', role: 'RH' },//ok
  { photo: '16', name: 'Giovanna Pocetti', role: 'eventos' }, //ok
  { photo: '17', name: 'Amanda Andrade', role: 'Eventos' },
  { photo: '18', name: 'Laura DAmaro', role: 'Diretora do RH' }, //ok
  { photo: '19', name: 'Thales Nascimento', role: 'RH' },//ok
  { photo: '20', name: 'Bruno Sabadin', role: 'Eventos' },//ok
  { photo: '21', name: 'Júlia Valente', role: 'Comunica' },//ok

];

export const faqs = [
  {
    question: 'Quando será a formatura?',
    answer:
      'A data ainda está sendo confirmada com a empresa parceira. Assim que for definida, ela aparece aqui e nos canais oficiais da comissão.',
  },
  {
    question: 'Como faço minha adesão?',
    answer:
      'O primeiro passo é o pré-cadastro. Depois dele, você recebe as instruções de contrato e pagamento diretamente da comissão e da empresa parceira.',
  },
  {
    question: 'O que é o 1º lote e até quando vale?',
    answer:
      'Os valores são divididos em lotes: quanto antes a adesão, melhor o preço. As condições do lote vigente são divulgadas no Instagram oficial.',
  },
  {
    question: 'Quem aderir primeiro ganha algo?',
    answer:
      'Sim! Os primeiros aderidos recebem um kit exclusivo da Mauá 2027. Fique de olho nos comunicados para saber como retirar o seu.',
  },
  {
    question: 'Posso levar convidados?',
    answer:
      'Sim. A quantidade de convites incluídos e o valor de convites extras dependem do pacote escolhido na adesão.',
  },
  {
    question: 'Qual é o traje?',
    answer:
      'Traje de gala. O tema é galeria de arte, então elegância é a palavra: capriche como se você fosse a obra principal da exposição.',
  },
  {
    question: 'Como vai funcionar o mapa das mesas?',
    answer:
      'Quando o salão for definido, publicaremos aqui a planta com a distribuição das mesas, para que cada formando saiba onde a família vai ficar.',
  },
  {
    question: 'Como falo com a comissão?',
    answer:
      'Pelo Instagram oficial ou falando diretamente com qualquer membro da comissão: os nomes estão na seção de membros aqui no site.',
  },
];
