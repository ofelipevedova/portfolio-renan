"use client";

import { useCallback, useEffect, useState } from "react";

const COLOR = "#2b2b2b";
const RAYS = 8;

const css = `
@keyframes burst-dot {
  0%   { transform: translate(-50%,-50%) scale(1.2); opacity: 1; }
  100% { transform: translate(-50%,-50%) scale(0);   opacity: 0; }
}
@keyframes burst-ray {
  0%   { opacity: 1; transform: translateY(-5px)  scaleY(1); }
  100% { opacity: 0; transform: translateY(-22px) scaleY(0.5); }
}
`;

type Marker = { id: number; x: number; y: number };

export function ClickEffect() {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const id = performance.now() + Math.random();
    setMarkers((p) => [...p, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setMarkers((p) => p.filter((m) => m.id !== id)), 650);
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [handleMouseDown]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        {markers.map((m) => (
          <div key={m.id} style={{ position: "absolute", left: m.x, top: m.y }}>
            {/* center dot */}
            <div
              style={{
                position: "absolute",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: COLOR,
                animation: "burst-dot 0.28s ease-out forwards",
              }}
            />
            {/* 8 rays */}
            {Array.from({ length: RAYS }, (_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transform: `rotate(${i * (360 / RAYS)}deg)`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: 2,
                    height: 9,
                    borderRadius: 2,
                    background: COLOR,
                    left: -1,
                    top: -4,
                    transformOrigin: "bottom center",
                    animation: "burst-ray 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
