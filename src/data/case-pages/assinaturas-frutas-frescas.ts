import { site } from "@/data/site";

export const assinaturasFrutasFrescasCasePage = {
  slug: "assinaturas-de-frutas-frescas",
  metaTitle: "Reimaginando a economia da recorrência | Product Discovery",
  metaDescription:
    "Discovery estratégico para uma foodtech de e-grocery. O processo revelou uma falha estrutural na hipótese inicial e levou a uma arquitetura de produto completamente nova.",

  breadcrumb: "Assinaturas de frutas frescas",
  title: "Reimaginando a economia da recorrência",

  info: [
    { label: "Tipo", value: "Product Discovery" },
    { label: "Contexto", value: "Foodtech / E-grocery" },
    { label: "Métodos", value: "Desk Research, Benchmarking" },
    { label: "Ano", value: "2026" },
  ],

  scenario: [
    "Uma startup em estágio inicial do setor de foodtech chegou com uma ideia bem delineada: um aplicativo de assinaturas de frutas frescas com três frequências de entrega, mensal, quinzenal e semanal. O objetivo era validar o modelo, mapear os concorrentes e encontrar oportunidades de inovação.",
    "O que o stakeholder não havia considerado é que uma das frequências propostas carregava uma falha estrutural. Não era um problema de UX, de onboarding ou de precificação: era uma incompatibilidade entre o produto e a biologia do que ele entregava.",
  ],

  centralQuestion: "Se a entrega é mensal, quem compra fruta nos outros 22 dias?",
  questionContext:
    "Frutas têm ciclo de maturação rápido; uma entrega a cada 30 dias abastece a casa por apenas 5 a 8 dias. Isso fazia do plano mensal uma promessa frágil de conveniência e retenção.",

  investigationIntro:
    "Para entender o mercado e testar a hipótese, o discovery foi estruturado em duas frentes: benchmarking competitivo e análise de compatibilidade do plano mensal com o consumo real.",

  methods: {
    market: {
      title: "Benchmarking competitivo",
      description:
        "Mapeamento dos principais players do mercado de assinaturas de alimentos frescos, desde startups de orgânicos imperfeitos até clubes de agricultura local e serviços de frutas picadas para escritórios. O objetivo era entender quem já resolve esse problema, como e a que custo.",
      steps: [
        "Mapeamento de concorrentes por segmento (preço, sustentabilidade, conveniência)",
        "Análise dos modelos de frequência adotados no setor",
        "Identificação de gaps e Oceanos Azuis no mercado local",
      ],
    },
    users: {
      title: "Análise da hipótese",
      description:
        "Teste de estresse do plano mensal proposto. A análise cruzou o ciclo de maturação das principais frutas com o comportamento real de compra e consumo do usuário-alvo.",
      steps: [
        "Mapeamento do ciclo de maturação das principais frutas consumidas no Brasil",
        "Análise da janela de consumo ideal x frequência de entrega proposta",
        "Comparação entre o custo do plano mensal e o padrão real de compra do usuário",
      ],
    },
  },

  findingsIntro:
    "As duas frentes convergiram para a mesma leitura e nos deram confiança para propor uma arquitetura de assinatura mais alinhada com o produto, não apenas uma oferta de preço.",

  researchFindings: [
    {
      label: "Crescimento do mercado",
      value: "74%",
      description:
        "O setor de assinaturas de alimentos frescos no Brasil cresce 74% ao ano, validando que a oportunidade era real e urgente.",
    },
    {
      label: "Perda de produção",
      value: "30%",
      description:
        "Até 30% da produção de frutas e verduras se perde no pós-colheita e transporte, o que reforça a necessidade de um modelo de entrega mais previsível.",
    },
    {
      label: "Benchmark competitivo",
      value: "5 players",
      description:
        "Analisamos cinco concorrentes de diferentes tamanhos para entender onde frequência, conveniência e retenção se cruzam.",
    },
    {
      label: "Janela de consumo",
      value: "5–8 dias",
      description:
        "Uma entrega mensal atende consumo de apenas 5 a 8 dias, tornando o plano incompatível com a promessa de conveniência.",
    },
  ],

  impactMap: [
    {
      problem: "A biologia da fruta impõe um ciclo de consumo menor do que 30 dias.",
      decision: "Descartar o plano mensal e focar em modelos semanais e quinzenais.",
      impact:
        "Reduzir churn inicial e apoiar a criação de um hábito mais consistente no usuário.",
    },
    {
      problem: "Perdas logísticas de FLV elevam custos e fragilizam margem.",
      decision: "Construir regras de negócio com gestão preditiva e compras sob demanda.",
      impact:
        "Minimizar desperdício, fortalecer margem e permitir frete mais competitivo.",
    },
    {
      problem: "Concorrentes operam em soluções fragmentadas de frequência e experiência.",
      decision: "Posicionar o produto como combinação de conveniência, frescor e praticidade.",
      impact:
        "Criar um diferencial claro que suporte retenção e justifique preço premium.",
    },
  ],

  insights: [
    {
      label: "O plano mensal não funciona",
      description:
        "Uma entrega a cada 30 dias abastece a casa por apenas 5 a 8 dias. Nos outros 22 dias, o usuário volta ao supermercado, quebrando a promessa central e gerando churn antes do segundo mês.",
    },
    {
      label: "Mercado validado, espaço em aberto",
      description:
        "O modelo de assinatura de alimentos frescos cresce no Brasil (74% ao ano). Os players, porém, operam em frentes isoladas, sem um líder que combine frequência, qualidade e conveniência em um só serviço.",
    },
    {
      label: "A cadeia logística como diferencial",
      description:
        "Até 30% da produção de FLV se perde no pós-colheita e no transporte. Uma gestão preditiva de demanda, comprando do produtor apenas o que já está assinado, zera o desperdício e reduz custos estruturalmente.",
    },
    {
      label: "A oportunidade está no processamento",
      description:
        "Frutas já higienizadas e picadas atendem um segmento premium subatendido: usuários que pagam mais por conveniência. Esse diferencial cria margem superior sem aumento de custo logístico proporcional.",
    },
  ],

  keyInsight:
    "O problema não era de frequência: era de compatibilidade entre o produto e a biologia do que ele entrega.",

  decision: {
    headline: "Eliminar o plano mensal. Reestruturar a arquitetura de assinaturas.",
    explanation:
      "A decisão não foi adicionar features: foi reconhecer que o plano mensal era a principal fonte de atrito e churn. O caminho mais seguro era reter a promessa eliminando a opção mal alinhada e reestruturando a arquitetura em torno de frequências que a fruta e o usuário sustentam.",
  },

  architecture: [
    {
      label: "Plano Essencial",
      frequency: "Quinzenal",
      description:
        "Para quem mora sozinho. A curadoria prioriza frutas de maior durabilidade, garantindo aproveitamento total até a próxima entrega.",
    },
    {
      label: "Plano Família",
      frequency: "Semanal",
      description:
        "O carro-chefe do modelo. Substitui a ida ao hortifrúti para famílias de 2 a 4 pessoas, com volume e variedade calibrados para a semana.",
    },
    {
      label: "Ultra-conveniência",
      frequency: "Alta frequência",
      description:
        "Frutas já higienizadas e picadas entregues com alta frequência para usuários que pagam por conveniência máxima.",
    },
  ],

  avoided: [
    { value: "Churn", label: "cancelamentos nos primeiros 30 dias evitados" },
    { value: "Promessa", label: "quebrada de fruta fresca no dia a dia" },
    { value: "Modelo", label: "frágil de retenção posto em produção" },
    { value: "Margem", label: "premium ignorada no segmento de conveniência" },
  ],

  takeaway:
    "Discovery de produto não é sobre encontrar o que construir. É sobre entender o que não construir. A biologia da fruta sabia mais sobre o modelo de negócio do que o briefing inicial.",

  cta: {
    label: "Quer discutir um projeto?",
    email: site.contactEmail,
  },
} as const;
