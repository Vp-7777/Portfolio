"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";

// Register ScrollTrigger early
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function LenisScrollHandler() {
  const setScrollProgress = useSystemStore((state) => state.setScrollProgress);

  useLenis(({ progress }) => {
    setScrollProgress(progress);
    // Let ScrollTrigger know about the scroll update
    ScrollTrigger.update();
  });

  return null;
}

export function SmoothScroller({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<React.ElementRef<typeof ReactLenis>>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    
    // Connect GSAP ticker to Lenis RAF
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <LenisScrollHandler />
      {children}
    </ReactLenis>
  );
}
