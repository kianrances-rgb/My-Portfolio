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
    let nextMeteorTimer = 2.0 + Math.random() * 2.5;

    const spawnMeteor = () => {
      // Natural diagonal trajectory (24° to 46° downward-right)
      const angle = (Math.PI * 0.20) + (Math.random() - 0.5) * 0.32;
      const speed = 850 + Math.random() * 350; // Smooth 850 - 1200 px/sec

      // Entry origin along top or upper-left
      let startX, startY;
      if (Math.random() > 0.45) {
        startX = Math.random() * (width * 0.85);
        startY = -30;
      } else {
        startX = -30;
        startY = Math.random() * (height * 0.45);
      }

      const burnDuration = 0.75 + Math.random() * 0.35; // 0.75s to 1.1s active flight
      const trailLife = 0.38; // Trail lingers stationary for 0.38s in space

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

      // 2. Spawn shooting stars on natural astronomical cadence
      nextMeteorTimer -= dt;
      if (nextMeteorTimer <= 0) {
        if (meteors.length < 2) {
          spawnMeteor();
        }
        nextMeteorTimer = 3.5 + Math.random() * 4.5; // Next star in 3.5 - 8 seconds
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

          // Head brightness light curve (gentle ignition ramp and burnout taper)
          let headBrightness = 1.0;
          if (m.age < 0.12) {
            headBrightness = m.age / 0.12;
          } else if (m.age > m.burnDuration - 0.18) {
            headBrightness = Math.max(0, (m.burnDuration - m.age) / 0.18);
          }

          // Deposit a point in the trail anchored at this exact sky coordinate
          m.history.push({
            x: m.x,
            y: m.y,
            time: now,
            brightness: headBrightness,
          });

          // Shed occasional micro-embers along the path
          if (Math.random() < 0.28) {
            m.embers.push({
              x: m.x + (Math.random() - 0.5) * 4,
              y: m.y + (Math.random() - 0.5) * 4,
              vx: m.vx * 0.12 + (Math.random() - 0.5) * 35,
              vy: m.vy * 0.12 + (Math.random() - 0.5) * 35,
              life: 0.18 + Math.random() * 0.2,
              maxLife: 0.38,
              size: 0.75 + Math.random() * 1.1,
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

        // --- RENDER TRAIL AS A REAL PATH PAINTED ACROSS THE SKY ---
        if (m.history.length > 1) {
          // Pass 1: Outer glowing plasma sheath
          for (let j = 0; j < m.history.length - 1; j++) {
            const p1 = m.history[j];
            const p2 = m.history[j + 1];

            const ageSec = (now - p2.time) / 1000;
            const progress = Math.max(0, Math.min(1, ageSec / m.trailLife)); // 0 = newest, 1 = oldest
            const alpha = Math.pow(1.0 - progress, 1.4) * p2.brightness;

            if (alpha <= 0.01) continue;

            const width = 0.6 + (1.0 - progress) * 2.8;

            ctx.strokeStyle = `rgba(93, 230, 255, ${(alpha * 0.28).toFixed(3)})`;
            ctx.lineWidth = width * 2.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Pass 2: Inner incandescent white core
            ctx.strokeStyle = `rgba(255, 255, 255, ${(alpha * 0.95).toFixed(3)})`;
            ctx.lineWidth = width * 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // --- RENDER BLAZING METEOROID HEAD (While actively burning) ---
        if (isBurning) {
          let headBrightness = 1.0;
          if (m.age < 0.12) headBrightness = m.age / 0.12;
          else if (m.age > m.burnDuration - 0.18) headBrightness = Math.max(0, (m.burnDuration - m.age) / 0.18);

          // Intense pure white core
          ctx.fillStyle = `rgba(255, 255, 255, ${headBrightness.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 2.2, 0, Math.PI * 2);
          ctx.fill();

          // Shockwave bloom halo
          ctx.fillStyle = `rgba(93, 230, 255, ${(headBrightness * 0.45).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, 6.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // --- RENDER LINGERING ABLATION EMBERS ---
        for (let k = m.embers.length - 1; k >= 0; k--) {
          const emb = m.embers[k];
          emb.x += emb.vx * dt;
          emb.y += emb.vy * dt;
          emb.vx *= 0.92;
          emb.vy *= 0.92;
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
