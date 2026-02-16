
import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-indigo-200 transition-all group flex flex-col h-full"
    >
      <div className="text-4xl mb-4">
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
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
        {module.title}
      </h3>
      <p className="text-slate-600 text-sm flex-grow">
        {module.description}
      </p>
    </div>
  );
};

export default ModuleCard;
