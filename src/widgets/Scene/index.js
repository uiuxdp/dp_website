"use client";
import dynamic from "next/dynamic";
import * as THREE from "three";
import Image from "next/image";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import {
  OrbitControls,
  AdaptiveDpr,
  Cloud,
  Bvh,
  PerformanceMonitor,
  Environment,
  MeshReflectorMaterial,
  BakeShadows,
  Stage,
} from "@react-three/drei";
import { useScene } from "./useScene";
// import Drone from "./Drone";
import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
// import Boat from "./Boat";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Scanline,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
// import Car from "./Car";
const Drone = dynamic(() => import("./Drone"), { ssr: false });
// const Car = dynamic(() => import("./Car"), { ssr: false });
const Car = lazy(() => import("./Car"));
// const Cars = lazy(() => import("./Cars"));
const Dubai = dynamic(() => import("./Dubai"), { ssr: false });
import CameraRig from "@/components/CameraRig";
import Background from "@/components/Background";
// import Dubai from "./Dubai";
import GlowMaterial from "@/components/GlowMaterial";
import { UnrealBloomPass } from "three-stdlib";
import TextAnim from "@/components/TextAnim";
import Ocean from "./Ocean";
import CameraNew from "./CameraNew";
import Effects from "@/components/Effects";
import DubaiNew from "./DubaiNew";
import { useGSAP } from "@gsap/react";
import Boat from "./Boat";
import Rounds from "./Rounds";
import Boats from "./Boats";
// import Car from "./Car";
import Windows from "./Windows";
import StreetLight from "./StreetLight";
import { BlendFunction } from "postprocessing";
import Road from "./Road";
import { Carq, CarsInstance } from "./Cars";
import ParticlesFromImage from "./Particles";
extend({ UnrealBloomPass });

