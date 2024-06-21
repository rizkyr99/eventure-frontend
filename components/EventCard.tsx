import { formatToIDR } from '@/lib/formatToIDR';
import { Event } from '@/types/event';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      href='/event/slow-move-bazaar'
      className='bg-white rounded-3xl overflow-hidden shadow-light hover:shadow-bold cursor-pointer transition'>
      <Image
        src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/bxwf6h2iew3js6pto065'
        width={400}
        height={200}
        alt={event.title}
        className='w-full object-cover rounded-3xl'
      />
      <div className='px-6 py-4 space-y-4'>
        <div className='space-y-1'>
          <h3 className='text-xl font-bold'>{event.title}</h3>
          <div className='flex items-center gap-2 text-slate-500 text-sm'>
            <Calendar className='size-4' />
            {event.startDate}
          </div>
          <div className='flex items-center gap-2 text-slate-500 text-sm'>
            <MapPin className='size-4' />
            {event.location}
          </div>
        </div>
        <p className='font-bold'>
          {event.isFree ? 'Free' : formatToIDR(event.price * 15000)}
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
