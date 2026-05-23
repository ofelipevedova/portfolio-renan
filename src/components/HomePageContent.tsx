"use client";

import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { HeroCarousel, type HeroCarouselItem } from "@/components/HeroCarousel";
import { HomeCaseMosaic } from "@/components/HomeCaseMosaic";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/contexts/LanguageContext";
import { casesByDisplayOrder } from "@/data/cases";
import { site } from "@/data/site";
import { media } from "@/lib/media";
import { publicPath } from "@/lib/site-path";

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

const backgroundStatic = [
  {
    company: "VulpiStudio",
    logoSrc: media.brands.vulpistudio,
    logoAlt: "Logo da VulpiStudio",
    ctaHref: "https://vulpistudio.com",
    ctaLabel: "vulpistudio.com",
  },
  {
    company: "Acehub",
    logoSrc: media.brands.acehub,
    logoAlt: "Logo da Acehub",
  },
  {
    company: "DBC Company",
    logoSrc: media.brands.dbcCompany,
    logoAlt: "Logo da DBC Company",
  },
  {
    company: "Guia Moto",
    logoSrc: media.brands.guiaMoto,
    logoAlt: "Logo da Guia Moto",
  },
  {
    company: "GH Brantech",
    logoSrc: media.brands.ghBrantech,
    logoAlt: "Logo da GH Brantech",
  },
] as const;

const postHrefs = [
  "https://medium.com/@felipevedova/ai-ai-ai-ai-todo-dia-um-produto-feito-por-ai-a547ba2c3789",
  "https://medium.com/@felipevedova/n%C3%A3o-pense-como-um-ux-isso-vai-acabar-com-voc%C3%AA-4467a2446b51",
  "https://medium.com/@felipevedova/o-uso-de-tags-contextuais-por-geolocaliza%C3%A7%C3%A3o-em-lojas-virtuais-melhorando-a-experi%C3%AAncia-do-cliente-025a1a0081d8",
] as const;

type NavKey = "inicio" | "cases" | "background" | "posts" | "contato";

