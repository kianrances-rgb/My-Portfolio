import React, { useEffect, useRef } from 'react';

/**
 * DisintegratingTitle Component
 * Renders "KIAN RANCES CAGADAS" in the lower middle of Page 1 (#intro).
 * 
 * Key Features:
 * 1. Letter-level disintegration:
 *    - Lower 50% is solid pure white (#ffffff), crisp and 100% readable.
 *    - Upper 50% is physically dissolving with an eroding crumbling stardust texture.
 * 2. Exact stroke-level particle spawning:
 *    - Extracts true non-empty glyph stroke coordinates for each character on screen.
 *    - Dust particles spawn DIRECTLY on the letter strokes with full visibility (alpha ~ 0.95),
 *      so the user visibly sees white stardust crumbs peeling off from each letter itself.
 * 3. Soft powdery stardust (NOT sparks or laser streaks):
 *    - Rendered as soft circular stardust grains with feathered edges and volumetric glow.
 * 4. Silky-smooth gravitational streamline flow:
 *    - Accelerates and curves smoothly from the letters upward into the exact physical center
 *      of the black hole singularity with relativistic accretion swirl and zero velocity jerks.
 * 5. Subtle sci-fi status tag: "ARCHITECT / JUNIOR WEB & GAME DEVELOPER".
 */
