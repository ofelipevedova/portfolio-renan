export function CopyToast({ message }: { message: string }) {
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
