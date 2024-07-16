import { auth } from '@/auth';
import CheckoutForm from './_components/CheckoutForm';
import { redirect } from 'next/navigation';

const Page = async () => {
  const session = await auth();

  if (!session) {
    redirect('/sign-in');
  }

  if (session.user.role !== 'ATTENDEE') {
    redirect('/');
  }

  return (
    <main>
      <CheckoutForm session={session} />
    </main>
  );
};

export default Page;
