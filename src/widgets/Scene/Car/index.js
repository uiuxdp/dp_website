"use client";
import * as THREE from "three";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { applyProps, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easing } from "maath";
import { useGSAP } from "@gsap/react";
import { SphereGeometry } from "three";
import FlashingLight from "@/components/FlashingLight";
import PoliceLight from "@/widgets/PoliceLight";
// import GlowMaterialW from "./Glowmaterial";

const Car = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  const head = useRef();
  console.log(head, "modelmodelmodelmodel");
  //   const stripe = useRef();
  //   const light = useRef();
  const propeller1 = useRef();
  const { camera }=useThree()

  const { nodes, materials,scene, animations } = useGLTF("/images/models/car3.glb");

  useMemo(() => {
    // Object.values(nodes).forEach((node) => {
    //   if (node.isMesh) {
    //     // Fix glas, normals look messed up in the original, most likely deformed meshes bc of compression :/
    //     if (node.name.startsWith('glass')) node.geometry.computeVertexNormals()
    //     // Fix logo, too dark
    //     if (node.name === 'silver_001_BreakDiscs_0') node.material = applyProps(materials.BreakDiscs.clone(), { color: '#ddd' })
    //   }
    // })
    // Fix windows, they have to be inset some more
    // nodes['glass_003'].scale.setScalar(2.7)
    // Fix inner frame, too light
    applyProps(materials.black, { metalness: 0.75, roughness: 0, color: 'black' })
    applyProps(materials.windowglass, { metalness: 0.75, roughness: 0, color: 'black' })
    // Wheels, change color from chrome to black matte
    // applyProps(materials.chrome, { metalness: 1, roughness: 0, color: '#333' })
    // applyProps(materials.BreakDiscs, { metalness: 0.2, roughness: 0.2, color: '#555' })
    applyProps(materials.red, { metalness: 0.2, roughness: 0.2, color: 'red' })
    applyProps(materials.tire, { metalness: 0, roughness: 0.4, color: '#181818' })
    applyProps(materials.carpaint_second, { metalness: 0, color: '#292929' })
    applyProps(materials.carpaint, { metalness: .75, color: '#eee' })
    applyProps(materials.rim, { metalness: .2, roughness: 0, color: 'black' })
    // Make front and tail LEDs emit light
    // applyProps(materials.clearglass, { emissiveIntensity: 3, toneMapped: false })
    // applyProps(materials.lightglass, { emissiveIntensity: 3, toneMapped: false, color: [255, 0, 0]})
    // applyProps(materials.chrome, { emissiveIntensity: 3, toneMapped: false, color: [0 ,56 ,220] })
    // applyProps(materials.red, { emissiveIntensity: 0.25, toneMapped: false })
    // light_front_lightglass

    // bumper_rear_light_glass
    
    // Paint, from yellow to black
    // nodes.hood.material = new THREE.MeshPhysicalMaterial({
    //   roughness: 0.3,
    //   metalness: 0.05,
    //   color: '#fff',
    //   envMapIntensity: 0.75,
    //   clearcoatRoughness: 0,
    //   clearcoat: 1
    // })
    // nodes.bumper_rear_light_glass.material =  new THREE.MeshPhysicalMaterial({
    //   roughness: 0,
    //   metalness: 0.05,
    //   color: '#fff',
    //   envMapIntensity: 0.75,
    //   clearcoatRoughness: 0,
    //   clearcoat: 1,
    //   transmission: 1.0, // set to 1 for full transparency
    //   ior: 1.5, // Index of Refraction (for glass-like effect)
    //   thickness: 0.1 // optional, for simulating light absorption within the material
    // });
    
  }, [nodes, materials])




  const { ref, actions, names } = useAnimations(animations);
  console.log(ref, actions, names, "carrr");
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
        gsap.set(ref.current.position, { z: -15, x: 30 });
        // camera.lookAt(new THREE.Vector3(0, 0, 0))
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: props?.parentRef.current,
          start:"top top",
          // markers: true,
          end: "600%",
          scrub: true,
        },
      });
      //   console.log(model,"modelmodel");
        tl1.to(ref.current.position, { x: -10 ,delay:0.2 });
     

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
          {/* <primitive object={scene} /> */}
           <group position-y={1.3} position-z={2}>
           {/* <GlowMaterialW/> */}
           <PoliceLight/>
           </group>
            
           <group scale={0.01}>
          
           {/* <FlashingLight/> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_1'].geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_2'].geometry}
          material={materials.mattemetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_3'].geometry}
          material={materials.chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_4'].geometry}
          material={materials.clearglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_5'].geometry}
          material={materials.windowglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_6'].geometry}
          material={materials.carpaint_second}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_7'].geometry}
          material={materials.darkglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_8'].geometry}
          material={materials.lightglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_9'].geometry}
          material={materials.mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_10'].geometry}
          material={materials.interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_11'].geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_12'].geometry}
          material={materials.carpaint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_13'].geometry}
          material={materials.rim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_14'].geometry}
          material={materials.brakedisk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_15'].geometry}
          material={materials.tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_16'].geometry}
          material={materials.LicPlate_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_17'].geometry}
          material={materials.LicPlate_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_18'].geometry}
          material={materials.LicPlate_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['W-Motors_Ghiath_Dubai_Police_2021_19'].geometry}
          material={materials.LicPlate_yellow}
        />
      </group>
    </group>
  );
};
export default Car;

useGLTF.preload("/images/models/car3.glb");

