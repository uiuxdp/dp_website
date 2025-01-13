"use client"
import React, { useRef, useEffect } from 'react'
import { extend, useThree, useFrame } from '@react-three/fiber'
import { ShaderPass,RenderPass,UnrealBloomPass,FilmPass } from 'three-stdlib'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

extend({ ShaderPass, RenderPass, UnrealBloomPass, FilmPass })

export default function Effects() {
  const composer = useRef()
  const { scene, gl, size, camera } = useThree()
  useEffect(() => void composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 2)
  return (
    <EffectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <Bloom attachArray="passes" args={[undefined, 1.8, 1, 0]} />
    </EffectComposer>
  )
}
