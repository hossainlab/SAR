import React from "react";
import { COURSE_MODULES, MODULE_CATEGORIES } from "../constants";

const JourneyPage: React.FC = () => {
  let globalIndex = 0;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 px-4">The Journey Map</h1>
      <div className="space-y-12 md:space-y-16 px-4">
        {MODULE_CATEGORIES.map((category) => {
          const modules = COURSE_MODULES.filter(m => m.category === category);
          if (modules.length === 0) return null;
          return (
            <div key={category}>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{category}</h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mb-8"></div>
              <div className="relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-indigo-100 hidden sm:block"></div>
                <div className="space-y-8 md:space-y-12">
                  {modules.map((module) => {
                    globalIndex++;
                    const num = globalIndex;
                    return (
                      <div key={module.id} className="relative flex items-start space-x-3 sm:space-x-4 md:space-x-8">
                        <div className="z-10 bg-indigo-600 text-white w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-bold text-base sm:text-lg md:text-xl shadow-lg shrink-0">
                          {num}
                        </div>
                        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex-grow min-w-0">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                            <h3 className="text-base sm:text-xl md:text-2xl font-bold text-slate-900">{module.title}</h3>
                            <span className="self-start text-[10px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-0.5 rounded-full">
                              Module {num}
                            </span>
                          </div>
                          <p className="text-slate-600 text-sm md:text-base mb-4 max-w-2xl leading-relaxed">{module.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyPage;