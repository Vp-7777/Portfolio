"use client";

import { useSystemStore } from "@/store/useSystemStore";
import { cn } from "@/lib/utils";
import { useCallback, useRef } from "react";

interface BentoTileProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cursorLabel?: string;
  glowColor?: "purple" | "cyan" | "amber";
  tiltFactor?: number;
}

export function BentoTile({
  children,
  className,
  cursorLabel,
  glowColor = "purple",
  tiltFactor = 6,
  ...props
}: BentoTileProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const setCursorVariant = useSystemStore((state) => state.setCursorVariant);
  const setCursorLabel = useSystemStore((state) => state.setCursorLabel);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = tileRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);

      // 3D perspective tilt calculation
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      const tiltX = -normY * tiltFactor;
      const tiltY = normX * tiltFactor;

      el.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(
        2
      )}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    },
    [tiltFactor]
  );

  const handleMouseEnter = useCallback(() => {
    setCursorVariant("hover");
    if (cursorLabel) setCursorLabel(cursorLabel);
  }, [cursorLabel, setCursorLabel, setCursorVariant]);

  const handleMouseLeave = useCallback(() => {
    const el = tileRef.current;
    if (el) {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
    setCursorVariant("default");
    setCursorLabel(null);
  }, [setCursorLabel, setCursorVariant]);

  return (
    <div
      ref={tileRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bento-tile p-6 md:p-8 flex flex-col justify-between cursor-default transition-all duration-300",
        glowColor === "cyan" && "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
        glowColor === "amber" && "hover:border-amber-500/50 hover:shadow-amber-500/20",
        glowColor === "purple" && "hover:border-purple-600/50 hover:shadow-purple-600/20",
        className
      )}
      {...props}
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      {children}
    </div>
  );
}