function BreadcrumbTrail({
  activeKey,
  nav,
}: {
  activeKey: NavKey;
  nav: { inicio: string; cases: string; background: string; posts: string; contato: string };
}) {
  const items: { key: NavKey; label: string; href: string }[] = [
    { key: "inicio", label: nav.inicio, href: "/#inicio" },
    { key: "cases", label: nav.cases, href: "/#cases" },
    { key: "background", label: nav.background, href: "/#background" },
    { key: "posts", label: nav.posts, href: "/#posts" },
    { key: "contato", label: nav.contato, href: "/#contato" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px] leading-none tracking-[-0.03em] md:text-[19px]"
    >
      {items.map((item) => {
        const isActive = item.key === activeKey;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-3 transition ${
              isActive ? "font-medium text-accent" : "text-ink/70 hover:text-ink"
            }`}
          >
            <span>/</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function BackgroundExperienceCard({
  company,
  logoSrc,
  logoAlt,
  role,
  period,
  description,
  cta,
  delay,
}: {
  company: string;
  logoSrc: string;
  logoAlt: string;
  role: string;
  period: string;
  description: string;
  cta?: { href: string; label: string; question: string };
  delay: number;
}) {
  return (
    <Reveal className="max-w-[30rem]" delay={delay}>
      <article className="space-y-4">
        <Image
          src={publicPath(logoSrc)}
          alt={logoAlt}
          width={56}
          height={56}
          className="block h-12 w-12 select-none md:h-14 md:w-14"
          sizes="56px"
        />

        <div className="space-y-1">
          <h3 className="font-display text-[2rem] leading-[0.95] tracking-[-0.06em] text-ink md:text-[2.25rem]">
            {company}
          </h3>
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-ink/85">
            {role}
          </p>
          <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
            {period}
          </p>
        </div>

        <p className="max-w-[24rem] text-sm leading-6 text-ink/75 md:text-[15px] md:leading-7">
          {description}
        </p>

        {cta ? (
          <p className="text-sm leading-6 text-ink/75">
            {cta.question}{" "}
            <a
              href={cta.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent transition hover:opacity-80"
            >
              {cta.label}
            </a>
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}

function PostListItem({
  title,
  description,
  href,
  readMore,
  delay,
}: {
  title: string;
  description: string;
  href: string;
  readMore: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="max-w-[46rem]">
      <article className="space-y-3">
        <h3 className="font-sans text-[1.25rem] font-semibold leading-[1.32] tracking-[-0.04em] text-ink md:text-[1.35rem]">
          {title}
        </h3>
        <p className="text-[16px] leading-[1.56] tracking-[-0.01em] text-ink/75 md:text-[18px]">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-[16px] font-medium tracking-[-0.02em] text-ink transition hover:text-accent md:text-[17px]"
        >
          <span>{readMore}</span>
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

export function HomePageContent() {
  const { t } = useLanguage();

  const backgroundExperiences = backgroundStatic.map((s, i) => {
    const trans = t.background.experiences[i];
    return {
      company: s.company,
      logoSrc: s.logoSrc,
      logoAlt: s.logoAlt,
      role: trans.role,
      period: trans.period,
      description: trans.description,
      cta:
        "ctaHref" in s && trans.ctaQuestion
          ? { href: s.ctaHref, label: s.ctaLabel, question: trans.ctaQuestion }
          : undefined,
    };
  });

  return (
    <>
      <main className="space-y-16 pb-16 pt-8 md:space-y-24">
        <section id="inicio" className="page-shell">
          <div className="space-y-4">
            <HeroCarousel items={heroCarouselItems} />

            <div className="flex w-full flex-col gap-4">
              <p className="mx-auto max-w-4xl text-[11px] font-medium uppercase tracking-[0.34em] text-muted">
                {t.hero.imageCredit}{" "}
                <Link
                  href="https://benedictredgrove.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition hover:opacity-80"
                >
                  Benedict Redgrove
                </Link>
              </p>

              <div className="flex w-full items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mx-auto w-full max-w-4xl">
                    <BreadcrumbTrail activeKey="inicio" nav={t.nav} />
                  </div>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-20 w-full">
            <div className="mx-auto w-full max-w-4xl">
              <div className="max-w-3xl">
                <h1
                  className="font-display leading-[1.08] tracking-[-0.05em] text-ink"
                  style={{ fontSize: "32px", lineHeight: "1.08" }}
                >
                  {t.hero.greeting}
                </h1>
                <p className="mt-4 max-w-[40rem] text-[18px] leading-[1.48] tracking-[-0.01em] text-ink/85 md:text-[21px]">
                  {t.hero.description}
                </p>
              </div>
            </div>

            <Link
              href={media.curriculum.pdf}
              download={t.hero.cvFilename}
              className="group mt-10 inline-flex items-center gap-3 text-lg font-medium tracking-[-0.03em] text-ink transition hover:text-accent md:absolute md:bottom-0 md:right-0 md:mt-0"
            >
              <span>{t.hero.downloadCv}</span>
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
            <BreadcrumbTrail activeKey="background" nav={t.nav} />

            <p className="mt-12 max-w-[46rem] text-[18px] leading-[1.48] tracking-[-0.01em] text-ink/85 md:mt-14 md:text-[20px]">
              {t.background.intro}
            </p>

            <div className="mt-16 w-full space-y-14 md:mt-20 md:space-y-16">
              {backgroundExperiences.map((item, index) => (
                <BackgroundExperienceCard
                  key={item.company}
                  {...item}
                  delay={index * 90}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="posts" className="page-shell pt-14 md:pt-6">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
            <BreadcrumbTrail activeKey="posts" nav={t.nav} />

            <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
              {t.posts.items.map((item, index) => (
                <PostListItem
                  key={postHrefs[index]}
                  title={item.title}
                  description={item.description}
                  href={postHrefs[index]}
                  readMore={t.posts.readMore}
                  delay={index * 90}
                />
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
