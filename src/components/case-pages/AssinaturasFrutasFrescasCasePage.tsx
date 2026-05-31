"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { JSX } from "react";

import { CaseEmailCta } from "@/components/case-pages/CaseEmailCta";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { assinaturasFrutasFrescasCasePage as page } from "@/data/case-pages/assinaturas-frutas-frescas";

function Breadcrumb() {
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
        <span>{page.breadcrumb}</span>
      </span>
    </nav>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="inline-flex items-center gap-2 text-[15px] font-medium leading-none tracking-[-0.02em] text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </h2>
  );
}

function TextStack({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[860px] space-y-4 text-[15px] leading-[1.72] tracking-[-0.01em] text-ink/70 md:text-[16px]">
      {children}
    </div>
  );
}

function Abbr({ term, title }: { term: string; title: string }) {
  return (
    <span className="group/abbr relative inline-block">
      <span className="cursor-default text-accent underline decoration-dotted underline-offset-2">
        {term}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-ink px-3 py-1.5 text-[11px] leading-snug text-white opacity-0 transition-opacity duration-150 group-hover/abbr:opacity-100">
        {title}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink"
        />
      </span>
    </span>
  );
}

function withAbbreviations(text: string): JSX.Element {
  const abbreviations: Record<string, string> = {
    FLV: "Frutas, Legumes e Verduras",
  };

  const pattern = new RegExp(`\\b(${Object.keys(abbreviations).join("|")})\\b`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) =>
        abbreviations[part] ? (
          <Abbr key={i} term={part} title={abbreviations[part]} />
        ) : (
          part
        ),
      )}
    </>
  );
}

