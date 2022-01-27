import React from 'react';
import Info from '../../utils/Info';
import BarChart from '../../charts/BarChart01';

// Import utilities


function DashboardCard09() {

  

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Sales VS Refunds</h2>
        <Info className="ml-2" containerClassName="min-w-80">
          <div className="text-sm">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</div>
        </Info>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 mr-2">+$6,796</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">-34%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart/>
      </div>
    </div>
  );
}

export default DashboardCard09;
