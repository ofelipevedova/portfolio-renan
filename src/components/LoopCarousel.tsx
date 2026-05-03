import Image from "next/image";

import type { CarouselItem } from "@/data/home-carousel";
import { publicPath } from "@/lib/site-path";

type LoopCarouselProps = {
  items: CarouselItem[];
  eyebrow: string;
  title: string;
  description: string;
  reverse?: boolean;
};

export function LoopCarousel({
  items,
  eyebrow,
  title,
  description,
  reverse = false,
}: LoopCarouselProps) {
  const trackItems = [...items, ...items];

  return (
    <section className="page-shell">
      <div className="surface-panel overflow-hidden p-4 sm:p-6">
        <div className="flex flex-col gap-4 px-2 pb-5 md:flex-row md:items-end md:justify-between md:px-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-[-0.05em] text-ink md:text-4xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted md:text-base">
            {description}
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className={`flex w-max items-start gap-5 ${
              reverse ? "animate-marquee-reverse" : "animate-marquee"
            }`}
          >
            {trackItems.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className={`group relative shrink-0 overflow-hidden rounded-[28px] border border-black/10 bg-white ${item.className}`}
                aria-hidden={index >= items.length}
              >
                <Image
                  src={publicPath(item.src)}
                  alt={item.alt}
                  fill
                  quality={85}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 85vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="pill bg-white text-ink">{item.label}</span>
                  <p className="mt-2 max-w-[16rem] text-sm font-medium leading-6 text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
