'use client';

import useDebounce from '@/hooks/useDebounce';
import { EventSummary } from '@/types/event';
import { MapPin, SearchIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<EventSummary[]>([]);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events?search=${debouncedSearch}`
        );
        const result = await response.json();
        setResults(result.data.content);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, [debouncedSearch]);

  return (
    <div className='relative w-full max-w-md h-12 hidden md:flex items-center bg-slate-100 rounded-full pl-4 gap-4'>
      <SearchIcon className='size-4 text-slate-500 flex-shrink-0' />
      <input
        type='text'
        placeholder='Search events'
        className='bg-transparent outline-none placeholder:text-slate-500 flex-1 w-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          onClick={() => setSearch('')}
          className='p-1 bg-slate-200 mr-4 rounded-full'>
          <X className='size-4' />
        </button>
      )}
      {/* <div className='bg-slate-200 h-full w-48 rounded-full px-4 flex items-center flex-shrink-0 whitespace-nowrap gap-2 truncate'>
        <MapPin className='size-4 text-slate-500 flex-shrink-0' />
        <p className='truncate'>Sumatera Selatan</p>
      </div> */}
      {debouncedSearch && (
        <div className='absolute left-0 top-full w-full shadow rounded-lg mt-4 bg-white p-4 z-[999]'>
          {results.length === 0 && <div className='p-4'>No events found.</div>}
          {results.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.slug}`}
              className='block px-4 py-2 hover:bg-slate-100'>
              {event.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
