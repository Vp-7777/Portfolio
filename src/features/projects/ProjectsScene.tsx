"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AutisMindScene } from "./AutisMindScene";
import { PrithviQScene } from "./PrithviQScene";
import { CampuSwapScene } from "./CampuSwapScene";
import { useRef } from "react";

interface ProjectsSceneProps {
  projectId?: string;
  fadeRef?: React.MutableRefObject<{ val: number }>;
}

export function ProjectsScene({ projectId = "autismind", fadeRef }: ProjectsSceneProps) {
  const g1Ref = useRef<THREE.Group>(null);
  const g2Ref = useRef<THREE.Group>(null);
  const g3Ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (fadeRef?.current) {
      const val = fadeRef.current.val;
      const getOpacity = (target: number) => {
        const dist = Math.abs(val - target);
        return Math.max(0, 1 - dist);
      };

      const op1 = getOpacity(0);
      const op2 = getOpacity(1);
      const op3 = getOpacity(2);

      if (g1Ref.current) {
        g1Ref.current.visible = op1 > 0.01;
        g1Ref.current.rotation.y += delta * 0.2;
      }
      if (g2Ref.current) {
        g2Ref.current.visible = op2 > 0.01;
        g2Ref.current.rotation.y += delta * 0.2;
      }
      if (g3Ref.current) {
        g3Ref.current.visible = op3 > 0.01;
        g3Ref.current.rotation.y += delta * 0.2;
      }
    } else {
      // Direct projectId control
      const isAutism = projectId === "autismind";
      const isPrithvi = projectId === "prithviq";
      const isCampus = projectId === "campuswap";

      if (g1Ref.current) {
        g1Ref.current.visible = isAutism;
        if (isAutism) g1Ref.current.rotation.y += delta * 0.25;
      }
      if (g2Ref.current) {
        g2Ref.current.visible = isPrithvi;
        if (isPrithvi) g2Ref.current.rotation.y += delta * 0.25;
      }
      if (g3Ref.current) {
        g3Ref.current.visible = isCampus;
        if (isCampus) g3Ref.current.rotation.y += delta * 0.25;
      }
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
