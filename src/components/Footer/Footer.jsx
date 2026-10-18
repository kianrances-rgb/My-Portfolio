import React from 'react';
import { Mail, Github, Facebook, ArrowUpRight, ArrowUp } from 'lucide-react';
import { personal, navItems, contact } from '../../data/portfolioData';

/**
 * Footer Component
 * Architectural galactic footer with macro-whitespace, clean hairline borders,
 * and button-in-button jump anchor.
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
      className="relative z-20 w-full border-t border-white/10 bg-[#030308] overflow-hidden"
      role="contentinfo"
    >
      {/* Top subtle hairline glow */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Brand & Motto */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,204,0.8)]" />
              <div>
                <span className="font-grotesk text-xl font-bold tracking-tight text-white block">
                  {personal.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 block mt-0.5">
                  {personal.coordinateTag || 'SOL-3 // DEV // 2026'}
                </span>
              </div>
            </div>

            <p className="font-outfit text-sm text-white/50 max-w-sm leading-relaxed">
              {personal.footerMotto}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="font-mono text-xs text-white/40 tracking-wider">
                CORE TELEMETRY BROADCAST ONLINE
              </span>
            </div>
          </div>

          {/* Navigation Beacons */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 block pb-2 border-b border-white/5">
              NAVIGATION
            </span>
            <nav aria-label="Footer Quick Links" className="grid grid-cols-1 gap-2.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                  className="group flex items-center justify-between font-grotesk text-sm text-white/60 hover:text-white transition-colors py-1"
                >
                  <span className="tracking-wide">
                    {item.label}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </nav>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-4 space-y-5 lg:text-right flex flex-col items-start lg:items-end">
            <div className="w-full">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 block pb-2 border-b border-white/5 mb-4">
                CHANNELS
              </span>
              <ul className="space-y-3 font-grotesk text-sm">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    aria-label={`Send Email to ${contact.email}`}
                  >
                    <Mail className="w-4 h-4 text-white/30 group-hover:text-cyan-300 transition-colors" />
                    <span>{contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    <span>GitHub {contact.githubHandle}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                    aria-label="Facebook Profile"
                  >
                    <Facebook className="w-4 h-4 text-white/30 group-hover:text-blue-400 transition-colors" />
                    <span>Facebook Profile</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Return to Singularity */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] text-xs font-grotesk font-medium uppercase tracking-wider text-white transition-all cursor-pointer group"
                aria-label="Return to singularity"
              >
                <span>Return to Top</span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUp className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright Notice */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            &copy; {currentYear} <span className="text-white/80">{personal.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-white/40">
            <span>SECURE TELEMETRY</span>
            <span>&bull;</span>
            <span className="text-cyan-400">STATUS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
