'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useEffect, useState } from 'react';
import TicketItem from './TicketItem';
import Image from 'next/image';
import { formatToIDR } from '@/lib/formatToIDR';
import VoucherModal from './VoucherModal';
import { Ticket, Voucher } from '@/types/event';
import useOrderStore from '@/hooks/useOrderStore';

interface TicketModalProps {
  eventId: number;
  isFree: boolean;
}

const TicketModal = ({ eventId, isFree }: TicketModalProps) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const orderItems = useOrderStore((state) => state.orderItems);
  const setOrderItems = useOrderStore((state) => state.setOrderItems);
  const appliedVouchers = useOrderStore((state) => state.appliedVouchers);
  const setAppliedVouchers = useOrderStore((state) => state.setAppliedVouchers);
  const totalDiscount = useOrderStore((state) => state.totalDiscount);
  const setTotalDiscount = useOrderStore((state) => state.setTotalDiscount);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/events/${eventId}/tickets`
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
  }, [orderItems, appliedVouchers, setTotalDiscount]);

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
