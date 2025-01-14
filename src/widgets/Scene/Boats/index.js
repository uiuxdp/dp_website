"use client";
import { Instances, useGLTF, Instance } from "@react-three/drei";
// import Boat from "../Boat";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Boats({ ref1, ref2, ref3 }) {
  const { nodes, materials } = useGLTF("/images/models/boat.glb");

  return (
    <Instances
      range={100}
      material={materials.magura_v5}
      geometry={nodes.magura_v5.geometry}
      castShadow
      receiveShadow
    >
      <Boat
        position={[20, -3.5, -30]}
        rotation={[-Math.PI / 2, 0, Math.PI / 8]}
        boatRef={ref1}
      />
      <Boat
        position={[20, -3.5, -20]}
        rotation={[-Math.PI / 2, 0, 0]}
        boatRef={ref2}
      />
      <Boat
        position={[20, -3.5, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
        boatRef={ref3}
      />
    </Instances>
  );
}

export default Boats;
useGLTF.preload("/images/models/boat.glb");

const Boat = ({ boatRef }, ...props) => {
  const item = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    item.current.rotation.x = Math.sin(time) * 0.05;
    item.current.rotation.y = Math.cos(time * 0.7) * 0.03;
  });

  return (
    <group {...props}>
      <group ref={boatRef} scale={150}>
        <Instance ref={item} />
      </group>
    </group>
  );
};
