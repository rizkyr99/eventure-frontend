'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { formatToIDR } from '@/lib/formatToIDR';
import { Voucher } from '@/types/event';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface VoucherModalProps {
  eventId: number;
  appliedVouchers: Voucher[];
  setAppliedVouchers: (vouchers: Voucher[]) => void;
  totalDiscount: number;
}

const VoucherModal = ({
  appliedVouchers,
  setAppliedVouchers,
  eventId,
  totalDiscount,
}: VoucherModalProps) => {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  console.log({ appliedVouchers });

  const handleApplyVouchers = (voucher: Voucher) => {
    const isVoucherApplied = appliedVouchers.some((v) => v.id === voucher.id);

    if (isVoucherApplied) {
      const newAppliedVouchers = appliedVouchers.filter(
        (v) => v.id !== voucher.id
      );
      setAppliedVouchers(newAppliedVouchers);
    } else {
      setAppliedVouchers([...appliedVouchers, voucher]);
    }
  };

  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/events/${eventId}/vouchers`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch vouchers');
        }
        const result = await response.json();
        setVouchers(result.data);
      } catch (error) {
        console.error('Error fetching vouchers:', error);
      }
    };
    fetchVouchers();
  }, [eventId]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline' className='w-full'>
          {appliedVouchers.length > 0
            ? `${appliedVouchers.length} voucher(s) applied (${formatToIDR(
                totalDiscount
              )})`
            : 'Vouchers'}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Vouchers</DialogTitle>
        <div className='space-y-4 mt-4'>
          {vouchers.map((voucher) => (
            <div key={voucher.id} className='flex items-center justify-between'>
              <div>
                <h3 className='font-semibold'>{`${voucher.amount}% off`}</h3>
                <p className='text-slate-500 text-sm'>
                  Expired at {moment(voucher.expirationDate).format('LL')}
                </p>
              </div>
              <Button
                onClick={() => handleApplyVouchers(voucher)}
                size='sm'
                variant='outline'
                className={
                  appliedVouchers.includes(voucher)
                    ? 'bg-primary text-white border-primary hover:bg-primary/75 hover:text-white'
                    : ''
                }>
                {appliedVouchers.includes(voucher) ? 'Applied' : 'Apply'}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VoucherModal;
