import React, { useEffect, useRef } from 'react';

/**
 * DisintegratingTitle Component
 * Renders "KIAN RANCES CAGADAS" in pure solid white in the lower middle of Page 1.
 * 
 * Features:
 * - Genuine letter-to-dust disintegration: particles peel directly off the pixel
 *   contours of every letter stroke (sampled via offscreen canvas).
 * - Powdery, soft stardust particles (microscopic circular grains, not sparks or lines).
 * - Liquid-smooth gravitational streamline flow: exponential steering into the black hole
 *   vortex with zero jerky motions or abrupt accelerations.
 * - Solid, 100% readable lower stems with crumbling upper particulate erosion.
 * - Subtle status tag: "ARCHITECT / JUNIOR WEB & GAME DEVELOPER".
 */
export function DisintegratingTitle() {
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textEl = textRef.current;
    if (!canvas || !textEl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Sampled letter pixels array from the text
    let letterPixels = [];

    // Dense dust particle system (~650 active powdery grains)
    const particles = [];
    const MAX_PARTICLES = 650;

    // 1. Offscreen Text Pixel Sampler
    // Renders the exact text "KIAN RANCES CAGADAS" to find exact letter stroke coordinates
    const sampleTextPixels = () => {
      const heroSection = canvas.closest('#intro') || document.getElementById('intro') || document.body;
      const heroRect = heroSection.getBoundingClientRect();
      const textRect = textEl.getBoundingClientRect();

      if (textRect.width <= 0 || textRect.height <= 0) return;

      const offWidth = Math.ceil(textRect.width);
      const offHeight = Math.ceil(textRect.height);

      const offscreen = document.createElement('canvas');
      offscreen.width = offWidth;
      offscreen.height = offHeight;
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      // Extract computed font styling
      const style = window.getComputedStyle(textEl);
      offCtx.fillStyle = '#ffffff';
      offCtx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      // Render text in offscreen center
      offCtx.fillText('KIAN RANCES CAGADAS', offWidth / 2, offHeight / 2);

      try {
        const imgData = offCtx.getImageData(0, 0, offWidth, offHeight);
        const data = imgData.data;
        const sampled = [];

        const relLeft = textRect.left - heroRect.left;
        const relTop = textRect.top - heroRect.top;

        // Sample pixels on a 2x2 grid for performance and rich coverage
        const step = 2;
        for (let y = 0; y < offHeight; y += step) {
          // Focus disintegration on upper 55% of letters
          const normY = y / offHeight;
          if (normY > 0.58) continue; // Keep lower half solid and intact

          for (let x = 0; x < offWidth; x += step) {
            const idx = (y * offWidth + x) * 4;
            const alpha = data[idx + 3];
            if (alpha > 80) {
              sampled.push({
                x: relLeft + x,
                y: relTop + y,
                normY,
              });
            }
          }
        }

        if (sampled.length > 50) {
          letterPixels = sampled;
        }
      } catch (e) {
        // Fallback if canvas security restricts getImageData
      }
    };

    const resize = () => {
      const heroSection = canvas.closest('#intro') || document.getElementById('intro') || document.body;
      const rect = heroSection.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      sampleTextPixels();
    };

    resize();
    window.addEventListener('resize', resize);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        resize();
      });
    }

    // 2. Spawn a single powdery dust grain directly from a letter pixel
    const spawnDustGrain = (textRect, heroRect) => {
      if (particles.length >= MAX_PARTICLES) return;

      let startX = 0;
      let startY = 0;

      if (letterPixels.length > 0) {
        // Pick an actual pixel from the letter strokes
        const p = letterPixels[Math.floor(Math.random() * letterPixels.length)];
        startX = p.x + (Math.random() - 0.5) * 2;
        startY = p.y + (Math.random() - 0.5) * 2;
      } else if (textRect && heroRect) {
        // Graceful fallback
        const relLeft = textRect.left - heroRect.left;
        const relTop = textRect.top - heroRect.top;
        startX = relLeft + Math.random() * textRect.width;
        startY = relTop + Math.random() * (textRect.height * 0.45);
      } else {
        return;
      }

      // Initial gentle liftoff velocity (starts softly like smoke/ash detaching)
      const liftVx = (Math.random() - 0.5) * 14;
      const liftVy = -16 - Math.random() * 24;

      particles.push({
        x: startX,
        y: startY,
        vx: liftVx,
        vy: liftVy,
        // Microscopic powdery dust grain size (0.7px to 1.7px)
        size: 0.7 + Math.random() * 1.0,
        // Soft powdery opacity (0.25 to 0.75)
        alpha: 0.3 + Math.random() * 0.45,
        life: 0,
        maxLife: 3.2 + Math.random() * 2.0,
        phase: Math.random() * Math.PI * 2,
        swirlFactor: 0.75 + Math.random() * 0.5,
      });
    };

    let lastTime = performance.now();

    // 3. 60FPS Silky-Smooth Gravitational Streamline Loop
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const heroSection = canvas.closest('#intro') || document.getElementById('intro');
      const heroRect = heroSection ? heroSection.getBoundingClientRect() : { left: 0, top: 0 };
      const textRect = textEl.getBoundingClientRect();

      // Continuously spawn batches of fine dust grains from letter strokes
      for (let i = 0; i < 7; i++) {
        spawnDustGrain(textRect, heroRect);
      }

      // Singularity core coordinates in the exact center of the black hole
      const bhX = width / 2;
      const bhY = height / 2;

      // Update and render each powdery dust grain
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;

        // Vector to black hole core
        const dx = bhX - p.x;
        const dy = bhY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Particle swallowed into singularity core or expired
        if (dist <= 22 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // --- SILKY-SMOOTH GRAVITATIONAL STREAMLINE PHYSICS ---
        // Unit direction vector to singularity
        const ux = dx / dist;
        const uy = dy / dist;

        // Perpendicular tangential swirl vector (clockwise accretion swirl)
        const sx = -uy;
        const sy = ux;

        // Ideal streamline velocity profile:
        // Starts at a calm ~40px/s near the letters and accelerates smoothly up to ~280px/s near singularity
        const distClamped = Math.max(0, Math.min(450, dist));
        const proximity = 1.0 - distClamped / 450; // 0.0 near letters, 1.0 at singularity

        const smoothSpeed = 38 + proximity * 240;
        const smoothSwirl = proximity * 150 * p.swirlFactor;

        // Gentle sinusoidal micro-drift for organic billowing stardust feel
        const drift = Math.sin(p.y * 0.015 + p.phase + time * 0.0018) * (8 * (1.0 - proximity));

        const targetVx = ux * smoothSpeed + sx * smoothSwirl + drift;
        const targetVy = uy * smoothSpeed + sy * smoothSwirl;

        // Exponential velocity smoothing (steering) - guarantees C^2 curvature with zero jerks
        const steerRate = 3.6;
        p.vx += (targetVx - p.vx) * Math.min(1.0, steerRate * dt);
        p.vy += (targetVy - p.vy) * Math.min(1.0, steerRate * dt);

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Soft fading alpha:
        // Fade in gently upon liftoff, stay visible throughout flight, fade out when crossing event horizon
        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(1.0, p.life * 4.0);
        const fadeHorizon = dist < 70 ? dist / 70 : 1.0;
        const finalAlpha = Math.max(0, Math.min(1, p.alpha * fadeIn * fadeHorizon * (1.0 - progress * 0.2)));

        // --- RENDER DUST GRAINS (SOFT CIRCULAR PARTICLES, NOT SPARKS) ---
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra soft glow for a subset of particles to create volumetric stardust haze
        if (p.size > 1.2) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(finalAlpha * 0.25).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      {/* Full-viewport matter siphon canvas connecting text directly to black hole center */}
      <canvas
        ref={canvasRef}
        className="singularity-dust-canvas absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Main Pure White Disintegrating Title Container */}
      <div
        ref={containerRef}
        className="disintegrating-title-container relative z-20 w-full max-w-5xl flex flex-col items-center justify-center text-center select-none pb-6 pointer-events-auto"
        aria-label="Kian Rances Cagadas - Architect / Junior Web & Game Developer"
      >
        <div className="relative flex flex-col items-center max-w-4xl px-4">
          <h1
            ref={textRef}
            className="disintegrating-name font-['Orbitron'] font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.16em] uppercase text-white select-none relative"
          >
            {/* Pure solid white text with upper disintegration mask */}
            <span className="disintegrating-white-text block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              KIAN RANCES CAGADAS
            </span>
          </h1>

          {/* Subtle Status Tag */}
          <div className="status-tag-pill mt-3 sm:mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050814]/90 border border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_#ffffff]" />
            <span className="font-['Share_Tech_Mono',monospace] text-xs sm:text-sm font-semibold tracking-[0.22em] text-white/90 uppercase">
              ARCHITECT / JUNIOR WEB &amp; GAME DEVELOPER
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisintegratingTitle;
