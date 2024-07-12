import EventCard from '@/components/EventCard';
import { EventSummary } from '@/types/event';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const events: EventSummary[] = [
  {
    id: 1,
    name: 'Tech Conference 2024',
    slug: 'tech-conference-2024',
    image: '/images/tech-conference.jpg',
    startDate: '2024-07-15',
    endDate: '2024-07-17',
    startTime: '09:00',
    endTime: '17:00',
    location: 'San Francisco, CA',
    isFree: false,
    category: 'Technology',
    lowestPrice: 299.99,
  },
  {
    id: 2,
    name: 'Art Expo 2024',
    slug: 'art-expo-2024',
    image: '/images/art-expo.jpg',
    startDate: '2024-08-01',
    endDate: '2024-08-03',
    startTime: '10:00',
    endTime: '18:00',
    location: 'New York, NY',
    isFree: false,
    category: 'Art',
    lowestPrice: 50.0,
  },
  {
    id: 3,
    name: 'Music Festival',
    slug: 'music-festival',
    image: '/images/music-festival.jpg',
    startDate: '2024-09-05',
    endDate: '2024-09-07',
    startTime: '12:00',
    endTime: '23:00',
    location: 'Austin, TX',
    isFree: false,
    category: 'Music',
    lowestPrice: 150.0,
  },
  {
    id: 4,
    name: 'Marathon 2024',
    slug: 'marathon-2024',
    image: '/images/marathon.jpg',
    startDate: '2024-10-12',
    endDate: '2024-10-12',
    startTime: '06:00',
    endTime: '12:00',
    location: 'Boston, MA',
    isFree: false,
    category: 'Sports',
    lowestPrice: 75.0,
  },
  {
    id: 5,
    name: 'Food Carnival',
    slug: 'food-carnival',
    image: '/images/food-carnival.jpg',
    startDate: '2024-11-20',
    endDate: '2024-11-22',
    startTime: '11:00',
    endTime: '21:00',
    location: 'Chicago, IL',
    isFree: false,
    category: 'Food',
    lowestPrice: 20.0,
  },
  {
    id: 6,
    name: 'Startup Pitch Day',
    slug: 'startup-pitch-day',
    image: '/images/startup-pitch.jpg',
    startDate: '2024-12-02',
    endDate: '2024-12-02',
    startTime: '09:00',
    endTime: '17:00',
    location: 'Seattle, WA',
    isFree: true,
    category: 'Business',
    lowestPrice: 0.0,
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
