import React from 'react';

const base = import.meta.env.BASE_URL;

const Palettes: React.FC = () => {
  return (
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
  );
};

export default Palettes;
