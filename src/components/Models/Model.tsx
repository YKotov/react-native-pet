import React, {Suspense, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {Canvas, useFrame} from '@react-three/fiber/native';
import {Environment, useGLTF} from '@react-three/drei/native';
// import * as THREE from 'three';
import {Loader} from '../../screens/Loader';
import useControls from 'r3f-native-orbitcontrols';

const Model = () => {
  const meshRef = useRef(null);
  // const [mixer] = useState(() => new THREE.AnimationMixer());
  // const group = useRef();
  // const actions = useRef();
  const modelLink = './LeePerrySmith.glb';
  const model = useGLTF(require(modelLink));
  const {nodes, scene, materials, animations} = model;

  // useFrame((state, delta) => mixer.update(delta));

  // useEffect(() => {
  //   actions.current = {idle: mixer.clipAction(animations[0], group.current)};
  //   actions.current.idle.play();
  //   return () => animations.forEach(clip => mixer.uncacheClip(clip));
  // }, []);

  return (
    <mesh ref={meshRef}>
      <primitive object={scene} scale={0.6} dispose={null} />
    </mesh>
  );
};

function Box(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2 : 3}
      onClick={event => setActive(!active)}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}>
      <boxGeometry args={[1, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export default function ThreeDModelViewer() {
  const [OrbitControls, events] = useControls();
  // const camera = new THREE.PerspectiveCamera();

  console.debug(events);
  return (
    <View
      {...events}
      style={{
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
      }}>
      <Canvas camera={{position: [0, 1, 15], rotation: [1, 0, 0], zoom: 1.0}}>
        <OrbitControls />

        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 2, 3]} intensity={1} />
        {/* <directionalLight position={[0, 5, -4]} intensity={4} /> */}
        {/* <Model /> */}
        {/* <Environment {...events} background preset="sunset" blur={0.8} /> */}

        <Box position={[0, 0, 0]} />
      </Canvas>
    </View>
  );
}
