"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSystemStore } from "@/store/useSystemStore";
import { createPRNG } from "@/lib/utils";
import { NeuralGraph } from "./NeuralGraph";

export function HeroScene() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const auroraMatRef = useRef<THREE.ShaderMaterial>(null);
  const hasConstructed = useSystemStore((state) => state.hasConstructed);

  const particleCount = 2800;

  // 1. Generate randomized 3D particle coordinates & custom colors
  const { positions, aColors } = useMemo(() => {
    const random = createPRNG(9876);
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const purpleColor = new THREE.Color("#9333ea");
    const cyanColor = new THREE.Color("#22d3ee");
    const indigoColor = new THREE.Color("#6366f1");
    const amberColor = new THREE.Color("#f59e0b");

    for (let i = 0; i < particleCount; i++) {
      const radius = 2 + random() * 8;
      const theta = random() * Math.PI * 2;
      const y = (random() - 0.5) * 12;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * radius;

      // Color weights: 45% purple, 30% cyan, 15% indigo, 10% amber
      const roll = random();
      let chosenColor = purpleColor;
      if (roll > 0.90) {
        chosenColor = amberColor;
      } else if (roll > 0.75) {
        chosenColor = indigoColor;
      } else if (roll > 0.45) {
        chosenColor = cyanColor;
      }

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return { positions: pos, aColors: col };
  }, []);

  // 2. Custom Point Shader
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

  // 3. Aurora Plane Shader
  const auroraShader = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float wave1 = sin(uv.x * 3.0 + uTime * 0.3 + uPointer.x * 0.5) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 4.0 - uTime * 0.25 + uPointer.y * 0.5) * 0.5 + 0.5;
        float alpha = smoothstep(0.0, 0.8, wave1 * wave2) * 0.14;

        vec3 purple = vec3(0.57, 0.20, 0.91); // #9333ea
        vec3 cyan = vec3(0.13, 0.82, 0.93);   // #22d3ee
        vec3 col = mix(purple, cyan, wave1);

        gl_FragColor = vec4(col, alpha);
      }
    `,
  }), []);

  // 4. Animation frame updates
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
      const targetProgress = hasConstructed ? 1.0 : 0.1;
      materialRef.current.uniforms.uProgress.value +=
        (targetProgress - materialRef.current.uniforms.uProgress.value) * 0.05;
    }

    if (auroraMatRef.current) {
      auroraMatRef.current.uniforms.uTime.value = time;
      auroraMatRef.current.uniforms.uPointer.value.set(pointer.x, pointer.y);
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
    <group>
      {/* 3D Neural Network Constellation Graph */}
      <NeuralGraph />

      {/* Background Aurora Shader Plane */}
      <mesh position={[0, 0, -3]}>
        <planeGeometry args={[16, 12]} />
        <shaderMaterial
          ref={auroraMatRef}
          vertexShader={auroraShader.vertexShader}
          fragmentShader={auroraShader.fragmentShader}
          uniforms={auroraShader.uniforms}
          transparent
          depthWrite={false}
        />
      </mesh>

      {/* 3D Particle Starfield */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
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
    </group>
  );
}
