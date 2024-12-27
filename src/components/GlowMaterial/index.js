import React from 'react';
import { extend } from '@react-three/fiber';
import { Color, DoubleSide, AdditiveBlending } from 'three';
import { shaderMaterial } from '@react-three/drei';


const FakeGlowShaderMaterial = shaderMaterial(
  {
    falloffAmount: 0.1,
    glowInternalRadius: 6.0,
    glowColor: new Color('#00ff00'),
    glowSharpness: 1.0,
    opacity: 1.0,
  },
  /* Vertex Shader */
  `
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vec4 modelNormal = modelMatrix * vec4(normal, 0.0);
    vPosition = modelPosition.xyz;
    vNormal = modelNormal.xyz;
  }`,
  /* Fragment Shader */
  `
  uniform vec3 glowColor;
  uniform float falloffAmount;
  uniform float glowSharpness;
  uniform float glowInternalRadius;
  uniform float opacity;

  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vec3 normal = normalize(vNormal);
    if (!gl_FrontFacing)
      normal *= -1.0;
    vec3 viewDirection = normalize(cameraPosition - vPosition);
    float fresnel = dot(viewDirection, normal);
    fresnel = pow(fresnel, glowInternalRadius + 0.1);
    float falloff = smoothstep(0.0, falloffAmount, fresnel);
    float fakeGlow = fresnel;
    fakeGlow += fresnel * glowSharpness;
    fakeGlow *= falloff;
    gl_FragColor = vec4(clamp(glowColor * fresnel, 0.0, 1.0), clamp(fakeGlow, 0.0, opacity));

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`
);

// Extend the material for Three.js
extend({ FakeGlowShaderMaterial });


const GlowMaterial = ({
  falloff = 0.1,
  glowInternalRadius = 6.0,
  glowColor = '#00ff00',
  glowSharpness = 1.0,
  side = 'THREE.FrontSide',
  depthTest = true,
  depthWrite = false,
  opacity = 1.0,
}) => {
  return (
    <fakeGlowShaderMaterial
      attach="material"
      falloffAmount={falloff}
      glowInternalRadius={glowInternalRadius}
      glowColor={new Color(glowColor)}
      glowSharpness={glowSharpness}
      opacity={opacity}
      side={side === 'THREE.DoubleSide' ? DoubleSide : side}
      transparent={true}
      blending={AdditiveBlending}
      depthTest={depthTest}
      depthWrite={depthWrite}
    />
  );
};

export default GlowMaterial;
