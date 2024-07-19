import { EventDetails, EventSummary, Ticket } from '@/types/event';
import { cookies } from 'next/headers';

export const fetchEventDetails = async (
  eventSlug: string
): Promise<EventDetails | undefined> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/events/slug/${eventSlug}`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchEventById = async (
  eventId: string
): Promise<EventDetails | undefined> => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/events/${eventId}`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchLocationDetails = async (locationCode: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/locations/regencies/${locationCode}`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchTicketTypes = async (
  eventId: string
): Promise<Ticket[] | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}/tickets`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserEvents = async (): Promise<
  EventSummary[] | undefined
> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/events`,
      {
        headers: {
          Cookie: cookies().toString(),
        },
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
