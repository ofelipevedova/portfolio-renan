import { media } from "@/lib/media";

export type LogoItem = {
  src: string;
  alt: string;
  label: string;
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseSection = {
  title: string;
  text: string;
};

export type CaseGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type CaseCategory = "Produto" | "Site" | "Aplicativo";

export type PortfolioCase = {
  slug: string;
  title: string;
  category: CaseCategory;
  year: string;
  summary: string;
  overview: string;
  cover: {
    src: string;
    alt: string;
    objectPosition?: string;
    scale?: number;
  };
  metrics: CaseMetric[];
  sections: CaseSection[];
  gallery: CaseGalleryItem[];
  logos: LogoItem[];
};

export const cases: PortfolioCase[] = [
  {
    slug: "website-builder-macle",
    title: "Macle websitebuilder",
    category: "Produto",
    year: "2024",
    summary:
      "Construtor visual para montar páginas com blocos reutilizáveis e publicar sem fricção.",
    overview:
      "A proposta foi simplificar a criação de sites, com um fluxo modular que reduz atrito na montagem, revisão e publicação.",
    cover: {
      src: media.cases.covers.construtorDeSitesMacle,
      alt: "Capa do construtor de sites Macle",
      objectPosition: "center center",
    },
    metrics: [
      { value: "Seções", label: "montagem modular" },
      { value: "Preview", label: "validação visual" },
      { value: "Publish", label: "fluxo simplificado" },
    ],
    sections: [
      {
        title: "Conceito visual",
        text:
          "A interface privilegia blocos largos, contraste limpo e uma composição que ajuda o usuário a entender o que está sendo montado em cada etapa.",
      },
      {
        title: "Fluxo de edição",
        text:
          "A navegação foi preparada para dar ritmo ao processo, deixando a troca de seções, ajustes de conteúdo e pré-visualização mais diretos.",
      },
      {
        title: "Entrega final",
        text:
          "O resultado é uma base pronta para crescer, com espaço para novos tipos de bloco, versões de página e novas integrações sem refazer a estrutura.",
      },
    ],
    gallery: [
      {
        src: media.cases.shared.macleBuilderShowcase,
        alt: "Construtor de sites Macle em destaque",
        caption: "Tela principal do construtor.",
      },
      {
        src: media.cases.shared.documentValidationScreen,
        alt: "Portal validador de documentos conectado ao ecossistema",
        caption: "Integração com o fluxo de validação.",
      },
      {
        src: media.hero.benedictRedgrove.architectureWhite,
        alt: "Imagem arquitetônica de respiro",
        caption: "Imagem de suporte para abrir a experiência.",
      },
    ],
    logos: [
      {
        src: media.brands.dbcCompany,
        alt: "Logo BC",
        label: "BC",
      },
      {
        src: media.brands.ghBrantech,
        alt: "Logo GH",
        label: "GH",
      },
      {
        src: media.brands.acehub,
        alt: "Logo azul minimalista",
        label: "Marca azul",
      },
    ],
  },
  {
    slug: "macle-sistema-erp",
    title: "Macle ERP",
    category: "Produto",
    year: "2024",
    summary:
      "Sistema operacional para centralizar módulos, navegação e acompanhamento de tarefas.",
    overview:
      "A proposta do ERP foi dar base para uma operação mais ampla, com uma interface capaz de acomodar vários módulos sem perder o ritmo visual.",
    cover: {
      src: media.cases.covers.macleErp,
      alt: "Capa do sistema ERP Macle",
      objectPosition: "center center",
    },
    metrics: [
      { value: "Módulos", label: "arquitetura modular" },
      { value: "Operação", label: "navegação direta" },
      { value: "Escala", label: "base para crescer" },
    ],
    sections: [
      {
        title: "Arquitetura do ERP",
        text:
          "A navegação foi desenhada para funcionar como um painel central, em que os módulos aparecem de forma clara e com hierarquia simples.",
      },
      {
        title: "Rotina de operação",
        text:
          "A camada principal do sistema prioriza rapidez na consulta, leitura de estados e acesso direto aos pontos mais usados do dia a dia.",
      },
      {
        title: "Base escalável",
        text:
          "Com a estrutura definida desde o início, o sistema aceita mais módulos e mais contexto sem perder a consistência da interface.",
      },
    ],
    gallery: [
      {
        src: media.cases.shared.documentListing,
        alt: "Painel do sistema ERP Macle",
        caption: "Painel de operação.",
      },
      {
        src: media.cases.shared.macleLoginScreen,
        alt: "Tela de login Macle",
        caption: "Acesso ao ecossistema.",
      },
      {
        src: media.cases.shared.macleBuilderShowcase,
        alt: "Construtor de sites Macle",
        caption: "Ferramenta complementar do ecossistema.",
      },
    ],
    logos: [
      {
        src: media.brands.dbcCompany,
        alt: "Logo BC",
        label: "BC",
      },
      {
        src: media.brands.guiaMoto,
        alt: "Logo Guia Moto",
        label: "Guia Moto",
      },
      {
        src: media.brands.ghBrantech,
        alt: "Logo GH",
        label: "GH",
      },
    ],
  },
  {
    slug: "portal-analise-de-documentos-por-ai",
    title: "Portal de análise de documentos por AI",
    category: "Produto",
    year: "2024",
    summary:
      "Portal para triagem assistida por IA, revisão humana e acompanhamento da análise.",
    overview:
      "O case de IA combina automação e revisão manual em uma sequência simples, com foco em velocidade de triagem e confiabilidade do resultado final.",
    cover: {
      src: media.cases.covers.bemsignAnaliseDocumentos,
      alt: "Capa do portal de análise de documentos por AI",
      objectPosition: "center center",
    },
    metrics: [
      { value: "IA", label: "leitura assistida" },
      { value: "Triagem", label: "prioridade por etapa" },
      { value: "Revisão", label: "controle humano" },
    ],
    sections: [
      {
        title: "Leitura assistida",
        text:
          "A interface organiza o documento de forma que a IA ajude sem esconder o contexto, deixando claro o que foi entendido e o que ainda precisa de revisão.",
      },
      {
        title: "Fila priorizada",
        text:
          "A página funciona como um centro de decisão, com indicação de estado, prioridade e próximos passos para cada documento analisado.",
      },
      {
        title: "Confiabilidade no fechamento",
        text:
          "Mesmo com automação, a interface mantém o ponto de validação manual, preservando clareza e controle em processos mais sensíveis.",
      },
    ],
    gallery: [
      {
        src: media.cases.shared.macleLoginScreen,
        alt: "Portal de análise por IA",
        caption: "Tela principal do fluxo.",
      },
      {
        src: media.cases.shared.documentValidationScreen,
        alt: "Documento sendo validado",
        caption: "Documento em conferência.",
      },
      {
        src: media.cases.shared.documentListing,
        alt: "Listagem operacional de documentos",
        caption: "Acompanhamento da fila de análise.",
      },
    ],
    logos: [
      {
        src: media.brands.acehub,
        alt: "Logo azul minimalista",
        label: "Marca azul",
      },
      {
        src: media.brands.vulpistudio,
        alt: "Logo geométrico escuro",
        label: "Marca escura",
      },
      {
        src: media.brands.dbcCompany,
        alt: "Logo BC",
        label: "BC",
      },
    ],
  },
  {
    slug: "portal-validador-de-documentos",
    title: "Portal validador de documentos",
    category: "Produto",
    year: "2024",
    summary:
      "Portal para validar documentos e evidências com busca por hash ou QR code.",
    overview:
      "A experiência reorganiza a leitura de histórico, signatário e auditorias para reduzir fricção na validação jurídica.",
    cover: {
      src: media.cases.covers.portalValidador,
      alt: "Capa do portal validador de documentos BemSign",
      objectPosition: "center center",
    },
    metrics: [
      { value: "Hash", label: "busca direta do documento" },
      { value: "QR Code", label: "leitura alternativa rápida" },
      { value: "Mobile", label: "uso em campo e apoio à rotina" },
    ],
    sections: [
      {
        title: "Leitura estratégica",
        text:
          "O portal foi pensado para apoiar peritos jurídicos em uma rotina sensível, em que cada dado precisa estar à mão e com leitura rápida.",
      },
      {
        title: "Menos fricção",
        text:
          "A reorganização da interface ajudou a concentrar histórico, documentos, signatário e auditorias em uma mesma lógica visual.",
      },
      {
        title: "Validação mais clara",
        text:
          "A solução foi desenhada para dar mais segurança ao processo e permitir consultas por código, hash ou QR code sem dispersar o usuário.",
      },
    ],
    gallery: [
      {
        src: media.cases.detail.portalValidador.hero,
        alt: "Portal validador de documentos em destaque.",
        caption: "Visão principal da experiência.",
      },
      {
        src: media.cases.detail.portalValidador.scenario,
        alt: "Listagem de validações no portal BemSign.",
        caption: "Leitura da lista e do histórico.",
      },
      {
        src: media.cases.detail.portalValidador.implementation,
        alt: "Busca por código e leitura por QR code no portal.",
        caption: "Acesso direto ao documento.",
      },
    ],
    logos: [
      {
        src: media.brands.acehub,
        alt: "Logo azul minimalista",
        label: "Marca azul",
      },
      {
        src: media.brands.vulpistudio,
        alt: "Logo geométrico escuro",
        label: "Marca escura",
      },
      {
        src: media.brands.dbcCompany,
        alt: "Logo BC",
        label: "BC",
      },
    ],
  },
];

const caseDisplayOrder = [
  "portal-validador-de-documentos",
  "portal-analise-de-documentos-por-ai",
  "macle-sistema-erp",
  "website-builder-macle",
] as const;

const caseDisplayPriority = new Map<string, number>(
  caseDisplayOrder.map((slug, index) => [slug, index]),
);

const originalCaseIndex = new Map(
  cases.map((item, index) => [item.slug, index] as const),
);

export const casesByDisplayOrder = [...cases].sort((a, b) => {
  const priorityA = caseDisplayPriority.get(a.slug) ?? caseDisplayPriority.size;
  const priorityB = caseDisplayPriority.get(b.slug) ?? caseDisplayPriority.size;

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  return (originalCaseIndex.get(a.slug) ?? 0) - (originalCaseIndex.get(b.slug) ?? 0);
});


