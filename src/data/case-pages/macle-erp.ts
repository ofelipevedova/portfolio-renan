import { media } from "@/lib/media";
import { site } from "@/data/site";

import type { CaseImageAsset, DetailedCasePageData } from "@/data/case-pages/types";

export const macleErpCasePage = {
  slug: "macle-sistema-erp",
  breadcrumb: "Macle ERP",
  title: "Mais clareza para o ERP da Macle",
  metaTitle: "Macle ERP | Mais clareza para o ERP da Macle",
  metaDescription:
    "Macle ERP é um case de redesign de experiência para lojas de calçados, com foco em reduzir complexidade operacional, organizar fluxos e aumentar eficiência.",
  problemLabel: "Qual era o meu desafio",
  info: [
    { label: "Cliente", value: "Macle Sistemas" },
    { label: "Ano", value: "2024" },
    { label: "Tipo", value: "ERP para lojas de calçados" },
    { label: "Role", value: "UX/UI Design" },
  ],
  sections: {
    scenario: [
      "O ERP da Macle era utilizado principalmente por lojas de calçados para gestão de operações como vendas, estoque, pedidos e controle financeiro. Por se tratar de um sistema presente no dia a dia do negócio, a eficiência da experiência impactava diretamente a produtividade das equipes e a tomada de decisão.",
      "Com o crescimento do produto, a interface começou a apresentar sinais de complexidade excessiva, com fluxos pouco claros e uma experiência que exigia maior esforço operacional dos usuários.",
    ],
    problem: [
      "O desafio estava em reduzir a complexidade do sistema sem comprometer sua robustez, tornando a experiência mais clara, eficiente e adaptada à rotina de uso intensivo. Era necessário facilitar tarefas operacionais críticas, como gestão de estoque e vendas, ao mesmo tempo em que se melhorava a organização da informação e a previsibilidade dos fluxos.",
    ],
    hypothesis: [
      "A estratégia partiu da hipótese de que uma experiência mais estruturada, com melhor hierarquia de informação e fluxos mais consistentes, poderia reduzir o esforço cognitivo dos usuários e aumentar a eficiência operacional.",
      "A proposta foi reorganizar a base do sistema, priorizando clareza, consistência e rapidez de execução, tratando o ERP não apenas como um conjunto de funcionalidades, mas como uma ferramenta de trabalho central para o dia a dia das lojas.",
    ],
    implementation: [
      "A implementação focou na reestruturação dos fluxos principais do sistema, com ênfase em vendas, controle de estoque e navegação entre módulos. Foram revisados padrões de interação, organização de telas e apresentação de dados, buscando tornar a experiência mais previsível e fácil de operar.",
      "O trabalho também considerou a frequência de uso das funcionalidades, priorizando acessos rápidos, redução de etapas e maior eficiência nas tarefas mais recorrentes.",
    ],
    results: [
      "O redesenho resultou em uma experiência mais eficiente e orientada à operação, com projeção de 35% de redução no tempo de execução de tarefas críticas, 29% menos dependência de suporte para dúvidas operacionais e um aumento de 31% na produtividade percebida pelos usuários.",
      "Além dos ganhos operacionais, o projeto estabeleceu uma base mais consistente para evolução do sistema, tornando o ERP mais escalável e alinhado às necessidades reais das lojas.",
    ],
  },
  images: {
    hero: {
      src: media.cases.detail.macleErp.dashboardListing,
      alt: "Tela principal do ERP da Macle",
      width: 8000,
      height: 4496,
    } satisfies CaseImageAsset,
    scenario: {
      src: media.cases.detail.macleErp.formScreenshot,
      alt: "Tela complementar do ERP da Macle",
      width: 8000,
      height: 5676,
    } satisfies CaseImageAsset,
    pairOne: [
      {
        src: media.cases.detail.macleErp.sidebarMenu,
        alt: "Detalhe do menu lateral do ERP da Macle",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.macleErp.settingsPanel,
        alt: "Detalhe do painel de configurações do ERP da Macle",
        width: 3952,
        height: 3952,
      },
    ] satisfies CaseImageAsset[],
    pairTwo: [
      {
        src: media.cases.detail.macleErp.productForm,
        alt: "Tela de formulário do ERP da Macle",
        width: 3952,
        height: 3952,
      },
      {
        src: media.cases.detail.macleErp.documentList,
        alt: "Tela de listagem do ERP da Macle",
        width: 3952,
        height: 3952,
      },
    ] satisfies CaseImageAsset[],
    implementation: {
      src: media.cases.detail.macleErp.mobileDetail,
      alt: "Tela de detalhamento mobile do ERP da Macle",
      width: 8000,
      height: 4496,
    } satisfies CaseImageAsset,
    results: {
      src: media.cases.detail.macleErp.salesDocuments,
      alt: "Tela final com documentos de venda no ERP da Macle",
      width: 8000,
      height: 4496,
    } satisfies CaseImageAsset,
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
