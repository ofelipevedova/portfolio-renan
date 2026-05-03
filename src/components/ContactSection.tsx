"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { media } from "@/lib/media";
import { publicPath } from "@/lib/site-path";

type ContactSectionProps = {
  title?: string;
  description?: string;
  portraitSrc?: string;
  portraitAlt?: string;
};

const contactEmail = site.contactEmail;

const contactBreadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Background", href: "/#background" },
  { label: "Posts", href: "/#posts" },
  { label: "Contato", href: "/#contato" },
] as const;

const contactLinks = [
  {
    label: "Linkedin",
    href: "https://br.linkedin.com/in/renanfelipevedova-ux-designer",
  },
  {
    label: "Medium",
    href: "https://medium.com/@felipevedova",
  },
  {
    label: "vulpistudio",
    href: "https://vulpistudio.com",
  },
  {
    label: "Currículo",
    href: publicPath(media.curriculum.pdf),
    download: "Renan F. Vedova - Currículo.pdf",
  },
] as const;

function ContactBreadcrumbTrail() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px] leading-none tracking-[-0.03em] md:text-[19px]"
    >
      {contactBreadcrumbItems.map((item) => {
        const isActive = item.label === "Contato";

        const content = (
          <>
            <span>/</span>
            <span>{item.label}</span>
          </>
        );

        if (isActive) {
          return (
            <span
              key={item.label}
              aria-current="page"
              className="inline-flex items-center gap-3 font-medium text-accent"
            >
              {content}
            </span>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex items-center gap-3 text-ink/70 transition hover:text-ink"
          >
            {content}
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

export function ContactSection({
  title = "Minha prioridade é sempre garantir que o design seja baseado em uma compreensão profunda dos usuários e dos objetivos do negócio, utilizando ferramentas e métodos que tragam o melhor resultado para cada situação.",
  description,
  portraitSrc = media.people.renanPortrait,
  portraitAlt = "Retrato em preto e branco do autor do portfólio",
}: ContactSectionProps) {
  const { copied: toastVisible, copy: handleCopyEmail } = useCopyToClipboard();

  return (
    <section id="contato" className="page-shell pt-14 md:pt-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start">
        <ContactBreadcrumbTrail />

        <Reveal className="mt-16 grid w-full gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="relative aspect-[381/428] w-full max-w-[23rem] overflow-hidden bg-white">
            <Image
              src={publicPath(portraitSrc)}
              alt={portraitAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>

          <div className="flex h-full min-h-[24rem] flex-col">
            <div className="flex max-w-[32rem] items-start gap-4">
              <span className="mt-1 text-3xl leading-none text-ink">&ldquo;</span>
              <div className="space-y-4">
                <p className="text-[18px] leading-[1.52] tracking-[-0.01em] text-ink/85 md:text-[20px]">
                  {title}
                </p>
                {description ? (
                  <p className="max-w-[30rem] text-sm leading-7 text-ink/70 md:text-base">
                    {description}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-14">
              <p className="text-[18px] leading-7 tracking-[-0.02em] text-ink/80">
                Entre em contato
              </p>
              <button
                type="button"
                onClick={() => handleCopyEmail(contactEmail)}
                className="mt-4 block w-fit cursor-pointer font-sans text-[clamp(2.1rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.06em] text-left text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
                style={{ cursor: "pointer" }}
                aria-label="Copiar e-mail para a área de transferência"
              >
                {contactEmail}
              </button>
            </div>

            <div className="mt-auto pt-12">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] tracking-[-0.02em] text-ink md:text-[15px]">
                {contactLinks.map((item) => {
                  if ("download" in item) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        download={item.download}
                        className="group inline-flex items-center gap-2 transition hover:text-accent"
                      >
                        <span>{item.label}</span>
                        <ArrowIcon />
                      </a>
                    );
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 transition hover:text-accent"
                    >
                      <span>{item.label}</span>
                      <ArrowIcon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {toastVisible ? <CopyToast message="E-mail copiado" /> : null}
    </section>
  );
}

