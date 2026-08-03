"use client";

import { useCallback, useRef } from "react";

interface TiltOptions {
  maxTilt?: number; // max tilt angle in degrees
  perspective?: number; // CSS perspective in px
  scale?: number; // scale factor on hover
}

export function useMagneticTilt<T extends HTMLElement = HTMLDivElement>(
  options: TiltOptions = {}
) {
  const { maxTilt = 8, perspective = 1000, scale = 1.02 } = options;
  const elementRef = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = elementRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update spotlight CSS variables
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);

      // Calculate normalized offset from center (-1 to 1)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const normX = (x - centerX) / centerX;
      const normY = (y - centerY) / centerY;

      // Calculate tilt angles (inverted Y so pushing top tilts back)
      const tiltX = -normY * maxTilt;
      const tiltY = normX * maxTilt;

      el.style.transform = `perspective(${perspective}px) rotateX(${tiltX.toFixed(
        2
      )}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
    },
    [maxTilt, perspective, scale]
  );

  const handleMouseLeave = useCallback(() => {
    const el = elementRef.current;
    if (!el) return;
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  }, [perspective]);

  return { elementRef, handleMouseMove, handleMouseLeave };
}
