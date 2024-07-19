import { fetchUserEvents } from '@/actions/event';
import { Button } from '@/components/ui/button';
import moment from 'moment';
import Image from 'next/image';

const UserEventsPage = async () => {
  const events = await fetchUserEvents();

  return (
    <main className='p-4'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-xl font-bold mb-4'>My Events</h1>
        <div className='space-y-4'>
          {events?.map((event, index) => (
            <div key={index} className='bg-white p-4 rounded-2xl'>
              {/* <div className='flex gap-4 text-xs text-slate-500 mb-2'>
                <div>Order ID: #1</div>
                <div>Order Date: July, 20 2021</div>
              </div> */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <Image
                  src='https://res.cloudinary.com/de7uimbtt/image/upload/v1/events/r3gs9dqmvmffvequy47j.png'
                  width={250}
                  height={100}
                  alt=''
                  className='w-full sm:w-48 rounded-lg'
                />
                <div className='flex-1'>
                  <div>
                    <h2 className='text-lg lg:text-xl font-semibold'>
                      {event.name}
                    </h2>
                    <p className='text-sm text-slate-500'>
                      {moment(event.startDate).format('LL') +
                        ' - ' +
                        moment(event.endDate).format('LL')}
                    </p>
                    <p className='text-sm font-bold my-4'>Rp 200.000</p>
                  </div>
                  <div></div>
                </div>
                <Button size='sm' variant='outline' className='text-sm'>
                  See Order Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UserEventsPage;
