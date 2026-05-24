import React from 'react';
import Hero from '../sections/Hero/Hero';
import Workflow from '../sections/Workflow/Workflow';
import WhoIsThisFor from '../sections/WhoIsThisFor/WhoIsThisFor';
import Curriculum from '../sections/Curriculum/Curriculum';
import Palettes from '../sections/Palettes/Palettes';
import Tables from '../sections/Tables/Tables';
import Figures from '../sections/Figures/Figures';
import ReproducibleResearch from '../sections/ReproducibleResearch/ReproducibleResearch';
import UseCases from '../sections/UseCases/UseCases';
import PreviousCohorts from '../sections/PreviousCohorts/PreviousCohorts';
import Enrollment from '../sections/Enrollment/Enrollment';
import Pricing from '../sections/Pricing/Pricing';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Workflow />
        <WhoIsThisFor />
      </div>
      <Curriculum />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Palettes />
      </div>
      <Tables />
      <Figures />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReproducibleResearch />
      </div>
      <UseCases />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PreviousCohorts />
        <Enrollment />
        <Pricing />
      </div>
    </>
  );
};

export default HomePage;
