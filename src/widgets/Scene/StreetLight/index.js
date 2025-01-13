"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import { Lightformer, useGLTF } from "@react-three/drei";

const StreetLight = (props) => {
  const ref = useRef();
  const { nodes, materials, scene } = useGLTF("/images/models/street.glb");
  return (
    <group {...props} dispose={null} ref={ref}>
      <spotLight
        position={[2, 12.2, -5]} 
        color={"lightblue"}
        angle={10} 
        penumbra={0.2} 
        intensity={10}
        distance={15} 
        castShadow 
        shadow-mapSize-width={512} 
        shadow-mapSize-height={512}
      />

<spotLight
        position={[2, 12.2, -5]} 
        color={"lightblue"}
        angle={10} 
        penumbra={0.2} 
        intensity={10}
        distance={15} 
        castShadow 
        shadow-mapSize-width={512} 
        shadow-mapSize-height={512}
      />





      <group scale={0.03}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            // castShadow
            receiveShadow
            geometry={nodes.Material2.geometry}
            material={materials.auto}
          />
       
          <lineSegments
            geometry={nodes.Material2_4.geometry}
            material={materials.edge_color000255}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_5.geometry}
            material={materials.Color_M02_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material3_2.geometry}
            material={materials.Color_M02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_6.geometry}
            material={materials.Sumele_Hair}
          />
       
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_11.geometry}
            material={materials.Translucent_Glass_Gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_12.geometry}
            material={materials.Metal_Rough}
          />
        
        </group>
      </group>

      {/* <group scale={0.03} position-z={-10}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            // castShadow
            receiveShadow
            geometry={nodes.Material2.geometry}
            material={materials.auto}
          />
       
          <lineSegments
            geometry={nodes.Material2_4.geometry}
            material={materials.edge_color000255}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_5.geometry}
            material={materials.Color_M02_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material3_2.geometry}
            material={materials.Color_M02}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_6.geometry}
            material={materials.Sumele_Hair}
          />
       
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_11.geometry}
            material={materials.Translucent_Glass_Gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Material2_12.geometry}
            material={materials.Metal_Rough}
          />
        
        </group>
      </group> */}


    </group>
  );
};
export default StreetLight;

useGLTF.preload("/images/models/street.glb");
