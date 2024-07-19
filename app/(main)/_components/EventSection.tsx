'use client';

import EventCard from '@/components/EventCard';
import { EventSummary } from '@/types/event';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface EventSectionProps {
  title: string;
  url: string;
  totalEvents: number;
}

const EventSection = ({ title, url, totalEvents }: EventSectionProps) => {
  const [events, setEvents] = useState<EventSummary[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events/upcoming`
        );
        const result = await response.json();
        setEvents(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <section className='px-4'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-4 mb-4'>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <Link
            href={url}
            className='group flex items-center text-slate-500 gap-2 hover:text-black'>
            See more{' '}
            <ChevronRight className='size-4 group-hover:translate-x-1 transition' />
          </Link>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {events.slice(0, totalEvents).map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
