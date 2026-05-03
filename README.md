# Renan F. Vedova - Portfolio

Portfolio em Next.js com foco em cases, conteudo editorial e uma home mais visual.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4

## Scripts

- `pnpm dev` - sobe o ambiente de desenvolvimento
- `pnpm build` - gera a build de producao
- `pnpm start` - executa a build gerada
- `pnpm lint` - roda o ESLint

## Estrutura

- `src/app` - rotas, layouts e paginas
- `src/components` - blocos de UI reutilizaveis
- `src/components/case-pages` - renderer e paginas detalhadas dos cases
- `src/data` - conteudo, metadados e catalogo de imagens
- `src/hooks` - hooks compartilhados
- `src/lib` - utilitarios de baixo nivel
- `public/assets` - imagens, logos e arquivos estaticos

## Conteudo

- `src/data/site.ts` concentra dados globais do site
- `src/data/cases.ts` controla a ordem e os cards da home/arquivo
- `src/data/case-pages/*` guarda o conteudo dos cases detalhados
- `src/lib/media.ts` centraliza os caminhos dos assets
- `src/lib/site-path.ts` resolve paths publicos para GitHub Pages

## GitHub Pages

O projeto esta preparado para exportacao estatica no GitHub Pages.

- `next.config.ts` usa `output: "export"`, `trailingSlash: true` e `images.unoptimized: true`
- `public/.nojekyll` garante que o `_next` seja servido corretamente
- `.github/workflows/deploy.yml` faz build e publica o `out`
- No repositório, ative GitHub Pages e selecione `GitHub Actions` como source

Para um project site como `username.github.io/repo-name`, configure:

```bash
NEXT_PUBLIC_BASE_PATH=/repo-name
NEXT_PUBLIC_SITE_ORIGIN=https://username.github.io
```

Para um user site como `username.github.io`, deixe `NEXT_PUBLIC_BASE_PATH` vazio.
Se usar dominio proprio, ajuste `NEXT_PUBLIC_SITE_ORIGIN` para o dominio final.

## Validacao

Depois de alterar conteudo ou layout, rode:

```bash
pnpm lint
pnpm build
```

Se quiser testar a versao de producao localmente:

```bash
pnpm build
pnpm start
```
