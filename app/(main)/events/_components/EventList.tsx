'use client';

import EventCard from '@/components/EventCard';
import { useEvent } from '@/hooks/useEvent';
import EventListLoader from './EventListLoader';
import { EventSummary } from '@/types/event';
import EventPagination from './EventPagination';

const EventList = () => {
  const { data, isLoading, error } = useEvent();
  const events = data?.content as EventSummary[];
  const totalPages = data?.totalPages;

  if (isLoading) {
    return <EventListLoader />;
  }

  return (
    <>
      <div className='grid grid-cols-[minmax(0,450px)] justify-center lg:grid-cols-3 gap-5'>
        {events?.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <EventPagination totalPages={totalPages} />
    </>
  );
};

export default EventList;
