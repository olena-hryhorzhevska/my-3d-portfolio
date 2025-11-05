import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  return (
    <>
      <ambientLight intensity={0} />
      <hemisphereLight intensity={1.5} groundcolor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? [0.5, 0.65, 0.65] : [0.75, 0.75, 0.75]}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const controlsRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);


  useEffect(() => {
    // 🔹 Отключаем вращение во время прокрутки страницы
    const handleScrollStart = () => setControlsEnabled(false);
    const handleScrollEnd = () => setTimeout(() => setControlsEnabled(true), 300);

    window.addEventListener('touchmove', handleScrollStart);
    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('touchend', handleScrollEnd);
    window.addEventListener('scrollend', handleScrollEnd);

    return () => {
      window.removeEventListener('touchmove', handleScrollStart);
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('touchend', handleScrollEnd);
      window.removeEventListener('scrollend', handleScrollEnd);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          enabled={controlsEnabled}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
