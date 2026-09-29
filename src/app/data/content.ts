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
import { formatDate } from '../lib/dates';

export const site = {
  title: 'Mauá 2027',
  subtitle: 'The Exhibition',
  institution: 'Instituto Mauá de Tecnologia',
  instagram: 'https://www.instagram.com/mauac27?stkn=Njg5bmU2dTNiZzR2',
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

export const posts: Post[] = [
  { src: saveTheDate, title: 'Save the Date', caption: 'Lançamento na Mauá', date: '15.10.2026' },
  { src: falta1Dia, title: 'Falta 1 Dia', caption: 'Contagem regressiva' },
  { src: eHoje, title: 'É Hoje', caption: 'Lançamento', date: '15.10.2026' },
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
  { photo: '01', name: 'Laura Haenel', role: 'Diretora de Eventos' }, //ok
  { photo: '02', name: 'Sofia Aranda', role: 'Diretora Comunica' },
  { photo: '03', name: 'Felipe Vidal', role: 'Diretor Financeiro' },
  { photo: '04', name: 'Maria Vitória Jatobá', role: 'Presidente' },
  { photo: '05', name: 'Isabella Signorini', role: 'Eventos' },
  { photo: '06', name: 'Murillo Cunha', role: 'Eventos' },
  { photo: '07', name: 'Geraldo', role: 'Diretor Financeiro' },
  { photo: '08', name: 'João Pedro Marques', role: 'Vice-Presidente' }, //ok
  { photo: '09', name: 'Murilo Kaspar', role: 'Eventos' }, //ok
  { photo: '10', name: 'Victoria Ramos', role: 'Comunica' },
  { photo: '11', name: 'Enzo Sampaio', role: 'Financeiro' },
  { photo: '12', name: 'Joaquim Anderlini', role: 'Financeiro' },
  { photo: '13', name: 'Ana Luiza Perez', role: 'Diretora Comunica' },
  { photo: '14', name: 'Pietra Izabel', role: 'Vice-Presidente Criativo' },
  { photo: '15', name: 'Aline Arakaki', role: 'RH' },
  { photo: '16', name: 'Giovanna Pocetti', role: 'eventos' },
  { photo: '17', name: 'Amanda Andrade', role: 'Eventos' },
  { photo: '18', name: 'Laura DAmaro', role: 'Diretora do RH' },
  { photo: '19', name: 'Thales Nascimento', role: 'RH' },
  { photo: '20', name: 'Bruno Sabadin', role: 'Eventos' },
  { photo: '21', name: 'Júlia Valente', role: 'Comunica' },

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
