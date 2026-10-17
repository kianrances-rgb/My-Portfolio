import React, { useEffect, useRef } from 'react';

/**
 * Vertex Shader Source
 * Full screen quad mapping with normalized device coordinates
 */
const vsSource = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
      v_uv = (a_position + 1.0) * 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

/**
 * Fragment Shader Source
 * Relativistic Ray-Bending & Accretion Disk Gravitational Lensing
 * - Einstein Photon Sphere & Schwarzschild Event Horizon
 * - Keplerian differential swirl velocity (v ~ 1/sqrt(r))
 * - Relativistic Doppler Beaming (approaching limb boosted & blueshifted, receding limb redshifted)
 * - Fractal Brownian Motion (FBM) turbulent plasma filaments
 * - Spacetime metric warping grid
 */
const fsSource = `
  precision highp float;
  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;
  varying vec2 v_uv;

  #define PI 3.14159265359

  // 2D Rotation Matrix
  mat2 rotate2d(float angle) {
      float s = sin(angle);
      float c = cos(angle);
      return mat2(c, -s, s, c);
  }

  // Hash function
  float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
  }

  // Fractal Brownian Motion for swirling plasma dust
  float fbm(vec2 p) {
      float v = 0.0;
      float a = 0.5;
      vec2 shift = vec2(100.0);
      mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for (int i = 0; i < 5; ++i) {
          v += a * (sin(p.x * 2.8) * cos(p.y * 2.8));
          p = rot * p * 2.05 + shift;
          a *= 0.5;
      }
      return v;
  }

  void main() {
      // Aspect ratio correction
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      
      // Interactive mouse tilt reaction
      vec2 mouseOffset = (u_mouse - 0.5) * 0.42;
      uv -= mouseOffset * 0.28;

      float r = length(uv);
      float angle = atan(uv.y, uv.x);

      // Schwarzschild Event Horizon radius & Photon sphere radius
      float r_s = 0.185;           // Event horizon shadow radius
      float r_photon = r_s * 1.48; // Photon sphere border

      // Gravitational Lensing Distortion: Light bends sharply toward singularity
      float deflection = (r_s * r_s * 0.92) / max(r, 0.001);
      vec2 lensedUV = uv;
      if (r > r_s) {
          lensedUV -= normalize(uv) * deflection * 0.52;
      }

      // Tilted Accretion Disk Projection (~70 deg inclination)
      vec2 diskCoord = lensedUV;
      diskCoord.y /= 0.38; // Foreshorten vertical axis for dramatic 3D tilt

      // Gravitational Lensing creates a secondary upper and lower halo
      // by bending the back of the disk OVER and UNDER the event horizon
      float haloY = abs(lensedUV.y) - (r_s * 1.08);
      vec2 haloCoord = vec2(lensedUV.x, haloY / 0.28);

      float diskR = length(diskCoord);
      float haloR = length(haloCoord);

      // Swirling angular dynamics with Keplerian velocity profile (v ~ 1/sqrt(r))
      float time = u_time * 0.9;
      float swirlAngle = angle + (time * 0.85) / max(r * 2.2, 0.18);
      float plasmaNoise = fbm(vec2(swirlAngle * 4.5, r * 15.0 - time * 1.4));

      // 1. Plasma glow intensity in tilted accretion disk
      float diskGlow = 0.0;
      if (diskR > r_s * 1.02 && diskR < r_s * 4.5) {
          float diskMask = smoothstep(r_s * 1.02, r_s * 1.38, diskR) * (1.0 - smoothstep(r_s * 2.3, r_s * 4.5, diskR));
          diskGlow += diskMask * (0.88 + 0.45 * plasmaNoise);
      }

      // 2. Gravitationally bent upper and lower halo
      if (haloR > r_s * 0.92 && haloR < r_s * 3.5) {
          float haloMask = smoothstep(r_s * 0.92, r_s * 1.28, haloR) * (1.0 - smoothstep(r_s * 1.85, r_s * 3.5, haloR));
          diskGlow += haloMask * 0.72 * (0.8 + 0.35 * sin(swirlAngle * 5.0 + time));
      }

      // 3. Relativistic Doppler Beaming Factor (Approaching limb boosted & brightened)
      float dopplerFactor = clamp(1.0 - (uv.x / max(r, 0.1)) * 0.52, 0.3, 2.2);
      diskGlow *= dopplerFactor;

      // 4. Einstein Photon Ring: Intense luminous golden circle
      float photonRing = exp(-pow((r - r_photon) * 88.0, 2.0)) * 2.6;

      // 5. Inner Accretion Edge flare
      float innerEdge = exp(-pow((r - r_s * 1.06) * 48.0, 2.0)) * 2.1;

      // 6. Galactic Black Hole Signature Color Palette:
      // Innermost: Incandescent Pure White & Radiant Golden Yellow
      // Mid Disk: Fiery Scarlet Red & Plasma Orange
      // Outer Halo: Deep Royal Purple & Electric Violet
      vec3 colWhite      = vec3(1.0, 0.98, 0.92);
      vec3 colGold       = vec3(1.0, 0.88, 0.18); // #ffe02e
      vec3 colOrange     = vec3(1.0, 0.42, 0.08); // #ff6b14
      vec3 colScarlet    = vec3(1.0, 0.12, 0.28); // #ff1f47
      vec3 colNeonPurple = vec3(0.72, 0.20, 0.98); // #b833fa
      vec3 colDeepViolet = vec3(0.36, 0.05, 0.68); // #5c0dae
      vec3 colVoid       = vec3(0.012, 0.012, 0.032);

      vec3 color = colVoid;

      // Subtle Galactic contour wave lines undulating in background
      float waveDist = abs(sin((r * 16.0 - time * 0.7) * PI));
      float waveLines = smoothstep(0.93, 1.0, 1.0 - waveDist) * 0.05;
      color += waveLines * colNeonPurple;

      // Multi-spectrum color gradient:
      // Outer: Deep Violet -> Neon Purple -> Scarlet Red -> Orange -> Gold
      float tGlow = clamp(diskGlow * 1.15, 0.0, 1.0);
      vec3 plasmaCol = mix(colDeepViolet, colNeonPurple, smoothstep(0.0, 0.35, tGlow));
      plasmaCol = mix(plasmaCol, colScarlet, smoothstep(0.35, 0.65, tGlow));
      plasmaCol = mix(plasmaCol, colOrange, smoothstep(0.65, 0.85, tGlow));
      plasmaCol = mix(plasmaCol, colGold, smoothstep(0.85, 1.0, tGlow));

      color += plasmaCol * diskGlow * 1.6;

      // Add High-Energy Golden-White Photon Ring & Inner Edge Flare
      color += (colGold * 0.75 + colWhite * 0.5) * photonRing;
      color += (colOrange * 0.6 + colGold * 0.4) * innerEdge;

      // 7. Central Black Hole Event Horizon Singularity (pure black shadow)
      float shadowMask = smoothstep(r_s - 0.008, r_s + 0.004, r);
      color *= shadowMask;

      // 8. Relativistic Corona around shadow border
      float horizonCorona = exp(-pow((r - r_s) * 30.0, 2.0)) * 1.1;
      color += colOrange * horizonCorona * shadowMask;

      // 9. Floating stellar sparks & relativistic embers around the black hole
      float emberHash = hash(floor(uv * 42.0));
      if (emberHash > 0.982 && r > r_s * 1.2 && r < r_s * 4.6) {
          float emberDist = length(fract(uv * 42.0) - 0.5);
          float emberGlow = smoothstep(0.3, 0.0, emberDist);
          vec3 emberCol = mix(colGold, colNeonPurple, sin(emberHash * 50.0 + time) * 0.5 + 0.5);
          color += emberCol * emberGlow * 1.8;
      }

      // Smooth outer vignette edge
      float vig = 1.0 - smoothstep(0.7, 1.35, length(uv));
      color *= vig;

      gl_FragColor = vec4(color, 1.0);
  }
`;

