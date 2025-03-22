import React from "react";
import { useGLTF } from "@react-three/drei";

const Desk = () => {
  const deskModal = useGLTF("./models/deskModel.gltf");
  return (
    <primitive
      position-y={-0.5}
      scale={2}
      object={deskModal.scene}
      rotation-y={-1.5}
    />
  );
};

export default Desk;

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// const Desk = (props) => {
//   const { nodes, materials } = useGLTF("./models/deskModel.gltf");
//   return (
//     <group {...props} dispose={null}>
//       <group rotation-y={-1.5} position-y={-0.5} scale={2}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube007.geometry}
//           material={materials.MetalBlack}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Cube007_1.geometry}
//           // material={materials.DeskWood}
//         >
//         <meshStandardMaterial color="gray" />
//         </mesh>
//       </group>
//     </group>
//   );
// };

// useGLTF.preload("./models/deskModel.gltf");
// export default Desk;
