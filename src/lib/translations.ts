export type Language = "pt" | "en";

type ExperienceT = {
  role: string;
  period: string;
  description: string;
  ctaQuestion?: string;
};

type PostT = {
  title: string;
  description: string;
};

type TranslationData = {
  nav: {
    inicio: string;
    cases: string;
    background: string;
    posts: string;
    contato: string;
  };
  hero: {
    imageCredit: string;
    greeting: string;
    description: string;
    downloadCv: string;
    cvFilename: string;
  };
  background: {
    intro: string;
    experiences: ExperienceT[];
  };
  posts: {
    readMore: string;
    items: PostT[];
  };
  contact: {
    title: string;
    getInTouch: string;
    emailCopied: string;
    curriculumLabel: string;
    portraitAlt: string;
  };
  footer: {
    rights: string;
    inspiredBy: string;
  };
};

export const translations: Record<Language, TranslationData> = {
  pt: {
    nav: {
      inicio: "Inicio",
      cases: "Cases",
      background: "Background",
      posts: "Posts",
      contato: "Contato",
    },
    hero: {
      imageCredit: "Imagens por",
      greeting: "Olá, eu sou o Renan F. Vedova",
      description:
        "E sou UX/UI designer sênior com mais de 6 anos de sólida experiência, atuando em startups, consultorias e como freelancer.",
      downloadCv: "Baixe o meu currículo",
      cvFilename: "Renan F. Vedova - Currículo.pdf",
    },
    background: {
      intro:
        "Eu aprendi design de forma autodidata, em 2013 eu comecei a estudar através de vídeos no youtube e conteúdos encontrados na internet. Nos anos seguintes eu trabalhei como designer gráfico, editor de vídeos e captação audiovisual. De 2016 há 2018 atuei em algumas empresas pequenas da região como diretor de arte para serigrafia e gráficas. Em 2018 fui para Portugal e comecei a estudar UX/UI na Edit.Porto, voltando ao Brasil em 2019 eu voltei para a atuação como designer gráfico onde eu era o responsável por campanhas de mkt (Inbound e outbound) na criação de k/v para elas, isso enquanto eu me aprofundava mais em cursos de experiência do usuário. E de 2020 até o momento eu venho criando produtos com times incríveis que agregaram imensamente no meu conhecimento até o momento.",
      experiences: [
        {
          role: "Founder / Diretor de design",
          period: "2021 - o momento",
          description:
            "Esse foi meu primeiro projeto de design, onde desenvolvo projetos para empresas que buscam um posicionamento digital de forma profissional. O foco é estudar posicionamento, estruturar processos e criar interfaces que resolvem problemas de marcas e pessoas.",
          ctaQuestion: "Quer um projeto feito por mim?",
        },
        {
          role: "Sênior UX/UI Designer",
          period: "2025 - 2026",
          description:
            "Responsável pela criação do Design system e atualização da solução, focando em melhorias dos fluxos e criação de novas features.",
        },
        {
          role: "Sênior UX/UI Designer",
          period: "2024 - 2024",
          description:
            "Entrei em uma equipe que atuava na frente de descoberta de novos produtos. Fui responsável pela frente de discovery e pelo desenvolvimento de novos produtos, além da aplicação de melhorias em produtos já existentes e na interface.",
        },
        {
          role: "Sênior UX/UI Designer",
          period: "2023 - 2023 / Freelance",
          description:
            "Fui contratado pela startup para desenvolver o MVP da startup. Fui responsável pela criação de um design system para facilitar o design das telas e apoiar o time na evolução do produto com mais clareza.",
        },
        {
          role: "Pleno UX/UI Designer",
          period: "2021 - 2023",
          description:
            "Integrei em uma equipe que já desenvolvia um produto para a área da educação. Minhas tarefas eram desenhar e testar novas features, revisar fluxos e apoiar a evolução da experiência de alunos e usuários.",
        },
      ],
    },
    posts: {
      readMore: "Ler mais",
      items: [
        {
          title: "ai ai ai AI, todo dia um produto feito por AI",
          description:
            "Se você acha que AI está criando produtos melhores, você está olhando errado. O ponto é separar ferramenta de produto e entender quando velocidade ajuda e quando ela só acelera erro.",
        },
        {
          title: "Não pense como um UX, isso vai acabar com você",
          description:
            "Um texto sobre a frustração de querer aplicar UX em qualquer cenário e sobre como método, dados e contexto mudam a qualidade das decisões de produto.",
        },
        {
          title:
            "O uso de tags contextuais por geolocalização em lojas virtuais: Melhorando a experiência do cliente",
          description:
            "Uma reflexão sobre personalização em lojas virtuais a partir da localização física do cliente e sobre como tags contextuais ajudam na relevância da experiência de compra.",
        },
      ],
    },
    contact: {
      title:
        "Minha prioridade é sempre garantir que o design seja baseado em uma compreensão profunda dos usuários e dos objetivos do negócio, utilizando ferramentas e métodos que tragam o melhor resultado para cada situação.",
      getInTouch: "Entre em contato",
      emailCopied: "E-mail copiado",
      curriculumLabel: "Currículo",
      portraitAlt: "Retrato em preto e branco do autor do portfólio",
    },
    footer: {
      rights: "TODOS OS DIREITOS RESERVADOS",
      inspiredBy: "Inspirado por",
    },
  },

  en: {
    nav: {
      inicio: "Home",
      cases: "Cases",
      background: "Background",
      posts: "Posts",
      contato: "Contact",
    },
    hero: {
      imageCredit: "Photos by",
      greeting: "Hello, I'm Renan F. Vedova",
      description:
        "I'm a senior UX/UI designer with over 6 years of solid experience, working in startups, consultancies and as a freelancer.",
      downloadCv: "Download my resume",
      cvFilename: "Renan F. Vedova - Resume.pdf",
    },
    background: {
      intro:
        "I learned design in a self-taught way — in 2013 I started studying through YouTube videos and online content. Over the following years I worked as a graphic designer, video editor, and in audiovisual production. From 2016 to 2018 I worked at small regional companies as an art director for screen printing and print shops. In 2018 I went to Portugal and began studying UX/UI at Edit.Porto. Returning to Brazil in 2019, I took on a graphic design role responsible for marketing campaigns (inbound and outbound) and key visual creation, while deepening my expertise through UX courses. Since 2020 I've been building products with incredible teams that have continuously grown my skills.",
      experiences: [
        {
          role: "Founder / Design Director",
          period: "2021 - present",
          description:
            "This was my first design venture, where I develop projects for companies seeking professional digital positioning. The focus is on studying market positioning, structuring processes, and building interfaces that solve real problems for brands and people.",
          ctaQuestion: "Want a project made by me?",
        },
        {
          role: "Senior UX/UI Designer",
          period: "2025 - 2026",
          description:
            "Responsible for building the Design System and updating the product, focusing on improving user flows and creating new features.",
        },
        {
          role: "Senior UX/UI Designer",
          period: "2024 - 2024",
          description:
            "Joined a team working on new product discovery. I led the discovery process and the development of new products, while also applying improvements to existing products and interfaces.",
        },
        {
          role: "Senior UX/UI Designer",
          period: "2023 - 2023 / Freelance",
          description:
            "Hired by the startup to build its MVP. I was responsible for creating a design system to streamline screen design and help the team evolve the product with greater clarity.",
        },
        {
          role: "Mid-level UX/UI Designer",
          period: "2021 - 2023",
          description:
            "Joined a team building an education product. My responsibilities included designing and testing new features, reviewing user flows, and supporting the evolution of the experience for students and users.",
        },
      ],
    },
    posts: {
      readMore: "Read more",
      items: [
        {
          title: "AI, AI, AI — every day another AI-built product",
          description:
            "If you think AI is creating better products, you're looking at this wrong. The point is to separate tool from product and understand when speed helps and when it only accelerates mistakes.",
        },
        {
          title: "Don't think like a UX designer — it will ruin you",
          description:
            "A reflection on the frustration of trying to apply UX everywhere, and on how method, data, and context shape the quality of product decisions.",
        },
        {
          title:
            "Using contextual geolocation tags in online stores: Improving the customer experience",
          description:
            "A reflection on personalization in online stores based on the customer's physical location, and on how contextual tags improve the relevance of the shopping experience.",
        },
      ],
    },
    contact: {
      title:
        "My priority is always to ensure that design is grounded in a deep understanding of users and business objectives, using tools and methods that deliver the best result for each situation.",
      getInTouch: "Get in touch",
      emailCopied: "Email copied",
      curriculumLabel: "Resume",
      portraitAlt: "Black and white portrait of the portfolio author",
    },
    footer: {
      rights: "ALL RIGHTS RESERVED",
      inspiredBy: "Inspired by",
    },
  },
};
