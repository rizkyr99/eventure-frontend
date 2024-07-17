import Filter from './Filter';
import Sort from './Sort';
import EventList from './EventList';
import { Suspense } from 'react';

const EventContainer = () => {
  return (
    <Suspense>
      <section className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center gap-4 justify-between mb-6'>
          <Filter />
          <Sort />
        </div>
        <EventList />
      </section>
    </Suspense>
  );
};

export default EventContainer;
