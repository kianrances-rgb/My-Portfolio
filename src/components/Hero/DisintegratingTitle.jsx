import React, { useEffect, useRef } from 'react';

/**
 * DisintegratingTitle Component
 * Displays "KIAN RANCES CAGADAS" in the lower middle of Page 1.
 * - Solid and readable bottom and mid letter stems with an eroded upper plasma edge.
 * - High-speed upward particle dust simulation pulling matter into the black hole above.
 * - Subtle status tag: "ARCHITECT / JUNIOR WEB & GAME DEVELOPER".
 */
export function DisintegratingTitle() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!canvas || !container || !textEl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Active particle array for dust pulling upward
    const particles = [];
    const MAX_PARTICLES = 220;

    const palette = [
      '#00ffcc', // Cyber Cyan
      '#5de6ff', // Electric Ice
      '#ffaa00', // Plasma Gold
      '#ffd700', // Bright Accretion Gold
      '#b833fa', // Lensed Violet
      '#ff2a85', // Relativistic Magenta
      '#ffffff', // Pure Star White
    ];

    const resize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      // Height extends upwards by 260px toward the black hole
      height = rect.height + 260;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();
    window.addEventListener('resize', resize);

    // Helper: spawn particles along text top boundary
    const spawnParticle = (textBounds) => {
      if (particles.length >= MAX_PARTICLES || !textBounds) return;

      // Random position across text width
      const relX = Math.random() * textBounds.width;
      // Start near the top half of the text
      const relY = textBounds.height * (0.15 + Math.random() * 0.45);

      const startX = textBounds.left + relX;
      const startY = height - textBounds.height + relY;

      // Center of the black hole above
      const targetX = width / 2;
      const targetY = 10; // Top of canvas near black hole

      const angleToCenter = Math.atan2(targetY - startY, targetX - startX);
      const initialSpeed = 25 + Math.random() * 60;

      particles.push({
        x: startX,
        y: startY,
        vx: Math.cos(angleToCenter) * initialSpeed + (Math.random() - 0.5) * 35,
        vy: -Math.abs(Math.sin(angleToCenter) * initialSpeed) - (20 + Math.random() * 40),
        size: 1.2 + Math.random() * 2.2,
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 0,
        maxLife: 1.4 + Math.random() * 1.8,
        swirlOffset: Math.random() * Math.PI * 2,
        swirlSpeed: 2.5 + Math.random() * 4.0,
      });
    };

    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Get text location relative to container
      const textRect = textEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const textBounds = {
        left: textRect.left - containerRect.left,
        width: textRect.width,
        height: textRect.height,
      };

      // Spawn burst of particles continuously
      for (let i = 0; i < 4; i++) {
        spawnParticle(textBounds);
      }

      const bhCenterX = width / 2;
      const bhCenterY = 0; // Black hole event horizon center above

      // Update and draw upward-siphoned particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;

        if (p.life >= p.maxLife || p.y <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;

        // Gravitational pull toward black hole singularity:
        // Acceleration increases as particle gets closer to top center
        const dx = bhCenterX - p.x;
        const dy = bhCenterY - p.y;
        const distToSingularity = Math.sqrt(dx * dx + dy * dy);

        const gravitationalPull = 140 / Math.max(distToSingularity * 0.015, 0.6);
        p.vx += (dx / (distToSingularity || 1)) * gravitationalPull * dt;
        p.vy -= (120 + progress * 160) * dt; // Strong upward suction

        // Relativistic swirl jitter
        const swirl = Math.sin(time * 0.003 * p.swirlSpeed + p.swirlOffset) * (18 * (1 - progress));
        p.x += (p.vx + swirl) * dt;
        p.y += p.vy * dt;

        // Fading alpha as particle dissolves into event horizon
        const alpha = Math.sin(progress * Math.PI) * (1.0 - progress * 0.4);

        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

        // Draw particle with subtle motion stretch
        const stretch = Math.min(6, Math.abs(p.vy) * 0.035);
        ctx.fillRect(p.x - p.size / 2, p.y - stretch / 2, p.size, p.size + stretch);

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
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
    <div
      ref={containerRef}
      className="disintegrating-title-wrapper relative w-full flex flex-col items-center justify-center my-3 pointer-events-auto"
      aria-label="Kian Rances Cagadas - Lead Architect / Junior Web & Game Developer"
    >
      {/* Upward Matter Siphon Canvas (Pulls particle dust straight up into the black hole) */}
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 pointer-events-none z-10 overflow-visible"
        aria-hidden="true"
      />

      {/* Main Typography Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Disintegrating Main Name */}
        <h1
          ref={textRef}
          className="disintegrating-name font-['Orbitron'] font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.16em] uppercase select-none relative"
        >
          {/* Layer 1: Solid base providing crisp 100% legibility on lower half */}
          <span className="name-solid-base block text-transparent bg-clip-text bg-gradient-to-t from-white via-[#f0f6ff] to-[#8eb8f8] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            KIAN RANCES CAGADAS
          </span>

          {/* Layer 2: Dissolving upper plasma mask with shimmering ionization edge */}
          <span
            className="name-disintegrating-overlay absolute inset-0 block text-transparent bg-clip-text select-none pointer-events-none"
            aria-hidden="true"
          >
            KIAN RANCES CAGADAS
          </span>

          {/* Layer 3: Neon plasma fringe line right along disintegration threshold */}
          <span className="plasma-disintegration-rim" aria-hidden="true" />
        </h1>

        {/* Subtle Status Tag: ARCHITECT / JUNIOR WEB & GAME DEVELOPER */}
        <div className="status-tag-pill mt-3 sm:mt-3.5 inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#060a1c]/90 border border-cyan-500/35 backdrop-blur-md shadow-[0_0_18px_rgba(0,255,204,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00ffcc]" />
          <span className="font-['Share_Tech_Mono',monospace] text-[11px] sm:text-xs font-bold tracking-[0.2em] text-cyan-300 uppercase">
            ARCHITECT / JUNIOR WEB &amp; GAME DEVELOPER
          </span>
          <span className="text-[10px] font-mono text-slate-500 pl-1 border-l border-cyan-500/30">
            SOL-3
          </span>
        </div>
      </div>
    </div>
  );
}

export default DisintegratingTitle;
