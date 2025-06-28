import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ErrorBoundary } from 'react-error-boundary';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react';
import { useEffect } from 'react';

const RotatingCube = () => {
    const meshRef = useRef();
    const {size, camera} = useThree();

    useEffect(() => { 
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
        
    }, [size, camera]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });


    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <boxGeometry args={[7, 7, 7]} />
            <meshStandardMaterial color={'magenta'} roughness={0} metalness={1} emissive={'#ff00ff'} emissiveIntensity={2} />
        </mesh>
    );
};

const IntroCube = () => {

    return (<>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <Canvas camera={{ position: [5, 2, 10], fov: 75 }}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.1} color={'#ff00ff'} /> 
                <EffectComposer>
                    <Bloom intensity={200} luminanceThreshold={10} luminanceSmoothing={1} radius={10} />
                </EffectComposer>
                <RotatingCube />
            </Canvas>
        </ErrorBoundary>
    </>)
}

export default IntroCube;
