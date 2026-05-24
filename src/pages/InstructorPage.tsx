import React from 'react';

const base = import.meta.env.BASE_URL;

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
                src={`${base}profile/jubayer.png`}
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

export default InstructorPage;
