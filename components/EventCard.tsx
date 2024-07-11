import { formatToIDR } from '@/lib/formatToIDR';
import { EventSummary } from '@/types/event';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

interface EventCardProps {
  event: EventSummary;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link
      href={`/event/${event.slug}`}
      className='bg-white rounded-3xl overflow-hidden shadow-light hover:shadow-bold cursor-pointer transition'>
      <Image
        src={event.image}
        width={400}
        height={200}
        alt={event.name}
        className='w-full object-cover rounded-3xl'
      />
      <div className='px-6 py-4 space-y-4'>
        <div className='space-y-1'>
          <h3 className='text-xl font-bold'>{event.name}</h3>
          <div className='flex items-center gap-2 text-slate-500 text-sm'>
            <Calendar className='size-4' />
            {moment(event.startDate).format('LL')} -{' '}
            {moment(event.endDate).format('LL')}
          </div>
          <div className='flex items-center gap-2 text-slate-500 text-sm'>
            <MapPin className='size-4' />
            {event.location}
          </div>
        </div>
        {event.isFree ? (
          <p className='font-bold'>Free</p>
        ) : (
          <div>
            <p className='text-xs text-slate-500'>Start from</p>
            <p className='text-base font-bold'>
              {formatToIDR(event.lowestPrice)}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default EventCard;
