
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ModuleCard from './components/ModuleCard';
import CodeBlock from './components/CodeBlock';
import CheatsheetCard from './components/CheatsheetCard';
import ParticleNetwork from './components/ParticleNetwork';
import { COURSE_MODULES, TECH_STACK, CHEATSHEETS, MODULE_CATEGORIES } from './constants';
import { Module } from './types';
import { executeRCode } from './services/vizService';

const HomePage: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [runLogs, setRunLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleRunCode = async (code: string) => {
    setIsRunning(true);
    setError(null);
    setOutputImage(null);
    setRunLogs([]);

    const initialLogs = [
      "> Initializing R session...",
      "> Checking environment variables...",
      "> Loading library(ggplot2)...",
      "> Loading library(tidyverse)...",
      "> Reading dataset..."
    ];

    for (let i = 0; i < initialLogs.length; i++) {
      await new Promise(r => setTimeout(r, 100 + i * 50));
      setRunLogs(prev => [...prev, initialLogs[i]]);
    }

    try {
      const executionPromise = executeRCode(code);
      const logSteps = ["> Mapping aesthetics...", "> Rendering graphics..."];
      let logIndex = 0;
      const logInterval = setInterval(() => {
        if (logIndex < logSteps.length) {
          setRunLogs(prev => [...prev, logSteps[logIndex]]);
          logIndex++;
        } else {
          clearInterval(logInterval);
        }
      }, 400);

      const imageUrl = await executionPromise;
      clearInterval(logInterval);
      setOutputImage(imageUrl);
      setRunLogs(prev => [...prev, "> Plot generated successfully."]);
    } catch (err) {
      setError("Execution failed.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <>
    {/* Hero Section — full width, outside max-w container */}
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
          Statistical Analysis with R
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight leading-tight">
          Statistical Analysis <br className="hidden md:block" /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">R for Research</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
          The ultimate guide to mastering data manipulation, statistical analysis, and publication-ready reporting with modern R.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
          <a href="#curriculum" className="w-full sm:w-auto bg-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-all shadow-lg text-center">
            View Curriculum
          </a>
          <Link to="/journey" className="w-full sm:w-auto bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white transition-all text-center shadow-sm">
            See Journey Map
          </Link>
        </div>
      </div>
    </section>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

      {/* Package Ecosystem Section */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">The Tidyverse Ecosystem</h2>
          <p className="text-slate-500 text-sm md:text-base">Master the powerful tools used by modern data scientists.</p>
        </div>
        <div className="px-4 max-w-5xl mx-auto">
          {/* Workflow Steps */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3">
            {[
              { step: 'Import', icon: '/hex/logo-readr.png', pkg: 'readr', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
              { step: 'Tidy', icon: '/hex/logo-tidyr.png', pkg: 'tidyr', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
              { step: 'Transform', icon: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/dplyr.png', pkg: 'dplyr', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
              { step: 'Visualize', icon: '/hex/ggplot2_logo.png', pkg: 'ggplot2', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
              { step: 'Model', icon: '/hex/gtsummary_logo.png', pkg: 'gtsummary', color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
              { step: 'Communicate', icon: '/hex/quarto.png', pkg: 'Quarto', color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
            ].map((item, i, arr) => (
              <div key={item.step} className="relative flex flex-col items-center">
                {/* Connector arrow (hidden on first item and on mobile wraps) */}
                {i > 0 && (
                  <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className={`w-full ${item.bg} ${item.border} border rounded-2xl p-4 md:p-5 flex flex-col items-center group hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                  {/* Step number badge */}
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} text-white text-[10px] font-bold flex items-center justify-center mb-3 shadow-sm`}>
                    {i + 1}
                  </div>
                  {/* Package logo */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.pkg}
                      className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Step label */}
                  <span className={`text-xs font-bold ${item.text} uppercase tracking-wider mb-1`}>{item.step}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{item.pkg}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Flow description */}
          <div className="mt-8 text-center">
            <p className="text-slate-400 text-xs md:text-sm">
              Import data &rarr; Tidy its structure &rarr; Transform variables &rarr; Visualize patterns &rarr; Model relationships &rarr; Communicate results
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section id="curriculum" className="mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Learning Path</h2>
            <p className="text-slate-500 text-sm md:text-base">Go from data points to professional storytelling.</p>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16">
          {MODULE_CATEGORIES.map((category) => {
            const modules = COURSE_MODULES.filter(m => m.category === category);
            if (modules.length === 0) return null;
            return (
              <div key={category} className="px-4">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">{category}</h3>
                <div className="w-12 h-1 bg-indigo-500 rounded-full mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {modules.map((module) => (
                    <ModuleCard key={module.id} module={module} onSelect={setSelectedModule} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cheatsheets Section */}
      <section className="mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 px-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Cheatsheets</h2>
            <p className="text-slate-500 text-sm md:text-base">Quick-reference guides for the R ecosystem.</p>
          </div>
          <Link to="/cheatsheets" className="text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors flex items-center">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {CHEATSHEETS.slice(0, 6).map((cs) => (
            <CheatsheetCard key={cs.id} cheatsheet={cs} />
          ))}
        </div>
      </section>

      {/* Module Modal Overlay */}
      {selectedModule && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-5xl h-[95vh] sm:h-auto sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col animate-in slide-in-from-bottom duration-300">
            <div className="p-5 md:p-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="text-2xl md:text-3xl shrink-0">{selectedModule.icon}</div>
                <div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-900 line-clamp-1">{selectedModule.title}</h3>
                    <p className="text-[10px] md:text-sm text-slate-500 uppercase font-semibold tracking-wider">{selectedModule.level} • {selectedModule.duration}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedModule(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto custom-scrollbar p-5 md:p-8">
              <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
                  <div>
                    <h4 className="text-sm md:text-lg font-bold text-slate-800 mb-3 border-l-4 border-indigo-500 pl-3">Learning Content</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{selectedModule.content}</p>
                  </div>
                  <div>
                    <h4 className="text-sm md:text-lg font-bold text-slate-800 mb-3 border-l-4 border-emerald-500 pl-3">R Script</h4>
                    <CodeBlock code={selectedModule.codeExample} />
                    <button 
                      onClick={() => handleRunCode(selectedModule.codeExample)}
                      disabled={isRunning}
                      className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-bold shadow-lg flex items-center justify-center disabled:opacity-50"
                    >
                      {isRunning ? "Executing..." : "Run in Browser"}
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6 order-1 lg:order-2">
                  <div className="bg-slate-100 rounded-2xl md:rounded-3xl border border-slate-200 flex flex-col overflow-hidden min-h-[300px] md:min-h-[400px]">
                    <div className="px-4 py-2 bg-white border-b border-slate-200">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plot Result</span>
                    </div>
                    <div className="flex-grow flex items-center justify-center p-4 md:p-8 bg-white">
                      {outputImage ? <img src={outputImage} className="max-w-full max-h-full rounded-lg" /> : <p className="text-slate-300">Click Run to generate plot.</p>}
                    </div>
                  </div>
                  <div className="h-32 md:h-44 bg-slate-900 rounded-xl p-3 text-emerald-400 font-mono text-[10px] overflow-y-auto">
                    {runLogs.map((log, i) => <div key={i}>{log}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

const JourneyPage: React.FC = () => {
  let globalIndex = 0;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 px-4">The Journey Map</h1>
      <div className="space-y-12 md:space-y-16 px-4">
        {MODULE_CATEGORIES.map((category) => {
          const modules = COURSE_MODULES.filter(m => m.category === category);
          if (modules.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{category}</h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mb-8"></div>
              <div className="relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-indigo-100 hidden sm:block"></div>
                <div className="space-y-8 md:space-y-12">
                  {modules.map((module) => {
                    globalIndex++;
                    const num = globalIndex;
                    return (
                      <div key={module.id} className="relative flex items-start space-x-4 md:space-x-8">
                        <div className="z-10 bg-indigo-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shrink-0">
                          {num}
                        </div>
                        <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{module.title}</h3>
                            <span className="self-start text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full">
                              Module {num}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm md:text-base mb-4 max-w-2xl leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CheatsheetsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Cheatsheets</h1>
        <p className="text-slate-500 text-sm md:text-base">Quick-reference guides for the R ecosystem. View or download any cheatsheet.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {CHEATSHEETS.map((cs) => (
          <CheatsheetCard key={cs.id} cheatsheet={cs} />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/cheatsheets" element={<CheatsheetsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
