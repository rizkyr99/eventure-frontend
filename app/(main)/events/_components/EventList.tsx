'use client';

import EventCard from '@/components/EventCard';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const params = useSearchParams();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const queryParams = params.toString();
        console.log(queryParams);
        const response = await fetch(
          `http://localhost:8080/api/v1/events?${queryParams}`
        );
        const result = await response.json();
        setEvents(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, [params]);

  return (
    <div className='grid grid-cols-3 gap-5'>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
};

export default EventList;
