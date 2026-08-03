"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { createPRNG } from "@/lib/utils";

interface NodeData {
  origin: THREE.Vector3;
  current: THREE.Vector3;
  velocity: THREE.Vector3;
}

export function NeuralGraph() {
  const lineMeshRef = useRef<THREE.LineSegments>(null);
  const nodesMeshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const nodeCount = 110;
  const maxDistance = 2.6;

  // Initialize node data & PRNG coordinates
  const nodes = useMemo(() => {
    const random = createPRNG(4321);
    const nodeList: NodeData[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (random() - 0.5) * 14;
      const y = (random() - 0.5) * 9;
      const z = (random() - 0.5) * 6;

      const pos = new THREE.Vector3(x, y, z);

      nodeList.push({
        origin: pos.clone(),
        current: pos.clone(),
        velocity: new THREE.Vector3(
          (random() - 0.5) * 0.004,
          (random() - 0.5) * 0.004,
          (random() - 0.5) * 0.004
        ),
      });
    }

    return nodeList;
  }, []);

  // Buffer geometry for dynamic line connections
  const maxLines = (nodeCount * (nodeCount - 1)) / 2;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));
    return geo;
  }, [linePositions, lineColors]);

  useFrame((state) => {
    if (!lineMeshRef.current || !nodesMeshRef.current) return;

    const pointer = state.pointer; // [-1 to 1]
    const mouse3D = new THREE.Vector3(pointer.x * 7, pointer.y * 4.5, 0);

    const cyanColor = new THREE.Color("#22d3ee");
    const purpleColor = new THREE.Color("#9333ea");

    // 1. Update node physics with magnetic force & return springs
    for (let i = 0; i < nodeCount; i++) {
      const node = nodes[i];

      // Subtle ambient drift
      node.current.add(node.velocity);

      // Distance to cursor
      const distToMouse = node.current.distanceTo(mouse3D);
      const magneticRadius = 3.5;

      if (distToMouse < magneticRadius) {
        // Magnetic pull vector toward mouse
        const pullDir = new THREE.Vector3()
          .subVectors(mouse3D, node.current)
          .normalize();
        const force = (1 - distToMouse / magneticRadius) * 0.07;
        node.current.addScaledVector(pullDir, force);
      }

      // Spring return to origin
      const springForce = new THREE.Vector3()
        .subVectors(node.origin, node.current)
        .multiplyScalar(0.04);
      node.current.add(springForce);

      // Dampening
      node.current.addScaledVector(node.velocity, 0.95);

      // Update InstancedMesh transform
      dummy.position.copy(node.current);
      dummy.scale.setScalar(0.045);
      dummy.updateMatrix();
      nodesMeshRef.current.setMatrixAt(i, dummy.matrix);
    }

    nodesMeshRef.current.instanceMatrix.needsUpdate = true;

    // 2. Calculate dynamic connection lines between close nodes
    const posAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
    const colAttr = lineGeometry.attributes.color as THREE.BufferAttribute;

    const posArray = posAttr.array as Float32Array;
    const colArray = colAttr.array as Float32Array;

    let pairCount = 0;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodes[i].current.distanceTo(nodes[j].current);

        if (dist < maxDistance) {
          const idx = pairCount * 6;

          posArray[idx] = nodes[i].current.x;
          posArray[idx + 1] = nodes[i].current.y;
          posArray[idx + 2] = nodes[i].current.z;

          posArray[idx + 3] = nodes[j].current.x;
          posArray[idx + 4] = nodes[j].current.y;
          posArray[idx + 5] = nodes[j].current.z;

          // Color fade based on distance
          const alpha = 1 - dist / maxDistance;
          const mixCol = cyanColor.clone().lerp(purpleColor, alpha);

          colArray[idx] = mixCol.r * alpha * 0.5;
          colArray[idx + 1] = mixCol.g * alpha * 0.5;
          colArray[idx + 2] = mixCol.b * alpha * 0.5;

          colArray[idx + 3] = mixCol.r * alpha * 0.5;
          colArray[idx + 4] = mixCol.g * alpha * 0.5;
          colArray[idx + 5] = mixCol.b * alpha * 0.5;

          pairCount++;
        }
      }
    }

    lineGeometry.setDrawRange(0, pairCount * 2);
    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <group>
      {/* Dynamic Connection Lines */}
      <lineSegments ref={lineMeshRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>

      {/* Instanced Sphere Nodes */}
      <instancedMesh
        ref={nodesMeshRef}
        args={[undefined, undefined, nodeCount]}
      >
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>
    </group>
  );
}
