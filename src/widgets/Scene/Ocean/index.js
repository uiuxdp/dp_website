"use client";
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Water } from 'three-stdlib'
import * as THREE from 'three'

extend({ Water })

const Ocean = (props) => {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/images/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(25, 25), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: "skyblue",
      distortionScale: 3.7,
      fog: true,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
console.log(ref.current,"ref.currentref.currentref. current");

  return (
    <group {...props}  dispose={null}>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </group>
  );
};
export default Ocean;


