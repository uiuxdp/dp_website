"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Sphere } from "@react-three/drei";
import { easing } from "maath";
import { PointLightHelper } from "three";


const glowRed = new THREE.MeshBasicMaterial({
  color: new THREE.Color(7, 0, 0.5),
  toneMapped: false,
});
const glowBlue = new THREE.MeshBasicMaterial({
  color: new THREE.Color(0, 0.5, 20),
  toneMapped: false,
});
const glowGreen = new THREE.MeshBasicMaterial({
  color: new THREE.Color(0, 3, 1),
  toneMapped: false,
});


const PoliceLight = (props) => {
  const exhaust = useRef(null);
  const clock =new THREE.Clock(false)
  // useFrame(() => {

  //   console.log( clock.getElapsedTime() * 200 ,"exhaust.current.scale.x");
  //   // exhaust.current.scale.x = 1 + Math.sin(clock.getElapsedTime() * 200)
  //   // exhaust.current.scale.y = 1 + Math.sin(clock.getElapsedTime() * 200)
  // })
  
  
  return (
    <group>
      {/* <mesh ref={exhaust} scale={[1, 1, 13]} position={[0, 1, 30]}>
      <boxGeometry args={[2, 1, 2]} />
        <meshBasicMaterial color="lightblue" />
      </mesh> */}
      <LightItem position={[0, 0, 0]} initialMaterial={glowRed} />
      <LightItem position={[0.05, 0, 0]} initialMaterial={glowBlue} />
      <LightItem position={[-0.05, 0, 0]} initialMaterial={glowBlue} />
    </group>
  );
};

export default PoliceLight;

// const LightItem = (props) => {
//   return (
//     <mesh castShadow receiveShadow material={glowBlue}  {...props} >
//       <boxGeometry args={[0.01, 0.08, 0.05]} />
//     </mesh>
//   );
// };

const LightItem = ({ initialMaterial, ...props }) => {
  const meshRef = useRef();
  const isOn = useRef(true);
  const blinkSpeed = 3;

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Toggle light on and off based on time
    isOn.current = Math.sin(elapsedTime * Math.PI * 2 * blinkSpeed) > 0;
    const material = meshRef.current.material;
    if (material) {
      material.opacity = isOn.current ? 1 : 0.2; // Adjust opacity for blinking effect
      material.transparent = true;
    }
  });

  return (
    <mesh
      ref={meshRef}
      material={initialMaterial}
      castShadow
      receiveShadow
      {...props}
    >
      <boxGeometry args={[0.01, 0.08, 0.05]} />
    </mesh>
  );
};
