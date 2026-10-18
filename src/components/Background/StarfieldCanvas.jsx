import React, { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas
 * Full-screen GPU-accelerated canvas background featuring:
 * - 350 volumetric stars across 3 depth parallax layers
 * - Twinkle dynamics & slow celestial drift
 * - Mouse-driven smooth lerp parallax
 * - Authentic Path-History Shooting Star Engine:
 *   • The meteoroid head flies forward and paints an authentic ionization trail across the sky
 *   • Trail points remain stationary in space where the meteor passed, fading and diffusing in place
 *   • Eliminates any rigid "moving PNG/stick" appearance completely
 *   • Tapered dual-pass glow: inner pure white core + outer cyan ionization wake
 *   • Microscopic ablation sparks shedding into the wake with atmospheric drag
 * - DevicePixelRatio Retina rendering
 * - Lifecycle pause on hidden tab
 */
export function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse parallax tracking with smooth lerp
    let mouseTargetX = 0;
    let mouseTargetY = 0;
    let mouseCurrentX = 0;
    let mouseCurrentY = 0;

    const onMouseMove = (e) => {
      mouseTargetX = e.clientX - width / 2;
      mouseTargetY = e.clientY - height / 2;
    };

    // Stars definition: ~350 stars across 3 layers
    const NUM_STARS = 350;
    let stars = [];

    const initStars = () => {
      stars = [];
      const colors = ['#ffffff', '#ffffff', '#aadcff', '#ffe0aa', '#e2d4f8'];

      for (let i = 0; i < NUM_STARS; i++) {
        let layer = 0;
        let size = 0.5;
        let speed = 0.03;
        let parallax = 0.008;
        let alpha = 0.3;

        if (i < 150) {
          layer = 0;
          size = Math.random() * 0.6 + 0.3;
          speed = Math.random() * 0.04 + 0.015;
          parallax = 0.008;
          alpha = Math.random() * 0.4 + 0.2;
        } else if (i < 270) {
          layer = 1;
          size = Math.random() * 0.8 + 0.8;
          speed = Math.random() * 0.06 + 0.04;
          parallax = 0.02;
          alpha = Math.random() * 0.4 + 0.4;
        } else {
          layer = 2;
          size = Math.random() * 1.1 + 1.4;
          speed = Math.random() * 0.12 + 0.08;
          parallax = 0.045;
          alpha = Math.random() * 0.35 + 0.65;
        }

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseSize: size,
          speed,
          layer,
          parallax,
          baseAlpha: alpha,
          alpha,
          twinkleRate: Math.random() * 0.025 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // =========================================================================
    // TRUE PATH-HISTORY SHOOTING STAR & METEOR ENGINE
    // =========================================================================
    let meteors = [];
    let nextMeteorTimer = 1.0; // Quick initial spawn, then strictly every 3 seconds

    const spawnMeteor = () => {
      // Natural diagonal trajectory (22° to 42° downward-right)
      const angle = (Math.PI * 0.18) + (Math.random() - 0.5) * 0.28;
      const speed = 2100 + Math.random() * 700; // Hypersonic 2100 - 2800 px/sec

      // Entry origin along top or upper-left
      let startX, startY;
      if (Math.random() > 0.4) {
        startX = Math.random() * (width * 0.85);
        startY = -30;
      } else {
        startX = -30;
        startY = Math.random() * (height * 0.45);
      }

      const burnDuration = 0.32 + Math.random() * 0.18; // 0.32s to 0.50s active flight flash
      const trailLife = 0.42; // Ionized trail stays stationary in sky and dissolves over 0.42s

      meteors.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        speed,
        angle,
        age: 0,
        burnDuration,
        trailLife,
        history: [], // [{x, y, time, brightness}]
        embers: [],
      });
    };

    // Resize canvas with DPR support
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      initStars();
    };

    handleResize();

    // Main render loop
    let lastTime = performance.now();

    const render = (now) => {
      if (document.hidden) {
        animId = null;
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.08);
      lastTime = now;

      // Mouse lerp interpolation
      mouseCurrentX += (mouseTargetX - mouseCurrentX) * 0.04;
      mouseCurrentY += (mouseTargetY - mouseCurrentY) * 0.04;

      // Set transform for High-DPI screens
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // 1. Render multi-layer starfield
      const timeInSec = now * 0.001;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Celestial slow vertical drift
        s.y -= s.speed;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Twinkle oscillation
        const twinkle = Math.sin(timeInSec * 4 + s.twinklePhase) * 0.25;
        const currentAlpha = Math.max(0.12, Math.min(1.0, s.baseAlpha + twinkle));

        // Parallax position offset
        let drawX = (s.x - mouseCurrentX * s.parallax) % width;
        if (drawX < 0) drawX += width;

        let drawY = (s.y - mouseCurrentY * s.parallax) % height;
        if (drawY < 0) drawY += height;

        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(drawX, drawY, s.baseSize, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for foreground brightest stars
        if (s.layer === 2 && currentAlpha > 0.8) {
          ctx.globalAlpha = currentAlpha * 0.3;
          ctx.beginPath();
          ctx.arc(drawX, drawY, s.baseSize * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Spawn shooting stars consistently every 3 seconds
      nextMeteorTimer -= dt;
      if (nextMeteorTimer <= 0) {
        spawnMeteor();
        nextMeteorTimer = 3.0; // Strictly every 3 seconds as requested
      }

      // 3. Render and update meteors with True Path-History Particle Engine
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.age += dt;

        const isBurning = m.age <= m.burnDuration;

        if (isBurning) {
          // Advance the meteoroid head forward
          m.x += m.vx * dt;
          m.y += m.vy * dt;

          // Head brightness light curve (rapid ignition ramp and burnout taper)
          let headBrightness = 1.0;
          if (m.age < 0.08) {
            headBrightness = m.age / 0.08;
          } else if (m.age > m.burnDuration - 0.12) {
            headBrightness = Math.max(0, (m.burnDuration - m.age) / 0.12);
          }

          // Deposit a point in the trail anchored at this exact sky coordinate
          m.history.push({
            x: m.x,
            y: m.y,
            time: now,
            brightness: headBrightness,
          });

          // Shed micro-embers along the path
          if (Math.random() < 0.35) {
            m.embers.push({
              x: m.x + (Math.random() - 0.5) * 6,
              y: m.y + (Math.random() - 0.5) * 6,
              vx: m.vx * 0.12 + (Math.random() - 0.5) * 40,
              vy: m.vy * 0.12 + (Math.random() - 0.5) * 40,
              life: 0.16 + Math.random() * 0.22,
              maxLife: 0.38,
              size: 0.75 + Math.random() * 1.2,
            });
          }
        }

        // Prune expired trail points
        while (m.history.length > 0 && (now - m.history[0].time) / 1000 > m.trailLife) {
          m.history.shift();
        }

        // If meteor burned out and all trail points and embers have dissolved
        if (!isBurning && m.history.length === 0 && m.embers.length === 0) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.save();

        // --- RENDER TRAIL AS A CONTINUOUS IONIZATION BEAM ANCHORED IN SPACE ---
        if (m.history.length > 1) {
          const newest = m.history[m.history.length - 1];
          const oldest = m.history[0];

          const trailAge = (now - newest.time) / 1000;
          const fadeMultiplier = Math.max(0, 1.0 - trailAge / m.trailLife);

          if (fadeMultiplier > 0.01) {
            const gradPlasma = ctx.createLinearGradient(oldest.x, oldest.y, newest.x, newest.y);
            gradPlasma.addColorStop(0, 'rgba(0, 255, 204, 0)');
            gradPlasma.addColorStop(0.35, `rgba(93, 230, 255, ${(0.18 * fadeMultiplier).toFixed(3)})`);
            gradPlasma.addColorStop(0.75, `rgba(140, 240, 255, ${(0.55 * fadeMultiplier).toFixed(3)})`);
            gradPlasma.addColorStop(1, `rgba(255, 255, 255, ${(0.90 * fadeMultiplier).toFixed(3)})`);

            const gradCore = ctx.createLinearGradient(oldest.x, oldest.y, newest.x, newest.y);
            gradCore.addColorStop(0, 'rgba(255, 255, 255, 0)');
            gradCore.addColorStop(0.4, `rgba(255, 255, 255, ${(0.28 * fadeMultiplier).toFixed(3)})`);
            gradCore.addColorStop(0.85, `rgba(255, 255, 255, ${(0.88 * fadeMultiplier).toFixed(3)})`);
            gradCore.addColorStop(1, `rgba(255, 255, 255, ${(1.0 * fadeMultiplier).toFixed(3)})`);

            // Pass 1: Outer glowing plasma sheath
            ctx.strokeStyle = gradPlasma;
            ctx.lineWidth = 4.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(m.history[0].x, m.history[0].y);
            for (let j = 1; j < m.history.length; j++) {
              ctx.lineTo(m.history[j].x, m.history[j].y);
            }
            ctx.stroke();

            // Pass 2: Inner incandescent white core
            ctx.strokeStyle = gradCore;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(m.history[0].x, m.history[0].y);
            for (let j = 1; j < m.history.length; j++) {
              ctx.lineTo(m.history[j].x, m.history[j].y);
            }
            ctx.stroke();
          }
        }

        // --- RENDER BLAZING HYPERSONIC BOW-SHOCK HEAD (While actively burning) ---
        if (isBurning) {
          let headBrightness = 1.0;
          if (m.age < 0.08) headBrightness = m.age / 0.08;
          else if (m.age > m.burnDuration - 0.12) headBrightness = Math.max(0, (m.burnDuration - m.age) / 0.12);

          ctx.save();
          ctx.translate(m.x, m.y);
          ctx.rotate(m.angle);

          // Hypersonic outer bow-shock glow
          ctx.fillStyle = `rgba(93, 230, 255, ${(headBrightness * 0.45).toFixed(3)})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, 16, 5, 0, 0, Math.PI * 2);
          ctx.fill();

          // Intense incandescence core (streamlined tear-drop)
          ctx.fillStyle = `rgba(255, 255, 255, ${(headBrightness * 0.95).toFixed(3)})`;
          ctx.beginPath();
          ctx.ellipse(2, 0, 10, 2.2, 0, 0, Math.PI * 2);
          ctx.fill();

          // Blinding tip highlight
          ctx.fillStyle = `rgba(255, 255, 255, ${headBrightness.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(8, 0, 1.8, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        // --- RENDER LINGERING ABLATION EMBERS ---
        for (let k = m.embers.length - 1; k >= 0; k--) {
          const emb = m.embers[k];
          emb.x += emb.vx * dt;
          emb.y += emb.vy * dt;
          emb.vx *= 0.88;
          emb.vy *= 0.88;
          emb.life -= dt;
          if (emb.life <= 0) {
            m.embers.splice(k, 1);
            continue;
          }
          const embAlpha = emb.life / emb.maxLife;
          ctx.fillStyle = `rgba(255, 255, 255, ${(embAlpha * 0.85).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(emb.x, emb.y, emb.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      } else if (!animId) {
        lastTime = performance.now();
        animId = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-starfield"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}

export default StarfieldCanvas;
