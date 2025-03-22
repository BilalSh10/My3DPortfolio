import React from "react";

const Lights = () => {
  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <ambientLight />
    </>
  );
};

export default Lights;
