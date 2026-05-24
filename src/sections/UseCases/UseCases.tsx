import React from 'react';

const UseCases: React.FC = () => {
  return (
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
  );
};

export default UseCases;
