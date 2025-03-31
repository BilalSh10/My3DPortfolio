import { Center } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Laptop from "./models/Laptop";
import Goblin from "./models/Goblin";
import Lights from "./Lights";
import "./style.css";
import Room from "./models/Room";
import BgRoom from "./models/BgRoom";

export default function Experience() {
  

  return (
    <>
      <color args={["#C6BDB5"]} attach="background" />
      <Lights />
      <Perf position="top-left" /> // Performance monitoring
      <Center>
        <Room />
        {/* <BgRoom /> */}
      </Center>
      <Laptop />
      <Goblin />
    </>
  );
}
