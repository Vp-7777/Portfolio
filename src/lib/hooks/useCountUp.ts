"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpOptions {
  end: number;
  duration?: number; // ms
  decimals?: number;
  suffix?: string;
  prefix?: string;
  triggerOnScroll?: boolean;
}

export function useCountUp(
  targetValue: string | number,
  options: CountUpOptions = { end: 0 }
) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parse target number from string or number (e.g. "9.70" -> 9.7, "10+" -> 10, "100%" -> 100)
    const strVal = String(targetValue);
    const numericMatch = strVal.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(strVal);
      return;
    }

    const endNum = parseFloat(numericMatch[0]);
    const prefix = strVal.slice(0, numericMatch.index);
    const suffix = strVal.slice((numericMatch.index || 0) + numericMatch[0].length);
    const decimals = numericMatch[0].includes(".")
      ? numericMatch[0].split(".")[1].length
      : 0;

    const duration = options.duration || 1500;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out expo formula
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = easeProgress * endNum;

        setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setDisplayValue(strVal);
        }
      };

      requestAnimationFrame(update);
    };

    const el = elementRef.current;
    if (!el) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetValue, options.duration]);

  return { displayValue, elementRef };
}
