/**
 * ============================================================================
 * KIAN RANCES CAGADAS // WARPING BLACK HOLE & EVENT HORIZON ENGINE
 * Features:
 *  - Real-time Relativistic Accretion Disk with Gravitational Lensing
 *  - Einstein Photon Sphere & Pure Black Event Horizon Singularity
 *  - Relativistic Doppler Beaming (Blueshift on left, Redshift on right)
 *  - Spacetime Warping & Turbulent Plasma Filaments
 *  - Dual Mode: High-performance WebGL GLSL Shader + Resilient Canvas 2D Fallback
 *  - Singularity Coordinate Provider for Astronaut Spaghettification Engine
 * ============================================================================
 */

(function () {
    'use strict';

    // Global Registry for Singularity Telemetry
    window.BlackHoleEngine = {
        center: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        radius: 80,
        tidalRadius: 360,
        isActive: true,
        getMetrics: function () {
            return {
                x: this.center.x,
                y: this.center.y,
                radius: this.radius,
                tidalRadius: this.tidalRadius
            };
        }
    };

    const canvas = document.getElementById('blackhole-canvas');
    if (!canvas) return;

    let gl = null;
    let program = null;
    let positionBuffer = null;
    let uResolution, uTime, uMouse, uIntensity;
    let mouseX = 0.5, mouseY = 0.5;
    let targetMouseX = 0.5, targetMouseY = 0.5;
    let startTime = performance.now();
    let isWebGlSupported = false;
    let isVisible = true;
    let isTabActive = typeof document !== 'undefined' ? !document.hidden : true;
    let animId = null;

    // Vertex Shader Source
    const vsSource = `
        attribute vec2 a_position;
        varying vec2 v_uv;
        void main() {
            v_uv = (a_position + 1.0) * 0.5;
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    // Fragment Shader Source - Relativistic Ray-Bending & Accretion Disk Lensing
    const fsSource = `
        precision highp float;
        uniform vec2 u_resolution;
        uniform float u_time;
        uniform vec2 u_mouse;
        varying vec2 v_uv;

        #define PI 3.14159265359

        // 2D Rotation Matrix
        mat2 rotate2d(float angle) {
            float s = sin(angle);
            float c = cos(angle);
            return mat2(c, -s, s, c);
        }

        // Pseudo-random noise
        float hash(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
        }

        // Fractal Brownian Motion for swirling plasma dust
        float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(100.0);
            mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
            for (int i = 0; i < 4; ++i) {
                v += a * (sin(p.x * 3.0) * cos(p.y * 3.0));
                p = rot * p * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main() {
            // Aspect ratio correction
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
            
            // Mouse tilt reaction
            vec2 mouseOffset = (u_mouse - 0.5) * 0.35;
            uv -= mouseOffset * 0.25;

            float r = length(uv);
            float angle = atan(uv.y, uv.x);

            // Schwarzschild Event Horizon radius & Photon sphere radius
            float r_s = 0.18;            // Event horizon shadow radius
            float r_photon = r_s * 1.5;   // Photon sphere border

            // Gravitational Lensing Distortion: Light bends sharply toward singularity
            // Deflection angle alpha ~ 4GM / (c^2 * r)
            float deflection = (r_s * r_s * 0.85) / max(r, 0.001);
            vec2 lensedUV = uv;
            if (r > r_s) {
                lensedUV -= normalize(uv) * deflection * 0.5;
            }

            // Tilted Accretion Disk Projection
            // Simulates an accretion disk viewed at ~70 deg inclination
            vec2 diskCoord = lensedUV;
            diskCoord.y /= 0.42; // Foreshorten vertical axis for 3D tilt

            // Gravitational Lensing creates a secondary upper and lower halo
            // by bending the back of the disk OVER and UNDER the event horizon!
            float haloY = abs(lensedUV.y) - (r_s * 1.1);
            vec2 haloCoord = vec2(lensedUV.x, haloY / 0.3);

            float diskR = length(diskCoord);
            float haloR = length(haloCoord);

            // Swirling angular dynamics with Keplerian velocity profile (v ~ 1/sqrt(r))
            float time = u_time * 0.8;
            float swirlAngle = angle + (time * 0.75) / max(r * 2.0, 0.2);
            float plasmaNoise = fbm(vec2(swirlAngle * 4.0, r * 14.0 - time * 1.2));

            // Plasma glow intensity in accretion disk
            float diskGlow = 0.0;
            if (diskR > r_s * 1.05 && diskR < r_s * 4.2) {
                float diskMask = smoothstep(r_s * 1.05, r_s * 1.4, diskR) * (1.0 - smoothstep(r_s * 2.2, r_s * 4.2, diskR));
                diskGlow += diskMask * (0.8 + 0.4 * plasmaNoise);
            }

            // Gravitationally bent upper and lower halo
            if (haloR > r_s * 0.95 && haloR < r_s * 3.2) {
                float haloMask = smoothstep(r_s * 0.95, r_s * 1.3, haloR) * (1.0 - smoothstep(r_s * 1.8, r_s * 3.2, haloR));
                diskGlow += haloMask * 0.65 * (0.8 + 0.3 * sin(swirlAngle * 5.0 + time));
            }

            // Relativistic Doppler Beaming Factor:
            // Material moving toward observer (left side, uv.x < 0) is boosted significantly brighter & blueshifted!
            // Material moving away (right side, uv.x > 0) is redshifted and dimmer.
            float dopplerFactor = clamp(1.0 - (uv.x / max(r, 0.1)) * 0.55, 0.25, 2.2);
            diskGlow *= dopplerFactor;

            // Einstein Photon Ring: razor sharp intense luminous circle
            float photonRing = exp(-pow((r - r_photon) * 85.0, 2.0)) * 2.2;

            // Inner Accretion Edge flare
            float innerEdge = exp(-pow((r - r_s * 1.08) * 45.0, 2.0)) * 1.8;

            // Gravitational Spacetime grid warping in the background
            vec2 gridUV = lensedUV * 18.0;
            float grid = (1.0 - smoothstep(0.0, 0.08, abs(sin(gridUV.x * PI)))) * 
                         (1.0 - smoothstep(0.0, 0.08, abs(sin(gridUV.y * PI)))) * 0.08;

            // Color Palette Synthesis:
            // Accretion Core: Blazing white & cyan (high energy)
            // Mid Disk: Luminous gold & plasma orange
            // Outer Disk: Deep relativistic dark red & violet
            vec3 colWhite = vec3(1.0, 1.0, 1.0);
            vec3 colCyan  = vec3(0.35, 0.85, 1.0);
            vec3 colGold  = vec3(1.0, 0.72, 0.22);
            vec3 colRed   = vec3(0.95, 0.25, 0.12);
            vec3 colVoid  = vec3(0.012, 0.015, 0.035);

            vec3 color = colVoid;
            color += grid * vec3(0.25, 0.45, 0.85);

            // Blend Plasma Accretion Spectrum
            vec3 plasmaColor = mix(colRed, colGold, clamp(diskGlow * 1.2, 0.0, 1.0));
            plasmaColor = mix(plasmaColor, colCyan, clamp((diskGlow - 0.7) * 2.0, 0.0, 1.0));
            color += plasmaColor * diskGlow * 1.4;

            // Add Photon Sphere & Inner Edge Luminance
            color += (colCyan * 0.6 + colWhite * 0.4) * photonRing;
            color += (colGold * 0.7 + colWhite * 0.3) * innerEdge;

            // Central Black Hole Event Horizon Singularity:
            // Absolute darkness inside r <= r_s
            float shadowMask = smoothstep(r_s - 0.008, r_s + 0.004, r);
            color *= shadowMask;

            // Relativistic Gravitational Glow around shadow border
            float horizonCorona = exp(-pow((r - r_s) * 28.0, 2.0)) * 0.9;
            color += vec3(1.0, 0.65, 0.3) * horizonCorona * shadowMask;

            // Vignette edge
            float vig = 1.0 - smoothstep(0.7, 1.4, length(uv));
            color *= vig;

            gl_FragColor = vec4(color, 1.0);
        }
    `;

    // Initialize WebGL
    function initWebGL() {
        try {
            gl = canvas.getContext('webgl', { antialias: true, alpha: false, depth: false }) ||
                 canvas.getContext('experimental-webgl');
            if (!gl) return false;

            const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            if (!vs || !fs) return false;

            program = gl.createProgram();
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.warn('WebGL Link Error:', gl.getProgramInfoLog(program));
                return false;
            }

            gl.useProgram(program);

            // Create Screen Quad Buffer
            positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1, -1,
                 1, -1,
                -1,  1,
                -1,  1,
                 1, -1,
                 1,  1,
            ]), gl.STATIC_DRAW);

            const aPosition = gl.getAttribLocation(program, 'a_position');
            gl.enableVertexAttribArray(aPosition);
            gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

            // Get Uniform Locations
            uResolution = gl.getUniformLocation(program, 'u_resolution');
            uTime = gl.getUniformLocation(program, 'u_time');
            uMouse = gl.getUniformLocation(program, 'u_mouse');

            return true;
        } catch (e) {
            console.warn('WebGL Initialization Exception:', e);
            return false;
        }
    }

    function createShader(glCtx, type, source) {
        const shader = glCtx.createShader(type);
        glCtx.shaderSource(shader, source);
        glCtx.compileShader(shader);
        if (!glCtx.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.warn('Shader Compile Error:', glCtx.getShaderInfoLog(shader));
            glCtx.deleteShader(shader);
            return null;
        }
        return shader;
    }

    // Resize Handler
    function resize() {
        const isTouch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
        const maxDpr = isTouch ? 1.25 : 1.75;
        const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
        const w = window.innerWidth;
        const h = window.innerHeight;

        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);

        if (gl) {
            gl.viewport(0, 0, canvas.width, canvas.height);
        }

        // Update Global Telemetry Center in Screen Space
        const introSection = document.getElementById('intro');
        if (introSection) {
            const rect = introSection.getBoundingClientRect();
            window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
            window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
        } else {
            window.BlackHoleEngine.center.x = w / 2;
            window.BlackHoleEngine.center.y = h / 2;
        }

        // Scaled event horizon radius
        const minDim = Math.min(w, h);
        window.BlackHoleEngine.radius = minDim * 0.16; // Matches r_s in shader
        window.BlackHoleEngine.tidalRadius = minDim * 0.48; // Spaghettification capture boundary
    }

    // 2D Canvas Procedural Relativistic Warping Engine (Active Dynamic Fallback)
    function renderCanvas2D(timestamp) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        const r_s = window.BlackHoleEngine.radius || Math.min(w, h) * 0.16;
        const t = (timestamp - startTime) * 0.001;

        ctx.fillStyle = '#030308';
        ctx.fillRect(0, 0, w, h);

        ctx.save();
        // Mouse tilt translation
        const tiltX = (mouseX - 0.5) * 40;
        const tiltY = (mouseY - 0.5) * -25;
        ctx.translate(cx + tiltX, cy + tiltY);

        // 1. Spacetime Warping Grid Distortion (Light deflected by gravitational field)
        ctx.save();
        ctx.strokeStyle = 'rgba(93, 230, 255, 0.05)';
        ctx.lineWidth = 1;
        const gridStep = 50;
        for (let gx = -w / 2; gx <= w / 2; gx += gridStep) {
            ctx.beginPath();
            for (let gy = -h / 2; gy <= h / 2; gy += 25) {
                const distToCenter = Math.hypot(gx, gy);
                const warp = Math.min(60, (r_s * r_s * 1.5) / Math.max(distToCenter, 15));
                const angle = Math.atan2(gy, gx);
                const wx = gx - Math.cos(angle) * warp;
                const wy = gy - Math.sin(angle) * warp;
                if (gy === -h / 2) ctx.moveTo(wx, wy);
                else ctx.lineTo(wx, wy);
            }
            ctx.stroke();
        }
        ctx.restore();

        // 2. Gravitational Lensing Upper Arch (Back of accretion disk bent over event horizon)
        const archWave = Math.sin(t * 1.8) * 4;
        const upperArchGrad = ctx.createLinearGradient(-r_s * 2.8, 0, r_s * 2.8, 0);
        upperArchGrad.addColorStop(0.0, 'rgba(93, 230, 255, 0.85)'); // Blueshifted approaching limb
        upperArchGrad.addColorStop(0.35, 'rgba(255, 230, 150, 0.9)');
        upperArchGrad.addColorStop(0.7, 'rgba(255, 120, 30, 0.6)');
        upperArchGrad.addColorStop(1.0, 'rgba(180, 40, 20, 0.2)'); // Redshifted receding limb

        ctx.lineWidth = r_s * 0.38;
        ctx.strokeStyle = upperArchGrad;
        ctx.beginPath();
        ctx.ellipse(0, -r_s * 0.3 + archWave, r_s * 2.1, r_s * 1.75, 0, Math.PI * 0.98, Math.PI * 2.02);
        ctx.stroke();

        // 3. Main Tilted Accretion Disk (Swirling with Keplerian velocity profile)
        const diskTilt = -0.18 + (mouseY - 0.5) * 0.08;
        ctx.save();
        ctx.rotate(diskTilt);

        // Multiple dynamic plasma rings spinning at differential speeds (Keplerian: v ~ 1/sqrt(r))
        const numRings = 7;
        for (let i = 0; i < numRings; i++) {
            const ringR = r_s * (1.2 + i * 0.35);
            const ringSpeed = (1.4 / Math.sqrt(1.0 + i * 0.5)) * (t * 1.6);
            const ringAlpha = (1.0 - i / numRings) * (0.55 + 0.25 * Math.sin(t * 2.5 + i));

            // Accretion disk gradient with Doppler beaming: Left side brighter and cyan, right side dimmer and red
            const ringGrad = ctx.createLinearGradient(-ringR * 2.5, 0, ringR * 2.5, 0);
            ringGrad.addColorStop(0.0, `rgba(93, 230, 255, ${ringAlpha * 0.95})`);
            ringGrad.addColorStop(0.3, `rgba(255, 240, 160, ${ringAlpha * 0.9})`);
            ringGrad.addColorStop(0.65, `rgba(255, 130, 30, ${ringAlpha * 0.55})`);
            ringGrad.addColorStop(1.0, `rgba(180, 40, 20, ${ringAlpha * 0.2})`);

            ctx.lineWidth = r_s * 0.22;
            ctx.strokeStyle = ringGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, ringR * 2.4, ringR * 0.85, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Swirling plasma filaments & turbulent clumps
        for (let j = 0; j < 18; j++) {
            const filamentOrbit = r_s * (1.3 + (j % 4) * 0.45);
            const orbitSpeed = (2.2 / Math.sqrt(filamentOrbit / r_s)) * t + (j * Math.PI / 9);
            const fx = Math.cos(orbitSpeed) * (filamentOrbit * 2.2);
            const fy = Math.sin(orbitSpeed) * (filamentOrbit * 0.78);
            const fSize = 2.5 + Math.sin(t * 4 + j) * 1.5;

            // Approaching limb flare vs receding
            const isApproaching = fx < 0;
            ctx.fillStyle = isApproaching ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 120, 30, 0.5)';
            ctx.shadowColor = isApproaching ? '#5de6ff' : '#ff5522';
            ctx.shadowBlur = isApproaching ? 12 : 4;
            ctx.beginPath();
            ctx.arc(fx, fy, fSize, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.shadowBlur = 0;
        ctx.restore();

        // 4. Gravitational Lensing Lower Arch (Bending under event horizon)
        const lowerArchGrad = ctx.createLinearGradient(-r_s * 2.5, 0, r_s * 2.5, 0);
        lowerArchGrad.addColorStop(0.0, 'rgba(93, 230, 255, 0.7)');
        lowerArchGrad.addColorStop(0.4, 'rgba(255, 180, 50, 0.75)');
        lowerArchGrad.addColorStop(0.8, 'rgba(255, 80, 20, 0.4)');
        lowerArchGrad.addColorStop(1.0, 'rgba(120, 20, 10, 0.15)');

        ctx.lineWidth = r_s * 0.24;
        ctx.strokeStyle = lowerArchGrad;
        ctx.beginPath();
        ctx.ellipse(0, r_s * 0.28 - archWave * 0.5, r_s * 1.85, r_s * 1.4, 0, Math.PI * 0.05, Math.PI * 0.95);
        ctx.stroke();

        // 5. Relativistic Einstein Photon Ring (r ~ 1.5 * r_s)
        const photonPulse = 1.0 + Math.sin(t * 3.2) * 0.08;
        ctx.strokeStyle = 'rgba(255, 245, 210, 0.95)';
        ctx.shadowColor = '#ffe082';
        ctx.shadowBlur = 18;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(0, 0, r_s * 1.48 * photonPulse, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Accretion Edge Flare (Innermost Stable Circular Orbit - ISCO)
        ctx.strokeStyle = 'rgba(93, 230, 255, 0.75)';
        ctx.shadowColor = '#5de6ff';
        ctx.shadowBlur = 12;
        ctx.lineWidth = 2.0;
        ctx.beginPath();
        ctx.arc(0, 0, r_s * 1.15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // 6. Central Black Hole Event Horizon Singularity Shadow (Total Darkness)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(0, 0, r_s, 0, Math.PI * 2);
        ctx.fill();

        // Edge Corona of Event Horizon
        ctx.strokeStyle = 'rgba(255, 140, 40, 0.85)';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.restore();
    }

    // Animation Control & Lifecycle Management
    function startAnimation() {
        if (!animId && isVisible && isTabActive) {
            animId = requestAnimationFrame(animate);
        }
    }

    function stopAnimation() {
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
    }

    // Animation Loop with Visibility Guard
    function animate(timestamp) {
        if (!isVisible || !isTabActive) {
            animId = null;
            return;
        }

        // Smooth mouse dampening
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        // Keep Center Updated Relative to Viewport / Scroll
        const introSection = document.getElementById('intro');
        if (introSection) {
            const rect = introSection.getBoundingClientRect();
            window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
            window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
        }

        if (isWebGlSupported && gl && program) {
            gl.useProgram(program);
            const elapsedTime = (timestamp - startTime) * 0.001;

            gl.uniform2f(uResolution, canvas.width, canvas.height);
            gl.uniform1f(uTime, elapsedTime);
            gl.uniform2f(uMouse, mouseX, mouseY);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
        } else {
            renderCanvas2D(timestamp);
        }

        animId = requestAnimationFrame(animate);
    }

    // Mouse Tracking for Accretion Tilt
    window.addEventListener('mousemove', function (e) {
        targetMouseX = e.clientX / window.innerWidth;
        targetMouseY = 1.0 - (e.clientY / window.innerHeight);
    }, { passive: true });

    // Window Resize & Scroll
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', function () {
        // Update singularity center on scroll
        const introSection = document.getElementById('intro');
        if (introSection) {
            const rect = introSection.getBoundingClientRect();
            window.BlackHoleEngine.center.x = rect.left + rect.width / 2;
            window.BlackHoleEngine.center.y = rect.top + rect.height / 2;
        }
    }, { passive: true });

    // IntersectionObserver: Pause Raymarching Shader When Intro Is Off-Screen
    const introEl = document.getElementById('intro');
    if ('IntersectionObserver' in window && introEl) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    startAnimation();
                } else {
                    stopAnimation();
                }
            });
        }, { threshold: 0.05 });
        observer.observe(introEl);
    }

    // Page Visibility API: Stop GPU Loop When Tab Is Hidden
    document.addEventListener('visibilitychange', () => {
        isTabActive = !document.hidden;
        if (isTabActive && isVisible) {
            startAnimation();
        } else {
            stopAnimation();
        }
    });

    // WebGL Context Loss & Restoration Handling
    canvas.addEventListener('webglcontextlost', (e) => {
        e.preventDefault();
        stopAnimation();
        isWebGlSupported = false;
        gl = null;
        program = null;
    }, false);

    canvas.addEventListener('webglcontextrestored', () => {
        isWebGlSupported = initWebGL();
        resize();
        startAnimation();
    }, false);

    // Initialization
    isWebGlSupported = initWebGL();
    resize();
    startAnimation();

})();
