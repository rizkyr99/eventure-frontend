'use client';

import EventCard from '@/components/EventCard';
import { useSearchParams } from 'next/navigation';
import { useEvent } from '@/hooks/useEvent';

const EventList = () => {
  const { events } = useEvent();

  return (
    <div className='grid grid-cols-3 gap-5'>
      {events?.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
