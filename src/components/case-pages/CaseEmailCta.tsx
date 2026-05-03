"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

type CaseEmailCtaProps = {
  label: string;
  email: string;
};

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

export function CaseEmailCta({ label, email }: CaseEmailCtaProps) {
  const { copied: toastVisible, copy: handleCopyEmail } = useCopyToClipboard();

  return (
    <section className="mt-[120px] pb-6">
      <div className="space-y-3">
        <p className="text-[14px] leading-none text-ink/60">{label}</p>
        <button
          type="button"
          onClick={() => handleCopyEmail(email)}
          className="block w-fit cursor-pointer text-left text-[clamp(2.35rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.06em] text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
          style={{ cursor: "pointer" }}
          aria-label="Copiar e-mail para a área de transferência"
        >
          {email}
        </button>
      </div>

      {toastVisible ? <CopyToast message="E-mail copiado" /> : null}
    </section>
  );
}
