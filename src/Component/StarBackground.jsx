import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Custom shader for smooth, circular, twinkling stars
const TwinkleShader = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#ffffff') }
  },
  vertexShader: `
    uniform float uTime;
    attribute float aSize;
    attribute float aPhase;
    varying float vTwinkle;

    void main() {
      // Calculate twinkle: sinusoidal fluctuation based on time and individual phase
      vTwinkle = 0.2 + 0.8 * sin(uTime * 1.5 + aPhase);
      
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Calculate point size, attenuated by depth, scaled by twinkle factor, clamped to max 1.8px
      gl_PointSize = clamp(aSize * (60.0 / -mvPosition.z) * (0.3 + 0.7 * vTwinkle), 1.0, 1.8);
    }
  `,
  fragmentShader: `
    uniform vec3 uColor;
    varying float vTwinkle;

    void main() {
      // Convert square points to circular particles
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;
      
      // Add soft glow edge attenuation
      float alpha = smoothstep(0.5, 0.15, dist) * vTwinkle;
      gl_FragColor = vec4(uColor, alpha);
    }
  `
};

function StarField() {
  const pointsRef = useRef();
  const materialRef = useRef();

  const count = 350; // Sparse night sky density to ensure text is clear and readable

  const [positions, sizes, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute stars spherically
      const r = 2.0 + Math.random() * 22.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Random sizes (very small and uniform for 1-2px target size)
      sz[i] = 0.8 + Math.random() * 0.8;
      
      // Random phase offset for twinkling variance
      ph[i] = Math.random() * Math.PI * 2;
    }

    return [pos, sz, ph];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = time;
    }
    if (pointsRef.current) {
      // Very slow drift rotation for depth perception
      pointsRef.current.rotation.y = time * 0.008;
      pointsRef.current.rotation.x = time * 0.002;
    }
  });

  const uniforms = useMemo(() => THREE.UniformsUtils.clone(TwinkleShader.uniforms), []);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aSize"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-aPhase"
          args={[phases, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={TwinkleShader.vertexShader}
        fragmentShader={TwinkleShader.fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function StarBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: '#000000'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <StarField />
      </Canvas>
    </div>
  );
}
