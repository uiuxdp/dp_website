"use client";
import * as THREE from "three";
import {
  Cloud,
  Environment,
  Lightformer,
  SoftShadows,
  Sphere,
  Stars,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { LayerMaterial, Depth, Gradient } from "lamina";
import { useFrame } from "@react-three/fiber";

const Background = ({ backgroundColors }) => {
  //   const mesh = useRef();
  //   useFrame((state, delta) => {
  //     mesh.current.rotation.x =
  //       mesh.current.rotation.y =
  //       mesh.current.rotation.z +=
  //         delta;
  //   });

  const start = 0.2;
  const end = -1;

  return (
    <>
      {/* <Environment resolution={512}>
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          form="ring"
          color="red"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI/2}>
      <LayerMaterial lighting="physical"  side={THREE.BackSide}>
        <Gradient colorA={"#111"} colorB={"red"}/>
        </LayerMaterial></Sphere> */}

      <fog attach="fog"  args={["#000d0a", 20, 60]} />
      {/* <pointLight position={[10, -10, -20]} intensity={10} /> */}
      {/* <pointLight position={[-10, -10, -20]} intensity={10} /> */}
      <SoftShadows samples={3} />

      <Stars radius={35} depth={20} count={500} factor={1.5} />

    


      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#111"} side={THREE.BackSide}>
          <Gradient
            colorA={"#111"}
            colorB={"#25af89"}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256} frames={Infinity}>
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 2, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={1}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
        {/* <Lightformer
          form="ring"
          color="red"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          // onUpdate={(self) => self.lookAt(0, 0, 0)}
        /> */}
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient
              colorA={"#111"}
              colorB={"#25af89"}
              axes={"y"}
              start={start}
              end={end}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>

      {/* <gridHelper /> */}
    </>
  );
};

export default Background;
