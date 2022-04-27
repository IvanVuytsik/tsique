import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Codebear from "./Codebear.js";
// import "./scene.css";

function Scene() {
  return (
    <Canvas orthographic camera={{ zoom: 90, position: [360, 100, 100] }}>

      <OrbitControls />
      <ambientLight intensity={0.6} />
      {/* // <pointLight position={[10, 10, 10]} /> 
      // // <directionalLight intensity={0.5} /> */}
      <Codebear />
    
    </Canvas>
  )
}

export default Scene
 