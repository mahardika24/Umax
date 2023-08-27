import React from 'react';

const Metrics = ({ title, value, chartData, info, icon }) => {
  return (
    <div className='bg-white p-5 rounded-lg shadow'>
      <div className='flex items-center justify-between'>
        <div className='flex justify-end items-center'>
          {icon}
          <h2 className='ml-2 text-lg font-semibold'>{title}</h2>
        </div>
        <span className='text-gray-600'>{value}</span>
      </div>
      <div className='mt-4'>{chartData}</div>
      <div className='mt-3 text-sm text-gray-500'>{info}</div>
    </div>
  );
};

export default Metrics;
