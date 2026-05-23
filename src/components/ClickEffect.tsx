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
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            left: m.x,
            top: m.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="click-dot" />
          <div className="click-ring" />
        </div>
      ))}
    </div>
  );
}
