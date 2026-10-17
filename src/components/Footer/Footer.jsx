import React from 'react';
import { personal, navItems, contact } from '../../data/portfolioData';

/**
 * Footer Component
 * Sci-Fi grid telemetry footer featuring:
 * - Left: Astronaut helmet icon/emoji, brand name, cosmic motto
 * - Center: Quick navigation links to cosmic anchors, sector coordinates
 * - Right: Direct contact links (Email, GitHub, Facebook), dynamic copyright year
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = targetId;
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="site-footer relative z-20 w-full border-t border-[rgba(0,255,204,0.18)] bg-[#030308]/95 backdrop-blur-md overflow-hidden scanline-grid"
      role="contentinfo"
    >
      {/* Top ambient glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffcc]/60 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="footer-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          
          {/* ================= LEFT: Brand & Motto ================= */}
          <div className="space-y-4">
            <div className="footer-brand flex items-center gap-3">
              <span
                role="img"
                aria-label="Astronaut Helmet"
                className="text-2xl sm:text-3xl filter drop-shadow-[0_0_12px_rgba(0,255,204,0.7)] animate-pulse"
              >
                👨‍🚀
              </span>
              <div>
                <span className="font-['Orbitron'] text-lg sm:text-xl font-bold tracking-widest text-[#f4f8ff] glow-text-white block">
                  {personal.name}
                </span>
                <span className="font-['Share_Tech_Mono'] text-xs uppercase tracking-widest text-[#00ffcc] opacity-90 block">
                  {personal.coordinateTag || "SOL-3 // DEV // 2026"}
                </span>
              </div>
            </div>

            <p className="footer-motto font-['Rajdhani'] text-sm sm:text-base text-[#9ab0d6] max-w-sm leading-relaxed">
              {personal.footerMotto}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ffcc] animate-ping" />
              <span className="font-['Share_Tech_Mono'] text-xs text-[#00ffcc]/80 tracking-wider">
                CORE TELEMETRY BROADCAST ONLINE
              </span>
            </div>
          </div>

          {/* ================= CENTER: Quick Links & Sector Coordinates ================= */}
          <div className="space-y-6 flex flex-col items-start lg:items-center">
            <div className="w-full lg:max-w-xs">
              <span className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-[#ffaa00] block mb-3 pb-1 border-b border-[rgba(255,170,0,0.2)]">
                // NAVIGATION BEACONS
              </span>
              <nav aria-label="Footer Quick Links" className="quick-links grid grid-cols-2 gap-2.5">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                    className="qlink group flex items-center gap-2 text-xs sm:text-sm font-['Oxanium'] font-medium text-[#9ab0d6] hover:text-[#00ffcc] transition-colors py-1 focus:outline-none focus-visible:text-[#00ffcc]"
                  >
                    <span className="text-[10px] font-['Share_Tech_Mono'] text-[#00ffcc]/60 group-hover:text-[#00ffcc] transition-colors">
                      {item.code}
                    </span>
                    <span className="tracking-wide uppercase">
                      {item.label}
                    </span>
                    <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00ffcc]">
                      →
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Lat / Long Sector Coordinates */}
            <div className="w-full lg:max-w-xs p-3 rounded-lg bg-[#060714]/80 border border-[rgba(140,180,255,0.14)] shadow-[inset_0_0_12px_rgba(0,255,204,0.04)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00]" />
                <span className="font-['Orbitron'] text-[10px] font-semibold tracking-widest text-[#ffaa00] uppercase">
                  ORBITAL POSITION
                </span>
              </div>
              <div className="footer-coords font-['Share_Tech_Mono'] text-xs text-[#5de6ff] tracking-wider break-all select-all">
                {personal.latLong || "SECTOR: SOL-3 // LAT: 12.8797° N // LON: 121.7740° E"}
              </div>
            </div>
          </div>

          {/* ================= RIGHT: Quick Contacts & Copyright ================= */}
          <div className="space-y-6 lg:text-right flex flex-col items-start lg:items-end">
            <div className="w-full lg:max-w-xs">
              <span className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-[#b388ff] block mb-3 pb-1 border-b border-[rgba(179,136,255,0.2)]">
                // TRANSMISSION CHANNELS
              </span>
              <ul className="space-y-2 text-xs sm:text-sm font-['Oxanium']">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-[#9ab0d6] hover:text-[#00ffcc] transition-colors py-0.5 group focus:outline-none focus-visible:text-[#00ffcc]"
                    aria-label={`Send Email to ${contact.email}`}
                  >
                    <span className="text-[#00ffcc]/60 group-hover:text-[#00ffcc]">✉</span>
                    <span className="tracking-wide">{contact.email}</span>
                    <span className="text-[10px] opacity-75">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9ab0d6] hover:text-[#00ffcc] transition-colors py-0.5 group focus:outline-none focus-visible:text-[#00ffcc]"
                    aria-label="GitHub Profile (opens in new tab)"
                  >
                    <span className="text-[#00ffcc]/60 group-hover:text-[#00ffcc]">⌥</span>
                    <span className="tracking-wide">GitHub // {contact.githubHandle}</span>
                    <span className="text-[10px] opacity-75">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#9ab0d6] hover:text-[#00ffcc] transition-colors py-0.5 group focus:outline-none focus-visible:text-[#00ffcc]"
                    aria-label="Facebook Profile (opens in new tab)"
                  >
                    <span className="text-[#00ffcc]/60 group-hover:text-[#00ffcc]">◈</span>
                    <span className="tracking-wide">Facebook // Direct Comm</span>
                    <span className="text-[10px] opacity-75">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Back to top jump button */}
            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111538]/70 hover:bg-[#00ffcc]/15 border border-[rgba(140,180,255,0.25)] hover:border-[#00ffcc] text-xs font-['Share_Tech_Mono'] text-[#f4f8ff] hover:text-[#00ffcc] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ffcc]"
                aria-label="Back to top of singularity"
              >
                <span>RETURN TO SINGULARITY</span>
                <span className="text-sm">↑</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Clearance Notice */}
        <div className="mt-12 pt-6 border-t border-[rgba(140,180,255,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Share_Tech_Mono'] text-[#5c6e94]">
          <div className="copyright-notice text-center sm:text-left">
            © {currentYear} <span className="text-[#f4f8ff]">{personal.name}</span>. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-[#9ab0d6]/70">
            <span>SECURITY: QUANTUM-ENCRYPTED</span>
            <span>•</span>
            <span>CLEARANCE: LEVEL 5</span>
            <span>•</span>
            <span className="text-[#00ffcc]">VER 2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
