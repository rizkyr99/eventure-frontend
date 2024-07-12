'use client';

import { EventSummary } from '@/types/event';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

const fetchEvents = async (queryString: string): Promise<EventSummary[]> => {
  const response = await fetch(
    `http://localhost:8080/api/v1/events?${queryString}`
  );
  const result = await response.json();
  return result.data.content;
};

export const useEvent = () => {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['events', queryString],
    queryFn: () => fetchEvents(queryString),
  });

  return { events, isLoading, error };
};
