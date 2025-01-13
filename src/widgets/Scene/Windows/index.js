import { MathUtils } from "three";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { useControls } from "leva";

const generateDynamicItems = (totalCount, itemsPerRow) => {
    const items = [];
  
    for (let i = 0; i < totalCount; i++) {
      const x = (i % itemsPerRow) * 1.5; // Columns
      const y = Math.floor(i / itemsPerRow) * 1.5; // Rows
      const z = 0; // Default z-coordinate
      items.push({ x, y, z });
    }
  
    return items;
  };
  
  const totalCount = 20; 
  const itemsPerRow = 4; 
  const items = generateDynamicItems(totalCount, itemsPerRow);

export default function Windows() {
  const ref = useRef();
  const { px, py, pz,rX,rY,rZ } = useControls({
    px: { value: 37.9, min: -140, max: 140, step: 0.01 },
    py: { value: 8, min: -140, max: 140, step: 0.01 },
    pz: { value: 10.64, min: -140, max: 140, step: 0.01 },
    rX: { value: 0, min: -140, max: 140, step: 0.01 },
    rY: { value: 0.08, min: -140, max: 140, step: 0.01 },
    rZ: { value: 0, min: -140, max: 140, step: 0.01 },
  });

  

  return (
    <Instances
      limit={items.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[px, py, pz]}
      rotation={[rX,rY,rZ]}
    >
      {/* <sphereGeometry args={[0.45, 64, 64]} /> */}
      <boxGeometry args={[0.25, 0.05, 0.05]} />
      {/* <meshStandardMaterial   color={new THREE.Color(0, 202, 118)}   emissiveIntensity={0.1}    /> */}
      <meshStandardMaterial emissive="#00ca76" emissiveIntensity={8} toneMapped={false} />
      {items.map((data, i) => (
        <Window key={i} {...data} />
      ))}
    </Instances>
  );
}

function Window({ x, y, z }) {
  const ref = useRef();
  //   useFrame((state) => {
  //     const t = factor + state.clock.elapsedTime * (speed / 2);
  //     ref.current.scale.setScalar(Math.max(1.5, Math.cos(t) * 5));
  //     ref.current.position.set(
  //       Math.cos(t) +
  //         Math.sin(t * 1) / 10 +
  //         xFactor +
  //         Math.cos((t / 10) * factor) +
  //         (Math.sin(t * 1) * factor) / 10,
  //       Math.sin(t) +
  //         Math.cos(t * 2) / 10 +
  //         yFactor +
  //         Math.sin((t / 10) * factor) +
  //         (Math.cos(t * 2) * factor) / 10,
  //       Math.sin(t) +
  //         Math.cos(t * 2) / 10 +
  //         zFactor +
  //         Math.cos((t / 10) * factor) +
  //         (Math.sin(t * 3) * factor) / 4
  //     );
  //   });
//   new THREE.Color(0, 202, 118)
  return <Instance ref={ref} position={[x, y, z]}  
//   color={new THREE.Color(0, 202 / 255, 118 / 255)}
//   emissiveIntensity={0.5} 
//   color={new THREE.Color(0, 202, 118)} 
    />;
}

