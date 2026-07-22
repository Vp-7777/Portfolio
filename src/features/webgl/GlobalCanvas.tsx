"use client";

import { Canvas } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import { Suspense } from "react";

export function GlobalCanvas() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Let DOM events pass through by default
        zIndex: -1, // Behind the DOM
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]} // Performance: limit max DPR to 2
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <View.Port />
        {/* Preload all assets to prevent hitching */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
