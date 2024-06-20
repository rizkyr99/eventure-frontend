'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const TicketItem = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleReduceQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className='bg-white p-6 rounded-2xl border border-slate-200'>
      <div className='flex justify-between items-start'>
        <div>
          <p className='mb-1'>VIP A</p>
          <p className='text-slate-500 text-xs mb-4'>
            Sales ends on Jul 20, 2024
          </p>
          <p className='font-bold'>Rp 1.200.000</p>
        </div>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleReduceQuantity}
            disabled={quantity <= 1}
            className='group p-1 rounded-lg bg-primary hover:opacity-75 transition disabled:bg-slate-200 disabled:hover:opacity-100'>
            <Minus className='size-5 text-white group-disabled:text-slate-500' />
          </button>
          <div className='min-w-4 flex justify-center'>{quantity}</div>
          <button
            onClick={handleAddQuantity}
            disabled={quantity >= 10}
            className='group p-1 rounded-lg bg-primary hover:opacity-75 transition disabled:bg-slate-200 disabled:hover:opacity-100'>
            <Plus className='size-5 text-white group-disabled:text-slate-500' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
