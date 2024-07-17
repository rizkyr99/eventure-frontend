import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Search from './Search';
import { auth } from '@/auth';

import HeaderDropdown from './HeaderDropdown';
import MobileNav from './MobileNav';

const Header = async () => {
  const session = await auth();
  return (
    <header className='bg-white h-20 px-4'>
      <nav className='max-w-screen-xl mx-auto h-full flex justify-between items-center gap-4'>
        <Image src='/assets/Eventure.svg' width={110} height={36} alt='logo' />
        <Search />
        <div className='items-center gap-8 hidden lg:flex'>
          <Link href='/events' className='hover:text-indigo-500 transition'>
            Find Events
          </Link>
          <Link
            href='/organizer/events/create'
            className='hover:text-indigo-500 transition'>
            Create Event
          </Link>
          {session ? (
            <HeaderDropdown
              name={session.user.name}
              email={session.user.email}
              role={session.user.role}
            />
          ) : (
            <>
              <Link
                href='/sign-in'
                className='hover:text-indigo-500 transition'>
                Sign In
              </Link>
              <Link
                href='/sign-up'
                className='hover:text-indigo-500 transition'>
                Sign Up
              </Link>
            </>
          )}
        </div>
        <MobileNav session={session} />
      </nav>
    </header>
  );
};

export default Header;
