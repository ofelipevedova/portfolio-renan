import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { HeroCarousel, type HeroCarouselItem } from "@/components/HeroCarousel";
import { HomeCaseMosaic } from "@/components/HomeCaseMosaic";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { casesByDisplayOrder } from "@/data/cases";
import { site } from "@/data/site";
import { media } from "@/lib/media";
import { publicPath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "Início",
  description: site.description,
};

const heroCarouselItems: HeroCarouselItem[] = [
  {
    src: media.hero.benedictRedgrove.motorbikeBeige,
    alt: "Imagem arquitetônica de Benedict Redgrove em uma estrutura branca e minimalista",
    width: 1920,
    height: 1536,
  },
  {
    src: media.hero.benedictRedgrove.nightArchitecture,
    alt: "Composição noturna de arquitetura moderna registrada por Benedict Redgrove",
    width: 1920,
    height: 1536,
  },
  {
    src: media.hero.benedictRedgrove.observatoryWhite,
    alt: "Foto de alta exposição com superfície branca e elemento técnico ao fundo",
    width: 1920,
    height: 1536,
  },
  {
    src: media.hero.benedictRedgrove.architectureWhite,
    alt: "Imagem de motocicletas em fundo claro capturada por Benedict Redgrove",
    width: 1920,
    height: 1281,
  },
  {
    src: media.hero.benedictRedgrove.helmetBlackPortrait,
    alt: "Retrato vertical em fundo escuro fotografado por Benedict Redgrove",
    width: 1920,
    height: 1440,
  },
];

const breadcrumbItems = [
  {
    label: "Inicio",
    href: "/#inicio",
  },
  {
    label: "Cases",
    href: "/#cases",
  },
  {
    label: "Background",
    href: "/#background",
  },
  {
    label: "Posts",
    href: "/#posts",
  },
  {
    label: "Contato",
    href: "/#contato",
  },
] as const;

const curriculumHref = media.curriculum.pdf;
const curriculumFilename = "Renan F. Vedova - Currículo.pdf";

type BackgroundExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  cta?: {
    label: string;
    href: string;
  };
};

type PostItem = {
  title: string;
  description: string;
  href: string;
};

const backgroundExperiences: BackgroundExperience[] = [
  {
    company: "VulpiStudio",
    role: "Founder / Diretor de design",
    period: "2021 - o momento",
    description:
      "Esse foi meu primeiro projeto de design, onde desenvolvo projetos para empresas que buscam um posicionamento digital de forma profissional. O foco é estudar posicionamento, estruturar processos e criar interfaces que resolvem problemas de marcas e pessoas.",
    logoSrc: media.brands.vulpistudio,
    logoAlt: "Logo da VulpiStudio",
    cta: {
      label: "vulpistudio.com",
      href: "https://vulpistudio.com",
    },
  },
  {
    company: "Acehub",
    role: "Sênior UX/UI Designer",
    period: "2025 - 2026",
    description:
      "Responsável pela criação do Design system e atualização da solução, focando em melhorias dos fluxos e criação de novas features.",
    logoSrc: media.brands.acehub,
    logoAlt: "Logo da Acehub",
  },
  {
    company: "DBC Company",
    role: "Sênior UX/UI Designer",
    period: "2024 - 2024",
    description:
      "Entrei em uma equipe que atuava na frente de descoberta de novos produtos. Fui responsável pela frente de discovery e pelo desenvolvimento de novos produtos, além da aplicação de melhorias em produtos já existentes e na interface.",
    logoSrc: media.brands.dbcCompany,
    logoAlt: "Logo da DBC Company",
  },
  {
    company: "Guia Moto",
    role: "Sênior UX/UI Designer",
    period: "2023 - 2023 / Freelance",
    description:
      "Fui contratado pela startup para desenvolver o MVP da startup. Fui responsável pela criação de um design system para facilitar o design das telas e apoiar o time na evolução do produto com mais clareza.",
    logoSrc: media.brands.guiaMoto,
    logoAlt: "Logo da Guia Moto",
  },
  {
    company: "GH Brantech",
    role: "Pleno UX/UI Designer",
    period: "2021 - 2023",
    description:
      "Integrei em uma equipe que já desenvolvia um produto para a área da educação. Minhas tarefas eram desenhar e testar novas features, revisar fluxos e apoiar a evolução da experiência de alunos e usuários.",
    logoSrc: media.brands.ghBrantech,
    logoAlt: "Logo da GH Brantech",
  },
];

const posts: PostItem[] = [
  {
    title: "ai ai ai AI, todo dia um produto feito por AI",
    description:
      "Se você acha que AI está criando produtos melhores, você está olhando errado. O ponto é separar ferramenta de produto e entender quando velocidade ajuda e quando ela só acelera erro.",
    href: "https://medium.com/@felipevedova/ai-ai-ai-ai-todo-dia-um-produto-feito-por-ai-a547ba2c3789",
  },
  {
    title: "Não pense como um UX, isso vai acabar com você",
    description:
      "Um texto sobre a frustração de querer aplicar UX em qualquer cenário e sobre como método, dados e contexto mudam a qualidade das decisões de produto.",
    href: "https://medium.com/@felipevedova/n%C3%A3o-pense-como-um-ux-isso-vai-acabar-com-voc%C3%AA-4467a2446b51",
  },
  {
    title:
      "O uso de tags contextuais por geolocalização em lojas virtuais: Melhorando a experiência do cliente",
    description:
      "Uma reflexão sobre personalização em lojas virtuais a partir da localização física do cliente e sobre como tags contextuais ajudam na relevância da experiência de compra.",
    href: "https://medium.com/@felipevedova/o-uso-de-tags-contextuais-por-geolocaliza%C3%A7%C3%A3o-em-lojas-virtuais-melhorando-a-experi%C3%AAncia-do-cliente-025a1a0081d8",
  },
];

