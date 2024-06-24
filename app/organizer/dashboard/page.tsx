import { Calendar } from 'lucide-react';
import React from 'react';

const DashboardPage = () => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 gap-5'>
        <div className='bg-white p-6 rounded-3xl flex gap-x-4 items-center shadow-light'>
          <div className='size-14 bg-blue-200 flex items-center justify-center rounded-full'>
            <Calendar className='size-8 text-blue-500' />
          </div>
          <div className='space-y-2'>
            <p className='text-sm text-slate-500'>Total Events</p>
            <p className='text-3xl font-bold'>1970</p>
          </div>
        </div>
        <div className='bg-white p-6 rounded-3xl flex gap-x-4 items-center shadow-light'>
          <div className='size-14 bg-blue-200 flex items-center justify-center rounded-full'>
            <Calendar className='size-8 text-blue-500' />
          </div>
          <div className='space-y-2'>
            <p className='text-sm text-slate-500'>Total Events</p>
            <p className='text-3xl font-bold'>1970</p>
          </div>
        </div>
        <div className='bg-white p-6 rounded-3xl flex gap-x-4 items-center shadow-light'>
          <div className='size-14 bg-blue-200 flex items-center justify-center rounded-full'>
            <Calendar className='size-8 text-blue-500' />
          </div>
          <div className='space-y-2'>
            <p className='text-sm text-slate-500'>Total Events</p>
            <p className='text-3xl font-bold'>1970</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
