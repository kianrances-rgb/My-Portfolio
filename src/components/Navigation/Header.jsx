import React, { useState, useEffect } from 'react';
import { navItems, personal } from '../../data/portfolioData';
import { AudioToggle } from './AudioToggle';
import { MobileDrawer } from './MobileDrawer';

/**
 * Header Component
 * Fixed cosmic navigation bar with blurred glass backdrop, astronaut helmet logo,
 * periodic passing comet sweep every 5 seconds, telemetry quick navigation,
 * procedural audio toggle, and mobile drawer controller.
 *
 * @param {string} [activeSection] - Currently active section ID ('intro', 'galaxy', etc.)
 * @param {(sectionId: string) => void} [onSectionChange] - Optional callback when user navigates
 */
export function Header({ activeSection: activeSectionProp, onSectionChange, onNavigate }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [internalActiveSection, setInternalActiveSection] = useState('intro');

  const currentActiveSection = activeSectionProp ?? internalActiveSection;

  // Internal scroll-spy fallback if activeSection is not controlled by parent
  useEffect(() => {
    if (activeSectionProp !== undefined) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setInternalActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSectionProp]);

  const handleNavigate = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = sectionId;
    }
    const notify = onNavigate || onSectionChange;
    notify?.(sectionId);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNavigate('intro');
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-40 h-16 md:h-20 backdrop-blur-md bg-[#030308]/85 border-b border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.7)] transition-all duration-300"
        role="banner"
      >
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Side: Astronaut Helmet Icon + Title with Comet Sweep */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* SVG Astronaut Helmet Icon with gold visor, reflections & beacon */}
            <a
              href="#intro"
              onClick={handleLogoClick}
              className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center p-1 bg-gradient-to-br from-[#171d36] to-[#060918] border border-[rgba(140,190,255,0.35)] shadow-[0_0_16px_rgba(93,230,255,0.25)] hover:scale-105 hover:rotate-[-4deg] hover:border-[#00ffcc] hover:shadow-[0_0_24px_rgba(0,255,204,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]"
              aria-label="Jump to Singularity Intro"
              title="Astronaut Helmet // Singularity Core"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                aria-hidden="true"
              >
                {/* Outer ring */}
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  fill="#080c1a"
                  stroke="rgba(140, 180, 255, 0.45)"
                  strokeWidth="1.5"
                />
                {/* Outer Helmet Dome */}
                <circle
                  cx="20"
                  cy="19"
                  r="14"
                  fill="#e2ebf8"
                  stroke="#364366"
                  strokeWidth="1.8"
                />
                {/* Helmet Neck Ring */}
                <rect
                  x="12"
                  y="30"
                  width="16"
                  height="5"
                  rx="2.5"
                  fill="#252d42"
                  stroke="#687ba6"
                  strokeWidth="1.2"
                />
                {/* Visor Golden Mirror Shell */}
                <ellipse
                  cx="20"
                  cy="18.5"
                  rx="10.5"
                  ry="8"
                  fill="url(#headerVisorGrad)"
                  stroke="#b88320"
                  strokeWidth="1.2"
                />
                {/* Specular Visor Reflection Highlight */}
                <path
                  d="M15 14 Q20 12 25 14 Q22 17 16 16 Z"
                  fill="rgba(255, 255, 255, 0.85)"
                />
                <circle cx="24" cy="22" r="1" fill="#44ffff" />
                {/* Comm Antenna */}
                <line
                  x1="31"
                  y1="12"
                  x2="36"
                  y2="6"
                  stroke="#8fa3cb"
                  strokeWidth="1.8"
                />
                {/* Pulsing Green/Cyan Beacon Dot */}
                <circle
                  cx="36"
                  cy="6"
                  r="1.8"
                  fill="#00ffcc"
                  className="animate-beacon-flash"
                />
                <circle
                  cx="36"
                  cy="6"
                  r="3.5"
                  fill="#00ffcc"
                  opacity="0.3"
                  className="animate-ping"
                />

                <defs>
                  <linearGradient id="headerVisorGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffe066" />
                    <stop offset="35%" stopColor="#ff9d00" />
                    <stop offset="75%" stopColor="#542500" />
                    <stop offset="100%" stopColor="#0a1024" />
                  </linearGradient>
                </defs>
              </svg>
            </a>

            {/* Brand Title with Passing Comet Sweep Animation */}
            <div className="relative inline-flex items-center overflow-visible select-none">
              <a
                href="#intro"
                onClick={handleLogoClick}
                className="relative block group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
              >
                <h1 className="font-orbitron font-extrabold text-sm sm:text-base md:text-lg tracking-[0.16em] uppercase text-[#f4f8ff] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-cyan-200 transition-colors">
                  {personal.name}
                </h1>
                {/* Specular sheen pass across brand title */}
                <span className="brand-title-sheen" aria-hidden="true">
                  {personal.name}
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Desktop Nav + Audio Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              aria-label="Cosmic Desktop Navigation"
            >
              <ul className="flex items-center gap-1 xl:gap-1.5 m-0 p-0 list-none">
                {navItems.map((item) => {
                  const isActive = currentActiveSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigate(item.id);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-oxanium text-xs font-semibold tracking-wider transition-all duration-200 select-none border ${
                          isActive
                            ? 'text-[#f4f8ff] bg-cyan-500/15 border-cyan-400/50 shadow-[0_0_12px_rgba(0,255,204,0.25)]'
                            : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Procedural Web Audio Engine Toggle */}
            <AudioToggle />

            {/* Mobile Hamburger Toggle Button (< 1024px) */}
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setIsDrawerOpen((prev) => !prev)}
              className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-md bg-[#0f142d]/75 border border-[rgba(140,180,255,0.2)] hover:border-cyan-400 hover:shadow-[0_0_14px_rgba(93,230,255,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]"
              aria-label="Toggle Navigation Drawer"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <span
                className={`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-transform duration-300 ease-in-out ${
                  isDrawerOpen ? 'rotate-45 translate-y-1.5 bg-[#00ffcc]' : '-translate-y-1'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-opacity duration-200 ${
                  isDrawerOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#f4f8ff] rounded transition-transform duration-300 ease-in-out ${
                  isDrawerOpen ? '-rotate-45 -translate-y-1.5 bg-[#00ffcc]' : 'translate-y-1'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Mobile Cosmic Navigation Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={currentActiveSection}
        onNavigate={handleNavigate}
      />
    </>
  );
}

export default Header;
