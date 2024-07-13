import { EventSummary } from '@/types/event';
import { useQuery } from '@tanstack/react-query';

export const useOrganizerEvents = () => {
  const fetchEvents = async (): Promise<EventSummary[]> => {
    const response = await fetch(
      'http://localhost:8080/api/v1/organizer/events',
      {
        credentials: 'include',
      }
    );
    const result = await response.json();
    if (response.ok) {
      return result.data;
    } else {
      return [];
    }
  };

  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  return { events, isLoading, error };
};
