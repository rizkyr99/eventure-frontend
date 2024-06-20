import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const SignIn = () => {
  return (
    <>
      <Image
        src='/assets/Eventure.svg'
        width={220}
        height={48}
        alt='eventure logo'
        className='mb-4'
      />
      <h1 className='text-xl font-semibold text-center mb-6'>Sign Up</h1>
      <div className='auth-page-card'>
        <form action='' className='space-y-6'>
          <input
            type='text'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Full name'
          />
          <input
            type='email'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Email address'
          />
          <input
            type='password'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Password'
          />
          <input
            type='password'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Confirm password'
          />
          <input
            type='text'
            className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500 focus-visible:outline-slate-200'
            placeholder='Referral code (optional)'
          />
          <Button className='w-full'>Sign Up</Button>
        </form>
      </div>
      <p className='text-sm'>
        Already have an account?{' '}
        <Link href='/sign-in' className='text-primary hover:underline'>
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignIn;
