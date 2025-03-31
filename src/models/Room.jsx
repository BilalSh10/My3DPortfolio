import React from "react";
import { useGLTF, useTexture, Html } from "@react-three/drei";
const Room = () => {
  const { nodes } = useGLTF("./models/myRoomV3.glb");
  const roomTexture = useTexture("./texture/bakeTextureTogether.png");
  roomTexture.flipY = false;

   const { nodes: bgNodes } = useGLTF("./models/bgImage.glb");
    console.log(nodes);
    
    const bgTexture = useTexture("./texture/bgTexture.png");
    bgTexture.flipY = false;

  return (
    <>
      <group>
        {nodes.myRoom.children.map(
          (child, index) =>
            child.type === "Mesh" && (
              <mesh
                key={index}
                geometry={child.geometry}
                position={child.position}
                rotation={child.rotation}
                scale={child.scale}
              >
                <meshStandardMaterial map={roomTexture} />
              </mesh>
            )
        )}
      </group>
    </>
  );
};

export default Room;
