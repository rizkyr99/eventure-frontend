import EventCard from '@/components/EventCard';
import { Event } from '@/types/event';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid2X2,
  List,
} from 'lucide-react';
import React from 'react';

const events: Event[] = [
  {
    title: 'Tech Conference 2024',
    description: 'A conference about the latest in tech.',
    image: '/images/tech-conference.jpg',
    startDate: '2024-07-15',
    endDate: '2024-07-17',
    price: 299.99,
    location: 'San Francisco, CA',
    isFree: false,
  },
  {
    title: 'Art Expo 2024',
    description: 'Showcase of modern art from around the world.',
    image: '/images/art-expo.jpg',
    startDate: '2024-08-01',
    endDate: '2024-08-03',
    price: 50.0,
    location: 'New York, NY',
    isFree: false,
  },
  {
    title: 'Music Festival',
    description: 'A festival featuring various music artists.',
    image: '/images/music-festival.jpg',
    startDate: '2024-09-05',
    endDate: '2024-09-07',
    price: 150.0,
    location: 'Austin, TX',
    isFree: false,
  },
  {
    title: 'Marathon 2024',
    description: 'Annual marathon race in Boston.',
    image: '/images/marathon.jpg',
    startDate: '2024-10-12',
    endDate: '2024-10-12',
    price: 75.0,
    location: 'Boston, MA',
    isFree: false,
  },
  {
    title: 'Food Carnival',
    description: 'Carnival with a variety of food stalls and events.',
    image: '/images/food-carnival.jpg',
    startDate: '2024-11-20',
    endDate: '2024-11-22',
    price: 20.0,
    location: 'Chicago, IL',
    isFree: false,
  },
  {
    title: 'Startup Pitch Day',
    description: 'Event where startups pitch their ideas to investors.',
    image: '/images/startup-pitch.jpg',
    startDate: '2024-12-02',
    endDate: '2024-12-02',
    price: 0.0,
    location: 'Seattle, WA',
    isFree: true,
  },
  {
    title: 'Tech Conference 2024',
    description: 'A conference about the latest in tech.',
    image: '/images/tech-conference.jpg',
    startDate: '2024-07-15',
    endDate: '2024-07-17',
    price: 299.99,
    location: 'San Francisco, CA',
    isFree: false,
  },
  {
    title: 'Art Expo 2024',
    description: 'Showcase of modern art from around the world.',
    image: '/images/art-expo.jpg',
    startDate: '2024-08-01',
    endDate: '2024-08-03',
    price: 50.0,
    location: 'New York, NY',
    isFree: false,
  },
  {
    title: 'Music Festival',
    description: 'A festival featuring various music artists.',
    image: '/images/music-festival.jpg',
    startDate: '2024-09-05',
    endDate: '2024-09-07',
    price: 150.0,
    location: 'Austin, TX',
    isFree: false,
  },
  {
    title: 'Marathon 2024',
    description: 'Annual marathon race in Boston.',
    image: '/images/marathon.jpg',
    startDate: '2024-10-12',
    endDate: '2024-10-12',
    price: 75.0,
    location: 'Boston, MA',
    isFree: false,
  },
  {
    title: 'Food Carnival',
    description: 'Carnival with a variety of food stalls and events.',
    image: '/images/food-carnival.jpg',
    startDate: '2024-11-20',
    endDate: '2024-11-22',
    price: 20.0,
    location: 'Chicago, IL',
    isFree: false,
  },
  {
    title: 'Startup Pitch Day',
    description: 'Event where startups pitch their ideas to investors.',
    image: '/images/startup-pitch.jpg',
    startDate: '2024-12-02',
    endDate: '2024-12-02',
    price: 0.0,
    location: 'Seattle, WA',
    isFree: true,
  },
];

const EventsPage = () => {
  return (
    <main className='px-4'>
      <section className='py-16'>
        <h1 className='text-5xl font-bold text-center mb-6'>
          Discover the World&apos;s Events
        </h1>
        <p className='max-w-lg mx-auto text-center'>
          From local meetups to global festivals, Eventure connects you to
          unforgettable experiences.
        </p>
      </section>
      <section className='max-w-screen-xl mx-auto'>
        <div className='flex items-center gap-4 justify-between mb-6'>
          <div className='flex items-center gap-3'>
            <div className='bg-white h-10 px-4 rounded-lg flex gap-2 items-center text-sm'>
              All Categories
              <ChevronDown className='size-4' />
            </div>
            <div className='bg-white h-10 px-4 rounded-lg flex gap-2 items-center text-sm'>
              All Locations
              <ChevronDown className='size-4' />
            </div>
            <div className='bg-white h-10 px-4 rounded-lg flex gap-2 items-center text-sm'>
              Free + Paid
              <ChevronDown className='size-4' />
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='bg-white h-10 px-4 rounded-lg flex gap-2 items-center text-sm'>
              Latest
              <ChevronDown className='size-4' />
            </div>
            <div className='flex bg-slate-200 rounded-lg'>
              <div className='bg-white size-10 rounded-lg flex gap-2 items-center justify-center text-sm shadow cursor-pointer'>
                <Grid2X2 className='size-6' />
              </div>
              <div className='bg-transparent size-10 rounded-lg flex gap-2 items-center justify-center text-sm cursor-pointer'>
                <List className='size-6' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
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
    </main>
  );
};

export default EventsPage;
