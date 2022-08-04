import React, { Suspense, useRef } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, useHelper  } from "@react-three/drei";
import { SpotLightHelper, PointLightHelper } from "three"

import Codebear from "./Codebear.js";
// import "./scene.css";

function Scene() {

   
  return (
    <Canvas 
       
      camera={{ position: [-5, 4, -10], fov: 30 }}>

      <ambientLight intensity={0.3} />

      {/* <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */}

      <spotLight position={[-10, 5, 0]} intensity={2.5} color="#e19b00" />
      <spotLight position={[15, 10, 0]} intensity={2.5} color="#dc9800" />
      {/* <spotLight position={[0, 10, -10]} intensity={2.5} color="#3006b1" /> */}
      
      

      <Codebear />
      <OrbitControls enableZoom={false} />

    </Canvas>
  )
}

export default Scene
 