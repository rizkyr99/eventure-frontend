import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <header className='bg-white h-20 px-4'>
      <nav className='max-w-screen-xl mx-auto h-full flex justify-between items-center gap-4'>
        <Image src='/assets/Eventure.svg' width={110} height={36} alt='logo' />
        <Search />
        <div className='flex items-center gap-8'>
          <Link href='/events' className='hover:text-indigo-500 transition'>
            Find Events
          </Link>
          <Link
            href='/create-event'
            className='hover:text-indigo-500 transition'>
            Create Event
          </Link>
          <Link href='/sign-in' className='hover:text-indigo-500 transition'>
            Sign In
          </Link>
          <Link href='/sign-up' className='hover:text-indigo-500 transition'>
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
