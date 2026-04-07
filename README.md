# Formatura Maua 2027

Landing page da formatura com tema Grandes Obras de Arte

## Objetivo

Este projeto apresenta as principais informacoes da formatura:

- Hero com carrossel de imagens
- Secao de informacoes gerais
- Secao de localizacao
- FAQ interativo
- Rodape institucional

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- React Slick (carrossel)
- Lucide React (icones)
- Motion
- Componentes utilitarios baseados em Radix UI

## Como rodar localmente

1. Instale as dependencias:

npm install

2. Inicie o servidor de desenvolvimento:

npm run dev

3. Abra no navegador:

http://localhost:5173

## Scripts disponiveis

- Desenvolvimento: npm run dev
- Build de producao: npm run build

## Estrutura principal

- Aplicacao principal: [src/app/App.tsx](src/app/App.tsx)
- Entrada da aplicacao: [src/main.tsx](src/main.tsx)
- Componente Hero: [src/app/components/HeroCarousel.tsx](src/app/components/HeroCarousel.tsx)
- Estilos globais: [src/styles/index.css](src/styles/index.css)
- Tema e variaveis: [src/styles/theme.css](src/styles/theme.css)
- Configuracao do Vite: [vite.config.ts](vite.config.ts)

## Observacoes

- O projeto usa Tailwind v4 com plugin no Vite para processar corretamente as classes utilitarias.
- As tipagens de React, ReactDOM, Node e React Slick estao configuradas para evitar erros de TypeScript no editor.

## Build e deploy

Para gerar os arquivos de producao:

npm run build

Os arquivos finais serao gerados na pasta dist.

## Autor

Murilo Kaspar de Andrade
