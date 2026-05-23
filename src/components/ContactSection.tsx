"use client";

import Image from "next/image";

import { Breadcrumb } from "@/components/Breadcrumb";
import { CopyToast } from "@/components/CopyToast";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { site } from "@/data/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { media } from "@/lib/media";
import { publicPath } from "@/lib/site-path";

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

export function ContactSection() {
  const { t } = useLanguage();
  const { copied: toastVisible, copy: handleCopyEmail } = useCopyToClipboard();

  const curriculumHref = publicPath(media.curriculum.pdf);
  const curriculumFilename =
    t.contact.curriculumLabel === "Resume"
      ? "Renan F. Vedova - Resume.pdf"
      : "Renan F. Vedova - Currículo.pdf";

  return (
    <section id="contato" className="page-shell pt-14 md:pt-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
        <Breadcrumb activeKey="contato" nav={t.nav} />

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
