"use client";
import * as THREE from "three";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { applyProps, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easing } from "maath";
import { useGSAP } from "@gsap/react";
import { SphereGeometry } from "three";
import FlashingLight from "@/components/FlashingLight";

const DubaiNew = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const head = useRef();
  //   const stripe = useRef();
  //   const light = useRef();
  const propeller1 = useRef();
  const { camera } = useThree();

  const { nodes, materials, scene, animations } = useGLTF(
    "/images/models/dubai1.glb"
  );

applyProps(materials.White, { metalness: 0.5, roughness: 0.4, color: '#181818' })
applyProps(materials["Mat"], { metalness: 0, roughness: 0.3, color: '#000' })
applyProps(materials[""], { metalness: 0, roughness: 0.3, color: '#000' })


  const { ref, actions, names } = useAnimations(animations);
  // useFrame((state, delta) => {
  //   const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2;
  //   easing.dampE(
  //     head.current.rotation,
  //     [
  //       state.pointer.y * (state.camera.position.z > 1 ? -1 / 2 : 1 / 2),
  //       state.pointer.x * (state.camera.position.z > 1 ? 1 / 2 : -1 / 2),
  //       0,
  //     ],
  //     0.4,
  //     delta
  //   );
  //   // light.current.intensity = 1 + t * 4;
  // });

  useGSAP(
    (context, contextSafe) => {
      // const trigger1 = context.selector('.trigger-1')
      gsap.set(ref.current.position, { z: -20 });
      // gsap.set(camera.position, { y: 1 });
      // gsap.set(camera.position, { x: -3 });
      // camera.lookAt(new THREE.Vector3(0, 0, 0))
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: props?.parentRef.current,
          // markers: true,
          end: "100%",
          scrub: true,
        },
      });
      //   console.log(model,"modelmodel");
      // tl1.to(ref.current.position, { z: -20 });
      // tl1.to(camera.position, { x: 12, y: 3 },"<");
      // tl1.to(camera.rotation, { x: 0, y: 0 });
      // tl1.to(camera.position, { x: -3, y: 0 },"<");
      //   tl1.to(model.position, { x: 2 });
      //   tl1.to(model.position, { x: 0 });
      //   tl.to(model.position, { y: 3 });

      //   tl.to(model.rotation, { x: 1 },"<");
      //   tl.to(model.position, { x: 3 });
      //   tl.to(model.position, { x: -3 });

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
    <group {...props} ref={ref} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};
export default DubaiNew;

useGLTF.preload("/images/models/dubai1.glb");
