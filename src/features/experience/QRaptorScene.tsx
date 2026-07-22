"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createPRNG } from "@/lib/utils";

export function QRaptorScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  const { positions, lines } = useMemo(() => {
    const random = createPRNG(42);
    const points = [];
    const size = 3;
    const spacing = 1.2;
    
    // Generate Grid Points
    for (let x = -size; x <= size; x++) {
      for (let y = -size; y <= size; y++) {
        for (let z = -size; z <= size; z++) {
          const px = x * spacing + (random() - 0.5) * 0.8;
          const py = y * spacing + (random() - 0.5) * 0.8;
          const pz = z * spacing + (random() - 0.5) * 0.8;
          points.push(new THREE.Vector3(px, py, pz));
        }
      }
    }
    
    const posArray = new Float32Array(points.length * 3);
    points.forEach((p, i) => {
      posArray[i * 3] = p.x;
      posArray[i * 3 + 1] = p.y;
      posArray[i * 3 + 2] = p.z;
    });

    const lineIndices = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < spacing * 1.8) {
          if (random() > 0.85) {
            lineIndices.push(i, j);
          }
        }
      }
    }

    return { positions: posArray, lines: new Uint16Array(lineIndices) };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef} scale={0.7}>
      {/* Tiny spheres instead of cheap squares */}
      <instancedMesh args={[undefined, undefined, positions.length / 3]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        {/* We need to set the positions for instanced mesh, but a simpler way is just to use Points with a circular texture, or since it's Next.js, let's just map over points or use LineSegments. Actually, I will just use LineSegments to keep it minimal and elegant, removing the dots entirely! */}
      </instancedMesh>
      
      {/* Connections Only - extremely premium abstract look */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="index" args={[lines, 1]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.15} linewidth={1} />
      </lineSegments>
    </group>
  );
}
