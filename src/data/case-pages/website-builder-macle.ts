import { media } from "@/lib/media";
import { site } from "@/data/site";

import type { DetailedCasePageData } from "./types";

export const websiteBuilderMacleCasePage = {
  slug: "website-builder-macle",
  breadcrumb: "Macle websitebuilder",
  title: "Simplificando a criação de sites",
  metaTitle: "Macle websitebuilder | Simplificando a criação de sites | Vulpi Studio",
  metaDescription:
    "Macle websitebuilder é um case de construtor de sites com foco em montar páginas com rapidez, clareza visual e uma base modular pronta para escalar.",
  problemLabel: "Qual era o meu desafio",
  info: [
    { label: "Cliente", value: "Macle Sistemas" },
    { label: "Ano", value: "2024" },
    { label: "Tipo", value: "Construtor de sites" },
    { label: "Role", value: "UX/UI Design" },
  ],
  sections: {
    scenario: [
      "A Macle possuía um ERP voltado para gestão empresarial e, dentro do ecossistema da plataforma, oferecia um construtor de sites como funcionalidade exclusiva para assinantes. A proposta da ferramenta era permitir que clientes criassem e gerenciassem seus próprios sites de forma simples, integrando presença digital e operação em um único ambiente. Mais do que um recurso complementar, o builder funcionava como parte da estratégia de valor do produto.",
    ],
    problem: [
      "Nosso objetivo era o de evoluir a usabilidade da ferramenta para tornar a criação de sites mais intuitiva, eficiente e menos dependente de esforço operacional do usuário. A oportunidade não estava apenas em simplificar fluxos e reduzir fricções, mas em transformar o construtor em uma solução robusta, capaz de apoiar melhor os nossos clientes.",
      "Para isso, o desafio envolvia equilibrar simplicidade e capacidade, tornando a experiência mais acessível para usuários com diferentes níveis de familiaridade técnica, sem comprometer a flexibilidade da ferramenta.",
    ],
    hypothesis: [
      "Partindo dos principais pontos de fricção identificados na jornada, a hipótese foi que uma experiência mais intuitiva, com fluxos simplificados e maior clareza nas interações, poderia reduzir a complexidade de uso do construtor e ampliar o valor percebido da ferramenta dentro do ERP.",
      "A proposta era tratar o construtor não apenas como um recurso complementar, mas como uma experiência mais estratégica, capaz de aumentar autonomia dos usuários.",
    ],
    implementation: [
      "A implementação focou em evoluir os pontos mais críticos da jornada de criação, priorizando melhorias com maior impacto para usabilidade e adoção. A solução foi construída de forma progressiva, equilibrando necessidades do usuário, viabilidade técnica e objetivos do produto.",
      "Esse processo envolveu reestruturar fluxos, refinar padrões de interação e construir uma experiência mais consistente, buscando transformar o builder em uma ferramenta mais acessível, robusta e preparada para evolução.",
    ],
    results: [
      "O redesign gerou impactos mensuráveis na experiência e na adoção da ferramenta, contribuindo para uma redução de 32% nos chamados ao suporte técnico relacionados ao builder e um aumento de 41% no número de sites publicados na plataforma. Além disso, a evolução da experiência ajudou a tornar a jornada mais eficiente, com ganhos em autonomia dos usuários e maior uso do recurso.",
    ],
  },
  images: {
    hero: {
      src: media.cases.detail.websiteBuilderMacle.hero,
      alt: "Imagem de apoio do Macle websitebuilder.",
      width: 8000,
      height: 4496,
    },
    scenario: {
      src: media.cases.detail.websiteBuilderMacle.scenario,
      alt: "Imagem principal da seção de imagens do Macle websitebuilder.",
      width: 8000,
      height: 4496,
    },
    pairOne: [
      {
        src: media.cases.detail.websiteBuilderMacle.pairOneLeft,
        alt: "Imagem complementar um da seção de imagens do Macle websitebuilder.",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.websiteBuilderMacle.pairOneRight,
        alt: "Imagem complementar dois da seção de imagens do Macle websitebuilder.",
        width: 3952,
        height: 3952,
      },
    ],
    pairTwo: [
      {
        src: media.cases.detail.websiteBuilderMacle.pairTwoLeft,
        alt: "Imagem final um da galeria do Macle websitebuilder.",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.websiteBuilderMacle.pairTwoRight,
        alt: "Imagem final dois da galeria do Macle websitebuilder.",
        width: 3952,
        height: 3952,
      },
    ],
    implementation: {
      src: media.cases.detail.websiteBuilderMacle.implementation,
      alt: "Imagem grande da implementação da solução do Macle websitebuilder.",
      width: 8000,
      height: 4496,
    },
    results: {
      src: media.cases.detail.websiteBuilderMacle.results,
      alt: "Imagem grande da seção de resultados do Macle websitebuilder.",
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
