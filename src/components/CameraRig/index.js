import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CurveModifier, PerspectiveCamera } from "@react-three/drei";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CameraRig = ({ cameraRef ,progressRef, curveRef }) => {
  const curveRef1 = useRef()


  const ref = useRef();
  //   const progress = useRef(0);
  const CURVE_DISTANCE = 10;
  const LINE_NB_POINTS = 1000;

  const points = [
    new THREE.Vector3(0, 12, 2 * CURVE_DISTANCE),
    new THREE.Vector3(0, 3, 1 * CURVE_DISTANCE),
    new THREE.Vector3(0, 1, 0 * CURVE_DISTANCE),
    new THREE.Vector3(0, 1, -1 * CURVE_DISTANCE),
    new THREE.Vector3(0, 1, -2 * CURVE_DISTANCE),
    new THREE.Vector3(5, 1.2, -3.3 * CURVE_DISTANCE),
    new THREE.Vector3(10, 1.2, -3.8 * CURVE_DISTANCE),
    new THREE.Vector3(20, -2, -4 * CURVE_DISTANCE),
    new THREE.Vector3(30, -2, -4 * CURVE_DISTANCE),
    new THREE.Vector3(40, -2, -4 * CURVE_DISTANCE),
    new THREE.Vector3(40, 30, -4 * CURVE_DISTANCE),
    new THREE.Vector3(40, 100, -4 * CURVE_DISTANCE),
    new THREE.Vector3(50, 150, -4 * CURVE_DISTANCE),
    // new THREE.Vector3(40, 300, -4 * CURVE_DISTANCE),
   
  
   
   
    
   
    
    
   

   
    
   
    
  ];

  const points1 = [
    new THREE.Vector3(-13, 8, 2 * CURVE_DISTANCE),
    new THREE.Vector3(-13, 15, 3 * CURVE_DISTANCE),
  ];

  const points2 = [

    new THREE.Vector3(-13, 2, -1 * CURVE_DISTANCE),
    new THREE.Vector3(-13, 2, 0 * CURVE_DISTANCE),
    new THREE.Vector3(-13, 5, 1 * CURVE_DISTANCE),
  ];

  const points3 = [
    new THREE.Vector3(10, 300, -4 * CURVE_DISTANCE),
    new THREE.Vector3(10, 200, -4 * CURVE_DISTANCE),
    new THREE.Vector3(10, 100, -4 * CURVE_DISTANCE),
    new THREE.Vector3(10, 50, -4 * CURVE_DISTANCE),
    new THREE.Vector3(10, -2, -4 * CURVE_DISTANCE),
    new THREE.Vector3(-11, 2, -4 * CURVE_DISTANCE),
    new THREE.Vector3(-13, 2, -2 * CURVE_DISTANCE),
  ];

  //   const curve = new THREE.CatmullRomCurve3(points);
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.4);
  }, []);

  // const curve11 = useMemo(() => new THREE.CatmullRomCurve3(points, true, 'centripetal'), [points])
  const curve1 = useMemo(() => {
    return new THREE.CatmullRomCurve3(points1, false, "catmullrom", 0.5);
  }, []);
  const curve2 = useMemo(() => {
    return new THREE.CatmullRomCurve3(points2, false, "catmullrom", 0.5);
  }, []);
  const curve3 = useMemo(() => {
    return new THREE.CatmullRomCurve3(points3, false, "catmullrom", 0.5);
  }, []);

  curveRef.current = curve;

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.01);
    shape.lineTo(0, 0.01);
    return shape;
  }, [curve]);

  // Animate the camera along the curve
  // useFrame(() => {
  //   if (cameraRef.current && curveRef.current) {
  //     progress.current += 0.001; // Adjust speed
  //     if (progress.current > 1) progress.current = 0; // Loop progress

  //     const position = curveRef.current.getPointAt(progress.current);
  //     const lookAtTarget = curveRef.current.getPointAt(
  //       (progress.current + 0.01) % 1
  //     ); // Slightly ahead for a smoother look
  //     cameraRef.current.position.copy(position);
  //     cameraRef.current.lookAt(lookAtTarget);
  //   }
  // });
   // Ref to hold scroll progress
  // const camePoints = [
  //   { x: -10, y: 5, z: -40 }, 
  //   { x: -10, y: 3, z: -10 }, 
  //   { x: 0, y: 0, z: 0 }, 
  //   {x: -40, y: 5, z:-40},
  // ];
  const camePoints = [
    { x: 0, y: 30, z: 40 }, 
    { x: 0, y: 15, z: 40 }, 
    { x: 0, y: 0, z: 0 }, 
    // { x: 0, y: 0, z: 0 }, 
    // { x: 0, y: 0, z: 0 }, 
    { x: 20, y: -30, z: -40 }, 
    // { x: 40, y: -30, z: -50 }, 
  ];

  useFrame((state, delta) => {
    // state.camera.lookAt(30,0,0)

    const progress = progressRef.current;

    // Determine the current segment
    const segment = Math.min(Math.floor(progress * camePoints.length), camePoints.length - 1);
    const nextSegment = Math.min(segment + 1, camePoints.length - 1);

    // Interpolate between the current and next point
    const segmentProgress = (progress * camePoints.length) % 1;
    const lookAtX = THREE.MathUtils.lerp(camePoints[segment].x, camePoints[nextSegment].x, segmentProgress);
    const lookAtY = THREE.MathUtils.lerp(camePoints[segment].y, camePoints[nextSegment].y, segmentProgress);
    const lookAtZ = THREE.MathUtils.lerp(camePoints[segment].z, camePoints[nextSegment].z, segmentProgress);

    // Update camera lookAt
    state.camera.lookAt(lookAtX, lookAtY, lookAtZ);
    state.camera.updateMatrixWorld(); // Ensure matrix updates
  }) 


  //     // ScrollTrigger.create({
  //     //   start: "top top",
  //     //   end: "600%",
  //     //   trigger: parentRef?.current,
  //     //   onUpdate({ progress, direction, isActive }) {
  //     //     progressRef.current = progress; 
  //     //     const pro = 1 - progress;
  //     //     const position = curveRef.current.getPointAt(pro);
  //     //     cameraRef.current.position.copy(position);
  //     //     cameraRef.current.lookAt(30,0,0)
  //     //     // Optional: If you want to smooth the camera's motion
  //     //     // cameraRef.current.updateMatrixWorld();
  //     //     cameraRef.current.updateMatrixWorld();
  //     //   },
  //     // });

  //     ScrollTrigger.matchMedia({
  //       "(min-width: 992px)": function () {},

  //       "(min-width: 600px) and (max-width: 959px)": function () {
  //         // The ScrollTriggers created inside these functions are segregated and get
  //         // reverted/killed when the media query doesn't match anymore.
  //       },

  //       // small
  //       "(max-width: 599px)": function () {
  //         // The ScrollTriggers created inside these functions are segregated and get
  //         // reverted/killed when the media query doesn't match anymore.
  //       },

  //       // all
  //       all: function () {},
  //     });

  //     // gsap.to(pinner[0], {
  //     //   scrollTrigger: {
  //     //     trigger: pinner[0],
  //     //     end: "1700%",
  //     //     scrub: 1.5,
  //     //     pin: true,
  //     //     pinSpacer: true,
  //     //     pinSpacing: true,
  //     //     parent: main.current,
  //     //   },
  //     // });
  //   },
  //   { scope: ref, dependencies: [] }
  // );

  // useEffect(() => {
  //   const position = curveRef.current.getPointAt(progress);
  //   const lookAtTarget = curveRef.current.getPointAt((progress + 0.01) % 1);
  //   camera.position.copy(position);
  //   camera.lookAt(lookAtTarget);
  // }, [progress, camera]);

  return (
    <group ref={ref} >
      <group position-y={-1}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial
            color={"red"}
            emissive="#00ca76" emissiveIntensity={8} toneMapped={false} 
            // red
            // map={diffuse}
            // normalMap={normal}
            // roughnessMap={roughness}
            roughness={0.2}
            transparent
            // envMapIntensity={10}
            // onBeforeCompile={fadeOnBeforeCompile}
          />
        </mesh>
      </group>

      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        // near={0.1}
        // far={100}
        position={points[0]}
      />
    </group>
  );
};
export default CameraRig;
