'use client';

import { formatToIDR } from '@/lib/formatToIDR';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TicketItemProps {
  ticket: any;
  onChange: (ticket: any, quantity: number) => void;
}

const TicketItem = ({ ticket, onChange }: TicketItemProps) => {
  const [quantity, setQuantity] = useState(0);
  const maxQuantity = Math.min(ticket.quantity, 4);

  const handleAddQuantity = () => {
    onChange(ticket, quantity + 1);
    setQuantity((prev) => prev + 1);
  };

  const handleReduceQuantity = () => {
    onChange(ticket, quantity - 1);
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className='bg-white p-6 rounded-2xl border border-slate-200'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='mb-1'>{ticket.name}</p>
          {/* <p className='text-slate-500 text-xs mb-4'>
            Sales ends on Jul 20, 2024
          </p> */}
          <p className='font-bold'>{formatToIDR(ticket.price)}</p>
          {ticket.quantity <= 10 && (
            <p className='text-sm font-semibold text-destructive mt-2'>
              Only {ticket.quantity} left
            </p>
          )}
        </div>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleReduceQuantity}
            disabled={quantity <= 0}
            className='group p-1 rounded-lg bg-primary hover:opacity-75 transition disabled:bg-slate-200 disabled:hover:opacity-100'>
            <Minus className='size-5 text-white group-disabled:text-slate-500' />
          </button>
          <div className='min-w-4 flex justify-center'>{quantity}</div>
          <button
            onClick={handleAddQuantity}
            disabled={quantity >= maxQuantity}
            className='group p-1 rounded-lg bg-primary hover:opacity-75 transition disabled:bg-slate-200 disabled:hover:opacity-100'>
            <Plus className='size-5 text-white group-disabled:text-slate-500' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
