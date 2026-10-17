import React, { useEffect, useRef } from 'react';

/**
 * DisintegratingTitle Component
 * Displays "KIAN RANCES CAGADAS" in pure solid white in the lower middle of Page 1.
 * - Solid readable lower letter stems.
 * - Upper half disintegrates into glowing white matter dust.
 * - Canvas spans the entire #intro section to pull dust particles straight
 *   UPWARD and INWARD into the exact center of the black hole singularity.
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

    // Upward matter stream particles
    const particles = [];
    const MAX_PARTICLES = 280;

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
    };

    resize();
    window.addEventListener('resize', resize);

    // Spawns dust particles along the upper half of the white letters
    const spawnParticle = (textRect, heroRect) => {
      if (particles.length >= MAX_PARTICLES || !textRect || !heroRect) return;

      const relLeft = textRect.left - heroRect.left;
      const relTop = textRect.top - heroRect.top;

      // Random position along the text length
      const startX = relLeft + Math.random() * textRect.width;
      // Start in the upper 45% of the letters
      const startY = relTop + Math.random() * (textRect.height * 0.45);

      // Black hole singularity center in the hero section
      const bhX = width / 2;
      const bhY = height / 2;

      // Initial trajectory pointing upward towards the black hole
      const dx = bhX - startX;
      const dy = bhY - startY; // Negative (upward)
      const dist = Math.sqrt(dx * dx + dy * dy);

      const initialSpeed = 45 + Math.random() * 75;
      const initialVx = (dx / (dist || 1)) * initialSpeed + (Math.random() - 0.5) * 18;
      const initialVy = (dy / (dist || 1)) * initialSpeed - (25 + Math.random() * 50);

      particles.push({
        x: startX,
        y: startY,
        vx: initialVx,
        vy: initialVy,
        prevX: startX,
        prevY: startY,
        size: 1.2 + Math.random() * 2.2,
        alpha: 0.85 + Math.random() * 0.15,
        life: 0,
        maxLife: 2.4 + Math.random() * 1.6,
      });
    };

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const heroSection = canvas.closest('#intro') || document.getElementById('intro');
      const heroRect = heroSection ? heroSection.getBoundingClientRect() : { left: 0, top: 0 };
      const textRect = textEl.getBoundingClientRect();

      // Continuously spawn fresh matter particles from the letters
      for (let i = 0; i < 4; i++) {
        spawnParticle(textRect, heroRect);
      }

      // Singularity core coordinates in the exact center of #intro
      const bhX = width / 2;
      const bhY = height / 2;

      // Update and draw each dust particle pulling into the black hole center
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;

        // Vector to black hole core
        const dx = bhX - p.x;
        const dy = bhY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Particle swallowed by singularity event horizon or expired
        if (dist <= 26 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        p.prevX = p.x;
        p.prevY = p.y;

        // Gravitational acceleration pulling inward to black hole center
        // Accelerates strongly as it approaches the singularity core
        const pullFactor = 72000 / Math.max(dist * 0.85, 35);
        const ux = dx / (dist || 1);
        const uy = dy / (dist || 1);

        p.vx += ux * pullFactor * dt;
        p.vy += uy * pullFactor * dt;

        // Relativistic Keplerian swirl into the accretion disk
        const swirlStrength = 3600 / Math.max(Math.sqrt(dist), 6);
        p.vx += -uy * swirlStrength * dt;
        p.vy += ux * swirlStrength * dt;

        // Inertial damping for silky smooth curvature
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Update positions
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Fading alpha near singularity
        const progress = p.life / p.maxLife;
        const fadeAlpha = dist < 75 ? dist / 75 : 1.0;
        const finalAlpha = Math.max(0, Math.min(1, p.alpha * fadeAlpha * (1.0 - progress * 0.25)));

        // Draw particle as a luminous pure white matter streak aligned with velocity
        ctx.strokeStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 4;

        ctx.beginPath();
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
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
            <span className="disintegrating-white-text block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_0_20px_rgba(255,255,255,0.45)]">
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
