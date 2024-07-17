import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const OrderSuccessPage = async () => {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <main className='min-h-screen p-4 md:p-8'>
      <div className='bg-white rounded-xl p-8 flex flex-col items-center max-w-lg mx-auto'>
        <CheckCircle2 className='text-white size-16 fill-green-500' />
        <p className='my-2'>Hi, {session?.user.name}</p>
        <p className='text-green-500 text-xl font-semibold text-center'>
          Your Order is Confirmed!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 place-items-center'>
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
