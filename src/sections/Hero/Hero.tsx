import React from 'react';
import { Link } from 'react-router-dom';
import ParticleNetwork from '../../components/ui/ParticleNetwork';

const Hero: React.FC = () => {
  return (
    <section className="relative text-center py-16 md:py-24 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white/30 to-transparent"></div>
        <ParticleNetwork />
      </div>
      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fcfcfd] to-transparent" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
        <div className="inline-block bg-white/80 backdrop-blur-sm text-indigo-700 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border border-indigo-100">
          Statistical Analysis with R · Cohort 12
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
          Statistical Analysis <br className="hidden md:block" /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">R for Research</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
          The ultimate guide to mastering data manipulation, statistical analysis, and publication-ready reporting with modern R.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
          <a href="https://docs.google.com/spreadsheets/d/19RdOnf8wdOgk1o3HMovmaNrh8Qmhmg72PCPUlxkPa68/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-all shadow-lg text-center">
            View Schedule
          </a>
          <Link to="/journey" className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white transition-all text-center shadow-sm">
            See Journey Map
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
