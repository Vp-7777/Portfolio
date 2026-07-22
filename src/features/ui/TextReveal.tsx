"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: string;
  className?: string;
}

export function TextReveal({ children, className }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Split text into words for animation
  const words = children.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;
    
    const wordElements = containerRef.current.querySelectorAll('.word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        {
          yPercent: 120,
          rotate: 5,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.02,
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]", className)}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-flex">
          <span className="word-inner origin-bottom-left inline-block">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
