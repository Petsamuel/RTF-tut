/* eslint-disable react/no-unknown-property */

import { Fragment } from 'react'
import { Canvas } from '@react-three/fiber'


function App() {
  return (
    <Fragment>
      <section className='flex  items-center mt-[10em]'>
        <Canvas >
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 1, 5]} />
          <mesh>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial  />
          </mesh>
        </Canvas>
      </section>
    </Fragment>
  );
}

export default App
