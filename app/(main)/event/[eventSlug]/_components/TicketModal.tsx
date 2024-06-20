import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import TicketItem from './TicketItem';
import Image from 'next/image';

const TicketModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full'>Buy Ticket</Button>
      </DialogTrigger>
      <DialogContent className='p-6 pt-12 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr,1fr] max-w-[1000px] max-h-screen overflow-y-auto'>
        <div className='flex flex-col h-full'>
          <Image
            src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/ihojzhmvjqtb9uvpxlse'
            width={300}
            height={415}
            alt='ticket layout'
            className='w-full object-cover rounded-2xl sm:hidden mb-4'
          />
          <div className='space-y-4 flex-1 overflow-y-auto pb-6'>
            {[12, 3, 1].map((_, index) => (
              <TicketItem key={index} />
            ))}
          </div>
          <div className='space-y-4'>
            <div className='flex items-center justify-between p-4 bg-indigo-100 border border-indigo-200 rounded-lg'>
              <p className='font-bold text-primary'>10% off(-15000)</p>
              <p className='text-xs text-primary'>1 voucher used</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/ihojzhmvjqtb9uvpxlse'
            width={300}
            height={415}
            alt='ticket layout'
            className='w-full object-cover rounded-2xl hidden sm:block'
          />
          <div className='py-4'>
            <p className='font-bold mb-4'>Order summary</p>
            <div className='space-y-1'>
              <div className='flex items-center justify-between text-sm'>
                <p>1 x VIP A</p>
                <p>Rp 1.200.000</p>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <p>1 x VIP A</p>
                <p>Rp 1.200.000</p>
              </div>
              <div className='flex items-center justify-between text-sm'>
                <p>1 x VIP A</p>
                <p>Rp 1.200.000</p>
              </div>
            </div>
          </div>
          <div className='h-14 py-4 border-t'>
            <div className='flex items-center justify-between font-bold'>
              <p>1 x VIP A</p>
              <p>Rp 1.200.000</p>
            </div>
          </div>
          <Button
            size='lg'
            className='w-full text-xl font-semibold sticky bottom-0'>
            Checkout
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TicketModal;
