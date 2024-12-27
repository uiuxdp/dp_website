import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from "three";
import gsap from 'gsap';

const FlashingLight = () => {
  const lightRef = useRef();
  const sphereRef = useRef();

  // Animate the light intensity and sphere material using GSAP
  useEffect(() => {
    // Animate light intensity
    gsap.to(lightRef.current, {
      intensity: 0, // Min intensity (dark state)
      duration: 0.5, // Duration of fading out
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation after each cycle
      ease: 'power1.inOut', // Smooth easing function
    });

    // Animate the sphere's material (emissive glow effect)

  }, []);

  return (
    <group position={[0,200, 5]}>
      {/* Light Source */}
      <pointLight
        ref={lightRef}
        position={[0, 5, 0]}
        intensity={10} // Start with a normal intensity
        color="red"
      />
      {/* Flashing Sphere */}
      <mesh ref={sphereRef} position={[0, 5, 0]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial color="red"  />
        {/* emissive="hotpink" emissiveIntensity={1} */}
      </mesh>
    </group>
  );
};

export default FlashingLight