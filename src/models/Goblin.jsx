import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
const Goblin = () => {
  const goblinModel = useGLTF("./models/goblin.gltf");
  const { animations } = goblinModel;
  const goblinRef = useRef();

  const { actions } = useAnimations(animations, goblinRef); // Get animation actions

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[1]]?.play(); // Play the first animation
    }
  }, [actions]);

  return (
    <primitive
      ref={goblinRef}
      scale={1.5}
      position={[1.9, 1.04, -0.3]}
      object={goblinModel.scene}
    />
  );
};

export default Goblin;
