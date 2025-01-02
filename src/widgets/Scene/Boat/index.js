"use client";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { easing } from "maath";
import { useGSAP } from "@gsap/react";
import { SphereGeometry } from "three";

const Boat = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const head = useRef();
  console.log(head, "modelmodelmodelmodel");
  //   const stripe = useRef();
  //   const light = useRef();
  const propeller1 = useRef();
  //   const { scene } = useGLTF("/images/models/drone.glb");
  const { nodes, materials, animations } = useGLTF("/images/models/boat.glb");
  const { ref, actions, names } = useAnimations(animations);
  console.log(ref, actions, names, "refrefrefrefref");
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
        // gsap.set(ref.current.position, { x: 0, z:0, y: -2 });
      //   gsap.set(model.rotation, { x: 1,  });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: props?.parentRef.current,
          // markers: true,
          end: "100%",
          scrub: true,
        },
      });
      //   console.log(model,"modelmodel");
      //   tl1.to(model.position, { x: 3 });
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.magura_v5.geometry}
        material={materials.magura_v5}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={60}
      />
    </group>
  );
};
export default Boat;

useGLTF.preload("/images/models/boat.glb");
