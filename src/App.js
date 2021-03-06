import ReactDOM from 'react-dom'
import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from 'react-three-fiber'
// import { OrbitControls } from 'drei' 

function Box(props){
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    return(
        <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
            <boxBufferGeometry args= {[1,1,1]}/>
            {/* below seems to do the same thing  */}
            {/* <boxBufferGeometry attach="geometry"/> */}
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

export default function App() {
    return (
      <Canvas>
        <ambientLight intensity={.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    )
  }