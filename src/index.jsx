import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import React, { useRef, useState, useEffect } from "react";
import {
  useCursor,
  CameraControls,
  OrbitControls,
  OrthographicCamera,
  Loader,
} from "@react-three/drei";
import { IoVideocamOutline } from "react-icons/io5";
import { BiPointer } from "react-icons/bi";
import { HiOutlineSpeakerXMark, HiOutlineSpeakerWave } from "react-icons/hi2";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  const [hovered, setHovered] = useState(false);
  const [isDisplayingLaptop, setIsDisplayingLaptop] = useState(false);
  const [isCameraControl, setIsCameraControl] = useState(false);
  const [isViewingWebsite, setIsViewingWebsite] = useState(false);
  const [isAudioPlay, setIsAudioPlay] = useState(false);

  const cameraControlsRef = useRef();

  useEffect(() => {
    if (isCameraControl) {
      setHovered(isCameraControl);
    } else {
      setHovered(false);
    }
  }, [isCameraControl]);

  useCursor(hovered);

  const audioRef = useRef();

  useEffect(() => {
    const audio = new Audio("./music/Moavii.mp3");
    audioRef.current = audio;
    audio.loop = true;
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Audio play failed:", e));

    return () => {
      audio.pause();
    };
  }, [isViewingWebsite]);

  const stopAudio = () => {
    setIsAudioPlay(!isAudioPlay);
    if (!isAudioPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const moveCameraToLaptop = () => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current.enabled = false; // Disable interaction
      setIsDisplayingLaptop(false);

      if (isDisplayingLaptop) {
        const initialCameraPosition = [-8, 5, 8];
        const initialLookAtPosition = [0, 0, 0];

        cameraControlsRef.current.zoomTo(45, true); // or your default zoom
        cameraControlsRef.current.setLookAt(
          ...initialCameraPosition,
          ...initialLookAtPosition,
          true
        );
      } else {
        setIsDisplayingLaptop(true);
        const cameraPosition = [-2.5, -0.2, -3];
        const lookAtPosition = [-2.5, -1, -6.45];

        cameraControlsRef.current.zoomTo(400, true); // Adjust this value as needed
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
  };

  function changeCameraController() {
    setIsCameraControl(!isCameraControl);
  }

  return (
    <>
      <Canvas
        flat
        onPointerOver={() => isCameraControl && setHovered(true)}
        onPointerOut={() => isCameraControl && setHovered(false)}
        onPointerDown={moveCameraToLaptop}
        className="r3f"
      >
        {isCameraControl ? (
          <>
            <CameraControls
              ref={cameraControlsRef}
              minAzimuthAngle={-Math.PI / 9}
              maxAzimuthAngle={Math.PI / 9}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI - Math.PI / 1.8}
              smoothTime={1}
            />
            <OrthographicCamera
              makeDefault
              zoom={45}
              near={0.1}
              far={2000}
              position={[-8, 5, 8]}
            />
          </>
        ) : (
          <>
            <OrbitControls
              maxZoom={100}
              minZoom={30}
              minAzimuthAngle={-Math.PI / 2}
              maxAzimuthAngle={Math.PI / 360}
              minPolarAngle={Math.PI / 7}
              maxPolarAngle={Math.PI - Math.PI / 1.8}
            />
            <OrthographicCamera
              makeDefault
              zoom={45}
              near={0.1}
              far={2000}
              position={[-8, 5, 8]}
            />
          </>
        )}

        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>

      {isDisplayingLaptop ? null : (
        <div className="bio">
          <div className="bio-header">
            <p className="greeting">Hello, I'm Bilal Shweike</p>
            <button className="camera-button" onClick={changeCameraController}>
              {isCameraControl ? <IoVideocamOutline /> : <BiPointer />}
            </button>
          </div>
          <div className="bio-footer">
            <p className="title">Software Engineer</p>
            <button className="camera-button" onClick={stopAudio}>
              {isAudioPlay ? (
                <HiOutlineSpeakerXMark />
              ) : (
                <HiOutlineSpeakerWave />
              )}
            </button>
          </div>
        </div>
      )}

      {isViewingWebsite ? null : (
        <div className="loadingScreen">
          <h1>WELCOME</h1>
          <p>
            You can Press where ever you want in camera mode to preview the
            website
          </p>
          <Loader />
          <button onClick={() => setIsViewingWebsite(true)}> Have Fun </button>
        </div>
      )}
    </>
  );
}

root.render(<App />);
