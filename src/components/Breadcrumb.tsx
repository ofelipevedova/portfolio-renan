"use client";

import Link from "next/link";

export type NavKey = "inicio" | "cases" | "background" | "posts" | "contato";

type Nav = {
  inicio: string;
  cases: string;
  background: string;
  posts: string;
  contato: string;
};

const NAV_HREF: Record<NavKey, string> = {
  inicio: "/#inicio",
  cases: "/#cases",
  background: "/#background",
  posts: "/#posts",
  contato: "/#contato",
};

const NAV_ORDER: NavKey[] = ["inicio", "cases", "background", "posts", "contato"];

export function Breadcrumb({ activeKey, nav }: { activeKey: NavKey; nav: Nav }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px] leading-none tracking-[-0.03em] md:text-[19px]"
    >
      {NAV_ORDER.map((key) => {
        const isActive = key === activeKey;
        return (
          <Link
            key={key}
            href={NAV_HREF[key]}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-3 transition ${
              isActive ? "font-medium text-accent" : "text-ink/70 hover:text-ink"
            }`}
          >
            <span>/</span>
            <span>{nav[key]}</span>
          </Link>
        );
      })}
    </nav>
  );
}
