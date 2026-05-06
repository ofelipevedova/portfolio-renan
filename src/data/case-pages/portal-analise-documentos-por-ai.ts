import { media } from "@/lib/media";
import { site } from "@/data/site";

import type { DetailedCasePageData } from "./types";

export const portalAnaliseDocumentosCasePage = {
  slug: "portal-analise-de-documentos-por-ai",
  breadcrumb: "Portal de análise de documentos por AI",
  title: "Portal de análise de documentos de renda com AI",
  metaTitle:
    "Portal de análise de documentos por AI | Portal de análise de documentos de renda com AI | Vulpi Studio",
  metaDescription:
    "Portal de análise de documentos por AI é um case de backoffice de crédito com IA para triagem, revisão humana e redução de SLA na leitura de documentos de renda.",
  problemLabel: "Qual era o meu desafio",
  info: [
    { label: "Cliente", value: "Banrisul" },
    { label: "Serviço", value: "UX/UI, Research, Produto" },
    { label: "Período", value: "Agosto - Outubro" },
    { label: "Ano", value: "2024" },
  ],
  resultsHighlights: [
    { value: "73%", label: "menos tempo de SLA" },
    { value: "87%", label: "menos custo por análise" },
    { value: "6 -> 2", label: "analistas no processo" },
  ],
  sections: {
    scenario: [
      "Em 2024, liderei o design de uma ferramenta de backoffice de crédito. O objetivo era integrar inteligência artificial ao processo de verificação manual realizado por analistas de crédito, uma tarefa sensível e de alta responsabilidade.",
      "A meta era reduzir o custo e o tempo de análise sem perder o cuidado exigido nesse tipo de operação.",
    ],
    problem: [
      "O cliente utilizava uma empresa parceira para fazer a análise de documentos de renda enviados no fluxo do empréstimo consignado. Esse processo dependia de muitas etapas manuais e acumulava atraso.",
      "O custo e o SLA eram altos, a demanda era grande e ainda havia retrabalho quando a análise vinha incorreta.",
    ],
    hypothesis: [
      "A partir de reuniões com stakeholders e entrevistas com analistas, a hipótese foi que uma IA poderia reconhecer os tipos de documentos aceitos e extrair automaticamente as informações necessárias.",
      "Com isso, seria possível acelerar a análise, reduzir custos e manter uma camada de validação humana enquanto a solução amadurecia.",
    ],
    implementation: [
      "A experiência foi desenhada para organizar o fluxo de upload, leitura automática e conferência manual em um único percurso, com estados claros e foco na rastreabilidade.",
      "As telas de lista, filtros, calendário e detalhe foram pensadas para dar velocidade ao trabalho dos analistas sem esconder o contexto de cada documento.",
    ],
    results: [
      "O MVP foi finalizado e os primeiros testes apontaram ganho de eficiência operacional e uma experiência mais objetiva para os usuários.",
      "O SLA caiu cerca de 73%, o custo por análise reduziu 87% e o time de analistas foi de 6 para 2 enquanto a IA era treinada. A meta seguinte era chegar a um único analista e automatizar totalmente o fluxo.",
    ],
  },
  images: {
    hero: {
      src: media.cases.detail.portalAnaliseDocumentos.hero,
      alt: "Tela principal do portal de análise de documentos por AI.",
      width: 6480,
      height: 3038,
    },
    scenario: {
      src: media.cases.detail.portalAnaliseDocumentos.scenario,
      alt: "Tela inicial do fluxo de análise de documentos.",
      width: 1620,
      height: 1080,
    },
    pairOne: [
      {
        src: media.cases.detail.portalAnaliseDocumentos.pairOneLeft,
        alt: "Filtros da fila de documentos.",
        width: 800,
        height: 867,
      },
      {
        src: media.cases.detail.portalAnaliseDocumentos.pairOneRight,
        alt: "Calendário de análise.",
        width: 800,
        height: 867,
      },
    ],
    pairTwo: [
      {
        src: media.cases.detail.portalAnaliseDocumentos.pairTwoLeft,
        alt: "Formulário de leitura automática.",
        width: 800,
        height: 505,
      },
      {
        src: media.cases.detail.portalAnaliseDocumentos.pairTwoRight,
        alt: "Validação automática de documento.",
        width: 800,
        height: 624,
      },
    ],
    implementation: {
      src: media.cases.detail.portalAnaliseDocumentos.implementation,
      alt: "Sistema exibido em notebook.",
      width: 1620,
      height: 1080,
    },
    results: {
      src: media.cases.detail.portalAnaliseDocumentos.results,
      alt: "Tela final de detalhes do documento.",
      width: 1620,
      height: 1080,
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
