import { site } from "@/data/site";

export const evitarConstruirProdutoErradoCasePage = {
  slug: "evitar-construir-produto-errado",
  metaTitle: "Evitar construir o produto errado | Discovery estratégico",
  metaDescription:
    "Discovery de UX sobre uma ferramenta interna de assinatura eletrônica usada em fluxos críticos. O estudo mostrou que a decisão certa era não evoluir o produto.",

  breadcrumb: "Evitar construir o produto errado",
  title: "Evitar construir o produto errado",

  info: [
    { label: "Tipo", value: "UX Discovery" },
    { label: "Contexto", value: "Produto interno" },
    { label: "Métodos", value: "Benchmark, Shadowing" },
    { label: "Ano", value: "2025" },
  ],

  scenario: [
    "A empresa tinha uma ferramenta interna de assinatura eletrônica usada em fluxos críticos — crédito, abertura de conta, onboarding. Mas os times que precisavam assinar documentos continuavam contratando DocuSign e ClickSign para fazer exatamente o mesmo trabalho.",
    "Havia uma proposta em discussão: transformar essa ferramenta em um produto robusto, com mais funcionalidades e maior integração aos sistemas internos. O argumento era de redução de dependência externa e economia a médio prazo. A pergunta que ninguém havia respondido era a mais simples possível: isso realmente vale a pena?",
  ],

  centralQuestion: "Se já existe uma solução interna, por que ninguém a usa?",
  questionContext:
    "Não era uma pergunta de UX. Era uma pergunta de negócio — com meses de desenvolvimento e alto custo de oportunidade na balança.",

  methods: {
    market: {
      title: "Pesquisa de mercado",
      description:
        "Benchmark com os principais players — DocuSign, ClickSign e D4Sign. Cada ferramenta foi testada em cenários reais de uso com foco em funcionalidade, pricing e suporte. O objetivo era entender o que o mercado já resolvia e a que custo.",
      steps: [
        "Benchmark com os principais players do setor",
        "Testes funcionais em cenários reais de uso",
        "Análise comparativa de custo e cobertura de funcionalidades",
      ],
    },
    users: {
      title: "Pesquisa com usuários",
      description:
        "Shadowing com os times que usavam assinatura eletrônica no dia a dia. Observei o fluxo real, entendi os critérios de decisão e mapeei por que, tendo uma opção interna disponível, esses times continuavam pagando por soluções externas.",
      steps: [
        "Shadowing com times que usavam o produto internamente",
        "Observação do uso real e dos pontos de decisão",
        "Mapeamento dos critérios que levavam à escolha por ferramentas externas",
      ],
    },
  },

  insights: [
    {
      label: "Mercado maduro",
      description:
        "Players como DocuSign e ClickSign tinham anos de desenvolvimento, certificações jurídicas e milhões de usuários. Entrar nesse nível de competição exigiria muito mais do que melhorias de UX.",
    },
    {
      label: "Custo de evolução alto",
      description:
        "Para tornar a ferramenta interna minimamente competitiva, o investimento estimado em desenvolvimento era desproporcional ao retorno possível.",
    },
    {
      label: "O problema não era a interface",
      description:
        "Os usuários não evitavam a ferramenta por atrito de uso. Evitavam porque ela entregava menos: sem integrações confiáveis, sem suporte jurídico e sem conformidade com padrões regulatórios.",
    },
    {
      label: "ROI negativo",
      description:
        "Comparando o custo de construir com o custo de contratar, ficou claro: as soluções externas saíam mais baratas, entregavam mais e traziam menos risco operacional.",
    },
  ],

  keyInsight:
    "Melhorar a interface não tornaria o produto viável. O problema não era de design — era de posicionamento em um mercado que já tinha vencedores.",

  decision: {
    headline: "Não evoluir a ferramenta como produto.",
    explanation:
      "Não havia caminho econômico ou estratégico que justificasse o investimento. Continuar significava: meses de desenvolvimento, baixo potencial de adoção e retorno negativo. A melhor entrega do discovery foi uma recomendação clara — antes de qualquer linha de código.",
  },

  avoided: [
    { value: "Meses", label: "de desenvolvimento evitados" },
    { value: "Alto", label: "custo de oportunidade redirecionado" },
    { value: "Baixa", label: "adoção que nunca viraria problema" },
    { value: "–ROI", label: "retorno negativo descartado antes de acontecer" },
  ],

  whatCameNext: {
    intro:
      "Com o foco liberado, a energia do time foi para uma iniciativa com problema real, gap claro no mercado e impacto operacional mensurável.",
    project: "Portal de análise de documentos com IA",
    projectSlug: "portal-analise-de-documentos-por-ai",
    outcomes: [
      "Maior impacto operacional com menor custo de desenvolvimento",
      "Problema sem solução interna consolidada — espaço real para inovar",
      "Retorno mensurável já nos primeiros testes do MVP",
    ],
  },

  takeaway:
    "Discovery também serve para dizer não. A maior entrega não foi um roadmap — foi a coragem de recomendar parar antes de construir o problema errado.",

  cta: {
    label: "Quer desenvolver um projeto?",
    email: site.contactEmail,
  },
} as const;
