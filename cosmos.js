/**
 * ============================================================================
 * KIAN RANCES CAGADAS // COSMOS CONTROLLER & INTERACTIVE SUITE
 * Features:
 *  - 5-Second Periodic Passing Comet Synchronization & Particle Sparks
 *  - Procedural Web Audio Engine (Cosmic Drone, Gravitational Shear Synth, Chime)
 *  - Volumetric Background Starfield Canvas with Parallax & Twinkle Dynamics
 *  - Supernova Skill Filter Tabs & Interactive Orbit States
 *  - Contact Panel Direct Transmissions, Copy Clipboard & Form Protocol
 *  - Scroll Spy Navigation Highlighting
 * ============================================================================
 */

(function () {
    'use strict';

    /* ==========================================================================
       01. PROCEDURAL WEB AUDIO ENGINE (ZERO EXTERNAL ASSETS)
       ========================================================================== */
    class CosmicAudioEngine {
        constructor() {
            this.ctx = null;
            this.isPlaying = false;
            this.masterGain = null;
            this.droneOsc1 = null;
            this.droneOsc2 = null;
            this.gravOsc = null;
            this.gravGain = null;
            this.gravFilter = null;
        }

        init() {
            if (this.ctx) return;
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            this.ctx = new AudioContext();

            // Master Volume
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);

            // 1. Ambient Cosmic Drone (Deep Space Binaural Hum)
            this.droneOsc1 = this.ctx.createOscillator();
            this.droneOsc1.type = 'sine';
            this.droneOsc1.frequency.setValueAtTime(55.0, this.ctx.currentTime); // A1 note

            this.droneOsc2 = this.ctx.createOscillator();
            this.droneOsc2.type = 'triangle';
            this.droneOsc2.frequency.setValueAtTime(55.75, this.ctx.currentTime); // 0.75 Hz binaural beat

            const droneFilter = this.ctx.createBiquadFilter();
            droneFilter.type = 'lowpass';
            droneFilter.frequency.setValueAtTime(140, this.ctx.currentTime);

            const droneGain = this.ctx.createGain();
            droneGain.gain.setValueAtTime(0.6, this.ctx.currentTime);

            this.droneOsc1.connect(droneFilter);
            this.droneOsc2.connect(droneFilter);
            droneFilter.connect(droneGain);
            droneGain.connect(this.masterGain);

            this.droneOsc1.start();
            this.droneOsc2.start();

            // 2. Gravitational Singularity Shear Synth (Spaghettification Hum)
            this.gravOsc = this.ctx.createOscillator();
            this.gravOsc.type = 'sawtooth';
            this.gravOsc.frequency.setValueAtTime(45, this.ctx.currentTime);

            this.gravFilter = this.ctx.createBiquadFilter();
            this.gravFilter.type = 'lowpass';
            this.gravFilter.frequency.setValueAtTime(80, this.ctx.currentTime);
            this.gravFilter.Q.setValueAtTime(4, this.ctx.currentTime);

            this.gravGain = this.ctx.createGain();
            this.gravGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

            this.gravOsc.connect(this.gravFilter);
            this.gravFilter.connect(this.gravGain);
            this.gravGain.connect(this.masterGain);

            this.gravOsc.start();
            this.isPlaying = true;
        }

        setGravitationalPitch(shearRatio) {
            if (!this.ctx || !this.isPlaying || !this.gravGain) return;
            // Modulate pitch and volume based on spaghettification shear force
            const now = this.ctx.currentTime;
            const targetGain = Math.min(0.7, shearRatio * 0.85);
            const targetFreq = 45 + shearRatio * 80;
            const targetCutoff = 80 + shearRatio * 450;

            this.gravGain.gain.setTargetAtTime(targetGain, now, 0.05);
            this.gravOsc.frequency.setTargetAtTime(targetFreq, now, 0.05);
            this.gravFilter.frequency.setTargetAtTime(targetCutoff, now, 0.05);
        }

        playCometChime() {
            if (!this.ctx || !this.isPlaying) return;
            const now = this.ctx.currentTime;
            
            // Luminous starlight chime when comet sweeps
            const chimeOsc = this.ctx.createOscillator();
            const chimeGain = this.ctx.createGain();
            
            chimeOsc.type = 'sine';
            chimeOsc.frequency.setValueAtTime(880, now); // A5
            chimeOsc.frequency.exponentialRampToValueAtTime(1760, now + 0.35); // A6 glissando

            chimeGain.gain.setValueAtTime(0.06, now);
            chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

            chimeOsc.connect(chimeGain);
            chimeGain.connect(this.masterGain);

            chimeOsc.start(now);
            chimeOsc.stop(now + 0.85);
        }

        toggle() {
            if (!this.ctx) {
                this.init();
                try { localStorage.setItem('cosmic_audio_active', 'true'); } catch (e) {}
                return true;
            }
            if (this.ctx.state === 'suspended' || !this.isPlaying) {
                this.ctx.resume().then(() => {
                    const now = this.ctx.currentTime;
                    this.masterGain.gain.cancelScheduledValues(now);
                    this.masterGain.gain.setValueAtTime(0.001, now);
                    this.masterGain.gain.linearRampToValueAtTime(0.08, now + 0.12);
                });
                this.isPlaying = true;
                try { localStorage.setItem('cosmic_audio_active', 'true'); } catch (e) {}
                return true;
            } else {
                const now = this.ctx.currentTime;
                this.masterGain.gain.cancelScheduledValues(now);
                this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.12);
                setTimeout(() => {
                    if (!this.isPlaying && this.ctx) {
                        this.ctx.suspend();
                    }
                }, 130);
                this.isPlaying = false;
                try { localStorage.setItem('cosmic_audio_active', 'false'); } catch (e) {}
                return false;
            }
        }
    }

    const cosmicAudio = new CosmicAudioEngine();
    window.CosmicAudio = cosmicAudio;

    // Audio Toggle Button Setup
    const audioBtn = document.getElementById('audio-toggle');
    function updateAudioBtnUI(active) {
        if (!audioBtn) return;
        const statusText = audioBtn.querySelector('.audio-status-text');
        if (active) {
            audioBtn.classList.add('active');
            if (statusText) statusText.textContent = 'AUDIO: ON';
        } else {
            audioBtn.classList.remove('active');
            if (statusText) statusText.textContent = 'AUDIO: OFF';
        }
    }

    if (audioBtn) {
        audioBtn.addEventListener('click', function () {
            const active = cosmicAudio.toggle();
            updateAudioBtnUI(active);
        });
    }

    // Persisted Audio Preference Auto-Resume (Respecting Browser Autoplay Policy)
    try {
        if (localStorage.getItem('cosmic_audio_active') === 'true') {
            const unlockAudio = () => {
                if (localStorage.getItem('cosmic_audio_active') === 'true' && !cosmicAudio.isPlaying) {
                    const active = cosmicAudio.toggle();
                    updateAudioBtnUI(active);
                }
                window.removeEventListener('pointerdown', unlockAudio);
                window.removeEventListener('keydown', unlockAudio);
            };
            window.addEventListener('pointerdown', unlockAudio, { once: true });
            window.addEventListener('keydown', unlockAudio, { once: true });
        }
    } catch (e) {}


    /* ==========================================================================
       02. PASSING COMET SPARK SYNC (EVERY 5 SECONDS ACROSS TITLE)
       ========================================================================== */
    const titleContainer = document.getElementById('title-container');
    const cometSweep = document.getElementById('comet-sweep');

    if (titleContainer && cometSweep) {
        function onCometPass() {
            if (cosmicAudio.isPlaying) {
                cosmicAudio.playCometChime();
            }
            createCometBurst();
        }

        // Synchronize directly with CSS animation iteration (no timing drift!)
        cometSweep.addEventListener('animationiteration', onCometPass);
        cometSweep.addEventListener('animationstart', onCometPass);

        function createCometBurst() {
            const rect = titleContainer.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;
            for (let i = 0; i < 7; i++) {
                const spark = document.createElement('div');
                spark.style.position = 'fixed';
                spark.style.left = `${rect.left + Math.random() * rect.width}px`;
                spark.style.top = `${rect.top + rect.height * 0.5 + (Math.random() - 0.5) * 12}px`;
                spark.style.width = '3px';
                spark.style.height = '3px';
                spark.style.borderRadius = '50%';
                spark.style.background = '#64d2ff';
                spark.style.boxShadow = '0 0 8px #ffffff';
                spark.style.pointerEvents = 'none';
                spark.style.zIndex = '9999';
                spark.style.transition = 'all 0.75s ease-out';
                document.body.appendChild(spark);

                requestAnimationFrame(() => {
                    spark.style.transform = `translate(${(Math.random() - 0.5) * 45}px, ${(Math.random() - 0.5) * 25}px) scale(0)`;
                    spark.style.opacity = '0';
                });

                setTimeout(() => {
                    spark.remove();
                }, 800);
            }
        }
    }


    /* ==========================================================================
       03. VOLUMETRIC BACKGROUND STARFIELD CANVAS
       ========================================================================== */
    const bgCanvas = document.getElementById('bg-starfield');
    if (bgCanvas) {
        const ctx = bgCanvas.getContext('2d');
        let stars = [];
        const NUM_STARS = 260;

        function initStars() {
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
            stars = [];
            for (let i = 0; i < NUM_STARS; i++) {
                stars.push({
                    x: Math.random() * bgCanvas.width,
                    y: Math.random() * bgCanvas.height,
                    size: Math.random() * 1.8 + 0.4,
                    alpha: Math.random() * 0.8 + 0.2,
                    speed: Math.random() * 0.15 + 0.03,
                    twinkleRate: Math.random() * 0.02 + 0.005,
                    color: Math.random() > 0.8 ? '#aadcff' : (Math.random() > 0.9 ? '#ffe0aa' : '#ffffff')
                });
            }
        }

        initStars();
        window.addEventListener('resize', initStars);

        let starAnimId = null;
        function renderStars() {
            if (document.hidden) {
                starAnimId = null;
                return;
            }

            ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

            for (let i = 0; i < stars.length; i++) {
                const s = stars[i];
                s.alpha += Math.sin(Date.now() * s.twinkleRate) * 0.008;
                s.alpha = Math.max(0.15, Math.min(0.95, s.alpha));

                // Slow vertical celestial drift
                s.y -= s.speed;
                if (s.y < 0) s.y = bgCanvas.height;

                ctx.fillStyle = s.color;
                ctx.globalAlpha = s.alpha;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1.0;
            starAnimId = requestAnimationFrame(renderStars);
        }

        starAnimId = requestAnimationFrame(renderStars);

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && !starAnimId) {
                starAnimId = requestAnimationFrame(renderStars);
            }
        });
    }


    /* ==========================================================================
       04. SUPERNOVA SKILL FILTER TABS
       ========================================================================== */
    const skillTabs = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-cluster-card');

    skillTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            skillTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            const category = this.getAttribute('data-category');
            const skillsGrid = document.getElementById('skills-grid');
            if (skillsGrid) {
                if (category === 'all') {
                    skillsGrid.classList.remove('has-filter');
                } else {
                    skillsGrid.classList.add('has-filter');
                }
            }

            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeInUp 0.35s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });


    /* ==========================================================================
       05B. MOBILE NAVIGATION DRAWER CONTROLLER
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    const drawerBackdrop = document.getElementById('drawer-backdrop');
    const drawerNavItems = document.querySelectorAll('.drawer-nav-item');

    function openMobileDrawer() {
        if (!mobileDrawer || !mobileMenuBtn) return;
        mobileDrawer.classList.add('open');
        mobileDrawer.setAttribute('aria-hidden', 'false');
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMobileDrawer() {
        if (!mobileDrawer || !mobileMenuBtn) return;
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    }

    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeMobileDrawer);
    }

    drawerNavItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMobileDrawer();
        });
    });

    // Keyboard accessibility: Escape key closes drawer
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
            closeMobileDrawer();
        }
    });


    /* ==========================================================================
       06. CONTACT CHANNELS & HOLOGRAPHIC TRANSMISSION CONSOLE
       ========================================================================== */
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyEmailText = document.getElementById('copy-email-text');
    const contactForm = document.getElementById('contact-form');
    const progressBar = document.getElementById('transmission-progress-bar');
    const progressFill = document.getElementById('transmission-progress-fill');
    const hudFeedback = document.getElementById('transmission-hud-feedback');
    const consoleStatusText = document.getElementById('console-status-text');

    // 1. Copy Email Button with Holographic Feedback
    if (copyEmailBtn && copyEmailText) {
        copyEmailBtn.addEventListener('click', function () {
            const email = 'Kianrances@gmail.com';
            const notifyCopy = () => {
                showCopiedState();
                if (hudFeedback && consoleStatusText) {
                    hudFeedback.className = 'transmission-hud-feedback visible success';
                    hudFeedback.textContent = '✦ EMAIL ADDRESS COPIED TO CLIPBOARD // Kianrances@gmail.com';
                    consoleStatusText.textContent = 'STATUS: CLIPBOARD ACCESS GRANTED // READY';
                    setTimeout(() => {
                        hudFeedback.classList.remove('visible');
                    }, 3500);
                }
            };

            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(notifyCopy).catch(() => {
                    fallbackCopy(email, notifyCopy);
                });
            } else {
                fallbackCopy(email, notifyCopy);
            }
        });

        function fallbackCopy(email, cb) {
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            if (cb) cb();
        }

        function showCopiedState() {
            copyEmailText.textContent = 'COPIED TO CLIPBOARD! ✦';
            copyEmailBtn.style.borderColor = '#00ffcc';
            copyEmailBtn.style.color = '#00ffcc';
            setTimeout(() => {
                copyEmailText.textContent = 'COPY EMAIL ADDRESS';
                copyEmailBtn.style.borderColor = '';
                copyEmailBtn.style.color = '';
            }, 2500);
        }
    }

    // 2. Direct Subspace Message Composer Directed to Gmail Compose
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('sender-name').value.trim();
            const email = document.getElementById('sender-email').value.trim();
            const subject = document.getElementById('sender-subject').value.trim();
            const message = document.getElementById('sender-message').value.trim();

            const recipient = 'kianrances@gmail.com';
            const subjectLine = subject ? `[Cosmic Transmission] ${subject}` : `[Cosmic Transmission] Message from ${name}`;
            const bodyContent = `Transmitter Name: ${name}\nReturn Coordinates (Email): ${email}\n\nTransmission Payload:\n${message}\n\n--------------------------------------------------\nTransmitted via Kian Rances Cagadas Cosmic Subspace Terminal`;

            const fullSubject = encodeURIComponent(subjectLine);
            const fullBody = encodeURIComponent(bodyContent);

            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${fullSubject}&body=${fullBody}`;

            // Pre-open window synchronously to avoid popup blocker restrictions
            let openedTab = null;
            try {
                openedTab = window.open('about:blank', '_blank');
            } catch (err) {
                openedTab = null;
            }

            // Holographic encryption sequence
            if (progressBar && progressFill && hudFeedback && consoleStatusText) {
                progressBar.classList.add('active');
                progressFill.style.width = '0%';
                consoleStatusText.textContent = 'STATUS: PREPARING GMAIL DISPATCH...';
                hudFeedback.className = 'transmission-hud-feedback visible transmitting';
                hudFeedback.textContent = 'ENCRYPTING PAYLOAD & RESOLVING GMAIL... [25%]';

                setTimeout(() => {
                    progressFill.style.width = '65%';
                    hudFeedback.textContent = 'COORDINATES LOCKED: kianrances@gmail.com... [65%]';
                }, 250);

                setTimeout(() => {
                    progressFill.style.width = '100%';
                    consoleStatusText.textContent = 'STATUS: DIRECTED TO GMAIL // RECIPIENT: kianrances@gmail.com';
                    hudFeedback.className = 'transmission-hud-feedback visible success';
                    hudFeedback.innerHTML = `✦ OPENING GMAIL COMPOSE // <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" style="color: #00ffcc; text-decoration: underline; font-weight: bold;">CLICK HERE IF GMAIL DID NOT OPEN AUTOMATICALLY</a>`;

                    if (openedTab && !openedTab.closed) {
                        openedTab.location.href = gmailUrl;
                    } else {
                        window.location.href = gmailUrl;
                    }

                    setTimeout(() => {
                        progressBar.classList.remove('active');
                        progressFill.style.width = '0%';
                    }, 4000);
                }, 600);
            } else {
                if (openedTab && !openedTab.closed) {
                    openedTab.location.href = gmailUrl;
                } else {
                    window.location.href = gmailUrl;
                }
            }
        });
    }

    // Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }


    /* ==========================================================================
       07. SCROLL SPY NAVIGATION (DUAL DESKTOP & MOBILE DRAWER SUPPORT)
       ========================================================================== */
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    function updateScrollSpy() {
        const scrollPosition = window.scrollY + 140;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                navItems.forEach(item => {
                    if (item.getAttribute('data-section') === id) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });

                drawerNavItems.forEach(item => {
                    if (item.getAttribute('data-section') === id) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateScrollSpy, { passive: true });
    updateScrollSpy();


    /* ==========================================================================
       08. SUBSPACE WANDERING ASTRONAUT KIAN INTERACTIVE OCCASIONAL GREETINGS
       ========================================================================== */
    const wanderingAstronaut = document.getElementById('subspace-wandering-astronaut');
    const speechBubble = document.getElementById('astronaut-speech-bubble');
    const bubbleStatusText = document.getElementById('bubble-status-text');

    if (wanderingAstronaut && bubbleStatusText && speechBubble) {
        const kianGreetings = [
            "Hi! I'm Astronaut Kian! 👨‍🚀",
            "To the Space and Beyond! 🚀🌌",
            "Diving through Subspace! 🛰️⚡",
            "Flying & Wandering in Space! 🪐💫",
            "Hi! I'm Astronaut Kian! 👨‍🚀✨",
            "Subspace Link Locked // Say Hello! 📡👋"
        ];
        let greetIndex = 0;

        function setGreeting(index, isInteractive = false) {
            greetIndex = index % kianGreetings.length;
            
            // Pop transition for holographic speech bubble
            speechBubble.classList.remove('bubble-pop');
            void speechBubble.offsetWidth; // Force reflow for clean re-trigger
            speechBubble.classList.add('bubble-pop');

            bubbleStatusText.textContent = kianGreetings[greetIndex];

            if (isInteractive) {
                wanderingAstronaut.classList.add('wander-boost');
                if (window.cosmicAudio && window.cosmicAudio.isPlaying) {
                    window.cosmicAudio.playCometChime();
                }
                setTimeout(() => {
                    wanderingAstronaut.classList.remove('wander-boost');
                }, 1200);
            }
        }

        // Occasional periodic greetings cycle (every 5 seconds)
        let greetInterval = setInterval(() => {
            if (!document.hidden) {
                setGreeting(greetIndex + 1, false);
            }
        }, 5000);

        // Interactive click / keyboard activation
        function onAstronautInteract() {
            setGreeting(greetIndex + 1, true);
            // Reset periodic timer so it doesn't immediately double-switch
            clearInterval(greetInterval);
            greetInterval = setInterval(() => {
                if (!document.hidden) {
                    setGreeting(greetIndex + 1, false);
                }
            }, 5000);
        }

        wanderingAstronaut.addEventListener('click', onAstronautInteract);
        wanderingAstronaut.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onAstronautInteract();
            }
        });
    }

})();

