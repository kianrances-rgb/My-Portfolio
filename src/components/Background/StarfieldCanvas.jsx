import React, { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas
 * Full-screen GPU-accelerated canvas background featuring:
 * - 350 volumetric stars across 3 depth parallax layers
 * - Twinkle dynamics & slow celestial drift
 * - Mouse-driven smooth lerp parallax
 * - Silky-Smooth Shooting Star / Meteor Engine:
 *   • Continuous lifecycle: Ignition -> Smooth Cruise -> Tail Contraction -> Seamless Dissolve
 *   • Zero sudden popping or hard disappearance: tail smoothly contracts into head upon burnout
 *   • Multi-pass tapered glowing plasma aura with pure white incandescent core
 *   • Natural cadence (every 4 to 8 seconds) with varied diagonal radiants
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
    // SILKY-SMOOTH SHOOTING STAR & METEOR ENGINE
    // =========================================================================
    let meteors = [];
    let nextMeteorTimer = 2.0 + Math.random() * 3.0; // Spawns every 3.5 - 7 seconds

    const spawnMeteor = () => {
      // Natural diagonal trajectory (28° to 48° downward-right)
      const angle = (Math.PI * 0.21) + (Math.random() - 0.5) * 0.3;
      const speed = 750 + Math.random() * 350; // Smooth 750 - 1100 px/sec (visible & majestic)
      const isFireball = Math.random() < 0.25;

      // Realistic entry origin along top or upper-left
      let startX, startY;
      if (Math.random() > 0.45) {
        startX = Math.random() * (width * 0.8);
        startY = -20;
      } else {
        startX = -20;
        startY = Math.random() * (height * 0.4);
      }

      const burnDuration = isFireball ? (0.95 + Math.random() * 0.25) : (0.75 + Math.random() * 0.25);
      const fadeDuration = 0.32; // Time for tail to contract and dissolve after head burns out

      meteors.push({
        startX,
        startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        angle,
        speed,
        age: 0,
        burnDuration,
        fadeDuration,
        totalDuration: burnDuration + fadeDuration,
        maxTrailLength: isFireball ? (240 + Math.random() * 60) : (170 + Math.random() * 50),
        thickness: isFireball ? 2.4 : 1.6,
        isFireball,
        color: isFireball ? '#ffdd88' : '#5de6ff',
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
        nextMeteorTimer = 4.0 + Math.random() * 4.5; // Next star in 4 - 8.5 seconds
      }

      // 3. Render and update meteors with continuous smooth animation lifecycle
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.age += dt;

        if (m.age >= m.totalDuration) {
          meteors.splice(i, 1);
          continue;
        }

        // --- CALCULATE HEAD POSITION ---
        let headX, headY;
        const isBurning = m.age <= m.burnDuration;

        if (isBurning) {
          headX = m.startX + m.vx * m.age;
          headY = m.startY + m.vy * m.age;
        } else {
          // Head reached burnout position and extinguished
          headX = m.startX + m.vx * m.burnDuration;
          headY = m.startY + m.vy * m.burnDuration;
        }

        // --- CALCULATE DYNAMIC TRAIL LENGTH (Grows on birth, contracts on death) ---
        let currentLength = m.maxTrailLength;
        const birthDuration = 0.22; // Seconds for trail to fully unfurl

        if (m.age < birthDuration) {
          // Phase 1: Smoothly unfurl from 0 length
          currentLength = m.maxTrailLength * (m.age / birthDuration);
        } else if (!isBurning) {
          // Phase 3: Head has burned out; tail contracts smoothly toward head
          const fadeProgress = (m.age - m.burnDuration) / m.fadeDuration;
          currentLength = m.maxTrailLength * Math.max(0, 1.0 - fadeProgress);
        }

        // Tail coordinate trailing behind head
        const tailX = headX - Math.cos(m.angle) * currentLength;
        const tailY = headY - Math.sin(m.angle) * currentLength;

        // --- CALCULATE OPACITY ---
        let alpha = 1.0;
        if (m.age < 0.14) {
          // Fade in gently on ignition
          alpha = m.age / 0.14;
        } else if (!isBurning) {
          // Fade out smoothly to 0 on burnout
          const fadeProgress = (m.age - m.burnDuration) / m.fadeDuration;
          alpha = Math.max(0, 1.0 - fadeProgress);
        }

        if (currentLength < 2 || alpha < 0.01) {
          continue;
        }

        ctx.save();

        // --- PASS 1: Outer Glowing Atmospheric Plasma Aura ---
        const outerGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        outerGrad.addColorStop(0.0, 'rgba(0, 0, 0, 0)');
        outerGrad.addColorStop(0.4, `${m.color === '#ffdd88' ? 'rgba(255, 180, 50, ' : 'rgba(93, 230, 255, '}${(alpha * 0.25).toFixed(3)})`);
        outerGrad.addColorStop(0.85, `${m.color === '#ffdd88' ? 'rgba(255, 220, 120, ' : 'rgba(180, 240, 255, '}${(alpha * 0.65).toFixed(3)})`);
        outerGrad.addColorStop(1.0, `rgba(255, 255, 255, ${(alpha * 0.95).toFixed(3)})`);

        ctx.strokeStyle = outerGrad;
        ctx.lineWidth = m.thickness * 2.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // --- PASS 2: Inner Incandescent Pure White Core Ray ---
        const coreGrad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        coreGrad.addColorStop(0.0, 'rgba(255, 255, 255, 0)');
        coreGrad.addColorStop(0.5, `rgba(255, 255, 255, ${(alpha * 0.4).toFixed(3)})`);
        coreGrad.addColorStop(1.0, `rgba(255, 255, 255, ${(alpha * 0.98).toFixed(3)})`);

        ctx.strokeStyle = coreGrad;
        ctx.lineWidth = m.thickness * 0.85;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.stroke();

        // --- PASS 3: Brilliant Star Head (Active while head is burning) ---
        if (isBurning) {
          // Sharp white core
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(headX, headY, m.thickness * 1.35, 0, Math.PI * 2);
          ctx.fill();

          // Soft radiant bloom halo
          ctx.fillStyle = `${m.color === '#ffdd88' ? 'rgba(255, 200, 100, ' : 'rgba(93, 230, 255, '}${(alpha * 0.38).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(headX, headY, m.thickness * 3.2, 0, Math.PI * 2);
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
