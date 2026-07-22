"use client";

import { useEffect, useRef, useState } from "react";
import { useSystemStore } from "@/store/useSystemStore";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  const cursorVariant = useSystemStore((state) => state.cursorVariant);
  const cursorLabel = useSystemStore((state) => state.cursorLabel);
  const reducedMotion = useSystemStore((state) => state.reducedMotion);

  useEffect(() => {
    // 1. Check if the device is touch-only
    if (typeof window === "undefined") return;
    
    const touchQuery = window.matchMedia("(pointer: coarse)");
    if (touchQuery.matches) {
      setIsPointer(false);
      return;
    }

    if (reducedMotion) return;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    // Track mouse coordinates
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const speed = 0.18; // smooth interpolation ratio

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animation frame tick
    let animationId = requestAnimationFrame(function tick() {
      // Linear interpolation (lerp)
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      if (cursorEl) {
        cursorEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
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

  // Adjust cursor style classes based on active state variants
  useEffect(() => {
    if (!cursorRef.current || reducedMotion || !isPointer) return;

    const el = cursorRef.current;
    
    if (cursorVariant === "hover") {
      gsap.to(el, {
        width: 48,
        height: 48,
        backgroundColor: "rgba(212, 175, 55, 0.1)",
        borderColor: "var(--color-accent)",
        duration: 0.3,
        ease: "power2.out"
      });
    } else if (cursorVariant === "drag") {
      gsap.to(el, {
        width: 56,
        height: 56,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderColor: "#ffffff",
        borderRadius: "4px",
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      // Default state
      gsap.to(el, {
        width: 12,
        height: 12,
        backgroundColor: "transparent",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [cursorVariant, reducedMotion, isPointer]);

  // Disable cursor on touch or reduced motion
  if (!isPointer || reducedMotion) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-3 h-3 rounded-full border border-white/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-cursor transition-opacity duration-300 flex items-center justify-center overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {cursorLabel && (
        <span className="text-[8px] font-mono tracking-widest text-accent uppercase animate-fade-in">
          {cursorLabel}
        </span>
      )}
    </div>
  );
}
