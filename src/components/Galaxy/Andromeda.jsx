import React, { useEffect, useRef } from 'react';

/**
 * ============================================================================
 * ANDROMEDA GALAXY (M31) // HD ASTROPHYSICAL SIMULATION & REVOLVING PHYSICS
 * ============================================================================
 * Features:
 *  - High-Density HD Particle Engine (~14,600 Photometric Stars & Gas Particles)
 *  - Authentic Logarithmic Spiral Arm Geometry (2-Arm Grand Design)
 *  - Flat Galactic Rotation Curve (Dark Matter Halo Differential Dynamics)
 *  - Inclined 3D Spacetime Projection (M31's real ~75° inclination, ~38° position angle)
 *  - Companion Satellite Galaxies (M32 Compact Dwarf & M110 Diffuse Elliptical)
 *  - Multi-Spectral Stellar Populations (Bulge Yellows, Arm O/B Blue Giants,
 *    Sapphire Electric Stars, H II Ruby Emission Nebulae, and Dark Silicate Dust)
 *  - Volumetric Supermassive Core Glare & Relativistic Barycenter
 *  - Interactive 3D Perspective Tilt & Gravitational Pointer Perturbation
 *  - Automatic Viewport Culling via IntersectionObserver (0% Idle CPU)
 * ============================================================================
 */
