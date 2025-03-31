import { useGLTF, Html } from "@react-three/drei";
import React from "react";
const Laptop = () => {
  const laptop = useGLTF("./models/laptopModel.gltf");

  return (
    <>
      <rectAreaLight
        width={1.4}
        height={4}
        intensity={50} //
        color={"white"}
        rotation={[-0.1, Math.PI, 0]}
        position={[-2.5, -1.55, -4.2]}
      />
      <primitive
        scale={0.7}
        object={laptop.scene}
        position={[-2.5, -1.55, -3.45]}
        rotation={[0, 0, 0]}
      >
        <Html
          occlude
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
