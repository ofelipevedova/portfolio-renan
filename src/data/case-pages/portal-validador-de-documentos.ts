import { media } from "@/lib/media";
import { site } from "@/data/site";

import type { DetailedCasePageData } from "./types";

export const portalValidadorDocumentosCasePage = {
  slug: "portal-validador-de-documentos",
  breadcrumb: "BemSign - Portal Validador",
  title: "Portal validador de documentos",
  metaTitle:
    "BemSign | Portal validador de documentos | Vulpi Studio",
  metaDescription:
    "Portal validador de documentos é um case de atualização do BemSign com busca por código, hash ou QR code, leitura mais clara e apoio à validação jurídica.",
  problemLabel: "O problema",
  info: [
    { label: "Cliente", value: "Bem Promotora" },
    { label: "Ano", value: "2024" },
    { label: "Tipo", value: "Portal validador de documentos" },
    { label: "Role", value: "UX/UI Design, Research" },
  ],
  layout: {
    afterProblem: "single",
    implementationImage: "inline",
  },
  sections: {
    scenario: [
      "Em agosto de 2024, recebi a demanda de atualizar o Portal Validador da plataforma de assinatura eletrônica BemSign. À primeira vista parecia uma tarefa simples, mas o contexto do produto deixou claro que o projeto exigia bastante atenção, porque a ferramenta era usada em uma rotina crítica de validação jurídica.",
      "O objetivo era transformar uma experiência já existente em algo mais claro, direto e confiável para profissionais que precisam analisar informações sensíveis com rapidez e segurança.",
    ],
    problem: [
      "O Portal Validador era uma ferramenta estratégica usada por peritos jurídicos para conferir dados como data, hora, dispositivo, versão e evidências da assinatura.",
      "Apesar da importância do fluxo, a interface espalhava informações críticas, o tempo de análise chegava a 10 a 12 minutos, os erros não eram bem comunicados e a legibilidade não estava otimizada para longas jornadas de trabalho.",
    ],
    hypothesis: [
      "A partir de reuniões com o dono do produto e com peritos, a hipótese foi reorganizar a experiência em uma visão única, mais robusta e mais fácil de ler, concentrando os dados mais importantes em um fluxo direto de validação.",
      "Também considerei que o acesso por código, hash ou leitura de QR code poderia reduzir fricção e dar mais autonomia para o usuário encontrar rapidamente o documento certo.",
    ],
    implementation: [
      "Estruturei o fluxo para concentrar busca, validação e conferência em uma one-page view, com hierarquia mais clara e pontos de acesso mais evidentes para o usuário.",
      "As telas passaram a destacar histórico do lote, identificação do signatário, evidências da assinatura e estados de auditoria, deixando a leitura mais objetiva tanto no desktop quanto no contexto mobile.",
    ],
    results: [
      "Nas rodadas de teste com os peritos, os principais ajustes vieram da leitura dos fluxos e da forma como as informações eram apresentadas. Isso ajudou a reduzir ruído e a deixar a navegação mais natural.",
      "Como a solução é usada de forma pontual, os resultados foram avaliados qualitativamente. Ao longo dos meses, os relatos positivos reforçaram a clareza da experiência e a facilidade de localizar documentos pelo hash ou pelo QR code.",
    ],
  },
  images: {
    hero: {
      src: media.cases.detail.portalValidador.hero,
      alt: "Tela principal do Portal Validador BemSign.",
      width: 2000,
      height: 1124,
    },
    scenario: {
      src: media.cases.detail.portalValidador.scenario,
      alt: "Listagem de validações em notebook.",
      width: 2000,
      height: 1124,
    },
    pairOne: [
      {
        src: media.cases.detail.portalValidador.pairOneLeft,
        alt: "Tela de busca pelo código do documento.",
        width: 988,
        height: 988,
      },
      {
        src: media.cases.detail.portalValidador.pairOneRight,
        alt: "Tela de auditorias e sessões do portal.",
        width: 988,
        height: 988,
      },
    ],
    pairTwo: [
      {
        src: media.cases.detail.portalValidador.pairTwoLeft,
        alt: "Tela de documentos do lote e identificação do signatário.",
        width: 2000,
        height: 1124,
      },
      {
        src: media.cases.detail.portalValidador.pairTwoRight,
        alt: "Fluxo mobile de busca por código e leitura por QR code.",
        width: 2000,
        height: 1124,
      },
    ],
    implementation: {
      src: media.cases.detail.portalValidador.implementation,
      alt: "Tela de identificadores e documentos validados.",
      width: 2000,
      height: 1124,
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
