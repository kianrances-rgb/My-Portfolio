import React, { useEffect, useRef, useState } from 'react';
import { useCosmicAudio } from '../../hooks/useCosmicAudio';

/**
 * DisintegratingTitle Component
 * Renders "KIAN RANCES CAGADAS" in the lower middle of Page 1 (#intro).
 * 
 * 30-Second Gravitational Singularity Lifecycle:
 * 1. 0.0s - 27.8s (Progressive Disintegration & Siphoning):
 *    - Letters progressively disintegrate from top to bottom over 28 seconds.
 *    - The erosion waterline descends across each glyph stroke.
 *    - Soft powdery stardust grains peel directly off the active crumbling erosion front.
 *    - Particles stream continuously along relativistic gravitational streamlines
 *      directly into the black hole singularity core.
 * 2. 27.8s - 28.6s (Singularity Ingestion):
 *    - Letters are 100% swallowed into the black hole (0% visible).
 *    - Remaining in-flight stardust particles cross the event horizon.
 * 3. 28.6s (Hawking Radiation Flash):
 *    - Singularity triggers a high-energy Hawking radiation burst flash on window.
 * 4. 28.8s - 30.0s (Quantum Re-materialization & Respawn):
 *    - Just like the astronaut companion:
 *      - Expanding quantum aperture warp portal ring blooms across the title.
 *      - Celestial harmonic chime plays via useCosmicAudio.
 *      - High-energy cyan-white brightness bloom re-materializes all letters back to solid pure white.
 *      - Quantum stardust sparkles burst across the glyph coordinates.
 * 5. 30.0s:
 *    - Cycle seamlessly resets to 0.0s for continuous, silky-smooth looping.
 */
