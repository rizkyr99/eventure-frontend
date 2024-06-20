import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <>
      <Image
        src='/assets/Eventure.svg'
        width={220}
        height={48}
        alt='eventure logo'
        className='mb-4'
      />
      <h1 className='text-xl font-semibold text-center mb-6'>
        Forgot Password
      </h1>
      <div className='auth-page-card'>
        <form action='' className='space-y-6'>
          <input
            type='email'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Email address'
          />
          <Button className='w-full'>Reset Password</Button>
        </form>
      </div>
      <Link href='/sign-in' className='text-primary text-sm hover:underline'>
        Back to sign in
      </Link>
    </>
  );
};

export default ForgotPassword;
