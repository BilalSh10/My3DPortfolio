import {
  ContactShadows,
  Center,
  CameraControls,
  Html,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useRef, useState, useEffect } from "react";

import Laptop from "./models/Laptop";
import Desk from "./models/Desk";
import Plant from "./models/Plant";
import Duck from "./models/Duck";
import Goblin from "./models/Goblin";
import Lights from "./Lights";
import "./style.css";

export default function Experience() {

  return (
    <>
      <color args={["#484747"]} attach="background" /> // #484747 #241a1a
      <Lights />
      <Perf position="top-left" /> // Performance monitoring
      <ContactShadows position-y={-1} opacity={0.4} scale={5} blur={4} />
      <Laptop />
      <Center>
        <Desk />
      </Center>
      <group position-z={-0.4}>
        <Plant />
        <Duck />
      </group>
      <Goblin />
    </>
  );
}
