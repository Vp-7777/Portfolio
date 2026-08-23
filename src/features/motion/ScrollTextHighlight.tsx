"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollTextHighlightProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export function ScrollTextHighlight({
  text,
  className = "",
  highlightWords = [],
}: ScrollTextHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element has progressed through the viewport
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;

      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const wordThreshold = idx / words.length;
        const isRevealed = scrollProgress >= wordThreshold;
        const isSpecial = highlightWords.some((hw) =>
          word.toLowerCase().includes(hw.toLowerCase())
        );

        return (
          <span
            key={idx}
            className="inline-block mr-[0.25em] transition-all duration-300 ease-out"
            style={{
              opacity: isRevealed ? 1 : 0.22,
              transform: isRevealed ? "translateY(0)" : "translateY(4px)",
              color: isRevealed
                ? isSpecial
                  ? "#7C5A2C"
                  : "#1B1710"
                : "#9C9280",
              fontWeight: isSpecial ? 600 : "inherit",
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
