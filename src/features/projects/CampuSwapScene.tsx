"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { createPRNG } from "@/lib/utils";

export function CampuSwapScene() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate a grid of cubic blocks representing ledgers/transactions
  const blocks = useMemo(() => {
    const random = createPRNG(42);
    const data = [];
    const size = 3;
    for (let x = -size; x <= size; x++) {
      for (let y = -size; y <= size; y++) {
        for (let z = -size; z <= size; z++) {
          if (random() > 0.8) {
            data.push(new THREE.Vector3(x * 0.8, y * 0.8, z * 0.8));
          }
        }
      }
    }
    return data;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef}>
        {blocks.map((pos, i) => (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial 
              color="#555555" 
              wireframe 
              transparent
              opacity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}
