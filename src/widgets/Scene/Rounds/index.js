"use client";
import { Expo, Power3, gsap, Elastic } from "gsap";
import * as THREE from "three";
import {
  Line,
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { easing } from "maath";
import { useGSAP } from "@gsap/react";
import { SphereGeometry } from "three";

const Rounds = (props) => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      {/* <group
        rotation={[Math.PI / 2, 0, Math.PI]}
        position={[40, 60, -40]}
        dispose={null}
      >
        <mesh>
          <torusGeometry args={[10, 1, 2, 100]} />{" "}
          <meshStandardMaterial
            emissive="#00ca76"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      </group> */}

      <group
        rotation={[Math.PI / 2, 0, Math.PI]}
        position={[40, 80, -40]}
        dispose={null}
      >
        <mesh>
          <torusGeometry args={[10, 1, 2, 100]} />{" "}
          <meshStandardMaterial
            emissive="#00ca76"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        {/* <DottedCircle radius={5} segments={100} color="green"  dashSize={0.2} gapSize={0.3} /> */}
      </group>

      {/* <group
        rotation={[Math.PI / 2, 0, Math.PI]}
        position={[40, 100, -40]}
        dispose={null}
      >
        <mesh>
          <torusGeometry args={[10, 1, 2, 100]} />{" "}
          <meshStandardMaterial
            emissive="#00ca76"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        <DottedCircle radius={5} segments={100} color="green" dashSize={0.2} gapSize={0.3} />
      </group> */}
    </>
  );
};
export default Rounds;

function DottedCircle({
  radius = 5,
  segments = 100,
  color = "black",
  dashSize = 0.1,
  gapSize = 0.2,
}) {
  // Generate points for the circle
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
    );
  }

  return (
    <Line
      points={points} // Circle points
      color={color} // Line color
      lineWidth={5} // Width of the line
      dashed // Enable dashed line
      dashSize={dashSize} // Length of dashes
      gapSize={gapSize} // Length of gaps
      
    />
  );
}
