export type CaseImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseResultHighlight = {
  value: string;
  label: string;
};

export type CasePageFooter = {
  email: string;
  address: string;
  social: {
    label: string;
    href: string;
  }[];
};

export type DetailedCasePageLayout = {
  afterProblem?: "grid" | "featured" | "single";
  implementationImage?: "standalone" | "inline";
};

export type DetailedCasePageData = {
  slug: string;
  breadcrumb: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  problemLabel?: string;
  info: {
    label: string;
    value: string;
  }[];
  sections: {
    scenario: string[];
    problem: string[];
    hypothesis: string[];
    implementation: string[];
    results: string[];
  };
  resultsHighlights?: CaseResultHighlight[];
  layout?: DetailedCasePageLayout;
  images: {
    hero: CaseImageAsset;
    scenario: CaseImageAsset;
    pairOne: CaseImageAsset[];
    pairTwo: CaseImageAsset[];
    implementation: CaseImageAsset;
    results?: CaseImageAsset;
  };
  cta: {
    label: string;
    email: string;
  };
  footer?: CasePageFooter;
};
