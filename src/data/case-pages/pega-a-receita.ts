import { media } from "@/lib/media";
import { site } from "@/data/site";

import type { DetailedCasePageData } from "./types";

export const pegaAReceitaCasePage = {
  slug: "pega-a-receita",
  breadcrumb: "Pega a Receita",
  title: "Facilitando a forma de encontrar receitas",
  metaTitle: "Pega a Receita | Case de site de receitas | Vulpi Studio",
  metaDescription:
    "Pega a Receita é um case de site de receitas com leitura rápida, navegação clara e uma base visual pronta para escalar categorias, coleções e receitas favoritas.",
  info: [
    { label: "Cliente", value: "Pega a Receita" },
    { label: "Ano", value: "2025" },
    { label: "Tipo", value: "Site de receitas" },
    { label: "Role", value: "UX/UI Design" },
  ],
  sections: {
    scenario: [
      "O projeto surgiu da oportunidade de repensar a experiência de uma plataforma de receitas para torná-la mais intuitiva, acessível e orientada à descoberta. Em um contexto em que plataformas desse tipo dependem de clareza, navegação fluida e engajamento recorrente, o desafio era criar uma experiência capaz de equilibrar exploração de conteúdo, usabilidade e uma jornada agradável em múltiplos dispositivos.",
    ],
    problem: [
      "O desafio estava em estruturar uma experiência que facilitasse a descoberta de receitas, reduzisse fricções durante navegação e preparo, e tornasse o produto mais envolvente para estimular recorrência de uso. Além da interface, havia a oportunidade de pensar a plataforma como uma experiência mais completa, conectando conteúdo, interação e utilidade.",
    ],
    hypothesis: [
      "A hipótese foi que uma experiência mais orientada à descoberta, com melhor hierarquia de informação, navegação simplificada e foco mobile-first, poderia tornar o uso mais intuitivo e aumentar engajamento. A proposta era combinar exploração de conteúdo e praticidade, transformando a plataforma em algo mais útil e agradável no dia a dia do usuário.",
    ],
    implementation: [
      "A solução foi construída a partir da reorganização da arquitetura da experiência, priorizando descoberta, leitura e execução das receitas. O trabalho focou em evoluir fluxos principais, melhorar escaneabilidade de conteúdo, reforçar consistência visual e criar uma experiência responsiva preparada para diferentes contextos de uso.",
    ],
    results: [
      "O projeto resultou em uma experiência pensada para maximizar descoberta, engajamento e facilidade de uso desde o lançamento do produto. A solução estabeleceu uma base escalável para a plataforma, com projeção de aumento de 38% na exploração de receitas por navegação e busca, 27% maior intenção de recorrência, além de uma experiência otimizada para mobile, principal contexto de uso do produto. Além dos indicadores de engajamento esperados, o projeto definiu uma estrutura sólida para crescimento do produto, contemplando evolução de conteúdo, retenção e futuras oportunidades de monetização.",
    ],
  },
  images: {
    hero: {
      src: media.cases.detail.pegaAReceita.hero,
      alt: "Imagem principal do case Pega a Receita.",
      width: 8000,
      height: 4496,
    },
    scenario: {
      src: media.cases.detail.pegaAReceita.scenario,
      alt: "Imagem de apoio do Pega a Receita.",
      width: 8000,
      height: 4496,
    },
    pairOne: [
      {
        src: media.cases.detail.pegaAReceita.pairOneLeft,
        alt: "Imagem complementar um da seção de imagens do Pega a Receita.",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.pegaAReceita.pairOneRight,
        alt: "Imagem complementar dois da seção de imagens do Pega a Receita.",
        width: 3952,
        height: 3952,
      },
    ],
    pairTwo: [
      {
        src: media.cases.detail.pegaAReceita.pairTwoLeft,
        alt: "Imagem final um da galeria do Pega a Receita.",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.pegaAReceita.pairTwoRight,
        alt: "Imagem final dois da galeria do Pega a Receita.",
        width: 3952,
        height: 3952,
      },
    ],
    implementation: {
      src: media.cases.detail.pegaAReceita.implementation,
      alt: "Imagem grande da implementação da solução do Pega a Receita.",
      width: 8000,
      height: 4496,
    },
    results: {
      src: media.cases.detail.pegaAReceita.results,
      alt: "Imagem grande da seção de resultados do Pega a Receita.",
      width: 8000,
      height: 4496,
    },
  },
  cta: {
    label: "Quer desenvolver um projeto?",
    email: site.contactEmail,
  },
  footer: {
    email: site.contactEmail,
    address: "Office anywhere.",
    social: [
      { label: "X", href: "https://x.com/vulpistudio" },
      { label: "Instagram", href: "https://www.instagram.com/vulpistudio/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/vulpi-studio-design",
      },
    ],
  },
} satisfies DetailedCasePageData;
