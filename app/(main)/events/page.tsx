import EventContainer from './_components/EventContainer';

const EventsPage = () => {
  return (
    <main className='px-4'>
      <section className='py-16'>
        <h1 className='text-5xl font-bold text-center mb-6'>
          Discover the World&apos;s Events
        </h1>
        <p className='max-w-lg mx-auto text-center'>
          From local meetups to global festivals, Eventure connects you to
          unforgettable experiences.
        </p>
      </section>
      <EventContainer />
    </main>
  );
};

export default EventsPage;
