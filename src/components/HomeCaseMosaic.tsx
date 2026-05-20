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
  id,
}: {
  item: PortfolioCase;
  delay: number;
  id?: string;
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
        id={id}
        href={`/cases/${item.slug}`}
        className="group relative block w-full overflow-hidden md:cursor-none"
        aria-label={`Abrir case ${displayTitle}`}
        onPointerEnter={handlePointerMove}
        onPointerMove={handlePointerMove}
      >
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={item.cover.scale ? { transform: `scale(${item.cover.scale})` } : undefined}
          >
            <Image
              src={publicPath(item.cover.src)}
              alt={item.cover.alt}
              fill
              unoptimized={item.cover.src.endsWith(".svg")}
              quality={90}
              className="object-cover"
              style={{
                objectPosition: item.cover.objectPosition ?? "center center",
              }}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>

          {/* Title overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 translate-y-1 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="font-display text-xl leading-none tracking-[-0.04em] text-white">
              {displayTitle}
            </h3>
          </div>

          {/* Custom cursor */}
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
      </Link>
    </Reveal>
  );
}

export function HomeCaseMosaic({ items }: HomeCaseMosaicProps) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {items.map((item, index) => (
        <CaseMosaicCard
          key={item.slug}
          item={item}
          delay={index * 90}
          id={index === 0 ? "cases" : undefined}
        />
      ))}
    </div>
  );
}
