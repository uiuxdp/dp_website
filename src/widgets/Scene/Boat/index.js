"use client";
import { gsap } from "gsap";
import {Instance} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Boat = ({boatRef},...props) => {
  gsap.registerPlugin(ScrollTrigger);
  const item = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    item.current.rotation.x = Math.sin(time) * 0.05;
    item.current.rotation.y = Math.cos(time * 0.7) * 0.03;
  });


  return (
    <group {...props} >
      <group ref={boatRef} scale={150}>
        <Instance ref={item} />
      </group>
    </group>
  );
};
export default Boat;
