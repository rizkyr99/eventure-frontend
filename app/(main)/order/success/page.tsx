import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const OrderSuccessPage = async () => {
  const session = await auth();

  return (
    <main className='min-h-screen p-4 md:p-8'>
      <div className='bg-white rounded-xl p-8 flex flex-col items-center max-w-md mx-auto'>
        <CheckCircle2 className='text-white size-16 fill-green-500' />
        <p className='my-2'>Hi, {session?.user.name}</p>
        <p className='text-green-500 text-xl font-semibold'>
          Your Order is Confirmed!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <Link href='/events'>
            <Button variant='outline'>Continue browsing</Button>
          </Link>
          <Link href='/user/events'>
            <Button>View your events</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
