"use client";

import { useEffect, useRef, useState } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import gsap from "gsap";

export function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  const cursorVariant = useSystemStore((state) => state.cursorVariant);
  const cursorLabel = useSystemStore((state) => state.cursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const touchQuery = window.matchMedia("(pointer: coarse)");
    if (touchQuery.matches) {
      setIsPointer(false);
      return;
    }

    if (reducedMotion) return;

    const mouse = { x: 0, y: 0 };
    const posOuter = { x: 0, y: 0 };
    const posInner = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    let animationId = requestAnimationFrame(function tick() {
      // Outer ring smooth lerp (0.12)
      posOuter.x += (mouse.x - posOuter.x) * 0.12;
      posOuter.y += (mouse.y - posOuter.y) * 0.12;

      // Inner dot sharp lerp (0.35)
      posInner.x += (mouse.x - posInner.x) * 0.35;
      posInner.y += (mouse.y - posInner.y) * 0.35;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${posOuter.x}px, ${posOuter.y}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${posInner.x}px, ${posInner.y}px, 0)`;
      }

      animationId = requestAnimationFrame(tick);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [reducedMotion, isVisible]);

  useEffect(() => {
    if (!outerRef.current || reducedMotion || !isPointer) return;

    const outerEl = outerRef.current;

    if (cursorVariant === "hover") {
      gsap.to(outerEl, {
        width: 52,
        height: 52,
        backgroundColor: "rgba(34, 211, 238, 0.08)",
        borderColor: "#22d3ee",
        duration: 0.3,
        ease: "power2.out",
      });
    } else if (cursorVariant === "drag") {
      gsap.to(outerEl, {
        width: 60,
        height: 60,
        backgroundColor: "rgba(147, 51, 234, 0.15)",
        borderColor: "#9333ea",
        borderRadius: "12px",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // Default ring state
      gsap.to(outerEl, {
        width: 32,
        height: 32,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.35)",
        borderRadius: "50%",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [cursorVariant, reducedMotion, isPointer]);

  if (!isPointer || reducedMotion) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={outerRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-white/35 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-cursor transition-opacity duration-300 flex items-center justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "0 0 15px rgba(34,211,238,0.15)" }}
      >
        {cursorLabel && (
          <span className="absolute whitespace-nowrap text-[8px] font-mono tracking-widest text-cyan-300 uppercase animate-cursor-orbit">
            {cursorLabel}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-cursor transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
