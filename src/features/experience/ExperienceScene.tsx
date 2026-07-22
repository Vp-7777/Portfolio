"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { QRaptorScene } from "./QRaptorScene";
import { RideAbitScene } from "./RideAbitScene";
import { useRef } from "react";

export function ExperienceScene({ activeIndex }: { activeIndex: number }) {
  const qGroupRef = useRef<THREE.Group>(null);
  const rGroupRef = useRef<THREE.Group>(null);
  const valRef = useRef(0);

  useFrame(() => {
    // Smoothly interpolate coordinate value toward target activeIndex
    const speed = 0.08;
    valRef.current += (activeIndex - valRef.current) * speed;
    const val = valRef.current;
    
    if (qGroupRef.current) {
      qGroupRef.current.visible = val < 0.99;
      qGroupRef.current.traverse((child) => {
        if (child instanceof THREE.LineSegments || child instanceof THREE.Points) {
          const mat = child.material as THREE.Material;
          mat.opacity = (1 - val) * 0.45; // Base max opacity
          mat.transparent = true;
        }
      });
      qGroupRef.current.scale.setScalar(0.75 + val * 0.45);
    }

    if (rGroupRef.current) {
      rGroupRef.current.visible = val > 0.01;
      rGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
          const mat = child.material as THREE.Material;
          const baseOpacity = child instanceof THREE.Mesh ? 0.06 : 0.45;
          mat.opacity = val * baseOpacity;
          mat.transparent = true;
        }
      });
      rGroupRef.current.scale.setScalar(0.6 + val * 0.4);
    }
  });

  return (
    <>
      <group ref={qGroupRef}>
        <QRaptorScene />
      </group>
      <group ref={rGroupRef}>
        <RideAbitScene />
      </group>
    </>
  );
}