/**
 * BlackHole Component
 * Renders the real-time relativistic black hole raymarching shader with Canvas 2D fallback,
 * mouse tilt responsiveness, window DPR scaling, and global BlackHoleEngine registry.
 */
export function BlackHole() {
  const canvasRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Trigger Quantum Hawking Radiation Flare
    const triggerHawkingFlash = () => {
      const flare = flareRef.current || document.getElementById('hawking-radiation-flash');
      if (flare) {
        flare.classList.remove('flare');
        void flare.offsetWidth; // Force CSS reflow
        flare.classList.add('flare');
        setTimeout(() => {
          flare.classList.remove('flare');
        }, 650);
      }
    };

    // Global Registry for Singularity Telemetry & Spaghettification Engine
    window.BlackHoleEngine = {
      center: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
      radius: 80,
      tidalRadius: 360,
      isActive: true,
      getMetrics: function () {
        return {
          x: this.center.x,
          y: this.center.y,
          radius: this.radius,
          tidalRadius: this.tidalRadius,
        };
      },
      triggerHawkingFlash,
    };

    let gl = null;
    let program = null;
    let vs = null;
    let fs = null;
    let positionBuffer = null;
    let uResolution = null;
    let uTime = null;
    let uMouse = null;

    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;
    let startTime = performance.now();
    let isWebGlSupported = false;
    let isVisible = true;
    let isTabActive = !document.hidden;
    let animId = null;

    function createShader(glCtx, type, source) {
      const shader = glCtx.createShader(type);
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.warn('Shader Compile Error:', glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    }

    function initWebGL() {
      try {
        gl =
          canvas.getContext('webgl', { antialias: true, alpha: false, depth: false }) ||
          canvas.getContext('experimental-webgl');
        if (!gl) return false;

        vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
        fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
        if (!vs || !fs) return false;

        program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
          console.warn('WebGL Link Error:', gl.getProgramInfoLog(program));
          return false;
        }

        gl.useProgram(program);

        // Screen Quad Buffer
        positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
          ]),
          gl.STATIC_DRAW
        );

        const aPosition = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        // Uniform Locations
        uResolution = gl.getUniformLocation(program, 'u_resolution');
        uTime = gl.getUniformLocation(program, 'u_time');
        uMouse = gl.getUniformLocation(program, 'u_mouse');

        return true;
      } catch (e) {
        console.warn('WebGL Initialization Exception:', e);
        return false;
      }
    }

    // Dynamic DPR and Viewport Resize Handler
    function handleResize() {
      const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
      const maxDpr = isTouch ? 1.25 : 1.75;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);

      if (gl) {
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      // Update Global Telemetry Center in Screen Space
      const introSection = document.getElementById('intro');
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
        window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
      } else {
        window.BlackHoleEngine.center.x = w / 2;
        window.BlackHoleEngine.center.y = h / 2;
      }

      // Scaled event horizon radius matching r_s = 0.18 in shader
      const minDim = Math.min(w, h);
      window.BlackHoleEngine.radius = minDim * 0.16;
      window.BlackHoleEngine.tidalRadius = minDim * 0.48; // Spaghettification boundary
    }

    // 2D Canvas Procedural Relativistic Warping Engine (Active Fallback)
    function renderCanvas2D(timestamp) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const r_s = window.BlackHoleEngine.radius || Math.min(w, h) * 0.16;
      const t = (timestamp - startTime) * 0.001;

      ctx.fillStyle = '#030308';
      ctx.fillRect(0, 0, w, h);

      ctx.save();
      // Mouse tilt translation
      const tiltX = (mouseX - 0.5) * 40;
      const tiltY = (mouseY - 0.5) * -25;
      ctx.translate(cx + tiltX, cy + tiltY);

      // 1. Spacetime Warping Grid Distortion
      ctx.save();
      ctx.strokeStyle = 'rgba(93, 230, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridStep = 50;
      for (let gx = -w / 2; gx <= w / 2; gx += gridStep) {
        ctx.beginPath();
        for (let gy = -h / 2; gy <= h / 2; gy += 25) {
          const distToCenter = Math.hypot(gx, gy);
          const warp = Math.min(60, (r_s * r_s * 1.5) / Math.max(distToCenter, 15));
          const angle = Math.atan2(gy, gx);
          const wx = gx - Math.cos(angle) * warp;
          const wy = gy - Math.sin(angle) * warp;
          if (gy === -h / 2) ctx.moveTo(wx, wy);
          else ctx.lineTo(wx, wy);
        }
        ctx.stroke();
      }
      ctx.restore();

      // 2. Gravitational Lensing Upper Arch
      const archWave = Math.sin(t * 1.8) * 4;
      const upperArchGrad = ctx.createLinearGradient(-r_s * 2.8, 0, r_s * 2.8, 0);
      upperArchGrad.addColorStop(0.0, 'rgba(168, 85, 247, 0.9)'); // Electric violet
      upperArchGrad.addColorStop(0.35, 'rgba(255, 31, 71, 0.92)'); // Scarlet flame
      upperArchGrad.addColorStop(0.7, 'rgba(255, 224, 46, 0.95)');  // Radiant gold
      upperArchGrad.addColorStop(1.0, 'rgba(92, 13, 174, 0.25)');  // Deep violet receding

      ctx.lineWidth = r_s * 0.38;
      ctx.strokeStyle = upperArchGrad;
      ctx.beginPath();
      ctx.ellipse(0, -r_s * 0.3 + archWave, r_s * 2.1, r_s * 1.75, 0, Math.PI * 0.98, Math.PI * 2.02);
      ctx.stroke();

      // 3. Main Tilted Accretion Disk (Keplerian v ~ 1/sqrt(r))
      const diskTilt = -0.18 + (mouseY - 0.5) * 0.08;
      ctx.save();
      ctx.rotate(diskTilt);

      const numRings = 7;
      for (let i = 0; i < numRings; i++) {
        const ringR = r_s * (1.2 + i * 0.35);
        const ringAlpha = (1.0 - i / numRings) * (0.55 + 0.25 * Math.sin(t * 2.5 + i));

        const ringGrad = ctx.createLinearGradient(-ringR * 2.5, 0, ringR * 2.5, 0);
        ringGrad.addColorStop(0.0, `rgba(168, 85, 247, ${ringAlpha * 0.95})`);
        ringGrad.addColorStop(0.35, `rgba(255, 31, 71, ${ringAlpha * 0.9})`);
        ringGrad.addColorStop(0.7, `rgba(255, 224, 46, ${ringAlpha * 0.95})`);
        ringGrad.addColorStop(1.0, `rgba(54, 7, 104, ${ringAlpha * 0.25})`);

        ctx.lineWidth = r_s * 0.22;
        ctx.strokeStyle = ringGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, ringR * 2.4, ringR * 0.85, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Swirling plasma filaments & turbulent clumps
      for (let j = 0; j < 18; j++) {
        const filamentOrbit = r_s * (1.3 + (j % 4) * 0.45);
        const orbitSpeed = (2.2 / Math.sqrt(filamentOrbit / r_s)) * t + (j * Math.PI) / 9;
        const fx = Math.cos(orbitSpeed) * (filamentOrbit * 2.2);
        const fy = Math.sin(orbitSpeed) * (filamentOrbit * 0.78);
        const fSize = 2.5 + Math.sin(t * 4 + j) * 1.5;

        const isApproaching = fx < 0;
        ctx.fillStyle = isApproaching ? 'rgba(255, 240, 160, 0.95)' : 'rgba(168, 85, 247, 0.6)';
        ctx.shadowColor = isApproaching ? '#ffe02e' : '#b833fa';
        ctx.shadowBlur = isApproaching ? 12 : 6;
        ctx.beginPath();
        ctx.arc(fx, fy, fSize, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.restore();

      // 4. Gravitational Lensing Lower Arch
      const lowerArchGrad = ctx.createLinearGradient(-r_s * 2.5, 0, r_s * 2.5, 0);
      lowerArchGrad.addColorStop(0.0, 'rgba(168, 85, 247, 0.8)');
      lowerArchGrad.addColorStop(0.4, 'rgba(255, 31, 71, 0.8)');
      lowerArchGrad.addColorStop(0.8, 'rgba(255, 224, 46, 0.5)');
      lowerArchGrad.addColorStop(1.0, 'rgba(92, 13, 174, 0.2)');

      ctx.lineWidth = r_s * 0.24;
      ctx.strokeStyle = lowerArchGrad;
      ctx.beginPath();
      ctx.ellipse(0, r_s * 0.28 - archWave * 0.5, r_s * 1.85, r_s * 1.4, 0, Math.PI * 0.05, Math.PI * 0.95);
      ctx.stroke();

      // 5. Relativistic Einstein Photon Ring (r ~ 1.5 * r_s)
      const photonPulse = 1.0 + Math.sin(t * 3.2) * 0.08;
      ctx.strokeStyle = 'rgba(255, 245, 180, 0.98)';
      ctx.shadowColor = '#ffe02e';
      ctx.shadowBlur = 18;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(0, 0, r_s * 1.48 * photonPulse, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Accretion Edge Flare (ISCO)
      ctx.strokeStyle = 'rgba(255, 224, 46, 0.85)';
      ctx.shadowColor = '#ff6b14';
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2.0;
      ctx.beginPath();
      ctx.arc(0, 0, r_s * 1.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 6. Central Black Hole Event Horizon Singularity Shadow (Total Darkness)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(0, 0, r_s, 0, Math.PI * 2);
      ctx.fill();

      // Edge Corona of Event Horizon
      ctx.strokeStyle = 'rgba(255, 140, 40, 0.85)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.restore();
    }

    function startAnimation() {
      if (!animId && isVisible && isTabActive) {
        animId = requestAnimationFrame(animate);
      }
    }

    function stopAnimation() {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    }

    function animate(timestamp) {
      if (!isVisible || !isTabActive) {
        animId = null;
        return;
      }

      // Smooth mouse dampening
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Keep Singularity Center synchronized with scroll
      const introSection = document.getElementById('intro');
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
        window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
      }

      if (isWebGlSupported && gl && program) {
        gl.useProgram(program);
        const elapsedTime = (timestamp - startTime) * 0.001;

        gl.uniform2f(uResolution, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsedTime);
        gl.uniform2f(uMouse, mouseX, mouseY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      } else {
        renderCanvas2D(timestamp);
      }

      animId = requestAnimationFrame(animate);
    }

    // Mouse Tracking for tilt
    const handleMouseMove = (e) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - e.clientY / window.innerHeight;
    };

    // Scroll tracking to update center
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      if (introSection) {
        const rect = introSection.getBoundingClientRect();
        window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
        window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
      }
    };

    // Visibility change handler
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible) {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    // WebGL Context Loss / Restore
    const handleContextLost = (e) => {
      e.preventDefault();
      stopAnimation();
      isWebGlSupported = false;
      gl = null;
      program = null;
    };

    const handleContextRestored = () => {
      isWebGlSupported = initWebGL();
      handleResize();
      startAnimation();
    };

    // Custom Hawking Flash Trigger Listener
    const handleCustomHawkingFlash = () => {
      triggerHawkingFlash();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
    window.addEventListener('trigger-hawking-flash', handleCustomHawkingFlash);

    // IntersectionObserver to pause when intro is off-screen
    const introEl = document.getElementById('intro');
    let observer = null;
    if ('IntersectionObserver' in window && introEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isVisible = entry.isIntersecting;
            if (isVisible) {
              startAnimation();
            } else {
              stopAnimation();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(introEl);
    }

    // Initialize and Start
    isWebGlSupported = initWebGL();
    handleResize();
    startAnimation();

    return () => {
      stopAnimation();
      if (observer) observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      window.removeEventListener('trigger-hawking-flash', handleCustomHawkingFlash);

      if (window.BlackHoleEngine) {
        window.BlackHoleEngine.isActive = false;
      }

      if (gl) {
        if (positionBuffer) gl.deleteBuffer(positionBuffer);
        if (program) gl.deleteProgram(program);
        if (vs) gl.deleteShader(vs);
        if (fs) gl.deleteShader(fs);
      }
    };
  }, []);

  return (
    <div
      className="blackhole-viewport absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden z-[1]"
      id="blackhole-viewport"
      aria-hidden="true"
    >
      <canvas
        id="blackhole-canvas"
        ref={canvasRef}
        className="blackhole-canvas w-full h-full block"
      />
      <div
        id="hawking-radiation-flash"
        ref={flareRef}
        className="hawking-radiation-flash"
        aria-hidden="true"
      />
    </div>
  );
}

export default BlackHole;
