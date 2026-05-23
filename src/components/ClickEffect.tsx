"use client";

import { useCallback, useEffect, useState } from "react";

type Marker = { id: number; x: number; y: number };

export function ClickEffect() {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const id = performance.now() + Math.random();
    setMarkers((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setMarkers((prev) => prev.filter((m) => m.id !== id));
    }, 700);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <>
      {markers.map((m) => (
        <span
          key={m.id}
          aria-hidden="true"
          className="click-effect"
          style={{ left: m.x, top: m.y }}
        />
      ))}
    </>
  );
}
