import React from 'react';
import BarChart from '../../charts/BarChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

 
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Direct VS Indirect</h2>
      </header>
      <BarChart/>
    </div>
  );
}

export default DashboardCard04;
