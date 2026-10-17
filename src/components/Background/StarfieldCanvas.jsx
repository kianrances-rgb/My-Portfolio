import { useEffect, useRef } from 'react';

/**
 * StarfieldCanvas
 * Full-screen GPU-accelerated canvas background featuring:
 * - 350 volumetric stars across 3 depth parallax layers
 * - Twinkle dynamics & slow celestial drift
 * - Mouse-driven smooth lerp parallax
 * - Periodic shooting stars / meteor streaks
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
        // Layer 0: Distant (150 stars)
        // Layer 1: Mid-field (120 stars)
        // Layer 2: Foreground (80 stars)
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

    // Meteor / Shooting star system
    let meteors = [];

    const spawnMeteor = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.35; // ~45 deg downward-right
      meteors.push({
        x: Math.random() * width * 0.85,
        y: Math.random() * (height * 0.35),
        length: Math.random() * 70 + 80,
        speed: Math.random() * 10 + 12,
        angle,
        thickness: Math.random() * 1.5 + 1.2,
        opacity: 1,
        decay: Math.random() * 0.018 + 0.014,
        color: Math.random() > 0.45 ? '#00ffcc' : '#ffffff',
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

      const dt = Math.min(now - lastTime, 64);
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

      // 2. Random meteor spawn (~every 3-5 seconds on average)
      if (meteors.length < 2 && Math.random() < 0.007) {
        spawnMeteor();
      }

      // 3. Render and update meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.opacity -= m.decay;

        if (m.opacity <= 0 || m.x > width + 150 || m.y > height + 150) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        if (m.color === '#00ffcc') {
          grad.addColorStop(0.65, `rgba(0, 255, 204, ${m.opacity * 0.5})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity * 0.95})`);
        } else {
          grad.addColorStop(0.65, `rgba(180, 220, 255, ${m.opacity * 0.5})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity * 0.95})`);
        }

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Bright spark at meteor head
        ctx.fillStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.3, 0, Math.PI * 2);
        ctx.fill();
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
