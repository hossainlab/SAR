import React from 'react';

const base = import.meta.env.BASE_URL;

const ReproducibleResearch: React.FC = () => {
  return (
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
              src={`${base}workflow/tidyverse-package-workflow.png`}
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
              src={`${base}workflow/quarto-illustration.png`}
              alt="Quarto — from R, Python, and more to HTML, PDF, and Word"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReproducibleResearch;
