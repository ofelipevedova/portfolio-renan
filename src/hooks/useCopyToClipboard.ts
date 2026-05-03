"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useCopyToClipboard(durationMs = 1800) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const showCopiedState = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    setCopied(true);
    timerRef.current = window.setTimeout(() => {
      setCopied(false);
    }, durationMs);
  }, [durationMs]);

  const copy = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const fallback = document.createElement("textarea");
        fallback.value = value;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "fixed";
        fallback.style.opacity = "0";
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand("copy");
        document.body.removeChild(fallback);
      }

      showCopiedState();
    },
    [showCopiedState],
  );

  return {
    copied,
    copy,
  } as const;
}
