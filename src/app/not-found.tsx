import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <>
      <main className="page-shell pb-16 pt-8">
        <div className="surface-panel p-8 md:p-10 lg:p-12">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.06em] text-ink md:text-6xl">
            Case não encontrado.
          </h1>
          <p className="section-copy mt-5">
            Volte para a lista de cases ou para a home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="button-primary">
              Ir para home
            </Link>
            <Link href="/cases" className="button-secondary">
              Ver cases
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
