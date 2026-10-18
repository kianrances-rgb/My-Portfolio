import React, { useEffect } from 'react';
import { navItems, personal } from '../../data/portfolioData';

/**
 * MobileDrawer Component
 * Slide-in cosmic navigation drawer for tablet and mobile viewports (< 1024px).
 *
 * @param {boolean} isOpen - Whether drawer is visible
 * @param {() => void} onClose - Callback to close drawer
 * @param {string} activeSection - Current active section id ('intro', 'galaxy', etc.)
 * @param {(sectionId: string) => void} [onNavigate] - Navigation handler callback
 */
export function MobileDrawer({ isOpen, onClose, activeSection = 'intro', onNavigate }) {
  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard accessibility: Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleItemClick = (e, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    }
    onClose?.();
  };

  return (
    <div
      id="mobile-nav-drawer"
      className={`fixed inset-0 z-[9998] transition-all duration-300 lg:hidden ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible'
          : 'opacity-0 pointer-events-none invisible'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label="Sector Telemetry Navigation"
    >
      {/* Semi-transparent Backdrop with click-to-dismiss */}
      <div
        className="absolute inset-0 bg-[#03040c]/80 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Panel with glowing border */}
      <aside
        className={`absolute top-0 right-0 h-full w-[82%] max-w-[340px] bg-[#080c1c]/95 border-l border-cyan-500/30 shadow-[-10px_0_40px_rgba(0,0,0,0.85),0_0_35px_rgba(0,255,204,0.15)] flex flex-col justify-between p-6 transition-transform duration-300 ease-out z-[9999] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Top Content (Header + Links) */}
        <div className="flex flex-col gap-6">
          {/* Cyber Header */}
          <div className="flex items-center justify-between pb-4 border-b border-cyan-500/20">
            <div className="flex items-center gap-2">
              <span className="text-lg select-none" role="img" aria-label="Astronaut">
                👨‍🚀
              </span>
              <h2 className="font-orbitron font-bold text-sm tracking-[0.16em] text-[#00ffcc] uppercase select-none drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]">
                NAVIGATION
              </h2>
            </div>
            {/* Close Button (✕) */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-cyan-500/20 hover:border-red-500 hover:text-red-400 text-slate-300 transition-all duration-200 flex items-center justify-center font-mono text-sm hover:shadow-[0_0_12px_rgba(255,51,85,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              aria-label="Close Navigation Drawer"
            >
              ✕
            </button>
          </div>

          {/* Sector Nav List */}
          <nav aria-label="Mobile Sector Telemetry Links">
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleItemClick(e, item.id)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 font-oxanium text-sm font-semibold tracking-wider select-none ${
                        isActive
                          ? 'bg-cyan-500/15 border border-[#00ffcc]/60 text-white shadow-[0_0_18px_rgba(0,255,204,0.3)] translate-x-1'
                          : 'border border-transparent text-slate-300 hover:border-cyan-500/20 hover:bg-white/5 hover:text-white hover:translate-x-1'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Active Indicator Line */}
                        {isActive ? (
                          <span
                            className="w-1.5 h-4 bg-[#00ffcc] rounded-full shadow-[0_0_8px_#00ffcc]"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="w-1.5 h-4 bg-transparent rounded-full"
                            aria-hidden="true"
                          />
                        )}
                        <span className="tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-xs text-cyan-400/60 group-hover:text-cyan-300 transition-colors">
                        →
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Drawer Footer with coordinate tag */}
        <div className="pt-4 border-t border-cyan-500/15 text-center">
          <div className="font-mono text-[11px] text-slate-500 tracking-[0.2em] uppercase select-none">
            {personal.coordinateTag || 'SOL-3 // DEV // 2026'}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileDrawer;
