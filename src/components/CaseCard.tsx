import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import type { PortfolioCase } from "@/data/cases";
import { publicPath } from "@/lib/site-path";

type CaseCardProps = {
  item: PortfolioCase;
  index: number;
  compact?: boolean;
};

export function CaseCard({ item, index, compact = false }: CaseCardProps) {
  return (
    <Reveal className="h-full">
      <Link
        href={`/cases/${item.slug}`}
        className="group flex h-full flex-col overflow-hidden bg-white text-ink transition duration-300 hover:-translate-y-1 md:h-[500px]"
      >
        <div
          className={`relative overflow-hidden ${
            compact ? "aspect-[4/3]" : "aspect-[16/10]"
          } md:h-[300px] md:aspect-auto`}
        >
          <Image
            src={publicPath(item.cover.src)}
            alt={item.cover.alt}
            fill
            priority={index === 0}
            quality={90}
            className="object-cover transition-transform duration-500 ease-out will-change-transform transform-gpu group-hover:scale-[1.025]"
            style={{ objectPosition: item.cover.objectPosition ?? "center center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="pill bg-white text-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
          <div>
            <div className="flex w-full items-baseline justify-between gap-4">
              <h3 className="min-w-0 font-display text-2xl leading-none tracking-[-0.04em] text-ink">
                {item.title}
              </h3>
              <p className="shrink-0 font-display text-[20px] leading-none tracking-[-0.04em] text-muted">
                {item.year}
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {item.metrics.slice(0, 3).map((metric) => (
              <span key={`${item.slug}-${metric.label}`} className="card-tag">
                {metric.value}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
