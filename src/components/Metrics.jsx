import React from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import '../styles.css';


const Metrics = ({ title, value, chartData, info, icon }) => {

  const data = [
    { name: 'day1', value: 5, color: '#8690A2' },
    { name: 'day2', value: 15, color: '#8690A2' },
    { name: 'day3', value: 10, color: '#8690A2' },
    { name: 'day4', value: 15, color: '#8690A2' },
    { name: 'day5', value: 20, color: '#8690A2' },
    { name: 'day6', value: 10, color: '#8690A2' },
    { name: 'day7', value: 25, color: '#1CD14F' },
  ];

  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;

    const borderRadius = 1.6;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={fill} rx={borderRadius} ry={borderRadius} />
      </g>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].payload.name}`}</p>
          <p className="value">{`${payload[0].payload.value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='bg-slate-100 border border-gray-300 p-3 mt-5 flex flex-col rounded-lg'>
      <div className='flex items-start justify-between'>
        <div className='flex items-center'>
          <h2 className='text-lg font-medium text-gray-500'>{title}</h2>
        </div>
        <div className='ml-auto text-gray-500 mt-1'>{icon}</div>
      </div>
      <div className='flex mt-1'>
        <div className='relative top-4 text-gray-600 text-xl font-bold'>{value}</div>
      </div>
      <div className='relative -top-5 flex justify-end'>
        <div style={{ width: '40%', height: 40 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', border: '1px solid #ccc' }} />
              <Bar dataKey='value' shape={<CustomBar />} >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex">
      <div className='bg-green-300 w-14 text-green-700 text-xs px-3 py-1 rounded-full'>
        +2,0%
      </div>
      <span className='text-gray-400 kecil font-medium pl-3'>Total Amount spent compared to last 7 day</span>
    </div>
    </div>
  );
};

export default Metrics;
