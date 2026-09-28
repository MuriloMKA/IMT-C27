/*
 * Todo o conteúdo do site fica aqui.
 * Para atualizar informações, edite só este arquivo — os componentes se ajustam sozinhos.
 */

import saveTheDate from '../../assets/posts/save-the-date.webp';
import falta1Dia from '../../assets/posts/falta-1-dia.webp';
import eHoje from '../../assets/posts/e-hoje.webp';
import playNoConceito from '../../assets/posts/play-no-conceito.webp';
import conhecaComissao from '../../assets/posts/conheca-a-comissao.webp';
import preCadastro from '../../assets/posts/pre-cadastro.webp';
import sorteio from '../../assets/posts/sorteio.webp';
import valor1Lote from '../../assets/posts/valor-1-lote.webp';
import kitAderidos from '../../assets/posts/kit-aderidos.webp';
import formsSocial from '../../assets/posts/forms-social.webp';

export const site = {
  title: 'Mauá 2027',
  subtitle: 'The Exhibition',
  institution: 'Instituto Mauá de Tecnologia',
  instagram: 'https://www.instagram.com/', // TODO: @ oficial da comissão
  contactEmail: '', // TODO: e-mail da comissão (deixe vazio para esconder)
};

export const navLinks = [
  { id: 'sobre', label: 'A Comissão' },
  { id: 'evento', label: 'O Evento' },
  { id: 'planta', label: 'Mapa' },
  { id: 'acervo', label: 'Acervo' },
  { id: 'membros', label: 'Membros' },
  { id: 'faq', label: 'Dúvidas' },
];

export const manifesto = {
  statement:
    'Cada formando é uma obra. Anos de esboços, rascunhos e tentativas que, finalmente, ganham moldura. A formatura Mauá 2027 é a nossa exposição.',
  body: [
    'Somos a comissão de formatura da turma de 2027 do Instituto Mauá de Tecnologia: um grupo de alunos de diferentes cursos que se juntou para transformar o fim dessa jornada em uma noite à altura dela.',
    'Nosso tema é a galeria de arte: elegância, curadoria e cuidado em cada detalhe. Aqui você encontra tudo o que precisa saber, em um só lugar.',
  ],
};

/*
 * Data em formato ISO (AAAA-MM-DD). Deixe `null` enquanto não houver data confirmada.
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

/* Próximo marco com contagem regressiva (some sozinho depois que a data passa) */
export const nextMilestone = {
  label: 'Lançamento na Mauá',
  date: '2026-10-15',
};

export const exhibitFacts = [
  { label: 'Obra', value: event.name },
  { label: 'Data', value: event.dateLabel },
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

export type Post = { src: string; title: string; caption: string };

export const posts: Post[] = [
  { src: saveTheDate, title: 'Save the Date', caption: 'Lançamento na Mauá' },
  { src: falta1Dia, title: 'Falta 1 Dia', caption: 'Contagem regressiva' },
  { src: eHoje, title: 'É Hoje', caption: 'Lançamento' },
  { src: playNoConceito, title: 'Play no Conceito', caption: 'Mauá 2027: The Exhibition' },
  { src: conhecaComissao, title: 'Conheça a Comissão', caption: 'Comissão Mauá 27' },
  { src: preCadastro, title: 'Pré-cadastro Aberto', caption: 'Passo a passo' },
  { src: sorteio, title: 'Sorteio', caption: 'Pré-cadastro' },
  { src: valor1Lote, title: 'Valor', caption: '1º Lote' },
  { src: kitAderidos, title: 'Kit 1ºs Aderidos', caption: 'Brindes' },
  { src: formsSocial, title: 'Forms Social', caption: 'Comissão Mauá 27' },
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
  { photo: '01', name: 'Laura Haenel', role: 'Diretora de eventos' },
  { photo: '02', name: 'Sofia Aranda', role: 'Função' },
  { photo: '03', name: 'Felipe Vidal', role: 'Função' },
  { photo: '04', name: '⁠Maria Vitória Martins', role: 'Presidente' },
  { photo: '05', name: '⁠Isabella Kuntz', role: 'Função' },
  { photo: '06', name: 'Murillo Cunha', role: 'Função' },
  { photo: '07', name: 'Enzo Pistori', role: 'Função' },
  { photo: '08', name: 'João Pedro Marques', role: 'Vice-presidente' },
  { photo: '09', name: 'Murilo Kaspar', role: 'Eventos' },
  { photo: '10', name: 'Victoria Oliveira', role: 'Função' },
  { photo: '11', name: 'Enzo Sampaio', role: 'Função' },
  { photo: '12', name: 'Joaquim Westmann', role: 'Função' },
  { photo: '13', name: '⁠Ana Luiza Perez', role: 'Função' },
  { photo: '14', name: 'Pietra Izabel', role: 'Função' },
  { photo: '15', name: 'Aline Miyuki', role: 'Função' },
  { photo: '16', name: 'Giovanna Pocetti', role: 'Função' },
  { photo: '17', name: 'Amanda C', role: 'Função' },
  { photo: '18', name: 'Laura Amaro', role: 'Função' },
  { photo: '19', name: 'Thales', role: 'Função' },
  { photo: '20', name: 'Bruno Sabadin', role: 'Função' },
  { photo: '21', name: 'Nome Sobrenome', role: 'Função' },
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
