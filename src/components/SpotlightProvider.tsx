"use client";

import { useEffect, useCallback } from "react";

export function SpotlightProvider() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const spotlight = document.getElementById("spotlight");
    if (spotlight) {
      spotlight.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(99, 102, 241, 0.07), transparent 80%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      id="spotlight"
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background:
          "radial-gradient(600px circle at 0px 0px, rgba(99, 102, 241, 0.07), transparent 80%)",
      }}
    />
  );
}
