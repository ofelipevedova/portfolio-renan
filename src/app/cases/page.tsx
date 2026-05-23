import type { Metadata } from "next";

import { CaseCard } from "@/components/CaseCard";
import { ContactSection } from "@/components/ContactSection";
import { LoopCarousel } from "@/components/LoopCarousel";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { casesByDisplayOrder } from "@/data/cases";
import { homeCarouselItems } from "@/data/home-carousel";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cases",
  description: `Arquivo de cases do ${site.name}, com páginas detalhadas e imagens de apresentação.`,
};

export default function CasesPage() {
  return (
    <>
      <main className="space-y-12 pb-10 pt-8 md:space-y-16">
        <section className="page-shell">
          <div className="surface-panel p-8 md:p-10 lg:p-12">
            <Reveal className="max-w-4xl">
              <p className="eyebrow">Arquivo</p>
              <h1 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.06em] text-ink md:text-6xl">
                Todos os cases preparados como páginas independentes.
              </h1>
              <p className="section-copy mt-5">
                A estrutura organiza capa, imagens, logos e fechamento para
                cada projeto, deixando o portfólio pronto para apresentar os
                trabalhos em detalhe.
              </p>
            </Reveal>
          </div>
        </section>

        <LoopCarousel
          eyebrow="Sequência"
          title="As imagens também continuam em loop no arquivo dos cases."
          description="A mesma linguagem visual da home se repete para manter consistência entre as páginas."
          items={homeCarouselItems}
          reverse
        />

        <section className="page-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {casesByDisplayOrder.map((item, index) => (
              <CaseCard key={item.slug} item={item} index={index} compact />
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
