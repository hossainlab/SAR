import React from 'react';

const base = import.meta.env.BASE_URL;

const Workflow: React.FC = () => {
  return (
    <section className="mb-20 md:mb-32">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Your Data Analysis Workflow</h2>
        <p className="text-slate-500 text-sm md:text-base">A step-by-step pipeline from raw data to polished results — using the most popular R packages.</p>
      </div>
      <div className="px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-3">
          {[
            { step: 'Import', icon: `${base}hex/logo-readr.png`, pkg: 'readr', color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
            { step: 'Tidy', icon: `${base}hex/logo-tidyr.png`, pkg: 'tidyr', color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
            { step: 'Transform', icon: 'https://raw.githubusercontent.com/rstudio/hex-stickers/master/PNG/dplyr.png', pkg: 'dplyr', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
            { step: 'Visualize', icon: `${base}hex/ggplot2_logo.png`, pkg: 'ggplot2', color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
            { step: 'Model', icon: `${base}hex/gtsummary_logo.png`, pkg: 'gtsummary', color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
            { step: 'Communicate', icon: `${base}hex/quarto.png`, pkg: 'Quarto', color: 'from-rose-500 to-rose-600', bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
          ].map((item, i) => (
            <div key={item.step} className="relative flex flex-col items-center">
              {i > 0 && (
                <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              <div className={`w-full ${item.bg} ${item.border} border rounded-2xl p-4 md:p-5 flex flex-col items-center group hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} text-white text-[10px] font-bold flex items-center justify-center mb-3 shadow-sm`}>
                  {i + 1}
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 mb-3 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.pkg}
                    className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className={`text-xs font-bold ${item.text} uppercase tracking-wider mb-1`}>{item.step}</span>
                <span className="text-[10px] text-slate-400 font-medium">{item.pkg}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm">
            Import data &rarr; Tidy its structure &rarr; Transform variables &rarr; Visualize patterns &rarr; Model relationships &rarr; Communicate results
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
