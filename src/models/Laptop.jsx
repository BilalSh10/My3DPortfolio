import { useGLTF, Html } from "@react-three/drei";
import React from "react";
const Laptop = () => {
  const laptop = useGLTF("./models/laptopModel.gltf");

  return (
    <>
      <rectAreaLight
        width={1.1}
        height={3.5}
        intensity={50} //
        color={"white"}
        rotation={[-0.1, Math.PI, 0]}
        position={[0.5, 0.9, -0.55]}
      />
      <primitive scale={0.5} object={laptop.scene} position-y={0.8} position-x={0.5} rotation={[0, 0.07, 0]}>
        <Html
          wrapperClass="websiteScreen"
          transform
          distanceFactor={1.1}
          position={[0, 1.54, -1.4]}
          rotation-x={-0.256}
        >
          <iframe src="https://portfolio-eight-plum-45.vercel.app/"></iframe>
        </Html>
      </primitive>
    </>
  );
};

export default Laptop;
