"use client";
import * as THREE from "three";
import { Expo, Power3, gsap, Elastic } from "gsap";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { applyProps, useFrame, useThree } from "@react-three/fiber";
import { forwardRef, useEffect, useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FlashingLight from "@/components/FlashingLight";
import PoliceLight from "@/widgets/PoliceLight";
// import GlowMaterialW from "./Glowmaterial";
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils';
import { useControls } from "leva";

const Car = forwardRef((props, ref) => {
  gsap.registerPlugin(ScrollTrigger);
  const { nodes, materials, scene, animations } = useGLTF("/images/models/car3.glb");

  const instancedRef =useRef(null)
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
    applyProps(materials.black, {
      metalness: 0.75,
      roughness: 0,
      color: "black",
    });
    applyProps(materials.windowglass, {
      metalness: 0.75,
      roughness: 0,
      color: "black",
    });
    // Wheels, change color from chrome to black matte
    // applyProps(materials.chrome, { metalness: 1, roughness: 0, color: '#333' })
    // applyProps(materials.BreakDiscs, { metalness: 0.2, roughness: 0.2, color: '#555' })
    applyProps(materials.red, { metalness: 0.2, roughness: 0.2, color: "red" });
    applyProps(materials.tire, {
      metalness: 0,
      roughness: 0.4,
      color: "#181818",
    });
    applyProps(materials.carpaint_second, { metalness: 1, color: "#292929" });
    applyProps(materials.carpaint, {   metalness: 0.75, roughness: 0.2, color: "#eee" });
    applyProps(materials.rim, { metalness: 0.2, roughness: 0, color: "black" });
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
  }, [nodes, materials]);

  const { actions, names } = useAnimations(animations, ref);
  console.log(ref, "car reff");
    // Group meshes by material
    // const groupedGeometries = {};
    // Object.keys(nodes).forEach((key) => {
    //   const mesh = nodes[key];
    //   if (mesh.isMesh) {
    //     const matName = mesh.material.name;
    //     if (!groupedGeometries[matName]) {
    //       groupedGeometries[matName] = [];
    //     }
    //     groupedGeometries[matName].push(mesh.geometry.clone());
    //   }
    // });

    // const mergedMeshes = Object.entries(groupedGeometries).map(([matName, geometries]) => ({
    //   geometry: mergeGeometries(geometries),
    //   material: materials[matName],
    // }));
// console.log(mergedMeshes,"groupedGeometriesgroupedGeometriesgroupedGeometries");
const { x, y, z } = useControls({
  x: { value: 0, min: -4, max: 4, step: 0.01 },
  y: { value: 0.58, min: -4, max: 4, step: 0.01 },
  z: { value: 1.75, min: -4, max: 4, step: 0.01 },
});

const policeLight1 = [
  {
    shape: "box",
    size: [0.06, 0.02, 0.02],
    position: [-0.1, 0, 0],
    color: new THREE.Color(0, 0.5, 20), // Blue
  },
  {
    shape: "box",
    size: [0.06, 0.02, 0.02],
    position: [0, 0, 0],
    color: new THREE.Color(7, 0, 0.5), // Red
  },
  {
    shape: "sphere",
    size: [0.03, 16, 16],
    position: [0.1, 0, 0],
    color: new THREE.Color(0, 3, 1), // Green
  },
];

const policeLight2 = [
  {
    shape: "sphere",
    size: [0.05, 32, 32],
    position: [-0.15, 0, 0],
    color: new THREE.Color(5, 0.5, 1), // Purple
  },
  {
    shape: "box",
    size: [0.08, 0.03, 0.03],
    position: [0.15, 0, 0],
    color: new THREE.Color(1, 1, 20), // Light Blue
  },
];




  return (
    <group ref={ref} {...props} dispose={null}>
      {/* <primitive object={scene} /> */}
      <group  position={[x, y, z]}>
        {/* <GlowMaterialW/> */}
        {/* <PoliceLight /> */}
        {/* <PoliceLight lights={policeLight1} position={[0, .5, 0]} /> */}
        {/* <PoliceLight lights={policeLight1} position={[0, 1, 0]} /> */}
        <PoliceLight lights={policeLight2} position={[0, 0, 0]} />
      </group>

      <group scale={0.007} >
        {/* <FlashingLight/> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_1"].geometry}
          material={materials.black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_2"].geometry}
          material={materials.mattemetal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_3"].geometry}
          material={materials.chrome}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_4"].geometry}
          material={materials.clearglass}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_5"].geometry}
          material={materials.windowglass}
        /> */}
        {/* mirror */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_6"].geometry}
          material={materials.carpaint_second}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_7"].geometry}
          material={materials.darkglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_8"].geometry}
          material={materials.lightglass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_9"].geometry}
          material={materials.mirror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_10"].geometry}
          material={materials.interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_11"].geometry}
          material={materials.red}
        />

        {/* car body */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_12"].geometry}
          material={materials.carpaint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_13"].geometry}
          material={materials.rim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_14"].geometry}
          material={materials.brakedisk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_15"].geometry}
          material={materials.tire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_16"].geometry}
          material={materials.LicPlate_white}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_17"].geometry}
          material={materials.LicPlate_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_18"].geometry}
          material={materials.LicPlate_blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["W-Motors_Ghiath_Dubai_Police_2021_19"].geometry}
          material={materials.LicPlate_yellow}
        />
      </group>
    </group>
  );
})
Car.displayName = "Car";
export default Car;

useGLTF.preload("/images/models/car3.glb");


