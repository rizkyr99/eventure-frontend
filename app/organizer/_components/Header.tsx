import { Button } from '@/components/ui/button';
import { User2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='h-20 flex justify-between items-center p-4'>
      <h1 className='font-bold'>Dashboard</h1>
      <div className='flex items-center gap-x-6'>
        <Button className='rounded-full' asChild>
          <Link href='/events/create'>Create Event</Link>
        </Button>
        <div className='bg-slate-200 size-12 rounded-full flex items-center justify-center'>
          <User2 className='size-6 text-slate-500' />
        </div>
      </div>
    </div>
  );
};

export default Header;
