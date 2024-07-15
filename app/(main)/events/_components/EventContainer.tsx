import Filter from './Filter';
import Sort from './Sort';
import EventList from './EventList';
import { Suspense } from 'react';
import EventPagination from './EventPagination';

const EventContainer = () => {
  return (
    <Suspense>
      <section className='max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-4 justify-between mb-6'>
          <Filter />
          <Sort />
        </div>
        <EventList />
      </section>
    </Suspense>
  );
};

export default EventContainer;
