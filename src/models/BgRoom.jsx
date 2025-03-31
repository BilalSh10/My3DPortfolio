import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

const BgRoom = () => {
  const { nodes } = useGLTF("./models/bgImage.glb");
  console.log(nodes);

  const bgTexture = useTexture("./texture/bgTexture.png");
  bgTexture.flipY = false;

  return (
    <>
      <mesh
        geometry={nodes.Plane001.geometry}
        // position={nodes.Plane001.position}
        // rotation={nodes.Plane001.rotation}
        scale={nodes.Plane001.scale}
      >
        <meshStandardMaterial map={bgTexture} />
      </mesh>
      <mesh
        geometry={nodes.Plane006.geometry}
        // position={nodes.Plane001.position}
        // rotation={nodes.Plane001.rotation}
        scale={nodes.Plane001.scale}
      >
        <meshStandardMaterial map={bgTexture} />
      </mesh>
    </>
  );
};

export default BgRoom;