export function AssinaturasFrutasFrescasCasePage() {
  return (
    <>
      <main className="pb-10 pt-5">
        <article id="top" className="mx-auto w-full max-w-[1120px] px-6 md:px-[22px]">

          {/* Header */}
          <header>
            <Breadcrumb />
            <div className="mt-5 md:mt-6">
              <h1 className="max-w-[22ch] font-display text-[48px] leading-[0.94] tracking-[-0.07em] text-ink md:text-[56px]">
                <span className="block">Reimaginando a</span>
                <span className="block">economia da recorrência</span>
              </h1>
            </div>
          </header>

          {/* Meta strip */}
          <Reveal className="mt-7">
            <dl className="grid gap-x-6 gap-y-8 border-y border-black/10 py-4 sm:grid-cols-2 md:grid-cols-4">
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
          </Reveal>

          {/* Cenário */}
          <section className="mt-12 space-y-4">
            <SectionLabel>O cenário</SectionLabel>
            <TextStack>
              {page.scenario.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </TextStack>
          </section>

          {/* A questão central */}
          <Reveal className="mt-[80px]">
            <div className="border-l-[3px] border-accent py-2 pl-8 md:pl-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent/80">
                A questão estratégica
              </p>
              <p className="mt-4 max-w-[30ch] font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.02] tracking-[-0.06em] text-ink">
                {page.centralQuestion}
              </p>
              <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.7] text-ink/55 md:text-[15px]">
                {page.questionContext}
              </p>
            </div>
          </Reveal>

          <section className="mt-[60px] space-y-6">
            <SectionLabel>Como investigamos</SectionLabel>
            <TextStack>
              <p>{page.investigationIntro}</p>
            </TextStack>

            <Reveal className="mt-8">
              <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
                {[page.methods.market, page.methods.users].map((method) => (
                  <div key={method.title} className="flex flex-col gap-6 bg-white p-6 md:p-8">
                    <div className="space-y-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent/80">
                        Método
                      </p>
                      <h3 className="font-display text-[1.6rem] leading-[1.0] tracking-[-0.05em] text-ink md:text-[1.9rem]">
                        {method.title}
                      </h3>
                      <p className="text-[14px] leading-[1.7] text-ink/60 md:text-[15px]">
                        {method.description}
                      </p>
                    </div>

                    <ul className="divide-y divide-black/[0.07]">
                      {method.steps.map((step, index) => (
                        <li key={step} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                          <span className="mt-0.5 shrink-0 text-[10px] font-semibold tabular-nums tracking-[0.2em] text-ink/30">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-[14px] leading-[1.6] text-ink/70">{step}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="mt-[80px] space-y-6">
            <SectionLabel>Descobertas da pesquisa</SectionLabel>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {page.researchFindings.map((finding) => (
                <div key={finding.label} className="border border-black/10 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50">
                    {finding.label}
                  </p>
                  <p className="mt-4 text-[2rem] font-display leading-none tracking-[-0.05em] text-ink">
                    {finding.value}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.7] text-ink/70">
                    {finding.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[80px] space-y-6">
            <SectionLabel>Problema → Solução → Impacto</SectionLabel>
            <div className="grid gap-4 lg:grid-cols-3">
              {page.impactMap.map((item, index) => (
                <div key={item.problem} className="border border-black/10 bg-black/5 p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ink/60">
                    Problema {index + 1}
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-tight text-ink">
                    {withAbbreviations(item.problem)}
                  </p>
                  <div className="mt-5 space-y-4 text-[14px] leading-[1.7] text-ink/70">
                    <p>
                      <span className="font-semibold text-ink">Solução:</span> {item.decision}
                    </p>
                    <p>
                      <span className="font-semibold text-ink">Impacto esperado:</span> {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-[100px] space-y-6">
            <SectionLabel>O que encontramos</SectionLabel>
            <TextStack>
              <p>{page.findingsIntro}</p>
            </TextStack>

            <Reveal className="mt-8">
              <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2">
                {page.insights.map((insight, index) => (
                  <div key={insight.label} className="flex flex-col gap-4 bg-white p-6">
                    <span className="text-[10px] font-semibold tabular-nums tracking-[0.28em] text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <p className="font-display text-[1.25rem] leading-[1.1] tracking-[-0.04em] text-ink">
                        {insight.label}
                      </p>
                      <p className="text-[13px] leading-[1.65] text-ink/60">
                        {withAbbreviations(insight.description)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Key insight */}
          <Reveal className="mt-10">
            <div className="relative overflow-hidden bg-ink p-8 md:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 85% 15%, rgba(63,108,255,0.3) 0%, transparent 50%), radial-gradient(circle at 10% 85%, rgba(255,255,255,0.05) 0%, transparent 40%)",
                }}
              />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/40">
                  O insight decisivo
                </p>
                <p className="mt-6 max-w-[34ch] font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.02] tracking-[-0.06em] text-white text-balance">
                  &ldquo;{page.keyInsight}&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* A decisão */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>A decisão</SectionLabel>

            <Reveal>
              <div className="flex flex-col gap-6 border-t border-black/10 pt-6 md:flex-row md:items-end md:justify-between">
                <p className="font-display text-[clamp(1.8rem,4vw,3.8rem)] leading-[1.02] tracking-[-0.08em] text-ink">
                  {page.decision.headline}
                </p>
                <p className="max-w-[38ch] shrink-0 text-[14px] leading-[1.72] text-ink/55 md:text-[15px]">
                  {page.decision.explanation}
                </p>
              </div>
            </Reveal>
          </section>

          {/* A nova arquitetura */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>A nova arquitetura de produto</SectionLabel>
            <TextStack>
              <p>
                Com o plano mensal eliminado, a estrutura foi redesenhada em torno do comportamento
                real de consumo, abrindo espaço para um diferencial competitivo que o modelo
                original não contemplava.
              </p>
            </TextStack>

            <Reveal className="mt-8">
              <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">
                {page.architecture.map((tier, index) => (
                  <div key={tier.label} className="flex flex-col gap-5 bg-white p-6 md:p-8">
                    <span className="text-[10px] font-semibold tabular-nums tracking-[0.28em] text-ink/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="space-y-2">
                      <p className="font-display text-[1.4rem] leading-[1.05] tracking-[-0.05em] text-ink">
                        {tier.label}
                      </p>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-accent/80">
                        {tier.frequency}
                      </span>
                    </div>
                    <p className="text-[13px] leading-[1.7] text-ink/60">
                      {tier.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* O que foi evitado */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>O que foi evitado</SectionLabel>
            <TextStack>
              <p>
                Não lançar o plano mensal não foi uma omissão: foi a entrega. Cada item abaixo
                representa um risco concreto que o discovery tornou visível antes de virar custo.
              </p>
            </TextStack>

            <Reveal className="mt-8">
              <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
                {page.avoided.map((item) => (
                  <div key={item.label} className="bg-ink p-5 text-white md:p-6">
                    <p className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.08em] text-white">
                      {item.value}
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.5] text-white/55 md:text-[14px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Reflexão */}
          <section className="mt-[100px] space-y-4">
            <SectionLabel>Reflexão</SectionLabel>
            <TextStack>
              <p className="font-display text-[clamp(1.4rem,3vw,2rem)] leading-[1.2] tracking-[-0.04em] text-ink/80 md:text-[1.8rem]">
                {page.takeaway}
              </p>
            </TextStack>
          </section>

          <CaseEmailCta label={page.cta.label} email={page.cta.email} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
