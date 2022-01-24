import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend } from 'recharts';

import data from '../data/PieData'
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChart01 = () => {
  return (
    <div className="my-auto">
    <ResponsiveContainer width="95%" minHeight={200}>
    <PieChart >
        <Pie
          data={data}
          // cx={120}
          // cy={200}
          innerRadius={60}
          outerRadius={80}
          // fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend height={36} width={245} margin={ {top: 15, left: 4, right: 0, bottom: 0} }/>
      </PieChart>
    </ResponsiveContainer>
     
    </div>
  );
};
export default PieChart01;
