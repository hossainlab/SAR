import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
  );
}

function TwitterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  );
}

function GlobeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
  );
}

const Footer: React.FC = () => {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-left">
          {/* Brand & Program */}
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                S
              </div>
              <span className="text-xl font-bold text-white tracking-tight">SAR</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The ultimate guide to mastering data manipulation, statistical analysis, and publication-ready reporting with modern R.
            </p>
          </div>

          {/* Connect with Instructor */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect with Instructor</h4>
            <div className="flex flex-col gap-3">
              <a href="https://bio.link/hossainlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GlobeIcon size={16} /> Personal Bio
              </a>
              <a href="https://www.linkedin.com/in/hossainmj" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              <a href="https://github.com/hossainlab" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href="https://twitter.com/hossain_lab" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <TwitterIcon size={16} /> Twitter / X
              </a>
            </div>
          </div>

          {/* DeepBio Academy */}
          <div>
            <h4 className="text-white font-bold mb-4">DeepBio Academy</h4>
            <div className="flex flex-col gap-3">
              <a href="https://deepbioacademy.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GlobeIcon size={16} /> Academy Website
              </a>
              <a href="https://www.linkedin.com/company/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              <a href="https://github.com/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href="https://www.facebook.com/deepbioacademy" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook
              </a>
            </div>
          </div>

          {/* DeepBio Limited */}
          <div>
            <h4 className="text-white font-bold mb-4">DeepBio Limited</h4>
            <div className="flex flex-col gap-3">
              <a href="https://deepbioltd.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors font-semibold">
                <GlobeIcon size={16} /> Official Website
              </a>
              <a href="https://www.linkedin.com/company/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              <a href="https://github.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href="https://www.facebook.com/deepbioltd" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm">
            © {year} Md. Jubayer Hossain · All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Contact"].map((link) => (
              <a key={link} href="#" className="text-slate-500 text-sm hover:text-indigo-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
