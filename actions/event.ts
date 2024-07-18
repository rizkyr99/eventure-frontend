import { EventDetails, Ticket } from '@/types/event';

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
      `http://localhost:8080/api/v1/locations/regencies/${locationCode}`
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
      `http://localhost:8080/api/v1/events/${eventId}/tickets`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
};
