import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { Reveal } from "@/components/Reveal";
import { CaseEmailCta } from "@/components/case-pages/CaseEmailCta";
import { SiteFooter } from "@/components/SiteFooter";
import type { DetailedCasePageData } from "@/data/case-pages/types";
import { publicPath } from "@/lib/site-path";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="inline-flex items-center gap-2 text-[15px] font-medium leading-none tracking-[-0.02em] text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-[#0059ff]" />
      {children}
    </h2>
  );
}

function TextStack({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[930px] space-y-4 text-[15px] leading-[1.72] tracking-[-0.01em] text-ink/70 md:text-[16px]">
      {children}
    </div>
  );
}

function splitTitleIntoTwoLines(title: string) {
  const words = title.trim().split(/\s+/).filter(Boolean);

  if (words.length <= 1) {
    return [title, ""] as const;
  }

  let bestSplitIndex = 1;
  let smallestDifference = Number.POSITIVE_INFINITY;

  for (let index = 1; index < words.length; index += 1) {
    const firstLine = words.slice(0, index).join(" ");
    const secondLine = words.slice(index).join(" ");
    const difference = Math.abs(firstLine.length - secondLine.length);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      bestSplitIndex = index;
    }
  }

  return [
    words.slice(0, bestSplitIndex).join(" "),
    words.slice(bestSplitIndex).join(" "),
  ] as const;
}

function Breadcrumb({ breadcrumb }: { breadcrumb: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] leading-none tracking-[0.22em] text-ink/60 md:text-[11px]"
    >
      <Link href="/" className="inline-flex items-center gap-2 transition hover:text-ink">
        <span className="text-ink/20">/</span>
        <span>Início</span>
      </Link>
      <span aria-current="page" className="inline-flex items-center gap-2 text-ink/80">
        <span className="text-ink/20">/</span>
        <span>{breadcrumb}</span>
      </span>
    </nav>
  );
}

export function DetailedCasePage({ page }: { page: DetailedCasePageData }) {
  const [titleLineOne, titleLineTwo] = splitTitleIntoTwoLines(page.title);
  const problemLabel = page.problemLabel ?? "Qual era o meu desafio";

  return (
    <>
      <main className="pb-10 pt-5">
        <article id="top" className="mx-auto w-full max-w-[1120px] px-6 md:px-[22px]">
          <header>
            <Breadcrumb breadcrumb={page.breadcrumb} />

            <div className="mt-5 md:mt-6">
              <h1 className="max-w-[20ch] font-display text-[48px] leading-[0.94] tracking-[-0.07em] text-ink">
                <span className="block">{titleLineOne}</span>
                <span className="block">{titleLineTwo}</span>
              </h1>
            </div>
          </header>

          <Reveal className="mt-7">
            <Image
              src={publicPath(page.images.hero.src)}
              alt={page.images.hero.alt}
              width={page.images.hero.width}
              height={page.images.hero.height}
              priority
              quality={90}
              className="block h-auto w-full"
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </Reveal>

          <dl className="mt-7 grid gap-x-6 gap-y-8 border-y border-black/10 py-4 sm:grid-cols-2 md:grid-cols-4">
            {page.info.map((item) => (
              <div key={item.label} className="min-w-0">
                <dt className="text-[10px] uppercase tracking-[0.24em] text-ink/50">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[14px] leading-[1.4] tracking-[-0.01em] text-ink/80">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>

          <section className="mt-12 space-y-4">
            <SectionLabel>O cenário</SectionLabel>
            <TextStack>
              {page.sections.scenario.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          <section className="mt-[120px] space-y-6">
            <Reveal>
              <Image
                src={publicPath(page.images.scenario.src)}
                alt={page.images.scenario.alt}
                width={page.images.scenario.width}
                height={page.images.scenario.height}
                quality={90}
                className="block h-auto w-full"
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </Reveal>

            <Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {page.images.pairOne.map((image) => (
                  <Image
                    key={image.src}
                    src={publicPath(image.src)}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={90}
                    className="block h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ))}
              </div>
            </Reveal>
          </section>

          <section className="mt-[120px] space-y-4">
            <SectionLabel>{problemLabel}</SectionLabel>
            <TextStack>
              {page.sections.problem.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          <section className="mt-[120px] space-y-6">
            <Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {page.images.pairTwo.map((image) => (
                  <Image
                    key={image.src}
                    src={publicPath(image.src)}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={90}
                    className="block h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ))}
              </div>
            </Reveal>
          </section>

          <section className="mt-[120px] space-y-4">
            <SectionLabel>Hipótese de solução</SectionLabel>
            <TextStack>
              {page.sections.hypothesis.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          <section className="mt-[120px]">
            <Reveal>
              <Image
                src={publicPath(page.images.implementation.src)}
                alt={page.images.implementation.alt}
                width={page.images.implementation.width}
                height={page.images.implementation.height}
                quality={90}
                className="block h-auto w-full"
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </Reveal>
          </section>

          <section className="mt-[120px] space-y-4">
            <SectionLabel>Como implementamos a solução</SectionLabel>
            <TextStack>
              {page.sections.implementation.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          <section className="mt-[120px]">
            <Reveal>
              <Image
                src={publicPath(page.images.results.src)}
                alt={page.images.results.alt}
                width={page.images.results.width}
                height={page.images.results.height}
                quality={90}
                className="block h-auto w-full"
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </Reveal>
          </section>

          <section className="mt-[120px] space-y-4">
            <SectionLabel>E esses foram os resultados</SectionLabel>
            <TextStack>
              {page.sections.results.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          <CaseEmailCta label={page.cta.label} email={page.cta.email} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
