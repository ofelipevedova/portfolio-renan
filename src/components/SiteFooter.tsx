import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="page-shell pb-8 pt-10 md:pt-12">
      <div className="border-t border-black/10 py-6">
        <div className="grid gap-4 text-[10px] uppercase tracking-[0.18em] text-muted md:grid-cols-[1fr_auto_1fr] md:items-center">
          <p className="text-left">© {year} RENAN FELIPE VEDOVA</p>
          <p className="text-center">
            Inspirado por{" "}
            <Link
              href="https://billysweeney.com/"
              target="_blank"
              rel="noreferrer"
              className="text-accent transition hover:opacity-80"
            >
              BillySweeney
            </Link>
          </p>
          <p className="text-left md:text-right">TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </footer>
  );
}
