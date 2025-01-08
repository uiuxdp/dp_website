"use client";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
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
    
    <group rotation={[Math.PI/2, 0 ,Math.PI]} position={[40, 60, -40]}  dispose={null}>
      <mesh>
        <torusGeometry args={[10, 2, 16, 100]} />{" "}
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>

    <group rotation={[Math.PI/2, 0 ,Math.PI]} position={[40, 80, -40]}  dispose={null}>
      <mesh>
        <torusGeometry args={[10, 2, 16, 100]} />{" "}
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>


    <group rotation={[Math.PI/2, 0 ,Math.PI]} position={[40, 100, -40]}  dispose={null}>
      <mesh>
        <torusGeometry args={[10, 2, 16, 100]} />{" "}
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>
    </>
  );
};
export default Rounds;
