// import React from "react";
// import { shaderMaterial } from "@react-three/drei";
// import { extend } from "@react-three/fiber";
// import * as THREE from "three";

// const GlowMaterial = shaderMaterial(
//   {
//     glowColor: new THREE.Color(0xff0000),
//     intensity: 1.0,
//     falloff: 0.5,
//   },
//   // Vertex Shader
//   `
//   varying vec3 vNormal;
//   void main() {
//     vNormal = normalize(normalMatrix * normal);
//     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//   }
//   `,
//   // Fragment Shader
//   `
//   uniform vec3 glowColor;
//   uniform float intensity;
//   uniform float falloff;
//   varying vec3 vNormal;

//   void main() {
//     float glow = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), falloff) * intensity;
//     gl_FragColor = vec4(glowColor, glow);
//   }
//   `
// );

// extend({ GlowMaterial });

// const GlowMaterialW = () => (
//   <mesh >
//     <sphereGeometry args={[3, 32, 32]} />
//     <glowMaterial glowColor="#ff0000" intensity={1} falloff={1.0} />
//   </mesh>
// );
// export default GlowMaterialW;

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GlowMaterialW = () => {
  const meshRef = useRef();
  const clockRef = useRef(0); // To track elapsed time

  useFrame((_, delta) => {
    clockRef.current += delta; // Increment time by the frame delta
    const blink = Math.abs(Math.sin(clockRef.current * 2)); // Blink effect
    const color = new THREE.Color(
      blink > 0.5 ? "#ff0000" : "#0000ff" // Switch colors like police lights
    );

    // Update material properties
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = blink;
      meshRef.current.material.emissive = color;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial emissive={new THREE.Color("#000000")} emissiveIntensity={0} />
    </mesh>
  );
};

export default GlowMaterialW;
