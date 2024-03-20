import { Canvas } from '@react-three/fiber'
import { Fragment, useRef, Suspense, useState } from 'react'
import { useThree, useFrame, } from '@react-three/fiber'
// import * as THREE from 'three'
import {
    // OrbitControls,
    ScrollControls,
    Scroll,
    useGLTF,
    Image,
    PresentationControls,
    useScroll,

} from '@react-three/drei';


const Project1 = () => {

    const Scene8 = () => {

        const Img = () => {
            const imgRef = useRef()
            const scroll = useScroll()


            const { width, height } = useThree((state) => state.viewport)

            useFrame(() => {
                imgRef.current.children[0].material.zoom = 1 + scroll.range(0, 0.33 / 3)
                imgRef.current.children[1].material.zoom = 1 + scroll.range(0.33, 0.33)
                imgRef.current.children[2].material.zoom = 1 + scroll.range(0.33, 0.33)
                imgRef.current.children[3].material.zoom = 1 + scroll.range(0.33, 0.33)
                imgRef.current.children[4].material.zoom = 2 + scroll.range(2 / 3, 1 / 3)
                imgRef.current.children[5].material.grayscale = 1 - scroll.range(2 / 3, 1 / 3)

                // console.log(scroll.range(0, 0.33))


            })
            return (
                <>
                    <group ref={imgRef}>
                        <Image url="./interior/bg7.png"
                            // scale-y={height}
                            // scale-x={width}
                            scale={[width / 2.5, height, 1]}
                            position={[-2, 0, 0]} />

                        <Image url="./interior/bg1.png"
                            scale={[1.2, 3, 1]}
                            position={[-2.3, -height, 2]} />

                        <Image url="./interior/bg2.png"
                            scale={[1, 2, 1]}
                            position={[-0.6, -height, 3]} />
                        <Image url="./interior/bg3.png"
                            position={[0.72, -height, 3.5]}
                            scale={1.5} />
                        <Image url="./interior/bg5.png"
                            scale={[3.5, 3, 1]}
                            position={[0, -height * 1.5, 2.5]} />
                        <Image url="./interior/bg6.png"
                            scale={[width, height / 1.5, 1]}
                            position={[0, -height * 2 - height / 4, 0]} />
                    </group>

                </>
            )
        }

        const model = useGLTF("./interior/model.gltf")

        return (
            <Fragment>
                {/* <ambientLight
                    intensity={2}
                  
                    
                /> */}
                <directionalLight position={[-2, 0, 4]} intensity={2} castShadow />

                <ScrollControls pages={3} >
                    <Scroll >

                        <Img />

                        <PresentationControls
                            global
                            cursor={true} // Whether to toggle cursor style on drag
                            snap={[3, -1, 1.5]}
                            speed={0.1} // Speed factor
                            zoom={3} // Zoom factor when half the polar-max is reached
                            polar={[0, Math.PI / 2]} // Vertical limits
                            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config


                        >
                            <primitive object={model.scene} position={[2.8, -1, 2.5]} castShadow />
                        </PresentationControls>
                    </Scroll>

                    <Scroll html>
                        <div className='relative top-[2em] left-[4em] poppins-black'>
                            <h1 className="text-7xl absolute top-[30vh] font-black  leading-snug">NO <span className="px-2 text-white bg-amber-200 text-8xl">PLACE</span> </h1>
                            <h1 className="text-7xl absolute top-[120vh] lg:left-[40vw] font-black p-3 text-white bg-emerald-400">LIKE</h1>
                            <h1 className="text-9xl absolute top-[200vh] lg:left-[10vw] font-black p-3 text-white bg-rose-400">HOME </h1>

                        </div>
                    </Scroll>
                </ScrollControls>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <section className=' w-screen h-screen'>
                <Canvas camera={{ fov: 85 }}
                // camera={{position:[0, 0, 5], fov:60}}
                >
                    <Scene8 />
                </Canvas>
            </section>
        </Fragment>
    )
}

export default Project1