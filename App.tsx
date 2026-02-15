
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import ModuleCard from './components/ModuleCard';
import CheatsheetCard from './components/CheatsheetCard';
import ParticleNetwork from './components/ParticleNetwork';
import { COURSE_MODULES, TECH_STACK, CHEATSHEETS, MODULE_CATEGORIES } from './constants';

const GALLERY_ITEMS = [
  // Core ggplot2 visualizations
  { src: '/use_cases/bioinformatics/volcano_plot.png', title: 'Volcano Plot', category: 'Statistical', desc: 'Differential expression analysis' },
  { src: '/use_cases/bioinformatics/pca_plot.png', title: 'PCA Plot', category: 'Statistical', desc: 'Dimensionality reduction' },
  { src: '/use_cases/bioinformatics/correlation_plot.png', title: 'Correlation Matrix', category: 'Statistical', desc: 'Variable relationships' },
  { src: '/use_cases/bioinformatics/gene_expression.png', title: 'Gene Expression', category: 'Statistical', desc: 'Expression level visualization' },
  { src: '/use_cases/bioinformatics/hypothesis_testing.png', title: 'Hypothesis Testing', category: 'Statistical', desc: 'Statistical significance' },
  { src: '/use_cases/bioinformatics/microbiome_composition.png', title: 'Microbiome Composition', category: 'Statistical', desc: 'Community abundance profiles' },
  // Bulk RNA-seq
  { src: '/use_cases/bioinformatics/bulk/heatmap_plot-1.png', title: 'Heatmap', category: 'Bulk RNA-seq', desc: 'Expression clustering' },
  { src: '/use_cases/bioinformatics/bulk/volcano_plot-1.png', title: 'DEG Volcano', category: 'Bulk RNA-seq', desc: 'Differentially expressed genes' },
  { src: '/use_cases/bioinformatics/bulk/ma_plot-1.png', title: 'MA Plot', category: 'Bulk RNA-seq', desc: 'Log-ratio vs abundance' },
  { src: '/use_cases/bioinformatics/bulk/pca_plot-1.png', title: 'Sample PCA', category: 'Bulk RNA-seq', desc: 'Sample clustering & QC' },
  { src: '/use_cases/bioinformatics/bulk/go_enrich-1.png', title: 'GO Enrichment', category: 'Bulk RNA-seq', desc: 'Gene ontology analysis' },
  { src: '/use_cases/bioinformatics/bulk/kegg_enrich-1.png', title: 'KEGG Pathways', category: 'Bulk RNA-seq', desc: 'Pathway enrichment' },
  { src: '/use_cases/bioinformatics/bulk/dispersions-1.png', title: 'Dispersion Plot', category: 'Bulk RNA-seq', desc: 'DESeq2 dispersion estimates' },
  { src: '/use_cases/bioinformatics/bulk/single_plot-1.png', title: 'Single Gene', category: 'Bulk RNA-seq', desc: 'Individual gene visualization' },
  // Single-cell
  { src: '/use_cases/bioinformatics/single-cell/tsne_umap_cluster.png', title: 'UMAP / t-SNE Clusters', category: 'Single-Cell', desc: 'Cell type clustering' },
  { src: '/use_cases/bioinformatics/single-cell/featureplot_vlnplot_examples.png', title: 'Feature & Violin Plots', category: 'Single-Cell', desc: 'Marker gene expression' },
  { src: '/use_cases/bioinformatics/single-cell/vlnplot_QC.png', title: 'QC Violin Plots', category: 'Single-Cell', desc: 'Quality control metrics' },
  { src: '/use_cases/bioinformatics/single-cell/heatmap_clmarkers.png', title: 'Cluster Markers Heatmap', category: 'Single-Cell', desc: 'Top marker genes per cluster' },
  { src: '/use_cases/bioinformatics/single-cell/umap_seurat_datasets.png', title: 'Seurat UMAP', category: 'Single-Cell', desc: 'Multi-dataset integration' },
  { src: '/use_cases/bioinformatics/single-cell/scvelo_DS1_scvelo_stream.png', title: 'RNA Velocity', category: 'Single-Cell', desc: 'Trajectory stream plot' },
];

const GALLERY_CATEGORIES = ['All', ...Array.from(new Set(GALLERY_ITEMS.map(g => g.category)))];

const VizGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filtered = activeFilter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === activeFilter);

  return (
    <section className="mb-20 md:mb-32">
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Visualization Gallery</h2>
        <p className="text-slate-500 text-sm md:text-base">A preview of the plots and figures you'll learn to create.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeFilter === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4">
        {filtered.map((item) => (
          <div
            key={item.src}
            onClick={() => setLightbox(item)}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-50">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="text-sm font-bold text-slate-800 truncate">{item.title}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-xs font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Click to expand
              </span>
            </div>
            {/* Category badge */}
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-indigo-600 shadow-sm">
              {item.category}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="overflow-auto max-h-[75vh] bg-slate-50">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-4 md:p-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">{lightbox.category}</span>
                <h3 className="text-lg font-bold text-slate-900">{lightbox.title}</h3>
              </div>
              <p className="text-sm text-slate-500 mt-1">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

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
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4">
          {[
            { src: '/hex/ggplot2_logo.png', name: 'ggplot2' },
            { src: '/hex/tidyplots_logo.png', name: 'tidyplots' },
            { src: '/hex/ggsci_logo.png', name: 'ggsci' },
            { src: '/hex/pathwork_logo.svg', name: 'patchwork' },
            { src: '/hex/plotly2.png', name: 'plotly' },
            { src: '/hex/logo-tidyr.png', name: 'tidyr' },
            { src: '/hex/logo-readr.png', name: 'readr' },
            { src: '/hex/logo-stringr.png', name: 'stringr' },
            { src: '/hex/logo-lubridate.png', name: 'lubridate' },
            { src: '/hex/logo-gt.png', name: 'gt' },
            { src: '/hex/gtsummary_logo.png', name: 'gtsummary' },
            { src: '/hex/logo-shiny.png', name: 'shiny' },
            { src: '/hex/quarto.png', name: 'Quarto' },
          ].map((pkg) => (
            <div key={pkg.name} className="group flex flex-col items-center">
              <img
                src={pkg.src}
                alt={`${pkg.name} hex sticker`}
                className="w-20 h-23 md:w-24 md:h-28 object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-1"
              />
              <span className="mt-2 text-xs font-medium text-slate-500 group-hover:text-indigo-600 transition-colors">{pkg.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Visualization Gallery Section */}
      <VizGallery />

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
