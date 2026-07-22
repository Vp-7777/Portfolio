"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export function PrithviQScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Generate a plane with noise for topography
  const { geometry } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(5, 5, 32, 32);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 2) * Math.cos(y * 2) * 0.5;
      pos.setZ(i, z);
    }
    geo.computeVertexNormals();
    return { geometry: geo };
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 3, 0, 0]} scale={1.2}>
        <meshBasicMaterial 
          color="#d4af37" 
          wireframe 
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}
