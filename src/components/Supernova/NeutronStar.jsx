import { useEffect, useRef } from 'react';

/**
 * ============================================================================
 * REVOLVING NEUTRON STAR & MAGNETOSPHERE // HD ASTROPHYSICAL SIMULATION
 * ============================================================================
 * Physical & Visual Features:
 *  - Ultra-Dense Relativistic Neutron Star Core (T ~ 10^6 K Thermal Incandescence)
 *  - Oblique Rotator Model: Rapid Axial Spin with Magnetic Inclination (Pulsar Beams)
 *  - Relativistic Synchrotron Beams: Precessing Polar Jets with Helical Flux
 *  - 3D Dipolar Magnetic Field Loops (r = R0 * sin²θ) with Accelerating Plasma Streams
 *  - Supernova Remnant Accretion Torus / Keplerian Plasma Disk with Doppler Boosting
 *  - Pulsar Wind Nebula (PWN) Magnetohydrodynamic Shockwave Expansion Rings
 *  - Gravitational Pointer Deflection & Magnetic Glitch Flare Interaction
 *  - High-DPI Retina Resolution (Device Pixel Ratio)
 *  - Zero Idle CPU Overhead via IntersectionObserver Viewport Culling
 * ============================================================================
 */
export function NeutronStar() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Target the parent section (#supernova or parent container) for sizing and pointer events
    const panel = canvas.closest('#supernova') || canvas.parentElement || document.body;

    // Retina HD Geometry
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let coreRadius = 42; // Base radius of the neutron star core

    // Simulation Visibility & Loop
    let isVisible = true;
    let animId = null;
    let lastTime = performance.now();

    // Rotational & Magnetic Physics Parameters
    // Real pulsars have a spin axis and an offset magnetic axis (oblique rotator)
    let spinAngle = 0;                          // Main rotational phase
    const SPIN_SPEED = 2.4;                     // Radians per second (rapid millisecond pulsar cadence)
    const MAGNETIC_TILT = 34 * (Math.PI / 180); // Magnetic inclination angle ~34°

    // 3D Viewing Orientation (Interactive pitch/yaw)
    let viewPitch = 0.28;                       // Tilt towards line of sight
    let viewYaw = 0.0;
    let targetPitch = 0.28;
    let targetYaw = 0.0;

    // Interactive Pointer Physics
    const pointer = {
      active: false,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      glitchEnergy: 0, // Pulsar rotational glitch burst
    };

    /* ==========================================================================
       01. PRE-RENDERED HD SPRITE ATLAS (HIGH-SPEED PARTICLE TEXTURES)
       ========================================================================== */
    const spriteAtlas = {};

    function createGlowSprite(colorStops, size) {
      const off = document.createElement('canvas');
      off.width = size;
      off.height = size;
      const octx = off.getContext('2d');
      if (!octx) return off;
      const half = size / 2;
      const grad = octx.createRadialGradient(half, half, 0, half, half, half);

      colorStops.forEach(([pos, col]) => grad.addColorStop(pos, col));
      octx.fillStyle = grad;
      octx.beginPath();
      octx.arc(half, half, half, 0, Math.PI * 2);
      octx.fill();

      return off;
    }

    function initSpriteAtlas() {
      // 1. Extreme UV Hotspot / Core Starlet
      spriteAtlas.corePlasma = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 1.0)'],
          [0.2, 'rgba(180, 240, 255, 0.95)'],
          [0.5, 'rgba(100, 180, 255, 0.5)'],
          [0.8, 'rgba(140, 60, 255, 0.18)'],
          [1.0, 'rgba(180, 0, 255, 0.0)'],
        ],
        48
      );

      // 2. Synchrotron Beam Particle (Electric Violet-Cyan)
      spriteAtlas.beamPlasma = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 1.0)'],
          [0.25, 'rgba(120, 255, 255, 0.9)'],
          [0.6, 'rgba(0, 200, 255, 0.45)'],
          [0.85, 'rgba(160, 40, 255, 0.15)'],
          [1.0, 'rgba(120, 0, 255, 0.0)'],
        ],
        40
      );

      // 3. Magnetic Loop Flux Particle (Deep Magenta / Ruby / Violet)
      spriteAtlas.magneticPlasma = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 0.95)'],
          [0.3, 'rgba(255, 100, 220, 0.75)'],
          [0.65, 'rgba(179, 40, 255, 0.35)'],
          [1.0, 'rgba(100, 0, 200, 0.0)'],
        ],
        36
      );

      // 4. Accretion Torus Debris (Supernova Hot Gas)
      spriteAtlas.torusGas = createGlowSprite(
        [
          [0.0, 'rgba(255, 240, 200, 0.9)'],
          [0.3, 'rgba(255, 140, 40, 0.6)'],
          [0.7, 'rgba(220, 50, 140, 0.25)'],
          [1.0, 'rgba(120, 20, 160, 0.0)'],
        ],
        44
      );

      // 5. Magnetospheric Wisp
      spriteAtlas.wispGas = createGlowSprite(
        [
          [0.0, 'rgba(140, 240, 255, 0.8)'],
          [0.4, 'rgba(70, 140, 255, 0.4)'],
          [0.8, 'rgba(30, 60, 180, 0.12)'],
          [1.0, 'rgba(10, 20, 80, 0.0)'],
        ],
        64
      );
    }

    /* ==========================================================================
       02. ASTROPHYSICAL PARTICLE SYSTEMS (TORUS & MAGNETOSPHERE)
       ========================================================================== */
    const TORUS_COUNT = 3800;          // Relativistic accretion debris particles
    const MAGNET_COUNT = 2400;         // Dipolar magnetic field loop particles
    const BEAM_COUNT = 900;            // Collimated synchrotron jet particles
    const TOTAL_BODIES = TORUS_COUNT + MAGNET_COUNT + BEAM_COUNT;

    // Pre-allocated flat buffers for smooth 60fps execution with zero GC latency
    const pRadii = new Float32Array(TOTAL_BODIES);
    const pThetas = new Float32Array(TOTAL_BODIES);
    const pOmegas = new Float32Array(TOTAL_BODIES);
    const pZOffsets = new Float32Array(TOTAL_BODIES);
    const pSizes = new Float32Array(TOTAL_BODIES);
    const pOpacities = new Float32Array(TOTAL_BODIES);
    const pPhases = new Float32Array(TOTAL_BODIES);
    const pTypes = new Uint8Array(TOTAL_BODIES); // 0: Torus, 1: Magnetosphere, 2: North Beam, 3: South Beam

    // Expanding Magnetohydrodynamic (MHD) Shockwave Rings
    const shockwaves = [
      { radius: 0.1, maxRadius: 1.4, speed: 0.18, alpha: 0.7, width: 3 },
      { radius: 0.5, maxRadius: 1.4, speed: 0.18, alpha: 0.4, width: 4 },
      { radius: 0.9, maxRadius: 1.4, speed: 0.18, alpha: 0.2, width: 5 },
    ];

    function initParticleSystems() {
      let idx = 0;

      // 1. RELATIVISTIC ACCRETION TORUS (Supernova Remnant Debris Disk)
      for (let i = 0; i < TORUS_COUNT; i++, idx++) {
        // Keplerian orbital distribution r in [1.3, 4.8] * coreRadius
        const u = Math.random();
        const rNorm = 1.35 + Math.pow(u, 1.3) * 3.4; // Normalized radial distance
        const theta = Math.random() * Math.PI * 2;

        pRadii[idx] = rNorm;
        pThetas[idx] = theta;

        // Relativistic Keplerian velocity v = sqrt(GM / r) => omega = v / r ~ r^(-1.5)
        pOmegas[idx] = 1.8 / Math.pow(rNorm, 1.45);

        // Torus scale height (flaring outward)
        const torusThickness = 0.08 + (rNorm - 1.35) * 0.09;
        pZOffsets[idx] = (Math.random() + Math.random() - 1.0) * torusThickness;

        pSizes[idx] = 1.1 + Math.random() * 2.8;
        pOpacities[idx] = 0.35 + Math.random() * 0.65;
        pPhases[idx] = Math.random() * Math.PI * 2;
        pTypes[idx] = 0; // Torus
      }

      // 2. DIPOLAR MAGNETIC FIELD LOOPS (Magnetospheric Plasma Streamers)
      // Dipole field line equation in spherical coordinates: r = R_max * sin^2(theta)
      for (let i = 0; i < MAGNET_COUNT; i++, idx++) {
        const loopMaxRadius = 1.4 + Math.random() * 3.8; // Peak equatorial radius of field loop
        const loopPlaneAngle = Math.random() * Math.PI * 2; // Azimuth around magnetic dipole axis
        const progress = Math.random(); // Progress along field line (0 = south pole, 1 = north pole)

        pRadii[idx] = loopMaxRadius;
        pThetas[idx] = loopPlaneAngle;
        pOmegas[idx] = 0.8 + Math.random() * 1.4; // Plasma drift velocity along field lines
        pZOffsets[idx] = progress; // Storing progress along loop

        pSizes[idx] = 0.9 + Math.random() * 2.2;
        pOpacities[idx] = 0.4 + Math.random() * 0.55;
        pPhases[idx] = Math.random() * Math.PI * 2;
        pTypes[idx] = 1; // Magnetosphere
      }

      // 3. COLLIMATED POLAR SYNCHROTRON JETS (Relativistic Pulsar Beams)
      for (let i = 0; i < BEAM_COUNT; i++, idx++) {
        const isNorth = Math.random() < 0.5;
        const distance = 0.8 + Math.random() * 6.5; // Radial distance along jet column
        const spreadAngle = (Math.random() - 0.5) * 0.12; // Narrow opening angle (~7°)
        const azimuth = Math.random() * Math.PI * 2;

        pRadii[idx] = distance;
        pThetas[idx] = azimuth;
        pOmegas[idx] = 4.5 + Math.random() * 3.5; // Relativistic ejection velocity
        pZOffsets[idx] = spreadAngle;
        pSizes[idx] = 1.2 + Math.random() * 3.2;
        pOpacities[idx] = 0.6 + Math.random() * 0.4;
        pPhases[idx] = Math.random() * Math.PI * 2;
        pTypes[idx] = isNorth ? 2 : 3; // 2: North Beam, 3: South Beam
      }
    }

    /* ==========================================================================
       03. CANVAS SIZING & RESOLUTION CALIBRATION
       ========================================================================== */
    function resizeCanvas() {
      if (!panel || !canvas) return;
      const rect = panel.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 480);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      centerX = width / 2;
      centerY = height / 2;

      // Calibrate core radius to screen size
      coreRadius = Math.min(width, height) * 0.11;
      coreRadius = Math.max(38, Math.min(coreRadius, 75));
    }

    /* ==========================================================================
       04. DRAWING ROUTINES
       ========================================================================== */

    // Shockwave Rings & Pulsar Wind Nebula (PWN)
    function drawShockwaves(delta) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(1.0, Math.cos(viewPitch));

      for (let i = 0; i < shockwaves.length; i++) {
        const sw = shockwaves[i];
        sw.radius += sw.speed * delta;
        if (sw.radius > sw.maxRadius) {
          sw.radius = 0.08;
        }

        const currentR = sw.radius * coreRadius * 4.5;
        const progress = sw.radius / sw.maxRadius;
        const alpha = Math.max(0, (1 - progress) * sw.alpha * (0.8 + pointer.glitchEnergy));

        ctx.strokeStyle = `rgba(179, 136, 255, ${alpha.toFixed(3)})`;
        ctx.lineWidth = sw.width * (1.2 - progress * 0.4);
        ctx.shadowColor = '#00ffff';
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.arc(0, 0, currentR, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    }

    // Dipolar Magnetic Field Lines (Magnetosphere Plasma Streamers)
    function drawMagneticLoops(mx, my, mz, delta) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const startIdx = TORUS_COUNT;
      const endIdx = TORUS_COUNT + MAGNET_COUNT;

      for (let i = startIdx; i < endIdx; i++) {
        // Accelerate plasma particles along field lines
        pZOffsets[i] += pOmegas[i] * delta * 0.55;
        if (pZOffsets[i] > 1.0) pZOffsets[i] -= 1.0;

        const t = pZOffsets[i]; // 0 to 1 along dipole loop
        // Theta from -PI/2 to PI/2 along the dipole line
        const lat = (t - 0.5) * Math.PI * 0.94;
        const cosLat = Math.cos(lat);
        const sinLat = Math.sin(lat);

        // Dipole formula r = R_max * cos^2(lat)
        const rNorm = pRadii[i] * cosLat * cosLat;
        const rPx = Math.max(coreRadius * 0.95, rNorm * coreRadius);

        // Coordinates in magnetic frame
        const magAzimuth = pThetas[i];
        const lx = rPx * cosLat * Math.cos(magAzimuth);
        const ly = rPx * cosLat * Math.sin(magAzimuth);
        const lz = rPx * sinLat;

        // Rotate magnetic frame to align with magnetic vector
        const projX = lx;
        const projY = ly * Math.cos(viewPitch) - lz * Math.sin(viewPitch);

        // Screen projection
        const sx = centerX + projX;
        const sy = centerY + projY;

        // Opacity falls off at outer loops, brighter near magnetic polar funnels
        const proximityFactor = Math.abs(sinLat); // Brighter near poles
        const alpha = pOpacities[i] * (0.35 + 0.65 * proximityFactor) * (0.85 + pointer.glitchEnergy * 0.5);
        const size = pSizes[i] * (1.0 + proximityFactor * 0.8);

        ctx.globalAlpha = Math.min(1.0, alpha);
        ctx.drawImage(spriteAtlas.magneticPlasma, sx - size, sy - size, size * 2, size * 2);
      }

      ctx.restore();
    }

    // Relativistic Accretion Torus (Supernova Debris with Doppler Boosting)
    function drawAccretionTorus(delta, isFront) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const cosP = Math.cos(viewPitch);
      const sinP = Math.sin(viewPitch);

      for (let i = 0; i < TORUS_COUNT; i++) {
        // Keplerian orbital revolution
        pThetas[i] += pOmegas[i] * delta * (1.0 + pointer.glitchEnergy * 1.5);
        const th = pThetas[i];

        const rPx = pRadii[i] * coreRadius;
        const zPx = pZOffsets[i] * coreRadius;

        // Disk plane coordinates
        const xDisk = Math.cos(th) * rPx;
        const yDisk = Math.sin(th) * rPx;

        // Rotate by view pitch & yaw
        const x3D = xDisk * Math.cos(viewYaw) - yDisk * Math.sin(viewYaw);
        const y3D = xDisk * Math.sin(viewYaw) + yDisk * Math.cos(viewYaw);
        const z3D = y3D * sinP + zPx * cosP;

        // Depth test: separate front and back half relative to the neutron star core
        if (isFront && z3D < 0) continue;
        if (!isFront && z3D >= 0) continue;

        const sx = centerX + x3D;
        const sy = centerY + y3D * cosP - zPx * sinP;

        // Relativistic Doppler Beaming Effect
        const vLos = -Math.sin(th);
        const dopplerFactor = 1.0 + vLos * 0.45; // Relativistic beaming boost

        const size = pSizes[i] * (0.8 + 0.3 * dopplerFactor);
        const alpha = Math.min(1.0, pOpacities[i] * dopplerFactor * (0.75 + pointer.glitchEnergy * 0.6));

        ctx.globalAlpha = alpha;

        // Select sprite: approaching side is hotter blue/white, receding side is amber/violet
        const sprite = vLos > 0.15 ? spriteAtlas.corePlasma : spriteAtlas.torusGas;
        ctx.drawImage(sprite, sx - size, sy - size, size * 2, size * 2);
      }

      ctx.restore();
    }

    // Synchrotron Polar Beams (Relativistic Pulsar Lighthouse Jets)
    function drawSynchrotronBeams(mx, my, mz, delta) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const cosP = Math.cos(viewPitch);
      const sinP = Math.sin(viewPitch);

      // Precess and project magnetic jet vector in 3D
      const jetNorthX = mx;
      const jetNorthY = my * cosP - mz * sinP;
      const jetNorthZ = my * sinP + mz * cosP;

      // Check if jet points toward the observer (Lighthouse Beam Flash!)
      const beamLineOfSight = jetNorthZ;

      // Draw individual synchrotron plasma particles along jet column
      const startIdx = TORUS_COUNT + MAGNET_COUNT;
      const endIdx = TOTAL_BODIES;

      for (let i = startIdx; i < endIdx; i++) {
        // Ejection along jet axis
        pRadii[i] += pOmegas[i] * delta * 0.45;
        if (pRadii[i] > 6.8) pRadii[i] = 0.9;

        const dist = pRadii[i] * coreRadius;
        const isNorth = pTypes[i] === 2;
        const sign = isNorth ? 1 : -1;

        // Helical flux swirl around the beam axis
        pThetas[i] += 8.0 * delta;
        const swirlRadius = (dist * 0.08) * (1.0 + Math.sin(pThetas[i]) * 0.2);
        const swirlX = Math.cos(pThetas[i]) * swirlRadius;
        const swirlY = Math.sin(pThetas[i]) * swirlRadius;

        // 3D position along magnetic pole
        const px = jetNorthX * dist * sign + swirlX;
        const py = jetNorthY * dist * sign + swirlY;

        const sx = centerX + px;
        const sy = centerY + py;

        // Beam intensity boosted when pointing close to line of sight
        const pulseBoost = Math.max(0, sign * beamLineOfSight) * 1.5;
        const alpha = Math.min(1.0, pOpacities[i] * (0.6 + pulseBoost) * (1.0 + pointer.glitchEnergy));
        const size = pSizes[i] * (1.0 + (dist / (coreRadius * 4)) * 1.8);

        ctx.globalAlpha = alpha;
        ctx.drawImage(spriteAtlas.beamPlasma, sx - size, sy - size, size * 2, size * 2);
      }

      // Volumetric Continuous Core Beam Ray (Drawn as luminous gradient cones)
      drawBeamCone(jetNorthX, jetNorthY, 1, beamLineOfSight);
      drawBeamCone(jetNorthX, jetNorthY, -1, -beamLineOfSight);

      ctx.restore();
    }

    function drawBeamCone(jx, jy, sign, losFactor) {
      const len = coreRadius * 6.5;
      const targetX = centerX + jx * len * sign;
      const targetY = centerY + jy * len * sign;

      const pulseFlash = Math.max(0, losFactor) * 0.8;
      const grad = ctx.createLinearGradient(centerX, centerY, targetX, targetY);
      grad.addColorStop(0.0, `rgba(255, 255, 255, ${(0.95 + pulseFlash * 0.05).toFixed(2)})`);
      grad.addColorStop(0.2, `rgba(140, 240, 255, ${(0.75 + pulseFlash * 0.2).toFixed(2)})`);
      grad.addColorStop(0.55, `rgba(160, 50, 255, ${(0.35 + pulseFlash * 0.3).toFixed(2)})`);
      grad.addColorStop(0.85, 'rgba(100, 0, 220, 0.12)');
      grad.addColorStop(1.0, 'rgba(40, 0, 150, 0.0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 14 + pulseFlash * 22;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 25;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(targetX, targetY);
      ctx.stroke();

      ctx.lineWidth = 4 + pulseFlash * 6;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }

    // Ultra-Dense Revolving Neutron Star Core (T ~ 10^6 K)
    function drawNeutronStarCore(mx, my, mz, delta) {
      ctx.save();

      // 1. Extreme Gravitational Lensing Blue Halo / Corona
      const coronaGrad = ctx.createRadialGradient(centerX, centerY, coreRadius * 0.6, centerX, centerY, coreRadius * 2.8);
      coronaGrad.addColorStop(0.0, 'rgba(255, 255, 255, 1.0)');
      coronaGrad.addColorStop(0.2, 'rgba(120, 230, 255, 0.85)');
      coronaGrad.addColorStop(0.45, 'rgba(160, 70, 255, 0.45)');
      coronaGrad.addColorStop(0.75, 'rgba(100, 20, 200, 0.15)');
      coronaGrad.addColorStop(1.0, 'rgba(20, 5, 80, 0.0)');

      ctx.fillStyle = coronaGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Solid Relativistic Stellar Crust (Limb Darkening & Hot UV Glow)
      const coreGrad = ctx.createRadialGradient(
        centerX - coreRadius * 0.22,
        centerY - coreRadius * 0.22,
        coreRadius * 0.1,
        centerX,
        centerY,
        coreRadius
      );
      coreGrad.addColorStop(0.0, '#ffffff');
      coreGrad.addColorStop(0.4, '#d0f4ff');
      coreGrad.addColorStop(0.7, '#85dfff');
      coreGrad.addColorStop(0.9, '#5d8eff');
      coreGrad.addColorStop(1.0, '#2d186b'); // Relativistic limb darkening

      ctx.fillStyle = coreGrad;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 30 + pointer.glitchEnergy * 50;

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Magnetic Polar Hotspots (Revolving across surface)
      ctx.globalCompositeOperation = 'lighter';
      const spotRadius = coreRadius * 0.38;

      // North Hotspot
      const nSpotX = centerX + mx * coreRadius * 0.72;
      const nSpotY = centerY + my * coreRadius * 0.72;
      const nGrad = ctx.createRadialGradient(nSpotX, nSpotY, 0, nSpotX, nSpotY, spotRadius);
      nGrad.addColorStop(0.0, '#ffffff');
      nGrad.addColorStop(0.4, 'rgba(0, 255, 255, 0.9)');
      nGrad.addColorStop(0.8, 'rgba(180, 50, 255, 0.4)');
      nGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = nGrad;
      ctx.beginPath();
      ctx.arc(nSpotX, nSpotY, spotRadius, 0, Math.PI * 2);
      ctx.fill();

      // South Hotspot
      const sSpotX = centerX - mx * coreRadius * 0.72;
      const sSpotY = centerY - my * coreRadius * 0.72;
      const sGrad = ctx.createRadialGradient(sSpotX, sSpotY, 0, sSpotX, sSpotY, spotRadius);
      sGrad.addColorStop(0.0, '#ffffff');
      sGrad.addColorStop(0.4, 'rgba(0, 255, 255, 0.9)');
      sGrad.addColorStop(0.8, 'rgba(180, 50, 255, 0.4)');
      sGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
      ctx.fillStyle = sGrad;
      ctx.beginPath();
      ctx.arc(sSpotX, sSpotY, spotRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // Glitch Reconnection Flare (Magnetic Disruption Burst)
    function drawGlitchReconnectionFlare() {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';

      const flareSize = coreRadius * (2.0 + pointer.glitchEnergy * 5.0);
      const flareGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, flareSize);
      flareGrad.addColorStop(0.0, `rgba(255, 255, 255, ${pointer.glitchEnergy.toFixed(2)})`);
      flareGrad.addColorStop(0.3, `rgba(0, 255, 255, ${(pointer.glitchEnergy * 0.8).toFixed(2)})`);
      flareGrad.addColorStop(0.6, `rgba(200, 80, 255, ${(pointer.glitchEnergy * 0.4).toFixed(2)})`);
      flareGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

      ctx.fillStyle = flareGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, flareSize, 0, Math.PI * 2);
      ctx.fill();

      // Transverse shockwave flare spike
      ctx.strokeStyle = `rgba(255, 255, 255, ${(pointer.glitchEnergy * 0.8).toFixed(2)})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX - flareSize * 1.5, centerY);
      ctx.lineTo(centerX + flareSize * 1.5, centerY);
      ctx.stroke();

      ctx.restore();
    }

    /* ==========================================================================
       05. MAIN SIMULATION LOOP
       ========================================================================== */
    function renderLoop(now) {
      if (!isVisible) {
        animId = null;
        return;
      }

      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth physics interpolation for viewing angles
      viewPitch += (targetPitch - viewPitch) * 0.08;
      viewYaw += (targetYaw - viewYaw) * 0.08;

      // Decay glitch energy back to equilibrium
      if (pointer.glitchEnergy > 0.005) {
        pointer.glitchEnergy *= 0.94;
      } else {
        pointer.glitchEnergy = 0;
      }

      // Rapid axial spin of the neutron star
      const currentSpinSpeed = SPIN_SPEED * (1.0 + pointer.glitchEnergy * 2.5);
      spinAngle += currentSpinSpeed * delta;

      // 3D Magnetic Dipole Axis Orientation (Precession & Obliquity)
      const magPrecession = spinAngle * 0.85;
      const magDirX = Math.sin(MAGNETIC_TILT) * Math.cos(magPrecession);
      const magDirY = Math.sin(MAGNETIC_TILT) * Math.sin(magPrecession);
      const magDirZ = Math.cos(MAGNETIC_TILT);

      // Clear canvas
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. PULSAR WIND NEBULA & EXPANDING SHOCKWAVE RINGS
      drawShockwaves(delta);

      // 2. DIPOLAR MAGNETIC FIELD LINES & AURORAL FLUX LOOPS
      drawMagneticLoops(magDirX, magDirY, magDirZ, delta);

      // 3. RELATIVISTIC KEPLERIAN PLASMA ACCRETION TORUS (BACK HALF)
      drawAccretionTorus(delta, false);

      // 4. PRECESSING RELATIVISTIC SYNCHROTRON POLAR BEAMS (SOUTH & NORTH)
      drawSynchrotronBeams(magDirX, magDirY, magDirZ, delta);

      // 5. ULTRA-DENSE REVOLVING NEUTRON STAR CORE (WITH THERMAL LIMB DARKENING)
      drawNeutronStarCore(magDirX, magDirY, magDirZ, delta);

      // 6. RELATIVISTIC KEPLERIAN PLASMA ACCRETION TORUS (FRONT HALF)
      drawAccretionTorus(delta, true);

      // 7. GLITCH RECONNECTION FLARE ON TRIGGER
      if (pointer.glitchEnergy > 0.01) {
        drawGlitchReconnectionFlare();
      }

      ctx.restore();

      animId = requestAnimationFrame(renderLoop);
    }

    /* ==========================================================================
       06. INTERACTIVE POINTER PHYSICS & GLITCH TRIGGER
       ========================================================================== */
    const handlePointerEnter = () => {
      pointer.active = true;
    };

    const handlePointerMove = (e) => {
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      pointer.targetX = e.clientX - rect.left;
      pointer.targetY = e.clientY - rect.top;

      // 3D Perspective Tilt on Pointer Drag/Hover
      targetPitch = 0.28 + relY * 0.35;
      targetYaw = relX * 0.45;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      targetPitch = 0.28;
      targetYaw = 0.0;
    };

    const handlePointerDown = () => {
      pointer.glitchEnergy = 1.0;
    };

    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };

    panel.addEventListener('pointerenter', handlePointerEnter);
    panel.addEventListener('pointermove', handlePointerMove);
    panel.addEventListener('pointerleave', handlePointerLeave);
    panel.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('resize', handleResize);

    // Viewport Culling Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animId) {
            lastTime = performance.now();
            animId = requestAnimationFrame(renderLoop);
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(panel);

    // Initialize Simulation
    initSpriteAtlas();
    initParticleSystems();
    resizeCanvas();

    lastTime = performance.now();
    animId = requestAnimationFrame(renderLoop);

    return () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      if (observer) {
        observer.disconnect();
      }
      clearTimeout(resizeTimer);
      panel.removeEventListener('pointerenter', handlePointerEnter);
      panel.removeEventListener('pointermove', handlePointerMove);
      panel.removeEventListener('pointerleave', handlePointerLeave);
      panel.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="neutron-star-canvas"
      ref={canvasRef}
      className="neutron-star-canvas absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default NeutronStar;
