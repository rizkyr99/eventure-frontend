import Hero from '@/app/(main)/_components/Hero';
import EventSection from './_components/EventSection';
import CTA from './_components/CTA';

export default function Home() {
  return (
    <main className='space-y-16'>
      <Hero />
      <EventSection
        title='Featured Events'
        url='/events?category=featured'
        totalEvents={6}
      />
      <EventSection
        title='Online Events'
        url='/events?category=featured'
        totalEvents={3}
      />
      <EventSection
        title='Upcoming Concerts'
        url='/events?category=featured'
        totalEvents={3}
      />
      <CTA />
    </main>
  );
}
