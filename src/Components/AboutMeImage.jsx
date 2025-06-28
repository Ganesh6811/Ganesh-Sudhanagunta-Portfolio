import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";


const MovablePlane = ()=>{
    const meshRef = useRef();

    useFrame((state) => {
  const { pointer } = state;
  if (meshRef.current) {
    
  }
});

    return(<>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color={'#ff00ff'} roughness={0} metalness={1}/>
      </mesh>
    </>)
}

const AboutMeImage = () => {
    return (<>
        <ErrorBoundary fallback={<p>Your browser is not compatible for me resume...</p>}>
          <Canvas>
            <ambientLight intensity={2} color={'#ff00ff'}/>

            {/* Create profile plane */}
            <MovablePlane />
          </Canvas>
        </ErrorBoundary>
    </>)
}

export default AboutMeImage;