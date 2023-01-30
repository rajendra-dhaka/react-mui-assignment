import React from 'react';
import './Chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Apr 04',
    value: 20000,
  },
  {
    name: 'Apr 07',
    value: 18000,
  },
  {
    name: 'Apr 10',
    value: 20000,
  },
  {
    name: 'Apr 13',
    value: 17500,
  },
  {
    name: 'Apr 16',
    value: 18000,
  },
  {
    name: 'Apr 19',
    value: 20000,
  },
  {
    name: 'Apr 22',
    value: 17000,
  },
];

export const Chart = () => {
  return (
    <div className='chart'>
      <div className='info'>
        <div className='sub-info-1'>
          <h1>Sales This Months</h1>
          <p>Users from all channels</p>
        </div>
        <div className='sub-info-2'>
          <h1>$14,094</h1>
          <p>Another $48,346</p>
        </div>
      </div>
      <ResponsiveContainer width='50%' height='50%'>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 50,
            right: 50,
            left: 0,
            bottom: 0,
          }}>
          <defs>
            <linearGradient id='chartColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#DAF9F9' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#DAF9F9' stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            dataKey='value'
            stroke='#00D9D9'
            strokeWidth={3}
            fill='url(#chartColor)'
            fillOpacity={0.5}
            activeDot={{ stroke: '#000', strokeWidth: 2, r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
