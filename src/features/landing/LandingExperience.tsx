"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LandingAtmosphere } from "./LandingAtmosphere";
import { LandingNav } from "./LandingNav";
import { LandingHeroPoster } from "./LandingHeroPoster";
import { LandingStatement } from "./LandingStatement";

/**
 * ============================================================================
 * CRITICAL ARCHITECTURE: LANDING EXPERIENCE PINNED SCROLL ANIMATION
 * ============================================================================
 * DO NOT REMOVE THIS SCROLL ANIMATION TIMELINE.
 * 
 * Flow:
 * 1. At Scroll Top (0%): "Vishal Patel" hero poster + Avatar is 100% visible.
 * 2. On Scroll Down (0% -> 40%): "Vishal" flies UP, "Patel" flies DOWN,
 *    Avatar scales down, Baseline fades out.
 * 3. On Scroll Down (40% -> 90%): "I build software..." Manifesto Bento emerges.
 * 4. On Scroll Back UP (Down -> Up): Everything reverses & reassembles into place.
 * 5. On Further Scroll Down (> 100%): Continues naturally down to About, Projects, etc.
 * ============================================================================
 */
export function LandingExperience() {
  const masterContainerRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const statementContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const masterEl = masterContainerRef.current;
    if (!masterEl) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Initialize exact starting states
      gsap.set(statementContainerRef.current, { autoAlpha: 0, y: 60, pointerEvents: "none" });
      gsap.set(posterRef.current, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set(titleLine1Ref.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(titleLine2Ref.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(portraitRef.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(metaRef.current, { y: 0, opacity: 1 });

      // 2. Master Pinned Scrub Timeline (150% viewport scrub)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: masterEl,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      });

      // Stage A: Hero elements disassemble and fly apart
      tl.to(
        titleLine1Ref.current,
        {
          y: -100,
          scale: 0.92,
          opacity: 0,
          ease: "power2.inOut",
        },
        0
      )
        .to(
          titleLine2Ref.current,
          {
            y: 100,
            scale: 0.92,
            opacity: 0,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          portraitRef.current,
          {
            scale: 0.72,
            y: -50,
            opacity: 0,
            ease: "power2.inOut",
          },
          0.02
        )
        .to(
          metaRef.current,
          {
            opacity: 0,
            y: 30,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          posterRef.current,
          {
            autoAlpha: 0,
            pointerEvents: "none",
            ease: "power2.inOut",
          },
          0.38
        );

      // Stage B: Engineering Statement emerges cleanly into view
      tl.to(
        statementContainerRef.current,
        {
          autoAlpha: 1,
          y: 0,
          pointerEvents: "auto",
          ease: "power2.out",
        },
        0.42
      );

      // Stage C: Hold at 100% completion before releasing pin
      tl.to({}, { duration: 0.1 });
    }, masterEl);

    // Refresh ScrollTrigger calculations after full component mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="landing-hero"
      ref={masterContainerRef}
      className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#050507] text-[#ECEAE2] overflow-hidden select-none"
    >
      {/* Exact Reference Silky Atmosphere Lighting */}
      <LandingAtmosphere />

      {/* Top Navigation Bar */}
      <LandingNav />

      {/* Viewport Layers (Strictly Separated in Time & Space) */}
      <div className="relative w-full h-full">
        
        {/* Layer 1: Hero Poster (Visible at top, flies apart on scroll down, reassembles on scroll up) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
          <LandingHeroPoster
            posterRef={posterRef}
            titleLine1Ref={titleLine1Ref}
            titleLine2Ref={titleLine2Ref}
            portraitRef={portraitRef}
            metaRef={metaRef}
          />
        </div>

        {/* Layer 2: Engineering Statement (Emerges strictly after Hero disassembles) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <LandingStatement statementContainerRef={statementContainerRef} />
        </div>

      </div>

      {/* Seamless Dark Edge Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#050507] pointer-events-none z-30" />
    </section>
  );
}
