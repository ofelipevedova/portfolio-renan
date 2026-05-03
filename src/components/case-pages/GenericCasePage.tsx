import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import type { PortfolioCase } from "@/data/cases";
import { publicPath } from "@/lib/site-path";

type GenericCasePageProps = {
  item: PortfolioCase;
};

export function GenericCasePage({ item }: GenericCasePageProps) {
  return (
    <>
      <main className="space-y-12 pb-10 pt-8 md:space-y-16">
        <section className="page-shell">
          <div className="surface-panel overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <Reveal className="flex flex-col justify-between gap-10 p-8 md:p-12 lg:p-14">
                <div className="max-w-xl">
                  <p className="eyebrow">Case / {item.year}</p>
                  <h1 className="mt-4 max-w-[12ch] font-display text-4xl leading-[0.96] tracking-[-0.06em] text-ink md:text-6xl">
                    {item.title}
                  </h1>
                  <p className="section-copy mt-5">{item.summary}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {item.metrics.map((metric, index) => (
                    <Reveal key={metric.label} delay={index * 80}>
                      <div className="rounded-2xl border border-black/10 bg-white p-4">
                        <p className="text-2xl font-display leading-none tracking-[-0.04em] text-ink">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-[0.24em] text-muted">
                          {metric.label}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/cases" className="button-primary">
                    Voltar para cases
                  </Link>
                  <Link href="/#contato" className="button-secondary">
                    Abrir contato
                  </Link>
                </div>

                <div className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5">
                  <p className="eyebrow">Resumo</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.overview}</p>
                </div>
              </Reveal>

              <Reveal className="relative min-h-[32rem] bg-white lg:min-h-full">
                <Image
                  src={publicPath(item.cover.src)}
                  alt={item.cover.alt}
                  fill
                  priority
                  quality={90}
                  className="object-cover transform-gpu"
                  style={{ objectPosition: item.cover.objectPosition ?? "center center" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="page-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="surface-panel p-8 md:p-10">
            <p className="eyebrow">Direção</p>
            <h2 className="section-title mt-4 text-3xl md:text-4xl">
              Seções pensadas para mostrar problema, solução e ganho.
            </h2>
            <div className="mt-8 space-y-5">
              {item.sections.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[24px] border border-black/10 bg-white p-5"
                >
                  <h3 className="font-display text-xl tracking-[-0.03em] text-ink">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{section.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="surface-panel p-8 md:p-10">
            <p className="eyebrow">Resultado visual</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {item.metrics.map((metric) => (
                <div
                  key={`${item.slug}-${metric.label}-result`}
                  className="rounded-[24px] border border-black/10 bg-white p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[24px] border border-black/10 bg-white p-5">
              <p className="text-sm leading-7 text-muted">
                A leitura da página continua limpa, com espaço para ampliar as
                imagens ou incluir novas camadas de contexto conforme o case
                evoluir.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="page-shell">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Galeria</p>
              <h2 className="font-display text-2xl tracking-[-0.04em] text-ink md:text-3xl">
                Imagens que entram em cena conforme a página sobe.
              </h2>
            </div>
            <p className="section-copy md:max-w-xl">
              Cada imagem usa o mesmo ritmo de aparição suave para manter a
              leitura editorial.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {item.gallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 90}>
                <div className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white aspect-[16/10]">
                  <Image
                    src={publicPath(image.src)}
                    alt={image.alt}
                    fill
                    quality={90}
                    className="object-cover transition duration-500 group-hover:scale-[1.03] transform-gpu"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="pill bg-white text-ink">{item.category}</span>
                    <p className="mt-2 max-w-[18rem] text-sm font-medium leading-6 text-white">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="page-shell">
          <div className="surface-panel p-8 md:p-10">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Logos</p>
                <h2 className="font-display text-2xl tracking-[-0.04em] text-ink md:text-3xl">
                  Marcas e identidades ligadas ao projeto.
                </h2>
              </div>
              <p className="section-copy md:max-w-xl">
                O bloco de logos entra como camada de confiança e contexto para
                o case.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.logos.map((logo, index) => (
                <Reveal key={logo.label} delay={index * 80}>
                  <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white">
                    <div className="relative aspect-square">
                      <Image
                        src={publicPath(logo.src)}
                        alt={logo.alt}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    </div>
                    <div className="border-t border-black/10 px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted">
                        {logo.label}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <ContactSection
          title="O último bloco também pode carregar a sua presença."
          description="A página de case termina com o retrato final, o que ajuda a amarrar a história do projeto com a pessoa que o construiu."
        />
      </main>
      <SiteFooter />
    </>
  );
}
