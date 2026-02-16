
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-indigo-600 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg text-white font-black text-sm md:text-lg shadow-sm">R</div>
            <span className="text-base md:text-lg font-bold text-slate-900 tracking-tight">R for Research</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold">
            <Link to="/" className={`${isActive('/') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'} transition-colors`}>Curriculum</Link>
            <Link to="/journey" className={`${isActive('/journey') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'} transition-colors`}>Journey Map</Link>
            <Link to="/cheatsheets" className={`${isActive('/cheatsheets') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'} transition-colors`}>Cheatsheets</Link>
            <Link to="/instructor" className={`${isActive('/instructor') ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'} transition-colors`}>Instructor</Link>
          </div>

          <div className="flex items-center space-x-3">
             <a href="#pricing" className="bg-slate-900 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[12px] md:text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">
               Enroll Now
             </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-10 md:py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
               <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
                  <div className="bg-indigo-600 w-6 h-6 flex items-center justify-center rounded text-white font-bold text-sm">R</div>
                  <span className="text-white font-bold tracking-tight">R for Research</span>
               </div>
               <p className="max-w-xs text-sm leading-relaxed">Master statistical analysis, data manipulation, and publication-ready reporting with modern R.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <Link to="/journey" className="hover:text-indigo-400 transition-colors">Resources</Link>
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
            © 2025 Statistical Analysis with R for Research. Built for the modern researcher.
          </div>
        </div>
      </footer>
      
      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 h-16 flex items-center justify-evenly z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] safe-area-bottom">
         <Link to="/" className={`flex flex-col items-center space-y-1 ${isActive('/') ? 'text-indigo-600' : 'text-slate-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[10px] font-bold uppercase">Home</span>
         </Link>
         <Link to="/journey" className={`flex flex-col items-center space-y-1 ${isActive('/journey') ? 'text-indigo-600' : 'text-slate-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-[10px] font-bold uppercase">Map</span>
         </Link>
         <Link to="/cheatsheets" className={`flex flex-col items-center space-y-1 ${isActive('/cheatsheets') ? 'text-indigo-600' : 'text-slate-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-[10px] font-bold uppercase">Sheets</span>
         </Link>
         <Link to="/instructor" className={`flex flex-col items-center space-y-1 ${isActive('/instructor') ? 'text-indigo-600' : 'text-slate-400'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-bold uppercase">Instructor</span>
         </Link>
      </nav>
    </div>
  );
};

export default Layout;
