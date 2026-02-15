
import React, { useRef, useEffect, useState } from 'react';
import { Cheatsheet } from '../types';

declare const pdfjsLib: any;

interface CheatsheetCardProps {
  cheatsheet: Cheatsheet;
}

const CATEGORY_COLORS: Record<string, string> = {
  'Core R': 'bg-indigo-100 text-indigo-700',
  'Data Wrangling': 'bg-emerald-100 text-emerald-700',
  'Visualization': 'bg-violet-100 text-violet-700',
  'Tables': 'bg-amber-100 text-amber-700',
  'Tools': 'bg-slate-100 text-slate-700',
  'Publishing': 'bg-rose-100 text-rose-700',
  'Apps': 'bg-cyan-100 text-cyan-700',
};

const CheatsheetCard: React.FC<CheatsheetCardProps> = ({ cheatsheet }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fileUrl = `/cheatsheet/${cheatsheet.filename}`;

  useEffect(() => {
    if (!canvasRef.current) return;

    let cancelled = false;
    const renderThumbnail = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(fileUrl).promise;
        if (cancelled) return;
        const page = await pdf.getPage(1);
        if (cancelled) return;

        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        const viewport = page.getViewport({ scale: 1 });
        const scale = canvas.width / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        canvas.height = scaledViewport.height;

        await page.render({ canvasContext: ctx, viewport: scaledViewport }).promise;
        setLoading(false);
      } catch {
        if (!cancelled) setError(true);
        setLoading(false);
      }
    };

    renderThumbnail();
    return () => { cancelled = true; };
  }, [fileUrl]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all group flex flex-col h-full overflow-hidden">
      {/* Thumbnail area */}
      <div className="relative bg-slate-50 border-b border-slate-100 flex items-center justify-center overflow-hidden" style={{ height: '220px' }}>
        <canvas ref={canvasRef} width={400} className="w-full h-full object-cover object-top" />
        {loading && !error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
            <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          </div>
        )}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center space-x-2 mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_COLORS[cheatsheet.category] || 'bg-slate-100 text-slate-700'}`}>
            {cheatsheet.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
          {cheatsheet.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">
          {cheatsheet.description}
        </p>
        <div className="flex items-center space-x-3">
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            View
          </a>
          <a
            href={fileUrl}
            download
            className="flex-1 text-center bg-white text-slate-700 border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheatsheetCard;
