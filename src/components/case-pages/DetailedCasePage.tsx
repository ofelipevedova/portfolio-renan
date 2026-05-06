import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { CaseEmailCta } from "@/components/case-pages/CaseEmailCta";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import type {
  CaseResultHighlight,
  DetailedCasePageData,
} from "@/data/case-pages/types";
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

function ResultsHighlights({
  highlights,
}: {
  highlights: CaseResultHighlight[];
}) {
  return (
    <Reveal className="mt-10">
      <section className="space-y-4">
        <SectionLabel>Resultados alcançados</SectionLabel>

        <div className="grid gap-4 md:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-[1.5rem] border border-black/10 bg-ink p-5 text-white md:p-6"
            >
              <p className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-0.08em] text-white">
                {highlight.value}
              </p>
              <p className="mt-3 max-w-[18rem] text-sm leading-6 text-white/70 md:text-[15px]">
                {highlight.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
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
  const afterProblemLayout = page.layout?.afterProblem ?? "grid";
  const implementationImagePlacement = page.layout?.implementationImage ?? "standalone";
  const [implementationIntro, ...implementationTail] = page.sections.implementation;

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

          {page.resultsHighlights?.length ? (
            <ResultsHighlights highlights={page.resultsHighlights} />
          ) : null}

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
            {afterProblemLayout === "single" ? (
              <Reveal>
                {page.images.pairTwo[0] ? (
                  <Image
                    src={publicPath(page.images.pairTwo[0].src)}
                    alt={page.images.pairTwo[0].alt}
                    width={page.images.pairTwo[0].width}
                    height={page.images.pairTwo[0].height}
                    quality={90}
                    className="block h-auto w-full"
                    sizes="(max-width: 1120px) 100vw, 1120px"
                  />
                ) : null}
              </Reveal>
            ) : afterProblemLayout === "featured" ? (
              <Reveal>
                <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                  {page.images.pairTwo.map((image, index) => (
                    <div
                      key={image.src}
                      className={`overflow-hidden border border-black/10 bg-[#f6f7fb] p-3 md:p-4 ${
                        index === 1 ? "lg:mt-14" : ""
                      }`}
                    >
                      <Image
                        src={publicPath(image.src)}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        quality={90}
                        className="block h-auto w-full"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : (
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
            )}
          </section>

          <section className="mt-[120px] space-y-4">
            <SectionLabel>Hipótese de solução</SectionLabel>
            <TextStack>
              {page.sections.hypothesis.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          {afterProblemLayout === "single" && page.images.pairTwo[1] ? (
            <section className="mt-[120px]">
              <Reveal>
                <Image
                  src={publicPath(page.images.pairTwo[1].src)}
                  alt={page.images.pairTwo[1].alt}
                  width={page.images.pairTwo[1].width}
                  height={page.images.pairTwo[1].height}
                  quality={90}
                  className="block h-auto w-full"
                  sizes="(max-width: 1120px) 100vw, 1120px"
                />
              </Reveal>
            </section>
          ) : null}

          {implementationImagePlacement === "standalone" ? (
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
          ) : null}

          <section className="mt-[120px] space-y-4">
            <SectionLabel>Como implementamos a solução</SectionLabel>
            {implementationImagePlacement === "inline" ? (
              <div className="max-w-[930px] space-y-4 text-[15px] leading-[1.72] tracking-[-0.01em] text-ink/70 md:text-[16px]">
                {implementationIntro ? <p>{implementationIntro}</p> : null}
                {implementationTail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <TextStack>
                {page.sections.implementation.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </TextStack>
            )}
          </section>

          {implementationImagePlacement === "inline" ? (
            <section className="mt-8">
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
          ) : null}

          {page.images.results ? (
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
          ) : null}

          <section className="mt-[120px] space-y-4">
            <SectionLabel>Aprendizados</SectionLabel>
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
