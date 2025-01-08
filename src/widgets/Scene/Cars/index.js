"use client";
import { Instances, useGLTF } from "@react-three/drei";
import Car from "../Car";

function Cars({ ref1, ref2, ref3 }) {
  const { nodes, materials } = useGLTF("/images/models/car.glb");

  return (
    <Instances
      range={100}
      material={materials.magura_v5}
      geometry={nodes.magura_v5.geometry}
      castShadow
      receiveShadow
    >
      <Car
        position={[20, -3.5, -30]}
        rotation={[-Math.PI / 2, 0, Math.PI / 8]}
        boatRef={ref1}
      />
      <Car
        position={[20, -3.5, -20]}
        rotation={[-Math.PI / 2, 0, 0]}
        boatRef={ref2}
      />
      <Car
        position={[20, -3.5, -5]}
        rotation={[-Math.PI / 2, 0, 0]}
        boatRef={ref3}
      />
    </Instances>
  );
}

export default Cars;
useGLTF.preload("/images/models/car.glb");
