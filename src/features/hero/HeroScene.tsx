"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSystemStore } from "@/store/useSystemStore";
import { createPRNG } from "@/lib/utils";

export function HeroScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const particleCount = 2800;

  // 1. Generate randomized 3D particle coordinates & custom colors
  const { positions, aColors } = useMemo(() => {
    const random = createPRNG(9876);
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const purpleColor = new THREE.Color("#a855f7");
    const tealColor = new THREE.Color("#06b6d4");
    const indigoColor = new THREE.Color("#6366f1");
    const whiteColor = new THREE.Color("#ffffff");

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + random() * 8;
      const theta = random() * Math.PI * 2;
      const y = (random() - 0.5) * 12;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * radius;

      // Color weights: 45% purple, 30% teal, 15% indigo, 10% white
      const roll = random();
      let chosenColor = purpleColor;
      if (roll > 0.90) {
        chosenColor = whiteColor;
      } else if (roll > 0.75) {
        chosenColor = indigoColor;
      } else if (roll > 0.45) {
        chosenColor = tealColor;
      }

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return { positions: pos, aColors: col };
  }, []);

  // 2. Custom Point Shader — uses aColor attribute (avoids conflict with THREE built-in "color")
  const shader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uProgress: { value: 0 },
    },
    vertexShader: `
      uniform float uTime;
      uniform float uProgress;
      attribute vec3 aColor;
      varying vec3 vColor;
      
      void main() {
        vColor = aColor;
        
        vec3 pos = position;
        pos.y += sin(pos.x * 0.5 + uTime * 0.2) * 0.15;
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        gl_PointSize = (14.0 / -mvPosition.z) * uProgress;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5));
        if (dist > 0.5) discard;
        
        float alpha = smoothstep(0.5, 0.05, dist);
        
        gl_FragColor = vec4(vColor, alpha * 0.7);
      }
    `,
  }), []);

  // 3. Mouse parallax drift per frame
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
      const targetProgress = hasConstructed ? 1.0 : 0.1;
      materialRef.current.uniforms.uProgress.value +=
        (targetProgress - materialRef.current.uniforms.uProgress.value) * 0.05;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
      pointsRef.current.rotation.z += delta * 0.005;

      const targetRotX = pointer.y * 0.12;
      const targetRotY = pointer.x * 0.12;

      pointsRef.current.rotation.x +=
        (targetRotX - pointsRef.current.rotation.x) * 0.08;
      pointsRef.current.rotation.y +=
        (targetRotY - pointsRef.current.rotation.y) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        {/* Use "aColor" not "color" to avoid conflict with THREE vertexColors system */}
        <bufferAttribute attach="attributes-aColor" args={[aColors, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        uniforms={shader.uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
}
