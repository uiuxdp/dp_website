"use client";
import * as THREE from "three";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
  MeshTransmissionMaterial,
  PerspectiveCamera,
  PivotControls,
  Sphere,
  TransformControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { useGSAP } from "@gsap/react";
import PoliceLight from "@/widgets/PoliceLight";

const Drone = ({parentRef},props) => {
  gsap.registerPlugin(ScrollTrigger);
  const head = useRef();
  const cameraRail = useRef();
  const clamp = useRef();
  const cam = useRef();
  const LINE_NB_POINTS = 1000;
  console.log(head, "modelmodelmodelmodel");
  //   const stripe = useRef();
  //   const light = useRef();
  const propeller1 = useRef();
  //   const { scene } = useGLTF("/images/models/drone.glb");
  const { nodes, materials, animations } = useGLTF("/images/models/drone1.glb");
  const { ref, actions, names } = useAnimations(animations);
  console.log(animations, names, "refrefrefrefref");
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  useFrame((state, delta) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
    // stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50);
    // propeller1.current.rotation.y += 0.1;

    // Get elapsed time
    const time = state.clock.getElapsedTime();

    // ref.current.position.y = Math.sin(time * .5) * 0.1;
    // ref.current.rotation.z = Math.sin(time) * 0.05;
    // ref.current.rotation.x = Math.cos(time * 0.7) * 0.03;

    easing.dampE(
      head.current.rotation,
      [
        state.pointer.y * (state.camera.position.z > 1 ? -1 / 2 : 1 / 2),
        state.pointer.x * (state.camera.position.z > 1 ? 1 / 2 : -1 / 2),
        0,
      ],
      0.4,
      delta
    );

    easing.dampE(
      clamp.current.rotation,
      [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0],
      0.4,
      delta
    );

    // light.current.intensity = 1 + t * 4;
  });

  // camera.lookAt(5, 5, 5);

  const curveRef = useRef();
  //   const progress = useRef(0);
  const CURVE_DISTANCE = 10;
  // Define the CatmullRomCurve3
  const points = [
    // new THREE.Vector3(0, 2, 0),
    // new THREE.Vector3(0, 2, -CURVE_DISTANCE),
    new THREE.Vector3(-15, 3, -1.5 * CURVE_DISTANCE),
    new THREE.Vector3(-5, 3, -1.2 * CURVE_DISTANCE),
    new THREE.Vector3(0, 2.5, -1.2 * CURVE_DISTANCE),
    new THREE.Vector3(10, 2, -2 * CURVE_DISTANCE),
    new THREE.Vector3(0, 4, -5 * CURVE_DISTANCE),
    new THREE.Vector3(0, 13, -6 * CURVE_DISTANCE),
    new THREE.Vector3(0, 18, -7 * CURVE_DISTANCE),
  ];
  //   const curve = new THREE.CatmullRomCurve3(points);

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.5);
  }, []);

  curveRef.current = curve;
  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.01);
    shape.lineTo(0, 0.01);

    return shape;
  }, [curve]);
  useGSAP(
    (context, contextSafe) => {
      // const trigger1 = context.selector('.trigger-1')
      // gsap.set(ref.current.position, { x: 2, z: 0, y: 2 });
      // gsap.set(ref.current.rotation, { y: Math.PI/2,  });
      ScrollTrigger.create({
        start: "top top",
        end: "600%",
        // markers:true,
        trigger: parentRef?.current,
        onUpdate({ progress, direction, isActive }) {
          const pro = 1 - progress;
          const position = curveRef.current.getPointAt(pro);
          const lookAtTarget = curveRef.current.getPointAt((pro + 0.01) % 1);
          cameraRail.current.position.copy(position);
          cameraRail.current.lookAt(lookAtTarget);
        },
      });
      gsap.set(ref.current.position, { z: -2 });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          // markers: true,
          end: "100%",
          scrub: 0.4,
        },
      });
      //   console.log(model,"modelmodel");
      // tl1.to(ref.current.position, { z: -1 });
      // tl1.to(ref.current.position, { z: 1 });
      //   tl1.to(camera.rotation, { x: 10 }, "<");
      // tl1.to(camera.position, { y: -14 });
      //   tl1.to(camera.rotation, { x: -Math.PI / 2 },"<");
      // tl1.to(head.current.position, { y: 2, x: 2, z: 0 }, "<");
      // tl1.to(ref.current.position, { x: -4 }, "<");
      //  tl1.to(ref.current.rotation, {
      //   keyframes: {
      //    "0%":   {  y: 0},
      //    "50%":  {y: Math.PI/2, ease: 'power3.inOut'},
      //    "100%": { y: 0, ease: 'none', onStart: () => { console.log('start')} }
      //   },
      //  },"<")

      // tl1.to(ref.current.position, { x: 0 });
      // tl1.to(ref.current.position, { x: -3 });
      //   tl1.to(ref.current.rotation, { z: Math.PI, x: 0 , y: 0 });
      //   tl1.to(model.position, { x: 2 });
      //   tl1.to(model.position, { x: 0 });
      //   tl.to(model.position, { y: 3 });

      //   tl.to(model.rotation, { x: 1 },"<");
      //   tl.to(model.position, { x: 3 });
      //   tl.to(model.position, { x: -3 });

      // const tl = gsap.timeline({ repeat: 0, paused: true });
      // tl.to(
      //   head.current?.rotation,
      //   { x: 0, z: 0, y: 0, ease: Expo.easeOut, duration: 3 },
      //   0
      // );
      // tl.to(
      //   head.current?.position,
      //   { y: 2, x: 2, z: 0, ease: Expo.easeOut, duration: 3 },
      //   0
      // );
      // tl.play(0);

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {},

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // all
        all: function () {},
      });

      // gsap.to(pinner[0], {
      //   scrollTrigger: {
      //     trigger: pinner[0],
      //     end: "1700%",
      //     scrub: 1.5,
      //     pin: true,
      //     pinSpacer: true,
      //     pinSpacing: true,
      //     parent: main.current,
      //   },
      // });
    },
    { scope: ref, dependencies: [] }
  );

  return (
    <>
        <group position-y={-1}>
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
            color={"green"}
            // red
            // map={diffuse}
            // normalMap={normal}
            // roughnessMap={roughness}
            roughness={0.2}
            transparent
            // envMapIntensity={10}
            // onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      <group ref={ref} {...props} dispose={null}>
        <group ref={cameraRail}>
          <group ref={head}>
            <PoliceLight />
            <group name="uploads_files_3653841_Drone_Obobj">
              <mesh
                name="GEO_Propeller_03_remesh_remesh_(Copy)"
                castShadow
                receiveShadow
                geometry={
                  nodes["GEO_Propeller_03_remesh_remesh_(Copy)"].geometry
                }
                material={materials.Material__160}
                position={[0.502, -0.022, -0.501]}
                rotation={[0, -0.088, 0]}
              />
              <mesh
                name="GEO_Propeller_04_remesh_remesh_(Copy)"
                castShadow
                receiveShadow
                geometry={
                  nodes["GEO_Propeller_04_remesh_remesh_(Copy)"].geometry
                }
                material={materials.Material__160}
                position={[-0.502, -0.022, -0.501]}
                rotation={[-Math.PI, 1.553, -Math.PI]}
              />
              <mesh
                name="GEO_Propeller_02_remesh_remesh_(Copy)"
                castShadow
                receiveShadow
                geometry={
                  nodes["GEO_Propeller_02_remesh_remesh_(Copy)"].geometry
                }
                material={materials.Material__160}
                position={[-0.502, -0.022, 0.5]}
                rotation={[0, 0.037, 0]}
              />
              <mesh
                name="GEO_Propeller_01_remesh_remesh_(Copy)"
                castShadow
                receiveShadow
                geometry={
                  nodes["GEO_Propeller_01_remesh_remesh_(Copy)"].geometry
                }
                material={materials.Material__160}
                position={[0.502, -0.022, 0.5]}
                rotation={[0, 1.537, 0]}
              />
              <mesh
                name="Battery_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.Battery_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Base_04_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Base_04_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Base_03_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Base_03_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Base_02_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Base_02_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Base_01_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Base_01_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Support_01"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Support_01.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Support_02"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Support_02.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Lathe_01_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Lathe_01_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Lathe_02_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Lathe_02_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Lathe_03_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Lathe_03_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Lathe_04_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Lathe_04_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Camera_Part_011_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Camera_Part_011_remesh.geometry}
                material={materials.Material__160}
              />
              <group ref={clamp}>
                <mesh
                  name="GEO_Camera_Part_012_remesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.GEO_Camera_Part_012_remesh.geometry}
                  material={materials.Material__160}
                />
                <group ref={cam}>
                  <mesh
                    name="GEO_Camera_Part_013_remesh_remesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.GEO_Camera_Part_013_remesh_remesh.geometry}
                    material={materials.Material__160}
                  />
                  <mesh
                    name="GEO_Camera_Part_014_remesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.GEO_Camera_Part_014_remesh.geometry}
                    material={materials.Material__160}
                  />
                  <mesh
                    name="GEO_Camera_Part_015_remesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.GEO_Camera_Part_015_remesh.geometry}
                    material={materials.Material__160}
                  />
                  <mesh
                    name="GEO_Camera_Part_016_remesh_remesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.GEO_Camera_Part_016_remesh_remesh.geometry}
                    material={materials.Material__160}
                  />
                  <mesh
                    name="GEO_Camera_Part_018_remesh_remesh"
                    castShadow
                    receiveShadow
                    geometry={nodes.GEO_Camera_Part_018_remesh_remesh.geometry}
                    material={materials.Material__160}
                  />
                </group>
                <mesh
                  name="GEO_Camera_Part_020_remesh"
                  castShadow
                  receiveShadow
                  geometry={nodes.GEO_Camera_Part_020_remesh.geometry}
                  material={materials.Material__160}
                />
              </group>
              <mesh
                name="GEO_Camera_Part_017_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Camera_Part_017_remesh.geometry}
                material={materials.Material__160}
              />

              <mesh
                name="GEO_Camera_Part_019_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Camera_Part_019_remesh.geometry}
                material={materials.Material__160}
              />

              <mesh
                name="GEO_Computer_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Computer_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="GEO_Main_Body_remesh_remesh"
                castShadow
                receiveShadow
                geometry={nodes.GEO_Main_Body_remesh_remesh.geometry}
                material={materials.Material__160}
              />
              <mesh
                name="Legs"
                castShadow
                receiveShadow
                geometry={nodes.Legs.geometry}
                material={materials.Material__160}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
};
export default Drone;

useGLTF.preload("/images/models/drone1.glb");
