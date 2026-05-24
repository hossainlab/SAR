import React from 'react';

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="mb-20 md:mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Learning Path</h2>
            <p className="text-slate-500 text-sm md:text-base">Go from data points to professional storytelling with our 10-class roadmap.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: 'Environment Setup', topics: ['Install R & RStudio', 'Quarto Installation', 'Git & Github Setup', 'Github Collaborations'] },
              { title: 'Fundamentals of R', topics: ['Basic Syntax', 'Data Types & Structures', 'Variable Assignment', 'Basic Operators'] },
              { title: 'Data Manipulation with dplyr & tidyr', topics: ['Filtering & Selecting', 'Mutating & Summarizing', 'Pivoting Long/Wide', 'Tidying Messy Data'] },
              { title: 'Advanced Data Cleaning', topics: ['Handling Missing Values', 'String Manipulation', 'Date/Time Formatting', 'Data Rectangling'] },
              { title: 'Publication-Ready Tables with gtsummary', topics: ['tbl_summary() basics', 'Summary Statistics', 'Basic Customization', 'Exporting Tables'] },
              { title: 'Advanced Tables & Journal Styles', topics: ['Regression Tables', 'Journal-Specific Themes', 'Merging & Stacking', 'Complex Formatting'] },
              { title: 'Data Visualization with ggplot2', topics: ['Grammar of Graphics', 'Geoms & Aesthetics', 'Faceting Data', 'Theme Customization'] },
              { title: 'Advanced Plotting & Journal Styles', topics: ['Scientific Color Palettes', 'Multi-panel Figures', 'High-Res Export', 'Custom Annotations'] },
              { title: 'Reproducible Reporting with Quarto', topics: ['Document Structure', 'Markdown Mastery', 'Code Chunk Control', 'Rendering Reports'] },
              { title: 'AI-Assisted R Programming', topics: ['Prompt Engineering for R', 'Code Generation', 'Debugging with AI', 'Automating Workflows'] },
            ].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-2xl border border-slate-200 p-5 md:p-6 hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg group-hover:bg-indigo-600 transition-colors">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span key={topic} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[10px] md:text-xs font-medium rounded-md border border-slate-100">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
