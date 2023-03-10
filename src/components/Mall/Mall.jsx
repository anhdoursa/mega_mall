import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useEffect } from 'react';

const Mall = () => {
  const { scene, animations } = useGLTF('models/supermarket_low_poly_anim.glb');

  const { ref, actions, names } = useAnimations(animations);
  useEffect(() => {
    actions[names[0]].play();
    actions[names[1]].play();
    actions[names[2]].play();
  }, [actions, names]);

  return <primitive position={[0, 0, 10]} ref={ref} object={scene}></primitive>;
};

export default Mall;
useGLTF.preload('models/supermarket_low_poly_anim.glb');
