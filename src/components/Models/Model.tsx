import React, { Suspense, useEffect } from 'react'
import {View, Text} from 'react-native'
import { Canvas } from '@react-three/fiber/native'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei/native'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Model = () => {
  const {scene} = useGLTF(require('./LeePerrySmith.glb'));
  console.debug(scene);
  
  return (<primitive object={scene} scale={0.5} />);
};

export default function ThreeDModelViewer() {
  useEffect(() => {
    console.debug('111');
  }, [])
  return (
    <View>
      <Text>?aaaaaaaaaaaaaaaaaaaaaaaaaaaaa?aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
     <Canvas style={{flex: 1}}>
        <Suspense fallback={null}>
          <Model />
          {/* <OrbitControls />           */}
          <Environment preset="sunset" background />  
        </Suspense>
      </Canvas>
      </View>  
  )
}

