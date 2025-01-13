import { MathUtils } from "three";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { useControls } from "leva";

  const items=[
    {x: -1.8, y: .7,z:-10},
    {x: 0, y: .7,z:-10},
    {x: 1.8, y: .7,z:-10},

  ]

export default function Road() {
  const ref = useRef();
  const points = []
  points.push(new THREE.Vector3(1.5, .7, 30))
  points.push(new THREE.Vector3(1.5, .7, -60))
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
  return (
    <Instances
      limit={items.length}
      ref={ref}
      castShadow
      receiveShadow
    //   position={[px, py, pz]}
    //   rotation={[rX,rY,rZ]}
    >
      <boxGeometry  args={[0.02, .02, 80]} position={[0, 0, 0]}/>
      <meshStandardMaterial emissive="#00ca76" emissiveIntensity={8} toneMapped={false} />
      {items.map((data, i) => (
        <Window key={i} {...data} />
      ))}
    </Instances>
  );
}

function Window({ x, y, z }) {
  const ref = useRef();
 
  return <Instance ref={ref} position={[x, y, z]}  />;
}

