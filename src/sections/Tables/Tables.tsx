import React from 'react';

const base = import.meta.env.BASE_URL;

const Tables: React.FC = () => {
  return (
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
                  src={`${base}workflow/tbl_summary_demo1.gif`}
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
                  src={`${base}workflow/tbl_mvregression_demo.gif`}
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
  );
};

export default Tables;
