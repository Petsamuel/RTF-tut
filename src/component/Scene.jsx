import { Fragment, useRef, Suspense, useState } from 'react'
import { useThree, extend } from '@react-three/fiber'
import {
    OrbitControls,
    useHelper,
    Sparkles,
    Stars,
    Cloud,
    Sky,
    Environment,
    Lightformer,
    PerspectiveCamera,
    CubeCamera,
    Grid,
    PresentationControls,
    ScrollControls,
    Scroll,
    useGLTF,
    Image, Text,
    Text3D, Float,
    Html,
    MeshReflectorMaterial, 
    MeshWobbleMaterial
} from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
// import { Test } from './Test';
import { Bike } from './Model';
import * as THREE from 'three'

export const Scene = () => {
    const { gl, camera } = useThree();

    return (
        <Fragment>
            {/* <orbitControls args={[camera, gl.domElement]} /> */}
            <OrbitControls />
            <mesh position={[0, 2, 0]}>
                <planeGeometry />
                <meshBasicMaterial color="red" side={THREE.DoubleSide} />
            </mesh>

            <mesh position={[3, 0, 0]}>
                <boxGeometry />
                <meshBasicMaterial color="green" />
            </mesh>
        </Fragment>
    );
};
export const Scene2 = () => {
    const texture = useLoader(THREE.TextureLoader, "./img/texture.png")


    return (
        <mesh>
            <planeGeometry args={[4, 4]} />
            <meshBasicMaterial side={THREE.DoubleSide} map={texture} />
        </mesh>
    )
}
export const Scene3 = () => {
    const texture = useLoader(THREE.TextureLoader, "./img/snow.png")
    const vartAmount = 2000;
    const positionArray = new Float32Array(vartAmount * 3)

    for (let i = 0; i < vartAmount * 3; i++) {
        positionArray[i] = (Math.random() - 0.5) * 10.0
    }
    // console.log(positionArray)

    return (
        <points>
            {/* <sphereGeometry /> */}

            <bufferGeometry >
                <bufferAttribute
                    attach="attributes-position"
                    count={positionArray.length}
                    itemSize={3}
                    array={positionArray}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                alphaMap={texture}
                depthTest={false}

            />



        </points>
    )
}

export const Scene4 = () => {

    return (
        <mesh>

            <ambientLight intensity={2} />
            <pointLight />
            {/* <Test /> */}
            <Bike scale={0.85} />


        </mesh>
    )
}

export const Scene5 = () => {
    const [active, setActive] = useState(false)
    const [scale, setScale] = useState(false)

    const handleClick = (e) => {
        setActive(!active)
        // e.stopPropergation()

    }
    // const handleClick2 = () => {
    //     setScale(!scale)
    // }

    return (<Fragment>
        <ambientLight intensity={2} />

        <group>
            <mesh onClick={(e) => { handleClick(e) }} >
                <boxGeometry />
                <meshStandardMaterial color={active ? "yellow" : "red"} />
            </mesh>
            <mesh position={[2, 0, 0]} scale={active ? 1 : 2} onClick={(e) => { e.stopPropagation() }} >
                <boxGeometry />
                <meshStandardMaterial color={"purple"} />
            </mesh>

        </group>

    </Fragment >
    )
}

export const Scene6 = () => {
    const lightRef = useRef()
    useHelper(lightRef, THREE.DirectionalLightHelper, 1)


    return (

        <Fragment>
            <ambientLight intensity={2} />
            <directionalLight position={[-5, 2, 2]} intensity={2} castShadow />


            <Environment background files={"./img/background.hdr"} ground={{ height: 6, scale: 70, radius: 60 }} />

            {/* <Cloud /> */}
            {/* <Sky sunPosition={[3, 3, 0]} /> */}
            {/* <Lightformer position-x={5} scale={3} color={"red"} /> */}
            {/* <group  > */}

            <mesh position={[0, 1.02, 0]} castShadow>
                <boxGeometry />
                <meshStandardMaterial color={"purple"} arg={[8, 8]} />
            </mesh>
            {/* <Sparkles count={2000} color={"red"} scale={[2, 8, 0]} size={2} depthTest={false}/> */}
            {/* <Stars depth={50} fade speed={2} staturation={2} depthTest={false} /> */}

            <mesh rotation-x={-Math.PI * 0.5} receiveShadow >
                <boxGeometry args={[5, 5]} />
                <meshStandardMaterial color={"yellow"} />
            </mesh>
            {/* </group> */}
            {/* </Environment> */}
        </Fragment>
    )
}

export const Scene7 = () => {
    return (
        <Fragment>
            <Environment background files={"./img/background.hdr"} />
            {/* <PerspectiveCamera makeDefault position={[0, 0, 9]} /> */}
            <CubeCamera >
                {
                    ((texture) => {
                        <mesh>
                            <sphereGeometry args={[1, 64, 64]} />
                            <meshStandardMaterial
                                envMap={texture}
                                roughness={0}
                                metalness={0.9} />
                        </mesh>

                    })
                }
            </CubeCamera>
            <mesh>
                <boxGeometry args={[1, 64, 64]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </Fragment>
    )
}
export const Scene8 = () => {
    return <Fragment>
        {/* <mesh>
            <Float speed={2} floatIntensity={2}>
            <Text fontSize={0.4} color={"yellow"} position-y={1.5} textAlign='center' maxWidth={2}>
                this  is a simple text
            </Text>
             <Text3D font="" >
                this is a 3d text
            </Text3D> 
            </Float>


        </mesh> */}
        <mesh>
            <boxGeometry />
            <meshBasicMaterial color={"yellow"} />


        </mesh>
        <mesh position={[2, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial color={"purple"} />
            <Html position={[0, 0.5, 0]} wrapperClass=' text-white w-[2em] text-2xl font-black uppercase shadow-md  text-center rounded-full ring ring-rose-400 ' distanceFactor={5}>
                simple HTML
            </Html>
        </mesh>

    </Fragment>

}

export const Scene9 = () => {
    return (
        <Fragment>
            <ambientLight />
            {/* <Environment background files="./img/background.hdr" /> */}
            <mesh >
                <boxGeometry />
                {/* <meshBasicMaterial color={"yellow"} /> */}
                <MeshWobbleMaterial color={"red"}/>

            </mesh>
            {/* <mesh rotation-x={-Math.PI * 0.5} position-y={-0.75}>
                <planeGeometry args={[2, 3]} />
                {/* <meshBasicMaterial color={"red"} /> 
                 <MeshReflectorMaterial
                    resolution={500}
                    // blur={[100, 150]}
                    // mixBlur={1}
                    mirror={1}

                /> 
            </mesh> 
            */}

        </Fragment>
    )
}