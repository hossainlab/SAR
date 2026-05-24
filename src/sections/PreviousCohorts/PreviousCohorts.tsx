import React from 'react';

const PreviousCohorts: React.FC = () => {
  return (
    <section className="mb-20 md:mb-32">
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Previous Cohorts</h2>
        <p className="text-slate-500 text-sm md:text-base">Watch recordings from our past sessions to see what you can expect.</p>
      </div>
      <div className="px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            'dQhZjmw9BK0',
            'f4AK5aPhGf4',
            'JaElBhgyE8k',
            'LTvulssY4iA',
            'InUrKYEeYUU',
            'mIKJv6ZuUfU',
            '99bZpIJ_uZ0',
            '-I1mLzwpihc',
          ].map((id, i) => (
            <div key={id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Previous Cohort Session ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousCohorts;
