'use client';

import { Button } from '@/components/ui/button';
import { EventSummary } from '@/types/event';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<EventSummary>[] = [
  {
    accessorKey: 'name',
    header: 'Event Name',
  },
  {
    accessorKey: 'startDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          End Date
          <ArrowUpDown className='size-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: 'endDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          End Date
          <ArrowUpDown className='size-4 ml-2' />
        </Button>
      );
    },
  },
  {
    accessorKey: '',
    header: 'Actions',
  },
];
