import { Button } from '@/components/ui/button';
import Image from 'next/image';

const CTA = () => {
  return (
    <section className='p-4 bg-primary h-[450px]'>
      <div className='grid grid-cols-2 gap-4 h-full max-w-screen-xl mx-auto place-items-center'>
        <div>
          <h2 className='text-4xl font-bold text-white leading-snug'>
            Exclusive Events Tailored Just for You!
          </h2>
          <p className='text-white mb-8'>
            Unleash a world of unique experiences crafted with your preferences
            in mind. From electrifying concerts to serene retreats, discover
            events that resonate with your passions and interests.
          </p>
          <Button variant='secondary' className='rounded-full'>
            Discover Now
          </Button>
        </div>
        <Image
          src='https://res.cloudinary.com/de7uimbtt/image/upload/v1718782192/eventure/x4bo6hibmbunx3stzycz.svg'
          width={550}
          height={400}
          alt='festivities'
        />
      </div>
    </section>
  );
};

export default CTA;
