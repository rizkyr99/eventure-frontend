'use client';

import { EventSummary } from '@/types/event';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import qs from 'query-string';

const fetchEvents = async (queryString: string) => {
  const parsedQuery = qs.parse(queryString);
  parsedQuery.size = '9';
  queryString = qs.stringify(parsedQuery);

  const response = await fetch(
    `http://localhost:8080/api/v1/events?${queryString}`
  );

  const result = await response.json();
  return result.data;
};

export const useEvent = () => {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const { data, isLoading, error } = useQuery({
    queryKey: ['events', queryString],
    queryFn: () => fetchEvents(queryString),
  });

  return { data, isLoading, error };
};
