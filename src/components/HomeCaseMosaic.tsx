"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type PointerEvent } from "react";

import { Reveal } from "@/components/Reveal";
import type { PortfolioCase } from "@/data/cases";
import { publicPath } from "@/lib/site-path";

type HomeCaseMosaicProps = {
  items: PortfolioCase[];
};

function CaseMosaicCard({
  item,
  delay,
}: {
  item: PortfolioCase;
  delay: number;
}) {
  const displayTitle =
    item.slug === "website-builder-macle" ? "Construtor de sites Macle" : item.title;
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    });
  };

  useEffect(
    () => () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    },
    [],
  );

  return (
    <Reveal className="h-full" delay={delay}>
      <Link
        href={`/cases/${item.slug}`}
        className="group flex h-full flex-col overflow-hidden bg-transparent text-ink md:h-[500px] md:cursor-none"
        aria-label={`Abrir case ${displayTitle}`}
        onPointerEnter={handlePointerMove}
        onPointerMove={handlePointerMove}
      >
        <div className="relative aspect-[1069/597] w-full overflow-hidden md:min-h-0 md:flex-1 md:aspect-auto">
          <Image
            src={publicPath(item.cover.src)}
            alt={item.cover.alt}
            fill
            quality={90}
            className="object-cover transition-transform duration-500 ease-out will-change-transform transform-gpu group-hover:scale-[1.02]"
            style={{
              objectPosition: item.cover.objectPosition ?? "center center",
            }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div
            ref={cursorRef}
            className="pointer-events-none absolute left-0 top-0 z-20 hidden opacity-0 transition-opacity duration-150 md:block group-hover:opacity-100"
            style={{
              transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
              willChange: "transform",
            }}
          >
            <div
              className="h-[72px] w-[72px] animate-[spin_14s_linear_infinite] rounded-full p-[2px] motion-reduce:animate-none"
              style={{
                background:
                  "conic-gradient(from 0deg, rgb(255,0,0), rgb(255,127,0), rgb(255,255,0), rgb(0,255,0), rgb(0,128,255), rgb(75,0,130), rgb(238,0,255), rgb(255,0,0))",
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-ink">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                >
                  <path d="M8 16L16 8" />
                  <path d="M10 8h6v6" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <div className="px-1 pt-4 md:px-0 md:pt-5">
          <div className="flex w-full items-baseline justify-between gap-4">
            <h3 className="min-w-0 font-display text-2xl leading-none tracking-[-0.04em] text-ink">
              {displayTitle}
            </h3>
            <p className="shrink-0 font-display text-[20px] leading-none tracking-[-0.04em] text-muted">
              {item.year}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function HomeCaseMosaic({ items }: HomeCaseMosaicProps) {
  const rows = [
    {
      items: items.slice(0, 2),
    },
    {
      items: items.slice(2, 4),
    },
  ] as const;

  return (
    <div className="space-y-4 md:space-y-6">
      {rows.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="grid gap-4 md:h-[500px] md:grid-cols-2">
          {row.items.map((item, itemIndex) => (
            <CaseMosaicCard
              key={item.slug}
              item={item}
              delay={(rowIndex * 2 + itemIndex) * 90}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
