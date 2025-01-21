"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import { Lightformer, Merged, useGLTF } from "@react-three/drei";

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

      <group scale={0.03}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          {/* <mesh
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
          /> */}
        </group>
        <Merged meshes={nodes}>
          {(models) => (
            <>
              {console.log(models, "streetlight")}
              <LightSingle models={models} position-z={450} rotation={[-Math.PI / 2, 0, 0]}/>
              {/* <LightSingle models={models} position-z={300}  rotation={[-Math.PI / 2, 0, 0]}/>
              <LightSingle models={models} position-z={150}  rotation={[-Math.PI / 2, 0, 0]}/>
              <LightSingle models={models} position-z={0}  rotation={[-Math.PI / 2, 0, 0]}/>
              <LightSingle models={models} position-z={-150}  rotation={[-Math.PI / 2, 0, 0]}/>
              <LightSingle models={models} position-z={-300}  rotation={[-Math.PI / 2, 0, 0]}/>
              <LightSingle models={models} position-z={-450}  rotation={[-Math.PI / 2, 0, 0]}/>

              <LightSingle models={models} position-z={450} position-x={0}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={300}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={150}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={0}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={-150}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={-300}  rotation={[-Math.PI / 2, 0, Math.PI]}/>
              <LightSingle models={models} position-z={-450}  rotation={[-Math.PI / 2, 0, Math.PI]}/> */}
            </>
          )}
        </Merged>
      </group>
    </group>
  );
};
export default StreetLight;

useGLTF.preload("/images/models/street.glb");

function LightSingle({ models, ...props }) {
  return (
    <group  {...props} >
      <models.Material2 />
      <models.Material2_1 />
      <models.Material2_2 />
      <models.Material2_3 />
      <models.Material2_5 />
      <models.Material2_6 />
      <models.Material2_7 />
      <models.Material2_8 />
      <models.Material2_9 />
      <models.Material2_10 />
      <models.Material2_11 />
      <models.Material2_12 />
      <models.Material2_13 />
      <models.Material2_14 />
      <models.Material2_15 />
      <models.Material2_17 />
      <models.Material2_18 />
      <models.Material2_19 />
      <models.Material2_20 />
      <models.Material2_22 />
      <models.Material2_23 />
      <models.Material2_24 />
      <models.Material2_25 />
      <models.Material3 />
      <models.Material3_1 />
      <models.Material3_2 />
      <models.Material3_3 />
    </group>
  );
}
