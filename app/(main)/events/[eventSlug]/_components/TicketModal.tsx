'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import TicketItem from './TicketItem';
import { formatToIDR } from '@/lib/formatToIDR';
import VoucherModal from './VoucherModal';
import { Ticket } from '@/types/event';
import useOrderStore from '@/hooks/useOrderStore';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

interface TicketModalProps {
  session: Session | null;
  eventId: number;
  isFree: boolean;
}

const TicketModal = ({ session, eventId, isFree }: TicketModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const orderItems = useOrderStore((state) => state.orderItems);
  const setOrderItems = useOrderStore((state) => state.setOrderItems);
  const appliedVouchers = useOrderStore((state) => state.appliedVouchers);
  const setAppliedVouchers = useOrderStore((state) => state.setAppliedVouchers);
  const totalDiscount = useOrderStore((state) => state.totalDiscount);
  const setTotalDiscount = useOrderStore((state) => state.setTotalDiscount);
  const totalPrice = useOrderStore((state) => state.totalPrice);
  const setTotalPrice = useOrderStore((state) => state.setTotalPrice);
  const setEventId = useOrderStore((state) => state.setEventId);

  const router = useRouter();

  useEffect(() => {
    setEventId(eventId);
  }, [eventId, setEventId]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}/tickets`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch tickets');
        }
        const result = await response.json();
        setTickets(result.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, [eventId]);

  const handleTicketChange = (ticket: Ticket, quantity: number) => {
    const newOrderItems = orderItems.filter((item) => item.id !== ticket.id);
    if (quantity > 0) {
      newOrderItems.push({ ...ticket, quantity });
    }
    setOrderItems(newOrderItems);
  };

  useEffect(() => {
    let price = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    let discount = 0;

    appliedVouchers.forEach((voucher) => {
      discount += (voucher.amount / 100) * price;
    });

    setTotalDiscount(discount);
    setTotalPrice(price - discount);
  }, [orderItems, appliedVouchers, setTotalDiscount, setTotalPrice]);

  const handleOpenChange = () => {
    if (session?.user.role === 'ORGANIZER') return;
    setIsOpen((prev) => !prev);
  };

  const handleCheckout = () => {
    router.push('/order/checkout');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <div>
          <Button
            className='w-full'
            disabled={session?.user.role === 'ORGANIZER'}>
            Buy Ticket
          </Button>
          {session?.user.role === 'ORGANIZER' && (
            <p>Only attendee can join the event</p>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className='p-6 pt-12 bg-slate-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr,1fr] max-w-[1000px] max-h-screen overflow-y-auto'>
        <div className='flex flex-col h-full'>
          <div className='space-y-4 flex-1 overflow-y-auto pb-6'>
            {isFree ? (
              <div className='h-full flex items-center justify-center'>
                This event is free
              </div>
            ) : (
              tickets.map((ticket, index) => (
                <TicketItem
                  key={index}
                  onChange={handleTicketChange}
                  ticket={ticket}
                />
              ))
            )}
          </div>
        </div>
        <div>
          <div className='py-4'>
            <p className='font-bold mb-4'>Order summary</p>
            <div className='space-y-1'>
              {orderItems.map((item, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between text-sm'>
                  <p>{`${item.quantity}x ${item.name}`}</p>
                  <p>{formatToIDR(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='py-4 border-t space-y-4'>
            <VoucherModal
              appliedVouchers={appliedVouchers}
              setAppliedVouchers={setAppliedVouchers}
              totalDiscount={totalDiscount}
              eventId={eventId}
            />
            {/* <div className='space-y-4'>
              <div className='flex items-center justify-between p-4 bg-indigo-100 border border-indigo-200 rounded-lg'>
                <p className='font-bold text-primary'>10% off(-15000)</p>
                <p className='text-xs text-primary'>1 voucher used</p>
              </div>
            </div> */}
            <div className='flex items-center justify-between font-bold'>
              <p>Total Price</p>
              <p>{formatToIDR(totalPrice)}</p>
            </div>
          </div>
          <Button
            type='button'
            onClick={handleCheckout}
            disabled={orderItems.length === 0}
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
