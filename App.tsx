
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ModuleCard from './components/ModuleCard';
import CheatsheetCard from './components/CheatsheetCard';
import ParticleNetwork from './components/ParticleNetwork';
import { COURSE_MODULES, TECH_STACK, CHEATSHEETS, MODULE_CATEGORIES } from './constants';



const HomePage: React.FC = () => {

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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Your Data Analysis Workflow</h2>
          <p className="text-slate-500 text-sm md:text-base">A step-by-step pipeline from raw data to polished results — using the most popular R packages.</p>
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

      {/* Who Is This For Section */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-10 md:mb-14 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Who Is This Course For?</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">If you work with data and want to level up your research, this course is built for you. No prior programming or statistics experience required.</p>
        </div>

        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
                title: 'Graduate Students & PhD Researchers',
                desc: 'Working on a thesis or dissertation that involves quantitative data? Learn to analyze, visualize, and present your findings with confidence.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />,
                title: 'Faculty & University Lecturers',
                desc: 'Strengthen your research publications with reproducible analyses, professional-grade tables, and journal-ready figures.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
                title: 'Public Health & Clinical Researchers',
                desc: 'Analyze survey data, clinical trials, and epidemiological datasets. Create publication-ready summary tables in minutes.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />,
                title: 'Bioinformaticians & Data Analysts',
                desc: 'Master ggplot2 for omics data visualization, build automated pipelines, and communicate complex results clearly.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />,
                title: 'Self-Learners & Career Switchers',
                desc: 'No prior R experience needed. Start from the basics and build real-world skills that employers and journals value.',
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />,
                title: 'Anyone Passionate About Research',
                desc: 'Whether in biology, social science, agriculture, or environmental science — if your work involves data, this course will transform how you do research.',
              },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="mb-20 md:mb-32 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
              Live Classes
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Class Schedule</h2>
            <p className="text-slate-500 text-sm md:text-base">Two live sessions every week — designed to fit your evening routine.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Friday */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">Friday</h3>
                  <p className="text-slate-500 text-sm">9:00 PM — 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-violet-50 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">Saturday</h3>
                  <p className="text-slate-500 text-sm">9:00 PM — 11:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary line */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              2 classes/week &bull; 2 hours/class &bull; 4 hours of live learning every week
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
                    <ModuleCard key={module.id} module={module} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Packages Section */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Packages We Cover</h2>
          <p className="text-slate-500 text-sm md:text-base">The R ecosystem tools you'll master throughout this journey.</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 px-4">
          {[
            { src: '/hex/tidyverse.svg', name: 'tidyverse', url: 'https://www.tidyverse.org/' },
            { src: '/hex/ggplot2_logo.png', name: 'ggplot2', url: 'https://ggplot2.tidyverse.org/' },
            { src: '/hex/tidyplots_logo.png', name: 'tidyplots', url: 'https://jbengler.github.io/tidyplots/' },
            { src: '/hex/ggsci_logo.png', name: 'ggsci', url: 'https://nanx.me/ggsci/' },
            { src: '/hex/pathwork_logo.svg', name: 'patchwork', url: 'https://patchwork.data-imaginist.com/' },
            { src: '/hex/plotly2.png', name: 'plotly', url: 'https://plotly.com/r/' },
            { src: '/hex/logo-tidyr.png', name: 'tidyr', url: 'https://tidyr.tidyverse.org/' },
            { src: '/hex/logo-readr.png', name: 'readr', url: 'https://readr.tidyverse.org/' },
            { src: '/hex/logo-stringr.png', name: 'stringr', url: 'https://stringr.tidyverse.org/' },
            { src: '/hex/logo-lubridate.png', name: 'lubridate', url: 'https://lubridate.tidyverse.org/' },
            { src: '/hex/logo-gt.png', name: 'gt', url: 'https://gt.rstudio.com/' },
            { src: '/hex/gtsummary_logo.png', name: 'gtsummary', url: 'https://www.danieldsjoberg.com/gtsummary/' },
            { src: '/hex/logo-shiny.png', name: 'shiny', url: 'https://shiny.posit.co/' },
            { src: '/hex/quarto.png', name: 'Quarto', url: 'https://quarto.org/' },
          ].map((pkg) => (
            <a key={pkg.name} href={pkg.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
              <img
                src={pkg.src}
                alt={`${pkg.name} hex sticker`}
                className="w-16 h-20 sm:w-20 sm:h-23 md:w-24 md:h-28 object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1"
              />
              <span className="mt-1.5 text-[10px] sm:text-xs font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">{pkg.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Scientific Journal Color Palettes */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Scientific Journal Color Palettes</h2>
          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
            Use publication-standard colors from top journals with <a href="https://nanx.me/ggsci/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">ggsci</a> — one line of code to match any journal's style.
          </p>
        </div>
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              { name: 'NPG', full: 'Nature Publishing Group', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-npg-1.png' },
              { name: 'AAAS', full: 'Science (AAAS)', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-aaas-1.png' },
              { name: 'NEJM', full: 'New England Journal of Medicine', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-nejm-1.png' },
              { name: 'Lancet', full: 'The Lancet', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-lancet-1.png' },
              { name: 'JAMA', full: 'Journal of the American Medical Association', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-jama-1.png' },
              { name: 'JCO', full: 'Journal of Clinical Oncology', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-jco-1.png' },
              { name: 'BMJ', full: 'British Medical Journal', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-bmj-1.png' },
              { name: 'Frontiers', full: 'Frontiers Journals', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-frontiers-1.png' },
              { name: 'D3', full: 'D3.js Visualization', img: 'https://nanx.me/ggsci/reference/figures/README-ggsci-d3-1.png' },
            ].map((palette) => (
              <div key={palette.name} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                <div className="aspect-[2/1] bg-slate-50 overflow-hidden">
                  <img
                    src={palette.img}
                    alt={`${palette.name} color palette preview`}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 sm:p-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{palette.name}</h3>
                      <p className="text-[10px] sm:text-xs text-slate-400">{palette.full}</p>
                    </div>
                    <code className="text-[10px] font-mono text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">scale_color_{palette.name.toLowerCase()}()</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://nanx.me/ggsci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Explore all 28+ palettes
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Publication-Ready Tables Section — Full-width cinematic */}
      </div>
      <section className="mb-20 md:mb-32 bg-slate-950 py-16 md:py-24 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        {/* Glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-indigo-500/10 text-indigo-300 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-500/20">
              From Data to Publication
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Publication-Ready Tables
            </h2>
            <p className="text-slate-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Create journal-quality summary and regression tables in seconds with <code className="text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded text-xs md:text-sm font-mono font-semibold">gtsummary</code>
            </p>
          </div>

          {/* GIF Showcases */}
          <div className="space-y-10 md:space-y-14">
            {/* Summary Table */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Descriptive Summary Table</h3>
                  <p className="text-xs text-slate-500">tbl_summary() — demographics, clinical variables & more</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/40 group-hover:border-slate-700 transition-colors duration-300">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono ml-2">tbl_summary_demo.R</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/10] bg-white">
                  <img
                    src="/workflow/tbl_summary_demo1.gif"
                    alt="tbl_summary demo — creating publication-ready summary tables"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Regression Table */}
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-400"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Regression Results Table</h3>
                  <p className="text-xs text-slate-500">tbl_regression() — model summaries with confidence intervals</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/40 group-hover:border-slate-700 transition-colors duration-300">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2 border-b border-slate-800">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono ml-2">tbl_regression_demo.R</span>
                </div>
                <div className="aspect-[4/3] sm:aspect-[16/10] bg-white">
                  <img
                    src="/workflow/tbl_mvregression_demo.gif"
                    alt="tbl_regression demo — creating publication-ready regression tables"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Export formats bar */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
            {[
              { label: 'Word', icon: 'W' },
              { label: 'PDF', icon: 'P' },
              { label: 'HTML', icon: 'H' },
              { label: 'LaTeX', icon: 'L' },
            ].map((fmt) => (
              <div key={fmt.label} className="flex items-center justify-center gap-2 bg-slate-800/60 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-700/50">
                <div className="w-6 h-6 rounded-md bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-[10px] font-bold">{fmt.icon}</div>
                <span className="text-sm text-slate-300 font-medium">{fmt.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-600 mt-4">Export to any format — ready for journal submission without copy-pasting.</p>
        </div>
      </section>
      {/* Publication-Ready Figures Section */}
      <section className="mb-20 md:mb-32 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-violet-100/40 rounded-full blur-[100px]"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
              What You'll Learn to Build
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Publication-Ready Figures
            </h2>
            <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Master 35+ chart types across 7 categories — from simple bar charts to advanced network visualizations.
            </p>
          </div>

          <div>
            {[
              { category: 'Distribution', plots: [
                { name: 'Violin', img: 'https://r-graph-gallery.com/img/section/Violin150.png' },
                { name: 'Density', img: 'https://r-graph-gallery.com/img/section/Density150.png' },
                { name: 'Histogram', img: 'https://r-graph-gallery.com/img/section/Histogram150.png' },
                { name: 'Boxplot', img: 'https://r-graph-gallery.com/img/section/Box1150.png' },
                { name: 'Ridgeline', img: 'https://r-graph-gallery.com/img/section/Joyplot150.png' },
              ]},
              { category: 'Correlation', plots: [
                { name: 'Scatter', img: 'https://r-graph-gallery.com/img/section/ScatterPlot150.png' },
                { name: 'Heatmap', img: 'https://r-graph-gallery.com/img/section/Heatmap150.png' },
                { name: 'Correlogram', img: 'https://r-graph-gallery.com/img/section/Correlogram150.png' },
                { name: 'Bubble', img: 'https://r-graph-gallery.com/img/section/BubblePlot150.png' },
                { name: '2D Density', img: 'https://r-graph-gallery.com/img/section/2dDensity150.png' },
              ]},
              { category: 'Ranking', plots: [
                { name: 'Barplot', img: 'https://r-graph-gallery.com/img/section/Bar150.png' },
                { name: 'Lollipop', img: 'https://r-graph-gallery.com/img/section/Lollipop150.png' },
                { name: 'Spider', img: 'https://r-graph-gallery.com/img/section/Spider150.png' },
                { name: 'Parallel', img: 'https://r-graph-gallery.com/img/section/Parallel1150.png' },
                { name: 'Circular Bar', img: 'https://r-graph-gallery.com/img/section/CircularBarplot150.png' },
              ]},
              { category: 'Part of a Whole', plots: [
                { name: 'Stacked Bar', img: 'https://r-graph-gallery.com/img/section/GroupedRed150.png' },
                { name: 'Treemap', img: 'https://r-graph-gallery.com/img/section/Tree150.png' },
                { name: 'Donut', img: 'https://r-graph-gallery.com/img/section/Doughnut150.png' },
                { name: 'Pie Chart', img: 'https://r-graph-gallery.com/img/section/Pie150.png' },
                { name: 'Waffle', img: 'https://r-graph-gallery.com/img/section/Waffle2150.png' },
              ]},
              { category: 'Evolution', plots: [
                { name: 'Line Plot', img: 'https://r-graph-gallery.com/img/section/Line150.png' },
                { name: 'Area', img: 'https://r-graph-gallery.com/img/section/Area150.png' },
                { name: 'Stacked Area', img: 'https://r-graph-gallery.com/img/section/StackedArea150.png' },
                { name: 'Stream', img: 'https://r-graph-gallery.com/img/section/Stream150.png' },
                { name: 'Time Series', img: 'https://r-graph-gallery.com/img/section/Time150.gif' },
              ]},
              { category: 'Map', plots: [
                { name: 'Choropleth', img: 'https://r-graph-gallery.com/img/section/Choropleth150.png' },
                { name: 'Hexbin Map', img: 'https://r-graph-gallery.com/img/section/MapHexbin150.png' },
                { name: 'Cartogram', img: 'https://r-graph-gallery.com/img/section/Cartogram150.png' },
                { name: 'Connection', img: 'https://r-graph-gallery.com/img/section/ConnectedMap150.png' },
                { name: 'Bubble Map', img: 'https://r-graph-gallery.com/img/section/BubbleMap150.png' },
              ]},
              { category: 'Flow', plots: [
                { name: 'Chord', img: 'https://r-graph-gallery.com/img/section/Chord150.png' },
                { name: 'Network', img: 'https://r-graph-gallery.com/img/section/Network150.png' },
                { name: 'Sankey', img: 'https://r-graph-gallery.com/img/section/Sankey150.png' },
                { name: 'Arc Diagram', img: 'https://r-graph-gallery.com/img/section/Arc150.png' },
                { name: 'Edge Bundling', img: 'https://r-graph-gallery.com/img/section/Bundle150.png' },
              ]},
            ].map((group) => (
              <div key={group.category} className="mb-6 md:mb-8">
                <h4 className="text-sm md:text-base font-bold text-slate-700 mb-3 md:mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  {group.category}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4">
                  {group.plots.map((plot) => (
                    <div key={plot.name} className="bg-white rounded-xl border border-slate-200 p-3 md:p-4 hover:shadow-lg hover:border-indigo-200 transition-all text-center group/plot">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center group-hover/plot:scale-105 transition-transform">
                        <img src={plot.img} alt={plot.name} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <p className="text-[11px] md:text-xs font-semibold text-slate-600">{plot.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Reproducible Research Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-20 md:mb-32">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Reproducible Research</h2>
            <p className="text-slate-500 text-sm md:text-base">From raw data to published results — master the modern R workflow and publish with Quarto.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <h3 className="text-sm font-bold text-slate-900">Tidyverse Workflow</h3>
              </div>
              <div className="p-4 bg-slate-50/50">
                <img
                  src="/workflow/tidyverse-package-workflow.png"
                  alt="Tidyverse package workflow — import, tidy, transform, visualize, model, communicate"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <h3 className="text-sm font-bold text-slate-900">Quarto Publishing</h3>
              </div>
              <div className="p-4 bg-slate-50/50 flex items-center justify-center">
                <img
                  src="/workflow/quarto-illustration.png"
                  alt="Quarto — from R, Python, and more to HTML, PDF, and Word"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tidyplots Use Cases Showcase */}
      <section className="mb-20 md:mb-32 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
              Powered by tidyplots
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Real-World Visualization Use Cases
            </h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
              From research papers to data journalism — see what you can create with just a few lines of R code using <a href="https://tidyplots.org/use-cases/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">tidyplots</a>.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-3-1.png', title: 'Scatter Plot', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-4-1.png', title: 'Stacked Bar Chart', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-6-1.png', title: 'Boxplot with Beeswarm', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-8-1.png', title: 'Time Course Plot', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-10-1.png', title: 'Violin Plot', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-11-1.png', title: 'Donut Chart', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-14-1.png', title: 'Heatmap', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-16-1.png', title: 'Line with Error Bars', cat: 'General' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-26-1.png', title: 'Volcano Plot', cat: 'Bioinformatics' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-27-1.png', title: 'PCA Plot', cat: 'Bioinformatics' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-28-1.png', title: 'Correlation Matrix', cat: 'Bioinformatics' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-30-1.png', title: 'Gene Expression Heatmap', cat: 'Bioinformatics' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-31-1.png', title: 'Hypothesis Testing', cat: 'Bioinformatics' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-36-1.png', title: 'Trend Analysis', cat: 'Data Journalism' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-38-1.png', title: 'Faceted Donuts', cat: 'Data Journalism' },
              { src: 'https://tidyplots.org/use-cases/use_cases_files/figure-html/unnamed-chunk-40-1.png', title: 'Per Capita Comparison', cat: 'Data Journalism' },
            ].map((item) => (
              <div key={item.src} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-slate-50">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 md:p-4 border-t border-slate-100">
                  <h3 className="text-xs md:text-sm font-bold text-slate-800 truncate">{item.title}</h3>
                  <span className="text-[10px] text-indigo-500 font-semibold">{item.cat}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://tidyplots.org/use-cases/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Explore All Use Cases
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Previous Cohorts Section */}
      <section className="mb-20 md:mb-32">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Previous Cohorts</h2>
          <p className="text-slate-500 text-sm md:text-base">Watch recordings from our past sessions to see what you can expect.</p>
        </div>
        <div className="px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'dQhZjmw9BK0',
              'f4AK5aPhGf4',
              'JaElBhgyE8k',
              'LTvulssY4iA',
              'InUrKYEeYUU',
              'mIKJv6ZuUfU',
              '99bZpIJ_uZ0',
              '-I1mLzwpihc',
            ].map((id, i) => (
              <div key={id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Previous Cohort Session ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profile Section */}
      <section id="instructor" className="mb-20 md:mb-32">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Meet Your Instructor</h2>
          <p className="text-slate-500 text-sm md:text-base">Learn from an expert in computational biology and bioinformatics.</p>
        </div>

        <div className="px-4">
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Decorative gradient bar */}
            <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"></div>

            <div className="p-5 sm:p-6 md:p-10 lg:p-12">
              {/* Top: Photo + Name + Roles */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-10 mb-6 sm:mb-8 md:mb-10">
                {/* Profile Image */}
                <div className="shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-lg">
                      <img
                        src="/profile/jubayer.png"
                        alt="Md. Jubayer Hossain"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Status dot */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-sm"></div>
                  </div>
                </div>

                {/* Name & Titles */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">Md. Jubayer Hossain</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Founder & CEO, DeepBio Limited
                    </span>
                    <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100">
                      Founder & Executive Director, CHIRAL Bangladesh
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
                    Bioinformatics researcher with extensive experience in transcriptomics data analysis and machine learning applications in healthcare. He holds BSc and MSc degrees in Microbiology from Jagannath University, Dhaka, Bangladesh.
                  </p>
                  <a href="https://bio.link/hossainlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    bio.link/hossainlab
                  </a>
                </div>
              </div>

              {/* About */}
              <div className="mb-8 md:mb-10">
                <div className="bg-slate-50 rounded-2xl p-5 md:p-8 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    About
                  </h4>
                  <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-3">
                    <p>
                      As the Founder and CEO of DeepBio Limited, he leads innovative projects at the intersection of artificial intelligence and biological data analysis. He also serves as the Founder and Executive Director of CHIRAL Bangladesh, a non-profit organization dedicated to advancing computational research in life sciences.
                    </p>
                    <p>
                      Currently, he works as a Visiting Scholar at the Department of Public Health, Daffodil International University, and leads bioinformatics and machine learning programs at cBLAST (Center for Bioinformatics Learning Advancement and Systematic Training), University of Dhaka. His research focuses on applying AI and machine learning techniques to health data, including omics data and neuroimaging, to discover biomarkers and develop predictive models for cancer and neurological disorders.
                    </p>
                    <p>
                      With a passion for making complex computational methods accessible to biologists, Md. Jubayer has developed comprehensive training programs that bridge the gap between traditional biology and modern computational approaches. He specializes in visualizing complex biological data for clinical interpretation and has contributed to numerous research projects in transcriptomics, genomics, and precision medicine.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Areas + Teaching Philosophy Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Research Areas */}
                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 md:p-8 border border-indigo-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Research Areas
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      'Transcriptomics and Gene Expression Analysis',
                      'Single-Cell RNA Sequencing Data Analysis',
                      'Machine Learning Applications in Healthcare',
                      'Biomarker Discovery for Cancer and Neurological Disorders',
                      'AI-Driven Precision Medicine',
                      'Bioinformatics Education and Training',
                    ].map((area) => (
                      <div key={area} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                        <span className="text-sm text-slate-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teaching Philosophy */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 md:p-8 border border-amber-100">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Teaching Philosophy
                  </h4>
                  <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed italic">
                    <span className="text-3xl text-amber-300 font-serif leading-none mr-1">"</span>
                    My goal is to demystify bioinformatics and computational biology. I believe that with the right guidance and hands-on practice, any biologist can become proficient in data analysis. This course is designed to be a bridge, empowering you to take control of your data, ask more ambitious questions, and accelerate your research. I focus on building a strong conceptual foundation before diving into the code, ensuring you understand not just 'how' but also 'why'.
                    <span className="text-3xl text-amber-300 font-serif leading-none ml-1">"</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
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

      {/* How to Enroll */}
      <section className="mb-20 md:mb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
              Simple & Quick
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">How to Enroll</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">Three simple steps to secure your spot in the next cohort.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200"></div>

            {/* Step 1: Payment */}
            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">1</div>
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Send Payment</h3>
              <p className="text-sm text-slate-500 mb-4">Transfer the course fee to our bank account using any of these methods:</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <span className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-lg text-xs font-bold border border-pink-100">bKash</span>
                <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold border border-purple-100">Rocket</span>
                <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-xs font-bold border border-orange-100">Nagad</span>
              </div>
            </div>

            {/* Step 2: Form */}
            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">2</div>
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Fill the Enrollment Form</h3>
              <p className="text-sm text-slate-500 mb-4">Complete the Google Form with your details and payment confirmation.</p>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Takes less than 2 minutes
              </div>
            </div>

            {/* Step 3: Confirmation */}
            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">3</div>
              <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Get Access</h3>
              <p className="text-sm text-slate-500 mb-4">After payment verification, you'll receive the private Telegram group link within 72 hours.</p>
              <div className="flex items-center justify-center gap-2 text-xs text-indigo-500 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Private Telegram Group
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mb-20 md:mb-32 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Invest in Your Research Career</h2>
          <p className="text-slate-500 text-sm md:text-base">Limited-time launch offer — secure your spot before the discount expires.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-white rounded-3xl border-2 border-indigo-200 shadow-xl overflow-hidden">
            {/* Limited offer banner */}
            <div className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 text-white text-center py-2.5 px-4">
              <p className="text-xs md:text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                50% OFF — Limited Time Only
              </p>
            </div>

            {/* Badge */}
            <div className="hidden sm:block absolute top-14 -right-8 bg-amber-400 text-amber-900 text-[10px] font-bold uppercase tracking-wider px-10 py-1 rotate-45 shadow-sm">
              Best Value
            </div>

            <div className="p-6 md:p-10">
              {/* Plan name */}
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Complete Course Access</h3>
                <p className="text-sm text-slate-500">Everything you need to master R for research</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-slate-400 line-through font-semibold">৳10,200</span>
                  <span className="bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full text-xs font-bold border border-red-100">SAVE 50%</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900">৳5,100</span>
                  <span className="text-slate-400 text-sm font-medium">BDT</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">One-time payment, lifetime access</p>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                {[
                  'Full access to all course modules',
                  'Hands-on R code examples & datasets',
                  'Publication-ready tables & figures',
                  'Cheatsheets & quick-reference guides',
                  'Certificate of completion',
                  'Access to future updates',
                  'Community support & Q&A',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="#"
                className="block w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg shadow-indigo-200 active:scale-[0.98]"
              >
                Enroll Now — ৳5,100
              </a>

              {/* Trust signals */}
              <div className="mt-5 flex items-center justify-center gap-4 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secure payment
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Join 100+ researchers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                      <div key={module.id} className="relative flex items-start space-x-3 sm:space-x-4 md:space-x-8">
                        <div className="z-10 bg-indigo-600 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl shadow-lg shrink-0">
                          {num}
                        </div>
                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex-grow min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900">{module.title}</h3>
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

const InstructorPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      {/* Hero Card */}
      <div className="relative bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-10">
        {/* Decorative gradient */}
        <div className="h-28 sm:h-32 md:h-44 bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600 relative">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="px-6 md:px-10 pb-8 md:pb-10">
          {/* Photo overlapping the gradient */}
          <div className="-mt-16 md:-mt-20 mb-5 flex flex-col md:flex-row items-center md:items-end gap-5">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl shrink-0">
              <img
                src="/profile/jubayer.png"
                alt="Md. Jubayer Hossain"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left md:pb-1">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Md. Jubayer Hossain</h1>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Founder & CEO, DeepBio Limited
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-100">
                  Founder & Executive Director, CHIRAL Bangladesh
                </span>
              </div>
              <a href="https://bio.link/hossainlab" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                bio.link/hossainlab
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 mb-8">
            <p>
              Md. Jubayer Hossain is a computational biologist and bioinformatics researcher with extensive experience in transcriptomics data analysis and machine learning applications in healthcare. He holds BSc and MSc degrees in Microbiology from Jagannath University, Dhaka, Bangladesh.
            </p>
            <p>
              As the Founder and CEO of DeepBio Limited, he leads innovative projects at the intersection of artificial intelligence and biological data analysis. He also serves as the Founder and Executive Director of CHIRAL Bangladesh, a non-profit organization dedicated to advancing computational research in life sciences.
            </p>
            <p>
              Currently, he works as a Visiting Scholar at the Department of Public Health, Daffodil International University, and leads bioinformatics and machine learning programs at cBLAST (Center for Bioinformatics Learning Advancement and Systematic Training), University of Dhaka. His research focuses on applying AI and machine learning techniques to health data, including omics data and neuroimaging, to discover biomarkers and develop predictive models for cancer and neurological disorders.
            </p>
            <p>
              With a passion for making complex computational methods accessible to biologists, Md. Jubayer has developed comprehensive training programs that bridge the gap between traditional biology and modern computational approaches. He specializes in visualizing complex biological data for clinical interpretation and has contributed to numerous research projects in transcriptomics, genomics, and precision medicine.
            </p>
            <p>
              His teaching philosophy centers on building strong conceptual foundations before diving into technical implementations, ensuring that students understand both the 'how' and 'why' of computational biology methods.
            </p>
          </div>

          {/* Grid: Research Areas + Teaching Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Research Areas */}
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-5 md:p-8 border border-indigo-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Research Areas
              </h3>
              <div className="space-y-2.5">
                {[
                  'Transcriptomics and Gene Expression Analysis',
                  'Single-Cell RNA Sequencing Data Analysis',
                  'Machine Learning Applications in Healthcare',
                  'Biomarker Discovery for Cancer and Neurological Disorders',
                  'AI-Driven Precision Medicine',
                  'Bioinformatics Education and Training',
                ].map((area) => (
                  <div key={area} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                    <span className="text-sm text-slate-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 md:p-8 border border-amber-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Teaching Philosophy
              </h3>
              <blockquote className="text-sm md:text-base text-slate-700 leading-relaxed italic">
                <span className="text-3xl text-amber-300 font-serif leading-none mr-1">"</span>
                My goal is to demystify bioinformatics and computational biology. I believe that with the right guidance and hands-on practice, any biologist can become proficient in data analysis. This course is designed to be a bridge, empowering you to take control of your data, ask more ambitious questions, and accelerate your research. I focus on building a strong conceptual foundation before diving into the code, ensuring you understand not just 'how' but also 'why'.
                <span className="text-3xl text-amber-300 font-serif leading-none ml-1">"</span>
              </blockquote>
            </div>
          </div>
        </div>
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
          <Route path="/instructor" element={<InstructorPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
