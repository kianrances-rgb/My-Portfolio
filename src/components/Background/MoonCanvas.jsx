import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Procedural Lunar Surface Texture Generator
 * Generates high-definition color map and bump map for the Moon
 * featuring basaltic lunar maria, impact craters with raised rims,
 * rayed impact structures, and fine regolith noise.
 */
function generateLunarTextures() {
  const width = 2048;
  const height = 1024;

  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = width;
  colorCanvas.height = height;
  const cCtx = colorCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = width;
  bumpCanvas.height = height;
  const bCtx = bumpCanvas.getContext('2d');

  // 1. Base Regolith Grey Fill
  cCtx.fillStyle = '#8b8f98';
  cCtx.fillRect(0, 0, width, height);

  bCtx.fillStyle = '#808080';
  bCtx.fillRect(0, 0, width, height);

  // Helper: Pseudo-random seeded noise for reproducible organic maria
  const mariaCenters = [
    { x: 0.28, y: 0.38, r: 0.16, opacity: 0.38 }, // Oceanus Procellarum
    { x: 0.45, y: 0.32, r: 0.12, opacity: 0.42 }, // Mare Imbrium
    { x: 0.58, y: 0.36, r: 0.09, opacity: 0.40 }, // Mare Serenitatis
    { x: 0.65, y: 0.42, r: 0.10, opacity: 0.44 }, // Mare Tranquillitatis
    { x: 0.76, y: 0.48, r: 0.08, opacity: 0.36 }, // Mare Crisium
    { x: 0.52, y: 0.56, r: 0.08, opacity: 0.35 }, // Mare Nubium
  ];

  // Draw Lunar Maria (Dark Basaltic Plains)
  mariaCenters.forEach(({ x, y, r, opacity }) => {
    const cx = x * width;
    const cy = y * height;
    const radius = r * width;

    // Organic blob with multiple layered radial gradients
    for (let i = 0; i < 5; i++) {
      const offsetX = (Math.sin(i * 1.7) * radius) * 0.25;
      const offsetY = (Math.cos(i * 2.3) * radius) * 0.25;
      const subRadius = radius * (0.6 + Math.random() * 0.4);

      const grad = cCtx.createRadialGradient(
        cx + offsetX, cy + offsetY, 0,
        cx + offsetX, cy + offsetY, subRadius
      );
      grad.addColorStop(0, `rgba(32, 35, 42, ${opacity})`);
      grad.addColorStop(0.65, `rgba(48, 52, 60, ${opacity * 0.7})`);
      grad.addColorStop(1, 'rgba(139, 143, 152, 0)');

      cCtx.fillStyle = grad;
      cCtx.beginPath();
      cCtx.arc(cx + offsetX, cy + offsetY, subRadius, 0, Math.PI * 2);
      cCtx.fill();

      // Bump map maria: slightly depressed
      const bGrad = bCtx.createRadialGradient(
        cx + offsetX, cy + offsetY, 0,
        cx + offsetX, cy + offsetY, subRadius
      );
      bGrad.addColorStop(0, `rgba(60, 60, 60, ${opacity})`);
      bGrad.addColorStop(1, 'rgba(128, 128, 128, 0)');
      bCtx.fillStyle = bGrad;
      bCtx.beginPath();
      bCtx.arc(cx + offsetX, cy + offsetY, subRadius, 0, Math.PI * 2);
      bCtx.fill();
    }
  });

  // 2. High-Frequency Regolith Grain & Noise
  const imgData = cCtx.getImageData(0, 0, width, height);
  const data = imgData.data;
  const bumpData = bCtx.getImageData(0, 0, width, height);
  const bData = bumpData.data;

  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 22;
    data[i] = Math.max(0, Math.min(255, data[i] + noise));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));

    bData[i] = Math.max(0, Math.min(255, bData[i] + noise * 1.5));
    bData[i + 1] = bData[i];
    bData[i + 2] = bData[i];
  }
  cCtx.putImageData(imgData, 0, 0);
  bCtx.putImageData(bumpData, 0, 0);

  // 3. Impact Craters with Raised Rims & Central Peaks
  const numCraters = 180;
  for (let i = 0; i < numCraters; i++) {
    const cx = Math.random() * width;
    const cy = Math.random() * height;
    const radius = Math.random() < 0.08 ? (Math.random() * 32 + 20) : (Math.random() * 12 + 4);

    // Rim highlight on color map
    cCtx.strokeStyle = 'rgba(235, 240, 250, 0.45)';
    cCtx.lineWidth = Math.max(1, radius * 0.16);
    cCtx.beginPath();
    cCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    cCtx.stroke();

    // Dark interior bowl
    const craterGrad = cCtx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    craterGrad.addColorStop(0, 'rgba(40, 42, 48, 0.6)');
    craterGrad.addColorStop(0.8, 'rgba(65, 68, 76, 0.35)');
    craterGrad.addColorStop(1, 'rgba(235, 240, 250, 0.3)');
    cCtx.fillStyle = craterGrad;
    cCtx.beginPath();
    cCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    cCtx.fill();

    // Bump Map: Raised rim (bright) and depressed bowl (dark)
    const bCrater = bCtx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.25);
    bCrater.addColorStop(0, 'rgba(30, 30, 30, 0.8)');
    bCrater.addColorStop(0.75, 'rgba(50, 50, 50, 0.5)');
    bCrater.addColorStop(0.9, 'rgba(240, 240, 240, 0.9)'); // Rim peak
    bCrater.addColorStop(1, 'rgba(128, 128, 128, 0)');
    bCtx.fillStyle = bCrater;
    bCtx.beginPath();
    bCtx.arc(cx, cy, radius * 1.25, 0, Math.PI * 2);
    bCtx.fill();

    // Major craters get prominent bright ejecta rays (Tycho / Copernicus style)
    if (radius > 22 && Math.random() > 0.4) {
      cCtx.save();
      cCtx.strokeStyle = 'rgba(245, 250, 255, 0.22)';
      cCtx.lineWidth = 1;
      const rayCount = 12 + Math.floor(Math.random() * 10);
      for (let r = 0; r < rayCount; r++) {
        const angle = (r / rayCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.2;
        const rayLen = radius * (3.5 + Math.random() * 4.5);
        cCtx.beginPath();
        cCtx.moveTo(cx, cy);
        cCtx.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
        cCtx.stroke();
      }
      cCtx.restore();
    }
  }

  const colorTexture = new THREE.CanvasTexture(colorCanvas);
  colorTexture.wrapS = THREE.RepeatWrapping;
  colorTexture.wrapT = THREE.ClampToEdgeWrapping;

  const bumpTexture = new THREE.CanvasTexture(bumpCanvas);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.ClampToEdgeWrapping;

  return { colorTexture, bumpTexture };
}

