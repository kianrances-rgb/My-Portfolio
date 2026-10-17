import React, { useEffect, useRef } from 'react';

/**
 * DisintegratingTitle Component
 * Renders "KIAN RANCES CAGADAS" in pure solid white in the lower middle of Page 1.
 * 
 * Features:
 * - Spans the entire #intro hero viewport via an absolute canvas overlay (z-10).
 * - Samples exact pixel stroke coordinates of every letter in "KIAN RANCES CAGADAS".
 * - Visible letter crumbling: micro-dust grains actively detach from the upper letter strokes.
 * - Powdery stardust particles (soft glowing circular grains, not sparks or lines).
 * - Liquid-smooth gravitational streamline flow: continuous exponential velocity steering
 *   into the black hole center with organic accretion swirl.
 * - 100% readable, solid white lower letter stems with an eroding upper particulate edge.
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

    // Sampled letter stroke coordinates
    let letterPixels = [];

    // Dense stardust stream particles
    const particles = [];
    const MAX_PARTICLES = 550;

    // 1. Letter Stroke Pixel Sampler
    // Identifies exact (x, y) coordinates of every letter in "KIAN RANCES CAGADAS"
    const sampleLetterPixels = () => {
      const heroSection = canvas.closest('#intro') || document.getElementById('intro');
      if (!heroSection || !textEl) return;

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

      const style = window.getComputedStyle(textEl);
      offCtx.fillStyle = '#ffffff';
      offCtx.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      offCtx.fillText('KIAN RANCES CAGADAS', offWidth / 2, offHeight / 2);

      const relLeft = textRect.left - heroRect.left;
      const relTop = textRect.top - heroRect.top;

      try {
        const imgData = offCtx.getImageData(0, 0, offWidth, offHeight);
        const data = imgData.data;
        const sampled = [];

        // Sample on a dense 3px grid across the upper 55% of the letters
        for (let y = 0; y < offHeight; y += 3) {
          const normY = y / offHeight;
          if (normY > 0.6) continue; // Keep lower half solid and readable

          for (let x = 0; x < offWidth; x += 3) {
            const idx = (y * offWidth + x) * 4;
            if (data[idx + 3] > 60) {
              sampled.push({
                x: relLeft + x,
                y: relTop + y,
                normY,
              });
            }
          }
        }

        if (sampled.length > 20) {
          letterPixels = sampled;
          return;
        }
      } catch (e) {}

      // Fallback: spawn across letters using font metrics
      const fallback = [];
      for (let i = 0; i < 400; i++) {
        fallback.push({
          x: relLeft + Math.random() * textRect.width,
          y: relTop + Math.random() * (textRect.height * 0.45),
          normY: Math.random() * 0.45,
        });
      }
      letterPixels = fallback;
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

      sampleLetterPixels();
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

      // Initial gentle liftoff velocity (starts softly like rising cosmic smoke)
      const liftVx = (Math.random() - 0.5) * 14;
      const liftVy = -18 - Math.random() * 26;

      particles.push({
        x: startX,
        y: startY,
        vx: liftVx,
        vy: liftVy,
        // Powdery dust grain size (0.8px to 1.8px)
        size: 0.8 + Math.random() * 1.1,
        // Soft powdery opacity (0.45 to 0.85)
        alpha: 0.45 + Math.random() * 0.4,
        life: 0,
        maxLife: 3.2 + Math.random() * 1.8,
        phase: Math.random() * Math.PI * 2,
        swirlFactor: 0.8 + Math.random() * 0.4,
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

      // Continuously spawn fresh powdery dust grains from letter strokes
      for (let i = 0; i < 6; i++) {
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
        if (dist <= 24 || p.life >= p.maxLife) {
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

        // Smooth speed profile:
        // Gentle liftoff near letters (~42px/s) accelerating up to ~270px/s near singularity
        const distClamped = Math.max(0, Math.min(480, dist));
        const proximity = 1.0 - distClamped / 480;

        const smoothSpeed = 42 + proximity * 230;
        const smoothSwirl = proximity * 145 * p.swirlFactor;

        // Gentle sinusoidal micro-drift for organic billowing stardust feel
        const drift = Math.sin(p.y * 0.015 + p.phase + time * 0.0018) * (8 * (1.0 - proximity));

        const targetVx = ux * smoothSpeed + sx * smoothSwirl + drift;
        const targetVy = uy * smoothSpeed + sy * smoothSwirl;

        // Exponential velocity smoothing (steering) - guarantees continuous C^2 curvature with zero jerks
        const steerRate = 3.6;
        p.vx += (targetVx - p.vx) * Math.min(1.0, steerRate * dt);
        p.vy += (targetVy - p.vy) * Math.min(1.0, steerRate * dt);

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Soft fading alpha:
        // Fades in gently on liftoff, stays luminous, fades out when crossing event horizon
        const progress = p.life / p.maxLife;
        const fadeIn = Math.min(1.0, p.life * 4.0);
        const fadeHorizon = dist < 75 ? dist / 75 : 1.0;
        const finalAlpha = Math.max(0, Math.min(1, p.alpha * fadeIn * fadeHorizon * (1.0 - progress * 0.2)));

        // --- RENDER DUST GRAINS (SOFT LUMINOUS CIRCULAR PARTICLES, NOT SPARKS) ---
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Extra soft halo for volumetric stardust glow
        if (p.size > 1.2) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(finalAlpha * 0.3).toFixed(3)})`;
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
      {/* 1. Full-section matter siphon canvas covering all of #intro from (0,0) to (W,H) */}
      <canvas
        ref={canvasRef}
        className="singularity-dust-canvas absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 2. Lower Title Container placed in the lower middle of #intro */}
      <div
        ref={containerRef}
        className="disintegrating-title-container relative z-20 w-full max-w-5xl flex flex-col items-center justify-center text-center select-none pointer-events-auto mt-auto pb-10"
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
