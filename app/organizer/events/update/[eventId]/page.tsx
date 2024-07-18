import { fetchEventById, fetchTicketTypes } from '@/actions/event';
import EditEventForm from './_components/EditEventForm';

const EditEventPage = async ({ params }: { params: { eventId: string } }) => {
  const event = await fetchEventById(params.eventId);
  const ticketTypes = await fetchTicketTypes(params.eventId);
  console.log(ticketTypes);

  return (
    <main>
      <EditEventForm event={event} ticketTypes={ticketTypes} />
    </main>
  );
};

export default EditEventPage;