export function DisintegratingTitle() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isRespawning, setIsRespawning] = useState(false);

  const { playChime } = useCosmicAudio();
  const playChimeRef = useRef(playChime);
  useEffect(() => {
    playChimeRef.current = playChime;
  }, [playChime]);

  const hawkingFiredRef = useRef(false);
  const chimeFiredRef = useRef(false);
  const respawnBurstFiredRef = useRef(false);

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
    const MAX_PARTICLES = 750;

    // Cache of glyph stroke sample points for every letter on screen
    let cachedLetterStrokes = [];

    // Helper: sample exact non-transparent pixel coordinates across the full glyph height
    const sampleLetterStrokes = () => {
      const letterNodes = container.querySelectorAll('.dust-letter-wrap');
      if (!letterNodes || letterNodes.length === 0) return;

      const heroSection = canvas.closest('#intro') || document.getElementById('intro') || document.body;
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

          // Sample pixels across full glyph height (y: 0 -> charH)
          for (let y = 1; y < charH; y += 2) {
            for (let x = 1; x < charW; x += 2) {
              const alpha = imgData[(y * charW + x) * 4 + 3];
              if (alpha > 80) {
                strokePoints.push({
                  x,
                  y,
                  normY: y / charH, // Normalized vertical position (0.0 top -> 1.0 bottom)
                  alpha: alpha / 255,
                });
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
          // Fallback if canvas memory or security boundary
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

    // Spawn a powdery stardust grain directly from the active erosion frontline
    const spawnStardustFromLetter = (canvasRect, erodeProgress) => {
      if (particles.length >= MAX_PARTICLES) return;
      if (erodeProgress >= 0.99) return; // Fully swallowed, stop spawning new letter dust

      let startX = 0;
      let startY = 0;

      if (cachedLetterStrokes.length > 0) {
        // Pick a random letter
        const letterData = cachedLetterStrokes[Math.floor(Math.random() * cachedLetterStrokes.length)];

        // Filter points clustered right around the active descending erosion frontline
        const minNormY = Math.max(0, erodeProgress - 0.16);
        const maxNormY = Math.min(1.0, erodeProgress + 0.10);
        const activePoints = letterData.points.filter(
          (pt) => pt.normY >= minNormY && pt.normY <= maxNormY
        );

        const ptPool = activePoints.length > 0 ? activePoints : letterData.points;
        const pt = ptPool[Math.floor(Math.random() * ptPool.length)];

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
        startY = (nodeRect.top - canvasRect.top) + (erodeProgress * nodeRect.height);
      }

      // Gentle liftoff velocity (soft rising dust)
      const liftVx = (Math.random() - 0.5) * 12;
      const liftVy = -20 - Math.random() * 24;

      particles.push({
        x: startX,
        y: startY,
        vx: liftVx,
        vy: liftVy,
        // Soft powdery grain radius (0.75px to 1.8px)
        size: 0.75 + Math.random() * 1.15,
        // Initial visibility: 100% visible on the letter stroke itself
        alpha: 0.88 + Math.random() * 0.12,
        life: 0,
        maxLife: 3.5 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        swirlFactor: 0.8 + Math.random() * 0.45,
        isRespawnSparkle: false,
      });
    };

    // Burst of quantum re-materialization sparkles when letters respawn
    const spawnRespawnBurst = (canvasRect) => {
      if (cachedLetterStrokes.length === 0) return;
      for (let i = 0; i < 80; i++) {
        const letterData = cachedLetterStrokes[Math.floor(Math.random() * cachedLetterStrokes.length)];
        const pt = letterData.points[Math.floor(Math.random() * letterData.points.length)];
        const nodeRect = letterData.element.getBoundingClientRect();
        const startX = (nodeRect.left - canvasRect.left) + pt.x;
        const startY = (nodeRect.top - canvasRect.top) + pt.y;

        const angle = Math.random() * Math.PI * 2;
        const speed = 20 + Math.random() * 60;

        particles.push({
          x: startX + (Math.random() - 0.5) * 16,
          y: startY + (Math.random() - 0.5) * 16,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.1 + Math.random() * 1.5,
          alpha: 1.0,
          life: 0,
          maxLife: 0.85 + Math.random() * 0.45,
          phase: Math.random() * Math.PI * 2,
          swirlFactor: 0.2,
          isRespawnSparkle: true,
        });
      }
    };

    let lastTime = performance.now();
    let lastTelemetryTime = 0;

    // 30-Second Gravitational Singularity Lifecycle Parameters
    const CYCLE_MS = 30000;         // 30.0s total cycle
    const INGESTION_MS = 27800;     // 27.8s progressive erosion
    const HAWKING_MS = 28600;       // 28.6s event horizon flash
    const RESPAWN_MS = 28800;       // 28.8s quantum re-materialization

    // 60FPS Silky-Smooth Gravitational Streamline Loop
    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.08);
      lastTime = time;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const canvasRect = canvas.getBoundingClientRect();

      // =====================================================================
      // 30-SECOND DISINTEGRATION & RESPAWN LIFECYCLE CONTROLLER
      // =====================================================================
      const cycleElapsed = time % CYCLE_MS;

      // 1. Reset cycle state at loop turnover
      if (cycleElapsed < 600) {
        if (hawkingFiredRef.current || chimeFiredRef.current || respawnBurstFiredRef.current) {
          hawkingFiredRef.current = false;
          chimeFiredRef.current = false;
          respawnBurstFiredRef.current = false;
          setIsRespawning(false);
        }
      }

      // Center of the singularity (black hole center coordinates)
      const bhMetrics = window.BlackHoleEngine?.center;
      const bhX = bhMetrics?.x ? (bhMetrics.x - canvasRect.left) : width / 2;
      const bhY = bhMetrics?.y ? (bhMetrics.y - canvasRect.top) : height / 2;

      // Phase 1: Progressive Disintegration & Siphoning (0.0s - 27.8s)
      if (cycleElapsed < INGESTION_MS) {
        const progress = cycleElapsed / INGESTION_MS; // 0.0 to 1.0
        const erodePct = progress * 100;

        container.style.setProperty('--erode-pct', `${erodePct.toFixed(2)}%`);
        container.style.setProperty('--letter-opacity', '1');

        // Dynamic particle spawn rate ramps up as gravitational pull builds
        const spawnCount = Math.floor(5 + progress * 7);
        for (let i = 0; i < spawnCount; i++) {
          spawnStardustFromLetter(canvasRect, progress);
        }

        // Periodic telemetry HUD broadcast
        if (time - lastTelemetryTime > 250) {
          lastTelemetryTime = time;
          const remainingSec = Math.max(1, Math.ceil((INGESTION_MS - cycleElapsed) / 1000));
          window.dispatchEvent(
            new CustomEvent('cosmic-telemetry-update', {
              detail: {
                shearRatio: Math.min(1.0, progress * 0.88),
                distanceText: `${remainingSec}s TO SINGULARITY`,
                statusText: 'MASS DISINTEGRATION // SIPHONING',
              },
            })
          );
        }
      }
      // Phase 2: Fully Swallowed into Singularity (27.8s - 28.8s)
      else if (cycleElapsed < RESPAWN_MS) {
        container.style.setProperty('--erode-pct', '100%');
        container.style.setProperty('--letter-opacity', '0');

        // Trigger Hawking Radiation Flash on Event Horizon (at 28.6s)
        if (cycleElapsed >= HAWKING_MS && !hawkingFiredRef.current) {
          hawkingFiredRef.current = true;
          window.dispatchEvent(new CustomEvent('trigger-hawking-flash'));

          window.dispatchEvent(
            new CustomEvent('cosmic-telemetry-update', {
              detail: {
                shearRatio: 1.0,
                distanceText: 'SINGULARITY CORE',
                statusText: 'SINGULARITY INGESTION COMPLETE',
              },
            })
          );
        }
      }
      // Phase 3: Quantum Re-materialization & Respawn (28.8s - 30.0s)
      else {
        container.style.setProperty('--erode-pct', '0%');
        container.style.setProperty('--letter-opacity', '1');

        if (!chimeFiredRef.current) {
          chimeFiredRef.current = true;
          setIsRespawning(true);

          if (typeof playChimeRef.current === 'function') {
            playChimeRef.current();
          }

          window.dispatchEvent(
            new CustomEvent('cosmic-telemetry-update', {
              detail: {
                shearRatio: 0.0,
                distanceText: 'EVENT HORIZON',
                statusText: 'QUANTUM RE-MATERIALIZATION COMPLETE',
              },
            })
          );
        }

        if (!respawnBurstFiredRef.current) {
          respawnBurstFiredRef.current = true;
          spawnRespawnBurst(canvasRect);
        }
      }

      // =====================================================================
      // 60FPS RELATIVISTIC GRAVITATIONAL STREAMLINE PARTICLE PHYSICS
      // =====================================================================
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += dt;

        // Vector to black hole singularity center
        const dx = bhX - p.x;
        const dy = bhY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Particle swallowed into event horizon core or expired
        if ((!p.isRespawnSparkle && dist <= 22) || p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        if (p.isRespawnSparkle) {
          // Re-materialization sparkle physics: high-drag expand & fade
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          p.vx *= 0.92;
          p.vy *= 0.92;

          const progress = p.life / p.maxLife;
          const sparkAlpha = Math.max(0, 1.0 - progress);

          ctx.fillStyle = `rgba(0, 255, 204, ${sparkAlpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1.0 - progress * 0.4), 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${(sparkAlpha * 0.6).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          continue;
        }

        // --- SILKY-SMOOTH GRAVITATIONAL STREAMLINE FLOW ---
        const ux = dx / dist;
        const uy = dy / dist;

        // Perpendicular clockwise accretion swirl vector
        const sx = -uy;
        const sy = ux;

        // Smooth speed profile: calm liftoff near letters (~42px/s) accelerating up to ~250px/s near core
        const distClamped = Math.max(0, Math.min(480, dist));
        const proximity = Math.pow(1.0 - distClamped / 480, 1.2);

        const smoothSpeed = 40 + proximity * 215;
        const smoothSwirl = proximity * 135 * p.swirlFactor;

        // Gentle organic gaseous drift
        const drift = Math.sin(p.y * 0.014 + p.phase + time * 0.0016) * (5 * (1.0 - proximity));

        const targetVx = ux * smoothSpeed + sx * smoothSwirl + drift;
        const targetVy = uy * smoothSpeed + sy * smoothSwirl;

        // Exponential velocity steering (lerp) guarantees liquid-smooth curvature with zero jerks
        const steerRate = 3.4;
        p.vx += (targetVx - p.vx) * Math.min(1.0, steerRate * dt);
        p.vy += (targetVy - p.vy) * Math.min(1.0, steerRate * dt);

        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Smooth fading alpha:
        // Full visibility at the letter stroke, stays bright white, smoothly dissolves into event horizon
        const pProg = p.life / p.maxLife;
        const fadeHorizon = dist < 65 ? dist / 65 : 1.0;
        const finalAlpha = Math.max(0, Math.min(1, p.alpha * fadeHorizon * (1.0 - pProg * 0.25)));

        // --- RENDER AS SOFT CIRCULAR STARDUST GRAIN ---
        ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Soft halo for volumetric stardust glow
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
          {/* Quantum Aperture Warp Portal Ring at Respawn Location - Just like the avatar! */}
          {isRespawning && (
            <span
              className="absolute -inset-4 sm:-inset-10 rounded-full border-2 border-cyan-400 animate-ping pointer-events-none opacity-90 shadow-[0_0_50px_rgba(0,255,204,0.95)]"
              aria-hidden="true"
            />
          )}

          {/* Main Pure White Disintegrating Name with per-letter base & dissolving fringe */}
          <h1
            className={`disintegrating-name font-['Orbitron'] font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] uppercase text-white select-none relative flex flex-wrap items-center justify-center leading-none transition-all duration-700 ${
              isRespawning
                ? 'scale-100 brightness-[240%] drop-shadow-[0_0_35px_rgba(0,255,204,0.95)]'
                : 'scale-100 brightness-100 drop-shadow-none'
            }`}
          >
            {WORDS.map((w, wIdx) => (
              <span key={w.key} className="inline-flex items-center whitespace-nowrap">
                {w.text.split('').map((char, cIdx) => (
                  <span
                    key={`${w.key}-${cIdx}`}
                    className="dust-letter-wrap inline-block relative text-white"
                  >
                    {/* Lower half: Crisp, pure solid white with dynamic descending erosion waterline */}
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
