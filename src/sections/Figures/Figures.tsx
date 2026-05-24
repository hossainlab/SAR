import React from 'react';

const Figures: React.FC = () => {
  return (
    <section className="mb-20 md:mb-32 bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-80 h-80 bg-indigo-100/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-violet-100/40 rounded-full blur-[100px]"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-100">
            What You'll Learn to Build
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Publication-Ready Figures
          </h2>
          <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Master 35+ chart types across 7 categories — from simple bar charts to advanced network visualizations.
          </p>
        </div>

        <div>
          {[
            { category: 'Distribution', plots: [
              { name: 'Violin', img: 'https://r-graph-gallery.com/img/section/Violin150.png' },
              { name: 'Density', img: 'https://r-graph-gallery.com/img/section/Density150.png' },
              { name: 'Histogram', img: 'https://r-graph-gallery.com/img/section/Histogram150.png' },
              { name: 'Boxplot', img: 'https://r-graph-gallery.com/img/section/Box1150.png' },
              { name: 'Ridgeline', img: 'https://r-graph-gallery.com/img/section/Joyplot150.png' },
            ]},
            { category: 'Correlation', plots: [
              { name: 'Scatter', img: 'https://r-graph-gallery.com/img/section/ScatterPlot150.png' },
              { name: 'Heatmap', img: 'https://r-graph-gallery.com/img/section/Heatmap150.png' },
              { name: 'Correlogram', img: 'https://r-graph-gallery.com/img/section/Correlogram150.png' },
              { name: 'Bubble', img: 'https://r-graph-gallery.com/img/section/BubblePlot150.png' },
              { name: '2D Density', img: 'https://r-graph-gallery.com/img/section/2dDensity150.png' },
            ]},
            { category: 'Ranking', plots: [
              { name: 'Barplot', img: 'https://r-graph-gallery.com/img/section/Bar150.png' },
              { name: 'Lollipop', img: 'https://r-graph-gallery.com/img/section/Lollipop150.png' },
              { name: 'Spider', img: 'https://r-graph-gallery.com/img/section/Spider150.png' },
              { name: 'Parallel', img: 'https://r-graph-gallery.com/img/section/Parallel1150.png' },
              { name: 'Circular Bar', img: 'https://r-graph-gallery.com/img/section/CircularBarplot150.png' },
            ]},
            { category: 'Part of a Whole', plots: [
              { name: 'Stacked Bar', img: 'https://r-graph-gallery.com/img/section/GroupedRed150.png' },
              { name: 'Treemap', img: 'https://r-graph-gallery.com/img/section/Tree150.png' },
              { name: 'Donut', img: 'https://r-graph-gallery.com/img/section/Doughnut150.png' },
              { name: 'Pie Chart', img: 'https://r-graph-gallery.com/img/section/Pie150.png' },
              { name: 'Waffle', img: 'https://r-graph-gallery.com/img/section/Waffle2150.png' },
            ]},
            { category: 'Evolution', plots: [
              { name: 'Line Plot', img: 'https://r-graph-gallery.com/img/section/Line150.png' },
              { name: 'Area', img: 'https://r-graph-gallery.com/img/section/Area150.png' },
              { name: 'Stacked Area', img: 'https://r-graph-gallery.com/img/section/StackedArea150.png' },
              { name: 'Stream', img: 'https://r-graph-gallery.com/img/section/Stream150.png' },
              { name: 'Time Series', img: 'https://r-graph-gallery.com/img/section/Time150.gif' },
            ]},
            { category: 'Map', plots: [
              { name: 'Choropleth', img: 'https://r-graph-gallery.com/img/section/Choropleth150.png' },
              { name: 'Hexbin Map', img: 'https://r-graph-gallery.com/img/section/MapHexbin150.png' },
              { name: 'Cartogram', img: 'https://r-graph-gallery.com/img/section/Cartogram150.png' },
              { name: 'Connection', img: 'https://r-graph-gallery.com/img/section/ConnectedMap150.png' },
              { name: 'Bubble Map', img: 'https://r-graph-gallery.com/img/section/BubbleMap150.png' },
            ]},
            { category: 'Flow', plots: [
              { name: 'Chord', img: 'https://r-graph-gallery.com/img/section/Chord150.png' },
              { name: 'Network', img: 'https://r-graph-gallery.com/img/section/Network150.png' },
              { name: 'Sankey', img: 'https://r-graph-gallery.com/img/section/Sankey150.png' },
              { name: 'Arc Diagram', img: 'https://r-graph-gallery.com/img/section/Arc150.png' },
              { name: 'Edge Bundling', img: 'https://r-graph-gallery.com/img/section/Bundle150.png' },
            ]},
          ].map((group) => (
            <div key={group.category} className="mb-6 md:mb-8">
              <h4 className="text-sm md:text-base font-bold text-slate-700 mb-3 md:mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                {group.category}
              </h4>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 md:gap-4">
                {group.plots.map((plot) => (
                  <div key={plot.name} className="bg-white rounded-xl border border-slate-200 p-3 md:p-4 hover:shadow-lg hover:border-indigo-200 transition-all text-center group/plot">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 md:mb-3 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center group-hover/plot:scale-105 transition-transform">
                      <img src={plot.img} alt={plot.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <p className="text-[11px] md:text-xs font-semibold text-slate-600">{plot.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Figures;
