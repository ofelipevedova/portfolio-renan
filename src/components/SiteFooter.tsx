"use client";

import Link from "next/link";

import { useLanguage } from "@/contexts/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="page-shell pb-8 pt-10 md:pt-12">
      <div className="border-t border-black/10 py-6">
        <div className="grid gap-4 text-[10px] uppercase tracking-[0.18em] text-muted md:grid-cols-[1fr_1fr] md:items-center">
          <p className="text-left">© {year} RENAN FELIPE VEDOVA</p>
          <p className="text-left md:text-right">{t.footer.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
