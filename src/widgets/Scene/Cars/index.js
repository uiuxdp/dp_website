// "use client";
// import { Instances, useGLTF, Instance } from "@react-three/drei";
// // import Boat from "../Boat";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// function Cars({ ref1, ref2, ref3 }) {
//   const { nodes, materials } = useGLTF("/images/models/boat.glb");
// //   if (!nodes || !materials) return null;
//   return (
//     <Instances range={3} limit={3}  castShadow receiveShadow>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.magura_v5.geometry}
//         material={materials.magura_v5}
//       />

//       <Car
//         position={[20, -3.5, -30]}
//         rotation={[-Math.PI / 2, 0, Math.PI / 8]}
//         boatRef={ref1}
//       />
//       <Car
//         position={[20, -3.5, -20]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         boatRef={ref2}
//       />
//       <Car
//         position={[20, -3.5, -5]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         boatRef={ref3}
//       />
//     </Instances>
//   );
// }

// export default Cars;

// useGLTF.preload("/images/models/boat.glb");

// const Car = ({ boatRef }, ...props) => {
//   const item = useRef();

//   useFrame((state, delta) => {
//     const time = state.clock.getElapsedTime();
//     item.current.rotation.x = Math.sin(time) * 0.05;
//     item.current.rotation.y = Math.cos(time * 0.7) * 0.03;
//   });

//   return (
//     <group {...props}>
//       <group ref={boatRef} scale={0.007}>
//         <Instance ref={item} />
//       </group>
//     </group>
//   );
// };

import { useMemo, useContext, createContext, forwardRef } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();
export function CarsInstance({ children, ...props }) {
  const { nodes, materials } = useGLTF("/images/models/car3.glb");
  const instances = useMemo(
    () => ({
      GD1: nodes["W-Motors_Ghiath_Dubai_Police_2021_1"],
      GD2: nodes["W-Motors_Ghiath_Dubai_Police_2021_2"],
      GD3: nodes["W-Motors_Ghiath_Dubai_Police_2021_3"],
      GD4: nodes["W-Motors_Ghiath_Dubai_Police_2021_4"],
      GD5: nodes["W-Motors_Ghiath_Dubai_Police_2021_5"],
      GD6: nodes["W-Motors_Ghiath_Dubai_Police_2021_6"],
      GD7: nodes["W-Motors_Ghiath_Dubai_Police_2021_7"],
      GD8: nodes["W-Motors_Ghiath_Dubai_Police_2021_8"],
      GD9: nodes["W-Motors_Ghiath_Dubai_Police_2021_9"],
      GD10: nodes["W-Motors_Ghiath_Dubai_Police_2021_10"],
      GD11: nodes["W-Motors_Ghiath_Dubai_Police_2021_11"],
      GD12: nodes["W-Motors_Ghiath_Dubai_Police_2021_12"],
      GD13: nodes["W-Motors_Ghiath_Dubai_Police_2021_13"],
      GD14: nodes["W-Motors_Ghiath_Dubai_Police_2021_14"],
      GD15: nodes["W-Motors_Ghiath_Dubai_Police_2021_15"],
      GD16: nodes["W-Motors_Ghiath_Dubai_Police_2021_16"],
      GD17: nodes["W-Motors_Ghiath_Dubai_Police_2021_17"],
      GD18: nodes["W-Motors_Ghiath_Dubai_Police_2021_18"],
      GD19: nodes["W-Motors_Ghiath_Dubai_Police_2021_19"],
    }),
    [nodes]
  );

  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} >
          {children}
        </context.Provider>
      )}
    </Merged>
  );
}

export const Carq= forwardRef((props, ref) => {
  const instances = useContext(context);
  return (
    <group ref={ref} {...props} dispose={null}>
      <group scale={0.007}>
        <instances.GD1 />
        <instances.GD2 />
        <instances.GD3 />
        <instances.GD4 />
        <instances.GD5 />
        <instances.GD6 />
        <instances.GD7 />
        <instances.GD8 />
        <instances.GD9 />
        <instances.GD10 />
        <instances.GD11 />
        <instances.GD12 />
        <instances.GD13 />
        <instances.GD14 />
        <instances.GD15 />
        <instances.GD16 />
        <instances.GD17 />
        <instances.GD18 />
        <instances.GD19 />
      </group>
    </group>
  );
})
// export default Carq;
Carq.displayName = "Carq";
useGLTF.preload("/images/models/car3.glb");
