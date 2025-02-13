import React from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';
import { IPoligonProps } from './types';
import { View } from 'react-native';

function PoligonRender({ type, color, rotation }: IPoligonProps) {
  return (
    <mesh rotation={[rotation, rotation, 0]} scale={[2, 2, 2]}>
      {type === 'cube' && <boxGeometry args={[1, 1, 1]} />}
      {type === 'cone' && <coneGeometry args={[1, 2, 32]} />}
      {type === 'dodecaedro' && <dodecahedronGeometry args={[1]} />}
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Poligon(props: IPoligonProps) {
  return (
    <Canvas style={{ width: props.size, height: props.size }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <PoligonRender {...props} />
      <OrbitControls />
    </Canvas>
  );
}
