"use client";

import { useEffect, useState } from "react";

const words = ["Innovating,", "Empowering,", "Delivering."];

export function Preloader() {
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Quick, punchy staged animation
    const t0 = setTimeout(() => setActiveWordIndex(0), 100);
    const t1 = setTimeout(() => setActiveWordIndex(1), 400);
    const t2 = setTimeout(() => setActiveWordIndex(2), 750);
    const t3 = setTimeout(() => setIsComplete(true), 1350);
    const t4 = setTimeout(() => setHidden(true), 1950);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#08080A] transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] select-none pointer-events-none ${
        isComplete
          ? "opacity-0 -translate-y-full"
          : "opacity-100 translate-y-0"
      }`}
    >
      {/* Center Cinematic Words Staggered Reveal */}
      <div className="flex items-center gap-3 sm:gap-4 font-display font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight">
        {words.map((word, idx) => {
          const isVisible = activeWordIndex >= idx;

          return (
            <span
              key={idx}
              className="inline-block transition-all duration-400 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
                color: idx === 2 && isVisible ? "#C5A059" : "#FFFFFF",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* Subtle Bottom Ambient Indicator */}
      <div className="absolute bottom-10 font-mono text-[10px] text-[#736E62] tracking-[0.2em] uppercase">
        VISHAL PATEL // 2026
      </div>
    </div>
  );
}
