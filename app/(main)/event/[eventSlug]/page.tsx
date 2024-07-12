import {
  Calendar,
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
  User2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TicketModal from './_components/TicketModal';
import moment from 'moment';
import { fetchEventDetails } from '@/actions/event';

const EventDetailsPage = async ({
  params,
}: {
  params: { eventSlug: string };
}) => {
  const event = await fetchEventDetails(params.eventSlug);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <main className='my-12 grid grid-cols-3 max-w-screen-xl mx-auto gap-6 min-h-screen'>
      <div className='col-span-2 space-y-12'>
        <Image
          src={
            'https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/bxwf6h2iew3js6pto065'
          }
          width={400}
          height={200}
          alt='event'
          className='w-full object-cover rounded-3xl'
        />
        <div>
          <h2 className='text-2xl font-bold mb-4'>About the event</h2>
          <p>{event.description}</p>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Organized by</h2>
          <div className='flex items-center gap-2 font-semibold'>
            <div className='bg-slate-200 size-16 rounded-full flex items-center justify-center'>
              <User2 className='size-8 text-slate-500' />
            </div>
            {event.organizer.name}
          </div>
        </div>
      </div>
      <div className='sticky top-0 p-6 space-y-12 h-fit'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>{event.name}</h1>
          <div className='space-y-2'>
            <div className='flex items-center gap-2 text-slate-500'>
              <Calendar className='size-4' />
              {moment(event.startDate).format('LL') +
                ' - ' +
                moment(event.endDate).format('LL')}
            </div>
            <div className='flex items-center gap-2 text-slate-500'>
              <Clock className='size-4' />
              {`${moment(event.startTime, 'HH:mm:ss').format(
                'HH:mm'
              )} - ${moment(event.endTime, 'HH:mm:ss').format('HH:mm')} WIB`}
            </div>
            <div className='flex items-center gap-2 text-slate-500'>
              <MapPin className='size-4' />
              The Brickhall & Fatmawati Center
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='text-2xl font-bold'>Rp 200.000</p>
          <TicketModal />
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
