"use client";

import { useEffect } from "react";
import { useSystemStore } from "@/store/useSystemStore";

export function SystemInitializer() {
  const setReducedMotion = useSystemStore((state) => state.setReducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect media query for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    // Add browser-safe event listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", listener);
    } else {
      mediaQuery.addListener(listener); // Fallback for older browsers
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [setReducedMotion]);

  return null; // Pure functional hook element
}
