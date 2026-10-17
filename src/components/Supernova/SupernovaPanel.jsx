import React, { useState } from 'react';
import { NeutronStar } from './NeutronStar';
import { SkillPill } from './SkillPill';
import { skillCategories } from '../../data/portfolioData';

const FILTER_TABS = [
  { id: 'all', label: 'ALL ENERGIES' },
  { id: 'languages', label: 'LANGUAGES' },
  { id: 'frontend', label: 'FRONTEND & GRAPHICS' },
  { id: 'backend', label: 'BACKEND & DATA' },
  { id: 'devops', label: 'DEVOPS & SYSTEMS' },
];

/**
 * SupernovaPanel Component
 * Sector 02 // Stellar Detonation: Technical Mastery & Core Skills
 * Houses the revolving Neutron Star simulation, filter bar, and skill clusters.
 */
export function SupernovaPanel() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section
      id="supernova"
      className="cosmic-panel supernova-panel relative min-h-screen w-full py-24 px-4 sm:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="supernova-heading"
    >
      {/* 1. Atmospheric backdrop glow */}
      <div
        className="panel-atmosphere supernova-backdrop absolute inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* 2. Revolving Neutron Star HD Graphics & Physics Simulation Canvas */}
      <NeutronStar />

      {/* 3. Panel Container */}
      <div className="panel-container relative max-w-7xl mx-auto w-full z-[2]">
        {/* Section Header */}
        <header className="panel-header text-center mb-10 relative">
          <div className="panel-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0a0f23]/80 border border-purple-500/30 text-xs tracking-[0.16em] mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(179,136,255,0.15)]">
            <span className="sector-code font-mono text-[#b388ff] font-semibold">
              SECTOR 02 // STELLAR DETONATION
            </span>
            <span className="badge-accent text-slate-400 font-medium">
              TECHNICAL MASTERY
            </span>
          </div>

          <h2
            id="supernova-heading"
            className="panel-title font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.16em] uppercase text-white mb-3 text-shadow-[0_4px_18px_rgba(0,0,0,0.9)] drop-shadow-[0_0_25px_rgba(179,136,255,0.25)]"
          >
            THE “SUPERNOVA” PANEL
          </h2>

          <p className="panel-subtitle font-body text-base sm:text-lg font-medium tracking-[0.03em] text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Core Skills Forged in High-Energy Problem Solving &amp; System Architecture
          </p>
        </header>

        {/* Skill Filter Navigation Bar */}
        <div
          className="skill-filter-bar flex flex-wrap justify-center gap-3 mb-10"
          role="tablist"
          aria-label="Skill Categories"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`skill-tab-btn font-primary px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'active bg-gradient-to-r from-[#3d2568] to-[#683db8] text-white border-2 border-[#b388ff] shadow-[0_0_20px_rgba(179,136,255,0.45)] scale-105'
                    : 'bg-[#0a0e20]/70 text-slate-400 border border-[#8cb4ff]/15 hover:text-white hover:border-[#8cb4ff]/40 hover:bg-[#121838]/80'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Grid */}
        <div
          id="skills-grid"
          className={`skills-grid transition-all duration-300 ${
            activeTab !== 'all' ? 'has-filter' : ''
          }`}
        >
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="skill-cluster-card flex flex-col h-full bg-[#080c1c]/75 border border-[#8cb4ff]/15 rounded-xl p-6 backdrop-blur-md hover:bg-[#101834]/85 hover:border-[#b388ff]/40 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(100,50,180,0.25)] transition-all duration-300"
              data-category={category.id}
            >
              <div className="cluster-header flex items-center gap-2.5 mb-2.5">
                <span
                  className="cluster-icon text-xl text-[#b388ff] flex-shrink-0"
                  aria-hidden="true"
                >
                  {category.icon}
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold tracking-wide uppercase text-white leading-snug">
                  {category.title}
                </h3>
              </div>

              <p className="cluster-desc font-body text-sm font-medium text-slate-300 mb-4 leading-relaxed">
                {category.desc}
              </p>

              <div className="skill-tags-list flex flex-col gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <SkillPill key={skill} name={skill} level="INTERMEDIATE" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupernovaPanel;
