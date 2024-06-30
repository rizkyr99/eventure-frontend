'use client';

import Filter from './Filter';
import Sort from './Sort';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EventList from './EventList';
import { Suspense } from 'react';

const EventContainer = () => {
  return (
    <Suspense>
      <section className='max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-4 justify-between mb-6'>
          <Filter />
          <Sort />
        </div>
        <EventList />
        <div className='flex items-center justify-end gap-3 mt-6 mb-16'>
          <p>Page 1 of 3</p>
          <button className='size-10 bg-white flex items-center justify-center rounded-lg shadow hover:bg-primary hover:text-white transition'>
            <ChevronLeft className='size-6' />
          </button>
          <button className='size-10 bg-white flex items-center justify-center rounded-lg shadow hover:bg-primary hover:text-white transition'>
            <ChevronRight className='size-6' />
          </button>
        </div>
      </section>
    </Suspense>
  );
};

export default EventContainer;
