import Image from "next/image";

import { publicPath } from "@/lib/site-path";

export type HeroCarouselItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type HeroCarouselProps = {
  items: HeroCarouselItem[];
};

export function HeroCarousel({ items }: HeroCarouselProps) {
  const trackItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max items-start gap-8 animate-marquee"
        style={{ animationDuration: "72s" }}
      >
        {trackItems.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="shrink-0"
            aria-hidden={index >= items.length}
          >
            <Image
              src={publicPath(item.src)}
              alt={item.alt}
              width={item.width}
              height={item.height}
              priority={index === 0}
              quality={85}
              className="block h-[755px] w-auto max-w-none select-none"
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
