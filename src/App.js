import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import './App.css';
import Mall from './components/Mall/Mall';
import * as THREE from 'three';
function App() {
  const created = ({ scene }) => {
    scene.background = new THREE.Color(0x9cdbf5);
  };
  return (
    <Canvas
      onCreated={created}
      camera={{
        fov: 50,
        near: 0.1,
        far: 2e3,
        position: [34.16542976040575, 11.382418065813287, -14.16712418658127],
        // rotation: [-1.5900101692385324, 1.2624300471200833, 1.5909610874329003],
        quaternion: [-0.10823923563187204, 0.7008564845671802, 0.10890365982803848, 0.6965805400569418],
      }}
    >
      {/* <Perf position="top-left" /> */}
      <Mall />
      <OrbitControls maxPolarAngle={Math.PI / 2.1} />
      <Environment
        background
        files="./environments/belfast_sunset_puresky_4k.hdr"
        ground={{
          scale: 0,
          height: 7,
          radius: 28,
        }}
      />
      <hemisphereLight intensity={0.3} color="white" />
      <ambientLight intensity={0.5} color="white" />
      {/* <axesHelper args={[1000, 1000, 1000]} /> */}
    </Canvas>
  );
}

export default App;
