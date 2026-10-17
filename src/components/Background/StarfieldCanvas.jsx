import React, { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas
 * Full-screen GPU-accelerated canvas background featuring:
 * - 350 volumetric stars across 3 depth parallax layers
 * - Twinkle dynamics & slow celestial drift
 * - Mouse-driven smooth lerp parallax
 * - Physically based hypersonic meteor & shooting star engine:
 *   • Hypersonic entry velocity (1600 - 3200 px/sec)
 *   • Aerodynamic light curve (ignition, peak incandescence, terminal ablation flare)
 *   • Dynamic history-based ionization trail (train) that grows and dissipates naturally
 *   • Dual-pass rendering: outer atmospheric plasma column + incandescent white-hot core
 *   • Atmospheric drag micro-ember sparks shedding along the flight path
 *   • Rare brilliant fireballs (bolides) with terminal fragmentation
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
    // PHYSICALLY BASED SHOOTING STAR & METEOR ENGINE
    // =========================================================================
    let meteors = [];
    let nextMeteorDelay = 2.5 + Math.random() * 3.5; // Natural astronomical cadence

    const spawnMeteor = () => {
      // Natural diagonal trajectory with slight angle variance
      const angle = (Math.PI * 0.22) + (Math.random() - 0.5) * 0.4; // 25° - 55° downward-right
      const speed = 1600 + Math.random() * 1400; // Hypersonic 1600 - 3000 px/sec
      const isFireball = Math.random() < 0.24; // 24% are dazzling fireballs

      // Realistic entry position: starts along top or upper-left perimeter
      let startX, startY;
      if (Math.random() > 0.4) {
        startX = Math.random() * (width * 0.75);
        startY = -20;
      } else {
        startX = -20;
        startY = Math.random() * (height * 0.45);
      }

      const duration = isFireball ? (0.48 + Math.random() * 0.22) : (0.28 + Math.random() * 0.18);
      const trailDuration = isFireball ? 0.16 : 0.09;

      meteors.push({
        x: startX,
        y: startY,
        startX,
        startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        speed,
        angle,
        age: 0,
        duration,
        trailDuration,
        thickness: isFireball ? (2.2 + Math.random() * 0.8) : (1.2 + Math.random() * 0.7),
        isFireball,
        flareTime: duration * (0.6 + Math.random() * 0.2),
        flareDone: false,
        // Spectral emission colors: pure white core with electric cyan or warm gold ionization
        color: isFireball ? (Math.random() > 0.5 ? '#00ffcc' : '#ffdd88') : (Math.random() > 0.4 ? '#5de6ff' : '#ffffff'),
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

      // 2. Realistic Meteor Spawn Cadence (Random Poisson timing)
      nextMeteorDelay -= dt;
      if (nextMeteorDelay <= 0) {
        if (meteors.length < 3) {
          spawnMeteor();
          // Occasional double meteor shower pair
          if (Math.random() < 0.2) {
            setTimeout(() => {
              if (meteors.length < 3) spawnMeteor();
            }, 250);
          }
        }
        nextMeteorDelay = 3.5 + Math.random() * 5.5; // Next shooting star in 3.5 - 9 seconds
      }

      // 3. Render and update meteors with authentic atmospheric physics
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.age += dt;

        // Head advances at hypersonic speed
        m.x += m.vx * dt;
        m.y += m.vy * dt;

        // Tail follows as a historical trailing horizon (NOT a static stick)
        const trailTime = Math.min(m.age, m.trailDuration);
        const tailX = m.x - m.vx * trailTime;
        const tailY = m.y - m.vy * trailTime;

        // Natural aerodynamic light curve (rapid ignition -> peak incandescence -> terminal extinction)
        const progress = m.age / m.duration;
        let brightness = 1.0;

        if (progress < 0.18) {
          // Ignition ramp
          brightness = progress / 0.18;
        } else if (progress > 0.75) {
          // Terminal ablation burnout
          brightness = Math.max(0, (1.0 - progress) / 0.25);
        }

        // Terminal ablation flare for fireballs
        if (m.isFireball && Math.abs(m.age - m.flareTime) < 0.055) {
          brightness = Math.min(1.5, brightness * 1.55);
          if (!m.flareDone) {
            m.flareDone = true;
            // Shed microscopic ablation embers that lag behind in the atmosphere
            const emberCount = 5 + Math.floor(Math.random() * 5);
            for (let k = 0; k < emberCount; k++) {
              const dragFactor = 0.2 + Math.random() * 0.4;
              m.embers.push({
                x: m.x,
                y: m.y,
                vx: m.vx * dragFactor + (Math.random() - 0.5) * 60,
                vy: m.vy * dragFactor + (Math.random() - 0.5) * 60,
                life: 0.18 + Math.random() * 0.22,
                maxLife: 0.35,
                size: 0.8 + Math.random() * 1.4,
              });
            }
          }
        }

        // If meteor burned out and all ember debris has cleared
        if (m.age >= m.duration && m.embers.length === 0) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.save();

        // If the meteoroid head is still burning
        if (m.age < m.duration && brightness > 0.01) {
          // --- PASS 1: Outer Ionized Atmospheric Gas Trail (Soft, diffuse glow) ---
          const outerGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
          outerGrad.addColorStop(0.0, 'rgba(0, 0, 0, 0)');
          outerGrad.addColorStop(0.4, `${m.color === '#ffdd88' ? 'rgba(255, 170, 0, ' : 'rgba(93, 230, 255, '}${(brightness * 0.25).toFixed(3)})`);
          outerGrad.addColorStop(1.0, `${m.color === '#ffdd88' ? 'rgba(255, 220, 140, ' : 'rgba(180, 240, 255, '}${(brightness * 0.6).toFixed(3)})`);

          ctx.strokeStyle = outerGrad;
          ctx.lineWidth = m.thickness * 2.8;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();

          // --- PASS 2: Inner Incandescent White-Hot Core Ray ---
          const coreGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
          coreGrad.addColorStop(0.0, 'rgba(255, 255, 255, 0)');
          coreGrad.addColorStop(0.55, `rgba(255, 255, 255, ${(brightness * 0.45).toFixed(3)})`);
          coreGrad.addColorStop(1.0, `rgba(255, 255, 255, ${(brightness * 0.98).toFixed(3)})`);

          ctx.strokeStyle = coreGrad;
          ctx.lineWidth = m.thickness * 0.9;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();

          // --- PASS 3: Brilliant Hypersonic Compression Head Flare ---
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1.0, brightness).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.thickness * 1.5, 0, Math.PI * 2);
          ctx.fill();

          // Outer shockwave bloom halo
          ctx.fillStyle = `${m.color === '#ffdd88' ? 'rgba(255, 200, 100, ' : 'rgba(93, 230, 255, '}${(brightness * 0.35).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.thickness * 3.4, 0, Math.PI * 2);
          ctx.fill();
        }

        // --- PASS 4: Lingering Micro-Ember Sparks (Atmospheric Drag) ---
        for (let j = m.embers.length - 1; j >= 0; j--) {
          const emb = m.embers[j];
          emb.x += emb.vx * dt;
          emb.y += emb.vy * dt;
          // Heavy air resistance decelerates debris
          emb.vx *= 0.91;
          emb.vy *= 0.91;
          emb.life -= dt;

          if (emb.life <= 0) {
            m.embers.splice(j, 1);
            continue;
          }

          const emberAlpha = Math.max(0, emb.life / emb.maxLife);
          ctx.fillStyle = `rgba(255, 255, 255, ${(emberAlpha * 0.9).toFixed(3)})`;
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
