import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className='px-4'>
      <div className='grid grid-cols-2 gap-5 py-16 max-w-screen-xl mx-auto'>
        <div className='lg:pr-16'>
          <h1 className='text-6xl font-bold leading-tight mb-2'>
            Discover the World&apos;s Best Events
          </h1>
          <p className='mb-16'>
            From local meetups to global festivals, Eventure connects you to
            unforgettable experiences.
          </p>
          <Button className='rounded-full'>Explore Events</Button>
        </div>
        <div>
          <Image
            src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/bxwf6h2iew3js6pto065'
            width={628}
            height={294}
            alt='slow move bazaar'
            className='w-full rounded-3xl'
          />
          <div className='mt-6 flex justify-between'>
            <div>
              <p className='text-2xl font-bold mb-1'>Slow Move Bazaar VOL. 7</p>
              <p className='text-muted-foreground'>28 Jun - 30 Jun 2024</p>
            </div>
            <div className='flex items-center gap-4'>
              <button className='size-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_24px_0_rgba(0,0,0,0.05)]'>
                <ChevronLeft className='size-6' />
              </button>
              <button className='size-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_24px_0_rgba(0,0,0,0.05)]'>
                <ChevronRight className='size-6' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
