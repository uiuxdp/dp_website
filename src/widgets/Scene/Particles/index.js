import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const ParticlesFromImage = ({ imageSrc }) => {
  const meshRef = useRef();
  const texture = useTexture(imageSrc);

  const particleData = useMemo(() => {
    // Create an offscreen canvas to extract image data
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions to match the image
    const cW = 100; // Adjust resolution as needed
    const cH = 100;

    ctx.drawImage(texture.image, 0, 0, cW, cH);
    const imageData = ctx.getImageData(0, 0, cW, cH).data;

    // Extract pixel positions where alpha > 0
    const particles = [];
    for (let y = 0; y < cH; y++) {
      for (let x = 0; x < cW; x++) {
        const index = (y * cW + x) * 4; // RGBA
        const alpha = imageData[index + 3];
        if (alpha > 50) {
          // Threshold for visibility
          particles.push({
            position: [
              (x / cW - 0.5) * 10, // Scale x to scene units
              -(y / cH - 0.5) * 10, // Scale y and invert
              Math.random() * 2 - 1, // Add random z-depth
            ],
            color: `rgb(${imageData[index]}, ${imageData[index + 1]}, ${imageData[index + 2]})`,
          });
        }
      }
    }
    return particles;
  }, [texture]);

  const particleCount = particleData.length;

  // Animation logic
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    for (let i = 0; i < particleCount; i++) {
      const dummy = new THREE.Object3D();
      const [x, y, z] = particleData[i].position;

      // Add sine wave animation
      dummy.position.set(x, y, z + Math.sin(time + i * 0.01) * 0.5);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, particleCount]} rotation={[Math.PI / 2, 0, Math.PI/2]}
    position={[40, 60, -40]}>
      <sphereGeometry args={[0.03, 12, 12]} />
      <meshStandardMaterial emissive="#00ca76" emissiveIntensity={5} toneMapped={false} />
    </instancedMesh>
  );
};

export default ParticlesFromImage

