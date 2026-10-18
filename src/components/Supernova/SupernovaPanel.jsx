import React, { useState } from 'react';
import { Terminal, Layers, Database, Cpu } from 'lucide-react';
import { SkillPill } from './SkillPill';
import { skillCategories } from '../../data/portfolioData';

const FILTER_TABS = [
  { id: 'all', label: 'All Clusters' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend & Graphics' },
  { id: 'backend', label: 'Backend & Data' },
  { id: 'devops', label: 'DevOps & Systems' },
];

const CATEGORY_ICONS = {
  languages: Terminal,
  frontend: Layers,
  backend: Database,
  devops: Cpu,
};

const BENTO_SPAN_MAP = {
  languages: 'lg:col-span-7',
  frontend: 'lg:col-span-5',
  backend: 'lg:col-span-5',
  devops: 'lg:col-span-7',
};

/**
 * SupernovaPanel Component
 * Skills & Technical Mastery
 * Features double-bezel bento architecture, gapless 12-column layout, and segmented filter pill.
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
      className="relative min-h-screen w-full py-32 md:py-48 px-4 sm:px-8 lg:px-16 overflow-hidden"
      aria-labelledby="supernova-heading"
    >
      {/* 1. Atmospheric backdrop subtle gradient */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(168,85,247,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      {/* 2. Panel Container */}
      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Section Header with Macro-Whitespace */}
        <header className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 text-[11px] font-mono tracking-[0.2em] text-white/70 mb-6 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            <span>TECHNICAL MASTERY</span>
            <span className="text-white/20">/</span>
            <span className="text-white/50">STELLAR FORMATION</span>
          </div>

          <h2
            id="supernova-heading"
            className="font-grotesk text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            SKILLS
          </h2>

          <p className="font-outfit text-base sm:text-lg font-light text-white/60 max-w-2xl mx-auto leading-relaxed">
            Core Skills Forged in High-Energy Problem Solving &amp; System Architecture
          </p>
        </header>

        {/* Floating Segmented Filter Bar */}
        <div
          className="flex justify-center mb-16"
          role="tablist"
          aria-label="Skill Categories"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/10 ring-1 ring-white/5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-grotesk px-4 sm:px-5 py-2 rounded-full text-xs sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white/15 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] border border-white/20 scale-[1.02]'
                      : 'text-white/50 hover:text-white/90 hover:bg-white/[0.04] border border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12-Column Gapless Bento Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 grid-flow-dense transition-all duration-500 ${
            activeTab !== 'all' ? 'max-w-3xl mx-auto' : ''
          }`}
        >
          {filteredCategories.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Terminal;
            const bentoSpan = activeTab === 'all' ? (BENTO_SPAN_MAP[category.id] || 'lg:col-span-6') : 'col-span-12';

            return (
              <div
                key={category.id}
                className={`col-span-1 ${bentoSpan} p-2.5 rounded-[2.25rem] bg-white/[0.03] border border-white/10 ring-1 ring-white/5 hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)] transition-all duration-500 group flex flex-col`}
              >
                <div className="rounded-[calc(2.25rem-0.625rem)] bg-[#070a18]/95 p-6 sm:p-8 border border-white/5 flex flex-col h-full relative overflow-hidden">
                  {/* Subtle ambient lighting */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-purple-500/10 transition-all duration-700"
                    aria-hidden="true"
                  />

                  {/* Cluster Header */}
                  <div className="flex items-start gap-4 mb-3 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 ring-1 ring-white/5 flex items-center justify-center flex-shrink-0 text-purple-300 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-lg sm:text-xl font-bold tracking-tight text-white">
                        {category.title}
                      </h3>
                      <p className="font-outfit text-sm font-light text-white/55 mt-1 leading-relaxed">
                        {category.desc}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-2 mt-6 relative z-10">
                    {category.skills.map((skill) => (
                      <SkillPill key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupernovaPanel;
