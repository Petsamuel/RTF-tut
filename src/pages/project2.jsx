import { Fragment, useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture, MeshPortalMaterial, RoundedBox, Text, CameraControls, Html } from '@react-three/drei'
import * as THREE from "three"
import { easing } from "maath"

const Project2 = () => {
    const model = useGLTF("./model/1.glb")
    const [active, setActive] = useState(false)
    const PortalBlend = useRef()
    const cameraRef = useRef()

    const HandleEvent = () => {
        setActive(!active)
    }

    const TexureComponent = () => {

        useFrame((_, delta) => {
            easing.damp(PortalBlend.current, "blend", active ? 1 : 0, 0.2, delta)
        })
        useEffect(() => {
            if (active) {
                cameraRef.current.setLookAt(0, 0, 3, 0, 0, 0, true)
            } else {
                cameraRef.current.setLookAt(0, 0, 5, 0, 0, 0, true)
            }
        }, [active])


        const texture = useTexture("./texture/1.png")
        return (
            <mesh>
                <sphereGeometry args={[5, 64, 64]} />
                <meshBasicMaterial
                    map={texture}
                    side={THREE.BackSide}
                />
            </mesh>
        )
    }


    return (
        <Fragment>
            <section className="w-screen h-screen">
                <Canvas>
                    <CameraControls ref={cameraRef} />
                    <ambientLight />

                    <Text font='./font/bold.ttf' fontSize={0.6} position={[0, 1.5, 0.2]} >
                        Eggs
                        <meshBasicMaterial toneMapped={false} />
                    </Text>


                    <RoundedBox args={[3, 4, 0.2]} radius={0.1} onDoubleClick={HandleEvent}>
                        {/* <planeGeometry args={[2, 3]} /> */}
                        <MeshPortalMaterial ref={PortalBlend}>
                            <primitive object={model.scene} scale={0.6} position-y={0.6} />

                            <TexureComponent />
                        </MeshPortalMaterial>
                    </RoundedBox>






                </Canvas>
            </section>

        </Fragment>
    )
}


export default Project2