export function DisintegratingTitle() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const WORDS = [
    { text: 'KIAN', key: 'w1' },
    { text: 'RANCES', key: 'w2' },
    { text: 'CAGADAS', key: 'w3' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Dust particle collection
    const particles = [];
    const MAX_PARTICLES = 680;

    // Cache of glyph stroke sample points for every letter on screen
    let cachedLetterStrokes = [];

    // Helper: sample exact non-transparent pixel coordinates from letter strokes
    const sampleLetterStrokes = () => {
      const letterNodes = container.querySelectorAll('.dust-letter-wrap');
      if (!letterNodes || letterNodes.length === 0) return;

      const heroSection = canvas.closest('#intro') || document.getElementById('intro') || document.body;
      const canvasRect = heroSection.getBoundingClientRect();

      const newCache = [];

      letterNodes.forEach((node) => {
        const charBase = node.querySelector('.dust-letter-base');
        const char = charBase ? charBase.textContent.trim() : '';
        if (!char) return;

        const rect = node.getBoundingClientRect();
        const charW = Math.max(12, Math.floor(rect.width));
        const charH = Math.max(16, Math.floor(rect.height));

        // Offscreen sampling canvas
        const offCanvas = document.createElement('canvas');
        offCanvas.width = charW;
        offCanvas.height = charH;
        const offCtx = offCanvas.getContext('2d', { willReadFrequently: true });
        if (!offCtx) return;

        const computed = window.getComputedStyle(charBase);
        const font = computed.font || `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;

        offCtx.font = font;
        offCtx.fillStyle = '#ffffff';
        offCtx.textBaseline = 'top';
        offCtx.textAlign = 'left';
        offCtx.fillText(char, 0, 0);

        try {
          const imgData = offCtx.getImageData(0, 0, charW, charH).data;
          const strokePoints = [];

          // Sample pixels strictly in the upper 55% of the glyph (the disintegration zone)
          const maxY = Math.floor(charH * 0.55);
          for (let y = 1; y < maxY; y += 2) {
            for (let x = 1; x < charW; x += 2) {
              const alpha = imgData[(y * charW + x) * 4 + 3];
              // Non-transparent stroke pixel
              if (alpha > 80) {
                strokePoints.push({ x, y, alpha: alpha / 255 });
              }
            }
          }

          if (strokePoints.length > 0) {
            newCache.push({
              char,
              element: node,
              points: strokePoints,
              charW,
              charH,
            });
          }
        } catch {
          // Fallback if canvas security or memory issue
        }
      });

      cachedLetterStrokes = newCache;
    };

    const resize = () => {
      const heroSection = canvas.closest('#intro') || document.getElementById('intro') || document.body;
      const rect = heroSection.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Resample letter strokes to match new geometry
      sampleLetterStrokes();
    };

    resize();
    window.addEventListener('resize', resize);

    // Wait for fonts to be fully loaded to ensure pixel-perfect stroke sampling
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        sampleLetterStrokes();
      });
    }

    // Spawn a powdery stardust grain directly from an actual letter stroke
    const spawnStardustFromLetter = (canvasRect) => {
      if (particles.length >= MAX_PARTICLES) return;

      let startX = 0;
      let startY = 0;

      if (cachedLetterStrokes.length > 0) {
        // Pick a random letter
        const letterData = cachedLetterStrokes[Math.floor(Math.random() * cachedLetterStrokes.length)];
        const pt = letterData.points[Math.floor(Math.random() * letterData.points.length)];

        // Live screen position of this letter
        const nodeRect = letterData.element.getBoundingClientRect();
        startX = (nodeRect.left - canvasRect.left) + pt.x;
        startY = (nodeRect.top - canvasRect.top) + pt.y;
      } else {
        // Fallback before stroke sampling finishes
        const letterNodes = container.querySelectorAll('.dust-letter-wrap');
        if (letterNodes.length === 0) return;
        const node = letterNodes[Math.floor(Math.random() * letterNodes.length)];
        const nodeRect = node.getBoundingClientRect();
        startX = (nodeRect.left - canvasRect.left) + Math.random() * nodeRect.width;
        startY = (nodeRect.top - canvasRect.top) + Math.random() * (nodeRect.height * 0.5);
      }

      // Gentle liftoff velocity (soft rising dust)
      const liftVx = (Math.random() - 0.5) * 10;
      const liftVy = -18 - Math.random() * 22;

      particles.push({
        x: startX,
        y: startY,
        vx: liftVx,
        vy: liftVy,
        // Soft powdery grain radius (0.75px to 1.8px)
        size: 0.75 + Math.random() * 1.05,
        // Initial visibility: 100% visible on the letter stroke itself!
        alpha: 0.85 + Math.random() * 0.15,
        life: 0,
        maxLife: 3.5 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        swirlFactor: 0.8 + Math.random() * 0.45,
      });
    };

    let lastTime = performance.now();

    // 60FPS Silky-Smooth Gravitational Streamline Loop
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const canvasRect = canvas.getBoundingClientRect();

      // Spawn fresh powdery dust grains directly from letter strokes
      for (let i = 0; i < 7; i++) {
        spawnStardustFromLetter(canvasRect);
      }

      // Center of the singularity (black hole is centered in #intro)
      const bhX = width / 2;
      const bhY = height / 2;

      // Update and render each powdery stardust grain
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;

        // Vector to black hole singularity center
        const dx = bhX - p.x;
        const dy = bhY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Particle swallowed into event horizon core or expired
        if (dist <= 20 || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // --- SILKY-SMOOTH GRAVITATIONAL STREAMLINE FLOW ---
        const ux = dx / dist;
        const uy = dy / dist;

        // Perpendicular clockwise accretion swirl vector
        const sx = -uy;
        const sy = ux;

        // Smooth speed profile: calm liftoff near letters (~40px/s) accelerating up to ~240px/s near core
        const distClamped = Math.max(0, Math.min(480, dist));
        const proximity = Math.pow(1.0 - distClamped / 480, 1.2);

        const smoothSpeed = 38 + proximity * 210;
        const smoothSwirl = proximity * 130 * p.swirlFactor;

        // Gentle organic gaseous drift
        const drift = Math.sin(p.y * 0.014 + p.phase + time * 0.0016) * (5 * (1.0 - proximity));

        const targetVx = ux * smoothSpeed + sx * smoothSwirl + drift;
        const targetVy = uy * smoothSpeed + sy * smoothSwirl;

        // Exponential velocity steering (lerp) guarantees liquid-smooth curvature with zero jerks
        const steerRate = 3.3;
        p.vx += (targetVx - p.vx) * Math.min(1.0, steerRate * dt);
        p.vy += (targetVy - p.vy) * Math.min(1.0, steerRate * dt);

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Smooth fading alpha:
        // Full visibility at the letter stroke, stays bright white, smoothly dissolves into event horizon
        const progress = p.life / p.maxLife;
        const fadeHorizon = dist < 65 ? dist / 65 : 1.0;
        const finalAlpha = Math.max(0, Math.min(1, p.alpha * fadeHorizon * (1.0 - progress * 0.25)));

        // --- RENDER AS SOFT CIRCULAR STARDUST GRAIN (NOT SPARKS) ---
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle soft halo for volumetric stardust glow
        if (p.size > 1.25) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(finalAlpha * 0.22).toFixed(3)})`;
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
      {/* 1. Full-section matter siphon canvas covering all of #intro */}
      <canvas
        ref={canvasRef}
        className="singularity-dust-canvas absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* 2. Lower Title Container placed in the lower middle of #intro */}
      <div
        ref={containerRef}
        className="disintegrating-title-container relative z-20 w-full max-w-6xl flex flex-col items-center justify-center text-center select-none pointer-events-auto mt-auto pb-12 sm:pb-16 px-4"
        aria-label="Kian Rances Cagadas - Software Developer, Systems Architect & Cosmic Explorer"
      >
        <div className="relative flex flex-col items-center w-full max-w-5xl">
          {/* Main Pure White Disintegrating Name with per-letter base & dissolving fringe */}
          <h1 className="disintegrating-name font-['Orbitron'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] uppercase text-white select-none relative flex flex-wrap items-center justify-center leading-none">
            {WORDS.map((w, wIdx) => (
              <span key={w.key} className="inline-flex items-center whitespace-nowrap">
                {w.text.split('').map((char, cIdx) => (
                  <span
                    key={`${w.key}-${cIdx}`}
                    className="dust-letter-wrap inline-block relative text-white"
                  >
                    {/* Lower half: Crisp, pure solid white, 100% readable */}
                    <span className="dust-letter-base inline-block">
                      {char}
                    </span>
                    {/* Upper half: Dissolving, crumbling stardust erosion edge */}
                    <span
                      className="dust-letter-dissolve inline-block"
                      aria-hidden="true"
                    >
                      {char}
                    </span>
                  </span>
                ))}
                {wIdx < WORDS.length - 1 && (
                  <span className="inline-block w-3 sm:w-5 md:w-7" aria-hidden="true">&nbsp;</span>
                )}
              </span>
            ))}
          </h1>

          {/* Minimalist Editorial Subtitle */}
          <p className="font-['Outfit'] text-xs sm:text-sm md:text-base font-medium tracking-[0.22em] text-[#00ffcc] uppercase mt-5 mb-8 max-w-2xl mx-auto">
            Software Developer, Systems Architect &amp; Cosmic Explorer
          </p>

          {/* Dual High-Contrast Button-in-Button CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#galaxy"
              className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#00ffcc] text-[#030308] font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,204,0.5)] active:scale-[0.98]"
            >
              <span>Explore Education</span>
              <span className="w-8 h-8 rounded-full bg-black/15 flex items-center justify-center text-[#030308] font-bold group-hover:translate-y-0.5 transition-transform duration-300">
                ↓
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white/[0.06] border border-white/15 text-white font-['Space_Grotesk'] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:border-white/30 backdrop-blur-md active:scale-[0.98]"
            >
              <span>Initiate Contact</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisintegratingTitle;
