"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AutisMindScene } from "./AutisMindScene";
import { PrithviQScene } from "./PrithviQScene";
import { CampuSwapScene } from "./CampuSwapScene";
import { useRef } from "react";

export function ProjectsScene({ fadeRef }: { fadeRef: React.MutableRefObject<{ val: number }> }) {
  const g1Ref = useRef<THREE.Group>(null);
  const g2Ref = useRef<THREE.Group>(null);
  const g3Ref = useRef<THREE.Group>(null);

  useFrame(() => {
    // fadeRef.val goes from 0 to 2
    const val = fadeRef.current.val;
    
    // Helper to calculate opacity based on distance from target value
    // Target 0 for g1, Target 1 for g2, Target 2 for g3
    const getOpacity = (target: number) => {
      const dist = Math.abs(val - target);
      return Math.max(0, 1 - dist);
    };

    const op1 = getOpacity(0);
    const op2 = getOpacity(1);
    const op3 = getOpacity(2);

    if (g1Ref.current) {
      g1Ref.current.visible = op1 > 0.01;
      g1Ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.Material;
          mat.opacity = op1 * 0.5; // Base max was around 0.5 for most
          mat.transparent = true;
        }
      });
      g1Ref.current.rotation.y = val * 0.5;
    }

    if (g2Ref.current) {
      g2Ref.current.visible = op2 > 0.01;
      g2Ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.Material;
          mat.opacity = op2 * 0.3; 
          mat.transparent = true;
        }
      });
      g2Ref.current.rotation.y = val * 0.5;
    }

    if (g3Ref.current) {
      g3Ref.current.visible = op3 > 0.01;
      g3Ref.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const mat = child.material as THREE.Material;
          mat.opacity = op3 * 0.5;
          mat.transparent = true;
        }
      });
      g3Ref.current.rotation.y = val * 0.5;
    }
  });

  return (
    <>
      <group ref={g1Ref}>
        <AutisMindScene />
      </group>
      <group ref={g2Ref}>
        <PrithviQScene />
      </group>
      <group ref={g3Ref}>
        <CampuSwapScene />
      </group>
    </>
  );
}
