"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const glowRed = new THREE.MeshBasicMaterial({
  color: new THREE.Color(7, 0, 0.5),
  toneMapped: false,
});
const glowBlue = new THREE.MeshBasicMaterial({
  color: new THREE.Color(0, 0.5, 20),
  toneMapped: false,
});
const glowGreen = new THREE.MeshBasicMaterial({
  color: new THREE.Color(0, 3, 1),
  toneMapped: false,
});

const PoliceLight = (props) => {
  return (
    <group {...props}>
      <LightItem position={[-0.1, 0, 0]} initialMaterial={glowBlue} />
      <LightItem position={[0, 0, 0]} initialMaterial={glowRed} />
      <LightItem position={[0.1, 0, 0]} initialMaterial={glowBlue} />
      <LightItem position={[0.2, 0, 0]} initialMaterial={glowRed} />
    </group>
  );
};

export default PoliceLight;

const LightItem = ({ initialMaterial, ...props }) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.scale.x =
      0.5 + Math.sin(state.clock.getElapsedTime() * 1000);
    meshRef.current.scale.y =
      0.5 + Math.sin(state.clock.getElapsedTime() * 1000);
  });

  return (
    <mesh
      ref={meshRef}
      material={initialMaterial}
      castShadow
      receiveShadow
      {...props}
    >
      <boxGeometry args={[0.06, 0.02, 0.02]} />
    </mesh>
  );
};



// "use client";
// import * as THREE from "three";
// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Instances, Instance } from "@react-three/drei";

// // Reusable PoliceLight Component
// const PoliceLight = ({ lights, ...props }) => {


// const glowRed = new THREE.MeshBasicMaterial({
//   color: new THREE.Color(7, 0, 0.5),
//   toneMapped: false,
// });
// const glowBlue = new THREE.MeshBasicMaterial({
//   color: new THREE.Color(0, 0.5, 20),
//   toneMapped: false,
// });



//   return (
//     <Instances
//       limit={lights.length} // Limit the number of instances
//       castShadow
//       receiveShadow
//       {...props}
//     >
//       {console.log(lights,"lightslights")}
      
//       {lights.map((light, index) => (
//         <React.Fragment key={index}>
//                <boxGeometry args={[0.25, 0.05, 0.05]} />
//                 <meshStandardMaterial emissive={index%0?"#00ca76":"red"} emissiveIntensity={8} toneMapped={false} />
//           {/* {light.shape === "box" && <boxGeometry args={light.size} />}
//           {light.shape === "sphere" && <sphereGeometry args={light.size} />} */}
//         </React.Fragment>
//       ))}

//       {/* {lights.map((light, index) => (
//         <meshBasicMaterial
//           key={`material-${index}`}
//           color={light.color}
//           toneMapped={false}
//         />
//       ))} */}

//       {lights.map((light, index) => (
//         <LightItem
//           key={`light-${index}`}
//           position={light.position}
//           materialIndex={index}
//         />
//       ))}
//     </Instances>
//   );
// };

// // LightItem Component
// const LightItem = ({ materialIndex, ...props }) => {
//   const ref = useRef();

//   useFrame((state) => {
//     ref.current.scale.x =
//       0.5 + Math.sin(state.clock.getElapsedTime() * 1000);
//       ref.current.scale.y =
//       0.5 + Math.sin(state.clock.getElapsedTime() * 1000);
//   });

//   return <Instance ref={ref} materialIndex={materialIndex}  {...props} />;
// };

// export default PoliceLight;
