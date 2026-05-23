"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full bg-black/8 p-1">
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-150 ${
          language === "pt" ? "bg-ink text-bg" : "text-ink/50 hover:text-ink/80"
        }`}
        aria-pressed={language === "pt"}
      >
        Br
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-150 ${
          language === "en" ? "bg-ink text-bg" : "text-ink/50 hover:text-ink/80"
        }`}
        aria-pressed={language === "en"}
      >
        en
      </button>
    </div>
  );
}
