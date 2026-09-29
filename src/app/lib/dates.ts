// Datas no formato ISO (AAAA-MM-DD), interpretadas no fuso de quem está vendo o site

function parse(isoDate: string) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function daysUntil(isoDate: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((parse(isoDate).getTime() - today.getTime()) / 86_400_000);
}

export function formatDate(isoDate: string) {
  return parse(isoDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}
