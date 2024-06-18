import { MapPin, SearchIcon } from 'lucide-react';
import React from 'react';

const Search = () => {
  return (
    <div className='w-full max-w-md h-12 flex items-center bg-slate-100 rounded-full overflow-hidden pl-4 gap-4'>
      <SearchIcon className='size-4 text-slate-500 flex-shrink-0' />
      <input
        type='text'
        placeholder='Search events'
        className='bg-transparent outline-none placeholder:text-slate-500 flex-1 w-full'
      />
      <div className='bg-slate-200 h-full w-48 rounded-full px-4 flex items-center flex-shrink-0 whitespace-nowrap gap-2 truncate'>
        <MapPin className='size-4 text-slate-500 flex-shrink-0' />
        <p className='truncate'>Sumatera Selatan</p>
      </div>
    </div>
  );
};

export default Search;
