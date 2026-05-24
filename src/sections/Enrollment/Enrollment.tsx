import React from 'react';

const Enrollment: React.FC = () => {
  return (
    <section className="mb-20 md:mb-32 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
            Simple & Quick
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">How to Enroll</h2>
          <p className="text-slate-500 text-sm md:text-base max-xl mx-auto">Three simple steps to secure your spot in the next cohort.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200"></div>

          {/* Step 1: Payment */}
          <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">1</div>
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Send Payment</h3>
            <p className="text-sm text-slate-500 mb-4">Transfer the course fee to our bank account using any of these methods:</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-lg text-xs font-bold border border-pink-100">bKash</span>
              <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold border border-purple-100">Rocket</span>
              <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-xs font-bold border border-orange-100">Nagad</span>
            </div>
          </div>

          {/* Step 2: Form */}
          <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">2</div>
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Fill the Enrollment Form</h3>
            <p className="text-sm text-slate-500 mb-4">Complete the Google Form with your details and payment confirmation.</p>
            <a
              href="https://forms.gle/5YmigJSJwbXsWB7eA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Open Enrollment Form
            </a>
          </div>

          {/* Step 3: Confirmation */}
          <div className="relative bg-white rounded-2xl border border-slate-200 p-6 md:p-7 text-center hover:shadow-lg hover:border-indigo-200 transition-all">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-5 relative z-10">3</div>
            <h3 className="font-bold text-slate-900 text-base md:text-lg mb-2">Get Access</h3>
            <p className="text-sm text-slate-500 mb-4">After payment verification, you'll receive the private Telegram group link within 72 hours.</p>
            <div className="flex items-center justify-center gap-2 text-xs text-indigo-500 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Private Telegram Group
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
