'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';

interface EventPaginationProps {
  totalPages: number;
}

const EventPagination = ({ totalPages }: EventPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentQuery = queryString.parse(searchParams.toString());
  const [currentPage, setCurrentPage] = useState(
    currentQuery.page ? parseInt(currentQuery.page as string) : 1
  );

  useEffect(() => {
    // const nextPage = currentPage + 1;
    if (currentPage === 1) {
      delete currentQuery['page'];
    } else {
      currentQuery.page = currentPage.toString();
    }

    const url = queryString.stringifyUrl(
      {
        url: '/events',
        query: currentQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  }, [currentPage, currentQuery, router]);

  return (
    <div className='flex items-center justify-end gap-3 mt-6 mb-16'>
      <p>
        Page(s) {currentPage} of {totalPages}
      </p>
      <Button
        variant='ghost'
        size='sm'
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className='h-12 bg-white flex items-center justify-center rounded-lg shadow hover:bg-primary hover:text-white transition disabled:shadow-none'>
        <ChevronLeft className='size-6' />
      </Button>
      <Button
        variant='ghost'
        size='sm'
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className='h-12 bg-white flex items-center justify-center rounded-lg shadow hover:bg-primary hover:text-white transition disabled:shadow-none'>
        <ChevronRight className='size-6' />
      </Button>
    </div>
  );
};

export default EventPagination;
