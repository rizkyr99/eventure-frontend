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
import { fetchEventDetails, fetchLocationDetails } from '@/actions/event';
import { formatToIDR } from '@/lib/formatToIDR';
import { auth } from '@/auth';

const EventDetailsPage = async ({
  params,
}: {
  params: { eventSlug: string };
}) => {
  const session = await auth();

  const event = await fetchEventDetails(params.eventSlug);

  if (!event) {
    return <div>Event not found</div>;
  }

  const location = await fetchLocationDetails(event.location);

  return (
    <main className='my-6 lg:my-12 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl mx-auto gap-6 min-h-screen p-4'>
      <div className='lg:col-span-2 space-y-6 lg:space-y-12'>
        <Image
          src={event.image}
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
      <div className='sticky top-0 lg:p-6 space-y-12 h-fit'>
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
              {location?.name}
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          {event.isFree ? (
            <p className='text-2xl font-bold'>Free</p>
          ) : (
            <div>
              <p className='text-slate-500 text-sm'>Start from</p>
              <p className='text-2xl font-bold'>
                {event.lowestPrice && formatToIDR(event.lowestPrice)}
              </p>
            </div>
          )}
          <TicketModal
            session={session}
            eventId={event.id}
            isFree={event.isFree}
          />
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
