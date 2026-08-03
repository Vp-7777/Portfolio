"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSystemStore } from "@/store/useSystemStore";
import { Zap } from "lucide-react";

export function BootPreloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [shouldRender, setShouldRender] = useState(true);

  const hasConstructed = useSystemStore((state) => state.hasConstructed);
  const setHasConstructed = useSystemStore((state) => state.setHasConstructed);

  useEffect(() => {
    // If already constructed in session, bypass preloader
    if (hasConstructed) {
      setShouldRender(false);
      return;
    }

    const startTime = performance.now();
    const duration = 1600; // ms

    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);

        // Fade out preloader with GSAP
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 0.98,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              setShouldRender(false);
              setHasConstructed(true);
            },
          });
        }
      }
    }, 20);

    return () => clearInterval(timer);
  }, [hasConstructed, setHasConstructed]);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-[#020108] flex flex-col items-center justify-center p-6 text-foreground font-mono select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[160px] pointer-events-none" />

      <div className="max-w-md w-full space-y-6 relative z-10 text-center">
        {/* Branding badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-accent text-xs tracking-widest uppercase">
          <Zap size={14} className="animate-pulse" />
          <span>VP-SYSTEMS // BOOT_SEQUENCE</span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider text-white uppercase">
            VISHAL PATEL
          </h1>
          <p className="text-xs text-muted tracking-widest uppercase">
            AI & MACHINE LEARNING SYSTEMS ENGINEER
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2 text-left pt-4">
          <div className="flex justify-between text-[10px] text-muted tracking-widest uppercase">
            <span>[ SYSTEM INITIALIZING ]</span>
            <span className="text-accent">{progress}%</span>
          </div>

          <div className="w-full h-1.5 rounded-full bg-surface-2 overflow-hidden border border-border-subtle p-[1px]">
            <div
              ref={progressBarRef}
              className="h-full rounded-full bg-gradient-to-r from-purple-600 via-accent to-cyan-400 transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Terminal status lines */}
        <div className="text-[10px] text-muted/60 tracking-widest uppercase space-y-1 text-left pt-2 border-t border-border-subtle/40">
          <p className="flex justify-between">
            <span>CUDA_NODES:</span>
            <span className="text-emerald-400">CALIBRATED</span>
          </p>
          <p className="flex justify-between">
            <span>WEBGL_AURORA:</span>
            <span className="text-emerald-400">READY</span>
          </p>
        </div>
      </div>
    </div>
  );
}