function BreadcrumbTrail({
  active,
}: {
  active: (typeof breadcrumbItems)[number]["label"];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px] leading-none tracking-[-0.03em] md:text-[19px]"
    >
      {breadcrumbItems.map((item) => {
        const isActive = item.label === active;

        const content = (
          <>
            <span>/</span>
            <span>{item.label}</span>
          </>
        );

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-3 transition ${
              isActive ? "font-medium text-accent" : "text-ink/70 hover:text-ink"
            }`}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}

function BackgroundExperienceCard({
  item,
  delay,
}: {
  item: BackgroundExperience;
  delay: number;
}) {
  return (
    <Reveal className="max-w-[30rem]" delay={delay}>
      <article className="space-y-4">
        <Image
          src={publicPath(item.logoSrc)}
          alt={item.logoAlt}
          width={56}
          height={56}
          className="block h-12 w-12 select-none md:h-14 md:w-14"
          sizes="56px"
        />

        <div className="space-y-1">
          <h3 className="font-display text-[2rem] leading-[0.95] tracking-[-0.06em] text-ink md:text-[2.25rem]">
            {item.company}
          </h3>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-ink/85">
            {item.role}
          </p>
          <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
            {item.period}
          </p>
        </div>

        <p className="max-w-[24rem] text-sm leading-6 text-ink/75 md:text-[15px] md:leading-7">
          {item.description}
        </p>

        {item.cta ? (
          <p className="text-sm leading-6 text-ink/75">
            Quer um projeto feito por mim?{" "}
            <a
              href={item.cta.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent transition hover:opacity-80"
            >
              {item.cta.label}
            </a>
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}

function PostListItem({ item, delay }: { item: PostItem; delay: number }) {
  return (
    <Reveal delay={delay} className="max-w-[46rem]">
      <article className="space-y-3">
        <h3 className="font-sans text-[1.25rem] font-semibold leading-[1.32] tracking-[-0.04em] text-ink md:text-[1.35rem]">
          {item.title}
        </h3>
        <p className="text-[16px] leading-[1.56] tracking-[-0.01em] text-ink/75 md:text-[18px]">
          {item.description}
        </p>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-[16px] font-medium tracking-[-0.02em] text-ink transition hover:text-accent md:text-[17px]"
        >
          <span>Ler mais</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          >
            <path d="M7 17L17 7" />
            <path d="M10 7h7v7" />
          </svg>
        </a>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="space-y-16 pb-16 pt-8 md:space-y-24">
        <section id="inicio" className="page-shell">
          <div className="space-y-4">
            <HeroCarousel items={heroCarouselItems} />

            <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted">
                Imagens por{" "}
                <Link
                  href="https://benedictredgrove.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition hover:opacity-80"
                >
                  Benedict Redgrove
                </Link>
              </p>

              <BreadcrumbTrail active="Inicio" />
            </div>
          </div>

          <div className="relative mx-auto mt-20 w-full">
            <div className="mx-auto w-full max-w-4xl">
              <div className="max-w-3xl">
                <h1
                  className="font-display leading-[1.08] tracking-[-0.05em] text-ink"
                  style={{ fontSize: "32px", lineHeight: "1.08" }}
                >
                  Olá, eu sou o Renan F. Vedova
                </h1>
                <p className="mt-4 max-w-[40rem] text-[18px] leading-[1.48] tracking-[-0.01em] text-ink/85 md:text-[21px]">
                  E sou UX/UI designer sênior com mais de 6 anos de sólida
                  experiência, atuando em startups, consultorias e como
                  freelancer.
                </p>
              </div>
            </div>

            <Link
              href={curriculumHref}
              download={curriculumFilename}
              className="group mt-10 inline-flex items-center gap-3 text-lg font-medium tracking-[-0.03em] text-ink transition hover:text-accent md:absolute md:bottom-0 md:right-0 md:mt-0"
            >
              <span>Baixe o meu currículo</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="M7 17L17 7" />
                <path d="M10 7h7v7" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="page-shell">
          <HomeCaseMosaic items={casesByDisplayOrder} />
        </section>

        <section id="background" className="page-shell pt-14 md:pt-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
            <BreadcrumbTrail active="Background" />

            <p className="mt-12 max-w-[46rem] text-[18px] leading-[1.48] tracking-[-0.01em] text-ink/85 md:mt-14 md:text-[20px]">
              Eu aprendi design de forma autodidata, em 2013 eu comecei a
              estudar através de vídeos no youtube e conteúdos encontrados na
              internet. Nos anos seguintes eu trabalhei como designer gráfico,
              editor de vídeos e captação audiovisual. De 2016 há 2018 atuei
              em algumas empresas pequenas da região como diretor de arte para
              serigrafia e gráficas. Em 2018 fui para Portugal e comecei a
              estudar UX/UI na Edit.Porto, voltando ao Brasil em 2019 eu voltei
              para atuação como designer gráfico onde eu era o responsável por
              campanhas de mkt (Inbound e outbound) na criação de k/v para
              elas, isso enquanto eu me aprofundava mais em cursos de
              experiência do usuário. E de 2020 até o momento eu venho criando
              produtos com times incríveis que agregaram imensamente no meu
              conhecimento até o momento.
            </p>

            <div className="mt-16 w-full space-y-14 md:mt-20 md:space-y-16">
              {backgroundExperiences.map((item, index) => (
                <BackgroundExperienceCard
                  key={item.company}
                  item={item}
                  delay={index * 90}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="posts" className="page-shell pt-14 md:pt-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
            <BreadcrumbTrail active="Posts" />

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              {posts.map((item, index) => (
                <PostListItem key={item.href} item={item} delay={index * 90} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

