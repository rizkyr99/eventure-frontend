import EventCard from '@/components/EventCard';
import { Event } from '@/types/event';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const events: Event[] = [
  {
    name: 'Tech Conference 2024',
    description: 'A conference about the latest in tech.',
    image: '/images/tech-conference.jpg',
    startDate: '2024-07-15',
    endDate: '2024-07-17',
    price: 299.99,
    location: 'San Francisco, CA',
    isFree: false,
  },
  {
    name: 'Art Expo 2024',
    description: 'Showcase of modern art from around the world.',
    image: '/images/art-expo.jpg',
    startDate: '2024-08-01',
    endDate: '2024-08-03',
    price: 50.0,
    location: 'New York, NY',
    isFree: false,
  },
  {
    name: 'Music Festival',
    description: 'A festival featuring various music artists.',
    image: '/images/music-festival.jpg',
    startDate: '2024-09-05',
    endDate: '2024-09-07',
    price: 150.0,
    location: 'Austin, TX',
    isFree: false,
  },
  {
    name: 'Marathon 2024',
    description: 'Annual marathon race in Boston.',
    image: '/images/marathon.jpg',
    startDate: '2024-10-12',
    endDate: '2024-10-12',
    price: 75.0,
    location: 'Boston, MA',
    isFree: false,
  },
  {
    name: 'Food Carnival',
    description: 'Carnival with a variety of food stalls and events.',
    image: '/images/food-carnival.jpg',
    startDate: '2024-11-20',
    endDate: '2024-11-22',
    price: 20.0,
    location: 'Chicago, IL',
    isFree: false,
  },
  {
    name: 'Startup Pitch Day',
    description: 'Event where startups pitch their ideas to investors.',
    image: '/images/startup-pitch.jpg',
    startDate: '2024-12-02',
    endDate: '2024-12-02',
    price: 0.0,
    location: 'Seattle, WA',
    isFree: true,
  },
];

interface EventSectionProps {
  title: string;
  url: string;
  totalEvents: number;
}

const EventSection = ({ title, url, totalEvents }: EventSectionProps) => {
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
