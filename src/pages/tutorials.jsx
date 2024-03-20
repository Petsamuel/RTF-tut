import { Fragment } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { Scene, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9 } from '../component/Scene';

const Tutorials = () => {
    return (
        <Fragment>
            <section className=' w-screen h-screen bg-gray-300 '>
                <Canvas shadows
                // camera={{position:[0, 0, 5], fov:60}}
                >
                    <OrbitControls />
                    {/* <Scene /> first fiber lesson */}
                    {/* <Scene2 /> loader lesseon */}
                    {/* <Scene3 />  animated snow lesson*/}
                    {/* <Scene4 /> import of model lesson*/}
                    {/* <Scene5 /> */}
                    {/* <Scene6 /> background and environment property */}
                    {/* <Scene7 />   */}
                    {/* <Scene8 /> */}
                    <Scene9 />

                </Canvas>
            </section>
        </Fragment>
    )
}

export default Tutorials