"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { site } from "@/data/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { media } from "@/lib/media";
import { publicPath } from "@/lib/site-path";

type NavKey = "inicio" | "cases" | "background" | "posts" | "contato";

const contactEmail = site.contactEmail;

const contactLinks = [
  {
    key: "linkedin" as const,
    label: "Linkedin",
    href: "https://br.linkedin.com/in/renanfelipevedova-ux-designer",
  },
  {
    key: "medium" as const,
    label: "Medium",
    href: "https://medium.com/@felipevedova",
  },
  {
    key: "vulpistudio" as const,
    label: "vulpistudio",
    href: "https://vulpistudio.com",
  },
];

function ContactBreadcrumbTrail({
  nav,
}: {
  nav: { inicio: string; cases: string; background: string; posts: string; contato: string };
}) {
  const items: { key: NavKey; label: string; href: string }[] = [
    { key: "inicio", label: nav.inicio, href: "/#inicio" },
    { key: "cases", label: nav.cases, href: "/#cases" },
    { key: "background", label: nav.background, href: "/#background" },
    { key: "posts", label: nav.posts, href: "/#posts" },
    { key: "contato", label: nav.contato, href: "/#contato" },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px] leading-none tracking-[-0.03em] md:text-[19px]"
    >
      {items.map((item) => {
        const isActive = item.key === "contato";
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex items-center gap-3 transition ${
              isActive ? "font-medium text-accent" : "text-ink/70 hover:text-ink"
            }`}
          >
            <span>/</span>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M7 17L17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}

function CopyToast({ message }: { message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] tracking-[-0.02em] text-ink"
    >
      {message}
    </div>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  const { copied: toastVisible, copy: handleCopyEmail } = useCopyToClipboard();

  const curriculumHref = publicPath(media.curriculum.pdf);
  const curriculumFilename = t.contact.curriculumLabel === "Resume"
    ? "Renan F. Vedova - Resume.pdf"
    : "Renan F. Vedova - Currículo.pdf";

  return (
    <section id="contato" className="page-shell pt-14 md:pt-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
        <ContactBreadcrumbTrail nav={t.nav} />

        <Reveal className="mt-16 grid w-full gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative aspect-[381/428] w-full max-w-[23rem] overflow-hidden bg-white">
            <Image
              src={publicPath(media.people.renanPortrait)}
              alt={t.contact.portraitAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>

          <div className="flex h-full min-h-[24rem] flex-col">
            <div className="flex max-w-[32rem] items-start gap-4">
              <span className="mt-1 text-3xl leading-none text-ink">&ldquo;</span>
              <p className="text-[18px] leading-[1.52] tracking-[-0.01em] text-ink/85 md:text-[20px]">
                {t.contact.title}
              </p>
            </div>

            <div className="mt-14">
              <p className="text-[18px] leading-7 tracking-[-0.02em] text-ink/80">
                {t.contact.getInTouch}
              </p>
              <button
                type="button"
                onClick={() => handleCopyEmail(contactEmail)}
                className="mt-4 block w-fit cursor-pointer font-sans text-[clamp(2.1rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.06em] text-left text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                aria-label="Copiar e-mail para a área de transferência"
              >
                {contactEmail}
              </button>
            </div>

            <div className="mt-auto pt-12">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] tracking-[-0.02em] text-ink md:text-[15px]">
                {contactLinks.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 transition hover:text-accent"
                  >
                    <span>{item.label}</span>
                    <ArrowIcon />
                  </a>
                ))}

                <a
                  href={curriculumHref}
                  download={curriculumFilename}
                  className="group inline-flex items-center gap-2 transition hover:text-accent"
                >
                  <span>{t.contact.curriculumLabel}</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {toastVisible ? <CopyToast message={t.contact.emailCopied} /> : null}
    </section>
  );
}
