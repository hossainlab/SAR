
import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-r';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-[#002240] border border-slate-700 shadow-2xl flex flex-col">
      {/* RStudio-style Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#001b33] text-slate-400 text-xs font-mono border-b border-white/5">
        <div className="flex items-center space-x-3">
            <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
            </div>
            <div className="flex items-center space-x-2 border-l border-white/10 pl-3">
                <svg className="w-3.5 h-3.5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                <span className="opacity-80 font-medium tracking-tight">visualize_data.R</span>
            </div>
        </div>
        <button 
          onClick={handleCopy}
          className="hover:text-white transition-colors flex items-center space-x-1.5 bg-white/5 px-2 py-1 rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="font-semibold">Copy</span>
        </button>
      </div>
      
      {/* Code Content */}
      <pre className="!m-0 !bg-transparent !p-6 overflow-x-auto custom-scrollbar">
        <code ref={codeRef} className="language-r font-mono text-[13px]">
          {code}
        </code>
      </pre>

      {/* RStudio Status Bar Look-alike */}
      <div className="px-4 py-1.5 bg-[#001b33] border-t border-white/5 flex items-center justify-end space-x-4 text-[10px] text-slate-500 font-mono">
        <span>R: 4.3.2</span>
        <span>UTF-8</span>
        <span className="text-indigo-400/80">ggplot2 context</span>
      </div>
    </div>
  );
};

export default CodeBlock;
