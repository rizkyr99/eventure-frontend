import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Event } from '@/types/event';
import EventList from './EventList';

const EventContainer = async () => {
  const response = await fetch('http://localhost:8080/api/v1/events');
  const events = (await response.json()) as Event[];

  return (
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
  );
};

export default EventContainer;
