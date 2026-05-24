import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="mb-20 md:mb-32 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Invest in Your Research Career</h2>
        <p className="text-slate-500 text-sm md:text-base">Secure your spot for the upcoming live online cohort.</p>
      </div>

      <div className="max-w-lg mx-auto">
        {/* Single Pricing Card */}
        <div className="relative bg-white rounded-3xl border-2 border-indigo-500 shadow-xl shadow-indigo-100 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-300 overflow-hidden flex flex-col">
          <div className="bg-indigo-600 text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.2em]">
            Limited Time Offer
          </div>
          <div className="p-6 md:p-10 flex-grow">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">Course Enrollment</h3>
              <p className="text-xs text-indigo-600 uppercase tracking-widest font-black">Live Online via Zoom</p>
            </div>
            
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-slate-400 line-through font-semibold">৳5,100</span>
                <span className="bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full text-xs font-bold border border-red-100">SAVE 40%</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-black text-slate-900">৳3,060</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">BDT</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-tighter">One-time payment for full cohort access</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                '10 Interactive live sessions on Zoom',
                'Hands-on R code and research datasets',
                'Class recordings for later review',
                'Publication-ready tables & figures guides',
                'Digital certificate of completion',
                'Access to course materials & cheatsheets',
                'Community support & Q&A sessions',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 md:p-10 pt-0 mt-auto">
            <a
              href="https://forms.gle/5YmigJSJwbXsWB7eA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 px-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center rounded-xl font-bold text-base hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Secure Payment
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            100+ Researchers Joined
          </span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
