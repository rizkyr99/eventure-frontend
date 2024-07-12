'use client';

import EventCard from '@/components/EventCard';
import { useEvent } from '@/hooks/useEvent';
import EventListLoader from './EventListLoader';

const EventList = () => {
  const { events, isLoading, error } = useEvent();

  if (isLoading) {
    return <EventListLoader />;
  }

  return (
    <div className='grid grid-cols-3 gap-5'>
      {events?.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
