import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 7400,
    amt: 2400,
  },
  
];
const BarChart03=()=>{

      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            // width={500}
            // height={300}
            // layout="vertical"
            data={data}
            margin={{ left: 50, right: 50 }}
            stackOffset="expand"
            // data={data}
            // margin={{
            //   top: 20,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
            // layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />

            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" stackId="a" fill="#ffc658" />
            {/* <Bar dataKey="uv" fill="#ffc658" /> */}
          </BarChart>
        </ResponsiveContainer>
      );
    }

export default BarChart03;