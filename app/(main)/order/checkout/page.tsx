import { auth } from '@/auth';
import CheckoutForm from './_components/CheckoutForm';

const Page = async () => {
  const session = await auth();
  return (
    <main>
      <CheckoutForm session={session} />
    </main>
  );
};

export default Page;
