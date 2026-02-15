
import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onSelect: (module: Module) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(module)}
      className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-indigo-300 transition-all cursor-pointer group flex flex-col h-full"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {module.icon}
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
          module.level === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
          module.level === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
          'bg-rose-100 text-rose-700'
        }`}>
          {module.level}
        </span>
        <span className="text-xs text-slate-400 font-medium">• {module.duration}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {module.title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 flex-grow">
        {module.description}
      </p>
      <div className="flex items-center text-indigo-600 font-semibold text-sm">
        Start Module
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

export default ModuleCard;
