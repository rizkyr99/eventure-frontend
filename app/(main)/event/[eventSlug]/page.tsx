import { Button } from '@/components/ui/button';
import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
  User,
  User2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventDetailsPage = () => {
  return (
    <main className='my-12 grid grid-cols-3 max-w-screen-xl mx-auto gap-6 min-h-screen'>
      <div className='col-span-2 space-y-12'>
        <Image
          src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/bxwf6h2iew3js6pto065'
          width={400}
          height={200}
          alt='event'
          className='w-full object-cover rounded-3xl'
        />
        <div>
          <h2 className='text-2xl font-bold mb-4'>About the event</h2>
          <p>
            Ready to make a stylish statement? Join us at Slow Move Bazaar VOL.
            7, where Indonesia&apos;s slow fashion culture thrives with an
            &quot;Office Siren - Corpcore&quot; twist! Explore the hottest
            bazaar in town dedicated to reducing fast fashion, bringing:
          </p>
          <p>Don&apos;t miss out—grab your tickets now and join the fun!</p>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Organized by</h2>
          <div className='flex items-center gap-2 font-semibold'>
            <div className='bg-slate-200 size-16 rounded-full flex items-center justify-center'>
              <User2 className='size-8 text-slate-500' />
            </div>
            SlowMove Bazaar
          </div>
        </div>
      </div>
      <div className='sticky top-0 p-6 space-y-12 h-fit'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>Slow Move Bazaar VOL. 7</h1>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-slate-500'>
              <Calendar className='size-4' />
              June 24, 2024
            </div>
            <div className='flex items-center gap-2 text-slate-500'>
              <Clock className='size-4' />
              20:00 - 23:000 WIB
            </div>
            <div className='flex items-center gap-2 text-slate-500'>
              <MapPin className='size-4' />
              The Brickhall & Fatmawati Center
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='text-2xl font-bold'>Rp 200.000</p>
          <Button className='w-full'>Buy Ticket</Button>
        </div>
        <div className='space-y-4'>
          <p className='font-bold'>Share Event</p>
          <div className='flex items-center gap-3'>
            <Link
              href=''
              className='size-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition hover:bg-blue-500 hover:text-white'>
              <Facebook className='size-6' />
            </Link>
            <Link
              href=''
              className='size-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition hover:bg-sky-500 hover:text-white'>
              <Twitter className='size-6' />
            </Link>
            <Link
              href=''
              className='size-12 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition hover:bg-slate-600 hover:text-white'>
              <Instagram className='size-6' />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventDetailsPage;
