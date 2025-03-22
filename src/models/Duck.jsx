import React from "react";
import { useGLTF } from "@react-three/drei";
const Duck = () => {
  const DuckModel = useGLTF("./models/duck.gltf");
  return (
    <primitive
      scale={0.3}
      position={[-1.8, 1, 0]}
      object={DuckModel.scene}
    />
  );
};

export default Duck;
