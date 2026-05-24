import React from "react";
import CheatsheetCard from "../components/ui/CheatsheetCard";
import { CHEATSHEETS } from "../constants";

const CheatsheetsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Cheatsheets</h1>
        <p className="text-slate-500 text-sm md:text-base">Quick-reference guides for the R ecosystem. View or download any cheatsheet.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
        {CHEATSHEETS.map((cs) => (
          <CheatsheetCard key={cs.id} cheatsheet={cs} />
        ))}
      </div>
    </div>
  );
};

export default CheatsheetsPage;