export function Andromeda() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Target the parent section (#galaxy or parent container) for sizing and pointer events
    const panel = canvas.closest('#galaxy') || canvas.parentElement || document.body;

    // Retina HD Scaling & Geometry State
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let galaxyRadius = 0;

    // Viewport Visibility & Animation Loop State
    let isVisible = true;
    let animId = null;
    let lastTime = performance.now();

    // 3D Inclination & Orientation Parameters (Andromeda M31)
    // Base inclination ~75° (cos ~ 0.26), position angle ~38°
    const BASE_INCLINATION = 75 * (Math.PI / 180);
    const BASE_POS_ANGLE = 38 * (Math.PI / 180);
    let curInclination = BASE_INCLINATION;
    let targetInclination = BASE_INCLINATION;
    let curPosAngle = BASE_POS_ANGLE;
    let targetPosAngle = BASE_POS_ANGLE;

    // Interactive Pointer Physics
    const pointer = {
      active: false,
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      vx: 0,
      vy: 0,
    };

    // Global Angular Progression for Spiral Pattern
    let globalRotationAngle = 0;
    const GLOBAL_ROTATION_SPEED = 0.0018; // Radians per second

    /* ==========================================================================
       01. PRE-RENDERED HD SPRITE ATLAS (OPTIMIZED PARTICLE TEXTURES)
       ========================================================================== */
    const spriteAtlas = {};

    function createGlowSprite(colorStops, size) {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = size;
      offCanvas.height = size;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return offCanvas;
      const half = size / 2;
      const grad = offCtx.createRadialGradient(half, half, 0, half, half, half);

      colorStops.forEach(([pos, col]) => grad.addColorStop(pos, col));
      offCtx.fillStyle = grad;
      offCtx.beginPath();
      offCtx.arc(half, half, half, 0, Math.PI * 2);
      offCtx.fill();

      return offCanvas;
    }

    function initSpriteAtlas() {
      // 1. Core Bulge Golden Star
      spriteAtlas.coreStar = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 240, 1.0)'],
          [0.2, 'rgba(255, 220, 140, 0.9)'],
          [0.5, 'rgba(255, 175, 70, 0.45)'],
          [0.85, 'rgba(255, 130, 30, 0.15)'],
          [1.0, 'rgba(255, 100, 10, 0.0)'],
        ],
        48
      );

      // 2. Young Spiral Arm O/B Blue Supergiant
      spriteAtlas.armStar = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 1.0)'],
          [0.2, 'rgba(180, 240, 255, 0.95)'],
          [0.5, 'rgba(93, 230, 255, 0.5)'],
          [0.8, 'rgba(70, 140, 255, 0.18)'],
          [1.0, 'rgba(40, 80, 240, 0.0)'],
        ],
        48
      );

      // 3. Sapphire Electric Star
      spriteAtlas.cyanStar = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 1.0)'],
          [0.25, 'rgba(120, 255, 240, 0.9)'],
          [0.6, 'rgba(0, 255, 204, 0.45)'],
          [1.0, 'rgba(0, 200, 180, 0.0)'],
        ],
        40
      );

      // 4. H II Ionized Hydrogen Emission Region (Ruby/Rose Nebula)
      spriteAtlas.hiiRegion = createGlowSprite(
        [
          [0.0, 'rgba(255, 220, 240, 0.9)'],
          [0.25, 'rgba(255, 70, 150, 0.75)'],
          [0.6, 'rgba(220, 40, 130, 0.35)'],
          [0.85, 'rgba(160, 20, 120, 0.12)'],
          [1.0, 'rgba(100, 0, 80, 0.0)'],
        ],
        64
      );

      // 5. Interstellar Dust Absorption Filament (Dark Silhouette)
      spriteAtlas.dustPocket = createGlowSprite(
        [
          [0.0, 'rgba(2, 3, 10, 0.85)'],
          [0.45, 'rgba(4, 6, 16, 0.65)'],
          [0.8, 'rgba(8, 12, 28, 0.25)'],
          [1.0, 'rgba(10, 15, 35, 0.0)'],
        ],
        72
      );

      // 6. Halo / Background Muted Diamond Star
      spriteAtlas.haloStar = createGlowSprite(
        [
          [0.0, 'rgba(255, 255, 255, 0.95)'],
          [0.4, 'rgba(180, 200, 240, 0.4)'],
          [1.0, 'rgba(140, 160, 220, 0.0)'],
        ],
        28
      );
    }

    /* ==========================================================================
       02. ASTROPHYSICAL SIMULATION DATA STRUCTURES (~14,600 STARS)
       ========================================================================== */
    const STAR_COUNT = 13500;
    const M32_COUNT = 450;
    const M110_COUNT = 650;
    const TOTAL_PARTICLES = STAR_COUNT + M32_COUNT + M110_COUNT;

    // Pre-allocated flat Float32Arrays for zero garbage collection overhead
    const pRadii = new Float32Array(TOTAL_PARTICLES); // Radial distance from core (normalized 0..1)
    const pThetas = new Float32Array(TOTAL_PARTICLES); // Current orbital azimuth angle
    const pOmegas = new Float32Array(TOTAL_PARTICLES); // Angular velocity (Flat Rotation Curve)
    const pZOffsets = new Float32Array(TOTAL_PARTICLES); // Vertical thickness / scale height
    const pSizes = new Float32Array(TOTAL_PARTICLES); // Particle draw size
    const pOpacities = new Float32Array(TOTAL_PARTICLES); // Particle peak opacity
    const pTypes = new Uint8Array(TOTAL_PARTICLES); // 0: Core, 1: Arm, 2: Cyan, 3: HII, 4: Dust, 5: Halo, 6: M32, 7: M110
    const pTwinklePhases = new Float32Array(TOTAL_PARTICLES);
    const pTwinkleSpeeds = new Float32Array(TOTAL_PARTICLES);

    // Companions Centers in Galaxy Coordinates
    let m32Angle = 0.45;
    let m110Angle = 3.65;

    function initGalaxyParticles() {
      let idx = 0;

      // 1. BULGE POPULATION (High density, older golden-white stars, spherical halo)
      const bulgeCount = Math.floor(STAR_COUNT * 0.22);
      for (let i = 0; i < bulgeCount; i++, idx++) {
        // Sersic / exponential concentration towards center
        const u = Math.random();
        const r = Math.pow(u, 2.2) * 0.28;
        const theta = Math.random() * Math.PI * 2;

        pRadii[idx] = r;
        pThetas[idx] = theta;

        // Bulge differential velocity (nearly solid-body transition to flat)
        const rSoftened = Math.sqrt(r * r + 0.015);
        pOmegas[idx] = 0.009 / rSoftened;

        // Spherical bulge thickness
        const maxZ = (0.28 - r) * 0.4;
        pZOffsets[idx] = (Math.random() - 0.5) * maxZ * 2;

        pSizes[idx] = 0.9 + Math.random() * 2.2;
        pOpacities[idx] = 0.45 + Math.random() * 0.55;
        pTypes[idx] = Math.random() < 0.85 ? 0 : 5; // Mostly golden core, some diamond halo
        pTwinklePhases[idx] = Math.random() * Math.PI * 2;
        pTwinkleSpeeds[idx] = 0.6 + Math.random() * 2.0;
      }

      // 2. SPIRAL ARM POPULATION (Logarithmic 2-arm grand design density waves)
      const armCount = Math.floor(STAR_COUNT * 0.55);
      const pitchParameter = 2.65; // Andromeda winding constant

      for (let i = 0; i < armCount; i++, idx++) {
        // Distributed through the disk (r between 0.15 and 0.98)
        const r = 0.15 + Math.sqrt(Math.random()) * 0.83;

        // Which of the 2 grand-design arms?
        const armIndex = Math.random() < 0.5 ? 0 : 1;
        const armBaseAngle = armIndex * Math.PI;

        // Logarithmic spiral angle theta(r) = theta0 + b * ln(r/r0)
        const armTheta = armBaseAngle + pitchParameter * Math.log(r / 0.15);

        // Gaussian lateral dispersion from arm ridge
        const armWidth = 0.18 + r * 0.22;
        const dispersion = (Math.random() + Math.random() + Math.random() - 1.5) * armWidth;
        const theta = armTheta + dispersion;

        pRadii[idx] = r;
        pThetas[idx] = theta;

        // Flat Galactic Rotation Curve (Vera Rubin dark matter distribution: v ~ const => omega ~ v / r)
        const rSoftened = Math.sqrt(r * r + 0.04);
        pOmegas[idx] = 0.0028 / rSoftened;

        // Thin disk vertical scale height (flaring outward)
        const diskHeight = 0.025 + r * 0.06;
        pZOffsets[idx] = (Math.random() - 0.5) * diskHeight;

        pSizes[idx] = 1.0 + Math.random() * 2.8;
        pOpacities[idx] = 0.4 + Math.random() * 0.6;

        // Particle type assignment in arms
        const typeRand = Math.random();
        if (typeRand < 0.58) {
          pTypes[idx] = 1; // Blue-white O/B supergiant
        } else if (typeRand < 0.78) {
          pTypes[idx] = 2; // Electric cyan
        } else if (typeRand < 0.91) {
          pTypes[idx] = 3; // H II ruby emission nebula
          pSizes[idx] *= 1.8;
        } else {
          pTypes[idx] = 5; // Halo diamond star
        }

        pTwinklePhases[idx] = Math.random() * Math.PI * 2;
        pTwinkleSpeeds[idx] = 0.8 + Math.random() * 2.5;
      }

      // 3. INTERSTELLAR DUST LANES (Dark silicate/PAH absorption bands along inner edge of arms)
      const dustCount = Math.floor(STAR_COUNT * 0.13);
      for (let i = 0; i < dustCount; i++, idx++) {
        const r = 0.22 + Math.random() * 0.72;
        const armIndex = Math.random() < 0.5 ? 0 : 1;
        const armBaseAngle = armIndex * Math.PI;

        // Dust lanes lead slightly ahead of the stellar density crest
        const dustTheta = armBaseAngle + pitchParameter * Math.log(r / 0.15) - 0.22;
        const dispersion = (Math.random() - 0.5) * 0.14;
        const theta = dustTheta + dispersion;

        pRadii[idx] = r;
        pThetas[idx] = theta;

        const rSoftened = Math.sqrt(r * r + 0.04);
        pOmegas[idx] = 0.0028 / rSoftened;

        pZOffsets[idx] = (Math.random() - 0.5) * 0.03;
        pSizes[idx] = 2.4 + Math.random() * 4.5;
        pOpacities[idx] = 0.65 + Math.random() * 0.35;
        pTypes[idx] = 4; // Dark Dust

        pTwinklePhases[idx] = 0;
        pTwinkleSpeeds[idx] = 0;
      }

      // 4. OUTER DIFFUSE STELLAR DISK & HALO
      const haloCount = STAR_COUNT - idx;
      for (let i = 0; i < haloCount; i++, idx++) {
        const r = 0.1 + Math.random() * 0.95;
        const theta = Math.random() * Math.PI * 2;

        pRadii[idx] = r;
        pThetas[idx] = theta;

        const rSoftened = Math.sqrt(r * r + 0.04);
        pOmegas[idx] = 0.0028 / rSoftened;

        const maxZ = 0.04 + r * 0.15;
        pZOffsets[idx] = (Math.random() - 0.5) * maxZ;

        pSizes[idx] = 0.8 + Math.random() * 1.8;
        pOpacities[idx] = 0.25 + Math.random() * 0.45;
        pTypes[idx] = 5; // Halo star
        pTwinklePhases[idx] = Math.random() * Math.PI * 2;
        pTwinkleSpeeds[idx] = 0.5 + Math.random() * 1.8;
      }

      // 5. SATELLITE GALAXY 1: M32 (Compact, bright elliptical dwarf)
      for (let i = 0; i < M32_COUNT; i++, idx++) {
        const rLocal = Math.pow(Math.random(), 2.0) * 0.065;
        const thLocal = Math.random() * Math.PI * 2;

        pRadii[idx] = rLocal;
        pThetas[idx] = thLocal;
        pOmegas[idx] = 0.006 + Math.random() * 0.004;
        pZOffsets[idx] = (Math.random() - 0.5) * 0.05;
        pSizes[idx] = 0.8 + Math.random() * 1.8;
        pOpacities[idx] = 0.5 + Math.random() * 0.5;
        pTypes[idx] = 6; // M32 Star
        pTwinklePhases[idx] = Math.random() * Math.PI * 2;
        pTwinkleSpeeds[idx] = 1.0 + Math.random() * 2.0;
      }

      // 6. SATELLITE GALAXY 2: M110 (Diffuse elongated dwarf elliptical)
      for (let i = 0; i < M110_COUNT; i++, idx++) {
        const rLocal = Math.pow(Math.random(), 1.4) * 0.12;
        const thLocal = Math.random() * Math.PI * 2;

        pRadii[idx] = rLocal;
        pThetas[idx] = thLocal;
        pOmegas[idx] = 0.003 + Math.random() * 0.003;
        pZOffsets[idx] = (Math.random() - 0.5) * 0.06;
        pSizes[idx] = 0.9 + Math.random() * 2.2;
        pOpacities[idx] = 0.35 + Math.random() * 0.45;
        pTypes[idx] = 7; // M110 Star
        pTwinklePhases[idx] = Math.random() * Math.PI * 2;
        pTwinkleSpeeds[idx] = 0.8 + Math.random() * 1.5;
      }
    }

    /* ==========================================================================
       03. CANVAS SIZING & RESOLUTION CALIBRATION
       ========================================================================== */
    function resizeCanvas() {
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

      // Size galaxy to comfortably span the panel background
      galaxyRadius = Math.max(width, height) * 0.72;
    }

    /* ==========================================================================
       04. VOLUMETRIC NEBULA & INTERSTELLAR BACKDROP
       ========================================================================== */
    function drawVolumetricGalaxyBackdrop(cosInc) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(curPosAngle);
      ctx.scale(1.0, cosInc);

      // Diffuse elliptical starlight halo
      const outerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, galaxyRadius * 0.95);
      outerGrad.addColorStop(0.0, 'rgba(80, 110, 200, 0.18)');
      outerGrad.addColorStop(0.25, 'rgba(45, 65, 150, 0.12)');
      outerGrad.addColorStop(0.55, 'rgba(25, 35, 95, 0.06)');
      outerGrad.addColorStop(0.85, 'rgba(12, 18, 50, 0.02)');
      outerGrad.addColorStop(1.0, 'rgba(4, 6, 18, 0.0)');

      ctx.fillStyle = outerGrad;
      ctx.beginPath();
      ctx.arc(0, 0, galaxyRadius * 0.95, 0, Math.PI * 2);
      ctx.fill();

      // Inner stellar bulge ambient radiance
      const innerGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, galaxyRadius * 0.38);
      innerGrad.addColorStop(0.0, 'rgba(255, 230, 170, 0.32)');
      innerGrad.addColorStop(0.3, 'rgba(255, 190, 110, 0.20)');
      innerGrad.addColorStop(0.65, 'rgba(140, 180, 255, 0.10)');
      innerGrad.addColorStop(1.0, 'rgba(50, 80, 160, 0.0)');

      ctx.fillStyle = innerGrad;
      ctx.beginPath();
      ctx.arc(0, 0, galaxyRadius * 0.38, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    /* ==========================================================================
       05. SATELLITE DWARF GALAXIES (M32 & M110)
       ========================================================================== */
    function drawSatelliteGalaxies(cosInc, cosPA, sinPA) {
      // M32: Compact dwarf elliptical
      const m32R = galaxyRadius * 0.42;
      const m32Gx = Math.cos(m32Angle) * m32R;
      const m32Gy = Math.sin(m32Angle) * m32R;
      const m32X1 = m32Gx * cosPA - m32Gy * sinPA;
      const m32Y1 = m32Gx * sinPA + m32Gy * cosPA;
      const m32ScreenX = centerX + m32X1;
      const m32ScreenY = centerY + m32Y1 * cosInc;

      // Render M32 Glow
      const m32Grad = ctx.createRadialGradient(
        m32ScreenX,
        m32ScreenY,
        0,
        m32ScreenX,
        m32ScreenY,
        45
      );
      m32Grad.addColorStop(0.0, 'rgba(255, 240, 200, 0.7)');
      m32Grad.addColorStop(0.25, 'rgba(255, 210, 140, 0.35)');
      m32Grad.addColorStop(0.6, 'rgba(200, 160, 100, 0.12)');
      m32Grad.addColorStop(1.0, 'rgba(100, 70, 40, 0.0)');
      ctx.fillStyle = m32Grad;
      ctx.beginPath();
      ctx.arc(m32ScreenX, m32ScreenY, 45, 0, Math.PI * 2);
      ctx.fill();

      // M110: Elongated silvery dwarf elliptical
      const m110R = galaxyRadius * 0.76;
      const m110Gx = Math.cos(m110Angle) * m110R;
      const m110Gy = Math.sin(m110Angle) * m110R;
      const m110X1 = m110Gx * cosPA - m110Gy * sinPA;
      const m110Y1 = m110Gx * sinPA + m110Gy * cosPA;
      const m110ScreenX = centerX + m110X1;
      const m110ScreenY = centerY + m110Y1 * cosInc;

      ctx.save();
      ctx.translate(m110ScreenX, m110ScreenY);
      ctx.rotate(curPosAngle + 0.4);
      ctx.scale(1.4, 0.7);

      const m110Grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 65);
      m110Grad.addColorStop(0.0, 'rgba(220, 235, 255, 0.4)');
      m110Grad.addColorStop(0.35, 'rgba(160, 190, 240, 0.2)');
      m110Grad.addColorStop(0.7, 'rgba(100, 130, 200, 0.08)');
      m110Grad.addColorStop(1.0, 'rgba(40, 60, 120, 0.0)');
      ctx.fillStyle = m110Grad;
      ctx.beginPath();
      ctx.arc(0, 0, 65, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    /* ==========================================================================
       06. DENSE STAR PARTICLES RENDERING (~14,600 BODIES)
       ========================================================================== */
    function drawGalaxyParticles(delta, cosInc, sinInc, cosPA, sinPA) {
      // First Pass: Additive blending for luminous stars & nebulae
      ctx.globalCompositeOperation = 'lighter';

      const len = STAR_COUNT;
      for (let i = 0; i < len; i++) {
        const type = pTypes[i];
        if (type === 4) continue; // Skip dark dust in additive pass

        // Differential orbital revolution
        pThetas[i] += pOmegas[i] * delta * 60;
        const currentTheta = pThetas[i] + globalRotationAngle;

        const r = pRadii[i] * galaxyRadius;
        const z = pZOffsets[i] * galaxyRadius;

        // Galactic plane coordinates
        const gx = Math.cos(currentTheta) * r;
        const gy = Math.sin(currentTheta) * r;

        // Rotate by Position Angle on sky plane
        const x1 = gx * cosPA - gy * sinPA;
        const y1 = gx * sinPA + gy * cosPA;

        // Inclination tilt in 3D spacetime
        let sx = centerX + x1;
        let sy = centerY + y1 * cosInc - z * sinInc;

        // Interactive pointer gravitational nudge
        if (pointer.active) {
          const dx = sx - pointer.x;
          const dy = sy - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 22500 && distSq > 4) {
            // 150px radius
            const dist = Math.sqrt(distSq);
            const force = (150 - dist) * 0.035;
            sx += (dx / dist) * force;
            sy += (dy / dist) * force;
          }
        }

        // Screen boundary culling
        if (sx < -20 || sx > width + 20 || sy < -20 || sy > height + 20) continue;

        // Twinkle / scintillation dynamics
        pTwinklePhases[i] += pTwinkleSpeeds[i] * delta;
        const twinkle = 0.8 + 0.2 * Math.sin(pTwinklePhases[i]);
        const alpha = Math.min(1.0, pOpacities[i] * twinkle);
        const size = pSizes[i] * (0.85 + 0.15 * cosInc);

        ctx.globalAlpha = alpha;

        // Select pre-rendered high-speed sprite
        let sprite = spriteAtlas.armStar;
        if (type === 0) sprite = spriteAtlas.coreStar;
        else if (type === 2) sprite = spriteAtlas.cyanStar;
        else if (type === 3) sprite = spriteAtlas.hiiRegion;
        else if (type === 5) sprite = spriteAtlas.haloStar;

        if (sprite) {
          ctx.drawImage(sprite, sx - size, sy - size, size * 2, size * 2);
        }
      }

      // Second Pass: Normal blending for Interstellar Dust Absorption Silhouettes
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < len; i++) {
        if (pTypes[i] !== 4) continue; // Only process dust

        pThetas[i] += pOmegas[i] * delta * 60;
        const currentTheta = pThetas[i] + globalRotationAngle;

        const r = pRadii[i] * galaxyRadius;
        const z = pZOffsets[i] * galaxyRadius;

        const gx = Math.cos(currentTheta) * r;
        const gy = Math.sin(currentTheta) * r;

        const x1 = gx * cosPA - gy * sinPA;
        const y1 = gx * sinPA + gy * cosPA;

        let sx = centerX + x1;
        let sy = centerY + y1 * cosInc - z * sinInc;

        if (pointer.active) {
          const dx = sx - pointer.x;
          const dy = sy - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 22500 && distSq > 4) {
            const dist = Math.sqrt(distSq);
            const force = (150 - dist) * 0.035;
            sx += (dx / dist) * force;
            sy += (dy / dist) * force;
          }
        }

        if (sx < -40 || sx > width + 40 || sy < -40 || sy > height + 40) continue;

        const size = pSizes[i] * 3.5;
        ctx.globalAlpha = pOpacities[i] * 0.75;
        if (spriteAtlas.dustPocket) {
          ctx.drawImage(spriteAtlas.dustPocket, sx - size, sy - size, size * 2, size * 2);
        }
      }

      // Third Pass: Satellite companion stars (M32 and M110)
      ctx.globalCompositeOperation = 'lighter';

      // M32 Stars
      const m32R = galaxyRadius * 0.42;
      const m32Gx = Math.cos(m32Angle) * m32R;
      const m32Gy = Math.sin(m32Angle) * m32R;
      const m32BaseX = m32Gx * cosPA - m32Gy * sinPA;
      const m32BaseY = m32Gx * sinPA + m32Gy * cosPA;

      for (let i = STAR_COUNT; i < STAR_COUNT + M32_COUNT; i++) {
        pThetas[i] += pOmegas[i] * delta * 60;
        const localR = pRadii[i] * galaxyRadius * 0.35;
        const lx = Math.cos(pThetas[i]) * localR;
        const ly = Math.sin(pThetas[i]) * localR;

        const sx = centerX + m32BaseX + lx;
        const sy = centerY + m32BaseY * cosInc + ly * cosInc;

        if (sx < 0 || sx > width || sy < 0 || sy > height) continue;

        const size = pSizes[i] * 1.2;
        ctx.globalAlpha = pOpacities[i] * 0.8;
        if (spriteAtlas.coreStar) {
          ctx.drawImage(spriteAtlas.coreStar, sx - size, sy - size, size * 2, size * 2);
        }
      }

      // M110 Stars
      const m110R = galaxyRadius * 0.76;
      const m110Gx = Math.cos(m110Angle) * m110R;
      const m110Gy = Math.sin(m110Angle) * m110R;
      const m110BaseX = m110Gx * cosPA - m110Gy * sinPA;
      const m110BaseY = m110Gx * sinPA + m110Gy * cosPA;

      for (let i = STAR_COUNT + M32_COUNT; i < TOTAL_PARTICLES; i++) {
        pThetas[i] += pOmegas[i] * delta * 60;
        const localR = pRadii[i] * galaxyRadius * 0.5;
        const lx = Math.cos(pThetas[i]) * localR * 1.3;
        const ly = Math.sin(pThetas[i]) * localR * 0.7;

        const sx = centerX + m110BaseX + lx;
        const sy = centerY + m110BaseY * cosInc + ly * cosInc;

        if (sx < 0 || sx > width || sy < 0 || sy > height) continue;

        const size = pSizes[i] * 1.1;
        ctx.globalAlpha = pOpacities[i] * 0.65;
        if (spriteAtlas.haloStar) {
          ctx.drawImage(spriteAtlas.haloStar, sx - size, sy - size, size * 2, size * 2);
        }
      }

      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'source-over';
    }

    /* ==========================================================================
       07. SUPERMASSIVE BULGE & CENTRAL BARYCENTER RADIANCE
       ========================================================================== */
    function drawSupermassiveCoreGlow(cosInc) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.translate(centerX, centerY);
      ctx.rotate(curPosAngle);
      ctx.scale(1.0, cosInc);

      // 1. Intense Stellar Core Lens Flare (M31 Nucleus)
      const coreFlareGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 85);
      coreFlareGrad.addColorStop(0.0, 'rgba(255, 255, 250, 1.0)');
      coreFlareGrad.addColorStop(0.12, 'rgba(255, 245, 200, 0.95)');
      coreFlareGrad.addColorStop(0.35, 'rgba(255, 210, 120, 0.65)');
      coreFlareGrad.addColorStop(0.65, 'rgba(255, 160, 60, 0.28)');
      coreFlareGrad.addColorStop(0.88, 'rgba(180, 200, 255, 0.12)');
      coreFlareGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');

      ctx.fillStyle = coreFlareGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 85, 0, Math.PI * 2);
      ctx.fill();

      // 2. Transverse Core Diffraction Spike / Relativistic Jet Ray
      const spikeLen = galaxyRadius * 0.35;
      const spikeGrad = ctx.createLinearGradient(-spikeLen, 0, spikeLen, 0);
      spikeGrad.addColorStop(0.0, 'rgba(255, 220, 150, 0.0)');
      spikeGrad.addColorStop(0.4, 'rgba(255, 230, 170, 0.15)');
      spikeGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.55)');
      spikeGrad.addColorStop(0.6, 'rgba(255, 230, 170, 0.15)');
      spikeGrad.addColorStop(1.0, 'rgba(255, 220, 150, 0.0)');

      ctx.fillStyle = spikeGrad;
      ctx.fillRect(-spikeLen, -1.5, spikeLen * 2, 3);

      ctx.restore();
    }

    /* ==========================================================================
       08. MAIN ASTROPHYSICAL RENDER LOOP
       ========================================================================== */
    function renderLoop(now) {
      if (!isVisible) {
        animId = null;
        return;
      }

      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth physics interpolation for viewing angles
      curInclination += (targetInclination - curInclination) * 0.06;
      curPosAngle += (targetPosAngle - curPosAngle) * 0.06;

      // Smooth pointer tracking
      if (pointer.active) {
        pointer.x += (pointer.targetX - pointer.x) * 0.1;
        pointer.y += (pointer.targetY - pointer.y) * 0.1;
      }

      // Global galactic revolution
      globalRotationAngle += GLOBAL_ROTATION_SPEED * delta * 60;
      m32Angle += 0.0012 * delta * 60;
      m110Angle -= 0.0008 * delta * 60;

      // Compute 3D viewing projection trigonometry
      const cosInc = Math.cos(curInclination);
      const sinInc = Math.sin(curInclination);
      const cosPA = Math.cos(curPosAngle);
      const sinPA = Math.sin(curPosAngle);

      // Clear canvas with deep transparent cosmic void
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. VOLUMETRIC BACKGROUND EMISSION & NEBULA HALO
      drawVolumetricGalaxyBackdrop(cosInc);

      // 2. RENDER COMPANION SATELLITE GALAXIES IN ORBIT
      drawSatelliteGalaxies(cosInc, cosPA, sinPA);

      // 3. RENDER ALL PARTICLES (Core, Arms, Cyan Giants, H II Nebulae, Dust)
      drawGalaxyParticles(delta, cosInc, sinInc, cosPA, sinPA);

      // 4. SUPERMASSIVE CENTRAL BULGE & RELATIVISTIC CORE GLARE
      drawSupermassiveCoreGlow(cosInc);

      ctx.restore();

      animId = requestAnimationFrame(renderLoop);
    }

    /* ==========================================================================
       09. INTERACTIVE POINTER LISTENERS
       ========================================================================== */
    const handlePointerEnter = () => {
      pointer.active = true;
    };

    const handlePointerMove = (e) => {
      const rect = panel.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      pointer.targetX = e.clientX - rect.left;
      pointer.targetY = e.clientY - rect.top;

      // Interactive 3D inclination tilt (pitch +/- 6°, yaw +/- 8°)
      targetInclination = BASE_INCLINATION + relY * 0.12;
      targetPosAngle = BASE_POS_ANGLE + relX * 0.16;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      targetInclination = BASE_INCLINATION;
      targetPosAngle = BASE_POS_ANGLE;
    };

    panel.addEventListener('pointerenter', handlePointerEnter);
    panel.addEventListener('pointermove', handlePointerMove);
    panel.addEventListener('pointerleave', handlePointerLeave);

    // Debounced Resize Listener
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };
    window.addEventListener('resize', handleResize);

    // IntersectionObserver for 0% CPU consumption when scrolled away
    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
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
    }

    // Initialize Simulation
    initSpriteAtlas();
    initGalaxyParticles();
    resizeCanvas();

    // Start render loop
    lastTime = performance.now();
    animId = requestAnimationFrame(renderLoop);

    // Component Cleanup
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
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="andromeda-galaxy-canvas"
      ref={canvasRef}
      className="andromeda-galaxy-canvas absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default Andromeda;
