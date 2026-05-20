"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { CaseEmailCta } from "@/components/case-pages/CaseEmailCta";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { evitarConstruirProdutoErradoCasePage as page } from "@/data/case-pages/evitar-construir-produto-errado";

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

export function EvitarConstruirProdutoErradoCasePage() {
  return (
    <>
      <main className="pb-10 pt-5">
        <article id="top" className="mx-auto w-full max-w-[1120px] px-6 md:px-[22px]">

          {/* Header */}
          <header>
            <Breadcrumb />
            <div className="mt-5 md:mt-6">
              <h1 className="max-w-[18ch] font-display text-[48px] leading-[0.94] tracking-[-0.07em] text-ink md:text-[56px]">
                <span className="block">Evitar construir</span>
                <span className="block">o produto errado</span>
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
              <p className="mt-4 max-w-[26ch] font-display text-[clamp(1.9rem,4.5vw,3.4rem)] leading-[1.02] tracking-[-0.06em] text-ink">
                {page.centralQuestion}
              </p>
              <p className="mt-4 max-w-[48ch] text-[14px] leading-[1.7] text-ink/55 md:text-[15px]">
                {page.questionContext}
              </p>
            </div>
          </Reveal>

          {/* Como investigamos */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>Como investigamos</SectionLabel>
            <TextStack>
              <p>
                Para responder com segurança, o discovery foi estruturado em duas frentes
                simultâneas: uma análise de mercado e uma pesquisa direta com os usuários do
                produto interno.
              </p>
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

          {/* O que encontramos */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>O que encontramos</SectionLabel>
            <TextStack>
              <p>
                As duas frentes convergiram para a mesma leitura. O mercado e o comportamento
                dos usuários apontavam na mesma direção — e o quadro não deixava espaço para
                interpretação otimista.
              </p>
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
                        {insight.description}
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
                <p className="mt-6 max-w-[32ch] font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.02] tracking-[-0.06em] text-white text-balance">
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
                <p className="font-display text-[clamp(2.2rem,5.5vw,4.8rem)] leading-[0.94] tracking-[-0.08em] text-ink">
                  {page.decision.headline}
                </p>
                <p className="max-w-[38ch] shrink-0 text-[14px] leading-[1.72] text-ink/55 md:text-[15px]">
                  {page.decision.explanation}
                </p>
              </div>
            </Reveal>
          </section>

          {/* O que foi evitado */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>O que foi evitado</SectionLabel>
            <TextStack>
              <p>
                Não seguir adiante não foi uma falha — foi a entrega. Cada item abaixo representa
                um risco concreto que o discovery tornou visível antes de virar custo.
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

          {/* O que veio depois */}
          <section className="mt-[100px] space-y-6">
            <SectionLabel>O que veio depois</SectionLabel>
            <TextStack>
              <p>{page.whatCameNext.intro}</p>
            </TextStack>

            <Reveal className="mt-8">
              <div className="grid gap-px border border-black/10 bg-black/10 lg:grid-cols-[1.15fr_0.85fr]">
                <Link
                  href={`/cases/${page.whatCameNext.projectSlug}`}
                  className="group flex flex-col justify-between gap-10 bg-white p-8 transition hover:bg-[#f6f8ff] md:p-10"
                >
                  <div className="space-y-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-accent/80">
                      Próximo projeto
                    </p>
                    <p className="font-display text-[clamp(1.5rem,3.5vw,2.6rem)] leading-[1.02] tracking-[-0.06em] text-ink transition-colors group-hover:text-accent">
                      {page.whatCameNext.project}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 border border-black/10 px-4 py-2 text-[12px] font-medium tracking-[-0.01em] text-ink/60 transition group-hover:border-accent/30 group-hover:text-accent">
                    Ver case
                    <svg
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </Link>

                <div className="flex flex-col gap-px bg-black/10">
                  {page.whatCameNext.outcomes.map((outcome, index) => (
                    <div
                      key={outcome}
                      className="flex items-start gap-4 bg-white p-5"
                    >
                      <span className="mt-0.5 shrink-0 text-[10px] font-semibold tabular-nums tracking-[0.2em] text-ink/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14px] leading-[1.6] text-ink/70">{outcome}</p>
                    </div>
                  ))}
                </div>
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
