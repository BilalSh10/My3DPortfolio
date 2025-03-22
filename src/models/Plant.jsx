import React from "react";
import { useGLTF } from "@react-three/drei";
const Plant = () => {
  const plantModel = useGLTF("./models/plant.gltf");
  return (
    <primitive scale={0.3} position={[-1, 1.15, 0]} object={plantModel.scene} />
  );
};

export default Plant;
