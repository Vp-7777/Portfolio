"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSystemStore } from "@/store/useSystemStore";
import { Section } from "@/features/ui/Section";
import bioData from "@/lib/content/bio.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    if (!containerRef.current || !headerRef.current || !listRef.current) return;

    const rows = listRef.current.querySelectorAll(".philo-row");

    const ctx = gsap.context(() => {
      // Header slides in from left
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Each row slides up in stagger
      gsap.fromTo(
        rows,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const handleMouseEnter = (idx: number, stepName: string) => {
    setHoveredIdx(idx);
    setCursorVariant("hover");
    setCursorLabel(`PRINCIPLE // ${stepName.toUpperCase()}`);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    setCursorVariant("default");
    setCursorLabel(null);
  };

  return (
    <Section
      ref={containerRef}
      chapter="philosophy"
      className="relative bg-background border-t border-border-subtle py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-purple-800 opacity-10 blur-[160px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-800 opacity-10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 border-b border-border-subtle/40"
          style={{ opacity: reducedMotion ? 1 : 0 }}
        >
          <div className="space-y-4 max-w-lg">
            <div className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase">
              [ CH.02 // ENGINEERING PHILOSOPHY ]
            </div>
            <h2
              className="font-display font-extrabold uppercase tracking-tight leading-none"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                background: "linear-gradient(135deg, #ffffff 0%, #c084fc 45%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              HOW I<br />
              <span
                className="italic font-light"
                style={{
                  background: "linear-gradient(135deg, #c084fc, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                THINK
              </span>
            </h2>
          </div>

          <p className="text-muted text-base max-w-sm leading-relaxed font-sans md:text-right">
            Software engineering is not about writing isolated blocks of code.
            It is about designing repeatable, calibrated systems that continuously
            deliver value and make deterministic choices.
          </p>
        </div>

        {/* Numbered Row List — inspired by premium portfolio layouts */}
        <div ref={listRef}>
          {bioData.philosophy.map((step, idx) => {
            const indexStr = String(idx + 1).padStart(2, "0");
            const isHovered = hoveredIdx === idx;
            const isFaded = hoveredIdx !== null && !isHovered;

            return (
              <div
                key={step.step}
                onMouseEnter={() => handleMouseEnter(idx, step.step)}
                onMouseLeave={handleMouseLeave}
                className="philo-row group relative border-b border-border-subtle/40 cursor-default select-none"
                style={{
                  opacity: reducedMotion ? 1 : isFaded ? 0.35 : 1,
                  transition: "opacity 0.35s ease, background 0.3s ease",
                  background: isHovered ? "rgba(168,85,247,0.04)" : "transparent",
                }}
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-center py-6 md:py-8 px-2">

                  {/* Large decorative index number */}
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className="font-display font-extrabold leading-none select-none transition-all duration-300"
                      style={{
                        fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)",
                        background: isHovered
                          ? "linear-gradient(135deg, #c084fc, #818cf8)"
                          : "transparent",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: isHovered ? "transparent" : "rgba(255,255,255,0.12)",
                        backgroundClip: "text",
                        color: isHovered ? "transparent" : "rgba(255,255,255,0.12)",
                      }}
                    >
                      {indexStr}
                    </span>
                  </div>

                  {/* Step title */}
                  <div className="col-span-10 md:col-span-4">
                    <h3
                      className="font-display font-bold uppercase tracking-tight transition-all duration-300"
                      style={{
                        fontSize: "clamp(1.1rem, 2.5vw, 1.7rem)",
                        color: isHovered ? "#ffffff" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {step.step}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="col-span-12 md:col-span-6 pl-0 md:pl-4">
                    <p
                      className="font-sans text-sm md:text-base leading-relaxed transition-colors duration-300"
                      style={{
                        color: isHovered ? "rgba(255,255,255,0.75)" : "rgba(139,133,163,0.8)",
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Hover left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 rounded-r"
                  style={{
                    background: isHovered
                      ? "linear-gradient(180deg, #a855f7, #6366f1)"
                      : "transparent",
                    opacity: isHovered ? 1 : 0,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer telemtry row */}
        <div className="flex gap-8 pt-10 font-mono text-[10px] text-muted/50 uppercase tracking-widest select-none">
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent inline-block" />
            CALIBRATION // ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-indigo-400 inline-block" />
            {bioData.philosophy.length} PRINCIPLES LOADED
          </div>
        </div>
      </div>
    </Section>
  );
}
