"use client";
import * as THREE from "three";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { useAnimations, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

export default function CameraNew({ parentRef }) {
  const group = useRef();
  const cameraRef=useRef()
  const { nodes, materials, animations, scene } = useGLTF(
    "/images/models/camera.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => void (actions[names[0]].play().paused = true), []);
  const cameraAnim1 =()=>{
    if (actions) {
      console.log(materials, "entered3");
      cameraRef.current.updateMatrixWorld();
      actions[names[0]].setLoop( THREE.LoopOnce )
      actions[names[0]].clampWhenFinished = true;
      actions[names[0]].reset().play();
   
    }
  }

  // useEffect(() => {
  //   if (actions) {
  //     console.log(materials, "actionsactions");
  //     actions[names[0]].reset().play();
  //   }
  // }, [actions, names]);
  // useFrame((state) => {
  //   actions["animation_0"].time = THREE.MathUtils.lerp(
  //     actions["animation_0"].time,
  //     actions["animation_0"].getClip().duration * scroll.current,
  //     0.05
  //   );

  // });

  useGSAP(
    (context, contextSafe) => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          // markers: true,
          end: "600%",
          scrub: true,
        },
      });
      tl1.to(cameraRef.current.position, { x: 1.52, onComplete: ()=>console.log("enteredd1")
      });
      tl1.to(cameraRef.current.position, { y: 5.81,z:-0.65, onComplete: ()=>console.log("enteredd2") });
      // tl1.to(group.current.rotation, { x:-153.19,y: -76.78,z:-153.8, onComplete: ()=>console.log("enteredd2") });
      tl1.to(cameraRef.current.position, {z:0, onStart: cameraAnim1}, "+=0.5");

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
    { scope: group, dependencies: [] }
  );

  return (
    <group
      ref={group}
      // {...props}
      dispose={null}
      name="RS_Camera"
      position={[-10, 5, -40]}
    >
      <primitive object={scene} />
      <PerspectiveCamera makeDefault ref={cameraRef} 
      // far={100} near={0.1} 
      fov={75} >
        {/* <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={2}
            shadow-bias={-0.0001}
          /> */}
      </PerspectiveCamera>
    </group>
  );
}

useGLTF.preload("/images/models/camera.glb");
