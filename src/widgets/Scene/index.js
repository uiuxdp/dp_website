"use client";
import * as THREE from "three";
import Image from "next/image";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  Scroll,
  CameraControls,
  Stats,
  Lightformer,
  MeshReflectorMaterial,
  AdaptiveDpr,
  Sphere,
  Effects,
  Text,
  Billboard,
  Trail,
  Html,
} from "@react-three/drei";
import { useScene } from "./useScene";
import Drone from "./Drone";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Boat from "./Boat";
import {
  Bloom,
  EffectComposer,
  Scanline,
  ToneMapping,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import Car from "./Car";
import CameraRig from "@/components/CameraRig";
import Background from "@/components/Background";
import Dubai from "./Dubai";
import GlowMaterial from "@/components/GlowMaterial";
import { UnrealBloomPass } from "three-stdlib";
import TextAnim from "@/components/TextAnim";

extend({ UnrealBloomPass });

const Scene = ({ parentRef }) => {
  const { main, width, model, Loader, setModel, modelWrap, cameraRef } =
    useScene({ parentRef });
  const lineMaterialRef = useRef();
  const boatRef = useRef(null);
  const LINE_NB_POINTS = 1000;
  const CURVE_DISTANCE = 10;

  // useFrame((state) => {
  //   state.camera.lookAt(0, 0, 0)
  // })

  const curvePoints = useMemo(
    () => [
      // new THREE.Vector3(0, 0, 0),
      // new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      // new THREE.Vector3(10, 0, -2 * CURVE_DISTANCE),
      // new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      // new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      // new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      new THREE.Vector3(30, 0, -1.2 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(2, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    []
  );

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.5);
    shape.lineTo(0, 0.5);

    return shape;
  }, [curve]);

  // const [diffuse, normal, roughness] = useLoader(THREE.TextureLoader, [
  //   "/images/textures/asphalt_02_diff_1k.jpg",
  //   "/images/textures/asphalt_02_nor_gl_1k.jpg",
  //   "/images/textures/asphalt_02_rough_1k.jpg",
  // ]);

  // useEffect(() => {
  //   [diffuse, normal, roughness].forEach((texture) => {
  //     texture.wrapS = THREE.RepeatWrapping;
  //     texture.wrapT = THREE.RepeatWrapping;
  //     texture.repeat.set(1, 1);
  //     texture.needsUpdate = true;
  //   });
  // }, [diffuse, normal, roughness]);

  const backgroundColors = useRef({
    colorA: "#3535cc",
    colorB: "#abaadd",
  });
  return (
    <>
      <Loader />
      <Background backgroundColors={backgroundColors} />
      {/* <CameraControls /> */}
      
      <ambientLight intensity={1} />
      {/* <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        /> */}

      <TextAnim parentRef={parentRef} />
      {/* <group position={[0,10,-40]} >
        <Text fontSize={2}>
          Hyrule Castle
          <meshStandardMaterial color={"red"} />
        </Text>
      </group> */}

      <group
        ref={modelWrap}
        scale={1}
        rotation={[0, 0, 0]}
        position={[0, 0, 3]}
      >
        <Drone
          ref={model}
          parentRef={parentRef}
          onUpdate={setModel}
          scale={1}
        />
      </group>
      {/* <Boat
              ref={boatRef}
              parentRef={parentRef}
              rotation={[0, 0, 0]}
              // position={[0, -3, 0]}
              scale={1}
            /> */}
      <Car
        ref={boatRef}
        parentRef={parentRef}
        rotation={[0, -Math.PI / 1.8, 0]}
        position={[0, 0, 0]}
      />

      <Dubai
        parentRef={parentRef}
        rotation={[0, Math.PI / 1.6, 0]}
        position={[0, 0, 0]}
        scale={0.1}
      />

      {/*         
            <ContactShadows
              position={[0, 0, 0]}
              opacity={0.3}
              scale={5}
              blur={6}
              far={4}
            /> */}
      {/* <axesHelper scale={2} args={[5]} /> */}
      {/* <Effects disableGamma>
        <unrealBloomPass threshold={1} strength={1.0} radius={0.5} />
      </Effects> */}

      <AdaptiveDpr pixelated />

      <Perf position="top-left" />
      {/* <Environment preset="night" /> */}
      {/* <hemisphereLight intensity={0.5} /> */}
      {/* <ContactShadows resolution={1024} frames={1} position={[0, 0, 0]} scale={15} blur={0.8} opacity={.2} far={20} /> */}
      {/* <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[40, 10]}
            resolution={2048}
            mixBlur={5}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#111111"
            metalness={0.6}
            roughness={1}
          />
        </mesh> */}
      <CameraRig parentRef={parentRef} />
      <OrbitControls enableZoom={false} />
      <group position-y={0.1} position-z={0}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"#0BDC8F"}
            // red
            // map={diffuse}
            // normalMap={normal}
            // roughnessMap={roughness}
            roughness={0}
            ref={lineMaterialRef}
            // envMapIntensity={10}
            // onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>
      {/* <EffectComposer disableNormalPass > */}
      {/* <Bloom 
            resolutionX={.5}
            resolutionY={.5} 
          opacity={1} luminanceThreshold={0.4} mipmapBlur luminanceSmoothing={1} intensity={.5}  radius={0.2}  /> */}
      {/* <ToneMapping />
        </EffectComposer> */}

      {/* <Effects disableGamma>
        <unrealBloomPass threshold={1}  strength={1.0} radius={0.5} />
      </Effects> */}

      <EffectComposer multisampling={2}>
        <Bloom mipmapBlur luminanceThreshold={0.5} />
        {/* <Scanline density={1.4} /> */}
      </EffectComposer>
      <axesHelper position-y={1} args={[40, 40, 40]} />
      <gridHelper />
    </>
  );
};

export default Scene;
