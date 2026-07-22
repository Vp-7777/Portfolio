"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createPRNG } from "@/lib/utils";

export function RideAbitScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate beautiful arcing paths
  const arcs = useMemo(() => {
    const random = createPRNG(42);
    const paths = [];
    const radius = 2;
    for (let i = 0; i < 20; i++) {
      // Create random points on the sphere surface
      const phi1 = random() * Math.PI;
      const theta1 = random() * Math.PI * 2;
      const p1 = new THREE.Vector3().setFromSphericalCoords(radius, phi1, theta1);
      
      const phi2 = random() * Math.PI;
      const theta2 = random() * Math.PI * 2;
      const p2 = new THREE.Vector3().setFromSphericalCoords(radius, phi2, theta2);
      
      // Calculate a midpoint that bulges out
      const mid = p1.clone().lerp(p2, 0.5).normalize().multiplyScalar(radius * (1.2 + random() * 0.5));
      
      const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
      paths.push(curve.getPoints(50));
    }
    return paths;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe Grid - Very subtle */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>

      {/* Routing Arcs - High contrast */}
      {arcs.map((points, i) => (
        <line key={i}>
             <bufferGeometry>
                <bufferAttribute 
                  attach="attributes-position" 
                  args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]} 
                />
             </bufferGeometry>
          <lineBasicMaterial color={i % 4 === 0 ? "#ffffff" : "#666666"} transparent opacity={0.4} linewidth={1} />
        </line>
      ))}
    </group>
  );
}
