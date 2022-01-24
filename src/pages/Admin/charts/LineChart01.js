import React, { useRef, useEffect } from 'react';

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from 'recharts';

// Import utilities
const LineChart01 = ({ width, height, data, yAxis,bg}) => {
  return (
      <div className={bg}>
        <ResponsiveContainer width={width + '%'} minHeight={height}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 30,
              bottom: 30,
            }}
          >
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              strokeWidth={2}
            />
            {/* <CartesianGrid stroke="#ccc" /> */}
            <XAxis dataKey="name" />
            {yAxis ? <YAxis /> : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
};

export default LineChart01;