/**
 * MoonCanvas Component
 * Photorealistic, high-performance 3D interactive Moon with:
 * - Full 3D click-and-drag rotation with zero-g inertia and momentum
 * - 14 orbiting 3D asteroid rocks with microgravity tumbling physics
 * - Directional sunlight casting dramatic crater shadows along the lunar terminator line
 * - Atmospheric Fresnel rim glow
 * - Cinematic scroll responsiveness (fading & drifting in as Black Hole leaves view)
 */
export function MoonCanvas() {
  const mountRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // 2. Procedural High-Res Textures
    const { colorTexture, bumpTexture } = generateLunarTextures();

    // 3. Moon Mesh & Pivot Group
    const moonGroup = new THREE.Group();
    // Position on the right side of the screen matching the reference reel
    const updateMoonPosition = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        moonGroup.position.set(0.6, -0.4, 0);
      } else {
        moonGroup.position.set(2.1, 0.05, 0);
      }
    };
    updateMoonPosition();
    scene.add(moonGroup);

    const moonRadius = 1.95;
    const moonGeo = new THREE.SphereGeometry(moonRadius, 64, 64);
    const moonMat = new THREE.MeshStandardMaterial({
      map: colorTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.065,
      roughness: 0.88,
      metalness: 0.04,
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonGroup.add(moonMesh);

    // 4. Subtle Atmospheric / Fresnel Rim Glow Mesh
    const glowGeo = new THREE.SphereGeometry(moonRadius * 1.018, 48, 48);
    const glowMat = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0xaadcff) },
        viewVector: { value: camera.position },
      },
      vertexShader: `
        uniform vec3 viewVector;
        varying float intensity;
        void main() {
          vec3 vNormal = normalize(normalMatrix * normal);
          vec3 vNormel = normalize(normalMatrix * viewVector);
          intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.8);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4(glow, intensity * 0.45);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    moonGroup.add(glowMesh);

    // 5. Orbiting 3D Asteroid Debris Belt
    const asteroidGroup = new THREE.Group();
    moonGroup.add(asteroidGroup);

    const asteroidData = [];
    const NUM_ASTEROIDS = 16;
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x6e737e,
      roughness: 0.92,
      metalness: 0.1,
      flatShading: true,
    });

    for (let i = 0; i < NUM_ASTEROIDS; i++) {
      // Randomized low-poly polyhedra for organic space boulder look
      const rockRadius = 0.06 + Math.random() * 0.08;
      const rockGeo = new THREE.DodecahedronGeometry(rockRadius, 0);

      // Jitter vertices for rocky irregularity
      const posAttr = rockGeo.attributes.position;
      for (let v = 0; v < posAttr.count; v++) {
        const jitter = (Math.random() - 0.5) * 0.035;
        posAttr.setXYZ(
          v,
          posAttr.getX(v) + jitter,
          posAttr.getY(v) + jitter,
          posAttr.getZ(v) + jitter
        );
      }
      rockGeo.computeVertexNormals();

      const rockMesh = new THREE.Mesh(rockGeo, rockMat);

      // Orbital parameters
      const orbitDist = moonRadius * (1.28 + Math.random() * 0.85);
      const angle = (i / NUM_ASTEROIDS) * Math.PI * 2 + Math.random() * 0.4;
      const inclination = (Math.random() - 0.5) * 0.65;
      const speed = 0.003 + Math.random() * 0.005;

      asteroidData.push({
        mesh: rockMesh,
        dist: orbitDist,
        angle,
        inclination,
        speed,
        rotSpeedX: (Math.random() - 0.5) * 0.03,
        rotSpeedY: (Math.random() - 0.5) * 0.03,
        rotSpeedZ: (Math.random() - 0.5) * 0.03,
      });

      asteroidGroup.add(rockMesh);
    }

    // 6. Realistic Directional Sunlight & Ambient Lighting
    // Strong Key Light creating dramatic day/night terminator crater shadows
    const sunLight = new THREE.DirectionalLight(0xffffff, 2.7);
    sunLight.position.set(6, 2.2, 3.5);
    scene.add(sunLight);

    // Deep Cosmic Starlight Ambient
    const ambientLight = new THREE.AmbientLight(0x0e1322, 0.25);
    scene.add(ambientLight);

    // Subtle Cyan Rim Fill from Deep Space
    const rimLight = new THREE.DirectionalLight(0x00ffcc, 0.4);
    rimLight.position.set(-5, -2, -2);
    scene.add(rimLight);

    // 7. Physics & Interactive Drag State
    let targetRotationX = 0.15;
    let targetRotationY = -0.45;
    let currentRotationX = targetRotationX;
    let currentRotationY = targetRotationY;
    let velX = 0;
    let velY = 0;

    let isPointerDown = false;
    let lastPointerX = 0;
    let lastPointerY = 0;

    const onPointerDown = (e) => {
      // Check if click/tap is on or near the moon interactive right side
      const rect = container.getBoundingClientRect();
      const pointerX = e.clientX - rect.left;
      const pointerY = e.clientY - rect.top;

      // Enable drag across the right side of the screen
      const isRightHalf = pointerX > width * 0.45 || window.innerWidth < 768;
      if (!isRightHalf) return;

      isPointerDown = true;
      setIsDragging(true);
      lastPointerX = pointerX;
      lastPointerY = pointerY;
      velX = 0;
      velY = 0;
    };

    const onPointerMove = (e) => {
      if (!isPointerDown) return;
      const rect = container.getBoundingClientRect();
      const pointerX = e.clientX - rect.left;
      const pointerY = e.clientY - rect.top;

      const deltaX = pointerX - lastPointerX;
      const deltaY = pointerY - lastPointerY;

      lastPointerX = pointerX;
      lastPointerY = pointerY;

      velY = deltaX * 0.0055;
      velX = deltaY * 0.0055;

      targetRotationY += velY;
      targetRotationX += velX;
    };

    const onPointerUp = () => {
      if (isPointerDown) {
        isPointerDown = false;
        setIsDragging(false);
      }
    };

    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    // 8. Scroll-Linked Visibility & Parallax Lerp
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const onScroll = () => {
      targetScroll = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // 9. Resize Handling
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      updateMoonPosition();
    };
    window.addEventListener('resize', onResize);

    // 10. Animation Loop
    let animId = null;

    const animate = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(animate);
        return;
      }

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const viewH = window.innerHeight;

      // Visibility calculation: Fades in as user leaves Sector 00 (Hero)
      // Fully visible from Galaxy (Sector 01) downwards
      const heroThreshold = viewH * 0.55;
      const fadeEnd = viewH * 1.15;
      let opacity = 0;

      if (currentScroll >= heroThreshold) {
        opacity = Math.min(1, (currentScroll - heroThreshold) / (fadeEnd - heroThreshold));
      }

      // Subtle scale drift into orbit from deep space
      const scale = 0.72 + opacity * 0.28;
      moonGroup.scale.set(scale, scale, scale);

      // Section-based subtle tilt shifts
      const totalScrollable = Math.max(1, document.documentElement.scrollHeight - viewH);
      const scrollRatio = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      // Drag inertia and continuous slow celestial rotation
      if (!isPointerDown) {
        targetRotationY += 0.0009; // Slow natural lunar axial rotation
        velX *= 0.92;
        velY *= 0.92;
        targetRotationX += velX;
        targetRotationY += velY;
      }

      // Clamp X rotation to prevent flipping upside down
      targetRotationX = Math.max(-0.85, Math.min(0.85, targetRotationX));

      // Lerp rotation smoothly
      currentRotationX += (targetRotationX - currentRotationX) * 0.08;
      currentRotationY += (targetRotationY - currentRotationY) * 0.08;

      moonMesh.rotation.y = currentRotationY;
      moonMesh.rotation.x = currentRotationX + scrollRatio * 0.22;

      // Update Asteroids Orbit & Tumble Physics
      asteroidData.forEach((ast) => {
        ast.angle += ast.speed;
        const x = Math.cos(ast.angle) * ast.dist;
        const z = Math.sin(ast.angle) * ast.dist;
        const y = Math.sin(ast.angle + ast.inclination) * (ast.dist * 0.32);

        ast.mesh.position.set(x, y, z);
        ast.mesh.rotation.x += ast.rotSpeedX;
        ast.mesh.rotation.y += ast.rotSpeedY;
        ast.mesh.rotation.z += ast.rotSpeedZ;
      });

      // Update shader view vector for Fresnel glow
      glowMat.uniforms.viewVector.value = camera.position;

      // Apply container fade opacity
      if (mountRef.current) {
        mountRef.current.style.opacity = opacity.toFixed(3);
        mountRef.current.style.pointerEvents = opacity > 0.35 ? 'auto' : 'none';
      }

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      moonGeo.dispose();
      moonMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      colorTexture.dispose();
      bumpTexture.dispose();
      rockMat.dispose();
      asteroidData.forEach((ast) => ast.mesh.geometry.dispose());

      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="moon-3d-background"
      className="fixed inset-0 w-full h-full z-[2] transition-opacity duration-500 overflow-hidden"
      style={{
        opacity: 0,
        pointerEvents: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      aria-hidden="true"
      title="3D Interactive Lunar Orbit // Click & drag to spin"
    />
  );
}

export default MoonCanvas;
