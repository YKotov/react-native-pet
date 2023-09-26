import React, { useRef, useState } from 'react'
import {View, Text} from 'react-native'
import { Canvas, useFrame } from '@react-three/fiber/native'

function Box(props: any) {
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeDModelViewer() {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text style={{flex: 1}}> aaa </Text>
      
      <Canvas style={{flex: 1, backgroundColor: 'red'}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />    
        <Box position={[1.2, 0, 0]} />
        <Box position={[-1.2, 0, 0]} />
      </Canvas>
    </View>
  )
}

