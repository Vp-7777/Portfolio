"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function TerrainMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle organic breathing motion reacting to pointer
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.04;
      meshRef.current.rotation.x = 1.1 + Math.sin(state.clock.getElapsedTime() * 0.2) * 0.05 + state.pointer.y * 0.08;
      meshRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05 + state.pointer.x * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]} rotation={[1.1, 0, 0]}>
      <planeGeometry args={[14, 14, 28, 28]} />
      <meshBasicMaterial
        wireframe
        color="#A9793C"
        transparent
        opacity={0.14}
      />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-80"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <TerrainMesh />
      </Canvas>
    </div>
  );
}
