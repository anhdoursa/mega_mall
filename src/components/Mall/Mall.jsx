import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const Mall = () => {
  const { scene, animations } = useGLTF('models/supermarket_low_poly_anim.glb');

  const { actions, names } = useAnimations(animations);

  // actions[names[0]].play();
  console.log(actions);
  const object = useRef();
  useFrame(({ camera }) => {});
  return <primitive position={[0, 0, 10]} ref={object} object={scene}></primitive>;
};

export default Mall;
useGLTF.preload('models/supermarket_low_poly_anim.glb');
