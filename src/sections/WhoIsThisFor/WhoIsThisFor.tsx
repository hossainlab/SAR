import React from 'react';

const WhoIsThisFor: React.FC = () => {
  return (
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
  );
};

export default WhoIsThisFor;
