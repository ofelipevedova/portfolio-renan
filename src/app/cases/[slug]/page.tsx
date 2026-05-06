import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GenericCasePage } from "@/components/case-pages/GenericCasePage";
import { MacleErpCasePage } from "@/components/case-pages/MacleErpCasePage";
import { PortalAnaliseDocumentosCasePage } from "@/components/case-pages/PortalAnaliseDocumentosCasePage";
import { PortalValidadorDocumentosCasePage } from "@/components/case-pages/PortalValidadorDocumentosCasePage";
import { PegaAReceitaCasePage } from "@/components/case-pages/PegaAReceitaCasePage";
import { WebsiteBuilderMacleCasePage } from "@/components/case-pages/WebsiteBuilderMacleCasePage";
import { cases } from "@/data/cases";
import { portalAnaliseDocumentosCasePage } from "@/data/case-pages/portal-analise-documentos-por-ai";
import { portalValidadorDocumentosCasePage } from "@/data/case-pages/portal-validador-de-documentos";
import { pegaAReceitaCasePage } from "@/data/case-pages/pega-a-receita";
import { macleErpCasePage } from "@/data/case-pages/macle-erp";
import { websiteBuilderMacleCasePage } from "@/data/case-pages/website-builder-macle";
import { publicUrl } from "@/lib/site-path";

const caseSlugAliases = {
  "construtor-de-sites-macle": "website-builder-macle",
} as const;

const detailedCasePages = [
  macleErpCasePage,
  portalAnaliseDocumentosCasePage,
  portalValidadorDocumentosCasePage,
  pegaAReceitaCasePage,
  websiteBuilderMacleCasePage,
] as const;

const detailedCasePageBySlug = new Map(
  detailedCasePages.map((page) => [page.slug, page] as const),
);

function resolveCanonicalSlug(slug: string) {
  return caseSlugAliases[slug as keyof typeof caseSlugAliases] ?? slug;
}

function getDetailedCasePage(slug: string) {
  return detailedCasePageBySlug.get(slug) ?? null;
}

type CasePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = new Set<string>(cases.map((item) => item.slug));

  for (const [alias, canonical] of Object.entries(caseSlugAliases)) {
    if (slugs.has(canonical)) {
      slugs.add(alias);
    }
  }

  return Array.from(slugs).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveCanonicalSlug(slug);
  const detailedCasePage = getDetailedCasePage(canonicalSlug);

  if (detailedCasePage) {
    const metadata: Metadata = {
      title: detailedCasePage.metaTitle,
      description: detailedCasePage.metaDescription,
    };

    if (slug !== canonicalSlug) {
      metadata.alternates = {
        canonical: publicUrl(`/cases/${canonicalSlug}/`),
      };
    }

    return metadata;
  }

  const item = cases.find((caseItem) => caseItem.slug === canonicalSlug);

  if (!item) {
    return {
      title: "Case não encontrado",
    };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const canonicalSlug = resolveCanonicalSlug(slug);

  if (canonicalSlug === macleErpCasePage.slug) {
    return <MacleErpCasePage />;
  }

  if (canonicalSlug === portalAnaliseDocumentosCasePage.slug) {
    return <PortalAnaliseDocumentosCasePage />;
  }

  if (canonicalSlug === portalValidadorDocumentosCasePage.slug) {
    return <PortalValidadorDocumentosCasePage />;
  }

  if (canonicalSlug === pegaAReceitaCasePage.slug) {
    return <PegaAReceitaCasePage />;
  }

  if (canonicalSlug === websiteBuilderMacleCasePage.slug) {
    return <WebsiteBuilderMacleCasePage />;
  }

  const item = cases.find((caseItem) => caseItem.slug === canonicalSlug);

  if (!item) {
    notFound();
  }

  return <GenericCasePage item={item} />;
}
