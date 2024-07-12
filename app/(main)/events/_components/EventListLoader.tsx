import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const EventListLoader = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
      {[...Array(6)].map((_, index) => (
        <div key={index} className='w-full rounded-3xl overflow-hidden'>
          <Skeleton className='w-full aspect-video bg-slate-200 rounded-3xl' />
          <div className='p-4'>
            <Skeleton className='w-3/4 h-4 mb-2 bg-slate-200 rounded' />
            <Skeleton className='w-1/2 h-4 mb-2 bg-slate-200 rounded' />
            <Skeleton className='w-1/3 h-4 mb-4 bg-slate-200 rounded' />
            <Skeleton className='w-1/4 h-6 mb-2 bg-slate-200 rounded' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListLoader;