const Scene = ({ parentRef, progressLine }) => {
  const { main, width, model, Loader, setModel, modelWrap } = useScene({
    parentRef,
  });

  gsap.registerPlugin(ScrollTrigger);
  const cameraWrapRef = useRef();
  const boatRef1 = useRef(null);
  const boatRef2 = useRef(null);
  const boatRef3 = useRef(null);
  const carRef = useRef(null);
  const carRef1 = useRef(null);
  const carRef2 = useRef(null);
  const carRef3 = useRef(null);
  const cameraRef = useRef();
  const progressRef = useRef(0);
  const curveRef = useRef();
  const LINE_NB_POINTS = 1000;
  const CURVE_DISTANCE = 10;
  // useFrame((state) => {
  //   state.camera.lookAt(0, 0, 0)
  // })
  const [isCarRefReady, setIsCarRefReady] = useState(false); // Track when carRef is populated

  useEffect(() => {
    if (carRef.current) {
      console.log("Car ref is  ready:", carRef.current);
      setIsCarRefReady(true);
    }
  }, [carRef.current]);
  // const curvePoints = useMemo(
  //   () => [
  //     // new THREE.Vector3(0, 0, 0),
  //     // new THREE.Vector3(0, 0, -CURVE_DISTANCE),
  //     // new THREE.Vector3(10, 0, -2 * CURVE_DISTANCE),
  //     // new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
  //     // new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
  //     // new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
  //     new THREE.Vector3(30, 0, -1.2 * CURVE_DISTANCE),
  //     new THREE.Vector3(0, 0, -2 * CURVE_DISTANCE),
  //     new THREE.Vector3(2, 0, -4 * CURVE_DISTANCE),
  //     new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
  //     new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
  //     new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
  //   ],
  //   []
  // );

  // const curve = useMemo(() => {
  //   return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  // }, []);

  // const shape = useMemo(() => {
  //   const shape = new THREE.Shape();
  //   shape.moveTo(0, -0.5);
  //   shape.lineTo(0, 0.5);

  //   return shape;
  // }, [curve]);

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

  useGSAP(
    (context, contextSafe) => {
      if (carRef.current && isCarRefReady) {
        gsap.set(progressLine.current, {
          scaleX: 0,
          transformOrigin: "left left",
        });
        gsap.set(carRef.current?.position, { z: 15, x: 0, y: 0.55 });
        // gsap.set(cameraRef.current, {   keyframes: {
        //   fov: [70, 100, 100, 70, 70],
        //   ease: "power1.inOut"
        // },});
        gsap.set(carRef1.current?.position, { z: 15, x: -2, y: 0.55 });
        gsap.set(carRef2.current?.position, { z: 15, x: 2, y: 0.55 });
        // gsap.set(cameraWrapRef.current?.position, { y: 10 });
        gsap.set([boatRef2.current.rotation, boatRef3.current.rotation], {
          x: -Math.PI / 2,
          y: 0,
          z: 0,
        });
        gsap.set([boatRef1.current.rotation], {
          x: -Math.PI / 2,
          y: 0,
          z: Math.PI / 8,
        });
        gsap.set(boatRef1.current.position, { x: 20, y: -3.8, z: -30 });
        gsap.set(boatRef2.current.position, { x: 20, y: -3.8, z: -20 });
        gsap.set(boatRef3.current.position, { x: 20, y: -3.8, z: -5 });
        // gsap.set([".title1", ".title2"], { autoAlpha: 0, yPercent: 100 });

        function progressAnim() {
          var tl = gsap.timeline();
          //           tl.to(".title1",{yPercent: 0, autoAlpha: 1})
          // tl.to(".title1",{yPercent: -100,autoAlpha: 0}, "+=0.5")
          // tl.to(".title2",{yPercent: 0, autoAlpha: 1}, "<")
          // tl.to(".title2",{yPercent: -100,autoAlpha: 0}, "+=0.5")
          tl.to(progressLine.current, { scaleX: 1, duration: 10 });
          // tl.to(cameraWrapRef.current.position,{y:0, duration: 1},"<")
          tl.to(carRef.current?.position, { z: -50, duration: 4 }, 0.7);
          tl.seek(2, false);
          tl.to(
            boatRef1.current.position,
            { x: 60, duration: 2, ease: "expo.inOut" },
            2.6
          );

          tl.to(
            boatRef2.current.position,
            { x: 60, duration: 2, ease: "expo.inOut" },
            2.8
          );
          tl.to(
            boatRef3.current.position,
            { x: 60, duration: 2, ease: "expo.inOut" },
            3.2
          );
          return tl;
        }

        // function carAnimation() {
        //   var tl = gsap.timeline({defaults:{
        //     duration: 30
        //   }});
        //   tl.to(carRef.current?.position, { z: -30});
        //   tl.addLabel("animLabel2")
        //   return tl;
        // }

        // function cameraAnim2() {
        //   var tl = gsap.timeline({defaults:{
        //     duration: 30
        //   }});
        //   tl.to(boatRef1.current.position, { x: 30 });
        //   tl.to(boatRef2.current.position, { x: 30 });
        //   tl.to(boatRef3.current.position, { x: 30 });
        //   return tl;
        // }

        // function cameraAnim3() {
        //   var tl = gsap.timeline();
        //   //...add animations here...
        //   return tl;
        // }
        console.log(cameraRef.current, "cameraRef.current");

        const master = gsap.timeline({
          scrollTrigger: {
            start: "top top",
            trigger: parentRef.current,
            end: "2200%",
            scrub: true,
            pin: true,
            onUpdate({ progress, direction, isActive }) {
              progressRef.current = progress;
              const pro = progress;
              const position = curveRef.current.getPointAt(pro);
              cameraRef.current.position.copy(position);
              // cameraRef.current.position.lerp(position, 0.1);
              cameraRef.current.updateMatrixWorld();
            },
          },
        });

        master.add(progressAnim());
        // master.add(carAnimation(), 10);
        // master.add(cameraAnim2(),"<25%");
        // master.add(cameraAnim3());
        // , "+=1"
        var total = master.duration();
        console.log(total, "totaltimm");
      }
    },
    {
      scope: parentRef,
      dependencies: [carRef, isCarRefReady, cameraRef, boatRef1, progressLine],
    }
  );

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
      {/* <directionalLight
            castShadow
            position={[10, 20, 15]}
            // shadow-camera-right={0}
            // shadow-camera-top={0}
            // shadow-camera-left={0}
            // shadow-camera-bottom={0}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={.5}
            shadow-bias={-0.0001}
          /> */}
      {/* <TextAnim parentRef={parentRef} /> */}

      <group
        ref={modelWrap}
        scale={1}
        rotation={[0, 0, 0]}
        position={[0, 0, 3]}
      >
        {/* <Drone
          ref={model}
          parentRef={parentRef}
          onUpdate={setModel}
          scale={1}
        /> */}
      </group>

      {/* <Boat
        // ref={boatRef}
        parentRef={parentRef}
        rotation={[0, 0, 0]}
        position={[20, -3.5, -30]}
        scale={3}
      /> */}

      <Bvh firstHitOnly>
        <Boats ref1={boatRef1} ref2={boatRef2} ref3={boatRef3} />
        {/* <Cars ref1={carRef1} ref2={carRef2} ref3={carRef3} /> */}
      </Bvh>
      <Suspense fallback={null}></Suspense>
      {/* <Bvh firstHitOnly>
     
      </Bvh> */}
      {/* <Suspense fallback={null}> */}

      <Car ref={carRef} rotation={[0, -Math.PI, 0]} />
      {/* <CarsInstance frames={1}  castShadow receiveShadow>
        <group ref={carRef}  rotation={[0, -Math.PI, 0]}>
        <Carq />
        </group>
        <Carq ref={carRef2} rotation={[0, -Math.PI, 0]}/>
          <Carq ref={carRef3} rotation={[0, -Math.PI, 0]}/>
      </CarsInstance> */}
      {/* <Cars ref={carRef}/> */}
      {/* </Suspense> */}

      {/* 
      <Dubai
        parentRef={parentRef}
        rotation={[0, Math.PI / 1.6, 0]}
        position={[0, 0, 0]}
        scale={0.1}
      /> */}
      <Rounds />
      <DubaiNew
        parentRef={parentRef}
        rotation={[0, 0, 0]}
        position={[12.9, 0, 0]}
        scale={30}
      />
      <Windows />
      <Road />
      <ParticlesFromImage imageSrc="/images/loga.png" />
      <StreetLight position={[-1, -7, 0]} />
      <Ocean position-y={-4.5} scale={400} position-x={20} />

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
      <PerformanceMonitor
        onIncline={() => console.log("good dpr")}
        onDecline={() => console.log("bad dpr")}
      />
      <Perf position="bottom-left" />
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
      <group ref={cameraWrapRef}>
        <CameraRig
          cameraRef={cameraRef}
          progressRef={progressRef}
          curveRef={curveRef}
        />
      </group>
      {/* <CameraNew  parentRef={parentRef} /> */}
      <OrbitControls enableZoom={false} />
      {/* <group position-y={0.1} position-z={0}>
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
      </group> */}

      {/* <Suspense fallback={null}>
        <Cloud position={[35, 130, -45]} speed={0.2} opacity={1} />
        <Cloud position={[40, 140, -40]} speed={0.2} opacity={0.5} />
        <Cloud position={[45, 120, -45]} speed={0.2} opacity={1} />
        <Cloud position={[30, 112, -40]} speed={0.2} opacity={0.5} />
        <Cloud position={[30, 120, -40]} speed={0.2} opacity={0.75} />
      </Suspense> */}

      {/* <Effects disableGamma>
        <unrealBloomPass threshold={1}  strength={1.0} radius={0.5} />
      </Effects> */}
      {/* <Effects /> */}
      <BakeShadows />
      <EffectComposer multisampling={2}>
        <Bloom mipmapBlur luminanceThreshold={1} />

        {/* <Vignette
          offset={0.5} 
          darkness={0.5} <
          eskil={false} 
        /> */}
        {/* <Noise premultiply blendFunction={BlendFunction.SCREEN}  /> */}

        {/* <Scanline density={3} opacity={.2} /> */}
      </EffectComposer>
      {/* <axesHelper position-y={1} args={[40, 40, 40]} /> */}
      {/* <gridHelper /> */}
    </>
  );
};

export default Scene;
