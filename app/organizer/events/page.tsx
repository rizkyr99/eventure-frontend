'use client';

import { DataTable } from './data-table';
import { columns } from './columns';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useOrganizerEvents } from '@/hooks/useOrganizerEvents';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const OrganizerEventsPage = () => {
  const { events, isLoading, error } = useOrganizerEvents();

  return (
    <div className='p-4'>
      <div className='bg-white p-6 rounded-3xl shadow-light'>
        {isLoading && !events ? (
          <div className='h-64 flex items-center justify-center'>
            <Loader2 className='size-6 animate-spin' />
          </div>
        ) : (
          events && <DataTable columns={columns} data={events} />
        )}
      </div>
    </div>
  );
};

export default OrganizerEventsPage;
