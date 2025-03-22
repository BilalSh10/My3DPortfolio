import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import React, { useRef, useState, useEffect } from "react";
import { useCursor, CameraControls, OrbitControls } from "@react-three/drei";
import { IoVideocamOutline } from "react-icons/io5";
import { BiPointer } from "react-icons/bi";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [hovered, setHovered] = useState(false);
  const [isDisplayingLaptop, setIsDisplayingLaptop] = useState(false);
  const [isCameraControl, setIsCameraControl] = useState(false);
  const [isViewingLaptop, setIsViewingLaptop] = useState(false);
  const cameraControlsRef = useRef();

  useEffect(() => {
    if (isCameraControl) {
      setHovered(isCameraControl);
    } else {
      setHovered(false);
    }
  }, [isCameraControl]);

  useCursor(hovered);

  const moveCameraToLaptop = () => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.enabled = false; // Disable interaction
      setIsViewingLaptop(false);

      if (isDisplayingLaptop) {
        const initialCameraPosition = [-3, 2, 5];
        const initialLookAtPosition = [0, 0, 0];

        cameraControlsRef.current.setLookAt(
          ...initialCameraPosition,
          ...initialLookAtPosition,
          true
        );
      } else {
        setIsViewingLaptop(true);
        const cameraPosition = [0.5, 2, 1.5];
        const lookAtPosition = [0.5, 1.54, -1];

        cameraControlsRef.current.setLookAt(
          ...cameraPosition,
          ...lookAtPosition,
          true
        );
      }

      setTimeout(() => {
        cameraControlsRef.current.enabled = true; // Re-enable interaction
      }, 10); // Adjust the delay as needed
    }

    setIsDisplayingLaptop(!isDisplayingLaptop);
  };

  function changeCameraController() {
    setIsCameraControl(!isCameraControl);
  }

  return (
    <>
      <Canvas
        onPointerOver={() => isCameraControl && setHovered(true)}
        onPointerOut={() => isCameraControl && setHovered(false)}
        onPointerDown={moveCameraToLaptop}
        camera={{
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 2, 5],
        }}
        className="r3f"
      >
        {isCameraControl ? (
          <CameraControls
            ref={cameraControlsRef}
            minAzimuthAngle={-Math.PI / 9}
            maxAzimuthAngle={Math.PI / 9}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI - Math.PI / 1.8}
            smoothTime={0.45}
          />
        ) : (
          <OrbitControls
            enableZoom={false}
            minAzimuthAngle={-Math.PI / 5}
            maxAzimuthAngle={Math.PI / 3.5}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 1.8}
          />
        )}

        <Experience />
      </Canvas>

      {isViewingLaptop ? null : (
        <div className="bio">
          <div className="bio-header">
            <p className="greeting">Hello, I'm Bilal Shweike</p>
            <button className="camera-button" onClick={changeCameraController}>
              {isCameraControl ? <IoVideocamOutline /> : <BiPointer />}
            </button>
          </div>
          <p className="title">I'm a Software Engineer</p>
        </div>
      )}
    </>
  );
}

root.render(<App />);
