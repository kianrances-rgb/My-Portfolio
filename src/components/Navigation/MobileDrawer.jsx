import React, { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { navItems, personal } from '../../data/portfolioData';

/**
 * MobileDrawer Component
 * Modern glass navigation drawer for mobile and tablet viewports.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether drawer is visible
 * @param {() => void} props.onClose - Callback to close drawer
 * @param {string} props.activeSection - Current active section id
 * @param {(sectionId: string) => void} [props.onNavigate] - Navigation handler callback
 */
export function MobileDrawer({ isOpen, onClose, activeSection = 'intro', onNavigate }) {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

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
      aria-label="Sector Navigation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#03040c]/85 backdrop-blur-xl transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in Glass Panel */}
      <aside
        className={`absolute top-0 right-0 h-full w-[85%] max-w-[340px] bg-[#060814]/95 border-l border-white/10 shadow-[-20px_0_60px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out z-[9999] backdrop-blur-3xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]" />
              <h2 className="font-mono text-xs tracking-[0.2em] text-white/80 uppercase font-semibold">
                NAVIGATION
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all flex items-center justify-center cursor-pointer"
              aria-label="Close Navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleItemClick(e, item.id)}
                      className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 font-grotesk text-sm font-medium tracking-wide ${
                        isActive
                          ? 'bg-white/10 border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.06)]'
                          : 'border border-transparent text-white/60 hover:text-white hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all ${
                            isActive
                              ? 'bg-cyan-400 shadow-[0_0_8px_rgba(0,255,204,0.8)]'
                              : 'bg-transparent'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 text-center">
          <div className="font-mono text-[10px] text-white/40 tracking-[0.2em] uppercase">
            {personal.coordinateTag || 'SOL-3 // DEV // 2026'}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MobileDrawer;
