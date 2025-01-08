"use client";
import { Instances, useGLTF } from "@react-three/drei";
import Boat from "../Boat";

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
